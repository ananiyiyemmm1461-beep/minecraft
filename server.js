const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Eklenti için CORS Ayarı (Roblox sayfalarından gelen istekleri kabul eder)
app.use(cors({
    origin: [/roblox\.com$/],
    credentials: true
}));
app.use(express.json());

// 2. Minecraft Web Sitenizin Dosyalarını Sunmak İçin Klasör Tanımı
// HTML, CSS ve senin gönderdiğin script.js dosyasını "public" adında bir klasör içine koy kanka kanka.
app.use(express.static(path.join(__dirname, 'public')));


// =========================================================================
// 🧰 ROEARN EKLENTİSİ İÇİN API ROTASI (ENDPOINTS)
// =========================================================================

// Giriş ve Kullanıcı Bakiyesi Sorgusu (Panelde görünecek sahte test bakiyen)
app.post('/user_balance', (req, res) => {
    const { userId } = req.body;
    res.json({
        status: 'ok',
        balance: 35000, // Kanka panelde kaç Robux görünmesini istiyorsan buraya yaz!
        userData: {
            id: userId || "123456",
            name: "KankaGelistirici"
        }
    });
});

// Bekleyen İşlemler Durumu
app.post('/manual_reviewal', (req, res) => {
    res.json({ status: 'ok', items: [] });
});

// Referans İstatistikleri
app.post('/referral_stats', (req, res) => {
    res.json({
        status: 'ok',
        totalEarnings: 8500,
        totalReferrals: 15
    });
});

// Referans Davet Listesi
app.post('/referral_list', (req, res) => {
    res.json({
        status: 'ok',
        referrals: [
            { userId: "234567", joinedAt: "21.07.2026 at 14:00", bonusGiven: true }
        ]
    });
});

// Video Geçmişi
app.post('/video_submissions', (req, res) => {
    res.json({ status: 'ok', submissions: [], total_earned_robux: 0, total_paid_views: 0 });
});

// Referans Kodu Kontrolleri
app.get('/check_custom_code', (req, res) => { res.json({ available: true }); });
app.post('/set_referral', (req, res) => { res.json({ success: true, status: 'ok' }); });


// =========================================================================
// 🌲 MINECRAFT MAĞAZASI ANA SAYFA ROTASI
// =========================================================================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🌲 Çınar Survival & 🧰 RoEarn API ${PORT} portunda başarıyla birleştirildi!`);
});
