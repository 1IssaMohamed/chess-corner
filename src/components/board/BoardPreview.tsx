// Tiny static board thumbnail shown on the home page cards. Not interactive —
// pointerEvents is disabled so clicks pass through to the card itself.
// Shows the position after 6 moves of the opening's first line as a preview.

import { useMemo } from "react";
import { Chessboard } from "react-chessboard";
import { getFenAtStep } from "@/utils/chess";
import type { Opening } from "@/types";

interface BoardPreviewProps {
  opening: Opening;
  size?: number;
}

export default function BoardPreview({
  opening,
  size = 160,
}: BoardPreviewProps) {
  // useMemo so we don't replay the line's moves on every render — the position
  // only changes if the opening data itself changes (basically never at runtime).
  const fen = useMemo(() => {
    const firstLine = opening.lines[0];
    const previewSteps = Math.min(6, firstLine?.moves.length ?? 0);
    return firstLine ? getFenAtStep(firstLine, previewSteps) : "start";
  }, [opening]);

  return (
    <div
      style={{
        width: size,
        height: size,
        pointerEvents: "none",
        flexShrink: 0,
      }}
    >
      <Chessboard
        position={fen}
        boardOrientation={opening.side}
        arePiecesDraggable={false}
        customDarkSquareStyle={{ backgroundColor: "#4a7c59" }}
        customLightSquareStyle={{ backgroundColor: "#d4c5a9" }}
        animationDuration={0}
      />
    </div>
  );
}
