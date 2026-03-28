"""
Google Sheets tool for Riley.
Uses OAuth 2.0 to write leads to the Riley Leads spreadsheet.
Credentials and sheet are cached for fast repeated calls.
"""

import os
import time
import logging
from datetime import datetime
from zoneinfo import ZoneInfo

logger = logging.getLogger("riley.sheets")

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

# --- Cached clients (built once, reused across calls) ---
_cached_creds = None
_cached_sheet = None


def _get_credentials():
    """Load or refresh OAuth credentials, with caching."""
    global _cached_creds
    t0 = time.perf_counter()
    if _cached_creds and _cached_creds.valid:
        logger.info(f"[TIMING] sheets _get_credentials (cached): {time.perf_counter() - t0:.3f}s")
        return _cached_creds

    if _cached_creds and _cached_creds.expired and _cached_creds.refresh_token:
        logger.info("[TIMING] Refreshing expired sheets credentials...")
        _cached_creds.refresh(Request())
        with open(TOKEN_FILE, "w") as f:
            f.write(_cached_creds.to_json())
        logger.info(f"[TIMING] sheets _get_credentials (refresh): {time.perf_counter() - t0:.3f}s")
        return _cached_creds

    creds = None
    if os.path.exists(TOKEN_FILE):
        creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            logger.info("[TIMING] Refreshing sheets credentials from file...")
            creds.refresh(Request())
            with open(TOKEN_FILE, "w") as f:
                f.write(creds.to_json())
        else:
            raise RuntimeError(
                "No valid token.json found. Run auth_setup.py first to authenticate."
            )
    _cached_creds = creds
    logger.info(f"[TIMING] sheets _get_credentials (fresh): {time.perf_counter() - t0:.3f}s")
    return creds


def _get_sheet():
    """Open the Riley Leads spreadsheet, with caching."""
    global _cached_sheet
    t0 = time.perf_counter()
    if _cached_sheet:
        _get_credentials()
        logger.info(f"[TIMING] _get_sheet (cached): {time.perf_counter() - t0:.3f}s")
        return _cached_sheet
    creds = _get_credentials()
    t_open = time.perf_counter()
    gc = gspread.authorize(creds)
    _cached_sheet = gc.open_by_key(SHEET_ID).sheet1
    logger.info(f"[TIMING] _get_sheet (fresh open): {time.perf_counter() - t_open:.3f}s")
    logger.info(f"[TIMING] _get_sheet total: {time.perf_counter() - t0:.3f}s")
    return _cached_sheet


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
    """
    try:
        t_total = time.perf_counter()
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
            "New"
        ]
        t_api = time.perf_counter()
        sheet.append_row(row, value_input_option="USER_ENTERED")
        logger.info(f"[TIMING] Sheets append_row API call: {time.perf_counter() - t_api:.3f}s")
        logger.info(f"[TIMING] save_lead total: {time.perf_counter() - t_total:.3f}s")

        return {
            "status": "success",
            "message": f"Lead saved: {name}",
            "timestamp": timestamp
        }

    except RuntimeError as e:
        return {"status": "error", "error_message": str(e)}
    except Exception as e:
        return {"status": "error", "error_message": f"Sheets error: {str(e)}"}
