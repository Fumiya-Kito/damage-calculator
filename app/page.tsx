"use client";

import { useMemo, useState } from "react";
import { AttackerForm } from "./components/AttackerForm";
import { DefenderPokemonForm } from "./components/DefenderPokemonForm";
import { DamageTable } from "./components/DamageTable";
import { calculateDamageTable } from "@/lib/damage-calculator";
import { getMovesForPokemon } from "@/lib/pokemon-data";
import { EV_NATURE_PATTERNS } from "@/lib/types";
import type { EVNaturePattern, Move, PokemonBase, StatStage } from "@/lib/types";

const ALL_HP_EVS: (0 | 32)[] = [0, 32];
const ALL_DEF_PATTERNS: EVNaturePattern[] = EV_NATURE_PATTERNS.map((p) => p.key);

export default function Home() {
  const [attackerPokemon, setAttackerPokemon] = useState<PokemonBase | null>(null);
  const [move, setMove] = useState<Move | null>(null);
  const [attackerPattern, setAttackerPattern] = useState<EVNaturePattern>("max");
  const [attackStage, setAttackStage] = useState<StatStage>(0);

  const [defenderPokemon, setDefenderPokemon] = useState<PokemonBase | null>(null);
  const [selectedHpEVs, setSelectedHpEVs] = useState<(0 | 32)[]>(ALL_HP_EVS);
  const [selectedDefPatterns, setSelectedDefPatterns] =
    useState<EVNaturePattern[]>(ALL_DEF_PATTERNS);
  const [defenseStage, setDefenseStage] = useState<StatStage>(0);

  function handleAttackerPokemonChange(pokemon: PokemonBase | null) {
    setAttackerPokemon(pokemon);
    const moves = pokemon ? getMovesForPokemon(pokemon) : [];
    setMove(moves[0] ?? null);
  }

  function toggleHpEV(ev: 0 | 32) {
    setSelectedHpEVs((prev) =>
      prev.includes(ev) ? prev.filter((v) => v !== ev) : [...prev, ev],
    );
  }

  function toggleDefPattern(pattern: EVNaturePattern) {
    setSelectedDefPatterns((prev) =>
      prev.includes(pattern)
        ? prev.filter((p) => p !== pattern)
        : [...prev, pattern],
    );
  }

  const table = useMemo(() => {
    if (!attackerPokemon || !move || !defenderPokemon) return null;
    return calculateDamageTable(
      { pokemon: attackerPokemon, move, pattern: attackerPattern, attackStage },
      defenderPokemon,
      selectedHpEVs,
      selectedDefPatterns,
      defenseStage,
    );
  }, [
    attackerPokemon,
    move,
    attackerPattern,
    attackStage,
    defenderPokemon,
    selectedHpEVs,
    selectedDefPatterns,
    defenseStage,
  ]);

  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-10 sm:px-8">
        <header>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            ポケモンダメージ計算機（チャンピオンズ）
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            レベル50・個体値6V固定。性格は「補正の有無」のみを扱い、努力値は0か32のみを想定します。
          </p>
        </header>

        <AttackerForm
          pokemon={attackerPokemon}
          move={move}
          pattern={attackerPattern}
          attackStage={attackStage}
          onPokemonChange={handleAttackerPokemonChange}
          onMoveChange={setMove}
          onPatternChange={setAttackerPattern}
          onAttackStageChange={setAttackStage}
        />

        <DefenderPokemonForm
          pokemon={defenderPokemon}
          defLetter={move?.category === "physical" ? "B" : "D"}
          selectedHpEVs={selectedHpEVs}
          selectedDefPatterns={selectedDefPatterns}
          defenseStage={defenseStage}
          onPokemonChange={setDefenderPokemon}
          onToggleHpEV={toggleHpEV}
          onToggleDefPattern={toggleDefPattern}
          onDefenseStageChange={setDefenseStage}
        />

        {table ? (
          <DamageTable table={table} />
        ) : (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            攻撃側・防御側のポケモンと技を選択すると結果が表示されます。
          </p>
        )}
      </main>
    </div>
  );
}