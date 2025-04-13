---
title: Quick Start
description: A quick start guide to get you up and running with Fugo.
---

Fugo is a lightweight and easy-to-use log collector.

## Installation

The primary way to install Fugo is a following command:

```bash
curl -sSfL https://fugo.app/install.sh | sudo sh
```

<details>
<summary>What this command do?</summary>

1. Check permissions and operating system
2. Download the latest version of Fugo from [GitHub Release](https://github.com/fugo-app/fugo/releases)
3. Install Fugo binary to `/usr/local/bin/fugo`
4. Create a configuration file at `/etc/fugo/config.yaml`
5. Create a directory for database `/var/lib/fugo`
6. Create a systemd service file at `/etc/systemd/system/fugo.service`
</details>

## Start Fugo

After installation, you can start Fugo with the following command:

```bash
sudo systemctl start fugo
```

And enable it to start on system boot:

```bash
sudo systemctl enable fugo
```
