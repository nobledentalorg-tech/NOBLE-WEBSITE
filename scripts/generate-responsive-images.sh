#!/usr/bin/env bash
# Generate responsive image variants without touching site templates.
# Requirements: ImageMagick (`magick`) or GraphicsMagick, bash 4+.

set -euo pipefail

if ! command -v magick >/dev/null 2>&1; then
  echo "Error: ImageMagick 'magick' binary not found in PATH." >&2
  echo "Install via 'brew install imagemagick' or 'apt-get install imagemagick'." >&2
  exit 1
fi

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <image1> [image2 ...]" >&2
  exit 1
fi

SIZES=(640 960 1280)
QUALITY=82

for input in "$@"; do
  if [ ! -f "$input" ]; then
    echo "Skipping missing file: $input" >&2
    continue
  fi

  ext="${input##*.}"
  basename="$(basename "$input" ".$ext")"
  dir="$(dirname "$input")"

  for width in "${SIZES[@]}"; do
    output="${dir}/${basename}-${width}.${ext}"
    if [ -f "$output" ]; then
      echo "Exists: $output (skipping)"
      continue
    fi

    echo "Generating ${output}"
    magick "$input" -resize "${width}" -quality "$QUALITY" "$output"
  done

done

echo "Responsive variants ready. Update srcset attributes on the next template edit."
