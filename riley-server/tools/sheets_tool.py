"""
Google Sheets tool for Riley.
Uses OAuth 2.0 to write leads to the Riley Leads spreadsheet.
"""

import os
from datetime import datetime
from zoneinfo import ZoneInfo

from dotenv import load_dotenv
import gspread

load_dotenv()
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request

SCOPES = [
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/calendar.events",
    "https://www.googleapis.com/auth/spreadsheets",
]
TIMEZONE = "Africa/Kigali"
SHEET_ID = os.getenv("GOOGLE_SHEET_ID")
TOKEN_FILE = os.path.join(os.path.dirname(__file__), "..", "token.json")


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


def _get_sheet():
    """Open the Riley Leads spreadsheet."""
    creds = _get_credentials()
    gc = gspread.authorize(creds)
    return gc.open_by_key(SHEET_ID).sheet1


def save_lead(
    name: str,
    phone: str = None,
    email: str = None,
    business_name: str = None,
    service_interest: str = None,
    notes: str = None
) -> dict:
    """
    Save a lead to the Riley Leads Google Sheet.
    Args:
        name: Caller's name (required)
        phone: Phone number (optional)
        email: Email address (optional)
        business_name: Business name (optional)
        service_interest: Which service they want (optional)
        notes: Summary of their needs (optional)
    Returns:
        Dict with confirmation
    """
    try:
        now = datetime.now(ZoneInfo(TIMEZONE))
        timestamp = now.strftime("%Y-%m-%d %H:%M:%S")

        sheet = _get_sheet()
        row = [
            timestamp,
            name or "",
            phone or "",
            email or "",
            business_name or "",
            service_interest or "",
            notes or "",
            "New"  # Booking Status column
        ]
        sheet.append_row(row, value_input_option="USER_ENTERED")

        return {
            "status": "success",
            "message": f"Lead saved: {name}",
            "timestamp": timestamp
        }

    except RuntimeError as e:
        return {"status": "error", "error_message": str(e)}
    except Exception as e:
        return {"status": "error", "error_message": f"Sheets error: {str(e)}"}
