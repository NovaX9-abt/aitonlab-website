"""
Riley Voice Agent Server
FastAPI WebSocket relay between browser and Gemini 3.1 Flash Live API.
Includes tool calling for Google Calendar (bookings) and Google Sheets (leads).
"""

import os
import json
import base64
import asyncio
import logging
from datetime import datetime
from zoneinfo import ZoneInfo
from collections import defaultdict

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()  # Must be before tool imports so env vars are available at module level

from google import genai
from google.genai import types
from tools import calendar_tool, sheets_tool

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("riley")

# --- Configuration ---
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")
MODEL = "gemini-3.1-flash-live-preview"

# Rate limiting: track active sessions per IP
active_sessions: dict[str, int] = defaultdict(int)
MAX_SESSIONS_PER_IP = 3


def get_system_prompt() -> str:
    """Generate system prompt with current Kigali date/time."""
    now = datetime.now(ZoneInfo("Africa/Kigali"))
    date_str = now.strftime("%A %B %d, %Y, %I:%M %p")

    return f"""You are Riley, the AI voice assistant for AitonLab — an AI automation agency based in Kigali, Rwanda.

CURRENT DATE AND TIME (Kigali, Rwanda): {date_str}

YOUR PERSONALITY:
- Warm, professional, and genuinely helpful
- Speak naturally and conversationally — you are on a voice call, not a chat
- Keep responses concise (2-3 sentences max per turn unless explaining a service in detail)
- Speak clearly and at a natural pace
- Be knowledgeable about AI automation in the East African business context
- You can speak English and French

ABOUT AITONLAB:
AitonLab builds custom AI automation solutions for service businesses in Rwanda and East Africa.
Website: www.aitonlab.rw
Email: contact@aitonlab.rw
WhatsApp: +250 793 581 847
Location: Kigali, Rwanda

THE THREE SERVICES:

1. VOICE AI AGENT
   - What: Custom AI phone receptionist that answers calls 24/7 in English & French
   - Setup fee: $399–$499 (one-time)
   - Monthly plans:
     * Starter: $129/month (~150 call minutes)
     * Growth: $249/month (~400 call minutes)
     * Pro: $399/month (~900 call minutes)
   - Includes: Rwanda local phone number, lead qualification, appointment booking, call logs, CRM integration, SMS/WhatsApp follow-up
   - Best for: Hotels, clinics, salons, dental offices, real estate agencies
   - Use cases: 24/7 availability inquiries, booking appointments, qualifying leads, reducing missed calls

2. WHATSAPP AUTOMATION
   - What: Automated AI conversations on WhatsApp Business
   - Setup fee: $199–$299 (one-time)
   - Monthly retainer: From $99/month
   - Includes: WhatsApp Business API, custom conversation flows, booking automation, reminders, multilingual support (English/French/Kinyarwanda), Google Sheets/CRM integration, broadcast campaigns
   - Best for: Restaurants, clinics, real estate, salons — any business where clients use WhatsApp
   - Use cases: Instant replies, booking confirmations, appointment reminders, follow-ups

3. SMART LEAD ASSISTANT
   - What: AI-powered lead capture, qualification, and follow-up from website forms and email
   - Setup fee: $249–$349 (one-time)
   - Monthly retainer: From $99/month
   - Includes: Lead capture widget, AI qualification, high-priority alerts to phone, Google Sheets/CRM integration, automated follow-up sequences, analytics dashboard
   - Best for: Consulting firms, agencies, event venues, any business with web presence
   - Use cases: Instant lead classification, priority alerts, automated acknowledgments, CRM pipeline management

PRICING TERMS:
- 50% setup fee upfront to confirm project kickoff
- 14-day paid trial included to test in real conditions
- Refund if pilot doesn't meet agreed KPIs (infrastructure costs non-refundable)
- Delivery: 3–5 business days
- Monthly plans include hosting, AI credits, and infrastructure

YOUR GOALS IN EVERY CONVERSATION:
1. Greet the caller warmly — "Hi, I'm Riley from AitonLab! How can I help you today?"
2. Understand what their business does and their challenges
3. Recommend the most relevant AitonLab service(s)
4. Capture their contact info naturally during conversation (name, phone, email if offered, what they need)
5. Offer to book a free consultation with the AitonLab team
6. Save their lead information using the save_lead tool

TOOL USAGE:
- When the caller wants to book a meeting/consultation, use check_calendar_availability first to find open slots, then book_meeting to confirm
- After you've gathered enough info about the caller (at minimum their name + what they need), use save_lead to record it
- Always confirm details before booking: "Just to confirm, you'd like to meet on [date] at [time]?"
- If you save a lead, don't announce it — just do it naturally in the background

RULES:
- Never make up pricing or features not listed above
- If asked something you don't know, say "I'll have the AitonLab team get back to you on that"
- Don't discuss competitors
- Keep conversations focused on understanding needs and helping the caller
- If someone is just testing or not a real inquiry, be polite and brief
- When suggesting meeting times, suggest slots during Kigali business hours (9 AM - 5 PM, Monday-Friday)
- All times are in Kigali time (Central Africa Time, UTC+2)
"""


