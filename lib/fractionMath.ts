// Core fraction operations for PecahanKu game
// Semua operasi mendukung presisi tinggi untuk pembelajaran pecahan

export interface Fraction {
  numerator: number;  // pembilang
  denominator: number; // penyebut
}

export interface SimplifiedFraction {
  numerator: number;
  denominator: number;
}

// ============================================================================
// POKOK DASAR FRASIÓN
// ============================================================================

/**
 * Sederhanakan pecahan ke bentuk paling sederhana
 * Contoh: 2/4 -> 1/2, 6/8 -> 3/4
 */
export function simplifyFraction(fraction: Fraction): SimplifiedFraction {
  const gcd = (a: number, b: number): number => {
    return b === 0 ? Math.abs(a) : gcd(b, a % b);
  };

  const absNumerator = Math.abs(fraction.numerator);
  const absDenominator = Math.abs(fraction.denominator);
  const divisor = gcd(absNumerator, absDenominator);

  return {
    numerator: absNumerator / divisor,
    denominator: absDenominator / divisor
  };
}

/**
 * Cek apakah dua pecahan senilai
 * Contoh: 1/2 == 2/4, true
 */
export function fractionsEqual(frac1: Fraction, frac2: Fraction): boolean {
  const simplified1 = simplifyFraction(frac1);
  const simplified2 = simplifyFraction(frac2);
  return simplified1.numerator === simplified2.numerator &&
         simplified1.denominator === simplified2.denominator;
}

/**
 * Konversi pecahan ke desimal
 * Contoh: 1/2 -> 0.5, 1/4 -> 0.25
 */
export function toDecimal(fraction: Fraction): number {
  return fraction.numerator / fraction.denominator;
}

/**
 * Konversi desimal ke pecahan (mendekati)
 * Contoh: 0.5 -> 1/2, 0.75 -> 3/4
 */
export function fromDecimal(decimal: number, maxDenominator: number = 32): Fraction {
  if (decimal === 0) return { numerator: 0, denominator: 1 };

  const epsilon = 1 / (maxDenominator * 1000);
  let bestFraction: Fraction = { numerator: 0, denominator: 1 };
  let bestDiff = Number.MAX_SAFE_INTEGER;

  for (let denominator = 1; denominator <= maxDenominator; denominator++) {
    for (let numerator = 0; numerator <= denominator; numerator++) {
      const candidateDecimal = numerator / denominator;
      const diff = Math.abs(candidateDecimal - decimal);

      if (diff < epsilon && diff < bestDiff) {
        bestDiff = diff;
        bestFraction = { numerator, denominator };
      }
    }
  }

  return bestFraction;
}

/**
 * Bandingkan dua pecahan: mana yang lebih besar
 * Contoh: 1/2 > 1/3, true
 */
export function compareFractions(frac1: Fraction, frac2: Fraction): number {
  const decimal1 = toDecimal(frac1);
  const decimal2 = toDecimal(frac2);
  return decimal1 - decimal2; // positif: frac1 > frac2, negatif: frac1 < frac2, nol: sama
}

/**
 * Jumlahkan dua pecahan
 * Contoh: 1/4 + 1/2 = 3/4
 */
export function addFractions(frac1: Fraction, frac2: Fraction): Fraction {
  const commonDenominator = frac1.denominator * frac2.denominator;
  const numerator = frac1.numerator * frac2.denominator + frac2.numerator * frac1.denominator;

  return { numerator, denominator: commonDenominator };
}

/**
 * Kurangkan dua pecahan
 * Contoh: 3/4 - 1/2 = 1/4
 */
export function subtractFractions(frac1: Fraction, frac2: Fraction): Fraction {
  const commonDenominator = frac1.denominator * frac2.denominator;
  const numerator = frac1.numerator * frac2.denominator - frac2.numerator * frac1.denominator;

  return { numerator, denominator: commonDenominator };
}

