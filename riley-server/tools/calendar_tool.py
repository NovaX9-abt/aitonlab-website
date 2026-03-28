"""
Google Calendar tool for Riley.
Uses OAuth 2.0 to access the AitonLab team calendar.
Credentials and service are cached for fast repeated calls.
"""

import os
import json
import time
import logging
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

logger = logging.getLogger("riley.calendar")

from dotenv import load_dotenv
from google.oauth2.credentials import Credentials

load_dotenv()
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

# --- Cached clients (built once, reused across calls) ---
_cached_creds = None
_cached_service = None


def _get_credentials():
    """Load or refresh OAuth credentials, with caching."""
    global _cached_creds
    t0 = time.perf_counter()
    if _cached_creds and _cached_creds.valid:
        logger.info(f"[TIMING] _get_credentials (cached, valid): {time.perf_counter() - t0:.3f}s")
        return _cached_creds

    creds = None
    if _cached_creds and _cached_creds.expired and _cached_creds.refresh_token:
        logger.info("[TIMING] Refreshing expired cached credentials...")
        _cached_creds.refresh(Request())
        with open(TOKEN_FILE, "w") as f:
            f.write(_cached_creds.to_json())
        logger.info(f"[TIMING] _get_credentials (refresh): {time.perf_counter() - t0:.3f}s")
        return _cached_creds

    if os.path.exists(TOKEN_FILE):
        creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            logger.info("[TIMING] Refreshing credentials from token file...")
            creds.refresh(Request())
            with open(TOKEN_FILE, "w") as f:
                f.write(creds.to_json())
        else:
            raise RuntimeError(
                "No valid token.json found. Run auth_setup.py first to authenticate."
            )
    _cached_creds = creds
    logger.info(f"[TIMING] _get_credentials (fresh load): {time.perf_counter() - t0:.3f}s")
    return creds


def _get_service():
    """Build the Google Calendar API service, with caching."""
    global _cached_service
    t0 = time.perf_counter()
    if _cached_service:
        _get_credentials()
        logger.info(f"[TIMING] _get_service (cached): {time.perf_counter() - t0:.3f}s")
        return _cached_service
    creds = _get_credentials()
    _cached_service = build("calendar", "v3", credentials=creds, cache_discovery=False)
    logger.info(f"[TIMING] _get_service (fresh build): {time.perf_counter() - t0:.3f}s")
    return _cached_service


def check_availability(date: str, timezone: str = TIMEZONE) -> dict:
    """
    Check available 30-minute slots on a given date.
    """
    try:
        t_total = time.perf_counter()
        tz = ZoneInfo(timezone)
        day = datetime.strptime(date, "%Y-%m-%d").replace(tzinfo=tz)

        start_of_day = day.replace(hour=9, minute=0, second=0)
        end_of_day = day.replace(hour=17, minute=0, second=0)

        service = _get_service()

        body = {
            "timeMin": start_of_day.isoformat(),
            "timeMax": end_of_day.isoformat(),
            "timeZone": timezone,
            "items": [{"id": CALENDAR_ID}]
        }
        t_api = time.perf_counter()
        result = service.freebusy().query(body=body).execute()
        logger.info(f"[TIMING] Calendar FreeBusy API call: {time.perf_counter() - t_api:.3f}s")
        busy_periods = result["calendars"].get(CALENDAR_ID, {}).get("busy", [])

        busy_ranges = []
        for period in busy_periods:
            busy_start = datetime.fromisoformat(period["start"]).astimezone(tz)
            busy_end = datetime.fromisoformat(period["end"]).astimezone(tz)
            busy_ranges.append((busy_start, busy_end))

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
    """
    try:
        t_total = time.perf_counter()
        tz = ZoneInfo(TIMEZONE)
        start_dt = datetime.strptime(f"{date} {start_time}", "%Y-%m-%d %H:%M").replace(tzinfo=tz)
        end_dt = start_dt + timedelta(minutes=duration_minutes)

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

        if attendee_email:
            event["attendees"] = [{"email": attendee_email}]

        service = _get_service()
        t_api = time.perf_counter()
        created = service.events().insert(
            calendarId=CALENDAR_ID,
            body=event,
            sendUpdates="all" if attendee_email else "none"
        ).execute()
        logger.info(f"[TIMING] Calendar insert event API call: {time.perf_counter() - t_api:.3f}s")
        logger.info(f"[TIMING] book_meeting total: {time.perf_counter() - t_total:.3f}s")

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
