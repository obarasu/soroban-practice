#!/usr/bin/env python3
"""
script.jsのファイル名参照を実際のファイル名に更新
"""
import os
import re
from pathlib import Path

def get_actual_files(base_dir):
    """実際のファイル名を取得"""
    files = {}
    base = Path(base_dir)
    for pdf in base.rglob('*.pdf'):
        rel = str(pdf.relative_to(base))
        files[rel] = pdf.name
    return files

def main():
    base = Path('/Users/mini/clawd-karo/soroban-practice/assets')
    script_path = Path('/Users/mini/clawd-karo/soroban-practice/script.js')
    
    # 実際のファイル名を取得
    actual_files = {}
    for pdf in base.rglob('*.pdf'):
        actual_files[pdf.name] = str(pdf.relative_to(base.parent))
    
    print(f"Found {len(actual_files)} PDF files")
    
    # script.jsを読み込み
    content = script_path.read_text(encoding='utf-8')
    
    # 日本語を含むファイル名参照を探す
    # file: 'xxx.pdf' のパターンを探す
    pattern = r"file:\s*['\"]([^'\"]+\.pdf)['\"]"
    
    def replace_filename(match):
        old_name = match.group(1)
        # 実際のファイル名から一致するものを探す
        for actual_name, actual_path in actual_files.items():
            # 部分一致でマッチング（ファイル名の一部が一致すれば）
            if old_name == actual_name:
                return match.group(0)  # すでに一致
            
            # 数字部分でマッチング試みる
            old_nums = re.findall(r'\d+', old_name)
            actual_nums = re.findall(r'\d+', actual_name)
            
            # 両方の基本パターンを比較
            old_base = old_name.lower().replace(' ', '').replace('-', '')
            actual_base = actual_name.lower().replace(' ', '').replace('-', '')
            
        return match.group(0)  # 見つからなかった場合は元のまま
    
    # 手動マッピング（主要なもの）
    replacements = {
        # F0
        "Catly版-F0本番形式001-072.pdf": "Catly-F0full001-072.pdf",
        "Catly版F0ミニ-Ａ４サイズ-001-030.pdf": "CatlyF0mini-A4saisu-001-030.pdf",
        "F0-ザ春合宿2022版.pdf": "F0-sa-spring-camp2022.pdf",
        "F0-ピコ版-第1回-第24回-解答付.pdf": "F0-hi-ko-1-24-with-answers.pdf",
        "F0-ピコ版-第25回-第48回-解答付.pdf": "F0-hi-ko-25-48-with-answers.pdf",
        "Ｆ０ミニ001-010.pdf": "F0mini001-010.pdf",
        # F1
        "Catly版F1本番形式001-072.pdf": "CatlyF1full001-072.pdf",
        "Catly版F1ミニ-Ａ４サイズ-001-040.pdf": "CatlyF1mini-A4saisu-001-040.pdf",
        "F1-ザ春合宿2022版.pdf": "F1-sa-spring-camp2022.pdf",
        "F1-ピコ版-第1回-第24回-解答付.pdf": "F1-hi-ko-1-24-with-answers.pdf",
        "F1-ピコ版-第25回-第48回-解答付.pdf": "F1-hi-ko-25-48-with-answers.pdf",
        "F1-ピコ版-第49回-第72回-解答付.pdf": "F1-hi-ko-49-72-with-answers.pdf",
        "F1-ピコ版-第73回-第80回-解答付.pdf": "F1-hi-ko-73-80-with-answers.pdf",
        "Ｆ１ミニ001-040.pdf": "F1mini001-040.pdf",
        # F2
        "Catly版F2本番形式001-060.pdf": "CatlyF2full001-060.pdf",
        "F2-ザ春合宿2022版.pdf": "F2-spring-camp2022.pdf",
        "F2-ピコ版-第2集問題24回分.pdf": "F2-hi-ko-2problems24.pdf",
        "F2-ピコ版-第2集解答.pdf": "F2-pico-2volanswers.pdf",
        # Past exams
        "283-解答付.pdf": "283-with-answers.pdf",
        "284-解答付.pdf": "284-with-answers.pdf",
        "285-解答付.pdf": "285-with-answers.pdf",
        "PDF286-解答付.pdf": "PDF286-with-answers.pdf",
        "287-解答付.pdf": "287-with-answers.pdf",
        "288-解答付.pdf": "288-with-answers.pdf",
        "289-解答付.pdf": "289-with-answers.pdf",
        "290-解答付.pdf": "290-with-answers.pdf",
        # Color contest
        "①F2カラコン001-060.pdf": "1-F2colorcon001-060.pdf",
        "②黄カラコン001-060.pdf": "2-yellowcolorcon001-060.pdf",
        "③緑カラコン001-060.pdf": "3-greencolorcon001-060.pdf",
        "④赤カラコン001-060.pdf": "4-redcolorcon001-060.pdf",
        "⑤青カラコン001-060.pdf": "5-bluecolorcon001-060.pdf",
        "⑥黒カラコン001-060.pdf": "6-blackcolorcon001-060.pdf",
        "⑦金カラコン001-060.pdf": "7-goldcolorcon001-060.pdf",
        "⑧難カラコン001-060.pdf": "8-hardcolorcon001-060.pdf",
        "カラコン-Lv.1-F2-001-020.pdf": "colorcon-Lv.1-F2-001-020.pdf",
        "カラコン-Lv.2-黄-001-020.pdf": "colorcon-Lv.2-yellow-001-020.pdf",
        "カラコン-Lv.3-緑-001-020.pdf": "colorcon-Lv.3-green-001-020.pdf",
        "カラコン-Lv.4-赤-001-020.pdf": "colorcon-Lv.4-red-001-020.pdf",
        "カラコン-Lv.5-青-001-020.pdf": "colorcon-Lv.5-blue-001-020.pdf",
        "カラコン-Lv.6-黒-001-020.pdf": "colorcon-Lv.6-black-001-020.pdf",
        "カラコン-Lv.7-金-001-020.pdf": "colorcon-Lv.7-gold-001-020.pdf",
        "カラコン-Lv.8-難-001-020.pdf": "colorcon-Lv.8-hard-001-020.pdf",
        "カラコン-Lv.9-激-001-020.pdf": "colorcon-Lv.9-extreme-001-020.pdf",
        "カラコン-Lv.10-変-001-020.pdf": "colorcon-Lv.10-special-001-020.pdf",
        "カラコン-Lv.11-狂-001-020.pdf": "colorcon-Lv.11-insane-001-020.pdf",
        "カラコン-Lv.12-神-001-020.pdf": "colorcon-Lv.12-god-001-020.pdf",
        # Sorocon
        "そろコン2024本番問題.pdf": "sorocon2024mainproblems.pdf",
        "そろコン2022-2023本番問題.pdf": "sorocon2022-2023mainproblems.pdf",
        "そろコン過去問2021-2018.pdf": "soroconpast2021-2018.pdf",
        "そろコン過去問2017-2015.pdf": "soroconpast2017-2015.pdf",
    }
    
    # 置換実行
    for old, new in replacements.items():
        if old in content:
            content = content.replace(old, new)
            print(f"  Replaced: {old} -> {new}")
    
    # 書き込み
    script_path.write_text(content, encoding='utf-8')
    print(f"\nUpdated script.js")

if __name__ == '__main__':
    main()
