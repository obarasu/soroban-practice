#!/usr/bin/env python3
"""サブフォルダ内のファイルマッピングをJavaScriptで出力"""
import os
from pathlib import Path
import re

def prettify_name(filename):
    """ファイル名を表示用に整形"""
    name = filename.replace('.pdf', '')
    # パターンに応じて整形
    # 例: 3-2even.pdf -> 3×2 均等
    name = re.sub(r'^(\d+)-(\d+)even(\d?)(-2col)?(-dflip)?$', 
                  lambda m: f"{m.group(1)}×{m.group(2)} 均等{m.group(3) or ''}{' (2列)' if m.group(4) else ''}{' (桁反転)' if m.group(5) else ''}", name)
    name = re.sub(r'^(\d+)-(\d+)same-digit(-2col)?$',
                  lambda m: f"{m.group(1)}×{m.group(2)} 同数字{' (2列)' if m.group(3) else ''}", name)
    name = re.sub(r'^div(\d+)deq(\d+)dremainder$',
                  lambda m: f"÷{m.group(1)}桁={m.group(2)}桁 余り", name)
    name = re.sub(r'^(\d+)d(\d+)r(-\d+)?$',
                  lambda m: f"{m.group(1)}桁{m.group(2)}口{m.group(3).replace('-', ' ') if m.group(3) else ''}", name)
    name = re.sub(r'^(\d+)d(\d+)r-mixed(\d+)col(-\d+)?$',
                  lambda m: f"{m.group(1)}桁{m.group(2)}口 ミックス{m.group(3)}段{m.group(4).replace('-', ' ') if m.group(4) else ''}", name)
    name = re.sub(r'^mitorizzan-(\d+)kyu(\d+)$',
                  lambda m: f"見取り算 {m.group(1)}級 ({m.group(2)})", name)
    name = re.sub(r'^mitorizzan-(\d+)and(\d+)kyu(\d+)$',
                  lambda m: f"見取り算 {m.group(1)}&{m.group(2)}級 ({m.group(3)})", name)
    name = re.sub(r'^mitorizzan-coli(\d+)-(\d+)(\d+)$',
                  lambda m: f"見取り算 段位{m.group(1)}-{m.group(2)} ({m.group(3)})", name)
    return name

def generate_mappings():
    base = Path('/Users/mini/clawd-karo/soroban-practice/assets/soroban/abacus-circuit/level-practice')
    
    mappings = {}
    
    for folder in base.iterdir():
        if folder.is_dir():
            folder_path = f'/assets/soroban/abacus-circuit/level-practice/{folder.name}/'
            files = []
            
            # サブサブフォルダがあるか確認
            subsubfolders = [d for d in folder.iterdir() if d.is_dir()]
            
            if subsubfolders:
                # サブサブフォルダがある場合
                for subfolder in sorted(subsubfolders):
                    sub_path = f'{folder_path}{subfolder.name}/'
                    sub_files = []
                    for pdf in sorted(subfolder.glob('*.pdf')):
                        sub_files.append({
                            'name': prettify_name(pdf.name),
                            'file': pdf.name
                        })
                    if sub_files:
                        mappings[sub_path] = sub_files
            else:
                # 直接PDFがある場合
                for pdf in sorted(folder.glob('*.pdf')):
                    files.append({
                        'name': prettify_name(pdf.name),
                        'file': pdf.name
                    })
                if files:
                    mappings[folder_path] = files
    
    # JavaScript形式で出力
    print("const subfolderMappings = {")
    for path, files in sorted(mappings.items()):
        print(f"    '{path}': [")
        for f in files:
            print(f"        {{ name: '{f['name']}', file: '{f['file']}' }},")
        print("    ],")
    print("};")

if __name__ == '__main__':
    generate_mappings()
