import type { Move, PokemonBase } from "./types";
import { MOVE_BY_NAME, MOVE_LIST } from "./move-data";

// ポケモンチャンピオンズ シーズンM-4 シングルバトル使用率ランキング(上位50位)の順に並べたポケモンデータ
// 出典: https://champs.pokedb.tokyo/pokemon/list （2026/7/20時点）
export const POKEMON_LIST_1_50: PokemonBase[] = [
  {
    name: "ガブリアス",
    baseStats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102 },
    types: ["ドラゴン", "じめん"],
    // https://champs.pokedb.tokyo/pokemon/show/0445-00?rule=0
    moves: [
      "じしん",
      "スケイルショット(未対応)",
      "げきりん",
      "がんせきふうじ",
      "ドラゴンテール",
      "いわなだれ",
      "どくづき",
    ],
  },
  {
    name: "ミミッキュ",
    baseStats: { hp: 55, attack: 90, defense: 80, specialAttack: 50, specialDefense: 105, speed: 96 },
    types: ["ゴースト", "フェアリー"],
    // https://champs.pokedb.tokyo/pokemon/show/0778-00?rule=0
    moves: [
      "じゃれつく",
      "かげうち",
      "シャドークロー",
      "ウッドハンマー",
      "ドレインパンチ",
    ],
  },
  {
    name: "カバルドン",
    baseStats: { hp: 108, attack: 112, defense: 118, specialAttack: 68, specialDefense: 72, speed: 47 },
    types: ["じめん"],
    // https://champs.pokedb.tokyo/pokemon/show/0450-00?rule=0
    moves: ["じしん", "こおりのキバ", "がんせきふうじ"],
  },
  {
    name: "マスカーニャ",
    baseStats: { hp: 76, attack: 110, defense: 70, specialAttack: 81, specialDefense: 70, speed: 123 },
    types: ["くさ", "あく"],
    // https://champs.pokedb.tokyo/pokemon/show/0908-00?rule=0
    moves: [
      "トリックフラワー",
      "トリプルアクセル(未対応)",
      "とんぼがえり",
      "はたきおとす",
      "ふいうち",
      "かみなりパンチ",
      "じゃれつく",
      "イカサマ",
    ],
  },
  {
    name: "メタグロス",
    baseStats: { hp: 80, attack: 135, defense: 130, specialAttack: 95, specialDefense: 90, speed: 70 },
    types: ["はがね", "エスパー"],
    // https://champs.pokedb.tokyo/pokemon/show/0376-00?rule=0
    moves: [
      "サイコファング",
      "バレットパンチ",
      "じしん",
      "れいとうパンチ",
      "ボディプレス",
      "かみなりパンチ",
      "アームハンマー",
      "くさむすび(未対応)",
      "アイアンヘッド",
    ],
  },
  {
    name: "ブリジュラス",
    baseStats: { hp: 90, attack: 105, defense: 130, specialAttack: 125, specialDefense: 65, speed: 85 },
    types: ["はがね", "ドラゴン"],
    // https://champs.pokedb.tokyo/pokemon/show/1018-00?rule=0
    moves: [
      "ラスターカノン",
      "りゅうせいぐん",
      "10まんボルト",
      "あくのはどう",
      "はどうだん",
      "エレクトロビーム",
      "ドラゴンテール",
    ],
  },
  {
    name: "アシレーヌ",
    baseStats: { hp: 80, attack: 74, defense: 74, specialAttack: 126, specialDefense: 116, speed: 60 },
    types: ["みず", "フェアリー"],
    // https://champs.pokedb.tokyo/pokemon/show/0730-00?rule=0
    moves: [
      "ムーンフォース",
      "うたかたのアリア",
      "アクアジェット",
      "クイックターン",
      "なみのり",
      "れいとうビーム",
      "エナジーボール",
    ],
  },
  {
    name: "ギャラドス",
    baseStats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 },
    types: ["みず", "ひこう"],
    // https://champs.pokedb.tokyo/pokemon/show/0130-00?rule=0
    moves: [
      "じしん",
      "たきのぼり",
      "パワーウィップ",
      "こおりのキバ",
      "かみくだく",
      "ゆきなだれ",
      "やけっぱち",
      "アクアテール",
    ],
  },
  {
    name: "マフォクシー",
    baseStats: { hp: 75, attack: 69, defense: 72, specialAttack: 114, specialDefense: 100, speed: 104 },
    types: ["ほのお", "エスパー"],
    // https://champs.pokedb.tokyo/pokemon/show/0655-00?rule=0
    moves: [
      "かえんほうしゃ",
      "マジカルシャイン",
      "サイコキネシス",
      "サイコショック",
      "マジカルフレイム",
      "くさむすび(未対応)",
    ],
  },
  {
    name: "カイリュー",
    baseStats: { hp: 91, attack: 134, defense: 95, specialAttack: 100, specialDefense: 100, speed: 80 },
    types: ["ドラゴン", "ひこう"],
    // https://champs.pokedb.tokyo/pokemon/show/0149-00?rule=0
    moves: [
      "りゅうせいぐん",
      "エアスラッシュ",
      "かえんほうしゃ",
      "しんそく",
      "10まんボルト",
      "じしん",
      "げきりん",
      "れいとうビーム",
    ],
  },
  {
    name: "リザードン",
    baseStats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    types: ["ほのお", "ひこう"],
    // https://champs.pokedb.tokyo/pokemon/show/0006-00?rule=0
    moves: [
      "ソーラービーム",
      "かえんほうしゃ",
      "エアスラッシュ",
      "フレアドライブ",
      "ニトロチャージ",
      "オーバーヒート",
      "ウェザーボール",
      "ドラゴンクロー",
    ],
  },
  {
    name: "バシャーモ",
    baseStats: { hp: 80, attack: 120, defense: 70, specialAttack: 110, specialDefense: 70, speed: 80 },
    types: ["ほのお", "かくとう"],
    // https://champs.pokedb.tokyo/pokemon/show/0257-00?rule=0
    moves: [
      "フレアドライブ",
      "インファイト",
      "かみなりパンチ",
      "とびひざげり",
      "じしん",
      "ブレイズキック",
    ],
  },
  {
    name: "サザンドラ",
    baseStats: { hp: 92, attack: 105, defense: 90, specialAttack: 125, specialDefense: 90, speed: 98 },
    types: ["あく", "ドラゴン"],
    // https://champs.pokedb.tokyo/pokemon/show/0635-00?rule=0
    moves: [
      "あくのはどう",
      "りゅうせいぐん",
      "とんぼがえり",
      "かえんほうしゃ",
      "だいもんじ",
      "ラスターカノン",
      "だいちのちから",
      "きあいだま",
    ],
  },
  {
    name: "ゲッコウガ",
    baseStats: { hp: 72, attack: 95, defense: 67, specialAttack: 103, specialDefense: 71, speed: 122 },
    types: ["みず", "あく"],
    // https://champs.pokedb.tokyo/pokemon/show/0658-00?rule=0
    moves: [
      "れいとうビーム",
      "あくのはどう",
      "ヘドロウェーブ",
      "みずしゅりけん",
      "なみのり",
      "くさむすび(未対応)",
      "ハイドロポンプ",
      "マッドショット",
      "とんぼがえり",
    ],
  },
  {
    name: "アーマーガア",
    baseStats: { hp: 98, attack: 87, defense: 105, specialAttack: 53, specialDefense: 85, speed: 67 },
    types: ["ひこう", "はがね"],
    // https://champs.pokedb.tokyo/pokemon/show/0823-00?rule=0
    moves: [
      "ボディプレス",
      "とんぼがえり",
      "アイアンヘッド",
      "ブレイブバード",
      "つけあがる",
    ],
  },
  {
    name: "ウォッシュロトム",
    baseStats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    types: ["でんき", "みず"],
    // https://champs.pokedb.tokyo/pokemon/show/0479-02?rule=0
    moves: [
      "ハイドロポンプ",
      "ボルトチェンジ",
      "10まんボルト",
      "ほうでん",
    ],
  },
  {
    name: "キラフロル",
    baseStats: { hp: 83, attack: 55, defense: 90, specialAttack: 130, specialDefense: 81, speed: 86 },
    types: ["いわ", "どく"],
    // https://champs.pokedb.tokyo/pokemon/show/0970-00?rule=0
    moves: [
      "パワージェム",
      "だいちのちから",
      "ヘドロウェーブ",
      "エナジーボール",
      "マッドショット",
      "キラースピン",
      "マジカルシャイン",
      "ヘドロばくだん",
    ],
  },
  {
    name: "キュウコン (アローラ)",
    baseStats: { hp: 73, attack: 67, defense: 75, specialAttack: 81, specialDefense: 100, speed: 109 },
    types: ["こおり", "フェアリー"],
    // https://champs.pokedb.tokyo/pokemon/show/0038-01?rule=0
    moves: [
      "フリーズドライ",
      "ふぶき",
      "ムーンフォース",
      "こおりのつぶて",
      "イカサマ",
    ],
  },
  {
    name: "ゲンガー",
    baseStats: { hp: 60, attack: 65, defense: 60, specialAttack: 130, specialDefense: 75, speed: 110 },
    types: ["ゴースト", "どく"],
    // https://champs.pokedb.tokyo/pokemon/show/0094-00?rule=0
    moves: [
      "シャドーボール",
      "ヘドロウェーブ",
      "こごえるかぜ",
      "きあいだま",
      "たたりめ",
      "ヘドロばくだん",
    ],
  },
  {
    name: "イダイトウ (オス)",
    baseStats: { hp: 120, attack: 112, defense: 65, specialAttack: 80, specialDefense: 75, speed: 78 },
    types: ["みず", "ゴースト"],
    // https://champs.pokedb.tokyo/pokemon/show/0902-00?rule=0
    moves: [
      "おはかまいり",
      "ウェーブタックル",
      "アクアジェット",
      "クイックターン",
      "サイコファング",
      "こおりのキバ",
      "もろはのずつき",
      "アクアブレイク",
    ],
  },
  {
    name: "ハッサム",
    baseStats: { hp: 70, attack: 130, defense: 100, specialAttack: 55, specialDefense: 80, speed: 65 },
    types: ["むし", "はがね"],
    // https://champs.pokedb.tokyo/pokemon/show/0212-00?rule=0
    moves: [
      "バレットパンチ",
      "とんぼがえり",
      "はたきおとす",
      "インファイト",
      "ダブルウイング",
      "むしくい",
      "かわらわり",
    ],
  },
  {
    name: "ライチュウ",
    baseStats: { hp: 60, attack: 90, defense: 55, specialAttack: 90, specialDefense: 80, speed: 110 },
    types: ["でんき"],
    // https://champs.pokedb.tokyo/pokemon/show/0026-00?rule=0
    moves: [
      "でんじほう",
      "きあいだま",
      "くさむすび(未対応)",
      "ボルトチェンジ",
      "ねこだまし",
      "みわくのボイス",
      "くさわけ",
    ],
  },
  {
    name: "スターミー",
    baseStats: { hp: 60, attack: 75, defense: 85, specialAttack: 100, specialDefense: 85, speed: 115 },
    types: ["みず", "エスパー"],
    // https://champs.pokedb.tokyo/pokemon/show/0121-00?rule=0
    moves: [
      "アクアジェット",
      "アクアブレイク",
      "アイススピナー",
      "クイックターン",
      "しねんのずつき",
      "サイコカッター",
      "たきのぼり",
      "こうそくスピン",
    ],
  },
  {
    name: "ギルガルド",
    baseStats: { hp: 60, attack: 50, defense: 140, specialAttack: 50, specialDefense: 140, speed: 60 },
    types: ["はがね", "ゴースト"],
    // https://champs.pokedb.tokyo/pokemon/show/0681-00?rule=0
    moves: [
      "かげうち",
      "ポルターガイスト",
      "せいなるつるぎ",
      "シャドーボール",
      "アイアンヘッド",
      "インファイト",
      "ラスターカノン",
    ],
  },
  {
    name: "ハラバリー",
    baseStats: { hp: 109, attack: 64, defense: 91, specialAttack: 103, specialDefense: 83, speed: 45 },
    types: ["でんき"],
    // https://champs.pokedb.tokyo/pokemon/show/0939-00?rule=0
    moves: [
      "ボルトチェンジ",
      "パラボラチャージ",
      "アシッドボム",
      "ふいうち",
      "10まんボルト",
    ],
  },
  {
    name: "ダイケンキ (ヒスイ)",
    baseStats: { hp: 90, attack: 108, defense: 80, specialAttack: 100, specialDefense: 65, speed: 85 },
    types: ["みず", "あく"],
    // https://champs.pokedb.tokyo/pokemon/show/0503-01?rule=0
    moves: [
      "ひけん・ちえなみ",
      "せいなるつるぎ",
      "ふいうち",
      "シェルブレード",
      "アクアカッター",
      "クイックターン",
      "アクアジェット",
    ],
  },
  {
    name: "ムクホーク",
    baseStats: { hp: 85, attack: 120, defense: 70, specialAttack: 50, specialDefense: 60, speed: 100 },
    types: ["ノーマル", "ひこう"],
    // https://champs.pokedb.tokyo/pokemon/show/0398-00?rule=0
    moves: [
      "インファイト",
      "ブレイブバード",
      "ブレイズキック",
      "とんぼがえり",
      "すてみタックル",
      "ダブルウイング",
    ],
  },
  {
    name: "ラウドボーン",
    baseStats: { hp: 104, attack: 75, defense: 100, specialAttack: 110, specialDefense: 75, speed: 66 },
    types: ["ほのお", "ゴースト"],
    // https://champs.pokedb.tokyo/pokemon/show/0911-00?rule=0
    moves: [
      "フレアソング",
      "シャドーボール",
      "たたりめ",
      "だいちのちから",
      "みわくのボイス",
      "もえつきる",
    ],
  },
  {
    name: "サーフゴー",
    baseStats: { hp: 87, attack: 60, defense: 95, specialAttack: 133, specialDefense: 91, speed: 84 },
    types: ["はがね", "ゴースト"],
    // https://champs.pokedb.tokyo/pokemon/show/1000-00?rule=0
    moves: [
      "シャドーボール",
      "ゴールドラッシュ",
      "10まんボルト",
      "パワージェム",
      "きあいだま",
      "マジカルシャイン",
      "ラスターカノン",
    ],
  },
  {
    name: "ドドゲザン",
    baseStats: { hp: 100, attack: 135, defense: 120, specialAttack: 60, specialDefense: 85, speed: 50 },
    types: ["あく", "はがね"],
    // https://champs.pokedb.tokyo/pokemon/show/0983-00?rule=0
    moves: [
      "ふいうち",
      "ドゲザン",
      "アイアンヘッド",
      "かわらわり",
    ],
  },
  {
    name: "ドラパルト",
    baseStats: { hp: 88, attack: 120, defense: 75, specialAttack: 100, specialDefense: 75, speed: 142 },
    types: ["ドラゴン", "ゴースト"],
    // https://champs.pokedb.tokyo/pokemon/show/0887-00?rule=0
    moves: [
      "シャドーボール",
      "ドラゴンアロー",
      "りゅうせいぐん",
      "とんぼがえり",
      "10まんボルト",
      "ゴーストダイブ",
      "ふいうち",
      "かえんほうしゃ",
    ],
  },
  {
    name: "ルカリオ",
    baseStats: { hp: 70, attack: 110, defense: 70, specialAttack: 115, specialDefense: 70, speed: 90 },
    types: ["かくとう", "はがね"],
    // https://champs.pokedb.tokyo/pokemon/show/0448-00?rule=0
    moves: [
      "インファイト",
      "しんくうは",
      "ラスターカノン",
      "コメットパンチ",
      "しんそく",
      "バレットパンチ",
      "はどうだん",
      "きあいだま",
    ],
  },
  {
    name: "ラグラージ",
    baseStats: { hp: 100, attack: 110, defense: 90, specialAttack: 85, specialDefense: 90, speed: 60 },
    types: ["みず", "じめん"],
    // https://champs.pokedb.tokyo/pokemon/show/0260-00?rule=0
    moves: [
      "じしん",
      "ウェーブタックル",
      "れいとうパンチ",
      "クイックターン",
      "はたきおとす",
      "どくづき",
    ],
  },
  {
    name: "ブラッキー",
    baseStats: { hp: 95, attack: 65, defense: 110, specialAttack: 60, specialDefense: 130, speed: 65 },
    types: ["あく"],
    // https://champs.pokedb.tokyo/pokemon/show/0197-00?rule=0
    moves: ["イカサマ", "バークアウト"],
  },
  {
    name: "オーロンゲ",
    baseStats: { hp: 95, attack: 120, defense: 65, specialAttack: 95, specialDefense: 75, speed: 60 },
    types: ["あく", "フェアリー"],
    // https://champs.pokedb.tokyo/pokemon/show/0861-00?rule=0
    moves: [
      "ソウルクラッシュ",
      "イカサマ",
      "ねこだまし",
      "ふいうち",
      "じゃれつく",
    ],
  },
  {
    name: "メガニウム",
    baseStats: { hp: 80, attack: 82, defense: 100, specialAttack: 83, specialDefense: 100, speed: 80 },
    types: ["くさ"],
    // https://champs.pokedb.tokyo/pokemon/show/0154-00?rule=0
    moves: [
      "ウェザーボール",
      "ソーラービーム",
      "マジカルシャイン",
      "だいちのちから",
      "くさわけ",
      "げんしのちから",
    ],
  },
  {
    name: "ウルガモス",
    baseStats: { hp: 85, attack: 60, defense: 65, specialAttack: 135, specialDefense: 105, speed: 100 },
    types: ["むし", "ほのお"],
    // https://champs.pokedb.tokyo/pokemon/show/0637-00?rule=0
    moves: [
      "ほのおのまい",
      "ギガドレイン",
      "むしのさざめき",
      "マジカルフレイム",
      "サイコキネシス",
      "かえんほうしゃ",
    ],
  },
  {
    name: "クチート",
    baseStats: { hp: 50, attack: 85, defense: 85, specialAttack: 55, specialDefense: 55, speed: 50 },
    types: ["はがね", "フェアリー"],
    // https://champs.pokedb.tokyo/pokemon/show/0303-00?rule=0
    moves: [
      "じゃれつく",
      "ふいうち",
      "かみなりパンチ",
      "アイアンヘッド",
      "はたきおとす",
      "ほのおのキバ",
      "サイコファング",
      "かわらわり",
      "れいとうパンチ",
    ],
  },
  {
    name: "ミミロップ",
    baseStats: { hp: 85, attack: 56, defense: 77, specialAttack: 50, specialDefense: 77, speed: 78 },
    types: ["ノーマル", "じめん"],
    // https://champs.pokedb.tokyo/pokemon/show/0428-00?rule=0
    moves: [
      "ねこだまし",
      "トリプルアクセル(未対応)",
      "インファイト",
      "マッハパンチ",
      "とびひざげり",
      "とんぼがえり",
      "かみなりパンチ",
      "メガトンキック",
      "れいとうパンチ",
    ],
  },
  {
    name: "フシギバナ",
    baseStats: { hp: 80, attack: 82, defense: 83, specialAttack: 100, specialDefense: 100, speed: 80 },
    types: ["くさ", "どく"],
    // https://champs.pokedb.tokyo/pokemon/show/0003-00?rule=0
    moves: [
      "だいちのちから",
      "ギガドレイン",
      "ヘドロばくだん",
      "ヘドロウェーブ",
      "ウェザーボール",
    ],
  },
  {
    name: "ニンフィア",
    baseStats: { hp: 95, attack: 65, defense: 65, specialAttack: 110, specialDefense: 130, speed: 60 },
    types: ["フェアリー"],
    // https://champs.pokedb.tokyo/pokemon/show/0700-00?rule=0
    moves: [
      "ハイパーボイス",
      "でんこうせっか",
      "マジカルフレイム",
      "シャドーボール",
      "はかいこうせん",
    ],
  },
  {
    name: "ドリュウズ",
    baseStats: { hp: 110, attack: 135, defense: 60, specialAttack: 50, specialDefense: 65, speed: 88 },
    types: ["じめん", "はがね"],
    // https://champs.pokedb.tokyo/pokemon/show/0530-00?rule=0
    moves: [
      "じしん",
      "アイアンヘッド",
      "いわなだれ",
      "かわらわり",
      "がんせきふうじ",
      "こうそくスピン",
      "どくづき",
    ],
  },
  {
    name: "ペリッパー",
    baseStats: { hp: 60, attack: 50, defense: 100, specialAttack: 95, specialDefense: 70, speed: 65 },
    types: ["みず", "ひこう"],
    // https://champs.pokedb.tokyo/pokemon/show/0279-00?rule=0
    moves: [
      "ぼうふう",
      "とんぼがえり",
      "れいとうビーム",
      "なみのり",
      "ウェザーボール",
      "ハイドロポンプ",
      "でんこうせっか",
    ],
  },
  {
    name: "ソウブレイズ",
    baseStats: { hp: 75, attack: 125, defense: 80, specialAttack: 60, specialDefense: 100, speed: 85 },
    types: ["ほのお", "ゴースト"],
    // https://champs.pokedb.tokyo/pokemon/show/0937-00?rule=0
    moves: [
      "かげうち",
      "むねんのつるぎ",
      "ポルターガイスト",
      "インファイト",
      "かわらわり",
      "シャドークロー",
    ],
  },
  {
    name: "エルフーン",
    baseStats: { hp: 60, attack: 67, defense: 85, specialAttack: 77, specialDefense: 75, speed: 116 },
    types: ["くさ", "フェアリー"],
    // https://champs.pokedb.tokyo/pokemon/show/0547-00?rule=0
    moves: ["ムーンフォース", "ギガドレイン"],
  },
  {
    name: "バンギラス",
    baseStats: { hp: 100, attack: 134, defense: 110, specialAttack: 95, specialDefense: 100, speed: 61 },
    types: ["いわ", "あく"],
    // https://champs.pokedb.tokyo/pokemon/show/0248-00?rule=0
    moves: [
      "はたきおとす",
      "じしん",
      "ストーンエッジ",
      "がんせきふうじ",
      "れいとうパンチ",
      "いわなだれ",
      "ロックブラスト",
    ],
  },
  {
    name: "ドヒドイデ",
    baseStats: { hp: 50, attack: 63, defense: 152, specialAttack: 53, specialDefense: 142, speed: 35 },
    types: ["どく", "みず"],
    // https://champs.pokedb.tokyo/pokemon/show/0748-00?rule=0
    moves: [
      "まとわりつく",
      "アクアブレイク",
      "しっぺがえし",
      "ひやみず",
    ],
  },
  {
    name: "ピクシー",
    baseStats: { hp: 95, attack: 70, defense: 73, specialAttack: 95, specialDefense: 90, speed: 60 },
    types: ["フェアリー"],
    // https://champs.pokedb.tokyo/pokemon/show/0036-00?rule=0
    moves: [
      "ムーンフォース",
      "アシストパワー",
      "かえんほうしゃ",
      "マジカルフレイム",
      "チャージビーム",
    ],
  },
  {
    name: "カメックス",
    baseStats: { hp: 79, attack: 83, defense: 100, specialAttack: 85, specialDefense: 105, speed: 78 },
    types: ["みず"],
    // https://champs.pokedb.tokyo/pokemon/show/0009-00?rule=0
    moves: [
      "はどうだん",
      "あくのはどう",
      "みずのはどう",
      "れいとうビーム",
      "アクアジェット",
      "りゅうのはどう",
      "なみのり",
      "しおふき",
    ],
  },
  {
    name: "フラエッテ:永遠",
    baseStats: { hp: 74, attack: 65, defense: 67, specialAttack: 125, specialDefense: 128, speed: 92 },
    types: ["フェアリー"],
    // https://champs.pokedb.tokyo/pokemon/show/0670-05?rule=0
    moves: [
      "ムーンフォース",
      "ドレインキッス",
      "はめつのひかり",
      "サイコキネシス",
      "ギガドレイン",
    ],
  },
];




