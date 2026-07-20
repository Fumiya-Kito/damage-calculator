import type { EVNaturePatternConfig } from "./types";

// 例: A32↑ / A32 / A0↑ / A0 のような表記を生成する
export function formatPatternLabel(
  letter: string,
  pattern: EVNaturePatternConfig,
): string {
  return `${letter}${pattern.ev}${pattern.natureBoost ? "↑" : ""}`;
}

// 性格補正あり・努力値32（最も強い投資）かどうか
export function isMaxPattern(pattern: EVNaturePatternConfig): boolean {
  return pattern.ev === 32 && pattern.natureBoost;
}
