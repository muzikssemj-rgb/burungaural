# Burung Aural 🎵

Permainan lastik untuk latihan **aural muzik**:

- **Ujian 1:** Skel Major / Minor Harmonik
- **Ujian 2:** Kord Major / Minor
- **Ujian 3:** Jeda dari Unison hingga Perfek ke-8

Permainan ini menyimpan rekod markah murid dalam **Cloud Firestore**. Ia juga ada Panel Guru untuk mendaftar sekolah dan murid serta menjana kod murid, dan laporan progress boleh dimuat turun dalam bentuk **PDF**.

## Kandungan folder
| Fail | Fungsi |
|---|---|
| `index.html` | Permainan penuh |
| `firebase-config.js` | **Isi konfigurasi Firebase anda di sini** |
| `firestore.rules` | Peraturan keselamatan Firestore |
| `firebase.json`, `.firebaserc` | Untuk Firebase Hosting (pilihan B) |
| `assets/muka-hadapan.png` | Gambar muka hadapan (salinan, sudah dibenamkan dalam index.html) |

---

## LANGKAH 1: Sediakan Firebase (~10 minit)

### 1.1 Cipta projek
1. Buka **https://console.firebase.google.com** dan log masuk dengan akaun Google.
2. Tekan **Create a project**, beri nama (cth. `burung-aural`), kemudian tekan **Continue**.
3. Google Analytics: boleh **matikan**. Tekan **Create project**.

### 1.2 Aktifkan Firestore
1. Menu kiri: **Build → Firestore Database → Create database**.
2. Lokasi: **asia-southeast1 (Singapore)**. Lokasi tidak boleh ditukar selepas ini.
3. Pilih **Start in production mode**, kemudian tekan **Create**.
4. Buka tab **Rules**, padam semua kandungan, tampal **seluruh isi `firestore.rules`**, kemudian tekan **Publish**.

### 1.3 Aktifkan Authentication
1. Menu kiri: **Build → Authentication → Get started**.
2. Tab **Sign-in method**:
   - **Email/Password**: Enable, kemudian Save. Ini untuk Panel Guru.
   - **Anonymous**: Enable, kemudian Save. Ini untuk murid yang masuk dengan kod.

### 1.4 Dapatkan konfigurasi web
1. Tekan ikon ⚙ di sebelah *Project Overview*, kemudian **Project settings**.
2. Di bahagian **Your apps**, tekan ikon **`</>`** (Web).
3. Beri nama app (cth. `burung-aural-web`) dan **jangan** tanda Firebase Hosting. Tekan **Register app**.
4. Salin nilai dalam `const firebaseConfig = { ... }`.
5. Buka **`firebase-config.js`** dan gantikan semua nilai `GANTI...` dengan nilai tersebut.

---

## LANGKAH 2: Upload ke GitHub & online (pilihan A: GitHub Pages, paling mudah)

1. Log masuk **https://github.com**, kemudian **New repository**. Nama cth. `burung-aural`, tetapan **Public**, kemudian **Create repository**.
2. Tekan **uploading an existing file** dan seret **semua fail & folder** dalam folder ini (termasuk `assets/`). Tekan **Commit changes**.
   > Fail `.gitignore`, `.firebaserc` dan fail lain yang bermula dengan titik mungkin tersembunyi. Fail-fail itu tidak wajib.
3. Repo: **Settings → Pages**. Pada *Source*, pilih **Deploy from a branch**, branch **main**, folder **/(root)**, kemudian tekan **Save**.
4. Tunggu 1–2 minit. Pautan anda: `https://NAMA-GITHUB-ANDA.github.io/burung-aural/`
5. **Penting:** Firebase console → **Authentication → Settings → Authorized domains → Add domain**, kemudian tambah `NAMA-GITHUB-ANDA.github.io`.

