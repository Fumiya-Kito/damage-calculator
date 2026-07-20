"use client";

import { formatPatternLabel, isMaxPattern } from "@/lib/pattern-label";
import { POKEMON_LIST } from "@/lib/pokemon-data";
import { EV_NATURE_PATTERNS } from "@/lib/types";
import type { EVNaturePattern, PokemonBase } from "@/lib/types";

interface DefenderPokemonFormProps {
  pokemon: PokemonBase;
  defLetter: string; // 技の分類に対応する防御ステータスの文字（B または D）
  selectedHpEVs: (0 | 32)[];
  selectedDefPatterns: EVNaturePattern[];
  onPokemonChange: (pokemon: PokemonBase) => void;
  onToggleHpEV: (ev: 0 | 32) => void;
  onToggleDefPattern: (pattern: EVNaturePattern) => void;
}

const HP_EV_OPTIONS: (0 | 32)[] = [32, 0];

export function DefenderPokemonForm({
  pokemon,
  defLetter,
  selectedHpEVs,
  selectedDefPatterns,
  onPokemonChange,
  onToggleHpEV,
  onToggleDefPattern,
}: DefenderPokemonFormProps) {
  return (
    <section className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
      <h2 className="mb-3 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
        防御側（ステータス入力は不要・パターンで絞り込み）
      </h2>

      <label className="flex max-w-xs flex-col gap-1 text-sm">
        ポケモン
        <select
          className="rounded border border-zinc-300 bg-white px-2 py-1.5 dark:border-zinc-700 dark:bg-zinc-900"
          value={pokemon.name}
          onChange={(e) => {
            const next = POKEMON_LIST.find((p) => p.name === e.target.value);
            if (next) onPokemonChange(next);
          }}
        >
          {POKEMON_LIST.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </label>

      <div className="mt-3">
        <p className="mb-1 text-xs text-zinc-500 dark:text-zinc-400">
          H努力値で絞り込み
        </p>
        <div className="flex flex-wrap gap-4">
          {HP_EV_OPTIONS.map((ev) => (
            <label key={ev} className="flex items-center gap-1.5 text-sm">
              <input
                type="checkbox"
                checked={selectedHpEVs.includes(ev)}
                onChange={() => onToggleHpEV(ev)}
              />
              H{ev}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <p className="mb-1 text-xs text-zinc-500 dark:text-zinc-400">
          {defLetter}のパターンで絞り込み
        </p>
        <div className="flex flex-wrap gap-4">
          {EV_NATURE_PATTERNS.map((p) => {
            const label = formatPatternLabel(defLetter, p);
            const isMax = isMaxPattern(p);
            return (
              <label key={p.key} className="flex items-center gap-1.5 text-sm">
                <input
                  type="checkbox"
                  checked={selectedDefPatterns.includes(p.key)}
                  onChange={() => onToggleDefPattern(p.key)}
                />
                <span className={isMax ? "font-semibold text-red-600 dark:text-red-400" : undefined}>
                  {label}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </section>
  );
}
