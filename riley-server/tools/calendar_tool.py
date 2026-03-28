"""
Google Calendar tool for Riley.
Uses OAuth 2.0 to access the AitonLab team calendar.
"""

import os
import json
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

from dotenv import load_dotenv
from google.oauth2.credentials import Credentials

load_dotenv()
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

SCOPES = [
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/calendar.events",
    "https://www.googleapis.com/auth/spreadsheets",
]
TIMEZONE = "Africa/Kigali"
CALENDAR_ID = os.getenv("GOOGLE_CALENDAR_ID", "primary")
TOKEN_FILE = os.path.join(os.path.dirname(__file__), "..", "token.json")
CREDENTIALS_FILE = os.path.join(
    os.path.dirname(__file__), "..",
    os.getenv("GOOGLE_OAUTH_CREDENTIALS", "client_secret.json")
)


def _get_credentials():
    """Load or refresh OAuth credentials."""
    creds = None
    if os.path.exists(TOKEN_FILE):
        creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
            with open(TOKEN_FILE, "w") as f:
                f.write(creds.to_json())
        else:
            raise RuntimeError(
                "No valid token.json found. Run auth_setup.py first to authenticate."
            )
    return creds


def _get_service():
    """Build the Google Calendar API service."""
    creds = _get_credentials()
    return build("calendar", "v3", credentials=creds)


def check_availability(date: str, timezone: str = TIMEZONE) -> dict:
    """
    Check available 30-minute slots on a given date.
    Args:
        date: Date string in YYYY-MM-DD format
        timezone: Timezone string, defaults to Africa/Kigali
    Returns:
        Dict with available time slots
    """
    try:
        tz = ZoneInfo(timezone)
        day = datetime.strptime(date, "%Y-%m-%d").replace(tzinfo=tz)

        # Business hours: 9 AM to 5 PM
        start_of_day = day.replace(hour=9, minute=0, second=0)
        end_of_day = day.replace(hour=17, minute=0, second=0)

        service = _get_service()

        # Get busy times
        body = {
            "timeMin": start_of_day.isoformat(),
            "timeMax": end_of_day.isoformat(),
            "timeZone": timezone,
            "items": [{"id": CALENDAR_ID}]
        }
        result = service.freebusy().query(body=body).execute()
        busy_periods = result["calendars"].get(CALENDAR_ID, {}).get("busy", [])

        # Parse busy periods
        busy_ranges = []
        for period in busy_periods:
            busy_start = datetime.fromisoformat(period["start"]).astimezone(tz)
            busy_end = datetime.fromisoformat(period["end"]).astimezone(tz)
            busy_ranges.append((busy_start, busy_end))

        # Generate available 30-min slots
        available_slots = []
        current = start_of_day
        while current + timedelta(minutes=30) <= end_of_day:
            slot_end = current + timedelta(minutes=30)
            is_free = True
            for busy_start, busy_end in busy_ranges:
                if current < busy_end and slot_end > busy_start:
                    is_free = False
                    break
            if is_free:
                available_slots.append(current.strftime("%H:%M"))
            current += timedelta(minutes=30)

        if not available_slots:
            return {
                "status": "success",
                "date": date,
                "message": f"No available slots on {date}. All times between 9 AM and 5 PM are booked.",
                "available_slots": []
            }

        return {
            "status": "success",
            "date": date,
            "available_slots": available_slots,
            "timezone": timezone,
            "message": f"Found {len(available_slots)} available 30-minute slots on {date}."
        }

    except RuntimeError as e:
        return {"status": "error", "error_message": str(e)}
    except Exception as e:
        return {"status": "error", "error_message": f"Calendar error: {str(e)}"}


def book_meeting(
    date: str,
    start_time: str,
    attendee_name: str,
    duration_minutes: int = 30,
    attendee_email: str = None,
    attendee_phone: str = None,
    notes: str = None
) -> dict:
    """
    Book a meeting on the AitonLab calendar.
    Args:
        date: Date in YYYY-MM-DD format
        start_time: Start time in HH:MM format (24h, Kigali time)
        attendee_name: Name of the person booking
        duration_minutes: Duration in minutes (default 30)
        attendee_email: Email (optional)
        attendee_phone: Phone (optional)
        notes: What the meeting is about (optional)
    Returns:
        Dict with booking confirmation
    """
    try:
        tz = ZoneInfo(TIMEZONE)
        start_dt = datetime.strptime(f"{date} {start_time}", "%Y-%m-%d %H:%M").replace(tzinfo=tz)
        end_dt = start_dt + timedelta(minutes=duration_minutes)

        # Build description
        description_parts = [f"Booked by Riley Voice Agent"]
        if attendee_phone:
            description_parts.append(f"Phone: {attendee_phone}")
        if notes:
            description_parts.append(f"Notes: {notes}")
        description = "\n".join(description_parts)

        event = {
            "summary": f"AitonLab Consultation — {attendee_name}",
            "description": description,
            "start": {
                "dateTime": start_dt.isoformat(),
                "timeZone": TIMEZONE,
            },
            "end": {
                "dateTime": end_dt.isoformat(),
                "timeZone": TIMEZONE,
            },
            "reminders": {
                "useDefault": False,
                "overrides": [
                    {"method": "popup", "minutes": 30},
                ],
            },
        }

        # Add attendee email if provided
        if attendee_email:
            event["attendees"] = [{"email": attendee_email}]

        service = _get_service()
        created = service.events().insert(
            calendarId=CALENDAR_ID,
            body=event,
            sendUpdates="all" if attendee_email else "none"
        ).execute()

        return {
            "status": "success",
            "event_id": created.get("id"),
            "message": f"Meeting booked! {attendee_name} — {date} at {start_time} Kigali time ({duration_minutes} min).",
            "date": date,
            "time": start_time,
            "duration_minutes": duration_minutes
        }

    except RuntimeError as e:
        return {"status": "error", "error_message": str(e)}
    except Exception as e:
        return {"status": "error", "error_message": f"Booking error: {str(e)}"}