# --- Tool Declarations (sent to Gemini) ---
TOOL_DECLARATIONS = [
    {
        "name": "check_calendar_availability",
        "description": "Check available time slots on the AitonLab team calendar for a given date. Use this before booking a meeting to show the caller available times.",
        "parameters": {
            "type": "object",
            "properties": {
                "date": {
                    "type": "string",
                    "description": "Date to check in YYYY-MM-DD format"
                }
            },
            "required": ["date"]
        }
    },
    {
        "name": "book_meeting",
        "description": "Book a consultation meeting on the AitonLab team calendar.",
        "parameters": {
            "type": "object",
            "properties": {
                "date": {
                    "type": "string",
                    "description": "Date in YYYY-MM-DD format"
                },
                "start_time": {
                    "type": "string",
                    "description": "Start time in HH:MM format (24-hour, Kigali time)"
                },
                "duration_minutes": {
                    "type": "integer",
                    "description": "Meeting duration in minutes, default 30"
                },
                "attendee_name": {
                    "type": "string",
                    "description": "Name of the person booking"
                },
                "attendee_email": {
                    "type": "string",
                    "description": "Email of the person booking (optional)"
                },
                "attendee_phone": {
                    "type": "string",
                    "description": "Phone number of the person booking (optional)"
                },
                "notes": {
                    "type": "string",
                    "description": "What the meeting is about"
                }
            },
            "required": ["date", "start_time", "attendee_name"]
        }
    },
    {
        "name": "save_lead",
        "description": "Save a lead's contact information and business needs to the AitonLab leads database. Use this after gathering info about a caller.",
        "parameters": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "Caller's name"
                },
                "phone": {
                    "type": "string",
                    "description": "Caller's phone number"
                },
                "email": {
                    "type": "string",
                    "description": "Caller's email address"
                },
                "business_name": {
                    "type": "string",
                    "description": "Name of the caller's business"
                },
                "service_interest": {
                    "type": "string",
                    "description": "Which AitonLab service they're interested in"
                },
                "notes": {
                    "type": "string",
                    "description": "Summary of what the caller needs and any relevant details"
                }
            },
            "required": ["name"]
        }
    }
]

# --- Tool execution map ---
TOOLS = {
    "check_calendar_availability": calendar_tool.check_availability,
    "book_meeting": calendar_tool.book_meeting,
    "save_lead": sheets_tool.save_lead,
}


def execute_tool(name: str, args: dict) -> dict:
    """Execute a tool function by name with the given arguments."""
    if name not in TOOLS:
        return {"status": "error", "error_message": f"Unknown tool: {name}"}
    try:
        result = TOOLS[name](**args)
        logger.info(f"Tool {name} result: {result}")
        return result
    except Exception as e:
        logger.error(f"Tool {name} error: {e}")
        return {"status": "error", "error_message": str(e)}


async def execute_tool_async(name: str, args: dict) -> dict:
    """Run blocking tool execution in a thread pool to avoid blocking the event loop."""
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, execute_tool, name, args)


# --- FastAPI App ---
app = FastAPI(title="Riley Voice Agent")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health():
    return {"status": "ok", "agent": "Riley", "model": MODEL}


