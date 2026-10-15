// Level configurations untuk PecahanKu game
// Berdasarkan LEVEL_SPECS.md dan PROJECT_SPEC.md
// Semua level terstruktur dengan field yang konsisten

import { LevelConfig } from './types';

// =============================================================================
// LEVEL TYPES & INTERFACES
// =============================================================================

export interface LevelConfig {
  level: number;
  module: 'perkenalan' | 'bandingkan' | 'susun' | 'desimal';
  difficultyConfig: any; // Config spesifik per level (berbeda tiap level)
  mascot: {
    name: string;
    themeColor: string;
    greeting: string;
  };
  themeColor: string;
  targetConcept: string;
  tip: string;
  completedMessage: string;
  estimatedTime?: number; // menit
}

// =============================================================================
// DATA LEVEL (20 levels total)
// =============================================================================

export const LEVELS: LevelConfig[] = [
  // =============================================================================
  // MODUL 1: Perkenalan Pecahan (Level 1-5)
  // =============================================================================

  // Level 1: Pecahan 1/2
  {
    level: 1,
    module: 'perkenalan',
    difficultyConfig: {
      cake: { whole: 1, pieces: 2 },
      plates: [
        { id: 'plate-1', label: '1/2', targetPieces: 1 },
        { id: 'plate-2', label: '1/2', targetPieces: 1 }
      ],
      tip: '1 kue dibagi 2 = masing-masing mendapat 1/2'
    },
    mascot: {
      name: 'Koki Kucing',
      themeColor: '#FF9A76',
      greeting: 'Koki kucing - Saya punya 1 kue utuh, ayo bantu saya membagi kue ini ke piring yang sesuai!'
    },
    themeColor: '#FFD166', // Taman Bolu & Kue Ceria
    targetConcept: 'Memahami konsep pecahan 1/2 sebagai pembagian kue sama besar',
    tip: '1 kue dibagi 2 = masing-masing mendapat 1/2',
    completedMessage: 'Hasil Cocok Pecahan! 1/2 + 1/2 = 1 Kue Utuh!'
  },

  // Level 2: Pecahan 1/3
  {
    level: 2,
    module: 'perkenalan',
    difficultyConfig: {
      cake: { whole: 1, pieces: 3 },
      plates: [
        { id: 'plate-1', label: '1/3', targetPieces: 1 },
        { id: 'plate-2', label: '1/3', targetPieces: 1 },
        { id: 'plate-3', label: '1/3', targetPieces: 1 }
      ],
      tip: '1 kue dibagi 3 = masing-masing mendapat 1/3'
    },
    mascot: {
      name: 'Koki Kucing',
      themeColor: '#FF9A76',
      greeting: 'Koki kucing - 3 kue utuh, ayo bagi 3!'
    },
    themeColor: '#FFD166',
    targetConcept: 'Memahami konsep pecahan 1/3 sebagai pembagian kue sama besar',
    tip: '1 kue dibagi 3 = masing-masing mendapat 1/3',
    completedMessage: '1/3 + 1/3 + 1/3 = 1 Kue Utuh!'
  },

  // Level 3: Pecahan 1/4
  {
    level: 3,
    module: 'perkenalan',
    difficultyConfig: {
      cake: { whole: 1, pieces: 4 },
      plates: [
        { id: 'plate-1', label: '1/4', targetPieces: 1 },
        { id: 'plate-2', label: '1/4', targetPieces: 1 },
        { id: 'plate-3', label: '1/4', targetPieces: 1 },
        { id: 'plate-4', label: '1/4', targetPieces: 1 }
      ],
      tip: '2 potongan 1/4 = 1/2 kue'
    },
    mascot: {
      name: 'Koki Kucing',
      themeColor: '#FF9A76',
      greeting: 'Koki kucing - Mari buat 4 potong!'
    },
    themeColor: '#FFD166',
    targetConcept: 'Memahami konsep pecahan 1/4 dan hubungan dengan 1/2',
    tip: '2 potongan 1/4 = 1/2 kue',
    completedMessage: '1/4 + 1/4 + 1/4 + 1/4 = 1 Kue Utuh!'
  },

  // Level 4: Campuran Pecahan (1/2, 1/4)
  {
    level: 4,
    module: 'perkenalan',
    difficultyConfig: {
      cake: { whole: 1, pieces: 8 },
      plates: [
        { id: 'plate-1', label: '1/2', targetPieces: 4 },
        { id: 'plate-2', label: '1/4', targetPieces: 2 },
        { id: 'plate-3', label: '1/4', targetPieces: 2 }
      ],
      tip: '1/2 = 2/4 = 4/8'
    },
    mascot: {
      name: 'Koki Kucing',
      themeColor: '#FF9A76',
      greeting: 'Koki kucing - Mari buat kombinasi!'
    },
    themeColor: '#FFD166',
    targetConcept: 'Memahami pecahan senilai dan kombinasi',
    tip: '1/2 = 2/4 = 4/8',
    completedMessage: 'Semua piring terisi dengan benar!'
  },

  // Level 5: Ujian Modul 1
  {
    level: 5,
    module: 'perkenalan',
    difficultyConfig: {
      cake: { whole: 1, pieces: 12 },
      plates: [
        { id: 'plate-1', label: '1/3', targetPieces: 4 },
        { id: 'plate-2', label: '2/6', targetPieces: 4 },
        { id: 'plate-3', label: '1/2', targetPieces: 6 },
        { id: 'plate-4', label: '3/6', targetPieces: 6 }
      ],
      tip: 'Pecahan senilai: 1/3 = 2/6, 1/2 = 3/6'
    },
    mascot: {
      name: 'Koki Kucing',
      themeColor: '#FF9A76',
      greeting: 'Koki kucing - Mari temukan pecahan senilai!'
    },
    themeColor: '#FFD166',
    targetConcept: 'Memahami dan menerapkan konsep pecahan senilai',
    tip: 'Pecahan senilai: 1/3 = 2/6, 1/2 = 3/6',
    completedMessage: 'Semua pecahan senilai teridentifikasi dengan benar!'
  },

  // =============================================================================
  // MODUL 2: Bandingkan Pecahan (Level 6-10)
  // =============================================================================\n\n  // Level 6: Bandingkan 1/4 vs 2/4\n  {\n    level: 6,\n    module: 'bandingkan',\n    difficultyConfig: {\n      type: 'compare',\n      cards: [\n        { id: 'card-a', label: 'Piring A', value: '1/4', filled: 1, total: 4 },\n        { id: 'card-b', label: 'Piring B', value: '2/4', filled: 2, total: 4 }\n      ],\n      correctAnswer: 'card-b',\n      tip: 'Semakin banyak bagian terisi, semakin besar nilai pecahan'\n    },\n    mascot: {\n      name: 'Putri Kelinci',\n      themeColor: '#FFDAC1',\n      greeting: 'Putri Kelinci - Tentukan potongan kue yang lebih besar!'\n    },\n    themeColor: '#06D6A0', // Hutan Hint & Timbangan\n    targetConcept: 'Membandingkan pecahan dengan melihat bagian yang terisi',\n    tip: '2/4 > 1/4 karena lebih banyak bagian terisi',\n    completedMessage: 'Pembandingan benar! 2/4 lebih besar dari 1/4'
  },\n\n  // Level 7: Bandingkan 2/4 vs 3/4\n  {\n    level: 7,\n    module: 'bandingkan',\n    difficultyConfig: {\n      type: 'compare',\n      cards: [\n        { id: 'card-a', label: 'Piring A', value: '2/4', filled: 2, total: 4 },\n        { id: 'card-b', label: 'Piring B', value: '3/4', filled: 3, total: 4 }\n      ],\n      correctAnswer: 'card-b',\n      tip: 'Semakin dekat ke 1, semakin besar nilainya'\n    },\n    mascot: {\n      name: 'Putri Kelinci',\n      themeColor: '#FFDAC1',\n      greeting: 'Putri Kelinci - Semakin besar pecahan, semakin dekat ke 1!'\n    },\n    themeColor: '#06D6A0',\n    targetConcept: 'Membandingkan pecahan yang lebih dekat ke 1',\n    tip: '3/4 > 2/4 karena lebih dekat ke 1',\n    completedMessage: 'Pembandingan benar! 3/4 lebih besar dari 2/4'
  },\n\n  // Level 8: Bandingkan 3 Piring (1/4, 2/4, 3/4)\n  {\n    level: 8,\n    module: 'bandingkan',\n    difficultyConfig: {\n      type: 'sort',\n      cards: [\n        { id: 'card-1', label: 'Piring A', value: '1/4', filled: 1, total: 4 },\n        { id: 'card-2', label: 'Piring B', value: '2/4', filled: 2, total: 4 },\n        { id: 'card-3', label: 'Piring C', value: '3/4', filled: 3, total: 4 }\n      ],\n      correctOrder: ['card-1', 'card-2', 'card-3'],\n      tip: 'Urutkan berdasarkan banyaknya bagian terisi'\n    },\n    mascot: {\n      name: 'Putri Kelinci',\n      themeColor: '#FFDAC1',\n      greeting: 'Putri Kelinci - Urutkan dari yang terkecil ke terbesar!'\n    },\n    themeColor: '#06D6A0',\n    targetConcept: 'Mengurut pecahan dari nilai terkecil ke terbesar',\n    tip: '1/4 < 2/4 < 3/4',\n    completedMessage: 'Pengurutan benar! 1/4 < 2/4 < 3/4'
  },\n\n  // Level 9: Pecahan Penyebut Berbeda (1/2 vs 3/4)\n  {\n    level: 9,\n    module: 'bandingkan',\n    difficultyConfig: {\n      type: 'compare',\n      cards: [\n        { id: 'card-a', label: 'Piring A', value: '1/2', filled: 2, total: 4 },\n        { id: 'card-b', label: 'Piring B', value: '3/4', filled: 3, total: 4 }\n      ],\n      correctAnswer: 'card-b',\n      tip: 'Samakan penyebut dulu: 1/2 = 2/4, lalu bandingkan'\n    },\n    mascot: {\n      name: 'Putri Kelinci',\n      themeColor: '#FFDAC1',\n      greeting: 'Putri Kelinci - Mari samakan penyebut dulu!'\n    },\n    themeColor: '#06D6A0',\n    targetConcept: 'Membandingkan pecahan dengan penyebut berbeda menggunakan common denominator',\n    tip: '1/2 = 2/4, 3/4 = 3/4, jadi 2/4 < 3/4',\n    completedMessage: 'Pembandingan benar! 3/4 lebih besar dari 1/2'
  },\n\n  // Level 10: Ujian Modul 2\n  {\n    level: 10,\n    module: 'bandingkan',\n    difficultyConfig: {\n      type: 'odd-one-out',\n      cards: [\n        { id: 'card-a', label: 'Piring A', value: '1/3', filled: 4, total: 12 },\n        { id: 'card-b', label: 'Piring B', value: '2/6', filled: 4, total: 12 },\n        { id: 'card-c', label: 'Piring C', value: '3/9', filled: 4, total: 12 },\n        { id: 'card-d', label: 'Piring D', value: '4/12', filled: 6, total: 12 }\n      ],\n      correctAnswer: 'card-d',\n      tip: 'Sederhanakan pecahan ke bentuk paling sederhana'\n    },\n    mascot: {\n      name: 'Putri Kelinci',\n      themeColor: '#FFDAC1',\n      greeting: 'Putri Kelinci - Mari temukan yang berbeda!'\n    },\n    themeColor: '#06D6A0',\n    targetConcept: 'Mengidentifikasi pecahan yang berbeda dalam kelompok yang senilai',\n    tip: '4/12 = 1/3, jadi Piring D berbeda',\n    completedMessage: 'Pecahan berbeda teridentifikasi! Piring D bernilai 1/3, bukan 1/3 yang lain'
  },\n\n  // =============================================================================\n  // MODUL 3: Urut & Susun Pecahan (Level 11-15)\n  // =============================================================================\n\n  // Level 11: Susun 2/4 dari potongan 1/4\n  {\n    level: 11,\n    module: 'susun',\n    difficultyConfig: {\n      type: 'build-target',\n      target: { label: '2/4', value: 2, denominator: 4 },\n      pieces: [\n        { id: 'piece-1', label: 'Potongan A', value: '1/4' },\n        { id: 'piece-2', label: 'Potongan B', value: '1/4' },\n        { id: 'piece-3', label: 'Potongan C', value: '1/4' },\n        { id: 'piece-4', label: 'Potongan D', value: '1/4' }\n      ],\n      requiredPieces: 2,\n      tip: '1/4 + 1/4 = 2/4'\n    },\n    mascot: {\n      name: 'Monyet Si Detektif',\n      themeColor: '#B5EAD7',\n      greeting: 'Monyet Si Detektif - Drag potongan ke target!'\n    },\n    themeColor: '#118AB2', // Danau Kepulauan Puzzle\n    targetConcept: 'Membangun target pecahan dengan mengumpulkan potongan yang sesuai',\n    tip: '1/4 + 1/4 = 2/4',\n    completedMessage: 'Target tercapai! 1/4 + 1/4 = 2/4'
  },\n\n  // Level 12: Multiple Targets (1/2 dan 1/4)\n  {\n    level: 12,\n    module: 'susun',\n    difficultyConfig: {\n      type: 'build-multiple',\n      targets: [\n        { id: 'target-a', label: '1/2', value: 2, denominator: 4 },\n        { id: 'target-b', label: '1/4', value: 1, denominator: 4 }\n      ],\n      pieces: [\n        { id: 'piece-1', value: '1/4' },\n        { id: 'piece-2', value: '1/4' },\n        { id: 'piece-3', value: '1/4' }\n      ],\n      tip: '1/2 = 2/4, jadi butuh 2 potongan untuk target A'\n    },\n    mascot: {\n      name: 'Monyet Si Detektif',\n      themeColor: '#B5EAD7',\n      greeting: 'Monyet Si Detektif - Alokasi sumber daya yang benar!'\n    },\n    themeColor: '#118AB2',\n    targetConcept: 'Mengelola sumber daya terbatas untuk memenuhi multiple target',\n    tip: 'Target A butuh 2 potongan, Target B butuh 1 potongan',\n    completedMessage: 'Semua target terisi dengan benar!'
  },\n\n  // Level 13: Potongan Berbeda Ukuran (1/4 dan 1/2)\n  {\n    level: 13,\n    module: 'susun',\n    difficultyConfig: {\n      type: 'build-target',\n      target: { label: '3/4', value: 3, denominator: 4 },\n      pieces: [\n        { id: 'piece-1', label: 'Potongan Besar', value: '1/2' },\n        { id: 'piece-2', label: 'Potongan Kecil', value: '1/4' },\n        { id: 'piece-3', label: 'Potongan Kecil', value: '1/4' },\n        { id: 'piece-4', label: 'Potongan Kecil', value: '1/4' }\n      ],\n      requiredValue: 0.75,\n      tip: '1/2 = 2/4, jadi 1/2 + 1/4 = 3/4'\n    },\n    mascot: {\n      name: 'Monyet Si Detektif',\n      themeColor: '#B5EAD7',\n      greeting: 'Monyet Si Detektif - Efisiensi adalah kunci!'\n    },\n    themeColor: '#118AB2',\n    targetConcept: 'Mengoptimalkan penggunaan potongan untuk mencapai target',\n    tip: 'Gunakan potongan terbesar dulu: 1/2 + 1/4 = 3/4',\n    completedMessage: 'Target tercapai dengan efisien!'
  },\n\n  // Level 14: Penyebut Berbeda (1/2 + 1/3)\n  {\n    level: 14,\n    module: 'susun',\n    difficultyConfig: {\n      type: 'build-target',\n      target: { label: '5/6', value: 5, denominator: 6 },\n      pieces: [\n        { id: 'piece-1', label: 'Potongan 1/2', value: '1/2', equivalent: '3/6' },\n        { id: 'piece-2', label: 'Potongan 1/3', value: '1/3', equivalent: '2/6' },\n        { id: 'piece-3', label: 'Potongan 1/6', value: '1/6' },\n        { id: 'piece-4', label: 'Potongan 1/6', value: '1/6' }\n      ],\n      requiredValue: 5/6,\n      tip: 'Samakan penyebut: 1/2 = 3/6, 1/3 = 2/6'\n    },\n    mascot: {\n      name: 'Monyet Si Detektif',\n      themeColor: '#B5EAD7',\n      greeting: 'Monyet Si Detektif - Common denominator!'\n    },\n    themeColor: '#118AB2',\n    targetConcept: 'Menyelesaikan masalah dengan pecahan yang memiliki penyebut berbeda menggunakan common denominator',\n    tip: '1/2 = 3/6, 1/3 = 2/6, jadi 3/6 + 2/6 + 1/6 = 6/6 = 1',\n    completedMessage: 'Target tercapai! 5/6 membutuhkan kombinasi pecahan yang tepat'
  },\n\n  // Level 15: Ujian Modul 3\n  {\n    level: 15,\n    module: 'susun',\n    difficultyConfig: {\n      type: 'build-multiple',\n      targets: [\n        { id: 'target-a', label: '1/2', value: 0.5 },\n        { id: 'target-b', label: '2/3', value: 2/3 },\n        { id: 'target-c', label: '3/4', value: 0.75 }\n      ],\n      pieces: [\n        { id: 'piece-1', value: '1/2' },\n        { id: 'piece-2', value: '1/3' },\n        { id: 'piece-3', value: '1/4' },\n        { id: 'piece-4', value: '1/6' },\n        { id: 'piece-5', value: '1/6' },\n        { id: 'piece-6', value: '1/6' }\n      ],\n      tip: 'Samakan semua ke penyebut 12 untuk memudahkan'\n    },\n    mascot: {\n      name: 'Monyet Si Detektif',\n      themeColor: '#B5EAD7',\n      greeting: 'Monyet Si Detektif - Tantangan kompleks!'\n    },\n    themeColor: '#118AB2',\n    targetConcept: 'Manajemen sumber daya yang kompleks untuk memenuhi multiple target dengan benar',\n    tip: '1/2 = 6/12, 2/3 = 8/12, 3/4 = 9/12, butuh 23/12 total',\n    completedMessage: 'Tantangan kompleks terselesaikan! Semua target terisi dengan benar'
  },\n\n  // =============================================================================\n  // MODUL 4: Pecahan & Desimal (Level 16-20)\n  // =============================================================================\n\n  // Level 16: 1/2 = 0.50\n  {\n    level: 16,\n    module: 'desimal',\n    difficultyConfig: {\n      type: 'decimal-slider',\n      target: { fraction: '1/2', decimal: 0.5 },\n      slider: { min: 0, max: 1, step: 0.01 },\n      markers: [0, 0.25, 0.5, 0.75, 1],\n      tip: '1/2 = 0.50 = 50%'\n    },\n    mascot: {\n      name: 'Harimau Si Atlet',\n      themeColor: '#C7CEEA',\n      greeting: 'Harimau Si Atlet - Geser slider agar nilainya sama!'\n    },\n    themeColor: '#EF476F', // Puncak Bintang Kristal\n    targetConcept: 'Mengkonversi pecahan ke desimal dan menyamakan nilai',\n    tip: '1/2 = 0.50, geser slider ke 0.50',\n    completedMessage: 'Pecahan-Desimal cocok! 1/2 = 0.50'
  },\n\n  // Level 17: 1/4 = 0.25\n  {\n    level: 17,\n    module: 'desimal',\n    difficultyConfig: {\n      type: 'decimal-slider',\n      target: { fraction: '1/4', decimal: 0.25 },\n      slider: { min: 0, max: 1, step: 0.01 },\n      markers: [0, 0.25, 0.5, 0.75, 1],\n      tip: '1/4 = 0.25 = 25%'\n    },\n    mascot: {\n      name: 'Harimau Si Atlet',\n      themeColor: '#C7CEEA',\n      greeting: 'Harimau Si Atlet - Target lebih kecil!'\n    },\n    themeColor: '#EF476F',\n    targetConcept: 'Menyesuaikan pecahan ke desimal yang lebih kecil',\n    tip: '1/4 = 0.25, geser slider ke 0.25',\n    completedMessage: 'Pecahan-Desimal cocok! 1/4 = 0.25'
  },\n\n  // Level 18: 3/4 = 0.75\n  {\n    level: 18,\n    module: 'desimal',\n    difficultyConfig: {\n      type: 'decimal-slider',\n      target: { fraction: '3/4', decimal: 0.75 },\n      slider: { min: 0, max: 1, step: 0.01 },\n      markers: [0, 0.25, 0.5, 0.75, 1],\n      tip: '3/4 = 0.75 = 75%'\n    },\n    mascot: {\n      name: 'Harimau Si Atlet',\n      themeColor: '#C7CEEA',\n      greeting: 'Harimau Si Atlet - Atas bukan bawah!'\n    },\n    themeColor: '#EF476F',\n    targetConcept: 'Mengkonversi pecahan ke desimal yang lebih besar',\n    tip: '3/4 = 0.75, geser slider ke 0.75',\n    completedMessage: 'Pecahan-Desimal cocok! 3/4 = 0.75'
  },\n\n  // Level 19: 1/3 ≈ 0.33\n  {\n    level: 19,\n    module: 'desimal',\n    difficultyConfig: {\n      type: 'decimal-slider',\n      target: { fraction: '1/3', decimal: 0.333 },\n      slider: { min: 0, max: 1, step: 0.01 },\n      tolerance: 0.02,\n      tip: '1/3 ≈ 0.33 (desimal berulang 0.333...)'\n    },\
    mascot: {\n      name: 'Harimau Si Atlet',\n      themeColor: '#C7CEEA',\n      greeting: 'Harimau Si Atlet - Desimal berulang!'\n    },\n    themeColor: '#EF476F',\n    targetConcept: 'Memahami desimal berulang dan aproksimasi',\n    tip: '1/3 ≈ 0.33, toleransi ±0.02',\n    completedMessage: 'Pecahan-Desimal cocok! 1/3 ≈ 0.33'
  },\n\n  // Level 20: Ujian Modul 4\n  {\n    level: 20,\n    module: 'desimal',\n    difficultyConfig: {\n      type: 'decimal-dual',\n      targets: [\n        { id: 'target-a', format: 'fraction', value: '2/5', decimal: 0.4 },\n        { id: 'target-b', format: 'decimal', value: '0.60', fraction: '3/5' }\n      ],\n      slider: { min: 0, max: 1, step: 0.01 },\n      tip: '2/5 = 0.40 = 40%, 0.60 = 3/5 = 60%'\n    },\n    mascot: {\n      name: 'Harimau Si Atlet',\n      themeColor: '#C7CEEA',\n      greeting: 'Harimau Si Atlet - Dual challenge!'\n    },\n    themeColor: '#EF476F',\n    targetConcept: 'Mengkonversi antara format pecahan dan desimal dengan benar',\n    tip: 'Target A: 2/5 = 0.40, Target B: 0.60 = 3/5',\n    completedMessage: 'Ujian selesai! Konversi pecahan-desimal sempurna!'
  }\n];\n\nexport default LEVELS;