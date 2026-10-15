# PROJECT_SPEC.md — Platform Pembelajaran Pecahan Interaktif

> Dokumen ini adalah sumber kebenaran (source of truth) untuk Claude Code.
> Baca seluruh dokumen ini sebelum menulis kode. Jika ada konflik antara dokumen ini dan asumsi Anda, ikuti dokumen ini.
> Bagian bertanda **[TBD]** belum diputuskan: jangan menebak, tanyakan dulu ke developer.

---

## 1. Ringkasan Proyek

**Konteks:** Kompetisi website bertema **"Innovating Education Through Technology"** (brief: peserta bebas berinovasi membuat platform web berbasis edukasi).

**Konsep:** Interactive Learning Media untuk **matematika: Pecahan & Desimal**, target siswa **SD (usia 7-10)**. Fitur andalan adalah **simulasi/sandbox interaktif**: anak memanipulasi objek visual (potong, drag, susun, geser slider) sehingga simbol matematika menjadi *hasil* dari eksplorasi, bukan instruksi awal.

**Nama aplikasi:** **PecahanKu** (nama dunia: "Pulau Pecahan Ajaib")

**Prinsip UX (wajib dipegang di semua level):**
- **Direct manipulation**: aksi lewat drag/tap objek visual, minim input teks/angka.
- **Non-punitive feedback**: kesalahan direspons animasi ringan (goyang halus), tanpa buzzer atau merah tajam.
- **Konfirmasi eksplisit**: jawaban dikirim lewat tombol **SERAHKAN**, bukan auto-validate saat drag selesai.
- **Ramah anak**: tombol besar, sudut membulat, tipografi bulat, warna pastel.

---

## 2. Scope Final

| Fitur | Status |
|---|---|
| Game 20 level (4 modul) | Fokus utama |
| Halaman Peta, Saya, Latihan, Register, Login | Termasuk |
| Progress tracking per user | Termasuk |
| Sistem guru/murid (role) | **Dihapus** |
| Leaderboard | **Dihapus** |
| Dashboard guru | **Dihapus** |

Jangan menambah fitur di luar tabel ini tanpa persetujuan developer.

---

## 3. Tech Stack

| Layer | Pilihan |
|---|---|
| Framework | Next.js (App Router) + TypeScript (strict) |
| Styling | Tailwind CSS |
| Animasi & drag | Framer Motion + SVG manual |
| State | Zustand |
| Database | PostgreSQL (Supabase atau Neon) |
| ORM | Prisma |
| Auth | NextAuth.js (Auth.js): Credentials Provider (form Register/Login) + Google OAuth |
| Efek | canvas-confetti (celebration) |
| Deploy | Vercel |

Catatan: bentuk geometris (kue bulat, bar, piring) digambar dengan **SVG**, bukan canvas library berat (tidak pakai Konva/Fabric).

---

## 4. Halaman (Routes)

| # | Halaman | Route (usulan) | Isi |
|---|---|---|---|
| 1 | **Peta** | `/peta` | Peta 20 level, jalur berkelok, 4 zona warna |
| 2 | **Saya** | `/saya` | Informasi akun user, lihat dan ubah data diri |
| 3 | **Latihan** | `/latihan` | Daftar video YouTube pembelajaran pecahan |
| 4 | **Register** | `/register` | Form daftar akun |
| 5 | **Login** | `/login` | Form masuk |
| - | Layar level | `/level/[number]` | Layar bermain per level (1-20) |

**Navigasi:**
- Mobile: bottom navigation bar dengan urutan **Latihan, Peta (tengah), Saya**.
- Desktop: sidebar kiri (logo, ringkasan profil, menu Peta/Latihan/Saya) menggantikan bottom bar.
- Halaman selain Login/Register wajib terautentikasi.

**Detail Peta (dari desain):**
- Header: avatar, nama user, info kelas/sekolah, badge level aktif, nama dunia, penghitung "X/20 Selesai".
- 4 zona, tiap zona punya banner, node level bernomor, badge boss/puncak di level akhir zona.
- Status node: **selesai** (bintang), **aktif** (membesar + tombol "MAIN LEVEL N"), **terkunci** (gembok).
- Zona (nama di desain):
  1. Zona 1, Level 1-5: *Taman Bolu & Kue Ceria*
  2. Zona 2, Level 6-10: *Hutan Hint & Timbangan*
  3. Zona 3, Level 11-15: *Danau Kepulauan Puzzle*
  4. Zona 4, Level 16-20: *Puncak Bintang Kristal*
- Jalur scroll vertikal: Zona 1 di bawah (awal), Zona 4 di atas (akhir).

