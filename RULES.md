# PROJECT RULES — PecahanKu

## 1. Git & Deployment
- Setiap selesai 1 TODO → commit + push ke GitHub
- Commit message: `[PHASE-X] deskripsi singkat task`
- Jangan push kode broken (pastikan build pass)

## 2. Database
- **Wajib pakai Neon** (bukan Supabase/local-only)
- Schema Prisma harus selalu sinkron dengan produksi
- Seed data 20 level harus berjalan otomatis (`prisma seed`)
- Jangan hardcode data level di frontend jika sudah ada di DB

## 3. Tidak Over-Engineering
- Tidak pakai Konva/Fabric untuk SVG — pakai Framer Motion + SVG manual
- Komponen mekanik reusable (4 komponen saja untuk 20 level)
- Tidak buat 20 komponen terpisah untuk tiap level
- Jangan tambah fitur di luar PROJECT_SPEC.md tanpa persetujuan

## 4. UX Principles (Wajib)
- Direct manipulation: drag/tap objek visual, minim input teks
- Non-punitive feedback: animasi goyang halus, bukan merah/tebal
- Konfirmasi eksplisit: tombol SERAHKAN, bukan auto-validate
- Ramah anak: tombol besar, bulat, pastel, tipografi bulat
- Minimal target sentuh 44px

## 5. Code Conventions
- TypeScript strict, functional components, hooks
- Identifier kode bahasa Inggris, teks UI bahasa Indonesia
- Komponen mekanik tidak hardcode nilai per level (pakai difficultyConfig)
- Tidak pakai localStorage untuk progress (pakai DB)
- Figma menang untuk tampilan, spec menang untuk logika

## 6. Progress Tracking
- Update `TODO-LIST.md` setiap task selesai (label: DONE / INPROGRESS / PENDING / TODO)
- Jangan skip documentasi saat progress berubah
- Setiap fase wajib review dan test sebelum lanjut

## 7. Assets
- Mascot & ilustrasi diekspor dari Figma ke `/public/assets`
- Jangan membuat ulang ilustrasi dengan kode
- Design tokens (warna zona, mascot) diekstrak ke Tailwind config dulu

## 8. Development Order
1. Fondasi → 2. Mekanik → 3. Halaman → 4. Responsif → 5. Polish
- Jangan lanjut ke fase berikutnya sebelum fase sebelumnya selesai
- Review tiap tahap, commit di akhir tiap fase

## 9. Auth & Security
- NextAuth Credentials + Google OAuth
- Hash password wajib
- Route protected wajib middleware
- Tidak simpan password plain

## 10. Rules Akan Bertambah
- Tambah rules baru seiring waktu dan kebutuhan
- Update file ini setiap ada perubahan kebijakan development

---

*Terakhir diperbarui: 2026-10-15*  
*Next rule: akan ditambahkan sesuai perkembangan project.*