/**
 * Konversi pecahan ke bentuk campur (jika ada)
 * Contoh: 5/4 -> "1 1/4"
 */
export function toMixedNumber(fraction: Fraction): string {
  const whole = Math.floor(fraction.numerator / fraction.denominator);
  const remainder = fraction.numerator % fraction.denominator;

  if (whole === 0) {
    return `${fraction.numerator}/${fraction.denominator}`;
  }

  if (remainder === 0) {
    return whole.toString();
  }

  return `${whole} ${remainder}/${fraction.denominator}`;
}

/**
 * Parse string pecahan (contoh: "1/2") ke objek Fraction
 */
export function parseFractionString(fractionStr: string): Fraction {
  const parts = fractionStr.split('/').map(Number);

  if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1]) || parts[1] === 0) {
    throw new Error(`Format pecahan tidak valid: ${fractionStr}`);
  }

  return { numerator: parts[0], denominator: parts[1] };
}

// ============================================================================
// BANTUAN VALIDASI & TOOLS
// ============================================================================

/**
 * Validasi apakah pecahan valid untuk konteks belajar
 * Memastikan penyebut tidak nol dan tidak terlalu besar
 */
export function isValidLearningFraction(fraction: Fraction): boolean {
  return fraction.denominator > 0 &&
         fraction.denominator <= 32 && // batas yang masuk akal untuk pembelajaran
         Math.abs(fraction.numerator) <= 32;
}

/**
 * Buat array pecahan senilai untuk latihan equivalensi
 * Contoh: 1/2 -> [2/4, 3/6, 4/8]
 */
export function generateEquivalentFractions(fraction: Fraction, count: number = 3): Fraction[] {
  const equivalents: Fraction[] = [];
  const maxMultipliers = Math.min(8, Math.floor(32 / fraction.denominator));

  for (let multiplier = 2; multiplier <= maxMultipliers && equivalents.length < count; multiplier++) {
    equivalents.push({
      numerator: fraction.numerator * multiplier,
      denominator: fraction.denominator * multiplier
    });
  }

  return equivalents;
}

/**
 * Dapatkan common denominator dari beberapa pecahan
 */
export function getCommonDenominator(fractions: Fraction[]): number {
  if (fractions.length === 0) return 1;

  let lcm = fractions[0].denominator;

  for (let i = 1; i < fractions.length; i++) {
    lcm = (lcm * fractions[i].denominator) / gcd(lcm, fractions[i].denominator);
  }

  return lcm;
}

/**
 * Konversi array pecahan ke common denominator
 */
export function toCommonDenominator(fractions: Fraction[]): Fraction[] {
  const commonDenom = getCommonDenominator(fractions);

  return fractions.map(frac => ({
    numerator: frac.numerator * (commonDenom / frac.denominator),
    denominator: commonDenom
  }));
}

/**
 * Hitung error absolut antara pecahan dan target
 */
export function fractionError(fraction: Fraction, target: Fraction): number {
  return Math.abs(toDecimal(fraction) - toDecimal(target));
}

/**
 * Konversi pecahan ke CSS custom properties untuk styling visual
 */
export function fractionToCSSProperties(fraction: Fraction): { '--fraction-numerator': string; '--fraction-denominator': string } {
  return {
    '--fraction-numerator': fraction.numerator.toString(),
    '--fraction-denominator': fraction.denominator.toString()
  };
}

/**
 * Format pecahan untuk display UI (Bahasa Indonesia)
 */
export function formatFractionForDisplay(fraction: Fraction, lang: 'id' | 'en' = 'id'): string {
  const simplified = simplifyFraction(fraction);

  if (lang === 'id') {
    return `${simplified.numerator}/${simplified.denominator}`;
  }

  // Format bahasa Inggris
  if (simplified.denominator === 1) {
    return simplified.numerator.toString();
  }

  return `${simplified.numerator}/${simplified.denominator}`;
}