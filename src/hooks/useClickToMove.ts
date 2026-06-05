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
        const success = handleUserMove(selectedSquare, square);
        if (success) {
          clearSelection();
          return;
        }
        // Failed — maybe they clicked another piece of their own color
      }

      // Try to select this square
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
          [square]: {
            background: "rgba(255,224,102,0.85)",
          },
        };
        for (const m of moves) {
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
