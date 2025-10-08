#!/usr/bin/env bash
set -euo pipefail
shopt -s nullglob nocaseglob

# Define the directory containing images
IMAGE_DIR="src/static"

# Maximum width and height
MAX_WIDTH=2560
MAX_HEIGHT=1400

# Loop through all image files in the directory
for image in "$IMAGE_DIR"/*.{jpg,jpeg,png}; do
  # Skip if it's not a regular file
  [[ -f "$image" ]] || continue

  # Get the dimensions of the image (width height)
  read -r width height < <(identify -ping -format "%w %h" "$image")

  # Check if the image exceeds the max dimensions
  if [[ $width -gt $MAX_WIDTH || $height -gt $MAX_HEIGHT ]]; then
    echo "Resizing $image ($width x $height) to fit within $MAX_WIDTH x $MAX_HEIGHT"
    mogrify -resize "${MAX_WIDTH}x${MAX_HEIGHT}>" "$image"
  else
    echo "Skipping $image ($width x $height), within size limits"
  fi
done