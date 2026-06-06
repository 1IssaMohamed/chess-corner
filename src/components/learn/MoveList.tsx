// Clickable move list showing all moves paired up (White then Black per row).
// Clicking any move jumps to that step in the line.

import type { MoveAnnotation } from "@/types";

interface MoveListProps {
  moves: MoveAnnotation[];
  currentIndex: number;
  onClickStep: (index: number) => void;
}

export default function MoveList({
  moves,
  currentIndex,
  onClickStep,
}: MoveListProps) {
  // Group the flat moves array into [{ moveNumber, white, black }] pairs so we
  // can render them on the same row like a real chess score sheet.
  const pairs: Array<{
    white: MoveAnnotation | null;
    black: MoveAnnotation | null;
    moveNumber: number;
  }> = [];
  for (let i = 0; i < moves.length; i += 2) {
    pairs.push({
      moveNumber: Math.floor(i / 2) + 1,
      white: moves[i] ?? null,
      black: moves[i + 1] ?? null,
    });
  }

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div
        className="px-3 py-2 border-b text-xs font-semibold uppercase tracking-wider"
        style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
      >
        Move List
      </div>
      <div className="max-h-48 overflow-y-auto p-2 space-y-0.5">
        {pairs.map(({ moveNumber, white, black }) => (
          <div
            key={moveNumber}
            className="flex items-center gap-1 text-sm font-mono"
          >
            <span
              className="w-6 text-right text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              {moveNumber}.
            </span>
            {white && (
              <MoveChip
                move={white}
                index={(moveNumber - 1) * 2}
                currentIndex={currentIndex}
                onClick={() => onClickStep((moveNumber - 1) * 2)}
              />
            )}
            {black && (
              <MoveChip
                move={black}
                index={(moveNumber - 1) * 2 + 1}
                currentIndex={currentIndex}
                onClick={() => onClickStep((moveNumber - 1) * 2 + 1)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MoveChip({
  move,
  index,
  currentIndex,
  onClick,
}: {
  move: MoveAnnotation;
  index: number;
  currentIndex: number;
  onClick: () => void;
}) {
  // "active" = the move you just played (one behind the current step pointer)
  // "future" = moves you haven't reached yet (dimmed so past moves stand out)
  const isActive = index === currentIndex - 1;
  const isFuture = index >= currentIndex;

  return (
    <button
      onClick={onClick}
      title={move.isKeyMove ? "Key move — the point of this line" : undefined}
      className={`px-2 py-0.5 rounded text-sm font-mono transition-colors ${
        isActive ? "font-bold" : isFuture ? "" : "hover:bg-chess-surface"
      }`}
      style={
        isActive
          ? { color: "var(--accent-amber)", background: "rgba(212,160,23,0.1)" }
          : isFuture
            ? { color: "var(--text-primary)", opacity: 0.35, cursor: "pointer" }
            : { color: "var(--text-primary)" }
      }
    >
      {move.san}
      {move.isKeyMove && (
        <span
          style={{ color: isActive ? "var(--accent-amber)" : "inherit" }}
          aria-hidden
        >
          {" ★"}
        </span>
      )}
    </button>
  );
}
