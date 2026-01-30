#!/usr/bin/env python3
import requests
from bs4 import BeautifulSoup
import os
import re
from urllib.parse import urljoin, urlparse
import time

# カテゴリページのURL
categories = {
    "そろコン過去問": "https://himawari.craft.me/CNCL73SI4Nnzvq/b/0097AF64-D79A-43DF-BE6C-E4A8DF6826DA/",
    "塾別対抗問題": "https://himawari.craft.me/CNCL73SI4Nnzvq/b/93E9E6D1-C7E1-47CA-858C-6A559D3E4F96/",
    "かけ桁別": "https://himawari.craft.me/CNCL73SI4Nnzvq/b/33014D55-555A-4E78-91F9-843835263E3D/",
    "わり桁別": "https://himawari.craft.me/CNCL73SI4Nnzvq/b/A84ABA4E-1ECA-4715-8FC2-F64ECC1D6913/",
    "見取り桁別": "https://himawari.craft.me/CNCL73SI4Nnzvq/b/0D154F52-7100-45DF-9171-783337BBA68C/",
}

# ベースディレクトリ
base_dir = "/Users/mini/clawd/temp/sorocon-practice"

# セッションを作成
session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
})

# PDFリストを保存
all_pdfs = {}

def sanitize_filename(filename):
    """ファイル名を安全な形式に変換"""
    # 不正な文字を削除
    filename = re.sub(r'[<>:"/\\|?*]', '', filename)
    return filename

def download_pdf(url, filepath):
    """PDFをダウンロード"""
    try:
        response = session.get(url, stream=True, timeout=30)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"✓ ダウンロード完了: {os.path.basename(filepath)}")
        return True
    except Exception as e:
        print(f"✗ エラー: {os.path.basename(filepath)} - {str(e)}")
        return False

def extract_pdfs_from_page(url, category_name):
    """ページからPDFリンクを抽出"""
    try:
        response = session.get(url)
        response.raise_for_status()
        
        # CraftのページからPDFリンクを抽出
        # secure-res.craft.doドメインのPDFリンクを探す
        pdf_pattern = re.compile(r'https://secure-res\.craft\.do/[^"\'>\s]+\.pdf')
        pdf_links = pdf_pattern.findall(response.text)
        
        # ファイル名も抽出
        soup = BeautifulSoup(response.text, 'html.parser')
        
        pdfs = []
        for link in set(pdf_links):  # 重複を削除
            # URLからファイル名を推測
            url_parts = urlparse(link)
            filename = url_parts.path.split('/')[-1]
            
            # ページ内のテキストから実際のファイル名を探す
            # これは簡易的な方法
            pdfs.append({
                'url': link,
                'filename': filename
            })
        
        return pdfs
    except Exception as e:
        print(f"✗ ページ取得エラー ({category_name}): {str(e)}")
        return []

# 各カテゴリを処理
print("=== PDFダウンロード開始 ===\n")

for category_name, category_url in categories.items():
    print(f"\n[{category_name}]")
    
    # カテゴリディレクトリを作成
    category_dir = os.path.join(base_dir, category_name)
    os.makedirs(category_dir, exist_ok=True)
    
    # PDFリンクを抽出
    pdfs = extract_pdfs_from_page(category_url, category_name)
    
    if not pdfs:
        print(f"  PDFが見つかりませんでした")
        continue
    
    print(f"  {len(pdfs)}個のPDFを発見")
    
    # 各PDFをダウンロード
    for i, pdf_info in enumerate(pdfs, 1):
        filename = pdf_info['filename']
        filepath = os.path.join(category_dir, filename)
        
        # すでにダウンロード済みかチェック
        if os.path.exists(filepath):
            print(f"  [{i}/{len(pdfs)}] スキップ: {filename} (既存)")
            continue
        
        print(f"  [{i}/{len(pdfs)}] ダウンロード中: {filename}")
        download_pdf(pdf_info['url'], filepath)
        time.sleep(0.5)  # サーバー負荷軽減
    
    all_pdfs[category_name] = pdfs

print("\n=== ダウンロード完了 ===")
print(f"\n総カテゴリ数: {len(all_pdfs)}")
for category, pdfs in all_pdfs.items():
    print(f"  {category}: {len(pdfs)}個")
