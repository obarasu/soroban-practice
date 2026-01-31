// Firebase設定（yamamoto-jukuプロジェクトを共用）
const firebaseConfig = {
    apiKey: "AIzaSyD-me1IjLDFh6JPB5MALsIgXJ4sB-WOf-M",
    authDomain: "yamamoto-juku.firebaseapp.com",
    projectId: "yamamoto-juku",
    storageBucket: "yamamoto-juku.firebasestorage.app",
    messagingSenderId: "587077682926",
    appId: "1:587077682926:web:1f1e4a22fd25f1d7b8d5ff"
};

// Firebase初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// 匿名認証でユーザーID取得
let currentUserId = localStorage.getItem('soroban-user-id');

async function ensureAuth() {
    if (auth.currentUser) {
        return auth.currentUser.uid;
    }
    
    // 既存のローカルIDがあればそれを使う
    if (currentUserId) {
        return currentUserId;
    }
    
    // 匿名認証
    try {
        const result = await auth.signInAnonymously();
        currentUserId = result.user.uid;
        localStorage.setItem('soroban-user-id', currentUserId);
        return currentUserId;
    } catch (error) {
        console.error('Auth error:', error);
        // フォールバック: ローカルID生成
        currentUserId = 'local_' + Date.now();
        localStorage.setItem('soroban-user-id', currentUserId);
        return currentUserId;
    }
}

// Firestoreから記録を取得
async function loadRecordsFromFirestore() {
    try {
        const userId = await ensureAuth();
        const snapshot = await db.collection('soroban_records')
            .where('userId', '==', userId)
            .orderBy('date', 'desc')
            .limit(100)
            .get();
        
        const records = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            records.push({
                id: doc.id,
                ...data,
                date: data.date?.toDate?.() ? data.date.toDate().toISOString() : data.date
            });
        });
        
        return records;
    } catch (error) {
        console.error('Failed to load from Firestore:', error);
        return null;
    }
}

// Firestoreに記録を保存
async function saveRecordToFirestore(record) {
    try {
        const userId = await ensureAuth();
        const docRef = await db.collection('soroban_records').add({
            ...record,
            userId: userId,
            date: firebase.firestore.Timestamp.fromDate(new Date(record.date)),
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('Saved to Firestore:', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('Failed to save to Firestore:', error);
        return null;
    }
}

// Firestore初期化完了フラグ
let firestoreReady = false;

// ========================================
// お気に入り機能（Firestore）
// ========================================

// Firestoreからお気に入りを取得
async function loadFavoritesFromFirestore() {
    try {
        const userId = await ensureAuth();
        const snapshot = await db.collection('soroban_favorites')
            .where('userId', '==', userId)
            .orderBy('timestamp', 'desc')
            .get();
        
        const favorites = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            favorites.push({
                id: doc.id,
                key: data.key,
                category: data.category,
                type: data.type,
                name: data.name,
                timestamp: data.timestamp?.toMillis?.() || data.timestamp
            });
        });
        
        return favorites;
    } catch (error) {
        console.error('Failed to load favorites from Firestore:', error);
        // フォールバック: localStorage
        return JSON.parse(localStorage.getItem('soroban-favorites') || '[]');
    }
}

// Firestoreにお気に入りを追加
async function addFavoriteToFirestore(favorite) {
    try {
        const userId = await ensureAuth();
        const docRef = await db.collection('soroban_favorites').add({
            ...favorite,
            userId: userId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('Favorite saved to Firestore:', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('Failed to save favorite to Firestore:', error);
        return null;
    }
}

// Firestoreからお気に入りを削除
async function removeFavoriteFromFirestore(key) {
    try {
        const userId = await ensureAuth();
        const snapshot = await db.collection('soroban_favorites')
            .where('userId', '==', userId)
            .where('key', '==', key)
            .get();
        
        const batch = db.batch();
        snapshot.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
        
        console.log('Favorite removed from Firestore:', key);
        return true;
    } catch (error) {
        console.error('Failed to remove favorite from Firestore:', error);
        return false;
    }
}

// ========================================
// 履歴機能（Firestore）
// ========================================

// Firestoreから履歴を取得
async function loadHistoryFromFirestore() {
    try {
        const userId = await ensureAuth();
        const snapshot = await db.collection('soroban_history')
            .where('userId', '==', userId)
            .orderBy('timestamp', 'desc')
            .limit(10)
            .get();
        
        const history = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            history.push({
                id: doc.id,
                key: data.key,
                category: data.category,
                type: data.type,
                name: data.name,
                timestamp: data.timestamp?.toMillis?.() || data.timestamp
            });
        });
        
        return history;
    } catch (error) {
        console.error('Failed to load history from Firestore:', error);
        return JSON.parse(localStorage.getItem('soroban-history') || '[]');
    }
}

// Firestoreに履歴を追加
async function addHistoryToFirestore(item) {
    try {
        const userId = await ensureAuth();
        
        // 既存の同じキーを削除
        const existing = await db.collection('soroban_history')
            .where('userId', '==', userId)
            .where('key', '==', item.key)
            .get();
        
        const batch = db.batch();
        existing.forEach(doc => batch.delete(doc.ref));
        
        // 新規追加
        const newDoc = db.collection('soroban_history').doc();
        batch.set(newDoc, {
            ...item,
            userId: userId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        await batch.commit();
        
        // 古い履歴を削除（10件超過分）
        const all = await db.collection('soroban_history')
            .where('userId', '==', userId)
            .orderBy('timestamp', 'desc')
            .get();
        
        if (all.size > 10) {
            const deleteBatch = db.batch();
            all.docs.slice(10).forEach(doc => deleteBatch.delete(doc.ref));
            await deleteBatch.commit();
        }
        
        return true;
    } catch (error) {
        console.error('Failed to save history to Firestore:', error);
        return false;
    }
}

// 認証状態の監視
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('Firebase auth ready:', user.uid);
        firestoreReady = true;
        // 記録を読み込む
        if (typeof loadRecordsAndRender === 'function') {
            loadRecordsAndRender();
        }
        // お気に入りと履歴を読み込む
        if (typeof loadFavoritesAndRender === 'function') {
            loadFavoritesAndRender();
        }
        if (typeof loadHistoryAndRender === 'function') {
            loadHistoryAndRender();
        }
    }
});
