#!/bin/bash

echo "🚀 そろばん練習Webサーバー起動"
echo "==============================="
echo ""

# Get local IP address
IP_ADDRESS=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -n 1)

if [ -z "$IP_ADDRESS" ]; then
    IP_ADDRESS="localhost"
fi

PORT=8080

echo "📍 サーバー情報:"
echo "   URL: http://$IP_ADDRESS:$PORT"
echo ""
echo "📱 スマホでアクセス:"
echo "   http://$IP_ADDRESS:$PORT"
echo ""
echo "⏹  停止する場合: Ctrl+C"
echo ""
echo "==============================="
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "🐍 Python3サーバーで起動中..."
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    echo "🐍 Pythonサーバーで起動中..."
    python -m SimpleHTTPServer $PORT
elif command -v php &> /dev/null; then
    echo "🐘 PHPサーバーで起動中..."
    php -S 0.0.0.0:$PORT
else
    echo "❌ エラー: Python または PHP が見つかりません"
    echo ""
    echo "解決策:"
    echo "1. Pythonをインストール: brew install python3"
    echo "2. または Node.js + http-server: npm install -g http-server"
    exit 1
fi
