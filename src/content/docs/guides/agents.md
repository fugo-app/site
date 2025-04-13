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
