# TODO List - Proyek PecahanKu

## Fase 1: Fondasi & Setup

### 1.1 Setup Project Environment
- [DONE] Inisialisasi Next.js App Router dengan TypeScript strict mode
- [DONE] Install dan konfigurasi Tailwind CSS
- [DONE] Setup Zustand untuk state management global
- [DONE] Setup PostgreSQL (Supabase/Neon) dengan Prisma ORM
- [DONE] Setup NextAuth.js dengan Credentials + Google OAuth
- [DONE] Install dependency: canvas-confetti, framer-motion

### 1.2 Database & Schema Setup
- [DONE] Buat schema.prisma dengan model User, Level, Progress
- [DONE] Generate Prisma client
- [DONE] Buat migration untuk database
- [DONE] Seed data 20 level konfigurasi (berdasarkan LEVEL_SPECS.md)
- [DONE] Setup relation progress tracking

### 1.3 Komponen UI Dasar
- [TODO] Buat komponen tombol (besar, ramah anak, bulat sudut)
- [TODO] Buat kartu mascot (intro card, completion card)
- [TODO] Buat kotak hint (TIPS/TAHUKAH KAMU? dll.)
- [TODO] Buat banner level completion
- [TODO] Setup sistem routing dasar

## Fase 2: Mekanik Level (Komponen Inti)

### 2.1 Implementasi 4 Komponen Mekanik
- [INPROGRESS] **CuttingSandbox.tsx** (Modul 1: Level 1-5)
  - Potong kue, drag & drop potongan ke piring berlabel
  - Validasi kecocokan pecahan
  - Animasi success/failure yang tidak punitif

- [PENDING] **CompareSelector.tsx** (Modul 2: Level 6-10)
  - Kartu visual comparison pecahan
  - Drag-sort pengurutan
  - Odd-one-out detection

- [PENDING] **BuildTarget.tsx** (Modul 3: Level 11-15)
  - Assemble potongan ke target lingkaran
  - Multiple target scenarios
  - Resource allocation challenges

- [PENDING] **DecimalSlider.tsx** (Modul 4: Level 16-20)
  - Slider vertikal real-time sync
  - Fraction ↔ decimal conversion
  - Dual challenge mode

### 2.2 Logic & Utilities
- [DONE] Buat `lib/fractionMath.ts` dengan unit test
  - Validasi pecahan
  - Konversi pecahan-desimal
  - Perbandingan nilai

- [DONE] Buat `lib/levels.ts` dengan semua 20 level configs
- [PENDING] Buat `hooks/useDragAndDrop.ts` custom drag system
- [PENDING] Buat `lib/dropZoneUtils.ts` sistem deteksi drop zone

## Fase 3: Halaman Utama & Fitur

### 3.1 Authentication
- [PENDING] Halaman `/login` (Credentials + Google OAuth)
- [PENDING] Halaman `/register`
- [PENDING] Protected route middleware
- [PENDING] User profile management (nama, avatar, kelas/sekolah)

### 3.2 Halaman Peta (Dashboard)
- [PENDING] Layout peta 4 zona dengan status node
- [PENDING] Visualisasi progres per user (bintang, level selesai)
- [PENDING] Interactive node states (locked/active/completed)
- [PENDING] Navigation ke level yang tersedia

### 3.3 Halaman Latihan
- [PENDING] Daftar video pembelajaran per modul
- [PENDING] Filter video client-side
- [PENDING] Modal video player dengan YouTube embed
- [PENDING] Data video di `lib/videos.ts`

### 3.4 Halaman Saya (Profil)
- [PENDING] Tampilan info akun
- [PENDING] Edit profil (nama, avatar)
- [PENDING] Ubah password
- [PENDING] Statistik user (level selesai, total bintang)
- [PENDING] Tombol logout

### 3.5 Layar Level Gameplay
- [PENDING] Layout universal per level (berdasarkan LEVEL_SPECS.md)
- [PENDING] Header (tombol kembali, badge level, judul modul)
- [PENDING] Intro card dengan mascot dan dialog
- [PENDING] Area permainan dengan mekanisme level-specific
- [PENDING] Side panel dengan hint
- [PENDING] Footer dengan tombol SERAHKAN
- [PENDING] Screen completion (banner, ringkasan, tombol lanjut/ulang)

## Fase 4: Desain System & Assets

### 4.1 Ekstrak Design Tokens dari Figma
- [PENDING] Ekstrak warna zona per modul (desain tokens CSS)
- [PENDING] Ekstrak warna mascot per karakter
- [PENDING] Typography dan spacing system
- [PENDING] Shadow dan radius sistem

### 4.2 Aset Ilustrasi
- [PENDING] Export mascot assets dari Figma ke `/public/assets`
- [TODO] Ekspor SVG kue, piring, lingkaran target
- [TODO] Buat ikon aset (gunting, reset, dll.)

## Fase 5: Responsif & Desktop

### 5.1 Mobile (Bottom Navigation)
- [PENDING] Bottom nav bar dengan Latihan, Peta (tengah), Saya
- [PENDING] Header desktop style di tiap halaman
- [PENDING] Adjustments spacing mobile-friendly

### 5.2 Desktop (Sidebar)
- [PENDING] Sidebar kiri dengan menu navigasi
- [PENDING] Layout melebar untuk layar peta & gameplay
- [PENDING] Grid layout yang optimal

## Fase 6: Polish & Testing

### 6.1 Aksesibilitas & UX
- [PENDING] Target sentuh minimal 44px
- [PENDING] Kontras teks yang cukup
- [PENDING] Label ARIA untuk kontrol interaktif
- [PENDING] Feedback yang tidak punitif (animasi ringan)

### 6.2 Optimasi & Testing
- [PENDING] Unit test untuk fractionMath.ts
- [PENDING] Integration test untuk level mechanics
- [PENDING] Visual regression test (jika ada waktu)
- [PENDING] Performance optimization untuk drag operations

### 6.3 Deploy
- [PENDING] Setup Vercel deployment
- [PENDING] Environment variables setup
- [PENDING] CI/CD pipeline (jika ada waktu)

## Fase 7: Pekerjaan Sisa (Opsional)

### 7.1 Enhanced Features
- [TODO] Sistem bintang untuk completion
- [TODO] Leaderboard (opsional)
- [TODO] Dashboard guru (opsional)
- [TODO] Analytics (progress per kelas)

### 7.2 Bug Fixes & Polish
- [TODO] Edge cases dalam mekanik drag & drop
- [TODO] Error handling user-friendly
- [TODO] Loading states dan skeleton screens
- [TODO] Offline support (jika ada waktu)

## Catatan & Referensi

- Semua task berdasarkan PROJECT_SPEC.md dan LEVEL_SPECS.md
- Implementasi bertahap, review dan test tiap tahap
- Commit git di akhir tiap fase
- Jika desain Figma berbeda dari spec, Figma menang untuk tampilan

## Progress Summary

- **Total Task:** 50+
- **Fase 1:** 7/21 (33%)
- **Fase 2:** 1/29 (3%)
- **Fase 3:** 0/25 (0%)
- **Fase 4:** 0/15 (0%)
- **Fase 5:** 0/12 (0%)
- **Fase 6:** 0/11 (0%)
- **Fase 7:** 2/11 (18%)

## Status Terakhir
April 2026 - Setup awal project dan dokumentasi