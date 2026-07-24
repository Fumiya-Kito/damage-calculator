"use client";

import { formatPatternLabel, isMaxPattern } from "@/lib/pattern-label";
import {
  getBasePokemonName,
  getMegaForms,
  getMovesForPokemon,
  POKEMON_LIST,
  resolvePokemonWithDefaultMega,
} from "@/lib/pokemon-data";
import { EV_NATURE_PATTERNS, formatStatStageLabel, STAT_STAGES } from "@/lib/types";
import type { EVNaturePattern, Move, PokemonBase, StatStage } from "@/lib/types";

interface AttackerFormProps {
  pokemon: PokemonBase | null;
  move: Move | null;
  pattern: EVNaturePattern;
  attackStage: StatStage;
  onPokemonChange: (pokemon: PokemonBase | null) => void;
  onMoveChange: (move: Move | null) => void;
  onPatternChange: (pattern: EVNaturePattern) => void;
  onAttackStageChange: (stage: StatStage) => void;
}

export function AttackerForm({
  pokemon,
  move,
  pattern,
  attackStage,
  onPokemonChange,
  onMoveChange,
  onPatternChange,
  onAttackStageChange,
}: AttackerFormProps) {
  const baseName = pokemon ? getBasePokemonName(pokemon.name) : null;
  const megaForms = baseName ? getMegaForms(baseName) : [];
  const basePokemon = baseName
    ? POKEMON_LIST.find((p) => p.name === baseName)
    : undefined;
  const availableMoves = pokemon ? getMovesForPokemon(pokemon) : [];
  const statLetter = move?.category === "physical" ? "A" : "C";

  function selectPokemon(next: PokemonBase, options?: { keepMove?: boolean }) {
    onPokemonChange(next);
    const nextMoves = getMovesForPokemon(next);
    if (!nextMoves.length) {
      onMoveChange(null);
      return;
    }
    if (options?.keepMove && move && nextMoves.some((m) => m.name === move.name)) return;
    onMoveChange(nextMoves[0]);
  }

  return (
    <section className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
      <h2 className="mb-3 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
        攻撃側（固定1体）
      </h2>
      <p className="mb-2 text-xs text-zinc-400 dark:text-zinc-500">
        ポケモン・技は使用率順（チャンピオンズ シーズンM-4 シングルバトル）
      </p>

      {/* ポケモン・技を横並び */}
      <div className="flex flex-wrap gap-3">
        <label className="flex min-w-40 flex-1 flex-col gap-1 text-sm">
          ポケモン
          <select
            className="rounded border border-zinc-300 bg-white px-2 py-1.5 dark:border-zinc-700 dark:bg-zinc-900"
            value={baseName ?? ""}
            onChange={(e) => {
              if (e.target.value === "") {
                onPokemonChange(null);
                onMoveChange(null);
                return;
              }
              const next = POKEMON_LIST.find((p) => p.name === e.target.value);
              if (next) selectPokemon(resolvePokemonWithDefaultMega(next));
            }}
          >
            <option value="">選択してください</option>
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
            className="rounded border border-zinc-300 bg-white px-2 py-1.5 dark:border-zinc-700 dark:bg-zinc-900 disabled:opacity-50"
            value={move?.name ?? ""}
            disabled={!pokemon}
            onChange={(e) => {
              if (e.target.value === "") {
                onMoveChange(null);
                return;
              }
              const next = availableMoves.find((m) => m.name === e.target.value);
              if (next) onMoveChange(next);
            }}
          >
            <option value="">選択してください</option>
            {availableMoves.map((m) => (
              <option key={m.name} value={m.name}>
                {m.name}（{m.category === "physical" ? "物理" : "特殊"} / {m.type} / 威力{m.power}）
              </option>
            ))}
          </select>
        </label>

        <label className="flex min-w-32 flex-col gap-1 text-sm">
          {statLetter}ランク補正
          <select
            className="rounded border border-zinc-300 bg-white px-2 py-1.5 dark:border-zinc-700 dark:bg-zinc-900"
            value={attackStage}
            onChange={(e) => onAttackStageChange(Number(e.target.value) as StatStage)}
          >
            {STAT_STAGES.map((stage) => (
              <option key={stage} value={stage}>
                {formatStatStageLabel(stage)}
              </option>
            ))}
          </select>
        </label>
      </div>

      {pokemon && megaForms.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-4">
          {megaForms.map((mega) => (
            <label key={mega.name} className="flex items-center gap-1.5 text-sm">
              <input
                type="checkbox"
                checked={pokemon.name === mega.name}
                onChange={(e) => {
                  if (e.target.checked) {
                    selectPokemon(mega, { keepMove: true });
                  } else if (basePokemon) {
                    selectPokemon(basePokemon, { keepMove: true });
                  }
                }}
              />
              {mega.name}
            </label>
          ))}
        </div>
      )}

      {/* 努力値×性格補正の4択 */}
      <div className="mt-3 flex flex-wrap gap-4">
        {EV_NATURE_PATTERNS.map((p) => {
          const label = formatPatternLabel(statLetter, p);
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