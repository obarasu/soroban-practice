// PDF File Mappings (relative to web server root)
// フォルダの場合はfiles配列でファイル一覧を定義
const pdfPaths = {
    abacus: {
        f0: {
            isFolder: true,
            basePath: '/assets/soroban/abacus-circuit/f0/',
            files: [
                { name: 'Catly版 本番形式001-072', file: 'Catly版-F0本番形式001-072.pdf' },
                { name: 'Catly版 ミニ001-030', file: 'Catly版F0ミニ-Ａ４サイズ-001-030.pdf' },
                { name: 'ザ春合宿2022版', file: 'F0-ザ春合宿2022版.pdf' },
                { name: 'ピコ版 第1-24回', file: 'F0-ピコ版-第1回-第24回-解答付.pdf' },
                { name: 'ピコ版 第25-48回', file: 'F0-ピコ版-第25回-第48回-解答付.pdf' },
                { name: 'F0ミニ001-010', file: 'Ｆ０ミニ001-010.pdf' }
            ]
        },
        f1: {
            isFolder: true,
            basePath: '/assets/soroban/abacus-circuit/f1/',
            files: [
                { name: 'Catly版 本番形式001-072', file: 'Catly版F1本番形式001-072.pdf' },
                { name: 'Catly版 ミニ001-040', file: 'Catly版F1ミニ-Ａ４サイズ-001-040.pdf' },
                { name: 'ザ春合宿2022版', file: 'F1-ザ春合宿2022版.pdf' },
                { name: 'ピコ版 第1-24回', file: 'F1-ピコ版-第1回-第24回-解答付.pdf' },
                { name: 'ピコ版 第25-48回', file: 'F1-ピコ版-第25回-第48回-解答付.pdf' },
                { name: 'ピコ版 第49-72回', file: 'F1-ピコ版-第49回-第72回-解答付.pdf' },
                { name: 'ピコ版 第73-80回', file: 'F1-ピコ版-第73回-第80回-解答付.pdf' },
                { name: 'F1ミニ001-040', file: 'Ｆ１ミニ001-040.pdf' }
            ]
        },
        f2: {
            isFolder: true,
            basePath: '/assets/soroban/abacus-circuit/f2/',
            files: [
                { name: 'Catly版 本番形式001-060', file: 'Catly版F2本番形式001-060.pdf' },
                { name: 'ザ春合宿2022版', file: 'F2-ザ春合宿2022版.pdf' },
                { name: 'ピコ版 第2集問題', file: 'F2-ピコ版-第2集問題24回分.pdf' },
                { name: 'ピコ版 第2集解答', file: 'F2-ピコ版-第2集解答.pdf' }
            ]
        },
        past: {
            isFolder: true,
            basePath: '/assets/soroban/abacus-circuit/past-exams/',
            files: [
                { name: '第283回（解答付）', file: '283-解答付.pdf' },
                { name: '第284回（解答付）', file: '284-解答付.pdf' },
                { name: '第285回（解答付）', file: '285-解答付.pdf' },
                { name: '第286回（解答付）', file: 'PDF286-解答付.pdf' },
                { name: '第287回（解答付）', file: '287-解答付.pdf' },
                { name: '第288回（解答付）', file: '288-解答付.pdf' },
                { name: '第289回（解答付）', file: '289-解答付.pdf' },
                { name: '第290回（解答付）', file: '290-解答付.pdf' },
                { name: '第291回', file: '291.pdf' },
                { name: '第292回', file: '292.pdf' },
                { name: '第293回', file: '293.pdf' },
                { name: '第294回', file: '294.pdf' },
                { name: '第295回', file: '295.pdf' },
                { name: '第300回', file: '300.pdf' },
                { name: '第305回', file: '305.pdf' },
                { name: '第310回', file: '310.pdf' },
                { name: '第315回', file: '315.pdf' },
                { name: '第320回', file: '320.pdf' },
                { name: '第322回', file: '322.pdf' }
            ]
        },
        level: {
            isFolder: true,
            basePath: '/assets/soroban/abacus-circuit/level-practice/',
            files: [
                { name: 'かけ算桁別', file: 'かけ算桁別プリント' },
                { name: 'わり算桁別', file: 'わり算桁別プリント' },
                { name: '見取り暗算桁別', file: '見取り暗算桁別プリント' },
                { name: '見取り算（分割練習）', file: '見取り算（分割練習）' },
                { name: '見取り算（珠算級準拠）', file: '見取り算（珠算級準拠）' }
            ]
        },
        color: {
            isFolder: true,
            basePath: '/assets/soroban/abacus-circuit/color-contest/',
            files: [
                { name: '①F2カラコン 001-060', file: '①F2カラコン001-060.pdf' },
                { name: '②黄カラコン 001-060', file: '②黄カラコン001-060.pdf' },
                { name: '③緑カラコン 001-060', file: '③緑カラコン001-060.pdf' },
                { name: '④赤カラコン 001-060', file: '④赤カラコン001-060.pdf' },
                { name: '⑤青カラコン 001-060', file: '⑤青カラコン001-060.pdf' },
                { name: '⑥黒カラコン 001-060', file: '⑥黒カラコン001-060.pdf' },
                { name: '⑦金カラコン 001-060', file: '⑦金カラコン001-060.pdf' },
                { name: '⑧難カラコン 001-060', file: '⑧難カラコン001-060.pdf' },
                { name: 'Lv.1 F2 001-020', file: 'カラコン-Lv.1-F2-001-020.pdf' },
                { name: 'Lv.2 黄 001-020', file: 'カラコン-Lv.2-黄-001-020.pdf' },
                { name: 'Lv.3 緑 001-020', file: 'カラコン-Lv.3-緑-001-020.pdf' },
                { name: 'Lv.4 赤 001-020', file: 'カラコン-Lv.4-赤-001-020.pdf' },
                { name: 'Lv.5 青 001-020', file: 'カラコン-Lv.5-青-001-020.pdf' },
                { name: 'Lv.6 黒 001-020', file: 'カラコン-Lv.6-黒-001-020.pdf' },
                { name: 'Lv.7 金 001-020', file: 'カラコン-Lv.7-金-001-020.pdf' },
                { name: 'Lv.8 難 001-020', file: 'カラコン-Lv.8-難-001-020.pdf' },
                { name: 'Lv.9 激 001-020', file: 'カラコン-Lv.9-激-001-020.pdf' },
                { name: 'Lv.10 変 001-020', file: 'カラコン-Lv.10-変-001-020.pdf' },
                { name: 'Lv.11 狂 001-020', file: 'カラコン-Lv.11-狂-001-020.pdf' },
                { name: 'Lv.12 神 001-020', file: 'カラコン-Lv.12-神-001-020.pdf' }
            ]
        }
    },
    sorocon: {
        '2024': '/assets/sorocon-practice/そろコン過去問/そろコン2024本番問題.pdf',
        '2022-2023': '/assets/sorocon-practice/そろコン過去問/そろコン2022-2023本番問題.pdf',
        '2018-2021': '/assets/sorocon-practice/そろコン過去問/そろコン過去問2021-2018.pdf',
        '2015-2017': '/assets/sorocon-practice/そろコン過去問/そろコン過去問2017-2015.pdf',
        'mitori': {
            isFolder: true,
            basePath: '/assets/sorocon-practice/見取り桁別/',
            files: [
                { name: '5桁10口', file: 'mitori_5keta_10kuchi.pdf' },
                { name: '6桁10口', file: 'mitori_6keta_10kuchi.pdf' },
                { name: '9桁10口', file: 'mitori_9keta_10kuchi.pdf' },
                { name: '10桁10口', file: 'mitori_10keta_10kuchi.pdf' }
            ]
        },
        'kake': {
            isFolder: true,
            basePath: '/assets/sorocon-practice/かけ桁別/',
            files: [
                { name: '3桁×2桁 (1)', file: '3-2_1.pdf' },
                { name: '3桁×2桁 (2)', file: '3-2_2.pdf' },
                { name: '3桁×3桁 (1)', file: '3-3_1.pdf' },
                { name: '3桁×3桁 (2)', file: '3-3_2.pdf' },
                { name: '4桁×3桁 (1)', file: '4-3_1.pdf' },
                { name: '4桁×3桁 (2)', file: '4-3_2.pdf' },
                { name: '4桁×4桁 (1)', file: '4-4_1.pdf' },
                { name: '4桁×4桁 (2)', file: '4-4_2.pdf' },
                { name: '5桁×4桁 (1)', file: '5-4_1.pdf' },
                { name: '5桁×4桁 (2)', file: '5-4_2.pdf' },
                { name: '5桁×5桁 (1)', file: '5-5_1.pdf' },
                { name: '5桁×5桁 (2)', file: '5-5_2.pdf' },
                { name: '6桁×5桁 (1)', file: '6-5_1.pdf' },
                { name: '6桁×5桁 (2)', file: '6-5_2.pdf' }
            ]
        },
        'wari': {
            isFolder: true,
            basePath: '/assets/sorocon-practice/わり桁別/',
            files: [
                { name: '2桁÷2桁 (1)', file: 'wari_2-2_1.pdf' },
                { name: '2桁÷2桁 (2)', file: 'wari_2-2_2.pdf' },
                { name: '3桁÷2桁 (1)', file: 'wari_2-3_1.pdf' },
                { name: '3桁÷2桁 (2)', file: 'wari_2-3_2.pdf' },
                { name: '3桁÷3桁 (1)', file: 'wari_3-3_1.pdf' },
                { name: '3桁÷3桁 (2)', file: 'wari_3-3_2.pdf' },
                { name: '4桁÷3桁 (1)', file: 'wari_3-4_1.pdf' },
                { name: '4桁÷3桁 (2)', file: 'wari_3-4_2.pdf' },
                { name: '4桁÷4桁 (1)', file: 'wari_4-4_1.pdf' },
                { name: '4桁÷4桁 (2)', file: 'wari_4-4_2.pdf' },
                { name: '4桁÷4桁 (3)', file: 'wari_4-4_3.pdf' },
                { name: '5桁÷4桁', file: 'wari_4-5.pdf' },
                { name: '5桁÷5桁 (1)', file: 'wari_5-5_1.pdf' },
                { name: '5桁÷5桁 (2)', file: 'wari_5-5_2.pdf' },
                { name: '6桁÷5桁 (1)', file: 'wari_5-6_1.pdf' },
                { name: '6桁÷5桁 (2)', file: 'wari_5-6_2.pdf' }
            ]
        }
    },
    anzan: {
        '2024': '/assets/soroban/anzan-contest/past/全国あんざんコンクール2024本番問題.pdf',
        '2023': '/assets/soroban/anzan-contest/past/全国あんざんコンクール2023本番問題.pdf',
        '2022': '/assets/soroban/anzan-contest/past/全国あんざんコンクール2022本番問題.pdf',
        'collection1': '/assets/soroban/anzan-contest/prints/全国あんざんコンクール第1集.pdf',
        'collection2': '/assets/soroban/anzan-contest/prints/全国あんざんコンクール第2集.pdf',
        'past': '/assets/soroban/anzan-contest/past/過去問2016-2021（解答あり）.pdf',
        'half': '/assets/soroban/anzan-contest/prints/あんコンハーフ2024.pdf'
    },
    answer: {
        'sorocon': '/assets/soroban/anzan-contest/prints/あんコン種目別解答用紙.pdf',
        'anzan': '/assets/soroban/anzan-contest/prints/読上算検定解答用紙.pdf'
    }
};

