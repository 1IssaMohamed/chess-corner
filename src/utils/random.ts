// Weighted random line selection — lines you haven't practiced much or that you
// get wrong a lot get picked more often. The idea is to focus you on weak spots.

import type { Opening, ProgressStore } from "@/types";
import { getLineProgress } from "@/stores/progressStore";

function errorWeight(
  wrongMoveCount: number,
  practiceAttempts: number,
  moveCount: number,
): number {
  if (practiceAttempts === 0) return 1;
  const errorRate = wrongMoveCount / (practiceAttempts * moveCount);
  return 1 + Math.min(errorRate * 3, 3); // 1× to 4× boost for error-prone lines
}

// Base weight comes from mastery level (unseen=4, mastered=1) so you never
// completely stop seeing mastered lines — they're just less frequent.
// Then multiplied by errorWeight so your trouble lines surface more often.
function lineWeight(
  store: ProgressStore,
  openingId: string,
  lineId: string,
  moveCount: number,
): number {
  const lp = getLineProgress(store, openingId, lineId);
  const mastery = 4 - lp.mastery; // 1–4 (unseen=4, mastered=1)
  return (
    mastery * errorWeight(lp.wrongMoveCount, lp.practiceAttempts, moveCount)
  );
}

// Standard weighted random: roll a number in [0, totalWeight), then walk the
// list subtracting each weight until you go negative — that's your pick.
function weightedPick<T extends { weight: number }>(candidates: T[]): T {
  const total = candidates.reduce((s, c) => s + c.weight, 0);
  let rand = Math.random() * total;
  for (const c of candidates) {
    rand -= c.weight;
    if (rand <= 0) return c;
  }
  return candidates[candidates.length - 1];
}

export function pickNextLine(
  openings: Opening[],
  store: ProgressStore,
  excludeKey?: string,
): { openingId: string; lineId: string } | null {
  const candidates = openings.flatMap((opening) =>
    opening.lines
      .filter((line) => `${opening.id}::${line.id}` !== excludeKey)
      .map((line) => ({
        openingId: opening.id,
        lineId: line.id,
        weight: lineWeight(store, opening.id, line.id, line.moves.length),
      })),
  );

  if (candidates.length === 0) return null;
  const picked = weightedPick(candidates);
  return { openingId: picked.openingId, lineId: picked.lineId };
}

export function pickLineFromOpening(
  opening: Opening,
  store: ProgressStore,
): string {
  const candidates = opening.lines.map((line) => ({
    lineId: line.id,
    weight: lineWeight(store, opening.id, line.id, line.moves.length),
  }));
  return weightedPick(candidates).lineId;
}
