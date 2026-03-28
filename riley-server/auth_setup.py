"""
One-time OAuth setup script for Riley.
Run this once to authenticate with Google Calendar + Sheets.
It will open your browser, you log in, and a token.json is saved.
After that, the server uses token.json automatically.

Usage:
    python auth_setup.py
"""

import os
import json
from google_auth_oauthlib.flow import InstalledAppFlow
from dotenv import load_dotenv

load_dotenv()

SCOPES = [
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/calendar.events",
    "https://www.googleapis.com/auth/spreadsheets",
]

CREDENTIALS_FILE = os.getenv("GOOGLE_OAUTH_CREDENTIALS", "client_secret.json")
TOKEN_FILE = "token.json"


def main():
    print("=" * 50)
    print("Riley Voice Agent — Google OAuth Setup")
    print("=" * 50)
    print()

    if not os.path.exists(CREDENTIALS_FILE):
        print(f"ERROR: {CREDENTIALS_FILE} not found!")
        print("Place your OAuth client JSON file in the riley-server/ directory.")
        print("Download it from Google Cloud Console → Credentials → OAuth 2.0 Client IDs")
        return

    if os.path.exists(TOKEN_FILE):
        print(f"token.json already exists. Delete it first if you want to re-authenticate.")
        return

    print("Opening browser for Google login...")
    print("Grant access to Calendar and Sheets when prompted.")
    print()

    flow = InstalledAppFlow.from_client_secrets_file(CREDENTIALS_FILE, SCOPES)
    creds = flow.run_local_server(port=0)

    with open(TOKEN_FILE, "w") as f:
        f.write(creds.to_json())

    print()
    print(f"Success! token.json saved.")
    print("The Riley server can now access your Calendar and Sheets.")
    print("You can start the server with: python server.py")


if __name__ == "__main__":
    main()
