import type { PracticePhase } from "@/types";
import Button from "@/components/ui/Button";

interface PracticeControlsProps {
  phase: PracticePhase;
  onGiveUp: () => void;
  onRetry: () => void;
  onNextLine: () => void;
}

export default function PracticeControls({
  phase,
  onGiveUp,
  onRetry,
  onNextLine,
}: PracticeControlsProps) {
  const isDone = phase === "line_complete" || phase === "gave_up";

  return (
    <div className="flex items-center gap-2">
      {!isDone && (
        <Button variant="danger" size="sm" onClick={onGiveUp}>
          Give Up
        </Button>
      )}
      {isDone && (
        <>
          <Button variant="secondary" size="sm" onClick={onRetry}>
            ↺ Retry
          </Button>
          <Button variant="primary" size="sm" onClick={onNextLine}>
            Next Line →
          </Button>
        </>
      )}
    </div>
  );
}
