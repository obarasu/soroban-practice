#!/bin/bash

echo "🧮 そろばん練習Webサービス セットアップ"
echo "========================================="
echo ""

# Create assets directory
echo "📁 assetsディレクトリを作成..."
mkdir -p assets

# Create symbolic links
echo "🔗 シンボリックリンクを作成..."

# Google Drive soroban folder
GOOGLE_DRIVE_SOROBAN="/Users/mini/Library/CloudStorage/GoogleDrive-taka.suzuka@kokagaku.com/マイドライブ/家庭用/そろばん"
if [ -d "$GOOGLE_DRIVE_SOROBAN" ]; then
    ln -sf "$GOOGLE_DRIVE_SOROBAN" assets/soroban
    echo "✅ そろばんフォルダをリンク"
else
    echo "⚠️ Google Driveのそろばんフォルダが見つかりません"
fi

# sorocon-practice folder
SOROCON_PRACTICE="/Users/mini/clawd/temp/sorocon-practice"
if [ -d "$SOROCON_PRACTICE" ]; then
    ln -sf "$SOROCON_PRACTICE" assets/sorocon-practice
    echo "✅ そろコン練習フォルダをリンク"
else
    echo "⚠️ そろコン練習フォルダが見つかりません"
fi

# sorocon-audio folder
SOROCON_AUDIO="/Users/mini/clawd/temp/sorocon-audio"
if [ -d "$SOROCON_AUDIO" ]; then
    ln -sf "$SOROCON_AUDIO" assets/sorocon-audio
    echo "✅ そろコン音声フォルダをリンク"
else
    echo "⚠️ そろコン音声フォルダが見つかりません"
fi

echo ""
echo "✨ セットアップ完了！"
echo ""
echo "📱 次のステップ:"
echo "1. サーバーを起動: ./start-server.sh"
echo "2. スマホのブラウザでアクセス"
echo ""