export const POKEMON_LIST_51_100: PokemonBase[] = [
  {
    name: "クエスパトラ",
    baseStats: { hp: 95, attack: 60, defense: 60, specialAttack: 101, specialDefense: 60, speed: 105 },
    types: ["エスパー"],
    // https://champs.pokedb.tokyo/pokemon/show/0956-00?rule=0
    moves: [
      "ルミナコリジョン",
      "マジカルシャイン",
      "シャドーボール",
      "アシストパワー",
      "エナジーボール",
    ],
  },
  {
    name: "スコヴィラン",
    baseStats: { hp: 65, attack: 108, defense: 65, specialAttack: 108, specialDefense: 65, speed: 75 },
    types: ["くさ", "ほのお"],
    // https://champs.pokedb.tokyo/pokemon/show/0952-00?rule=0
    moves: [
      "ギガドレイン",
      "かえんほうしゃ",
      "リーフストーム",
      "しっとのほのお",
      "フレアドライブ",
      "オーバーヒート",
      "ほのおのうず",
    ],
  },
  {
    name: "オオニューラ",
    baseStats: { hp: 80, attack: 130, defense: 60, specialAttack: 40, specialDefense: 80, speed: 120 },
    types: ["かくとう", "どく"],
    // https://champs.pokedb.tokyo/pokemon/show/0903-00?rule=0
    moves: [
      "インファイト",
      "フェイタルクロー",
      "ねこだまし",
      "じごくづき",
      "とんぼがえり",
      "アクロバット",
      "シャドークロー",
      "いわなだれ",
    ],
  },
  {
    name: "ドラミドロ",
    baseStats: { hp: 65, attack: 75, defense: 90, specialAttack: 97, specialDefense: 123, speed: 44 },
    types: ["どく", "ドラゴン"],
    // https://champs.pokedb.tokyo/pokemon/show/0691-00?rule=0
    moves: [
      "クイックターン",
      "りゅうせいぐん",
      "ヘドロウェーブ",
      "10まんボルト",
      "ヘドロばくだん",
      "ねっとう",
      "シャドーボール",
    ],
  },
  {
    name: "バイバニラ",
    baseStats: { hp: 71, attack: 95, defense: 85, specialAttack: 110, specialDefense: 95, speed: 79 },
    types: ["こおり"],
    // https://champs.pokedb.tokyo/pokemon/show/0584-00?rule=0
    moves: [
      "フリーズドライ",
      "ふぶき",
      "こおりのつぶて",
      "こおりのいぶき",
      "ラスターカノン",
      "だいばくはつ",
    ],
  },
  {
    name: "カビゴン",
    baseStats: { hp: 160, attack: 110, defense: 65, specialAttack: 65, specialDefense: 110, speed: 30 },
    types: ["ノーマル"],
    // https://champs.pokedb.tokyo/pokemon/show/0143-00?rule=0
    moves: [
      "じしん",
      "うちおとす",
      "れいとうパンチ",
      "のしかかり",
      "じばく",
    ],
  },
  {
    name: "ヒートロトム",
    baseStats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    types: ["でんき", "ほのお"],
    // https://champs.pokedb.tokyo/pokemon/show/0479-01?rule=0
    moves: [
      "オーバーヒート",
      "ボルトチェンジ",
      "10まんボルト",
      "ほうでん",
      "シャドーボール",
    ],
  },
  {
    name: "マンムー",
    baseStats: { hp: 110, attack: 130, defense: 80, specialAttack: 70, specialDefense: 60, speed: 80 },
    types: ["こおり", "じめん"],
    // https://champs.pokedb.tokyo/pokemon/show/0473-00?rule=0
    moves: [
      "じしん",
      "こおりのつぶて",
      "つららばり",
      "つららおとし",
      "がんせきふうじ",
      "ストーンエッジ",
      "いわなだれ",
      "フリーズドライ",
    ],
  },
  {
    name: "ジュカイン",
    baseStats: { hp: 70, attack: 85, defense: 65, specialAttack: 105, specialDefense: 85, speed: 120 },
    types: ["くさ"],
    // https://champs.pokedb.tokyo/pokemon/show/0254-00?rule=0
    moves: [
      "りゅうのはどう",
      "だいちのちから",
      "リーフストーム",
      "エナジーボール",
      "しんくうは",
      "きあいだま",
      "ギガドレイン",
    ],
  },
  {
    name: "イッカネズミ",
    baseStats: { hp: 74, attack: 75, defense: 70, specialAttack: 65, specialDefense: 75, speed: 111 },
    types: ["ノーマル"],
    // https://champs.pokedb.tokyo/pokemon/show/0925-00?rule=0
    moves: [
      "ネズミざん",
      "かみつく",
      "タネマシンガン",
      "かみくだく",
      "じゃれつく",
      "とんぼがえり",
    ],
  },
  {
    name: "コノヨザル",
    baseStats: { hp: 110, attack: 115, defense: 80, specialAttack: 50, specialDefense: 90, speed: 90 },
    types: ["かくとう", "ゴースト"],
    // https://champs.pokedb.tokyo/pokemon/show/0979-00?rule=0
    moves: [
      "ふんどのこぶし",
      "ドレインパンチ",
      "れいとうパンチ",
      "がんせきふうじ",
      "インファイト",
      "かみなりパンチ",
    ],
  },
  {
    name: "ミロカロス",
    baseStats: { hp: 95, attack: 60, defense: 79, specialAttack: 100, specialDefense: 125, speed: 81 },
    types: ["みず"],
    // https://champs.pokedb.tokyo/pokemon/show/0350-00?rule=0
    moves: [
      "ねっとう",
      "れいとうビーム",
      "クイックターン",
      "みわくのボイス",
      "こごえるかぜ",
    ],
  },
  {
    name: "ゾロアーク (ヒスイ)",
    baseStats: { hp: 55, attack: 100, defense: 60, specialAttack: 125, specialDefense: 60, speed: 110 },
    types: ["ノーマル", "ゴースト"],
    // https://champs.pokedb.tokyo/pokemon/show/0571-01?rule=0
    moves: [
      "うらみつらみ",
      "こごえるかぜ",
      "かえんほうしゃ",
      "シャドーボール",
      "きあいだま",
      "ハイパーボイス",
      "かげうち",
      "ヘドロばくだん",
    ],
  },
  {
    name: "ペンドラー",
    baseStats: { hp: 60, attack: 100, defense: 89, specialAttack: 55, specialDefense: 69, speed: 112 },
    types: ["むし", "どく"],
    // https://champs.pokedb.tokyo/pokemon/show/0545-00?rule=0
    moves: [
      "じしん",
      "きゅうけつ",
      "どくづき",
      "ダストシュート",
      "いわなだれ",
    ],
  },
  {
    name: "オニシズクモ",
    baseStats: { hp: 68, attack: 70, defense: 92, specialAttack: 50, specialDefense: 132, speed: 42 },
    types: ["みず", "むし"],
    // https://champs.pokedb.tokyo/pokemon/show/0752-00?rule=0
    moves: [
      "アクアブレイク",
      "きゅうけつ",
      "とびかかる",
      "なみのり",
      "れいとうビーム",
      "こごえるかぜ",
      "とびつく",
    ],
  },
  {
    name: "マリルリ",
    baseStats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50 },
    types: ["みず", "フェアリー"],
    // https://champs.pokedb.tokyo/pokemon/show/0184-00?rule=0
    moves: [
      "アクアジェット",
      "じゃれつく",
      "アクアブレイク",
      "ばかぢから",
      "はたきおとす",
      "かわらわり",
      "アイススピナー",
    ],
  },
  {
    name: "ヤバソチャ",
    baseStats: { hp: 71, attack: 60, defense: 106, specialAttack: 121, specialDefense: 80, speed: 70 },
    types: ["くさ", "ゴースト"],
    // https://champs.pokedb.tokyo/pokemon/show/1013-00?rule=0
    moves: [
      "シャカシャカほう",
      "シャドーボール",
      "ねっとう",
      "たたりめ",
      "イカサマ",
    ],
  },
  {
    name: "ヤドラン",
    baseStats: { hp: 95, attack: 75, defense: 110, specialAttack: 100, specialDefense: 80, speed: 30 },
    types: ["みず", "エスパー"],
    // https://champs.pokedb.tokyo/pokemon/show/0080-00?rule=0
    moves: [
      "ねっとう",
      "れいとうビーム",
      "ボディプレス",
      "かえんほうしゃ",
      "サイコキネシス",
    ],
  },
  {
    name: "ヌメルゴン (ヒスイ)",
    baseStats: { hp: 80, attack: 100, defense: 100, specialAttack: 110, specialDefense: 150, speed: 60 },
    types: ["はがね", "ドラゴン"],
    // https://champs.pokedb.tokyo/pokemon/show/0706-01?rule=0
    moves: [
      "りゅうせいぐん",
      "かえんほうしゃ",
      "ラスターカノン",
      "ヘビーボンバー(未対応)",
      "ドラゴンテール",
      "10まんボルト",
      "ボディプレス",
      "れいとうビーム",
      "アシッドボム",
    ],
  },
  {
    name: "ヤミラミ",
    baseStats: { hp: 50, attack: 75, defense: 75, specialAttack: 65, specialDefense: 65, speed: 50 },
    types: ["あく", "ゴースト"],
    // https://champs.pokedb.tokyo/pokemon/show/0302-00?rule=0
    moves: ["イカサマ"],
  },
  {
    name: "メタモン",
    baseStats: { hp: 48, attack: 48, defense: 48, specialAttack: 48, specialDefense: 48, speed: 48 },
    types: ["ノーマル"],
  },
  {
    name: "ビビヨン",
    baseStats: { hp: 80, attack: 52, defense: 50, specialAttack: 90, specialDefense: 50, speed: 89 },
    types: ["むし", "ひこう"],
  },
  {
    name: "ジュペッタ",
    baseStats: { hp: 64, attack: 115, defense: 65, specialAttack: 83, specialDefense: 63, speed: 65 },
    types: ["ゴースト"],
  },
  {
    name: "バサギリ",
    baseStats: { hp: 70, attack: 135, defense: 95, specialAttack: 45, specialDefense: 70, speed: 85 },
    types: ["むし", "いわ"],
  },
  {
    name: "ジャローダ",
    baseStats: { hp: 75, attack: 75, defense: 95, specialAttack: 75, specialDefense: 95, speed: 113 },
    types: ["くさ"],
  },
  {
    name: "エアームド",
    baseStats: { hp: 65, attack: 80, defense: 140, specialAttack: 40, specialDefense: 70, speed: 70 },
    types: ["はがね", "ひこう"],
  },
  {
    name: "ガルーラ",
    baseStats: { hp: 105, attack: 95, defense: 80, specialAttack: 40, specialDefense: 80, speed: 90 },
    types: ["ノーマル"],
  },
  {
    name: "ブリムオン",
    baseStats: { hp: 57, attack: 90, defense: 95, specialAttack: 136, specialDefense: 103, speed: 29 },
    types: ["エスパー", "フェアリー"],
  },
  {
    name: "サーナイト",
    baseStats: { hp: 68, attack: 65, defense: 65, specialAttack: 125, specialDefense: 115, speed: 80 },
    types: ["エスパー", "フェアリー"],
  },
  {
    name: "エルレイド",
    baseStats: { hp: 68, attack: 125, defense: 65, specialAttack: 65, specialDefense: 115, speed: 80 },
    types: ["エスパー", "かくとう"],
  },
  {
    name: "ユキメノコ",
    baseStats: { hp: 70, attack: 80, defense: 70, specialAttack: 80, specialDefense: 70, speed: 110 },
    types: ["こおり", "ゴースト"],
  },
  {
    name: "エンペルト",
    baseStats: { hp: 84, attack: 86, defense: 88, specialAttack: 111, specialDefense: 101, speed: 60 },
    types: ["みず", "はがね"],
  },
  {
    name: "ミミズズ",
    baseStats: { hp: 70, attack: 85, defense: 145, specialAttack: 60, specialDefense: 55, speed: 65 },
    types: ["はがね"],
  },
  {
    name: "ガオガエン",
    baseStats: { hp: 95, attack: 115, defense: 90, specialAttack: 80, specialDefense: 90, speed: 60 },
    types: ["ほのお", "あく"],
  },
  {
    name: "グレンアルマ",
    baseStats: { hp: 85, attack: 60, defense: 100, specialAttack: 125, specialDefense: 80, speed: 75 },
    types: ["ほのお", "エスパー"],
  },
  {
    name: "ハカドッグ",
    baseStats: { hp: 72, attack: 101, defense: 100, specialAttack: 50, specialDefense: 97, speed: 68 },
    types: ["ゴースト"],
  },
  {
    name: "ハリーマン",
    baseStats: { hp: 85, attack: 115, defense: 95, specialAttack: 65, specialDefense: 65, speed: 85 },
    types: ["あく", "どく"],
  },
  {
    name: "ウツボット",
    baseStats: { hp: 80, attack: 105, defense: 65, specialAttack: 100, specialDefense: 70, speed: 70 },
    types: ["くさ", "どく"],
  },
  {
    name: "ラフレシア",
    baseStats: { hp: 75, attack: 80, defense: 85, specialAttack: 110, specialDefense: 90, speed: 50 },
    types: ["くさ", "どく"],
  },
  {
    name: "シャンデラ",
    baseStats: { hp: 60, attack: 55, defense: 90, specialAttack: 145, specialDefense: 90, speed: 80 },
    types: ["ゴースト", "ほのお"],
  },
  {
    name: "エーフィ",
    baseStats: { hp: 65, attack: 65, defense: 60, specialAttack: 130, specialDefense: 95, speed: 110 },
    types: ["エスパー"],
  },
  {
    name: "カエンジシ",
    baseStats: { hp: 86, attack: 68, defense: 72, specialAttack: 109, specialDefense: 66, speed: 106 },
    types: ["ほのお", "ノーマル"],
  },
  {
    name: "ズルズキン",
    baseStats: { hp: 65, attack: 90, defense: 115, specialAttack: 45, specialDefense: 115, speed: 58 },
    types: ["あく", "かくとう"],
  },
  {
    name: "ホルード",
    baseStats: { hp: 85, attack: 56, defense: 77, specialAttack: 50, specialDefense: 77, speed: 78 },
    types: ["ノーマル", "じめん"],
  },
  {
    name: "ドデカバシ",
    baseStats: { hp: 80, attack: 120, defense: 75, specialAttack: 75, specialDefense: 75, speed: 60 },
    types: ["ノーマル", "ひこう"],
  },
  {
    name: "ローブシン",
    baseStats: { hp: 105, attack: 140, defense: 95, specialAttack: 55, specialDefense: 65, speed: 45 },
    types: ["かくとう"],
  },
  {
    name: "ポットデス",
    baseStats: { hp: 60, attack: 65, defense: 65, specialAttack: 134, specialDefense: 114, speed: 70 },
    types: ["ゴースト"],
  },
  {
    name: "グライオン",
    baseStats: { hp: 75, attack: 95, defense: 125, specialAttack: 45, specialDefense: 75, speed: 95 },
    types: ["じめん", "ひこう"],
  },
  {
    name: "ヤドキング (ガラル)",
    baseStats: { hp: 95, attack: 65, defense: 80, specialAttack: 110, specialDefense: 110, speed: 30 },
    types: ["どく", "エスパー"],
  },
  {
    name: "ウインディ (ヒスイ)",
    baseStats: { hp: 95, attack: 115, defense: 80, specialAttack: 95, specialDefense: 80, speed: 90 },
    types: ["ほのお", "いわ"],
  },
];