**Detail Latihan:** daftar kartu video (thumbnail, judul, durasi, badge modul), filter per modul (client-side), klik membuka modal dengan embed `youtube.com/embed/VIDEO_ID` dan tombol "Tonton di YouTube". Data video disimpan sebagai array statis `lib/videos.ts`.

**Detail Saya:** avatar, nama (bisa diubah), email (read-only), statistik (level selesai, total bintang), tombol Edit Profil, Ubah Password, Keluar. Field tambahan **kelas/sekolah** terlihat di header peta: **[TBD]** apakah disimpan di profil.

---

## 5. Modul dan Level

Total **20 level, 4 modul**. Dalam satu modul, **mekanik sama dan tingkat kesulitan naik bertahap**. Karena itu ada **4 komponen mekanik reusable** yang menerima `difficultyConfig` per level, bukan 20 komponen terpisah.

| Modul | Level | Mascot | Mekanik |
|---|---|---|---|
| **Perkenalan Pecahan** | 1-5 | Koki Kucing | Potong kue, drag potongan ke piring berlabel pecahan yang sesuai |
| **Bandingkan Besar Pecahan** | 6-10 | Putri Kelinci | Pilih piring dengan potongan lebih besar (kartu pilihan visual) |
| **Urut & Susun Pecahan** | 11-15 | Monyet Si Detektif | Drag potongan dari tray ke lingkaran target sampai nilai target tercapai |
| **Pecahan & Desimal** | 16-20 | Harimau Si Atlet | Geser slider vertikal agar nilai desimal sama dengan pecahan target |

### 5.1 Pola layar yang konsisten (semua level)

1. **Intro**: kartu mascot (nama + dialog), kotak **"Target Konsep Level Ini"**, tombol **MULAI PETUALANGAN**.
2. **Interaksi**: area permainan, kotak hint (**TIPS** / **TAHUKAH KAMU?** / **Rumus Rahasia** / **Tips Pintar**), tombol aksi.
3. **SERAHKAN**: konfirmasi jawaban.
4. **Level Complete**: banner "LEVEL N SELESAI!", mascot, pesan keberhasilan, ringkasan hasil, tombol **LANJUT KE LEVEL N+1** dan **Ulangi Level Ini**.

Header tiap layar: tombol kembali, badge "Level N", judul modul. Tombol reset (ikon) muncul di area permainan.

### 5.2 Modul 1: Perkenalan Pecahan (Level 1-5)

- Kue utuh di atas, piring-piring berlabel pecahan di bawah.
- Tombol **POTONG** memotong kue (garis putus-putus + ikon gunting), lalu potongan di-drag ke piring.
- Potongan masuk piring yang cocok: badge **"Cocok! 1/2"**. Potongan salah: kembali ke posisi asal dengan animasi halus.
- Level Complete menampilkan "Hasil Cocok Pecahan" dan penguat (contoh Level 1: `1/2 + 1/2 = 1 Kue Utuh!`).
- Level 1 (dari desain): 2 piring, keduanya 1/2.
- Progresi Level 2-5 (**usulan, verifikasi dengan frame Figma**): piring bertambah (2 lalu 3, 4, 5), nilai makin beragam, level akhir memakai distractor (mis. 2/4 vs 1/2).

### 5.3 Modul 2: Bandingkan Besar Pecahan (Level 6-10)

- Instruksi: "Tentukan potongan kue yang lebih besar!"
- Kartu piring (Piring A, B, C) menampilkan kue dengan irisan terisi, label "N dari M bagian", badge pecahan kecil, dan tombol **PILIH**.
- Pilih lalu **SERAHKAN**. Jawaban benar: kartu terpilih di-highlight hijau tebal + pesan "JAWABAN KAMU BENAR".
- Dari desain: Level 6 = 1/4 vs 2/4; Level 7 = 2/4 vs 3/4; Level 8 = 3 piring (1/4, 2/4, 3/4). Progresi Level 9-10: **[TBD]**.

### 5.4 Modul 3: Urut & Susun Pecahan (Level 11-15)

- Lingkaran target dibagi slot (contoh 4 slot) dengan label **"Target: 2/4 Piring"**.
- Tray "Potongan Kue" menampilkan potongan berlabel (Potongan A = 1/4, Potongan B = 1/4) dan penghitung **"Tersedia: N"**.
- Drag potongan ke slot target. Penghitung tray berkurang, lingkaran terisi.
- Level Complete memuat **"Informasi Tambahan"**: aturan penjumlahan pecahan (`1/4 + 1/4 = 2/4`) dan pembuktian pecahan senilai lewat balok (`2/4 = 1/2`).
- Progresi Level 12-15 (distractor, kombinasi penyebut campur, lebih dari satu solusi valid): **[TBD]**.

### 5.5 Modul 4: Pecahan & Desimal (Level 16-20)

