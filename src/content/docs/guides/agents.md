---
title: Agents
description: Agents is a data collector for your logs.
---

Agents is a data collector for your logs.

## Agents Configuration

Agent configurations are located in the `/etc/fugo/agents` directory. Each agent is defined in its own YAML file - the file name is used as the agent name, and the file extension should be `.yaml`.

Agents can be defined with the following parameters:

- `fields`: A list of fields to store in the log records
- `file`: Configuration for file-based input
- `system`: Configuration for system metrics input
- `retention`: Configuration for log retention

```yaml
fields:
  - name: time
    timestamp:
      format: common
  - name: level
  - name: message

file:
  # File-based input configuration

system:
  # System metrics input configuration

retention:
  period: 3d
  interval: 1h
```

## Fields

For more detailed information, see the [Fields documentation](/guides/fields/).

## Inputs

Inputs is a data source for your logs. Read more:

- [File-Based Input](/inputs/file/)
- [System Metrics](/inputs/system/)

## Retention Configuration

Retention configuration has the following options:

- `period`: The retention period for the logs. It can be specified in minutes, hours, days (e.g., `3h`, `7d`, `3d12h`). Default is `3d`.
- `interval`: The interval for log retention. It can be specified in minutes, hours, days (e.g., `10m`, `1h`). Default is `1h`.