export const POKEMON_LIST_MEGA: PokemonBase[] = [
  { name: "メガフシギバナ", baseName: "フシギバナ", baseStats: { hp: 80, attack: 100, defense: 123, specialAttack: 122, specialDefense: 120, speed: 80 }, types: ["くさ", "どく"] },

  { name: "メガリザードンX", baseName: "リザードン", baseStats: { hp: 78, attack: 130, defense: 111, specialAttack: 130, specialDefense: 85, speed: 100 }, types: ["ほのお", "ドラゴン"] },
  { name: "メガリザードンY", baseName: "リザードン", baseStats: { hp: 78, attack: 104, defense: 78, specialAttack: 159, specialDefense: 115, speed: 100 }, types: ["ほのお", "ひこう"] },

  { name: "メガカメックス", baseName: "カメックス", baseStats: { hp: 79, attack: 103, defense: 120, specialAttack: 135, specialDefense: 115, speed: 78 }, types: ["みず"] },

  { name: "メガライチュウX", baseName: "ライチュウ", baseStats: { hp: 60, attack: 135, defense: 95, specialAttack: 90, specialDefense: 95, speed: 110 }, types: ["でんき"] },
  { name: "メガライチュウY", baseName: "ライチュウ", baseStats: { hp: 60, attack: 100, defense: 55, specialAttack: 160, specialDefense: 80, speed: 130 }, types: ["でんき"] },

  { name: "メガピクシー", baseName: "ピクシー", baseStats: { hp: 95, attack: 80, defense: 93, specialAttack: 135, specialDefense: 110, speed: 70 }, types: ["フェアリー", "ひこう"] },

  { name: "メガウツボット", baseName: "ウツボット", baseStats: { hp: 80, attack: 125, defense: 85, specialAttack: 135, specialDefense: 95, speed: 70 }, types: ["くさ", "どく"] },

  { name: "メガヤドラン", baseName: "ヤドラン", baseStats: { hp: 95, attack: 75, defense: 180, specialAttack: 130, specialDefense: 80, speed: 30 }, types: ["みず", "エスパー"] },

  { name: "メガゲンガー", baseName: "ゲンガー", baseStats: { hp: 60, attack: 65, defense: 80, specialAttack: 170, specialDefense: 95, speed: 130 }, types: ["ゴースト", "どく"] },

  { name: "メガガルーラ", baseName: "ガルーラ", baseStats: { hp: 105, attack: 125, defense: 100, specialAttack: 60, specialDefense: 100, speed: 100 }, types: ["ノーマル"] },

  { name: "メガスターミー", baseName: "スターミー", baseStats: { hp: 60, attack: 100, defense: 105, specialAttack: 130, specialDefense: 105, speed: 120 }, types: ["みず", "エスパー"] },

  // タイプ変化: ひこう→あく
  { name: "メガギャラドス", baseName: "ギャラドス", baseStats: { hp: 95, attack: 155, defense: 109, specialAttack: 70, specialDefense: 130, speed: 81 }, types: ["みず", "あく"] },

  { name: "メガカイリュー", baseName: "カイリュー", baseStats: { hp: 91, attack: 124, defense: 115, specialAttack: 145, specialDefense: 125, speed: 100 }, types: ["ドラゴン", "ひこう"] },

  // タイプ変化: くさ→くさフェアリー
  { name: "メガメガニウム", baseName: "メガニウム", baseStats: { hp: 80, attack: 92, defense: 115, specialAttack: 143, specialDefense: 115, speed: 80 }, types: ["くさ", "フェアリー"] },

  { name: "メガハッサム", baseName: "ハッサム", baseStats: { hp: 70, attack: 150, defense: 140, specialAttack: 65, specialDefense: 100, speed: 75 }, types: ["むし", "はがね"] },

  { name: "メガエアームド", baseName: "エアームド", baseStats: { hp: 65, attack: 140, defense: 110, specialAttack: 40, specialDefense: 100, speed: 110 }, types: ["はがね", "ひこう"] },

  { name: "メガバンギラス", baseName: "バンギラス", baseStats: { hp: 100, attack: 164, defense: 150, specialAttack: 95, specialDefense: 120, speed: 71 }, types: ["いわ", "あく"] },

  { name: "メガサーナイト", baseName: "サーナイト", baseStats: { hp: 68, attack: 85, defense: 65, specialAttack: 165, specialDefense: 135, speed: 100 }, types: ["エスパー", "フェアリー"] },

  { name: "メガヤミラミ", baseName: "ヤミラミ", baseStats: { hp: 50, attack: 85, defense: 125, specialAttack: 85, specialDefense: 115, speed: 20 }, types: ["あく", "ゴースト"] },

  // タイプ変化: ノーマル→ノーマルかくとう
  { name: "メガミミロップ", baseName: "ミミロップ", baseStats: { hp: 65, attack: 136, defense: 94, specialAttack: 54, specialDefense: 96, speed: 135 }, types: ["ノーマル", "かくとう"] },

  { name: "メガガブリアス", baseName: "ガブリアス", baseStats: { hp: 108, attack: 170, defense: 115, specialAttack: 120, specialDefense: 95, speed: 92 }, types: ["ドラゴン", "じめん"] },
  // { name: "メガガブリアスZ", baseName: "ガブリアス", baseStats: { hp: 108, attack: 130, defense: 85, specialAttack: 141, specialDefense: 85, speed: 151 }, types: ["ドラゴン"] },

  { name: "メガルカリオ", baseName: "ルカリオ", baseStats: { hp: 70, attack: 145, defense: 88, specialAttack: 140, specialDefense: 70, speed: 112 }, types: ["かくとう", "はがね"] },
  { name: "メガルカリオZ", baseName: "ルカリオ", baseStats: { hp: 70, attack: 100, defense: 70, specialAttack: 164, specialDefense: 70, speed: 151 }, types: ["かくとう", "はがね"] },

  { name: "メガラグラージ", baseName: "ラグラージ", baseStats: { hp: 100, attack: 150, defense: 110, specialAttack: 95, specialDefense: 110, speed: 70 }, types: ["みず", "じめん"] },

  { name: "メガクチート", baseName: "クチート", baseStats: { hp: 50, attack: 105, defense: 125, specialAttack: 55, specialDefense: 95, speed: 50 }, types: ["はがね", "フェアリー"] },

  // タイプ変化: くさ→くさドラゴン
  { name: "メガジュカイン", baseName: "ジュカイン", baseStats: { hp: 70, attack: 110, defense: 75, specialAttack: 145, specialDefense: 85, speed: 145 }, types: ["くさ", "ドラゴン"] },

  { name: "メガバシャーモ", baseName: "バシャーモ", baseStats: { hp: 80, attack: 160, defense: 80, specialAttack: 130, specialDefense: 80, speed: 100 }, types: ["ほのお", "かくとう"] },

  { name: "メガドリュウズ", baseName: "ドリュウズ", baseStats: { hp: 110, attack: 165, defense: 100, specialAttack: 65, specialDefense: 65, speed: 103 }, types: ["じめん", "はがね"] },

  { name: "メガエルレイド", baseName: "エルレイド", baseStats: { hp: 68, attack: 165, defense: 95, specialAttack: 65, specialDefense: 115, speed: 110 }, types: ["エスパー", "かくとう"] },

  { name: "メガユキメノコ", baseName: "ユキメノコ", baseStats: { hp: 70, attack: 80, defense: 70, specialAttack: 140, specialDefense: 100, speed: 120 }, types: ["こおり", "ゴースト"] },

  { name: "メガシャンデラ", baseName: "シャンデラ", baseStats: { hp: 60, attack: 75, defense: 110, specialAttack: 175, specialDefense: 110, speed: 90 }, types: ["ゴースト", "ほのお"] },

  { name: "メガマフォクシー", baseName: "マフォクシー", baseStats: { hp: 75, attack: 69, defense: 72, specialAttack: 159, specialDefense: 125, speed: 134 }, types: ["ほのお", "エスパー"] },

  { name: "メガゲッコウガ", baseName: "ゲッコウガ", baseStats: { hp: 72, attack: 125, defense: 77, specialAttack: 133, specialDefense: 81, speed: 142 }, types: ["みず", "あく"] },

  { name: "メガジュペッタ", baseName: "ジュペッタ", baseStats: { hp: 64, attack: 165, defense: 75, specialAttack: 93, specialDefense: 83, speed: 75 }, types: ["ゴースト"] },

  { name: "メガフラエッテ", baseName: "フラエッテ", baseStats: { hp: 74, attack: 85, defense: 87, specialAttack: 155, specialDefense: 148, speed: 102 }, types: ["フェアリー"] },

  { name: "メガスコヴィラン", baseName: "スコヴィラン", baseStats: { hp: 65, attack: 138, defense: 85, specialAttack: 138, specialDefense: 85, speed: 75 }, types: ["くさ", "ほのお"] },

  { name: "メガキラフロル", baseName: "キラフロル", baseStats: { hp: 83, attack: 90, defense: 105, specialAttack: 150, specialDefense: 96, speed: 101 }, types: ["いわ", "どく"] },

  { name: "メガメタグロス", baseName: "メタグロス", baseStats: { hp: 80, attack: 145, defense: 150, specialAttack: 105, specialDefense: 110, speed: 110 }, types: ["はがね", "エスパー"] },

  // タイプ変化: ノーマル→かくとう、ひこうは維持
  { name: "メガムクホーク", baseName: "ムクホーク", baseStats: { hp: 85, attack: 140, defense: 100, specialAttack: 60, specialDefense: 90, speed: 110 }, types: ["かくとう", "ひこう"] },

  // タイプ変化: はがね→どく、むしは維持
  { name: "メガペンドラー", baseName: "ペンドラー", baseStats: { hp: 60, attack: 140, defense: 149, specialAttack: 75, specialDefense: 99, speed: 62 }, types: ["むし", "どく"] },

  { name: "メガズルズキン", baseName: "ズルズキン", baseStats: { hp: 65, attack: 130, defense: 135, specialAttack: 55, specialDefense: 135, speed: 68 }, types: ["あく", "かくとう"] },

  // タイプ変化: ほのお・ノーマル→ほのお単タイプ
  { name: "メガカエンジシ", baseName: "カエンジシ", baseStats: { hp: 86, attack: 88, defense: 92, specialAttack: 129, specialDefense: 86, speed: 126 }, types: ["ほのお"] },

  { name: "メガドラミドロ", baseName: "ドラミドロ", baseStats: { hp: 65, attack: 85, defense: 105, specialAttack: 132, specialDefense: 163, speed: 44 }, types: ["どく", "ドラゴン"] },
];


