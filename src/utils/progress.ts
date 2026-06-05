import type { Opening, OpeningLine, ProgressStore } from "@/types";
import { DIFFICULTY_ORDER } from "@/types";
import { getLineProgress } from "@/stores/progressStore";

export function getOrderedLines(opening: Opening): OpeningLine[] {
  return DIFFICULTY_ORDER.flatMap((d) =>
    opening.lines.filter((l) => l.difficulty === d),
  );
}

export function getOpeningMasteryPercent(
  opening: Opening,
  store: ProgressStore,
): number {
  if (opening.lines.length === 0) return 0;
  const total = opening.lines.length * 3;
  const earned = opening.lines.reduce((sum, line) => {
    const lp = getLineProgress(store, opening.id, line.id);
    return sum + lp.mastery;
  }, 0);
  return Math.round((earned / total) * 100);
}

export function getOverallStats(
  store: ProgressStore,
  allLines: number,
): { practiced: number; mastered: number; percent: number } {
  const lines = Object.values(store.lines);
  const practiced = lines.filter((l) => l.mastery >= 2).length;
  const mastered = lines.filter((l) => l.mastery === 3).length;
  const percent = allLines === 0 ? 0 : Math.round((practiced / allLines) * 100);
  return { practiced, mastered, percent };
}
