"""Bevel connector.

Bevel (bevel.health) does not yet expose a public API or MCP server — it's one of
their most requested features. Until it ships, this connector imports data exports:

- A JSON export with top-level "sleep", "meals", and/or "metrics" arrays
  (the shape this project defines — easy to produce from any export by hand or script).
- An Apple Health XML export (export.xml) — Bevel reads/writes Apple Health, so
  exporting from the Health app captures most of what Bevel tracks.

When Bevel ships an official API, only `sync_api()` needs implementing; the rest of
the hub is unchanged.
"""

from __future__ import annotations

import json
import xml.etree.ElementTree as ET
from pathlib import Path

from .. import db
from .base import HealthConnector, SyncResult

# Apple Health record types worth importing as metrics
APPLE_METRICS = {
    "HKQuantityTypeIdentifierBodyMass": ("weight", "kg"),
    "HKQuantityTypeIdentifierRestingHeartRate": ("resting_hr", "bpm"),
    "HKQuantityTypeIdentifierHeartRateVariabilitySDNN": ("hrv", "ms"),
    "HKQuantityTypeIdentifierStepCount": ("steps", "count"),
}


class BevelConnector(HealthConnector):
    name = "bevel"

    def sync(self, path: str) -> SyncResult:
        p = Path(path)
        if not p.exists():
            raise FileNotFoundError(path)
        if p.suffix == ".json":
            return self._sync_json(p)
        if p.suffix == ".xml":
            return self._sync_apple_health(p)
        raise ValueError("Unsupported export format — expected .json or .xml (Apple Health)")

    def sync_api(self) -> SyncResult:
        raise NotImplementedError(
            "Bevel has no public API yet. Vote for it at feedback.bevel.health, "
            "and use a data export with `flytz health sync <file>` in the meantime."
        )

    def _sync_json(self, p: Path) -> SyncResult:
        data = json.loads(p.read_text())
        result = SyncResult()
        for s in data.get("sleep", []):
            db.log_sleep(
                hours=s["hours"], quality=s.get("quality"), wakeups=s.get("wakeups"),
                deep_hours=s.get("deep_hours"), rem_hours=s.get("rem_hours"),
                day=s.get("date"), source="bevel",
            )
            result.sleep_records += 1
        for m in data.get("meals", []):
            db.log_meal(
                description=m["description"], meal_type=m.get("meal_type"),
                calories=m.get("calories"), protein_g=m.get("protein_g"),
                carbs_g=m.get("carbs_g"), fat_g=m.get("fat_g"),
                day=m.get("date"), source="bevel",
            )
            result.meal_records += 1
        for x in data.get("metrics", []):
            db.log_metric(x["name"], x["value"], unit=x.get("unit"),
                          day=x.get("date"), source="bevel")
            result.metric_records += 1
        return result

    def _sync_apple_health(self, p: Path) -> SyncResult:
        result = SyncResult()
        # iterparse: Apple Health exports can be hundreds of MB
        for _, el in ET.iterparse(p, events=("end",)):
            if el.tag != "Record":
                continue
            rtype = el.get("type", "")
            day = (el.get("startDate") or "")[:10]
            if rtype in APPLE_METRICS:
                name, unit = APPLE_METRICS[rtype]
                try:
                    db.log_metric(name, float(el.get("value")), unit=unit,
                                  day=day, source="apple_health")
                    result.metric_records += 1
                except (TypeError, ValueError):
                    result.warnings.append(f"skipped {rtype} on {day}: bad value")
            elif rtype == "HKCategoryTypeIdentifierSleepAnalysis":
                # asleep intervals; convert duration to hours
                try:
                    from datetime import datetime
                    fmt = "%Y-%m-%d %H:%M:%S %z"
                    start = datetime.strptime(el.get("startDate"), fmt)
                    end = datetime.strptime(el.get("endDate"), fmt)
                    hours = (end - start).total_seconds() / 3600
                    if "Asleep" in (el.get("value") or "") and hours > 0:
                        db.log_sleep(hours=round(hours, 2), day=day, source="apple_health")
                        result.sleep_records += 1
                except (TypeError, ValueError):
                    result.warnings.append(f"skipped sleep record on {day}")
            el.clear()
        return result
