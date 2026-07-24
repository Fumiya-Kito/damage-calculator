import type { StatStage } from "./types";


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



// ランク補正の倍率をステータス実数値に適用（切り捨て）
export function applyStatStage(stat: number, stage: StatStage): number {
  if (stage === 0) return stat;
  const numerator = stage > 0 ? 2 + stage : 2;
  const denominator = stage > 0 ? 2 : 2 - stage;
  return Math.floor((stat * numerator) / denominator);
}