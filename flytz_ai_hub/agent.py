"""The Health Agent — a Claude-powered agent that logs and analyzes your health data.

Uses the Anthropic SDK's tool runner: Claude decides when to call the logging and
query tools, the SDK executes them and loops until the answer is ready.
"""

from __future__ import annotations

import json
from datetime import date

import anthropic
from anthropic import beta_tool

from . import db

MODEL = "claude-opus-4-8"

SYSTEM_PROMPT = """You are the Flytz Health Agent — a warm, practical personal health companion.
You help the user track sleep, meals, and health metrics, and you analyze their data for trends.

Today's date is {today}.

Guidelines:
- When the user mentions something loggable (sleep, food, weight, mood, steps...), log it
  with the appropriate tool. Estimate nutrition (calories/protein/carbs/fat) for meals from
  the description when the user doesn't give numbers, and say the numbers are estimates.
- When asked about trends or how they're doing, query the data first and ground every claim
  in the actual records. If there isn't enough data, say so.
- Be encouraging but honest. Give specific, actionable suggestions, not generic wellness advice.
- You are not a doctor. For anything that sounds medical (symptoms, medication, conditions),
  suggest seeing a professional rather than diagnosing.
"""


@beta_tool
def log_sleep(hours: float, quality: int | None = None, wakeups: int | None = None,
              day: str | None = None, notes: str | None = None) -> str:
    """Log a night of sleep.

    Args:
        hours: Total hours slept.
        quality: Self-rated quality 1-10, if the user mentions it.
        wakeups: Number of times the user woke up, if mentioned.
        day: ISO date (YYYY-MM-DD) the sleep ended. Defaults to today.
        notes: Anything notable ("late coffee", "stressful day").
    """
    db.log_sleep(hours=hours, quality=quality, wakeups=wakeups, day=day, notes=notes)
    return f"Logged {hours}h of sleep for {day or db.today()}."


@beta_tool
def log_meal(description: str, meal_type: str | None = None, calories: int | None = None,
             protein_g: float | None = None, carbs_g: float | None = None,
             fat_g: float | None = None, day: str | None = None) -> str:
    """Log a meal or snack. Estimate the macros from the description if not provided.

    Args:
        description: What was eaten.
        meal_type: One of breakfast, lunch, dinner, snack.
        calories: Estimated or reported calories.
        protein_g: Protein grams.
        carbs_g: Carb grams.
        fat_g: Fat grams.
        day: ISO date (YYYY-MM-DD). Defaults to today.
    """
    db.log_meal(description=description, meal_type=meal_type, calories=calories,
                protein_g=protein_g, carbs_g=carbs_g, fat_g=fat_g, day=day)
    return f"Logged {meal_type or 'meal'}: {description}"


@beta_tool
def log_metric(name: str, value: float, unit: str | None = None, day: str | None = None) -> str:
    """Log a health metric such as weight, resting_hr, hrv, steps, mood (1-10), energy (1-10).

    Args:
        name: Metric name in snake_case.
        value: Numeric value.
        unit: Unit, e.g. kg, bpm, ms.
        day: ISO date (YYYY-MM-DD). Defaults to today.
    """
    db.log_metric(name, value, unit=unit, day=day)
    return f"Logged {name} = {value}{' ' + unit if unit else ''}."


@beta_tool
def get_health_data(table: str, since_days: int = 30) -> str:
    """Fetch the user's recorded health data as JSON so you can analyze it.

    Args:
        table: One of "sleep", "meals", "metrics".
        since_days: How many days back to fetch (default 30).
    """
    rows = db.query(table, since_days=since_days)
    return json.dumps(rows) if rows else f"No {table} records in the last {since_days} days."


TOOLS = [log_sleep, log_meal, log_metric, get_health_data]


def chat_turn(client: anthropic.Anthropic, history: list[dict], user_message: str) -> str:
    """Run one conversational turn; mutates history in place. Returns the reply text."""
    history.append({"role": "user", "content": user_message})
    runner = client.beta.messages.tool_runner(
        model=MODEL,
        max_tokens=4096,
        system=SYSTEM_PROMPT.format(today=date.today().isoformat()),
        tools=TOOLS,
        messages=history,
    )
    last = None
    for message in runner:
        last = message
        history.append({"role": "assistant", "content": message.content})
        tool_response = runner.generate_tool_call_response()
        if tool_response is not None:
            history.append(tool_response)
    return "".join(b.text for b in (last.content if last else []) if b.type == "text")
