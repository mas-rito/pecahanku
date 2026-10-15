# LEVEL SPECS - Detail Spesifik Tiap Level

**Berdasarkan desain Figma "Pecahanku"**  
File: https://www.figma.com/design/A2I8AUIY5pLzbr2eT4UkTk/Pecahanku

---

## **MODUL 1: Perkenalan Pecahan (Level 1-5)**
**Mascot: Koki Kucing**
**Tema: Taman Bolu & Kue Ceria**

### **Struktur UI Universal (Semua Level)**
1. **Header**: Tombol kembali, badge "Level N", judul "Perkenalan Pecahan"
2. **Intro Card**: Mascot (Koki Kucing) + dialog karakter + target konsep
3. **Area Interaksi**: 
   - Kue utuh di atas wooden board
   - Piring-piring berlabel pecahan di bawah
   - Tombol POTONG dan RESET
4. **Side Panel**: Kotak TIPS / TAHUKAH KAMU?
5. **Footer**: Tombol SERAHKAN
6. **Complete Screen**: Banner, ringkasan, tombol LANJUT/ULANGI

---

### **Level 1: Pecahan 1/2**
**Visual dari Figma:**
- 1 kue bulat utuh di atas
- 2 piring di bawah (keduanya label "1/2")
- Mascot: "Koki kucing - Saya punya 1 kue utuh, ayo bantu saya membagi kue ini ke piring yang sesuai!"
- Target: "Memahami konsep pecahan 1/2 sebagai pembagian kue sama besar"

**Mekanik:**
1. Tombol **POTONG** → garis putus-putus + animasi gunting (kue terpotong menjadi 2 bagian)
2. Drag potongan ke piring
3. Validasi: potongan cocok (animasi sparkle + badge "Cocok! 1/2")
4. Jika salah → kembali ke posisi awal dengan animasi goyang halus
5. Setelah 2 potongan cocok → tombol SERAHKAN aktif

**Config:**
```json
{
  "level": 1,
  "cake": { "whole": 1, "pieces": 2 },
  "plates": [
    { "id": "plate-1", "label": "1/2", "targetPieces": 1 },
    { "id": "plate-2", "label": "1/2", "targetPieces": 1 }
  ],
  "tip": "1 kue dibagi 2 = masing-masing mendapat 1/2"
}
```

---

### **Level 2: Pecahan 1/3**
**Visual (prediksi dari pola):**
- 1 kue utuh
- 3 piring (masing-masing "1/3")

**Mekanik:**
1. Tombol **POTONG** → kue terpotong 3 bagian (garis 120°)
2. Drag ke piring masing-masing
3. Validasi: potongan 1/3 cocok
4. Level complete: "1/3 + 1/3 + 1/3 = 1 Kue Utuh!"

**Config:**
```json
{
  "level": 2,
  "cake": { "whole": 1, "pieces": 3 },
  "plates": [
    { "id": "plate-1", "label": "1/3", "targetPieces": 1 },
    { "id": "plate-2", "label": "1/3", "targetPieces": 1 },
    { "id": "plate-3", "label": "1/3", "targetPieces": 1 }
  ],
  "tip": "1 kue dibagi 3 = masing-masing mendapat 1/3"
}
```

---

### **Level 3: Pecahan 1/4**
**Visual:**
- 1 kue utuh
- 4 piring (masing-masing "1/4")

**Mekanik:**
1. Tombol **POTONG** → kue terpotong 4 bagian (garis 90°)
2. Validasi: potongan 1/4 cocok
3. **Introduksi**: visual comparison "1/2 = 2/4"

**Config:**
```json
{
  "level": 3,
  "cake": { "whole": 1, "pieces": 4 },
  "plates": [
    { "id": "plate-1", "label": "1/4", "targetPieces": 1 },
    { "id": "plate-2", "label": "1/4", "targetPieces": 1 },
    { "id": "plate-3", "label": "1/4", "targetPieces": 1 },
    { "id": "plate-4", "label": "1/4", "targetPieces": 1 }
  ],
  "tip": "2 potongan 1/4 = 1/2 kue"
}
```

---

### **Level 4: Campuran Pecahan (1/2, 1/4)**
**Visual (prediksi):**
- 1 kue utuh
- 3 piring: ["1/2", "1/4", "1/4"]
- **Distractor**: visual yang berbeda (ukuran potongan berbeda)

**Mekanik:**
1. **Skill baru**: potong sesuai kebutuhan
2. Untuk piring "1/2" → butuh 2 potongan 1/4
3. Untuk piring "1/4" → butuh 1 potongan 1/4
4. **Strategi planning**: user harus pikirkan pemotongan yang efisien