- Slider vertikal (0.0 sampai 1.0) di kiri, botol skala desimal (1,00 / 0,75 / 0,50 / 0,25 / 0,00) di tengah, botol target berlabel pecahan (mis. "1/2 Terisi") di kanan, ikon "Samakan Nilai" di antaranya.
- Kotak **"Rumus Rahasia"** di intro menjelaskan hubungan pecahan-desimal.
- Slider harus disinkronkan **real-time** (gunakan `onDrag`, bukan hanya `onDragEnd`).
- Level Complete menampilkan **Nilai Desimal** (0,50) dan **Bentuk Pecahan** (1/2) berdampingan.
- Level 16 (dari desain): target 1/2 = 0,50. Progresi Level 17-20 (0,25 / 0,75, arah terbalik, campuran): **[TBD]**.

---

## 6. Implementasi Drag and Drop

**Prinsip:** satu komponen `DraggablePiece` generik (Framer Motion), tiap modul punya logika drop-zone sendiri.

```tsx
<motion.div
  drag
  dragMomentum={false}
  dragElastic={0.1}
  whileDrag={{ scale: 1.1, zIndex: 50 }}
  onDragEnd={(e, info) => onDragEnd(id, info.point)}
/>
```

- **Deteksi drop zone:** bounding-box check memakai `getBoundingClientRect()` pada ref drop zone dibandingkan `info.point`. Cukup untuk bentuk geometris sederhana.
- **Gagal drop / salah:** potongan kembali ke posisi awal + animasi goyang halus. Tetap bisa di-drag lagi.
- **Berhasil:** posisi dikunci ke pusat target, animasi sparkle/glow, badge konfirmasi.
- **Modul 2:** bukan drag, cukup tap pada kartu (`whileTap`).
- **Modul 4:** `drag="y"` dengan `dragConstraints` setinggi botol; hitung nilai dari posisi dan sinkronkan ke bar/botol target.
- Semua animasi bernuansa lembut (spring), durasi singkat, tidak mengintimidasi.

---

## 7. Struktur Folder (usulan)

```
/app
  /(auth)/login, /(auth)/register
  /(main)/peta, /(main)/latihan, /(main)/saya
  /level/[number]
  /api/...
/components
  /mechanics     CuttingSandbox.tsx, CompareSelector.tsx, BuildTarget.tsx, DecimalSlider.tsx
  /ui            tombol, kartu mascot, kotak hint, banner level complete
  /map           node level, banner zona
/lib
  dropZoneUtils.ts, fractionMath.ts, levels.ts, videos.ts
/hooks
  useDragAndDrop.ts
/prisma
  schema.prisma
```

---

## 8. Model Data (Prisma)

```prisma
model User {
  id        String     @id @default(cuid())
  name      String
  email     String     @unique
  password  String?    // hash; null jika login via OAuth
  image     String?
  school    String?    // opsional
  class     String?    // opsional (kelas SD: 1, 2, 3, 4, 5, 6)
  progress  Progress[]
  createdAt DateTime   @default(now())
}

model Level {
  id               String     @id @default(cuid())
  number           Int        @unique   // 1-20
  module           String     // "perkenalan" | "bandingkan" | "susun" | "desimal"
  difficultyConfig Json
  progress         Progress[]
}

model Progress {
  id          String    @id @default(cuid())
  userId      String
  user        User      @relation(fields: [userId], references: [id])
  levelId     String
  level       Level     @relation(fields: [levelId], references: [id])
  completed   Boolean   @default(false)
  completedAt DateTime?

  @@unique([userId, levelId])
}
```

Konfigurasi level disimpan sebagai data, contoh:

```ts
{ number: 3, module: "perkenalan", config: { plateValues: ["1/2", "1/3", "1/4"] } }
```

Aturan: level terbuka jika level sebelumnya `completed`. Level 1 selalu terbuka.

---

## 9. Desain dan Figma MCP Server

Desain final ada di **file Figma** milik developer. Claude Code harus membaca desain langsung lewat **Figma MCP server**, bukan menebak dari deskripsi teks.

### 9.1 Setup (dilakukan developer sekali)

Pilihan yang direkomendasikan Figma adalah **remote MCP server** (berbasis link):

```bash
# Opsi A (disarankan): lewat plugin resmi
claude plugin install figma@claude-plugins-official

# Opsi B: tambah server remote manual
claude mcp add --transport http figma-remote-mcp https://mcp.figma.com/mcp
```

Restart Claude Code, jalankan `/mcp`, lalu pilih **Allow access** untuk autentikasi akun Figma. Server `figma` / `figma-remote-mcp` harus tampil **connected**.

Alternatif **desktop MCP server** (berbasis seleksi, butuh Figma Desktop app dan opsi MCP diaktifkan di Figma):

```bash
claude mcp add --transport http figma-desktop http://127.0.0.1:3845/mcp
```

