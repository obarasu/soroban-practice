# Google Sheets連携セットアップ

## 1. Google Sheetsを作成

1. https://sheets.google.com で新規スプレッドシート作成
2. シート名を「records」に変更
3. 1行目にヘッダーを入力：
   ```
   id | date | type | answered | wrong | score | timeSec | userId
   ```

## 2. GASスクリプトを設定

1. 拡張機能 → Apps Script を開く
2. 以下のコードを貼り付け：

```javascript
// スプレッドシートID（URLから取得）
const SHEET_ID = SpreadsheetApp.getActiveSpreadsheet().getId();
const SHEET_NAME = 'records';

// CORS対応
function doOptions(e) {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

// 記録を取得
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const records = [];
    
    const userId = e.parameter.userId || 'default';
    
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const record = {};
      headers.forEach((header, index) => {
        record[header] = row[index];
      });
      
      // userIdでフィルタ
      if (record.userId === userId) {
        records.push(record);
      }
    }
    
    // 日付の新しい順にソート
    records.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      records: records
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// 記録を保存
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);
    
    const id = Utilities.getUuid();
    const row = [
      id,
      data.date || new Date().toISOString(),
      data.type || 'multiplication',
      data.answered || 0,
      data.wrong || 0,
      data.score || 0,
      data.timeSec || 0,
      data.userId || 'default'
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      id: id
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. デプロイ

1. 「デプロイ」→「新しいデプロイ」
2. 種類：「ウェブアプリ」を選択
3. 実行者：「自分」
4. アクセス：「全員」
5. デプロイをクリック
6. **WebアプリのURLをコピー**（後で使う）

## 4. soroban-practiceに設定

`script.js`の先頭に追加：
```javascript
const GAS_URL = 'ここにデプロイしたURLを貼る';
```
