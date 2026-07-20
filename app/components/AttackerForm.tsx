"use client";

import { MOVE_LIST } from "@/lib/move-data";
import { formatPatternLabel, isMaxPattern } from "@/lib/pattern-label";
import { POKEMON_LIST } from "@/lib/pokemon-data";
import { EV_NATURE_PATTERNS } from "@/lib/types";
import type { EVNaturePattern, Move, PokemonBase } from "@/lib/types";

interface AttackerFormProps {
  pokemon: PokemonBase;
  move: Move;
  pattern: EVNaturePattern;
  onPokemonChange: (pokemon: PokemonBase) => void;
  onMoveChange: (move: Move) => void;
  onPatternChange: (pattern: EVNaturePattern) => void;
}

export function AttackerForm({
  pokemon,
  move,
  pattern,
  onPokemonChange,
  onMoveChange,
  onPatternChange,
}: AttackerFormProps) {
  return (
    <section className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
      <h2 className="mb-3 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
        攻撃側（固定1体）
      </h2>

      {/* ポケモン・技を横並び */}
      <div className="flex flex-wrap gap-3">
        <label className="flex min-w-40 flex-1 flex-col gap-1 text-sm">
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

        <label className="flex min-w-48 flex-1 flex-col gap-1 text-sm">
          技（1つのみ）
          <select
            className="rounded border border-zinc-300 bg-white px-2 py-1.5 dark:border-zinc-700 dark:bg-zinc-900"
            value={move.name}
            onChange={(e) => {
              const next = MOVE_LIST.find((m) => m.name === e.target.value);
              if (next) onMoveChange(next);
            }}
          >
            {MOVE_LIST.map((m) => (
              <option key={m.name} value={m.name}>
                {m.name}（{m.category === "physical" ? "物理" : "特殊"} / {m.type} / 威力{m.power}）
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* 努力値×性格補正の4択 */}
      <div className="mt-3 flex flex-wrap gap-4">
        {EV_NATURE_PATTERNS.map((p) => {
          const letter = move.category === "physical" ? "A" : "C";
          const label = formatPatternLabel(letter, p);
          const isMax = isMaxPattern(p);
          return (
            <label key={p.key} className="flex items-center gap-1.5 text-sm">
              <input
                type="radio"
                name="attacker-pattern"
                checked={pattern === p.key}
                onChange={() => onPatternChange(p.key)}
              />
              <span className={isMax ? "font-semibold text-red-600 dark:text-red-400" : undefined}>
                {label}
              </span>
            </label>
          );
        })}
      </div>

      {/* 将来: 持ち物・特性の行を追加予定 */}
    </section>
  );
}