> Perintah di atas mengikuti dokumentasi Figma saat dokumen ini ditulis. Jika gagal, cek help.figma.com (Figma MCP).

### 9.2 Daftar frame desain

Isi link tiap frame (klik kanan frame di Figma, **Copy link to selection**). Remote server membaca desain berdasarkan link frame.

| Frame | Cakupan | Link Figma |
|---|---|---|
| Peta (mobile) | Halaman Peta 4 zona | `[ISI LINK]` |
| Peta (desktop) | Peta + sidebar | `[ISI LINK]` |
| Level 1-5 | Modul 1: intro, potong, drag, complete | `[ISI LINK]` |
| Level 6-10 | Modul 2: pilih piring, complete | `[ISI LINK]` |
| Level 11-15 | Modul 3: susun, complete + info tambahan | `[ISI LINK]` |
| Level 16-20 | Modul 4: slider, complete | `[ISI LINK]` |
| Latihan | Daftar video + modal | `[ISI LINK]` |
| Saya | Profil view/edit | `[ISI LINK]` |
| Login | Layar masuk | `[ISI LINK]` |
| Register | Layar daftar | `[ISI LINK]` |

### 9.3 Aturan kerja untuk Claude Code

1. **Sebelum membangun halaman/komponen apa pun**, ambil konteks desain frame terkait lewat Figma MCP (struktur layer, ukuran, spacing, warna, tipografi). Jangan mengira-ngira nilai visual.
2. **Ekstrak design tokens dulu** (warna per zona/modul, font, radius, shadow, spacing) ke `tailwind.config.ts` / CSS variables sebelum membuat komponen. Semua komponen memakai token ini, bukan nilai hardcode.
3. **Aset mascot dan ilustrasi** (Koki Kucing, Putri Kelinci, Monyet Si Detektif, Harimau Si Atlet, kue, piring) diekspor dari Figma ke `/public/assets`. Jangan membuat ulang ilustrasi dengan kode.
4. Bangun **satu frame per langkah**, bandingkan hasil dengan desain, baru lanjut.
5. Jika Figma MCP tidak tersedia atau frame tidak terbaca, **berhenti dan minta developer** melampirkan screenshot frame. Jangan lanjut dengan tebakan.
6. Jika desain dan spec ini berbeda, **desain Figma menang untuk tampilan**, spec ini menang untuk perilaku dan logika. Catat perbedaannya dan tanyakan jika ambigu.

---

## 10. Urutan Pengerjaan

Kerjakan bertahap, **review dan test tiap tahap sebelum lanjut**, commit git di akhir tiap tahap.

1. **Fondasi:** setup Next.js + Tailwind, ekstrak design tokens dari Figma, Prisma schema + migrasi, seed 20 level.
2. **Auth:** halaman Login dan Register, NextAuth Credentials (hash password), proteksi route.
3. **Komponen UI dasar:** tombol, kartu mascot, kotak hint, banner Level Complete.
4. **Modul 1 (CuttingSandbox)** untuk Level 1-5. Mekanik drag paling dasar, jadikan pola acuan.
5. **Modul 2, 3, 4** satu per satu, masing-masing selesai dan dites sebelum modul berikutnya.
6. **Halaman Peta** dengan status node dari data Progress.
7. **Progress tracking:** simpan hasil level (bintang, completed), buka level berikutnya.
8. **Latihan** (daftar video + modal) dan **Saya** (profil view/edit).
9. **Versi desktop** (sidebar, layout melebar), polish animasi, deploy ke Vercel.

---

## 11. Konvensi Kode

- TypeScript strict, functional components, hooks.
- Komponen mekanik **tidak boleh hardcode nilai per level**: semua dari `difficultyConfig`.
- Teks UI dalam **Bahasa Indonesia**; identifier kode dalam bahasa Inggris.
- Validasi logika pecahan di `lib/fractionMath.ts` (dengan unit test sederhana untuk perbandingan, penjumlahan, ekuivalensi, konversi desimal).
- Aksesibilitas dasar: target sentuh minimal 44px, kontras cukup, label ARIA pada kontrol interaktif.
- Jangan pakai `localStorage` untuk progress; progress disimpan di database.

---

## 12. Pertanyaan Terbuka [TBD]

- Detail progresi kesulitan Level 2-5, 9-10, 12-15, 17-20 (konfigurasi difficulty untuk tiap level)
- Apakah ada langkah onboarding (nama panggilan/avatar) setelah Register

**Sudah ditentukan:**
- ✅ Nama aplikasi: PecahanKu
- ✅ Auth: Credentials + Google OAuth
- ✅ Progress: Track status completed (tanpa sistem bintang)
- ✅ Profil: Kelas dan sekolah opsional
