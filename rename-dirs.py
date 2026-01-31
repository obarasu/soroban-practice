#!/usr/bin/env python3
"""
日本語フォルダ名を英語にリネーム
"""
import os
from pathlib import Path

# フォルダ名のマッピング
DIR_RENAMES = {
    'かけ算桁別プリント': 'kakezan-digit-practice',
    'わり算桁別プリント': 'warizan-digit-practice',
    '見取り暗算桁別プリント': 'mitori-anzan-digit-practice',
    '見取り算（分割練習）': 'mitori-split-practice',
    '見取り算（珠算級準拠）': 'mitori-shuzan-level',
    '縦4段': 'vertical-4col',
    '縦3段': 'vertical-3col',
    'クリスマスカップ版': 'christmas-cup',
    'かけ算6桁以上導入（トモロス）左→右': 'kakezan-6digit-intro-tomoros-ltr',
    'かけ算6桁以上導入（逆トモロス）右←左': 'kakezan-6digit-intro-reverse-tomoros-rtl',
    'わり算6桁以上の導入（ウルル）': 'warizan-6digit-intro-uluru',
    'あまりのわり': 'amari-wari',
    '答え探し': 'answer-search',
    'わり桁別': 'wari-digit',
    'かけ桁別': 'kake-digit',
    '見取り桁別': 'mitori-digit',
    '塾別対抗問題': 'school-competition',
    'そろコン過去問': 'sorocon-past',
}

def main():
    base = Path('/Users/mini/clawd-karo/soroban-practice/assets')
    
    # 深いディレクトリから順にリネーム（親より子を先に）
    dirs_to_rename = []
    
    for dirpath, dirnames, filenames in os.walk(base, topdown=False):
        for dirname in dirnames:
            if dirname in DIR_RENAMES:
                old_path = Path(dirpath) / dirname
                new_path = Path(dirpath) / DIR_RENAMES[dirname]
                dirs_to_rename.append((old_path, new_path, dirname, DIR_RENAMES[dirname]))
    
    print(f"Found {len(dirs_to_rename)} directories to rename")
    
    for old_path, new_path, old_name, new_name in dirs_to_rename:
        if old_path.exists():
            print(f"  {old_name} -> {new_name}")
            old_path.rename(new_path)
    
    print("Done!")

if __name__ == '__main__':
    main()