**Config:**
```json
{
  "level": 4,
  "cake": { "whole": 1, "pieces": 8 }, // lebih fleksibel
  "plates": [
    { "id": "plate-1", "label": "1/2", "targetPieces": 4 }, // 4/8
    { "id": "plate-2", "label": "1/4", "targetPieces": 2 }, // 2/8
    { "id": "plate-3", "label": "1/4", "targetPieces": 2 }  // 2/8
  ],
  "tip": "1/2 = 2/4 = 4/8"
}
```

---

### **Level 5: Ujian Modul 1**
**Visual (prediksi):**
- Kue dengan irisan tidak beraturan
- 4-5 piring dengan label campuran ["1/3", "2/6", "1/2", "3/6"]
- **Konsep pecahan senilai**

**Mekanik:**
1. **Advanced cutting**: garis potong bisa drag sendiri (user menentukan pemotongan)
2. **Pecahan senilai**: 1/3 = 2/6, 1/2 = 3/6
3. Multiple valid solutions

**Config:**
```json
{
  "level": 5,
  "cake": { "whole": 1, "pieces": 12 }, // penyebut KPK
  "plates": [
    { "id": "plate-1", "label": "1/3", "targetPieces": 4 },  // 4/12
    { "id": "plate-2", "label": "2/6", "targetPieces": 4 },  // 4/12
    { "id": "plate-3", "label": "1/2", "targetPieces": 6 },  // 6/12
    { "id": "plate-4", "label": "3/6", "targetPieces": 6 }   // 6/12
  ],
  "tip": "Pecahan senilai: 1/3 = 2/6, 1/2 = 3/6"
}
```

---

## **MODUL 2: Bandingkan Pecahan (Level 6-10)**
**Mascot: Putri Kelinci**
**Tema: Hutan Hint & Timbangan**

### **Level 6: Bandingkan 1/4 vs 2/4**
**Visual dari Figma:**
- 2 kartu piring: "Piring A" dan "Piring B"
- Mascot: "Putri Kelinci - Tentukan potongan kue yang lebih besar!"
- Tip: "Semakin banyak bagian terisi, semakin besar nilai pecahan"

**Mekanik:**
1. Kartu visual dengan kue terisi (1/4 vs 2/4)
2. Klik PILIH pada kartu yang lebih besar
3. Validasi: kartu terpilih highlight hijau + pesan "JAWABAN KAMU BENAR"

**Config:**
```json
{
  "level": 6,
  "type": "compare",
  "cards": [
    { "id": "card-a", "label": "Piring A", "value": "1/4", "filled": 1, "total": 4 },
    { "id": "card-b", "label": "Piring B", "value": "2/4", "filled": 2, "total": 4 }
  ],
  "correctAnswer": "card-b",
  "tip": "2/4 > 1/4 karena lebih banyak bagian terisi"
}
```

---

### **Level 7: Bandingkan 2/4 vs 3/4**
**Visual:**
- 2 kartu: 2/4 vs 3/4

**Mekanik:**
1. Sama dengan Level 6
2. **Introduksi**: visual bar fraction lebih jelas

**Config:**
```json
{
  "level": 7,
  "type": "compare",
  "cards": [
    { "id": "card-a", "label": "Piring A", "value": "2/4", "filled": 2, "total": 4 },
    { "id": "card-b", "label": "Piring B", "value": "3/4", "filled": 3, "total": 4 }
  ],
  "correctAnswer": "card-b",
  "tip": "Semakin dekat ke 1, semakin besar nilainya"
}
```

---

### **Level 8: Bandingkan 3 Piring (1/4, 2/4, 3/4)**
**Visual dari Figma:**
- 3 kartu piring
- Instruksi: "Urutkan dari yang terkecil ke terbesar!"

**Mekanik:**
1. **Drag sort**: drag kartu untuk mengurutkan
2. Urutan benar: 1/4 < 2/4 < 3/4
3. Validasi setelah semua kartu diurutkan

**Config:**
```json
{
  "level": 8,
  "type": "sort",
  "cards": [
    { "id": "card-1", "label": "Piring A", "value": "1/4", "filled": 1, "total": 4 },
    { "id": "card-2", "label": "Piring B", "value": "2/4", "filled": 2, "total": 4 },
    { "id": "card-3", "label": "Piring C", "value": "3/4", "filled": 3, "total": 4 }
  ],
  "correctOrder": ["card-1", "card-2", "card-3"],
  "tip": "Urutkan berdasarkan banyaknya bagian terisi"
}
```

