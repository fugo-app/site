---
title: System Metrics Agent
description: Fugo agent configuration for collecting system metrics
---

## System Metrics

Configuration for collecting system metrics `/etc/fugo/agents/system.yaml`:

```yaml
system:
  interval: 10s
  disk:
    path: /var/lib
  net:
    interface: default

retention:
  period: 1d
  interval: 10m
```

Metrics will be collected every 10 seconds. For disk usage, Fugo will monitor the disk where `/var/lib` is located. And for network metrics, Fugo will monitor the default interface. [Read more...](/inputs/system/)
