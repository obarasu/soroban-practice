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

// 認証状態の監視
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('Firebase auth ready:', user.uid);
        firestoreReady = true;
        // 記録を読み込む
        if (typeof loadRecordsAndRender === 'function') {
            loadRecordsAndRender();
        }
    }
});
