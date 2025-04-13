#!/bin/sh

main() {
	if [ "$(id -u)" != "0" ]; then
		echo "This script must be run as root" >&2
		exit 1
	fi

    ARCH=$(uname -m)
    case $ARCH in
        x86_64)
            ARCH="amd64"
            ;;
        aarch64)
            ARCH="arm64"
            ;;
        *)
            echo "Unsupported architecture: $ARCH" >&2
            exit 1
            ;;
    esac

	CURL=""
	if type curl >/dev/null; then
		CURL="curl -fsSL -o"
	elif type wget >/dev/null; then
		CURL="wget -q -O"
	fi

	if [ -z "$CURL" ]; then
		echo "This script needs curl or wget to download files. Please install one of them and try again." >&2
		exit 1
	fi

    # Get latest Fugo version
    FUGO_VERSION=$(
        $CURL - https://api.github.com/repos/fugo-app/fugo/releases/latest | \
        grep -m1 -E '^\s*"tag_name":' | \
        grep -Eo '\d+\.\d+\.\d+'
    )

    if [ -z "$FUGO_VERSION" ]; then
        echo "Failed to get Fugo version. Try again later" >&2
        exit 1
    fi

    # Create temporary directory for downloads
    TMP_DIR=$(mktemp -d)
    trap 'rm -rf "$TMP_DIR"' EXIT

    echo "Downloading Fugo version $FUGO_VERSION..."

    FUGO_URL="https://github.com/fugo-app/fugo/releases/download/v${FUGO_VERSION}/fugo-linux-${ARCH}.tar.gz"
    $CURL "$TMP_DIR/fugo.tar.gz" "$FUGO_URL"
    if [ $? -ne 0 ]; then
        echo "Failed to download Fugo. Please check your internet connection and try again." >&2
        exit 1
    fi
    tar -C "$TMP_DIR" -xzf "$TMP_DIR/fugo.tar.gz"

    install -m 0755 -D "$TMP_DIR/fugo" /usr/local/bin/fugo
    install -m 0755 -d /etc/fugo
    install -m 0755 -d /etc/fugo/agents
    install -m 0755 -d /var/lib/fugo

    cat <<EOF >/etc/systemd/system/fugo.service
[Unit]
Description=Fugo log agent
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
ExecStart=/usr/local/bin/fugo -c /etc/fugo/config.yaml
TimeoutSec=120
Restart=on-failure
RestartSec=2

[Install]
WantedBy=multi-user.target
EOF

    cat <<EOF >/etc/fugo/config.yaml
server:
  listen: 127.0.0.1:2221

storage:
  sqlite:
    path: /var/lib/fugo/fugo.db

file_input:
  offsets: /var/lib/fugo/offsets.yaml
  limit: 100
EOF

    systemctl -q daemon-reload

    echo ""
    echo "Fugo $FUGO_VERSION installed!"
    echo ""
    echo "       Configuration file: /etc/fugo/config.yaml"
    echo "    HTTP API available at: http://127.0.0.1:2221"
    echo ""
    echo "You can manage service with next commands:"
    echo "            Start service: systemctl start fugo"
    echo "             Stop service: systemctl stop fugo"
    echo "          Restart service: systemctl restart fugo"
    echo "   Enable service autorun: systemctl enable fugo"
    echo "  Disable service autorun: systemctl disable fugo"
}

# All code wrapped up in a function to prevent executing half a script during "curl | sh"
main
