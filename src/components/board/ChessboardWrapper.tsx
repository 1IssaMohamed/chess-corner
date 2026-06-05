import { Chessboard } from "react-chessboard";
import type { Side } from "@/types";
import { useRef, useState, useEffect } from "react";

interface Arrow {
  startSquare: string;
  endSquare: string;
  color?: string;
}

interface ChessboardWrapperProps {
  fen: string;
  orientation?: Side;
  onPieceDrop?: (from: string, to: string) => boolean;
  onSquareClick?: (square: string) => void;
  isDraggable?: boolean;
  squareStyles?: Record<string, React.CSSProperties>;
  arrows?: Arrow[];
  animationDuration?: number;
}

export default function ChessboardWrapper({
  fen,
  orientation = "white",
  onPieceDrop,
  onSquareClick,
  isDraggable = false,
  squareStyles = {},
  arrows = [],
  animationDuration = 200,
}: ChessboardWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [boardWidth, setBoardWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setBoardWidth(Math.floor(entry.contentRect.width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const boardArrows = arrows.map((a) => [
    a.startSquare,
    a.endSquare,
    a.color ?? "rgba(212, 160, 23, 0.75)",
  ]) as unknown as any[];

  return (
    <div
      ref={containerRef}
      className="w-full rounded-lg overflow-hidden ring-2 ring-chess-border/40 shadow-2xl"
    >
      {boardWidth > 0 && (
        <Chessboard
          boardWidth={boardWidth}
          position={fen}
          boardOrientation={orientation}
          onPieceDrop={
            onPieceDrop ? (from, to) => onPieceDrop(from, to) : undefined
          }
          onSquareClick={onSquareClick}
          arePiecesDraggable={isDraggable}
          customSquareStyles={squareStyles}
          customArrows={boardArrows}
          animationDuration={animationDuration}
          customDarkSquareStyle={{ backgroundColor: "#4a7c59" }}
          customLightSquareStyle={{ backgroundColor: "#d4c5a9" }}
          promotionToSquare={null}
          onPromotionPieceSelect={() => true}
        />
      )}
    </div>
  );
}
