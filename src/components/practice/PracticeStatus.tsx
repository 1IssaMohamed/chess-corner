// Shows your current position in the line, mistake count (✗ marks), and a
// status label that changes based on the current phase.

import type { PracticePhase } from "@/types";

interface PracticeStatusProps {
  phase: PracticePhase;
  penaltyCount: number;
  stepIndex: number;
  totalSteps: number;
}

export default function PracticeStatus({
  phase,
  penaltyCount,
  stepIndex,
  totalSteps,
}: PracticeStatusProps) {
  // Cap the displayed ✗ marks at 5 — more than that and we just show the count
  // as a number. Otherwise the row gets too wide.
  const penalties = Math.min(penaltyCount, 5);

  return (
    <div
      className="rounded-lg p-4"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Practice Mode
        </span>
        {phase === "line_complete" && penaltyCount === 0 && (
          <span className="text-green-400 text-sm font-bold">Perfect!</span>
        )}
        {phase === "gave_up" && (
          <span className="text-red-400 text-sm">Gave up</span>
        )}
      </div>

      <div className="flex items-center justify-between text-sm mb-3">
        <span style={{ color: "var(--text-secondary)" }}>
          Move {Math.min(stepIndex, totalSteps)}/{totalSteps}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: penalties }).map((_, i) => (
            <span key={i} className="text-red-400">
              ✗
            </span>
          ))}
          {penaltyCount > 5 && (
            <span className="text-red-400 text-xs">{penaltyCount}×</span>
          )}
          {penaltyCount === 0 && (
            <span className="text-green-500 text-xs">No mistakes</span>
          )}
        </div>
      </div>

      <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
        {phase === "awaiting_user" && "→ Your turn"}
        {phase === "computer_move" && "... Opponent thinking"}
        {phase === "wrong_move" && "✗ Wrong move — try again"}
        {phase === "line_complete" && (
          <span className="text-green-400">
            {penaltyCount === 0
              ? "✓ Perfect run!"
              : `✓ Done (${penaltyCount} mistake${penaltyCount !== 1 ? "s" : ""})`}
          </span>
        )}
        {phase === "gave_up" && (
          <span className="text-red-400">You gave up this line</span>
        )}
      </div>
    </div>
  );
}