@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()

    # Rate limiting by IP
    client_ip = ws.client.host if ws.client else "unknown"
    if active_sessions[client_ip] >= MAX_SESSIONS_PER_IP:
        await ws.send_json({"type": "error", "message": "Too many active sessions. Please try again later."})
        await ws.close()
        return

    active_sessions[client_ip] += 1
    logger.info(f"New session from {client_ip} (active: {active_sessions[client_ip]})")

    try:
        # Create Gemini client
        client = genai.Client(api_key=GEMINI_API_KEY)

        # Build tool declarations for Gemini
        tools = [types.Tool(function_declarations=[
            types.FunctionDeclaration(**decl) for decl in TOOL_DECLARATIONS
        ])]

        # Configure the live session
        config = types.LiveConnectConfig(
            response_modalities=["AUDIO"],
            speech_config=types.SpeechConfig(
                voice_config=types.VoiceConfig(
                    prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name="Kore")
                )
            ),
            system_instruction=types.Content(
                parts=[types.Part(text=get_system_prompt())]
            ),
            tools=tools,
            input_audio_transcription=types.AudioTranscriptionConfig(),
            output_audio_transcription=types.AudioTranscriptionConfig(),
        )

        async with client.aio.live.connect(model=MODEL, config=config) as session:
            await ws.send_json({"type": "status", "message": "Connected to Riley"})
            logger.info("Gemini Live session connected")

            async def browser_to_gemini():
                """Receive audio from browser, forward to Gemini."""
                try:
                    while True:
                        msg = await ws.receive_text()
                        data = json.loads(msg)

                        if data.get("type") == "audio":
                            audio_bytes = base64.b64decode(data["data"])
                            await session.send_realtime_input(
                                audio=types.Blob(
                                    data=audio_bytes,
                                    mime_type="audio/pcm;rate=16000"
                                )
                            )
                        elif data.get("type") == "end_session":
                            logger.info("Client requested session end")
                            break
                except WebSocketDisconnect:
                    logger.info("Browser disconnected")
                except Exception as e:
                    logger.error(f"browser_to_gemini error: {e}")

            async def gemini_to_browser():
                """Receive responses from Gemini, forward to browser."""
                try:
                    while True:
                        async for response in session.receive():
                            # Audio data
                            if response.data:
                                audio_b64 = base64.b64encode(response.data).decode("utf-8")
                                await ws.send_json({
                                    "type": "audio",
                                    "data": audio_b64
                                })

                            # Input transcript (what user said)
                            if hasattr(response, 'server_content') and response.server_content:
                                sc = response.server_content
                                if hasattr(sc, 'input_transcription') and sc.input_transcription:
                                    text = sc.input_transcription.text if hasattr(sc.input_transcription, 'text') else str(sc.input_transcription)
                                    if text and text.strip():
                                        await ws.send_json({
                                            "type": "input_transcript",
                                            "text": text.strip()
                                        })

                                if hasattr(sc, 'output_transcription') and sc.output_transcription:
                                    text = sc.output_transcription.text if hasattr(sc.output_transcription, 'text') else str(sc.output_transcription)
                                    if text and text.strip():
                                        await ws.send_json({
                                            "type": "output_transcript",
                                            "text": text.strip()
                                        })

                                # Turn complete
                                if hasattr(sc, 'turn_complete') and sc.turn_complete:
                                    await ws.send_json({"type": "turn_complete"})

                                # Interrupted (barge-in)
                                if hasattr(sc, 'interrupted') and sc.interrupted:
                                    await ws.send_json({"type": "interrupted"})

                            # Tool calls
                            if hasattr(response, 'tool_call') and response.tool_call:
                                for fc in response.tool_call.function_calls:
                                    try:
                                        tool_name = fc.name
                                        # Handle args from Gemini (may be proto MapComposite)
                                        raw_args = fc.args
                                        if raw_args is None:
                                            tool_args = {}
                                        elif isinstance(raw_args, dict):
                                            tool_args = raw_args
                                        else:
                                            try:
                                                tool_args = dict(raw_args)
                                            except Exception:
                                                tool_args = json.loads(str(raw_args))

                                        logger.info(f"Tool call: {tool_name}({tool_args})")

                                        await ws.send_json({
                                            "type": "tool_call",
                                            "name": tool_name,
                                            "args": tool_args
                                        })

                                        # Execute the tool in a thread pool (non-blocking)
                                        result = await execute_tool_async(tool_name, tool_args)

                                        await ws.send_json({
                                            "type": "tool_result",
                                            "name": tool_name,
                                            "status": result.get("status", "unknown")
                                        })

                                        # Send result back to Gemini
                                        await session.send_tool_response(
                                            function_responses=[
                                                types.FunctionResponse(
                                                    name=tool_name,
                                                    response=result
                                                )
                                            ]
                                        )
                                    except Exception as tool_err:
                                        logger.error(f"Tool call handling error: {tool_err}", exc_info=True)
                                        # Send error result back to Gemini so it can continue
                                        try:
                                            await session.send_tool_response(
                                                function_responses=[
                                                    types.FunctionResponse(
                                                        name=fc.name,
                                                        response={"status": "error", "error_message": str(tool_err)}
                                                    )
                                                ]
                                            )
                                        except Exception:
                                            pass

                except Exception as e:
                    logger.error(f"gemini_to_browser error: {e}")
                    try:
                        await ws.send_json({
                            "type": "error",
                            "message": "Session ended unexpectedly. Please try again."
                        })
                    except Exception:
                        pass

            # Run both tasks concurrently
            await asyncio.gather(
                browser_to_gemini(),
                gemini_to_browser(),
                return_exceptions=True
            )

    except Exception as e:
        logger.error(f"Session error: {e}")
        try:
            await ws.send_json({"type": "error", "message": str(e)})
        except Exception:
            pass
    finally:
        active_sessions[client_ip] = max(0, active_sessions[client_ip] - 1)
        logger.info(f"Session ended for {client_ip} (active: {active_sessions[client_ip]})")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
