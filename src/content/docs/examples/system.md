---
title: System Metrics Agent
description: Fugo agent configuration for collecting system metrics
---

## System Metrics

Configuration for collecting system metrics `/etc/fugo/agents/system.yaml`:

```yaml
system:
  interval: 10s
  disk_path: /var/lib
```

Metrics will be collected every 10 seconds. For disk usage, Fugo will monitor the disk where `/var/lib` is located. [Read more...](/inputs/system/)
