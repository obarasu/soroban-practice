#!/usr/bin/env python3
"""
残りの日本語ファイル名を英語に変換（pykakasiを使用）
"""
import os
import re
from pathlib import Path

try:
    import pykakasi
    kks = pykakasi.kakasi()
except ImportError:
    print("pykakasi not available, using manual conversion")
    kks = None

def has_japanese(text):
    """日本語文字が含まれているかチェック"""
    for char in text:
        if '\u3040' <= char <= '\u309f':  # ひらがな
            return True
        if '\u30a0' <= char <= '\u30ff':  # カタカナ
            return True
        if '\u4e00' <= char <= '\u9fff':  # 漢字
            return True
        if '\uff00' <= char <= '\uffef':  # 全角英数
            return True
    return False

# 手動マッピング（pykakasiで変換しにくいもの）
MANUAL_MAP = {
    'の': '-',
    'を': '-',
    'は': '-',
    'が': '-',
    'に': '-',
    'で': '-',
    'と': '-',
    'も': '-',
    '麓': 'fumoto',
    '新': 'new-',
    '逆': 'reverse-',
    '均等': 'even',
    '列': 'col',
    '同数字': 'same-digit',
    '反転': 'flip',
    'サイズ': 'size',
    '位': 'i',
    '＆': 'and',
    '＝': 'eq',
    'ミックス': 'mix',
    'あまり': 'remainder',
    'あり': '',
    '春合宿': 'spring-camp',
    'ザ': '',
    'ピコ': 'pico',
    '分': '',
    'そろコン': 'sorocon',
    'あんコン': 'ancon',
    '全国': 'national-',
    'コンクール': 'contest',
    '本番': 'main',
    '過去問': 'past',
    '決勝': 'final',
    '種目別': 'event-',
    '競技': 'competition',
    '程度': 'level',
    '年': 'y',
    '大会': 'tournament',
    '川崎': 'kawasaki',
    '塾別': 'school-',
    '対抗': 'vs',
    '模擬': 'mock',
    '得点': 'score',
    '一覧表': 'list',
    '一': 'ichi',
    '決定戦': 'championship',
    'ハーフ': 'half',
    '用紙': 'sheet',
    '読上算': 'yomiage',
    '出': 'pub',
    '佐藤': 'sato',
    'かけ': 'kake-',
    'わり': 'wari-',
    '見取算': 'mitori',
    'ともだち': 'friends',
    '○': 'maru-',
    '△': 'sankaku',
    '①': '1-',
    '②': '2-',
    '③': '3-',
    '④': '4-',
    '⑤': '5-',
    '⑥': '6-',
    '⑦': '7-',
    '⑧': '8-',
    '÷': 'div',
    '×': 'x',
}

def convert_to_ascii(text):
    """日本語をASCIIに変換"""
    result = text
    
    # 手動マッピングを適用（長い文字列から順に）
    for jp, en in sorted(MANUAL_MAP.items(), key=lambda x: -len(x[0])):
        result = result.replace(jp, en)
    
    # pykakasiで残りを変換
    if kks and has_japanese(result):
        converted = kks.convert(result)
        result = ''.join([item['hepburn'] for item in converted])
    
    # クリーンアップ
    result = re.sub(r'-+', '-', result)
    result = result.strip('-')
    result = re.sub(r'[^\w\d\-\.]', '-', result)
    result = re.sub(r'-+', '-', result)
    result = result.strip('-')
    
    return result

def main():
    base_path = Path('/Users/mini/clawd-karo/soroban-practice/assets')
    renames = []
    
    for pdf_path in base_path.rglob('*.pdf'):
        old_name = pdf_path.name
        
        if has_japanese(old_name):
            name, ext = os.path.splitext(old_name)
            new_name = convert_to_ascii(name) + ext
            
            if has_japanese(new_name):
                print(f"WARNING: Still has Japanese: {old_name} -> {new_name}")
            
            renames.append({
                'old_path': pdf_path,
                'new_path': pdf_path.parent / new_name,
                'old_name': old_name,
                'new_name': new_name
            })
    
    print(f"\n=== Summary ===")
    print(f"Files to rename: {len(renames)}")
    
    for r in renames:
        if r['old_path'].exists():
            print(f"  {r['old_name']} -> {r['new_name']}")
            r['old_path'].rename(r['new_path'])
    
    print(f"\nDone!")

if __name__ == '__main__':
    main()