export const POKEMON_LIST: PokemonBase[] = [
  ...POKEMON_LIST_1_50,
  ...POKEMON_LIST_51_100,
];

/** 通常ポケモン名 → メガ進化フォーム一覧（baseName で明示紐づけ） */
export const MEGA_FORMS_BY_BASE: Record<string, PokemonBase[]> = (() => {
  const map: Record<string, PokemonBase[]> = {};
  for (const mega of POKEMON_LIST_MEGA) {
    if (!mega.baseName) continue;
    (map[mega.baseName] ??= []).push(mega);
  }
  return map;
})();

export function getMegaForms(baseName: string): PokemonBase[] {
  return MEGA_FORMS_BY_BASE[baseName] ?? [];
}

/** メガ進化中なら baseName、そうでなければそのまま */
export function getBasePokemonName(name: string): string {
  const mega = POKEMON_LIST_MEGA.find((p) => p.name === name);
  return mega?.baseName ?? name;
}

/** 通常ポケモン選択時の初期値（メガがある場合は先頭のメガ） */
export function resolvePokemonWithDefaultMega(base: PokemonBase): PokemonBase {
  return getMegaForms(base.name)[0] ?? base;
}

/** 技リレーション付きの通常体エントリを返す（メガなら baseName 側） */
export function getBasePokemonEntry(pokemon: PokemonBase): PokemonBase {
  const baseName = getBasePokemonName(pokemon.name);
  return POKEMON_LIST.find((p) => p.name === baseName) ?? pokemon;
}

/**
 * ポケモンに紐づく技を使用率順で返す。
 * moves 未設定のポケモンは MOVE_LIST 全体にフォールバックする。
 */
export function getMovesForPokemon(pokemon: PokemonBase): Move[] {
  const names = getBasePokemonEntry(pokemon).moves;
  if (!names?.length) return MOVE_LIST;
  return names.flatMap((name) => {
    const move = MOVE_BY_NAME[name];
    return move ? [move] : [];
  });
}
