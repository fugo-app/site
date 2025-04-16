---
title: System Metrics
description: Collect basic system metrics such as CPU, memory, disk usage, and network statistics
---

Collect basic system metrics such as CPU, memory, disk usage, and network statistics. This input is useful for monitoring the health and performance of your system.

## Configuration

- `interval`: How often system metrics should be collected. It can be specified in seconds, minutes (e.g., `10s`, `1m`).
- `disk_path`: Path to any directory on the disk you want to monitor. Fugo uses it to identify the correct disk and track its usage. If not specified, the directory `/var/lib` will be used.

## Metrics

- `time`: Timestamp of the data collection.
- `uptime`: System uptime in seconds.

### CPU Usage

- `cpu_cores`: Number of CPU cores.
- `cpu_usage`: CPU usage as a percentage.
- `la_1`: Load average over the last 1 minute.
- `la_5`: Load average over the last 5 minutes.
- `la_15`: Load average over the last 15 minutes.

### Memory Usage

- `mem_total`: Total memory in bytes.
- `mem_usage`: Memory usage as a percentage.

### Disk Usage

By default, Fugo monitors the disk where `/var/lib` is located. You can specify a different directory using the `disk_path` option in the configuration.

- `disk_total`: Total disk space in bytes.
- `disk_usage`: Disk usage as a percentage.

### Network Statistics

The system’s default route is used to determine which network interface to monitor.

- `net_if`: Name of the interface.
- `net_rx_bytes`: Received bytes.
- `net_tx_bytes`: Transmitted bytes.
- `net_rx_packets`: Received packets.
- `net_tx_packets`: Transmitted packets.
- `net_rx_errors`: Receive errors.
- `net_tx_errors`: Transmit errors.
- `net_rx_dropped`: Dropped incoming packets.
- `net_tx_dropped`: Dropped outgoing packets.
