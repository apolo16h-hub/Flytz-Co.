"""CLI for the Flytz AI Hub. Run `python -m flytz_ai_hub --help`."""

from __future__ import annotations

import argparse
import sys

from . import db


def cmd_chat(_args):
    import anthropic
    from .agent import chat_turn

    client = anthropic.Anthropic()
    history: list[dict] = []
    print("Flytz Health Agent — tell me about your sleep, meals, or how you're feeling.")
    print("(Ctrl-D or 'quit' to exit)\n")
    while True:
        try:
            user = input("you> ").strip()
        except (EOFError, KeyboardInterrupt):
            print()
            break
        if not user or user.lower() in ("quit", "exit"):
            break
        reply = chat_turn(client, history, user)
        print(f"\nagent> {reply}\n")


def cmd_log_sleep(args):
    db.log_sleep(hours=args.hours, quality=args.quality, wakeups=args.wakeups, day=args.date)
    print(f"Logged {args.hours}h sleep.")


def cmd_log_meal(args):
    db.log_meal(description=args.description, meal_type=args.meal,
                calories=args.calories, day=args.date)
    print(f"Logged meal: {args.description}")


def cmd_log_metric(args):
    db.log_metric(args.name, args.value, unit=args.unit, day=args.date)
    print(f"Logged {args.name} = {args.value}")


def cmd_sync(args):
    from .connectors.bevel import BevelConnector

    result = BevelConnector().sync(args.path)
    print(f"Imported {result.total()} records "
          f"(sleep: {result.sleep_records}, meals: {result.meal_records}, "
          f"metrics: {result.metric_records})")
    for w in result.warnings[:10]:
        print(f"  warning: {w}")


def cmd_summary(args):
    days = args.days
    sleep = db.query("sleep", days)
    meals = db.query("meals", days)
    metrics = db.query("metrics", days)
    print(f"Last {days} days:")
    if sleep:
        avg = sum(s["hours"] for s in sleep) / len(sleep)
        print(f"  Sleep: {len(sleep)} nights, avg {avg:.1f}h")
    else:
        print("  Sleep: no records")
    print(f"  Meals logged: {len(meals)}")
    names = sorted({m['name'] for m in metrics})
    print(f"  Metrics: {len(metrics)} records" + (f" ({', '.join(names)})" if names else ""))


def main(argv=None):
    p = argparse.ArgumentParser(prog="flytz_ai_hub", description="Flytz AI Hub — Health Agent")
    sub = p.add_subparsers(dest="command", required=True)

    sub.add_parser("chat", help="Chat with the health agent").set_defaults(func=cmd_chat)

    s = sub.add_parser("log-sleep", help="Log a night of sleep")
    s.add_argument("--hours", type=float, required=True)
    s.add_argument("--quality", type=int)
    s.add_argument("--wakeups", type=int)
    s.add_argument("--date")
    s.set_defaults(func=cmd_log_sleep)

    m = sub.add_parser("log-meal", help="Log a meal")
    m.add_argument("description")
    m.add_argument("--meal", choices=["breakfast", "lunch", "dinner", "snack"])
    m.add_argument("--calories", type=int)
    m.add_argument("--date")
    m.set_defaults(func=cmd_log_meal)

    x = sub.add_parser("log-metric", help="Log a metric (weight, resting_hr, steps, mood...)")
    x.add_argument("name")
    x.add_argument("value", type=float)
    x.add_argument("--unit")
    x.add_argument("--date")
    x.set_defaults(func=cmd_log_metric)

    y = sub.add_parser("sync", help="Import a Bevel/Apple Health export")
    y.add_argument("path")
    y.set_defaults(func=cmd_sync)

    z = sub.add_parser("summary", help="Show a summary of recent data")
    z.add_argument("--days", type=int, default=7)
    z.set_defaults(func=cmd_summary)

    args = p.parse_args(argv)
    args.func(args)


if __name__ == "__main__":
    sys.exit(main())
