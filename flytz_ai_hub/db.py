"""Local SQLite storage for health data (~/.flytz/health.db)."""

from __future__ import annotations

import os
import sqlite3
from datetime import date, datetime, timedelta
from pathlib import Path

DB_PATH = Path(os.environ.get("FLYTZ_DB", Path.home() / ".flytz" / "health.db"))

SCHEMA = """
CREATE TABLE IF NOT EXISTS sleep (
    id INTEGER PRIMARY KEY,
    date TEXT NOT NULL,
    hours REAL NOT NULL,
    quality INTEGER,            -- 1-10 self-rated or from device
    wakeups INTEGER,
    deep_hours REAL,
    rem_hours REAL,
    source TEXT DEFAULT 'manual',
    notes TEXT,
    created_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY,
    date TEXT NOT NULL,
    meal_type TEXT,             -- breakfast | lunch | dinner | snack
    description TEXT NOT NULL,
    calories INTEGER,
    protein_g REAL,
    carbs_g REAL,
    fat_g REAL,
    source TEXT DEFAULT 'manual',
    created_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS metrics (
    id INTEGER PRIMARY KEY,
    date TEXT NOT NULL,
    name TEXT NOT NULL,         -- weight, resting_hr, hrv, steps, mood, energy, ...
    value REAL NOT NULL,
    unit TEXT,
    source TEXT DEFAULT 'manual',
    created_at TEXT DEFAULT (datetime('now'))
);
"""


def connect() -> sqlite3.Connection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.executescript(SCHEMA)
    return conn


def today() -> str:
    return date.today().isoformat()


def log_sleep(hours, quality=None, wakeups=None, deep_hours=None, rem_hours=None,
              day=None, source="manual", notes=None) -> int:
    with connect() as c:
        cur = c.execute(
            "INSERT INTO sleep (date, hours, quality, wakeups, deep_hours, rem_hours, source, notes)"
            " VALUES (?,?,?,?,?,?,?,?)",
            (day or today(), hours, quality, wakeups, deep_hours, rem_hours, source, notes),
        )
        return cur.lastrowid


def log_meal(description, meal_type=None, calories=None, protein_g=None,
             carbs_g=None, fat_g=None, day=None, source="manual") -> int:
    with connect() as c:
        cur = c.execute(
            "INSERT INTO meals (date, meal_type, description, calories, protein_g, carbs_g, fat_g, source)"
            " VALUES (?,?,?,?,?,?,?,?)",
            (day or today(), meal_type, description, calories, protein_g, carbs_g, fat_g, source),
        )
        return cur.lastrowid


def log_metric(name, value, unit=None, day=None, source="manual") -> int:
    with connect() as c:
        cur = c.execute(
            "INSERT INTO metrics (date, name, value, unit, source) VALUES (?,?,?,?,?)",
            (day or today(), name, value, unit, source),
        )
        return cur.lastrowid


def query(table: str, since_days: int = 30) -> list[dict]:
    if table not in ("sleep", "meals", "metrics"):
        raise ValueError(f"unknown table: {table}")
    cutoff = (date.today() - timedelta(days=since_days)).isoformat()
    with connect() as c:
        rows = c.execute(
            f"SELECT * FROM {table} WHERE date >= ? ORDER BY date DESC, id DESC", (cutoff,)
        ).fetchall()
    return [dict(r) for r in rows]
