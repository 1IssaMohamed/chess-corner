// Turns a raw engine score into the numbers the eval bar needs: a White-positive
// score, a 0–100% fill, and a human-readable label.

import type { EngineScore, Side } from "@/types";

// Stockfish reports the score from the side-to-move's perspective. Flip it when
// Black is on the move so positive always means "White is better".
export function toWhitePerspective(
  score: EngineScore,
  sideToMove: Side,
): EngineScore {
  if (sideToMove === "white") return score;
  return {
    cp: score.cp === null ? null : -score.cp,
    mate: score.mate === null ? null : -score.mate,
  };
}

// Reads the side to move out of a FEN's second field ("w" or "b").
export function sideToMoveFromFen(fen: string): Side {
  return fen.split(" ")[1] === "b" ? "black" : "white";
}

// Steepness of the logistic curve mapping centipawns to bar fill — the gentle
// slope lichess uses, so small edges nudge the bar and large ones saturate it.
const LOGISTIC_K = 0.004;

// Maps a White-perspective score to a 0–100% white-fill. Mate always pins the
// bar fully to one side.
export function evalToFillPercent(score: EngineScore): number {
  if (score.mate !== null) return score.mate > 0 ? 100 : 0;
  const cp = score.cp ?? 0;
  const pct = 50 + 50 * (2 / (1 + Math.exp(-LOGISTIC_K * cp)) - 1);
  return Math.max(0, Math.min(100, pct));
}

// Human label: "+1.2", "-0.7", "M3", "-M2", "0.0".
export function formatEval(score: EngineScore): string {
  if (score.mate !== null) {
    return score.mate > 0 ? `M${score.mate}` : `-M${Math.abs(score.mate)}`;
  }
  const pawns = (score.cp ?? 0) / 100;
  const sign = pawns > 0 ? "+" : pawns < 0 ? "-" : "";
  return `${sign}${Math.abs(pawns).toFixed(1)}`;
}
