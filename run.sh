#!/bin/bash
# Sketch Portfolio Dev Server Launcher
cd "$(dirname "$0")" || exit 1

export NAPI_RS_NATIVE_LIBRARY_PATH=/data/data/com.termux/files/home/.vite-bindings/rolldown-binding.android-arm64.node

echo "🚀 Starting Sketch Portfolio..."
node node_modules/vite/bin/vite.js --host 0.0.0.0 --port 5173
