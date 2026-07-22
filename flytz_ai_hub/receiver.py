"""Auto-sync receiver for Apple Health data.

Runs a small local HTTP server that accepts JSON pushed by the iPhone app
"Health Auto Export" (REST API export target). Point the app at
http://<your-computer-ip>:8777/ingest with an "api-key" header matching
FLYTZ_API_KEY, set a schedule (e.g. hourly), and your Apple Watch data
flows into the hub with no manual exports.

Health Auto Export payload shape:
    {"data": {"metrics": [{"name": "...", "units": "...", "data": [{...}]}]}}
"""

from __future__ import annotations

import json
import os
from http.server import BaseHTTPRequestHandler, HTTPServer

from . import db

API_KEY = os.environ.get("FLYTZ_API_KEY", "")

# Health Auto Export metric name -> (metric name in our DB, unit)
METRIC_MAP = {
    "weight_body_mass": ("weight", "kg"),
    "resting_heart_rate": ("resting_hr", "bpm"),
    "heart_rate_variability": ("hrv", "ms"),
    "step_count": ("steps", "count"),
    "active_energy": ("active_energy", "kcal"),
    "vo2_max": ("vo2_max", "ml/kg/min"),
    "respiratory_rate": ("respiratory_rate", "br/min"),
    "blood_oxygen_saturation": ("spo2", "%"),
}


def ingest(payload: dict) -> dict:
    """Store a Health Auto Export payload. Returns counts per category."""
    counts = {"sleep": 0, "metrics": 0, "skipped": 0}
    for metric in payload.get("data", {}).get("metrics", []):
        name = metric.get("name", "")
        for point in metric.get("data", []):
            day = (point.get("date") or "")[:10] or None
            if name == "sleep_analysis":
                hours = point.get("asleep") or point.get("totalSleep")
                if hours:
                    db.log_sleep(
                        hours=round(float(hours), 2),
                        deep_hours=point.get("deep"),
                        rem_hours=point.get("rem"),
                        day=day,
                        source="apple_watch",
                    )
                    counts["sleep"] += 1
                else:
                    counts["skipped"] += 1
            else:
                qty = point.get("qty") or point.get("avg")
                if qty is None:
                    counts["skipped"] += 1
                    continue
                if name in METRIC_MAP:
                    db_name, unit = METRIC_MAP[name]
                else:
                    # Unknown metric: keep under its exported name so no data is lost
                    db_name, unit = name, metric.get("units")
                db.log_metric(db_name, float(qty), unit=unit, day=day, source="apple_watch")
                counts["metrics"] += 1
    return counts


class Handler(BaseHTTPRequestHandler):
    def _reply(self, code: int, body: dict):
        data = json.dumps(body).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_POST(self):
        if self.path != "/ingest":
            return self._reply(404, {"error": "not found"})
        if API_KEY and self.headers.get("api-key") != API_KEY:
            return self._reply(401, {"error": "bad api key"})
        try:
            length = int(self.headers.get("Content-Length", 0))
            payload = json.loads(self.rfile.read(length))
        except (ValueError, json.JSONDecodeError):
            return self._reply(400, {"error": "invalid JSON"})
        counts = ingest(payload)
        print(f"[receiver] ingested: {counts}")
        self._reply(200, {"ok": True, **counts})

    def do_GET(self):
        if self.path == "/health":
            return self._reply(200, {"ok": True})
        self._reply(404, {"error": "not found"})

    def log_message(self, *args):  # quiet default request logging
        pass


def serve(host: str = "127.0.0.1", port: int = 8777):
    # The phone posts over your home Wi-Fi, so you'll usually run with
    # --host <your LAN IP>. Require the API key for any non-local bind.
    if host != "127.0.0.1" and not API_KEY:
        raise SystemExit(
            "Refusing to listen beyond localhost without FLYTZ_API_KEY set. "
            "Set it and configure the same value as an 'api-key' header in Health Auto Export."
        )
    print(f"Listening on http://{host}:{port}/ingest — point Health Auto Export here.")
    HTTPServer((host, port), Handler).serve_forever()
