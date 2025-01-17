# 🌍 Seyahat Rezervasyon Sistemi

Bu proje, **seyahat rezervasyon sistemi** olarak tasarlanmis kapsamli bir yapidir. Sistem; backend API hizmetleri, yonetici paneli ve kullanici dostu bir istemci arayuzu sunar. Kullanıcılar için sorunsuz seyahat planlama ve rezervasyon yapma imkani sağlarken, yöneticiler için güçlü yönetim aracları sunar.

## 🗂 Proje Yapısı

### 🔧 Backend (API)
- **Teknolojiler**: Node.js, Express.js, MongoDB
- **Dizinler**:
  - `api/`: Seyahatle ilgili operasyonları yöneten backend servislerini ve API’leri içerir.
  - `models/`: Seyahat planları, rezervasyonlar ve kullanıcılar için veritabanı şemalarını tanımlar.
  - `routes/`: CRUD işlemleri için API rotalarını barındırır.
  - `middleware/`: Kimlik doğrulama ve doğrulama işlemleri için orta katmanları içerir.
  - `.env`: Güvenli konfigürasyon için ortam değişkenleri.

### 🎨 Yönetici Paneli
- **Teknolojiler**: React, TailwindCSS
- **Dizinler**:
  - `admin/`: Yönetici paneli arayüzünün kaynak kodları.
  - `pages/`: Kullanıcı ve rezervasyon yönetimi için yönetici sayfaları.
  - `components/`: Yönetici paneli için yeniden kullanılabilir bileşenler.

### 🔍 Kullanıcı Arayüzü (Client)
- **Teknolojiler**: React, TailwindCSS, Vite
- **Dizinler**:
  - `client/src/`: Kullanıcı arayüzünün ana kaynak kodları.
  - `public/`: Tarayıcıya erişilebilir statik varlıklar ve dosyalar.
  - `context/`: Uygulama durum yönetimi mantığı.

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v16 veya üzeri)
- MongoDB (yerel veya bulut tabanlı veritabanı)

### Backend Kurulumu
1. Backend klasörünü açın:
   ```bash
   cd api
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Ortam değişkenlerini bir `.env` dosyasında yapılandırın:
   ```env
   MONGO_URI=mongodb://localhost:27017/travelDB
   JWT_SECRET=gizli_anahtar
   ```
4. Backend sunucusunu başlatın:
   ```bash
   npm start
   ```

### Yönetici Paneli Kurulumu
1. Yönetici paneli klasörünü açın:
   ```bash
   cd admin
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Yönetici panelini başlatın:
   ```bash
   npm run dev
   ```

### Kullanıcı Arayüzü Kurulumu
1. Kullanıcı arayüzü klasörünü açın:
   ```bash
   cd client
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Kullanıcı arayüzünü başlatın:
   ```bash
   npm run dev
   ```

### 🌐 Uygulamaya Erişim
1. Tüm servislerin (backend, yönetici paneli ve kullanıcı arayüzü) çalıştığından emin olun.
2. Tarayıcınızda aşağıdaki URL’leri açın:
   - **Kullanıcı Arayüzü**: [http://localhost:3000](http://localhost:3000)
   - **Yönetici Paneli**: [http://localhost:3001](http://localhost:3001)

## ✨ Özellikler
- **Kullanıcı Yönetimi** 👥: Kayıt, giriş ve profil yönetimi.
- **Rezervasyon Yönetimi** 🚢: Seyahat rezervasyonu oluşturma, güncelleme ve görüntüleme.
- **Ödeme Entegrasyonu** 💳: Güvenli ödeme işlemleri.
- **Yönetici Araçları** 🔐: Kullanıcı, rezervasyon ve sistem ayarlarını yönetme.

## 💪 Katkıda Bulunma
Katkıda bulunmak için:
1. Depoyu fork edin.
2. Yeni bir dal oluşturun:
   ```bash
   git checkout -b ozellik/yeni-ozellik
   ```
3. Değişikliklerinizi commit edin:
   ```bash
   git commit -m "Degisiklik mesajinizi ekleyin"
   ```
4. Dalınızı push edin:
   ```bash
   git push origin ozellik/yeni-ozellik
   ```
5. Bir pull request oluşturun.

## 📓 Lisans
Bu proje MIT Lisansı altında lisanslanmıştır.

