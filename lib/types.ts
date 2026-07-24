// ポケモンのタイプ
export type PokemonType =
  | "ノーマル"
  | "ほのお"
  | "みず"
  | "でんき"
  | "くさ"
  | "こおり"
  | "かくとう"
  | "どく"
  | "じめん"
  | "ひこう"
  | "エスパー"
  | "むし"
  | "いわ"
  | "ゴースト"
  | "ドラゴン"
  | "あく"
  | "はがね"
  | "フェアリー";

export interface BaseStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface PokemonBase {
  name: string;
  baseStats: BaseStats;
  types: PokemonType[]; // 1つまたは2つ
  /** メガ進化の場合、紐づく通常体の name */
  baseName?: string;
  /**
   * 採用技（ダメージ計算対象のみ・使用率順）
   * 出典: https://champs.pokedb.tokyo/ （シーズンM-4 シングル）
   */
  moves?: string[];
}

export type MoveCategory = "physical" | "special";

export interface Move {
  name: string;
  power: number;
  category: MoveCategory;
  type: PokemonType;
}

// 努力値×性格補正の簡易4パターン。
// 性格の種類（ようき/いじっぱり等）は問わず、「対象ステータスを上げる性格か否か」だけを扱う。
export type EVNaturePattern = "max" | "subMax" | "boostOnly" | "zero";

export interface EVNaturePatternConfig {
  key: EVNaturePattern;
  label: string;
  ev: 0 | 32;
  natureBoost: boolean;
}

// 表示順は EV降順→性格補正降順（極振→準振→補正あり無振→無振）
export const EV_NATURE_PATTERNS: EVNaturePatternConfig[] = [
  { key: "max", label: "極振", ev: 32, natureBoost: true },
  { key: "subMax", label: "準振", ev: 32, natureBoost: false },
  { key: "boostOnly", label: "補正あり無振", ev: 0, natureBoost: true },
  { key: "zero", label: "無振", ev: 0, natureBoost: false },
];

export function getPatternConfig(key: EVNaturePattern): EVNaturePatternConfig {
  const found = EV_NATURE_PATTERNS.find((p) => p.key === key);
  if (!found) throw new Error(`unknown pattern: ${key}`);
  return found;
}

// 攻撃側の設定（固定1体・技は1つ・努力値パターンは4択から1つ）
export interface AttackerConfig {
  pokemon: PokemonBase;
  move: Move;
  pattern: EVNaturePattern;
  attackStage: StatStage;
}

// 防御側で自動生成する1行分のパターン
export interface DefenderStatRow {
  hpEV: 0 | 32;
  defPattern: EVNaturePattern; // 技の分類に対応する防御ステータス(B/D)側のパターン
  defEV: 0 | 32;
  natureBoost: boolean;
}

// 1行分のダメージ計算結果
export interface DamageRowResult {
  row: DefenderStatRow;
  hp: number;
  defStat: number;
  minDamage: number;
  maxDamage: number;
  minPercent: number;
  maxPercent: number;
  worstCaseHits: number; // 最も乱数が悪い場合に倒せる発数（確定発数）
  bestCaseHits: number; // 最も乱数が良い場合に倒せる発数
  hitLabel: string; // "確定2発" や "乱数3〜4発" など
}

export interface DamageTableResult {
  attacker: AttackerConfig;
  defenderPokemon: PokemonBase;
  defStatKey: "defense" | "specialDefense";
  defenseStage: StatStage;
  rows: DamageRowResult[];
}


// ランク補正（-6 〜 +6）
export type StatStage = -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const STAT_STAGES: StatStage[] = [
  -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6,
];

export function formatStatStageLabel(stage: StatStage): string {
  if (stage === 0) return "補正なし";
  return stage > 0 ? `+${stage}` : `${stage}`;
}