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
