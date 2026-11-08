#!/bin/bash
# Sketch Portfolio Build Launcher for Termux / Android
cd "$(dirname "$0")" || exit 1

if [ -f "/data/data/com.termux/files/home/.vite-bindings/rolldown-binding.android-arm64.node" ]; then
  export NAPI_RS_NATIVE_LIBRARY_PATH=/data/data/com.termux/files/home/.vite-bindings/rolldown-binding.android-arm64.node
fi

echo "📦 Building Sketch Portfolio..."
node node_modules/vite/bin/vite.js build
