"use client";

import { useMemo, useState } from "react";
import { AttackerForm } from "./components/AttackerForm";
import { DefenderPokemonForm } from "./components/DefenderPokemonForm";
import { DamageTable } from "./components/DamageTable";
import { calculateDamageTable } from "@/lib/damage-calculator";
import { MOVE_LIST } from "@/lib/move-data";
import { POKEMON_LIST } from "@/lib/pokemon-data";
import { EV_NATURE_PATTERNS } from "@/lib/types";
import type { EVNaturePattern, Move, PokemonBase } from "@/lib/types";

const ALL_HP_EVS: (0 | 32)[] = [0, 32];
const ALL_DEF_PATTERNS: EVNaturePattern[] = EV_NATURE_PATTERNS.map((p) => p.key);

export default function Home() {
  const [attackerPokemon, setAttackerPokemon] = useState<PokemonBase>(
    POKEMON_LIST[0],
  );
  const [move, setMove] = useState<Move>(MOVE_LIST[0]);
  const [attackerPattern, setAttackerPattern] = useState<EVNaturePattern>("max");

  const [defenderPokemon, setDefenderPokemon] = useState<PokemonBase>(
    POKEMON_LIST[1],
  );
  const [selectedHpEVs, setSelectedHpEVs] = useState<(0 | 32)[]>(ALL_HP_EVS);
  const [selectedDefPatterns, setSelectedDefPatterns] =
    useState<EVNaturePattern[]>(ALL_DEF_PATTERNS);

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

  const table = useMemo(
    () =>
      calculateDamageTable(
        { pokemon: attackerPokemon, move, pattern: attackerPattern },
        defenderPokemon,
        selectedHpEVs,
        selectedDefPatterns,
      ),
    [
      attackerPokemon,
      move,
      attackerPattern,
      defenderPokemon,
      selectedHpEVs,
      selectedDefPatterns,
    ],
  );

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
          onPokemonChange={setAttackerPokemon}
          onMoveChange={setMove}
          onPatternChange={setAttackerPattern}
        />

        <DefenderPokemonForm
          pokemon={defenderPokemon}
          defLetter={move.category === "physical" ? "B" : "D"}
          selectedHpEVs={selectedHpEVs}
          selectedDefPatterns={selectedDefPatterns}
          onPokemonChange={setDefenderPokemon}
          onToggleHpEV={toggleHpEV}
          onToggleDefPattern={toggleDefPattern}
        />

        <DamageTable table={table} />
      </main>
    </div>
  );
}