## (Pilihan B) Firebase Hosting
Perlu Node.js (https://nodejs.org). Dalam Terminal atau Command Prompt, di dalam folder ini:
```bash
npm install -g firebase-tools
firebase login
firebase use --add            # pilih projek anda
firebase deploy               # deploy hosting + firestore rules
```
Pautan: `https://PROJECT_ID.web.app`. Domain ini sudah dibenarkan secara automatik.

---

## LANGKAH 3: Mula guna

### Guru (wajib dibuat sekali selepas online)
1. Buka pautan permainan, tekan **Panel Guru** dan masukkan kata laluan anda.
   Kali pertama, akaun guru dicipta secara automatik dalam Firebase.
2. **Daftar sekolah**, kemudian pilih fail logo dan tekan **Simpan Logo**. Logo muncul pada skrin murid, rekod dan semua PDF.
3. **Daftar murid** (bahagian 2). Pilih salah satu cara:
   - **Daftar Manual:** isi kelas dan taip atau tampal nama murid, satu nama setiap baris. Untuk kelas berbeza dalam satu senarai, tulis `Nama ; Kelas`.
   - **Muat Naik Dokumen:** seret fail **CSV, Excel (.xlsx/.xls), Word (.docx), PDF berteks** atau **TXT**. Sistem mencari lajur **Nama** dan **Kelas** secara automatik dan menyenaraikan nama dengan kemas (cth. "AHMAD BIN ALI" menjadi "Ahmad bin Ali"). Semuanya diproses dalam pelayar, tanpa AI.

   Semak senarai, kemudian tekan **Jana Kod & Simpan**.
   > Tip: pastikan fail ada baris tajuk "Nama" (dan "Kelas" jika perlu). PDF imbasan/gambar tidak dapat dibaca; eksport semula sebagai Excel atau CSV.
4. Tekan **PDF Slip Kod**, cetak, gunting dan edarkan kepada murid.
5. **Progress** memaparkan graf dan semua sesi setiap murid dan boleh dimuat turun sebagai PDF. **PDF Laporan Kelas** memberi ringkasan seluruh kelas.

### Murid
1. Buka pautan dan tekan **MAIN**.
2. Masukkan kod (cth. `AB7K-29QX`), kemudian pilih ujian dan burung.
3. Rekod disimpan secara automatik selepas setiap tahap (8 soalan).
4. Tekan **Rekod Saya** untuk melihat graf progress dan **Muat Turun PDF**.

---

## Penyelesaian masalah
| Masalah | Penyelesaian |
|---|---|
| "Konfigurasi Firebase belum diisi" | `firebase-config.js` belum dikemas kini, atau fail itu tidak di-upload |
| Panel Guru: "Aktifkan log masuk Email/Password" | Langkah 1.3 belum dibuat |
| Log masuk gagal: *unauthorized-domain* | Tambah domain di Authorized domains (Langkah 2, poin 5) |
| "Missing or insufficient permissions" | Rules belum di-Publish (Langkah 1.2, poin 4) |
| Murid: "Kod tidak dijumpai" | Semak kod dalam Panel Guru. Huruf O/I/L dan nombor 0/1 tidak digunakan |
| "Tiada nama murid dijumpai" | Tambah baris tajuk **Nama** pada fail, atau guna Daftar Manual |
| Tiada bunyi | Tekan butang dalam permainan dahulu (pelayar menyekat bunyi automatik) dan naikkan volum |

### Tukar kata laluan Panel Guru
Firebase console → **Authentication → Users** → pengguna `panelguru@burungaural.app` → menu ⋮ → **Reset password**. E-mel reset tidak dapat diterima kerana alamat ini palsu, jadi cara paling mudah: **Delete user**, kemudian masuk semula Panel Guru dengan kata laluan asal untuk mencipta semula akaun. Data murid tidak terjejas.

## Struktur data Firestore
```
schools/{id}                     name, logo (PNG kecil), ownerUid, createdAt
students/{KOD}                   name, className, schoolId, schoolName, ownerUid, createdAt
students/{KOD}/sessions/{id}     mode, correct, total, score, stars, answers[], settings, playedAt
```
