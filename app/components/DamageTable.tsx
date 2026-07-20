"use client";

import { useMemo, useState } from "react";
import type { DamageRowResult, DamageTableResult } from "@/lib/types";

interface DamageTableProps {
  table: DamageTableResult;
}

type SortKey =
  | "nature"
  | "hpEV"
  | "defEV"
  | "hp"
  | "defStat"
  | "damage"
  | "percent"
  | "hits";

interface ColumnDef {
  key: SortKey;
  label: string;
  getValue: (r: DamageRowResult) => number;
}

export function DamageTable({ table }: DamageTableProps) {
  const defLabel = table.defStatKey === "defense" ? "B" : "D";

  const columns: ColumnDef[] = [
    { key: "nature", label: "性格", getValue: (r) => (r.row.natureBoost ? 1 : 0) },
    { key: "hpEV", label: "H努力値", getValue: (r) => r.row.hpEV },
    { key: "defEV", label: `${defLabel}努力値`, getValue: (r) => r.row.defEV },
    { key: "hp", label: "HP", getValue: (r) => r.hp },
    { key: "defStat", label: `${defLabel}実数値`, getValue: (r) => r.defStat },
    { key: "damage", label: "ダメージ", getValue: (r) => r.maxDamage },
    { key: "percent", label: "割合", getValue: (r) => r.maxPercent },
    { key: "hits", label: "発数", getValue: (r) => r.worstCaseHits },
  ];

  // デフォルトは左の列から順にORDER BY DESCをカスケード（最左列を最優先として全列降順）
  const [primarySort, setPrimarySort] = useState<{ key: SortKey; dir: "asc" | "desc" }>({
    key: columns[0].key,
    dir: "desc",
  });

  const sortedRows = useMemo(() => {
    const primaryColumn = columns.find((c) => c.key === primarySort.key)!;
    const copy = [...table.rows];
    copy.sort((a, b) => {
      const primaryDiff = primaryColumn.getValue(a) - primaryColumn.getValue(b);
      if (primaryDiff !== 0) {
        return primarySort.dir === "asc" ? primaryDiff : -primaryDiff;
      }
      // タイ中は左の列から順に降順で比較
      for (const column of columns) {
        if (column.key === primarySort.key) continue;
        const diff = column.getValue(a) - column.getValue(b);
        if (diff !== 0) return -diff;
      }
      return 0;
    });
    return copy;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.rows, primarySort]);

  function handleHeaderClick(key: SortKey) {
    setPrimarySort((prev) =>
      prev.key === key
        ? { key, dir: prev.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "desc" },
    );
  }

  return (
    <section className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
      <h2 className="mb-3 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
        ダメージ計算結果（ヘッダをクリックで並び替え／デフォルトは硬い順）
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-140 border-collapse text-sm">
          <thead>
            <tr className="border-b border-zinc-300 text-left dark:border-zinc-700">
              {columns.map((c) => (
                <th key={c.key} className="py-1.5 pr-3">
                  <button
                    type="button"
                    onClick={() => handleHeaderClick(c.key)}
                    className="flex items-center gap-1 font-semibold hover:underline"
                  >
                    {c.label}
                    {primarySort.key === c.key && (
                      <span>{primarySort.dir === "asc" ? "▲" : "▼"}</span>
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((r, i) => (
              <tr
                key={i}
                className="border-b border-zinc-100 dark:border-zinc-900"
              >
                <td className="py-1.5 pr-3">
                  {r.row.natureBoost ? `${defLabel}↑` : "-"}
                </td>
                <td className="py-1.5 pr-3">{r.row.hpEV}</td>
                <td className="py-1.5 pr-3">{r.row.defEV}</td>
                <td className="py-1.5 pr-3">{r.hp}</td>
                <td className="py-1.5 pr-3">{r.defStat}</td>
                <td className="py-1.5 pr-3">
                  {r.minDamage === r.maxDamage
                    ? r.minDamage
                    : `${r.minDamage}〜${r.maxDamage}`}
                </td>
                <td className="py-1.5 pr-3">
                  {r.minPercent.toFixed(1)}〜{r.maxPercent.toFixed(1)}%
                </td>
                <td className="py-1.5 pr-3 font-medium">{r.hitLabel}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {sortedRows.length === 0 && (
          <p className="py-4 text-sm text-zinc-500 dark:text-zinc-400">
            表示するパターンがありません。防御側の絞り込みを見直してください。
          </p>
        )}
      </div>
    </section>
  );
}