// Audio File Mappings - filename to Google Drive file ID
// Full mapping is in audio-gdrive-mapping.js (loaded separately)
// This is a simplified mapping for the main UI buttons
const audioFilenames = {
    '30sec': {
        1: '【30】読上7-16桁-1.mp3',
        2: '【30】読上7-16桁-2.mp3',
        3: '【30】読上7-16桁-3.mp3',
        4: '【30】読上7-16桁-4.mp3',
        5: '【30】読上7-16桁-5.mp3',
        6: '【30】読上7-16桁-6.mp3'
    },
    '35sec': {
        1: '【35】読上7-16桁-1.mp3',
        2: '【35】読上7-16桁-2.mp3',
        3: '【35】読上7-16桁-3.mp3',
        4: '【35】読上7-16桁-4.mp3',
        5: '【35】読上7-16桁-5.mp3'
    },
    '40sec': {
        1: '【40】読上7-16桁-1.mp3',
        2: '【40】読上7-16桁-2.mp3'
    },
    '50sec': {
        1: '【50】読上7-16桁-1【マイナス】.mp3',
        2: '【50】読上7-16桁-2【マイナス】.mp3'
    }
};

// Helper function to get Google Drive direct download URL
function getGDriveAudioUrl(filename) {
    if (typeof audioGDriveMapping !== 'undefined' && audioGDriveMapping[filename]) {
        const fileId = audioGDriveMapping[filename];
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    return null;
}

// Open PDF Function
function openPDF(category, type, name = '') {
    const pathData = pdfPaths[category][type];
    
    if (!pathData) {
        alert('PDFファイルが見つかりません');
        return;
    }

    // Show loading state
    if (event && event.target) event.target.classList.add('loading');

    // フォルダの場合（ファイル一覧がある場合）
    if (typeof pathData === 'object' && pathData.isFolder) {
        showPdfSelector(category, type, pathData);
        if (event && event.target) event.target.classList.remove('loading');
        return;
    }

    // 文字列でフォルダパスの場合（未対応）
    if (typeof pathData === 'string' && pathData.endsWith('/')) {
        alert(`このフォルダはまだファイル一覧が設定されていません。\n${pathData}`);
        if (event && event.target) event.target.classList.remove('loading');
        return;
    }
    
    // 単一ファイルの場合
    const path = typeof pathData === 'string' ? pathData : pathData.file;
    
    // 履歴に追加
    if (!name) name = `${category} - ${type}`;
    addToHistory(category, type, name);
    
    // Open PDF in new tab（Vercelでは日本語URLをそのまま使用）
    const newWindow = window.open(path, '_blank');
    
    if (!newWindow) {
        alert(`PDFを開きます:\n${path}\n\nポップアップがブロックされた場合は、ブラウザの設定を確認してください。`);
    }

    // Remove loading state
    setTimeout(() => {
        if (event && event.target) event.target.classList.remove('loading');
    }, 500);
}

// 現在表示中のPDFセレクターのデータを保持
let currentPdfSelectorData = null;

// PDFファイル選択モーダルを表示
function showPdfSelector(category, type, pathData) {
    // 既存のモーダルがあれば削除
    const existing = document.getElementById('pdf-selector-modal');
    if (existing) existing.remove();
    
    // データを保持
    currentPdfSelectorData = pathData;
    
    const modal = document.createElement('div');
    modal.id = 'pdf-selector-modal';
    modal.className = 'modal';
    
    const typeLabel = {
        'f0': 'F0プリント',
        'f1': 'F1プリント',
        'f2': 'F2プリント',
        'past': '過去問題',
        'level': '桁別練習',
        'color': '色別カラコン',
        'mitori': '見取り桁別',
        'kake': 'かけ算桁別',
        'wari': 'わり算桁別'
    }[type] || type;
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>📄 ${typeLabel}</h3>
                <button class="modal-close" onclick="closePdfSelector()">✕</button>
            </div>
            <div class="modal-body">
                <div class="pdf-file-list">
                    ${pathData.files.map((f, i) => `
                        <button class="action-btn pdf-file-btn" 
                                onclick="openPdfFileByIndex(${i})">
                            📄 ${f.name}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// PDFファイル選択モーダルを閉じる
function closePdfSelector() {
    const modal = document.getElementById('pdf-selector-modal');
    if (modal) modal.remove();
    currentPdfSelectorData = null;
}

// インデックスでPDFファイルを開く
function openPdfFileByIndex(index) {
    if (!currentPdfSelectorData || !currentPdfSelectorData.files[index]) {
        alert('ファイルが見つかりません');
        return;
    }
    
    const fileInfo = currentPdfSelectorData.files[index];
    const basePath = currentPdfSelectorData.basePath;
    
    // Vercelでは日本語URLをエンコードせずにそのまま使用
    const fullPath = basePath + fileInfo.file;
    
    // 履歴に追加
    addToHistory('pdf', fileInfo.file, fileInfo.name);
    
    // 開く
    const newWindow = window.open(fullPath, '_blank');
    
    if (!newWindow) {
        alert(`PDFを開きます:\n${fileInfo.name}\n\nポップアップがブロックされた場合は、ブラウザの設定を確認してください。`);
    }
    
    closePdfSelector();
}

// Play Audio Function
function playAudio(duration, number) {
    const filename = audioFilenames[duration] && audioFilenames[duration][number];
    
    if (!filename) {
        alert('音声ファイルが見つかりません');
        return;
    }

    const audioUrl = getGDriveAudioUrl(filename);
    
    if (!audioUrl) {
        alert(`音声ファイルのマッピングが見つかりません:\n${filename}`);
        return;
    }

    const player = document.getElementById('audio-player');
    const audioElement = document.getElementById('audio-element');
    const trackName = document.getElementById('current-track');

    // Set track info
    const name = `${duration} 問題-${number}`;
    trackName.textContent = `🎵 ${name}`;

    // 履歴に追加
    addToHistory('audio', `${duration}-${number}`, name);

    // Set audio source from Google Drive
    audioElement.src = audioUrl;

    // Show player
    player.classList.remove('hidden');

    // Play audio
    audioElement.play().catch(err => {
        alert(`音声の再生に失敗しました:\n${filename}\n\nGoogle Driveの共有設定を確認してください。`);
        console.error('Audio playback error:', err);
    });

    // Scroll to player
    player.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Close Player Function
function closePlayer() {
    const player = document.getElementById('audio-player');
    const audioElement = document.getElementById('audio-element');

    // Stop audio
    audioElement.pause();
    audioElement.currentTime = 0;

    // Hide player
    player.classList.add('hidden');
}

// ========================================
// お気に入り機能
// ========================================
let favorites = JSON.parse(localStorage.getItem('soroban-favorites') || '[]');

function toggleFavorite(category, type, name) {
    const key = `${category}-${type}`;
    const index = favorites.findIndex(f => f.key === key);
    
    if (index > -1) {
        // 削除
        favorites.splice(index, 1);
        updateFavoriteButton(key, false);
    } else {
        // 追加
        favorites.push({ key, category, type, name, timestamp: Date.now() });
        updateFavoriteButton(key, true);
    }
    
    localStorage.setItem('soroban-favorites', JSON.stringify(favorites));
    renderFavorites();
}

function updateFavoriteButton(key, isFavorite) {
    const icon = document.querySelector(`[data-fav-key="${key}"]`);
    if (icon) {
        icon.textContent = isFavorite ? '⭐' : '☆';
        icon.classList.toggle('active', isFavorite);
    }
}

function renderFavorites() {
    const container = document.getElementById('favorites-list');
    if (!container) return;
    
    if (favorites.length === 0) {
        container.innerHTML = '<p class="empty-state">お気に入りはまだありません</p>';
        return;
    }
    
    container.innerHTML = favorites.map(fav => `
        <button class="action-btn favorite-item" onclick="openFromFavorite('${fav.category}', '${fav.type}')">
            ${fav.name}
            <span class="remove-fav" onclick="event.stopPropagation(); toggleFavorite('${fav.category}', '${fav.type}', '${fav.name}')">✕</span>
        </button>
    `).join('');
}

function openFromFavorite(category, type) {
    if (category === 'audio') {
        const [duration, number] = type.split('-');
        playAudio(duration, number);
    } else {
        openPDF(category, type);
    }
}

// ========================================
// 履歴機能
// ========================================
let history = JSON.parse(localStorage.getItem('soroban-history') || '[]');

function addToHistory(category, type, name) {
    const key = `${category}-${type}`;
    
    // 重複を削除
    history = history.filter(h => h.key !== key);
    
    // 先頭に追加
    history.unshift({ key, category, type, name, timestamp: Date.now() });
    
    // 最大10件まで保持
    if (history.length > 10) {
        history = history.slice(0, 10);
    }
    
    localStorage.setItem('soroban-history', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const container = document.getElementById('history-list');
    if (!container) return;
    
    if (history.length === 0) {
        container.innerHTML = '<p class="empty-state">履歴はまだありません</p>';
        return;
    }
    
    container.innerHTML = history.map(item => {
        const date = new Date(item.timestamp);
        const timeStr = `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`;
        
        return `
            <button class="action-btn history-item" onclick="openFromHistory('${item.category}', '${item.type}')">
                <span class="history-name">${item.name}</span>
                <span class="history-time">${timeStr}</span>
            </button>
        `;
    }).join('');
}

function openFromHistory(category, type) {
    openFromFavorite(category, type); // 同じロジック
}

function clearHistory() {
    if (confirm('履歴をすべて削除しますか？')) {
        history = [];
        localStorage.setItem('soroban-history', JSON.stringify(history));
        renderHistory();
    }
}

// Service Worker Registration (PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}

// Add haptic feedback for iOS devices
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.action-btn');
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', () => {
            // iOS haptic feedback
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(10);
            }
        });
    });
    
    // お気に入りと履歴を初期表示
    renderFavorites();
    renderHistory();
    
    // お気に入りアイコンの初期状態を設定
    favorites.forEach(fav => {
        updateFavoriteButton(fav.key, true);
    });
});

// Prevent zoom on double-tap (iOS)
let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// ========================================
// アバカスサーキット記録機能
// ========================================
const RECORDS_KEY = 'soroban-abacus-records';
let abacusRecords = JSON.parse(localStorage.getItem(RECORDS_KEY) || '[]');

// タイマー関連
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
const TIMER_DURATION = 5 * 60; // 5分

// 記録モーダルを開く
function openRecordModal() {
    const modal = document.getElementById('record-modal');
    if (modal) {
        modal.classList.remove('hidden');
        resetTimer();
        document.getElementById('record-answered').value = '';
        document.getElementById('record-wrong').value = '';
        document.getElementById('record-score').textContent = '-';
    }
}

// 記録モーダルを閉じる
function closeRecordModal() {
    const modal = document.getElementById('record-modal');
    if (modal) {
        modal.classList.add('hidden');
        stopTimer();
    }
}

// タイマー開始
function startTimer() {
    if (timerRunning) return;
    
    timerRunning = true;
    document.getElementById('timer-start').classList.add('hidden');
    document.getElementById('timer-stop').classList.remove('hidden');
    
    timerInterval = setInterval(() => {
        timerSeconds++;
        updateTimerDisplay();
        
        // 5分経過で自動停止
        if (timerSeconds >= TIMER_DURATION) {
            stopTimer();
            alert('5分経過しました！');
        }
    }, 1000);
}

// タイマー停止
function stopTimer() {
    timerRunning = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    document.getElementById('timer-start').classList.remove('hidden');
    document.getElementById('timer-stop').classList.add('hidden');
}

// タイマーリセット
function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    updateTimerDisplay();
}

// タイマー表示更新
function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    const display = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.getElementById('timer-display').textContent = display;
    
    // 残り時間も表示
    const remaining = TIMER_DURATION - timerSeconds;
    const remMins = Math.floor(remaining / 60);
    const remSecs = remaining % 60;
    document.getElementById('timer-remaining').textContent = 
        `残り ${remMins}:${String(remSecs).padStart(2, '0')}`;
}

// スコア計算
function calculateScore() {
    const answered = parseInt(document.getElementById('record-answered').value) || 0;
    const wrong = parseInt(document.getElementById('record-wrong').value) || 0;
    
    // 点数計算: 解答数 - (間違い数 × 2)
    const score = Math.max(0, answered - (wrong * 2));
    document.getElementById('record-score').textContent = score;
    return score;
}

// 記録を保存
function saveRecord() {
    const type = document.getElementById('record-type').value;
    const answered = parseInt(document.getElementById('record-answered').value) || 0;
    const wrong = parseInt(document.getElementById('record-wrong').value) || 0;
    
    if (answered === 0) {
        alert('解答数を入力してください');
        return;
    }
    
    const score = calculateScore();
    
    const record = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        type: type,
        answered: answered,
        wrong: wrong,
        score: score,
        timeSec: timerSeconds
    };
    
    abacusRecords.unshift(record);
    
    // 最大100件まで保持
    if (abacusRecords.length > 100) {
        abacusRecords = abacusRecords.slice(0, 100);
    }
    
    localStorage.setItem(RECORDS_KEY, JSON.stringify(abacusRecords));
    
    closeRecordModal();
    renderRecords();
    alert(`記録を保存しました！\n${getTypeLabel(type)}: ${score}点`);
}

// 種目ラベル取得
function getTypeLabel(type) {
    const labels = {
        'multiplication': 'かけ算',
        'division': 'わり算',
        'mitori': '見取り算'
    };
    return labels[type] || type;
}

// 記録一覧を表示
function renderRecords() {
    const container = document.getElementById('records-list');
    if (!container) return;
    
    if (abacusRecords.length === 0) {
        container.innerHTML = '<p class="empty-state">記録はまだありません</p>';
        return;
    }
    
    // 最新10件を表示
    const recentRecords = abacusRecords.slice(0, 10);
    
    container.innerHTML = recentRecords.map(record => {
        const date = new Date(record.date);
        const dateStr = `${date.getMonth()+1}/${date.getDate()}`;
        const mins = Math.floor(record.timeSec / 60);
        const secs = record.timeSec % 60;
        const timeStr = `${mins}:${String(secs).padStart(2, '0')}`;
        
        return `
            <div class="record-item">
                <div class="record-header">
                    <span class="record-type">${getTypeLabel(record.type)}</span>
                    <span class="record-date">${dateStr}</span>
                </div>
                <div class="record-body">
                    <span class="record-score">${record.score}点</span>
                    <span class="record-detail">
                        ${record.answered}問中${record.answered - record.wrong}問正解
                        (${timeStr})
                    </span>
                </div>
            </div>
        `;
    }).join('');
    
    // 統計も更新
    renderStats();
}

// 統計表示
function renderStats() {
    const statsContainer = document.getElementById('records-stats');
    if (!statsContainer) return;
    
    if (abacusRecords.length === 0) {
        statsContainer.innerHTML = '';
        return;
    }
    
    // 種目別の統計
    const types = ['multiplication', 'division', 'mitori'];
    const stats = types.map(type => {
        const typeRecords = abacusRecords.filter(r => r.type === type);
        if (typeRecords.length === 0) return null;
        
        const scores = typeRecords.map(r => r.score);
        const best = Math.max(...scores);
        const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        
        return {
            type: type,
            count: typeRecords.length,
            best: best,
            avg: avg
        };
    }).filter(s => s !== null);
    
    statsContainer.innerHTML = `
        <div class="stats-grid">
            ${stats.map(s => `
                <div class="stat-card">
                    <div class="stat-type">${getTypeLabel(s.type)}</div>
                    <div class="stat-best">最高: ${s.best}点</div>
                    <div class="stat-avg">平均: ${s.avg}点</div>
                    <div class="stat-count">${s.count}回</div>
                </div>
            `).join('')}
        </div>
    `;
}

// 記録をクリア
function clearRecords() {
    if (confirm('すべての記録を削除しますか？')) {
        abacusRecords = [];
        localStorage.setItem(RECORDS_KEY, JSON.stringify(abacusRecords));
        renderRecords();
    }
}

// 初期化時に記録を表示
document.addEventListener('DOMContentLoaded', () => {
    renderRecords();
});
