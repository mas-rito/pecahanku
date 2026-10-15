# Panduan Setup Prisma ORM (v8) & PostgreSQL untuk Next.js (Khusus Claude Code)

Panduan ini berisi instruksi dan alur kerja (workflow) untuk mensetup Prisma ORM dan mengintegrasikannya dengan database PostgreSQL pada project Next.js.

## 0. Prasyarat

- Node.js versi 22.18+, 24.11+, atau 26+.
- Database PostgreSQL kosong (versi 15 ke atas).

## 1. Inisialisasi Prisma

Jalankan perintah berikut di root direktori project untuk menginisialisasi Prisma:

```bash
npx prisma@latest orm init --yes --target postgres --authoring psl --write-env
```

**Hasil:** Perintah ini akan membuat `src/prisma/contract.prisma`, `prisma.config.ts`, `src/prisma/db.ts`, dan file `.env`, serta mengonfigurasi `package.json` dan `tsconfig.json`.

## 2. Konfigurasi Environment (Database URL)

Buka file `.env` di root project dan set nilai `DATABASE_URL` dengan string koneksi PostgreSQL yang valid:

```env
DATABASE_URL="postgresql://username:password@host:5432/database"
```

## 3. Penulisan Model (Data Modeling)

Buka file `src/prisma/contract.prisma`.
**PENTING:** Jangan hapus deklarasi `// use prisma-8` di baris pertama.
Tulis model yang dibutuhkan, misalnya:

```prisma
// use prisma-8

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```

## 4. Emit File Kontrak

Setelah model dibuat/diperbarui, jalankan perintah emit agar Prisma menghasilkan file yang dapat digunakan oleh kode (seperti `contract.json` dan `contract.d.ts`):

```bash
npx prisma contract emit
```

## 5. Inisialisasi Database

Untuk mensinkronkan skema dan membuat tabel di database kosong, jalankan:

```bash
npx prisma db init
```

## 6. Penggunaan Prisma di Next.js

Gunakan objek `db` yang sudah disediakan secara otomatis di `src/prisma/db.ts`.
Impor dan gunakan di Server Components, API Routes, atau Server Actions:

```typescript
import { db } from "./src/prisma/db";

// Contoh penulisan data:
const createdUser = await db.orm.public.User.create({
  email: "claude@example.com",
  name: "Claude Code",
});

// Contoh pembacaan data:
const allUsers = await db.orm.public.User.all();
```

## 7. Workflow Migrasi (Jika Ada Perubahan Model)

Gunakan alur kerja ini untuk setiap perubahan struktur tabel/model di masa mendatang:

1. Perbarui file `src/prisma/contract.prisma`.
2. Generate ulang kontrak: `npx prisma contract emit`
3. Buat rencana migrasi: `npx prisma migration plan --name deskripsi_perubahan_di_sini`
4. Terapkan ke database: `npx prisma db migrate --advance-ref db`
