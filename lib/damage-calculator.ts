import { applyStatStage, calcHp, calcStat, LEVEL } from "./stat-calculator";
import { getTypeEffectiveness } from "./type-chart";
import { getPatternConfig } from "./types";
import type {
  AttackerConfig,
  DamageRowResult,
  DamageTableResult,
  DefenderStatRow,
  EVNaturePattern,
  PokemonBase,
  StatStage,
} from "./types";

// 防御側の行を、選択された H努力値パターン × 防御ステータスパターンの組み合わせで生成
export function generateDefenderStatRows(
  selectedHpEVs: (0 | 32)[],
  selectedDefPatterns: EVNaturePattern[],
): DefenderStatRow[] {
  const rows: DefenderStatRow[] = [];
  for (const hpEV of selectedHpEVs) {
    for (const patternKey of selectedDefPatterns) {
      const pattern = getPatternConfig(patternKey);
      rows.push({
        hpEV,
        defPattern: patternKey,
        defEV: pattern.ev,
        natureBoost: pattern.natureBoost,
      });
    }
  }
  return rows;
}

// 乱数16段階（85%〜100%）のダメージ実数値を昇順で返す
function calculateDamageRolls(
  power: number,
  attackStat: number,
  defenseStat: number,
  stab: number,
  typeEffectiveness: number,
): number[] {
  if (typeEffectiveness === 0) return new Array(16).fill(0);

  const baseDamage =
    Math.floor(
      Math.floor(((2 * LEVEL) / 5 + 2) * power * attackStat / defenseStat) / 50,
    ) + 2;

  const rolls: number[] = [];
  for (let percent = 85; percent <= 100; percent++) {
    let dmg = Math.floor((baseDamage * percent) / 100);
    dmg = Math.floor(dmg * stab);
    dmg = Math.floor(dmg * typeEffectiveness);
    rolls.push(Math.max(1, dmg));
  }
  return rolls;
}

export function calculateDamageTable(
  attacker: AttackerConfig,
  defenderPokemon: PokemonBase,
  selectedHpEVs: (0 | 32)[],
  selectedDefPatterns: EVNaturePattern[],
  defenseStage: StatStage = 0,
): DamageTableResult {
  const { pokemon, move } = attacker;
  const attackerPattern = getPatternConfig(attacker.pattern);

  const offensiveStatKey =
    move.category === "physical" ? "attack" : "specialAttack";
  const defStatKey = move.category === "physical" ? "defense" : "specialDefense";

  const rawAttackStat = calcStat(
    pokemon.baseStats[offensiveStatKey],
    attackerPattern.ev,
    attackerPattern.natureBoost ? 1.1 : 1.0,
  );
  const attackStat = applyStatStage(rawAttackStat, attacker.attackStage);

  const stab = pokemon.types.includes(move.type) ? 1.5 : 1;
  const typeEffectiveness = getTypeEffectiveness(move.type, defenderPokemon.types);

  const rows = generateDefenderStatRows(selectedHpEVs, selectedDefPatterns).map(
    (row): DamageRowResult => {
      const hp = calcHp(defenderPokemon.baseStats.hp, row.hpEV);
      const defenseBase =
        defStatKey === "defense"
          ? defenderPokemon.baseStats.defense
          : defenderPokemon.baseStats.specialDefense;
      const rawDefStat = calcStat(defenseBase, row.defEV, row.natureBoost ? 1.1 : 1.0);
      const defStat = applyStatStage(rawDefStat, defenseStage);

      const rolls = calculateDamageRolls(
        move.power,
        attackStat,
        defStat,
        stab,
        typeEffectiveness,
      );
      const minDamage = rolls[0];
      const maxDamage = rolls[rolls.length - 1];

      const isImmune = typeEffectiveness === 0;
      const worstCaseHits = isImmune ? Infinity : Math.ceil(hp / minDamage);
      const bestCaseHits = isImmune ? Infinity : Math.ceil(hp / maxDamage);

      const hitLabel = isImmune
        ? "無効"
        : worstCaseHits === bestCaseHits
          ? `確定${worstCaseHits}発`
          : `乱数${bestCaseHits}〜${worstCaseHits}発`;

      return {
        row,
        hp,
        defStat,
        minDamage,
        maxDamage,
        minPercent: (minDamage / hp) * 100,
        maxPercent: (maxDamage / hp) * 100,
        worstCaseHits,
        bestCaseHits,
        hitLabel,
      };
    },
  );

  return {
    attacker,
    defenderPokemon,
    defStatKey,
    defenseStage,
    rows,
  };
}