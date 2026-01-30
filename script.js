// PDF File Mappings (relative to web server root)
const pdfPaths = {
    abacus: {
        f0: '/assets/soroban/アバカスサーキット/F0プリント/',
        f1: '/assets/soroban/アバカスサーキット/F1プリント/',
        f2: '/assets/soroban/アバカスサーキット/F2プリント/',
        past: '/assets/soroban/アバカスサーキット/本戦の過去問題・解答/',
        level: '/assets/soroban/アバカスサーキット/桁別練習プリント/',
        color: '/assets/soroban/アバカスサーキット/色別カラコン/'
    },
    sorocon: {
        '2024': '/assets/sorocon-practice/そろコン過去問/そろコン2024本番問題.pdf',
        '2022-2023': '/assets/sorocon-practice/そろコン過去問/そろコン2022-2023本番問題.pdf',
        '2018-2021': '/assets/sorocon-practice/そろコン過去問/そろコン過去問2021-2018.pdf',
        '2015-2017': '/assets/sorocon-practice/そろコン過去問/そろコン過去問2017-2015.pdf',
        'mitori': '/assets/sorocon-practice/見取り桁別/',
        'kake': '/assets/sorocon-practice/かけ桁別/',
        'wari': '/assets/sorocon-practice/わり桁別/'
    },
    anzan: {
        '2024': '/assets/soroban/あんざんコンクール/過去問/全国あんざんコンクール2024本番問題.pdf',
        '2023': '/assets/soroban/あんざんコンクール/過去問/全国あんざんコンクール2023本番問題.pdf',
        '2022': '/assets/soroban/あんざんコンクール/過去問/全国あんざんコンクール2022本番問題.pdf',
        'collection1': '/assets/soroban/あんざんコンクール/プリント/全国あんざんコンクール第1集.pdf',
        'collection2': '/assets/soroban/あんざんコンクール/プリント/全国あんざんコンクール第2集.pdf',
        'past': '/assets/soroban/あんざんコンクール/過去問/過去問2016-2021（解答あり）.pdf',
        'half': '/assets/soroban/あんざんコンクール/プリント/あんコンハーフ2024.pdf'
    },
    answer: {
        'sorocon': '/assets/sorocon-audio/解答用紙/そろコン種目別解答用紙2024.pdf',
        'anzan': '/assets/soroban-audio/解答用紙/そろコン読上解答用紙.pdf'
    }
};

// Audio File Mappings (relative to web server root)
const audioPaths = {
    '30sec': {
        1: '/assets/soroban/そろコン2025過去音声/【30】読上7-16桁-1.mp3',
        2: '/assets/soroban/そろコン2025過去音声/【30】読上7-16桁-2.mp3',
        3: '/assets/soroban/そろコン2025過去音声/【30】読上7-16桁-3.mp3'
    },
    '35sec': {
        1: '/assets/soroban/そろコン2025過去音声/【35】読上7-16桁-1.mp3',
        2: '/assets/soroban/そろコン2025過去音声/【35】読上7-16桁-2.mp3'
    },
    '40sec': {
        1: '/assets/soroban/そろコン2025過去音声/【40】読上7-16桁-1.mp3',
        2: '/assets/soroban/そろコン2025過去音声/【40】読上7-16桁-2.mp3'
    },
    '50sec': {
        1: '/assets/soroban/そろコン2025過去音声/【50】読上7-16桁-1【マイナス】.mp3'
    }
};

// Open PDF Function
function openPDF(category, type) {
    const path = pdfPaths[category][type];
    
    if (!path) {
        alert('PDFファイルが見つかりません');
        return;
    }

    // Show loading state
    event.target.classList.add('loading');

    // Check if it's a directory (needs file listing)
    if (path.endsWith('/')) {
        // For directories, show alert (future: could show file browser)
        alert(`フォルダ内のPDFを開きます:\n${path}\n\nブラウザで直接フォルダは開けません。\n個別のファイルリンクが必要です。`);
        event.target.classList.remove('loading');
        return;
    }
    
    // Open PDF in new tab
    const newWindow = window.open(path, '_blank');
    
    if (!newWindow) {
        // Fallback: show alert with path
        alert(`PDFを開きます:\n${path}\n\nポップアップがブロックされた場合は、ブラウザの設定を確認してください。`);
    }

    // Remove loading state
    setTimeout(() => {
        event.target.classList.remove('loading');
    }, 500);
}

// Play Audio Function
function playAudio(duration, number) {
    const path = audioPaths[duration][number];
    
    if (!path) {
        alert('音声ファイルが見つかりません');
        return;
    }

    const player = document.getElementById('audio-player');
    const audioElement = document.getElementById('audio-element');
    const trackName = document.getElementById('current-track');

    // Set track info
    trackName.textContent = `🎵 ${duration} 問題-${number}`;

    // Set audio source (relative path from web server)
    audioElement.src = path;

    // Show player
    player.classList.remove('hidden');

    // Play audio
    audioElement.play().catch(err => {
        alert(`音声の再生に失敗しました:\n${path}\n\nファイルが存在するか確認してください。`);
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
