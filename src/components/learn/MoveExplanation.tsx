// Shows the current move's number, SAN, "Your move / Computer plays" label,
// and explanation text. Gets remounted on each step change via key={stepIndex}
// in LearnPage, which re-fires the fade-in animation.

import type { MoveAnnotation, Side } from "@/types";
import { isUsersTurn } from "@/utils/chess";

interface MoveExplanationProps {
  move: MoveAnnotation | null;
  stepIndex: number;
  totalSteps: number;
  learningSide: Side;
}

export default function MoveExplanation({
  move,
  stepIndex,
  totalSteps,
  learningSide,
}: MoveExplanationProps) {
  if (!move) {
    return (
      <div
        className="rounded-lg p-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Select a line to begin learning.
        </p>
      </div>
    );
  }

  // Convert linear step index to chess move number (1-based, one number per pair
  // of moves). Step 0 and 1 = move 1, step 2 and 3 = move 2, etc.
  const moveNumber = Math.floor(stepIndex / 2) + 1;
  const movingColor = stepIndex % 2 === 0 ? "White" : "Black";
  const isYourMove = isUsersTurn(stepIndex, learningSide);

  return (
    <div
      className="rounded-lg p-4 animate-fade-in"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--text-secondary)" }}
        >
          Move {moveNumber} ({movingColor})
        </span>
        <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
          {stepIndex + 1}/{totalSteps}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span
          className="font-mono text-2xl font-bold"
          style={{ color: "var(--accent-amber)" }}
        >
          {move.san}
        </span>
        {move.isKeyMove && (
          <span
            className="text-xs px-1.5 py-0.5 rounded"
            style={{
              background: "rgba(212,160,23,0.15)",
              color: "var(--accent-amber)",
            }}
          >
            KEY MOVE
          </span>
        )}
        {isYourMove ? (
          <span className="ml-auto text-xs text-green-400 font-medium">
            Your move
          </span>
        ) : (
          <span
            className="ml-auto text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            Computer plays
          </span>
        )}
      </div>

      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-primary)" }}
      >
        {move.explanation}
      </p>
    </div>
  );
}
