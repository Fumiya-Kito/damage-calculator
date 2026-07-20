import type { PokemonBase } from "./types";

// MVP用の最小限のポケモンデータ（種族値・タイプ）
export const POKEMON_LIST: PokemonBase[] = [
  {
    name: "ガブリアス",
    baseStats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102 },
    types: ["ドラゴン", "じめん"],
  },
  {
    name: "カイリュー",
    baseStats: { hp: 91, attack: 134, defense: 95, specialAttack: 100, specialDefense: 100, speed: 80 },
    types: ["ドラゴン", "ひこう"],
  },
  {
    name: "ボーマンダ",
    baseStats: { hp: 95, attack: 135, defense: 80, specialAttack: 110, specialDefense: 80, speed: 100 },
    types: ["ドラゴン", "ひこう"],
  },
  {
    name: "バンギラス",
    baseStats: { hp: 100, attack: 134, defense: 110, specialAttack: 95, specialDefense: 100, speed: 61 },
    types: ["いわ", "あく"],
  },
  {
    name: "メタグロス",
    baseStats: { hp: 80, attack: 135, defense: 130, specialAttack: 95, specialDefense: 90, speed: 70 },
    types: ["はがね", "エスパー"],
  },
  {
    name: "ハッサム",
    baseStats: { hp: 70, attack: 130, defense: 100, specialAttack: 55, specialDefense: 80, speed: 65 },
    types: ["むし", "はがね"],
  },
  {
    name: "ナットレイ",
    baseStats: { hp: 74, attack: 94, defense: 131, specialAttack: 54, specialDefense: 116, speed: 20 },
    types: ["くさ", "はがね"],
  },
  {
    name: "ウォッシュロトム",
    baseStats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    types: ["でんき", "みず"],
  },
  {
    name: "ランドロス(霊獣)",
    baseStats: { hp: 89, attack: 145, defense: 90, specialAttack: 105, specialDefense: 80, speed: 91 },
    types: ["じめん", "ひこう"],
  },
  {
    name: "ヒードラン",
    baseStats: { hp: 91, attack: 90, defense: 106, specialAttack: 130, specialDefense: 106, speed: 77 },
    types: ["ほのお", "はがね"],
  },
  {
    name: "クレファブル",
    baseStats: { hp: 95, attack: 70, defense: 73, specialAttack: 95, specialDefense: 90, speed: 60 },
    types: ["フェアリー"],
  },
  {
    name: "ドヒドイデ",
    baseStats: { hp: 50, attack: 63, defense: 152, specialAttack: 53, specialDefense: 142, speed: 35 },
    types: ["どく", "みず"],
  },
  {
    name: "コーロトック",
    baseStats: { hp: 98, attack: 87, defense: 105, specialAttack: 53, specialDefense: 85, speed: 67 },
    types: ["ひこう", "はがね"],
  },
  {
    name: "ギャラドス",
    baseStats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 },
    types: ["みず", "ひこう"],
  },
  {
    name: "ドリュウズ",
    baseStats: { hp: 110, attack: 135, defense: 60, specialAttack: 50, specialDefense: 65, speed: 88 },
    types: ["じめん", "はがね"],
  },
  {
    name: "サザンドラ",
    baseStats: { hp: 92, attack: 105, defense: 90, specialAttack: 125, specialDefense: 90, speed: 98 },
    types: ["あく", "ドラゴン"],
  },
  {
    name: "ウルガモス",
    baseStats: { hp: 85, attack: 60, defense: 65, specialAttack: 135, specialDefense: 105, speed: 100 },
    types: ["むし", "ほのお"],
  },
  {
    name: "モロバレル",
    baseStats: { hp: 114, attack: 85, defense: 70, specialAttack: 85, specialDefense: 80, speed: 30 },
    types: ["くさ", "どく"],
  },
  {
    name: "マニューラ",
    baseStats: { hp: 70, attack: 120, defense: 65, specialAttack: 45, specialDefense: 85, speed: 125 },
    types: ["あく", "こおり"],
  },
  {
    name: "ファイヤー(通常)",
    baseStats: { hp: 78, attack: 81, defense: 71, specialAttack: 74, specialDefense: 69, speed: 126 },
    types: ["ほのお", "ひこう"],
  },
  {
    name: "エアームド",
    baseStats: { hp: 65, attack: 80, defense: 140, specialAttack: 40, specialDefense: 70, speed: 70 },
    types: ["はがね", "ひこう"],
  },
  {
    name: "ゲンガー",
    baseStats: { hp: 60, attack: 65, defense: 60, specialAttack: 130, specialDefense: 75, speed: 110 },
    types: ["ゴースト", "どく"],
  },
  {
    name: "ドラパルト",
    baseStats: { hp: 88, attack: 120, defense: 75, specialAttack: 100, specialDefense: 75, speed: 142 },
    types: ["ドラゴン", "ゴースト"],
  },
];