---

### **Level 9: Pecahan Penyebut Berbeda (1/2 vs 3/4)**
**Visual (prediksi):**
- 2 kartu: 1/2 vs 3/4
- **Challenge**: penyebut berbeda, visual harus sama ukuran

**Mekanik:**
1. **Common denominator visual**: 1/2 = 2/4, 3/4 = 3/4
2. Grid 4x4 untuk comparison
3. Pilih yang lebih besar

**Config:**
```json
{
  "level": 9,
  "type": "compare",
  "cards": [
    { "id": "card-a", "label": "Piring A", "value": "1/2", "filled": 2, "total": 4 },
    { "id": "card-b", "label": "Piring B", "value": "3/4", "filled": 3, "total": 4 }
  ],
  "correctAnswer": "card-b",
  "tip": "Samakan penyebut dulu: 1/2 = 2/4, lalu bandingkan"
}
```

---

### **Level 10: Ujian Modul 2**
**Visual (prediksi):**
- 4 kartu dengan pecahan campuran: ["1/3", "2/6", "3/9", "4/12"]
- **Challenge**: pecahan senilai, pilih yang berbeda nilai

**Mekanik:**
1. **Find the odd one**: 3 pecahan senilai, 1 berbeda
2. Klik yang nilainya berbeda
3. Konsep "pecahan paling sederhana"

**Config:**
```json
{
  "level": 10,
  "type": "odd-one-out",
  "cards": [
    { "id": "card-a", "label": "Piring A", "value": "1/3", "filled": 4, "total": 12 },
    { "id": "card-b", "label": "Piring B", "value": "2/6", "filled": 4, "total": 12 },
    { "id": "card-c", "label": "Piring C", "value": "3/9", "filled": 4, "total": 12 },
    { "id": "card-d", "label": "Piring D", "value": "4/12", "filled": 6, "total": 12 } // berbeda!
  ],
  "correctAnswer": "card-d",
  "tip": "Sederhanakan pecahan ke bentuk paling sederhana"
}
```

---

## **MODUL 3: Urut & Susun Pecahan (Level 11-15)**
**Mascot: Monyet Si Detektif**
**Tema: Danau Kepulauan Puzzle**

### **Level 11: Susun 2/4 dari potongan 1/4**
**Visual dari Figma:**
- Target: lingkaran dengan label "Target: 2/4 Piring"
- Tray: "Potongan Kue" dengan 4 potongan (masing-masing 1/4)
- Mascot: "Monyet Si Detektif - Drag potongan ke target!"

**Mekanik:**
1. Drag potongan 1/4 ke lingkaran target
2. Target terisi visual
3. Counter: "Terisi: 1/4", "Tersedia: 3"
4. Setelah 2 potongan → target complete

**Config:**
```json
{
  "level": 11,
  "type": "build-target",
  "target": { "label": "2/4", "value": 2, "denominator": 4 },
  "pieces": [
    { "id": "piece-1", "label": "Potongan A", "value": "1/4" },
    { "id": "piece-2", "label": "Potongan B", "value": "1/4" },
    { "id": "piece-3", "label": "Potongan C", "value": "1/4" },
    { "id": "piece-4", "label": "Potongan D", "value": "1/4" }
  ],
  "requiredPieces": 2,
  "tip": "1/4 + 1/4 = 2/4"
}
```

---

### **Level 12: Multiple Targets (1/2 dan 1/4)**
**Visual (prediksi):**
- 2 lingkaran target: "Target A: 1/2" dan "Target B: 1/4"
- Tray: potongan 1/4 (6 buah)

**Mekanik:**
1. **Resource allocation**: potongan terbatas
2. Target A butuh 2 potongan 1/4
3. Target B butuh 1 potongan 1/4
4. **Planning**: user harus distribusi dengan benar

**Config:**
```json
{
  "level": 12,
  "type": "build-multiple",
  "targets": [
    { "id": "target-a", "label": "1/2", "value": 2, "denominator": 4 },
    { "id": "target-b", "label": "1/4", "value": 1, "denominator": 4 }
  ],
  "pieces": [
    { "id": "piece-1", "value": "1/4" },
    { "id": "piece-2", "value": "1/4" },
    { "id": "piece-3", "value": "1/4" }
  ],
  "tip": "1/2 = 2/4, jadi butuh 2 potongan untuk target A"
}
```

---

### **Level 13: Potongan Berbeda Ukuran (1/4 dan 1/2)**
**Visual (prediksi):**
- Target: "3/4"
- Tray: potongan ["1/2", "1/4", "1/4"]
- **Strategy**: kombinasi berbeda

