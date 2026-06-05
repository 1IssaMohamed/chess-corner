import { Chess } from "chess.js";
import type { OpeningLine, Side, ContinuationMove } from "@/types";

export const STARTING_FEN =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

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

export function getFenAtStep(line: OpeningLine, stepIndex: number): string {
  return buildGameUpToStep(line, stepIndex).fen();
}

export function getExpectedSan(line: OpeningLine, stepIndex: number): string {
  return line.moves[stepIndex]?.san ?? "";
}

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

export function movesMatch(attempted: string, expected: string): boolean {
  const normalize = (san: string) => san.replace(/[+#!?]/g, "").trim();
  return normalize(attempted) === normalize(expected);
}

export function isUsersTurn(stepIndex: number, learningSide: Side): boolean {
  const moveColor = stepIndex % 2 === 0 ? "white" : "black";
  return moveColor === learningSide;
}

// Returns the sequence of FENs for the line's continuation moves, starting with
// the final position of the line itself. Stops gracefully on any invalid SAN.
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

// Conservatively finds a punishing reply for the side to move in `fen`: the
// highest-value capture (minor piece or better) of a piece that the opponent
// CANNOT recapture on that square — i.e. a genuinely hanging piece. Returns null
// when the position has no such clean win, so we never falsely cry "blunder".
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

export function buildSquareStyles(opts: {
  lastMove?: { from: string; to: string } | null;
  wrongSquares?: { from: string; to: string } | null;
  hintSquares?: { from: string; to: string } | null;
  selectedSquare?: string | null;
}): Record<string, React.CSSProperties> {
  const styles: Record<string, React.CSSProperties> = {};

  if (opts.lastMove) {
    const lastMoveStyle: React.CSSProperties = {
      backgroundColor: "rgba(212, 160, 23, 0.25)",
    };
    styles[opts.lastMove.from] = lastMoveStyle;
    styles[opts.lastMove.to] = lastMoveStyle;
  }

  if (opts.wrongSquares) {
    const wrongStyle: React.CSSProperties = {
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
