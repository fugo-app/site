---
title: Agents
description: Agents is a data collector for your logs.
---

Agents is a data collector for your logs.

## Agents Configuration

Agents configuration located in the `/etc/fugo/agents` directory. Each agent is defined in its own YAML file.

Agent can be defined with next parameters:

- `fields`: A list of fields to store in the log records
- `file`: Configuration for file-based input
- `retention`: Configuration for log retention

## Retention Configuration

Retention configuration has the following options:

- `period`: The retention period for the logs. It can be specified in minutes, hours, days (e.g., `3h`, `7d`, `3d12h`). Default is `3d`.
- `interval`: The interval for log retention. It can be specified in minutes, hours, days (e.g., `10m`, `1h`). Default is `1h`.
