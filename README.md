# Flytz AI Hub

A personal AI hub — a collection of AI agents for daily life. The first agent is the
**Health Agent**: it tracks your sleep, meals, and health metrics, syncs data from
[Bevel](https://www.bevel.health/), and gives you personalized insights powered by Claude.

## Agents

| Agent | Status | What it does |
|---|---|---|
| Health Agent | ✅ v0.1 | Tracks sleep, nutrition, and health metrics; chats with you about trends and habits |
| (more coming) | 🔜 | Finance, productivity, ... — the hub is designed so new agents plug in beside this one |

## Health Agent

### What it can do

- **Log by chatting** — "I slept 7 hours last night, woke up twice" or "I had grilled chicken and rice for lunch" and the agent stores it.
- **Track metrics** — weight, resting heart rate, HRV, steps, mood, energy.
- **Analyze trends** — ask "how has my sleep been this month?" or "am I eating enough protein?"
- **Sync from Bevel** — import your Bevel data so the agent can reason over your real wearable history.

### A note on Bevel

Bevel does **not** yet have a public API or MCP server (it's a highly requested feature —
see their [feedback board](https://feedback.bevel.health/feature-requests)). Until it ships,
the Bevel connector works from **data exports**:

1. In Bevel, export your data (or export Apple Health data, which Bevel reads/writes).
2. Run `flytz health sync path/to/export` to import it.

The connector is an interface (`flytz_ai_hub/connectors/base.py`), so the day Bevel ships
an API or MCP server, only `connectors/bevel.py` needs to change.

## Setup

```bash
pip install -r requirements.txt
export ANTHROPIC_API_KEY=sk-ant-...   # from https://platform.claude.com
```

## Usage

```bash
# Chat with your health agent (main entrypoint)
python -m flytz_ai_hub chat

# Quick logging without a conversation
python -m flytz_ai_hub log-sleep --hours 7.5 --quality 8
python -m flytz_ai_hub log-meal "Grilled chicken, rice, salad" --meal lunch
python -m flytz_ai_hub log-metric weight 74.2

# Import a Bevel / Apple Health export
python -m flytz_ai_hub sync path/to/export.json

# See a summary of the last 7 days
python -m flytz_ai_hub summary
```

All data is stored locally in `~/.flytz/health.db` (SQLite). Nothing leaves your machine
except the conversation with the Claude API.
