# ポケモンダメージ計算アプリ設計書

## 概要

ポケモンバトルにおけるダメージを計算するWebアプリケーション。
攻撃側・防御側のステータスと技情報から、実際のダメージ範囲を算出する。

## ダメージ計算式

```
ダメージ = ((レベル × 2 / 5 + 2) × 威力 × 攻撃 / 防御 / 50 + 2) 
         × 乱数(0.85〜1.00) 
         × タイプ一致補正
         × タイプ相性
         × 急所補正
         × その他補正
```

## 主要機能

### MVP（最小機能）
- [ ] 攻撃側ポケモン情報入力
  - レベル
  - 攻撃/特攻ステータス
- [ ] 防御側ポケモン情報入力
  - レベル
  - 防御/特防ステータス
  - タイプ（1つまたは2つ）
- [ ] 技情報入力
  - 威力
  - 物理/特殊判定
  - 技タイプ
- [ ] ダメージ計算結果表示
  - 最小ダメージ
  - 最大ダメージ
  - ダメージ範囲（%）
  - 確定n発計算

### 将来的な拡張機能
- ポケモン名からステータス自動入力
- 技名から威力・タイプ自動入力
- 努力値・個体値・性格補正の考慮
- 天候・フィールド補正
- 持ち物補正
- ランク補正（攻撃↑など）
- 壁（リフレクター/ひかりのかべ）補正
- 複数の技を比較
- ダメージログ保存

## UI設計

### レイアウト
```
┌─────────────────────────────────┐
│   ポケモンダメージ計算機         │
├─────────────────────────────────┤
│                                 │
│  [攻撃側]          [防御側]      │
│  レベル: [  ]      レベル: [  ]  │
│  攻撃:   [  ]      防御:   [  ]  │
│  特攻:   [  ]      特防:   [  ]  │
│  タイプ: [  ]      タイプ1:[  ]  │
│                    タイプ2:[  ]  │
│                                 │
│  [技情報]                        │
│  技名:    [           ]         │
│  威力:    [  ]                  │
│  分類:    ○物理 ○特殊          │
│  技タイプ:[  ]                  │
│                                 │
│         [計算する]              │
│                                 │
├─────────────────────────────────┤
│  [計算結果]                      │
│  ダメージ: XXX 〜 XXX           │
│  割合: XX.X% 〜 XX.X%          │
│  確定n発: n発                   │
└─────────────────────────────────┘
```

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS 4
- **状態管理**: React Hooks (useState)
- **デプロイ**: Vercel
- **パッケージマネージャー**: Bun

## ディレクトリ構成

```
app/
├── page.tsx                 # メインページ
├── layout.tsx              # レイアウト
└── components/
    ├── AttackerForm.tsx    # 攻撃側入力フォーム
    ├── DefenderForm.tsx    # 防御側入力フォーム
    ├── MoveForm.tsx        # 技入力フォーム
    └── DamageResult.tsx    # 結果表示
lib/
├── types.ts                # 型定義
└── damage-calculator.ts    # ダメージ計算ロジック
```

## データ型

```typescript
// 攻撃側データ
interface Attacker {
  level: number;
  attack: number;      // 物理攻撃
  specialAttack: number; // 特殊攻撃
  type: PokemonType;
}

// 防御側データ
interface Defender {
  level: number;
  defense: number;     // 物理防御
  specialDefense: number; // 特殊防御
  hp: number;
  types: [PokemonType, PokemonType?];
}

// 技データ
interface Move {
  name: string;
  power: number;
  category: 'physical' | 'special';
  type: PokemonType;
}

// タイプ
type PokemonType = 
  | 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice'
  | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic'
  | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';

// 計算結果
interface DamageResult {
  minDamage: number;
  maxDamage: number;
  minPercent: number;
  maxPercent: number;
  guaranteed: string; // "確定1発", "乱数1発" など
}
```

## タイプ相性表

```typescript
const TYPE_CHART = {
  fire: {
    grass: 2.0,
    ice: 2.0,
    bug: 2.0,
    steel: 2.0,
    fire: 0.5,
    water: 0.5,
    rock: 0.5,
    dragon: 0.5,
  },
  // ... 他のタイプ相性
};
```

## 開発フロー

1. ✅ プロジェクト初期化
2. 📝 設計書作成（現在）
3. 型定義とダメージ計算ロジック実装
4. UI コンポーネント実装
5. スタイリング調整
6. テスト・デバッグ
7. Vercelへデプロイ

## メモ

- まずはシンプルなMVPを完成させる
- タイプ相性は主要なもののみ実装
- UI/UXはシンプルに、レスポンシブ対応
- 後から機能追加しやすい設計にする
