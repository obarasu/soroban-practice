#!/usr/bin/env python3
"""
PDFファイル名を日本語から英語に変換するスクリプト
変換マッピングをJSONで出力
"""
import os
import re
import json
from pathlib import Path

# 日本語→英語の変換マッピング
TRANSLATIONS = {
    # 一般的な日本語
    'ピコ版': 'pico',
    'ミニ': 'mini',
    '解答付': 'with-answers',
    '解答': 'answers',
    '第': '',
    '回': '',
    '集問題': 'problems',
    '集': 'vol',
    '本番形式': 'full',
    'サイズ': 'size',
    # レベル練習
    '見取り算': 'mitorizzan',
    '見取り暗算': 'mitori-anzan',
    'かけ算': 'kakezan',
    'わり算': 'warizan',
    '分割練習': 'split',
    '珠算級準拠': 'shuzan-level',
    '桁別': 'digit-level',
    '桁': 'd',
    '口': 'r',
    '段': 'col',
    '縦': 'v',
    '加減ミックス': 'mixed',
    # カラコン
    'カラコン': 'colorcon',
    '黄': 'yellow',
    '緑': 'green',
    '赤': 'red',
    '青': 'blue',
    '黒': 'black',
    '金': 'gold',
    '難': 'hard',
    '激': 'extreme',
    '変': 'special',
    '狂': 'insane',
    '神': 'god',
    # クリスマスカップ
    'クリスマスカップ': 'christmas-cup',
    'クリカツ': 'xmas',
    '夏の': 'summer-',
    '並び替え': 'sorted',
    # そろばんコンクール
    'そろばんコンクール': 'soroban-contest',
    '日商': 'nissho',
    '全珠連': 'zenshuren',
    '暗算': 'anzan',
    '珠算': 'shuzan',
    '検定': 'test',
    '級': 'kyu',
    '問題': 'problems',
    '練習': 'practice',
    '県大会': 'prefectural',
    '全国大会': 'national',
    '問題集': 'workbook',
    # あんざんコンクール
    'あんざん': 'anzan',
    'フラッシュ暗算': 'flash-anzan',
    # 読み上げ
    '読み上げ算': 'yomiage',
    '読み上げ暗算': 'yomiage-anzan',
    'よみあん': 'yomian',
    # その他
    'ともだち': 'tomodachi',
    '特訓問題': 'training',
    'あまりのわり': 'amari-wari',
    '導入': 'intro',
    'トモロス': 'tomoros',
    '逆トモロス': 'reverse-tomoros',
    'ウルル': 'uluru',
    '左→右': 'ltr',
    '右←左': 'rtl',
    '答え探し': 'answer-search',
    'ザ春合宿': 'spring-camp',
    '版': '',
    # 記号
    '○△': 'maru-sankaku',
    '～': '-',
    '（': '-',
    '）': '',
    '【': '-',
    '】': '-',
    '　': '-',
    ' ': '-',
    '　': '-',
    'Ａ': 'A',
    'Ｂ': 'B',
    'Ｃ': 'C',
    'Ｄ': 'D',
    'Ｅ': 'E',
    'Ｆ': 'F',
    '０': '0',
    '１': '1',
    '２': '2',
    '３': '3',
    '４': '4',
    '５': '5',
    '６': '6',
    '７': '7',
    '８': '8',
    '９': '9',
}

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

def translate_filename(filename):
    """ファイル名を英語に変換"""
    name, ext = os.path.splitext(filename)
    
    # 変換を適用
    result = name
    for jp, en in sorted(TRANSLATIONS.items(), key=lambda x: -len(x[0])):
        result = result.replace(jp, en)
    
    # 連続するハイフンを1つに
    result = re.sub(r'-+', '-', result)
    # 先頭・末尾のハイフンを削除
    result = result.strip('-')
    # 空の場合は元の名前を使用
    if not result:
        result = name
    
    return result + ext

def main():
    base_path = Path('/Users/mini/clawd-karo/soroban-practice/assets')
    mapping = {}
    renames = []
    
    for pdf_path in base_path.rglob('*.pdf'):
        old_name = pdf_path.name
        
        if has_japanese(old_name):
            new_name = translate_filename(old_name)
            
            # まだ日本語が残っていたら警告
            if has_japanese(new_name):
                print(f"WARNING: Still has Japanese: {old_name} -> {new_name}")
            
            rel_path = pdf_path.relative_to(base_path)
            new_path = pdf_path.parent / new_name
            
            mapping[str(rel_path)] = {
                'old': old_name,
                'new': new_name,
                'title': old_name.replace('.pdf', '')  # 日本語タイトル保持
            }
            
            renames.append({
                'old_path': str(pdf_path),
                'new_path': str(new_path),
                'old_name': old_name,
                'new_name': new_name
            })
    
    # マッピングをJSON出力
    with open('/Users/mini/clawd-karo/soroban-practice/pdf-rename-mapping.json', 'w', encoding='utf-8') as f:
        json.dump(mapping, f, ensure_ascii=False, indent=2)
    
    print(f"\n=== Summary ===")
    print(f"Total PDFs with Japanese names: {len(renames)}")
    print(f"Mapping saved to: pdf-rename-mapping.json")
    
    # リネーム実行
    print(f"\n=== Renaming files ===")
    for r in renames:
        old_p = Path(r['old_path'])
        new_p = Path(r['new_path'])
        if old_p.exists():
            old_p.rename(new_p)
            print(f"  {r['old_name']} -> {r['new_name']}")
    
    print(f"\nDone! {len(renames)} files renamed.")

if __name__ == '__main__':
    main()
