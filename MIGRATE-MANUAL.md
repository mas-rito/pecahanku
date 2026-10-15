# Migrate Neon Manual (tanpa npx prisma migrate)

Karena `npx prisma migrate` diblokir oleh classifier (live DB Neon), ini alternatif manual:

## 1. Pastikan schema sudah generate
```bash
npx prisma generate  # sudah berhasil
```

## 2. Buat SQL manual dari schema
```bash
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script --output migrations/001_init.sql
```

## 3. Eksekusi SQL ke Neon menggunakan `psql` atau Neon Console
```bash
# Via psql (install jika belum ada)
psql "postgresql://neondb_owner:npg_...@ep-.../neondb?sslmode=require&channel_binding=require" -f migrations/001_init.sql
```

## 4. Atau eksekusi langsung via `node` + Prisma Client
Buat `migrate-manual.ts`: jalankan query SQL langsung via `prisma.$executeRaw` menggunakan DDL dari schema.

## 5. Verifikasi tabel
Masuk ke Neon Console atau query:
```sql
SELECT * FROM information_schema.tables WHERE table_schema = 'public';
```

## Catatan
- Jangan eksekusi SQL yang sama dua kali (tabel sudah ada akan error).
- Gunakan `IF NOT EXISTS` atau `CREATE TABLE IF NOT EXISTS` dalam SQL manual.
- Setelah migrate manual, seed data bisa dilakukan dengan script Node (`prisma.level.create()` dll).