**Mekanik:**
1. Multiple solutions: (1/2 + 1/4) atau (1/4 + 1/4 + 1/4)
2. **Efisiensi**: gunakan potongan terbesar dulu

**Config:**
```json
{
  "level": 13,
  "type": "build-target",
  "target": { "label": "3/4", "value": 3, "denominator": 4 },
  "pieces": [
    { "id": "piece-1", "label": "Potongan Besar", "value": "1/2" },
    { "id": "piece-2", "label": "Potongan Kecil", "value": "1/4" },
    { "id": "piece-3", "label": "Potongan Kecil", "value": "1/4" },
    { "id": "piece-4", "label": "Potongan Kecil", "value": "1/4" }
  ],
  "requiredValue": 0.75,
  "tip": "1/2 = 2/4, jadi 1/2 + 1/4 = 3/4"
}
```

---

### **Level 14: Penyebut Berbeda (1/2 + 1/3)**
**Visual (prediksi):**
- Target: "5/6"
- Tray: potongan ["1/2", "1/3", "1/6", "1/6"]
- **Common denominator challenge**

**Mekanik:**
1. **Convert visual**: semua potongan dalam denominasi 1/6
2. 1/2 = 3/6, 1/3 = 2/6
3. Hitung kombinasi

**Config:**
```json
{
  "level": 14,
  "type": "build-target",
  "target": { "label": "5/6", "value": 5, "denominator": 6 },
  "pieces": [
    { "id": "piece-1", "label": "Potongan 1/2", "value": "1/2", "equivalent": "3/6" },
    { "id": "piece-2", "label": "Potongan 1/3", "value": "1/3", "equivalent": "2/6" },
    { "id": "piece-3", "label": "Potongan 1/6", "value": "1/6" },
    { "id": "piece-4", "label": "Potongan 1/6", "value": "1/6" }
  ],
  "requiredValue": 5/6,
  "tip": "Samakan penyebut: 1/2 = 3/6, 1/3 = 2/6"
}
```

---

### **Level 15: Ujian Modul 3**
**Visual (prediksi):**
- 3 target berbeda: ["1/2", "2/3", "3/4"]
- Tray: potongan campuran ["1/4", "1/3", "1/6", "1/2"]
- **Resource management challenge**

**Mekanik:**
1. **Complex allocation**: potongan terbatas
2. Hitung kebutuhan tiap target
3. Optimasi penggunaan

**Config:**
```json
{
  "level": 15,
  "type": "build-multiple",
  "targets": [
    { "id": "target-a", "label": "1/2", "value": 0.5 },
    { "id": "target-b", "label": "2/3", "value": 2/3 },
    { "id": "target-c", "label": "3/4", "value": 0.75 }
  ],
  "pieces": [
    { "id": "piece-1", "value": "1/2" },
    { "id": "piece-2", "value": "1/3" },
    { "id": "piece-3", "value": "1/4" },
    { "id": "piece-4", "value": "1/6" },
    { "id": "piece-5", "value": "1/6" },
    { "id": "piece-6", "value": "1/6" }
  ],
  "tip": "Samakan semua ke penyebut 12 untuk memudahkan"
}
```

---

## **MODUL 4: Pecahan & Desimal (Level 16-20)**
**Mascot: Harimau Si Atlet**
**Tema: Puncak Bintang Kristal**

### **Level 16: 1/2 = 0.50**
**Visual dari Figma:**
- Slider vertikal di kiri
- Botol skala desimal di tengah: [1,00 / 0,75 / 0,50 / 0,25 / 0,00]
- Botol target di kanan: label "1/2 Terisi"
- Mascot: "Harimau Si Atlet - Geser slider agar nilainya sama!"

**Mekanik:**
1. Drag slider vertikal
2. **Real-time sync**: botol terisi sesuai posisi slider
3. Target: samakan nilai desimal dengan pecahan 1/2
4. Tolerance: ±0.05

**Config:**
```json
{
  "level": 16,
  "type": "decimal-slider",
  "target": { "fraction": "1/2", "decimal": 0.5 },
  "slider": { "min": 0, "max": 1, "step": 0.01 },
  "markers": [0, 0.25, 0.5, 0.75, 1],
  "tip": "1/2 = 0.50 = 50%"
}
```

---

### **Level 17: 1/4 = 0.25**
**Visual:**
- Target: "1/4 Terisi"
- Slider sama

**Mekanik:**
1. Precision challenge: target lebih kecil
2. **Introduksi**: visual percentage (25%)

