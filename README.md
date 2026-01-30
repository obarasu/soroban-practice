# 🧮 そろばん練習Webサービス

スマホでワンタッチで使えるそろばん練習用Webサービス

## 🆕 v1.1.0 新機能（2026-01-31）

### ⭐ お気に入り機能
- よく使う問題を保存して素早くアクセス
- LocalStorageで永続保存
- ワンタップで削除

### 📜 履歴機能
- 最近使った10問を自動記録
- タイムスタンプ付きで時系列表示
- 履歴クリア機能

### 🚀 パフォーマンス改善
- 軽量化されたコード構造
- LocalStorageベースの高速アクセス

## 📋 基本機能

### PDFワンタッチ印刷
- **アバカスサーキット**: F0/F1/F2プリント、過去問題、桁別練習、色別カラコン
- **そろばんコンクール**: 2015-2024年の過去問、桁別練習問題
- **あんざんコンクール**: 2022-2024本番問題、第1集/第2集、過去問

### 音声ワンタッチ再生
- **読み上げ算・よみあん**: 30秒/35秒/40秒/50秒問題
- 149個の音声ファイル対応

### 解答用紙
- そろばんコンクール解答用紙
- あんざんコンクール解答用紙

## 🚀 起動方法

### 方法1: Pythonサーバー（推奨）

```bash
cd soroban-practice
python3 -m http.server 8080
```

スマホのブラウザで `http://[Mac-IP]:8080` にアクセス

MacのIPアドレス確認:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

### 方法2: Node.js + http-server

```bash
# http-serverインストール（初回のみ）
npm install -g http-server

# サーバー起動
cd soroban-practice
http-server -p 8080
```

### 方法3: PHP（MacにデフォルトでPHPがある場合）

```bash
cd soroban-practice
php -S 0.0.0.0:8080
```

## 📱 スマホでの使用方法

1. Macとスマホを同じWi-Fiネットワークに接続
2. スマホのブラウザでサーバーのURLにアクセス
3. ホーム画面に追加（PWA対応）
   - Safari: 共有 → ホーム画面に追加
   - Chrome: メニュー → ホーム画面に追加

## ⚠️ 注意事項

### ローカルファイルアクセス制限
ブラウザのセキュリティ上、ローカルファイル（`file://`）へのアクセスは制限されています。

**解決策:**
1. **ファイルをWebサーバー配下に配置** （推奨）
   ```bash
   # PDFと音声ファイルをコピー
   cp -r "/Users/mini/Library/CloudStorage/GoogleDrive-taka.suzuka@kokagaku.com/マイドライブ/家庭用/そろばん/" ./assets/
   ```

2. **シンボリックリンクを使用**
   ```bash
   ln -s "/Users/mini/Library/CloudStorage/GoogleDrive-taka.suzuka@kokagaku.com/マイドライブ/家庭用/そろばん/" ./assets/soroban
   ln -s "/Users/mini/clawd/temp/sorocon-practice/" ./assets/sorocon
   ```

3. **Node.jsサーバーでCORS対応**（高度な方法）

## 📂 ファイル構造

```
soroban-practice/
├── index.html          # メインHTML
├── style.css           # スタイルシート
├── script.js           # JavaScript
├── sw.js               # Service Worker (PWA)
├── README.md           # このファイル
├── manifest.json       # PWA設定
└── assets/             # PDF・音声ファイル配置場所
    ├── soroban/        # そろばん関連
    └── sorocon/        # そろコン関連
```

## 🔧 カスタマイズ

### ファイルパスの変更
`script.js` の `pdfPaths` と `audioPaths` を編集

### デザイン変更
`style.css` のカラー変数を編集:
```css
:root {
    --primary-color: #2196F3;
    --secondary-color: #FF9800;
    /* その他のカラー */
}
```

## 📊 対応ファイル

### PDFファイル: 50+
- アバカスサーキット: 15+
- そろばんコンクール: 20+
- あんざんコンクール: 15+

### 音声ファイル: 149個
- Google Drive内のmp3/wavファイル

## 🎯 今後の改善案

1. ファイル一覧の自動スキャン
2. お気に入り機能
3. 練習履歴の記録
4. タイマー機能
5. オフライン対応（PWA完全対応）
6. プッシュ通知（練習リマインダー）

## 🐛 トラブルシューティング

### PDFが開かない
- ブラウザのポップアップブロックを解除
- ファイルパスを確認（`script.js`）
- ローカルサーバーを使用

### 音声が再生されない
- ブラウザの自動再生ポリシーを確認
- 音声ファイルの存在を確認
- ファイル形式がmp3/wavであることを確認

### スマホでアクセスできない
- Macとスマホが同じWi-Fiに接続されているか確認
- Macのファイアウォール設定を確認
- IPアドレスが正しいか確認

## 📄 ライセンス

個人使用のみ

---

**作成日**: 2025-01-30  
**バージョン**: 1.0.0  
**作成者**: 家老エージェント
