# AzCopy

## Install on Ubuntu

```bash
curl -sSL -O https://packages.microsoft.com/config/ubuntu/24.04/packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
sudo apt update
sudo apt install azcopy
sudo apt --fix-broken install
sudo apt install azcopy
```

## Script to copy files from local folder to Azure Blob.

```bash
#!/usr/bin/env bash
set -euo pipefail

# ======== CONFIG ========
SRC_DIR="${1:-/home/youruser/data}"  # first arg or default
# Provide either a SAS URL or rely on 'azcopy login' (see below)
DST_URL="${2:-"https://<account>.blob.core.windows.net/<container>/<optional-prefix>?<SAS>"}"
DRY_RUN="${DRY_RUN:-false}"          # set DRY_RUN=true to preview
USE_SYNC="${USE_SYNC:-false}"        # set USE_SYNC=true for incremental sync
EXCLUDE_PATTERNS="${EXCLUDE_PATTERNS:-""}"  # e.g., "*.tmp,*.bak"
FOLLOW_SYMLINKS="${FOLLOW_SYMLINKS:-false}"
# ========================

if ! command -v azcopy >/dev/null 2>&1; then
  echo "AzCopy not found. Install: https://aka.ms/downloadazcopy (Linux tar.gz) and place 'azcopy' in PATH." >&2
  exit 1
fi

ARGS=( "--recursive" )

if [[ "$DRY_RUN" == "true" ]]; then
  ARGS+=( "--dry-run" )
fi

if [[ -n "$EXCLUDE_PATTERNS" ]]; then
  ARGS+=( "--exclude-pattern" "$EXCLUDE_PATTERNS" )
fi

if [[ "$FOLLOW_SYMLINKS" == "true" ]]; then
  ARGS+=( "--follow-symlinks" )
fi

echo "Source:      $SRC_DIR"
echo "Destination: $DST_URL"
echo "Mode:        $([[ "$USE_SYNC" == "true" ]] && echo "sync" || echo "copy")"
echo "Options:     ${ARGS[*]}"
echo

if [[ "$USE_SYNC" == "true" ]]; then
  azcopy sync "$SRC_DIR" "$DST_URL" "${ARGS[@]}" --delete-destination=false
else
  azcopy copy "$SRC_DIR" "$DST_URL" "${ARGS[@]}"
fi

echo "Done."
```

Usage examples:

```bash
# Basic copy
./upload_to_blob.sh /home/youruser/data "https://acct.blob.core.windows.net/backups/2026-03-10?<SAS>"

azcopy copy "$SRC_DIR" "$DST_URL" --recursive --follow-symlinks


sudo bash -c 'DRY_RUN=true EXCLUDE_PATTERNS="*.tmp,*.log" \
  ./upload_to_blob.sh /data \
  "https://acct.blob.core.windows.net/raw/releases/25.10.0.2602241917?<SAS>"'


# Preview with excludes
DRY_RUN=true EXCLUDE_PATTERNS="*.tmp,*.log" ./upload_to_blob.sh /data "https://acct.blob.core.windows.net/raw?<SAS>"

# Incremental sync for nightly job
USE_SYNC=true ./upload_to_blob.sh /mnt/files "https://acct.blob.core.windows.net/archive/2026?<SAS>"
```