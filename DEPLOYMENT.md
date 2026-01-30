# 🚀 デプロイメントガイド

## クイックスタート（3ステップ）

### 1️⃣ セットアップ（初回のみ）
```bash
cd /Users/mini/clawd-karo/soroban-practice
./setup.sh
```
✅ シンボリックリンクが作成されます

### 2️⃣ サーバー起動
```bash
./start-server.sh
```
✅ Pythonサーバーが起動します（ポート8080）

### 3️⃣ スマホでアクセス
1. Macとスマホを同じWi-Fiに接続
2. サーバー起動時に表示されるURLにアクセス
   例: `http://192.168.1.100:8080`

## 📱 スマホ設定

### iPhoneの場合
1. Safariでアクセス
2. 共有ボタン（□↑）をタップ
3. 「ホーム画面に追加」を選択
4. 名前を「そろばん練習」に設定
5. 追加をタップ

これでアプリのように使えます！

### Androidの場合
1. Chromeでアクセス
2. メニュー（⋮）をタップ
3. 「ホーム画面に追加」を選択
4. 名前を確認して追加

## 🔧 トラブルシューティング

### Q1: スマホでアクセスできない
**原因:** ファイアウォールまたはネットワーク設定

**解決策:**
```bash
# Macのファイアウォールを一時的に無効化
# システム環境設定 → セキュリティとプライバシー → ファイアウォール

# またはPythonを許可リストに追加
```

### Q2: PDFが開かない
**原因:** ファイルパスまたはシンボリックリンクの問題

**解決策:**
```bash
# シンボリックリンクを確認
ls -la assets/

# 再セットアップ
./setup.sh
```

### Q3: 音声が再生されない
**原因:** ファイル形式またはブラウザ設定

**解決策:**
- ブラウザの自動再生を許可
- 音声ファイルの存在を確認
- 別のブラウザで試す

### Q4: サーバーが起動しない
**原因:** ポート8080が使用中

**解決策:**
```bash
# ポート番号を変更してstart-server.shを編集
# PORT=8080 → PORT=8081
```

## 🌐 外部からのアクセス（上級者向け）

### ngrok経由（インターネット経由）
```bash
# ngrokインストール（初回のみ）
brew install ngrok

# 別ターミナルでサーバー起動
cd soroban-practice
./start-server.sh

# ngrokで公開
ngrok http 8080
```
→ 生成されたURLで世界中からアクセス可能

### Tailscale経由（VPN）
```bash
# Tailscaleインストール
brew install tailscale

# VPN起動
sudo tailscale up

# TailscaleのIPアドレスでアクセス
```

## 📊 パフォーマンス最適化

### ファイルサイズの削減
PDFが大きい場合、圧縮を検討:
```bash
# ImageMagick使用
brew install imagemagick
convert -density 150 input.pdf -quality 85 output.pdf
```

### キャッシュの活用
Service Workerが自動でキャッシュを管理します。
オフラインでも基本機能は動作します。

## 🔐 セキュリティ

### ローカルネットワークのみ
デフォルトでは同じWi-Fi内のみアクセス可能。
外部公開する場合は認証を追加推奨。

### 基本認証の追加（オプション）
```python
# server.py を作成して基本認証を追加
from http.server import HTTPServer, SimpleHTTPRequestHandler
import base64

class AuthHandler(SimpleHTTPRequestHandler):
    def do_AUTHHEAD(self):
        self.send_response(401)
        self.send_header('WWW-Authenticate', 'Basic realm="Soroban"')
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        auth = self.headers.get('Authorization')
        if auth != 'Basic ' + base64.b64encode(b'user:pass').decode():
            self.do_AUTHHEAD()
            return
        return SimpleHTTPRequestHandler.do_GET(self)

HTTPServer(('0.0.0.0', 8080), AuthHandler).serve_forever()
```

## 📈 使用統計（将来の拡張）

Google Analyticsやログ解析を追加可能:
```html
<!-- index.html の <head> に追加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y"></script>
```

## 🔄 アップデート手順

新しいPDFや音声を追加した場合:
1. Google Driveまたはローカルフォルダに配置
2. `script.js` のパスマッピングを更新
3. ブラウザで強制リロード（Shift + F5）

## 💡 ヒント

- **バッテリー節約**: PWAとしてインストールすると消費電力が減少
- **通知**: 将来的にプッシュ通知で練習リマインダーを実装可能
- **オフライン**: Service Workerでオフライン対応済み
- **共有**: QRコードを生成してURLを共有可能

---

**作成日**: 2025-01-30  
**バージョン**: 1.0.0
