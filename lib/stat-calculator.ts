// ポケモンチャンピオンズ想定: レベル50固定・個体値6V(31)固定
export const LEVEL = 50;
export const IV = 31;

// HP以外の能力値
export function calcStat(base: number, ev: number, natureMultiplier: number): number {
  const evFloor = Math.floor(ev / 4);
  const raw = Math.floor(((2 * base + IV + evFloor) * LEVEL) / 100) + 5;
  return Math.floor(raw * natureMultiplier);
}

// HP（性格補正の対象外）
export function calcHp(base: number, ev: number): number {
  const evFloor = Math.floor(ev / 4);
  return Math.floor(((2 * base + IV + evFloor) * LEVEL) / 100) + LEVEL + 10;
}
