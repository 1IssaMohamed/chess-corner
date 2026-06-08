// The "see the idea" mini-board that auto-plays after line_complete.
// Shows continuation moves with a 900ms delay between each, then stops and lets
// you step through manually or replay. The board is read-only — no dragging.

import { useState, useEffect, useMemo } from "react";
import type { OpeningLine, Side } from "@/types";
import { buildContinuationFens } from "@/utils/chess";
import ChessboardWrapper from "@/components/board/ChessboardWrapper";
import Button from "@/components/ui/Button";

interface ContinuationViewerProps {
  line: OpeningLine;
  orientation: Side;
  // Branch off into free play from the position currently shown on the mini-board.
  // Receives the continuation ply index (0 = line end, then each continuation move).
  onPlayFromHere?: (continuationStep: number) => void;
}

export default function ContinuationViewer({
  line,
  orientation,
  onPlayFromHere,
}: ContinuationViewerProps) {
  const continuation = line.continuationMoves ?? [];
  const fens = useMemo(() => buildContinuationFens(line, continuation), [line]);

  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    if (step >= fens.length - 1) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStep((s) => s + 1), 900);
    return () => clearTimeout(timer);
  }, [playing, step, fens.length]);

  const goBack = () => {
    setPlaying(false);
    setStep((s) => Math.max(0, s - 1));
  };
  const goNext = () => {
    setPlaying(false);
    setStep((s) => Math.min(fens.length - 1, s + 1));
  };
  const replay = () => {
    setStep(0);
    setPlaying(true);
  };

  // step is the FEN index (0 = starting position of continuation), so the move
  // that GOT us to this position is continuation[step - 1].
  const currentMove = step > 0 ? continuation[step - 1] : null;
  const atStart = step === 0;
  const atEnd = step >= fens.length - 1;

  return (
    <div
      className="rounded-xl border p-4 mt-3 animate-fade-in"
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--accent-amber)",
      }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-wider mb-3"
        style={{ color: "var(--accent-amber)" }}
      >
        Why this line works
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Board + step controls */}
        <div className="flex-shrink-0 sm:w-[200px]">
          <ChessboardWrapper
            fen={fens[step]}
            orientation={orientation}
            isDraggable={false}
            animationDuration={400}
          />

          {/* Prev / label / Next */}
          <div className="flex items-center gap-1 mt-2">
            <button
              onClick={goBack}
              disabled={atStart}
              className="px-2 py-1 rounded text-sm transition-opacity disabled:opacity-30"
              style={{
                color: "var(--text-secondary)",
                cursor: atStart ? "default" : "pointer",
              }}
            >
              ←
            </button>
            <span
              className="flex-1 text-center text-xs font-mono"
              style={{ color: "var(--text-secondary)" }}
            >
              {currentMove ? currentMove.san : "start"}
            </span>
            <button
              onClick={goNext}
              disabled={atEnd}
              className="px-2 py-1 rounded text-sm transition-opacity disabled:opacity-30"
              style={{
                color: "var(--text-secondary)",
                cursor: atEnd ? "default" : "pointer",
              }}
            >
              →
            </button>
          </div>

          {atEnd && (
            <Button
              variant="ghost"
              size="sm"
              onClick={replay}
              className="w-full mt-1"
            >
              ↺ Replay
            </Button>
          )}

          {/* Branch off into free play from the position currently on the board */}
          {onPlayFromHere && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => onPlayFromHere(step)}
              className="w-full mt-1"
              title="Play this position out against Stockfish with an eval bar"
            >
              ▶ Play from here
            </Button>
          )}
        </div>

        {/* Explanation panel */}
        <div className="flex-1 min-w-0">
          {/* Per-move idea — shown when the current step has one */}
          {currentMove?.idea && (
            <div
              className="rounded-lg p-3 mb-3 border animate-fade-in"
              style={{
                background: "rgba(212,160,23,0.08)",
                borderColor: "var(--accent-amber)",
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-primary)" }}
              >
                {currentMove.idea}
              </p>
            </div>
          )}

          {/* Overall strategic idea — always present, dimmed when a per-move idea is active */}
          {line.continuationIdea && (
            <p
              className="text-sm leading-relaxed"
              style={{
                color: currentMove?.idea
                  ? "var(--text-muted)"
                  : "var(--text-primary)",
              }}
            >
              {line.continuationIdea}
            </p>
          )}

          {/* Move sequence — highlights the current move */}
          {continuation.length > 0 && (
            <p className="text-xs font-mono mt-3">
              {continuation.map((move, i) => (
                <span
                  key={i}
                  style={{
                    color:
                      i === step - 1
                        ? "var(--accent-amber)"
                        : "var(--text-muted)",
                    fontWeight: i === step - 1 ? 700 : 400,
                  }}
                >
                  {move.san}{" "}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