**Config:**
```json
{
  "level": 17,
  "type": "decimal-slider",
  "target": { "fraction": "1/4", "decimal": 0.25 },
  "slider": { "min": 0, "max": 1, "step": 0.01 },
  "markers": [0, 0.25, 0.5, 0.75, 1],
  "tip": "1/4 = 0.25 = 25%"
}
```

---

### **Level 18: 3/4 = 0.75**
**Visual:**
- Target: "3/4 Terisi"
- **Challenge**: atas bukan bawah

**Mekanik:**
1. Mental conversion: 3/4 = 75% = 0.75
2. Visual: botol hampir penuh

**Config:**
```json
{
  "level": 18,
  "type": "decimal-slider",
  "target": { "fraction": "3/4", "decimal": 0.75 },
  "slider": { "min": 0, "max": 1, "step": 0.01 },
  "markers": [0, 0.25, 0.5, 0.75, 1],
  "tip": "3/4 = 0.75 = 75%"
}
```

---

### **Level 19: 1/3 ≈ 0.33**
**Visual (prediksi):**
- Target: "1/3 Terisi"
- **Challenge**: decimal repeating (0.333...)

**Mekanik:**
1. **Approximation**: 1/3 ≈ 0.33
2. Tolerance lebih besar (±0.02)
3. **Introduksi**: desimal berulang

**Config:**
```json
{
  "level": 19,
  "type": "decimal-slider",
  "target": { "fraction": "1/3", "decimal": 0.333 },
  "slider": { "min": 0, "max": 1, "step": 0.01 },
  "tolerance": 0.02,
  "tip": "1/3 ≈ 0.33 (desimal berulang 0.333...)"
}
```

---

### **Level 20: Ujian Modul 4**
**Visual (prediksi):**
- **Dual challenge**: dua botol target
- Target A: "2/5 Terisi" 
- Target B: "0.60 Terisi"
- **Convert between formats**

**Mekanik:**
1. **Mode conversion**: pecahan ↔ desimal
2. Drag slider untuk kedua target
3. **Mental math**: 2/5 = 0.40, 0.60 = 3/5

**Config:**
```json
{
  "level": 20,
  "type": "decimal-dual",
  "targets": [
    { "id": "target-a", "format": "fraction", "value": "2/5", "decimal": 0.4 },
    { "id": "target-b", "format": "decimal", "value": "0.60", "fraction": "3/5" }
  ],
  "slider": { "min": 0, "max": 1, "step": 0.01 },
  "tip": "2/5 = 0.40 = 40%, 0.60 = 3/5 = 60%"
}
```

---

## **GUIDELINES IMPLEMENTASI**

### **Design Tokens (Extract dari Figma)**
```css
/* Warna Zona */
--zone-1: #FFD166; /* Taman Bolu & Kue Ceria */
--zone-2: #06D6A0; /* Hutan Hint & Timbangan */
--zone-3: #118AB2; /* Danau Kepulauan Puzzle */
--zone-4: #EF476F; /* Puncak Bintang Kristal */

/* Warna Mascot */
--mascot-1: #FF9A76; /* Koki Kucing */
--mascot-2: #FFDAC1; /* Putri Kelinci */
--mascot-3: #B5EAD7; /* Monyet Si Detektif */
--mascot-4: #C7CEEA; /* Harimau Si Atlet */
```

### **Komponen yang Perlu Dibuat**
1. `CuttingSandbox.tsx` - Modul 1
2. `CompareSelector.tsx` - Modul 2  
3. `BuildTarget.tsx` - Modul 3
4. `DecimalSlider.tsx` - Modul 4
5. `LevelLayout.tsx` - Template universal semua level
6. `MascotCard.tsx` - Kartu intro mascot
7. `HintBox.tsx` - Kotak tips/tahukah kamu
8. `LevelComplete.tsx` - Banner complete

### **Data Structure**
```typescript
interface LevelConfig {
  level: number;
  module: 'perkenalan' | 'bandingkan' | 'susun' | 'desimal';
  difficultyConfig: any; // sesuai modul
  mascot: string;
  themeColor: string;
  targetConcept: string;
  tip: string;
  completedMessage: string;
}

// Store di lib/levels.ts
export const LEVELS: LevelConfig[] = [...];
```

### **Validasi Progresi**
- Level terbuka jika level sebelumnya `completed`
- Progress tracking: `completed`, `completedAt`, `stars` (optional)
- Reward: badge visual di peta setelah complete
- Tidak ada punishment untuk salah

---

**Next Step:** Ekstrak design tokens dari Figma dan setup project foundation.