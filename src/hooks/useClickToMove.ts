// Handles click-to-move: first click selects a piece and highlights its legal
// destinations, second click on a destination submits the move. Also works
// alongside drag — both use handleUserMove, which does the actual validation.

import { useState, useCallback, useEffect } from "react";
import type { CSSProperties } from "react";
import { Chess } from "chess.js";

export function useClickToMove(
  fen: string,
  isUserTurn: boolean,
  handleUserMove: (from: string, to: string) => boolean,
) {
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [clickHighlights, setClickHighlights] = useState<
    Record<string, CSSProperties>
  >({});

  const clearSelection = useCallback(() => {
    setSelectedSquare(null);
    setClickHighlights({});
  }, []);

  const onSquareClick = useCallback(
    (square: string) => {
      if (!isUserTurn) {
        clearSelection();
        return;
      }

      if (selectedSquare) {
        // second click — try to complete the move
        const success = handleUserMove(selectedSquare, square);
        if (success) {
          clearSelection();
          return;
        }
        // move failed — maybe they clicked a different piece of their own color,
        // so fall through and try to select that square instead
      }

      // first click (or re-select after failed move) — highlight legal destinations
      try {
        const chess = new Chess(fen);
        const moves = chess.moves({
          square: square as Parameters<typeof chess.moves>[0]["square"],
          verbose: true,
        });
        if (moves.length === 0) {
          clearSelection();
          return;
        }
        const highlights: Record<string, CSSProperties> = {
          // yellow tint on the selected piece
          [square]: { background: "rgba(255,224,102,0.85)" },
        };
        for (const m of moves) {
          // small dot on each square the piece can legally go to
          highlights[m.to] = {
            background:
              "radial-gradient(circle, rgba(0,0,0,0.35) 28%, transparent 28%)",
          };
        }
        setSelectedSquare(square);
        setClickHighlights(highlights);
      } catch {
        clearSelection();
      }
    },
    [selectedSquare, fen, isUserTurn, handleUserMove, clearSelection],
  );

  useEffect(() => {
    if (!isUserTurn) clearSelection();
  }, [isUserTurn, clearSelection]);

  return { onSquareClick, clickHighlights, selectedSquare, clearSelection };
}
