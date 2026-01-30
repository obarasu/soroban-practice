# 🚀 ホスティング比較: Vercel vs Netlify

## 📊 比較表

| 項目 | Vercel | Netlify |
|------|--------|---------|
| **無料プラン** | ✅ あり | ✅ あり |
| **帯域制限** | 100GB/月 | 100GB/月 |
| **ビルド時間** | 6,000分/月 | 300分/月 |
| **デプロイ数** | 無制限 | 無制限 |
| **カスタムドメイン** | ✅ 無料SSL | ✅ 無料SSL |
| **日本CDN** | ✅ 東京エッジ | ✅ あり |

## 🎯 推奨: **Vercel**

### 理由

1. **ビルド時間が圧倒的に多い** (6,000分 vs 300分)
2. **日本のエッジサーバー** が東京にあり高速
3. **GitHub連携が簡単** (ワンクリックデプロイ)
4. **静的サイトに最適化** されている

---

## 📝 Vercelデプロイ手順

### Step 1: GitHubリポジトリ作成

```bash
cd /Users/mini/clawd-karo/soroban-practice
gh repo create soroban-practice --public --source=. --push
```

### Step 2: Vercelアカウント作成

1. https://vercel.com にアクセス
2. 「Sign Up」→「Continue with GitHub」
3. GitHubアカウントで認証

### Step 3: プロジェクトをインポート

1. Vercelダッシュボードで「Add New...」→「Project」
2. 「Import Git Repository」でsoroban-practiceを選択
3. 設定はデフォルトのまま「Deploy」

### Step 4: 完了！

- 自動でURLが発行される (例: `soroban-practice.vercel.app`)
- 以後、GitHubにpushすると自動デプロイ

---

## 🌐 カスタムドメイン設定（オプション）

1. Vercelダッシュボード → プロジェクト → Settings → Domains
2. ドメインを入力（例: soroban.example.com）
3. 表示されたDNS設定をドメインレジストラに設定
4. SSL証明書は自動発行

---

## ⚠️ 注意事項

### ファイルパスの修正

現在のコードはローカルファイルパスを参照しています。
公開前に `script.js` のパスを相対パスに修正が必要：

```javascript
// 修正前（ローカル用）
const basePath = '/Users/mini/Library/CloudStorage/...';

// 修正後（Web公開用）
const basePath = './assets/';
```

### アセットのアップロード

PDFと音声ファイルを `assets/` フォルダにコピーして
リポジトリに含める必要があります。

---

## 📋 デプロイ前チェックリスト

- [ ] ファイルパスを相対パスに修正
- [ ] PDFファイルを assets/ にコピー
- [ ] 音声ファイルを assets/ にコピー
- [ ] GitHubリポジトリ作成
- [ ] Vercelにデプロイ
- [ ] 動作確認

---

*作成日: 2026-01-31*
