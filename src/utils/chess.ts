// All chess.js helpers live here. Nothing stateful — every function takes what
// it needs and spits out a result, so they're safe to call from anywhere.

import { Chess } from "chess.js";
import type { CSSProperties } from "react";
import type { OpeningLine, Side, ContinuationMove } from "@/types";

export const STARTING_FEN =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

// Replays moves[0..stepIndex-1] on a fresh Chess instance and returns it.
// We NEVER reuse a Chess instance across renders — chess.js is mutable and if
// you hold onto one across renders you'll get wrong positions. Always build fresh.
export function buildGameUpToStep(line: OpeningLine, stepIndex: number): Chess {
  const chess = new Chess();
  const moves = line.moves.slice(0, stepIndex);
  for (const move of moves) {
    const result = chess.move(move.san);
    if (!result) {
      throw new Error(
        `Invalid SAN "${move.san}" in line "${line.id}" at step ${stepIndex}`,
      );
    }
  }
  return chess;
}

// Shortcut when you only need the FEN string, not the full chess.js instance.
export function getFenAtStep(line: OpeningLine, stepIndex: number): string {
  return buildGameUpToStep(line, stepIndex).fen();
}

export function getExpectedSan(line: OpeningLine, stepIndex: number): string {
  return line.moves[stepIndex]?.san ?? "";
}

// Tries the move on the given chess instance. Returns the SAN if legal, null if
// not. Promotion always defaults to queen — we skip the picker dialog entirely.
export function isMoveLegal(
  chess: Chess,
  from: string,
  to: string,
  promotion = "q",
): string | null {
  try {
    const result = chess.move({ from, to, promotion });
    return result ? result.san : null;
  } catch {
    return null;
  }
}

// Strips check (+), checkmate (#), and annotation symbols before comparing.
// Without this, a correct move like "Nf3+" would fail to match "Nf3" in the data.
export function movesMatch(attempted: string, expected: string): boolean {
  const normalize = (san: string) => san.replace(/[+#!?]/g, "").trim();
  return normalize(attempted) === normalize(expected);
}

// Even step index = White's move, odd = Black's. So if you're learning White,
// your turns are steps 0, 2, 4… and the computer plays 1, 3, 5… etc.
export function isUsersTurn(stepIndex: number, learningSide: Side): boolean {
  const moveColor = stepIndex % 2 === 0 ? "white" : "black";
  return moveColor === learningSide;
}

// Builds the list of FEN positions for a line's continuation moves, starting
// with the final position of the line itself. Used by ContinuationViewer to
// step through the "here's what happens next" mini-board.
export function buildContinuationFens(
  line: OpeningLine,
  continuation: ContinuationMove[],
): string[] {
  const chess = buildGameUpToStep(line, line.moves.length);
  const fens = [chess.fen()];
  for (const move of continuation) {
    const result = chess.move(move.san);
    if (!result) break;
    fens.push(chess.fen());
  }
  return fens;
}

// Pawns don't count in the hanging-piece check — losing a pawn in an opening
// isn't always a blunder, so we only flag knights/bishops and above.
const PIECE_VALUES: Record<string, number> = {
  p: 1,
  n: 3,
  b: 3,
  r: 5,
  q: 9,
  k: 0,
};

export function pieceName(letter: string): string {
  switch (letter) {
    case "n":
      return "knight";
    case "b":
      return "bishop";
    case "r":
      return "rook";
    case "q":
      return "queen";
    case "p":
      return "pawn";
    default:
      return "piece";
  }
}

// ok so this is the fun one — when you play a wrong move in Practice, we check
// whether your move just left a piece hanging. Algorithm:
//   1. Find all captures the opponent can make on the resulting position
//   2. Only look at captures worth ≥ 3 (knight/bishop minimum)
//   3. For each capture candidate, simulate it and check if YOU can recapture
//   4. If not — the piece is genuinely hanging. Show that capture on the board.
// Returns null if nothing hangs, so we don't cry "blunder" on every wrong move.
export function findRefutation(
  fen: string,
): { san: string; from: string; to: string; capturedPiece: string } | null {
  const chess = new Chess(fen);
  const captures = chess
    .moves({ verbose: true })
    .filter((m) => m.captured && (PIECE_VALUES[m.captured] ?? 0) >= 3)
    .sort(
      (a, b) =>
        (PIECE_VALUES[b.captured ?? ""] ?? 0) -
        (PIECE_VALUES[a.captured ?? ""] ?? 0),
    );

  for (const cap of captures) {
    const probe = new Chess(fen);
    probe.move({ from: cap.from, to: cap.to, promotion: "q" });
    // after the capture, can the side who just got hit recapture on that square?
    const canRecapture = probe
      .moves({ verbose: true })
      .some((r) => r.to === cap.to && r.captured);
    if (!canRecapture) {
      return {
        san: cap.san,
        from: cap.from,
        to: cap.to,
        capturedPiece: cap.captured ?? "",
      };
    }
  }
  return null;
}

// Builds the square highlight styles object that react-chessboard expects.
// Pass in whichever combination you need — they get merged together.
// Amber = last move or hint target, red = wrong move, green = selected piece.
export function buildSquareStyles(opts: {
  lastMove?: { from: string; to: string } | null;
  wrongSquares?: { from: string; to: string } | null;
  hintSquares?: { from: string; to: string } | null;
  selectedSquare?: string | null;
}): Record<string, CSSProperties> {
  const styles: Record<string, CSSProperties> = {};

  if (opts.lastMove) {
    const lastMoveStyle: CSSProperties = {
      backgroundColor: "rgba(212, 160, 23, 0.25)",
    };
    styles[opts.lastMove.from] = lastMoveStyle;
    styles[opts.lastMove.to] = lastMoveStyle;
  }

  if (opts.wrongSquares) {
    const wrongStyle: CSSProperties = {
      backgroundColor: "rgba(192, 57, 43, 0.5)",
    };
    styles[opts.wrongSquares.from] = wrongStyle;
    styles[opts.wrongSquares.to] = wrongStyle;
  }

  if (opts.hintSquares) {
    styles[opts.hintSquares.to] = {
      backgroundColor: "rgba(212, 160, 23, 0.4)",
      borderRadius: "50%",
      boxShadow: "0 0 0 4px rgba(212, 160, 23, 0.6)",
    };
  }

  if (opts.selectedSquare) {
    styles[opts.selectedSquare] = {
      ...styles[opts.selectedSquare],
      backgroundColor: "rgba(100, 180, 100, 0.4)",
    };
  }

  return styles;
}
