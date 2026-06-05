import type { LearnState } from "@/types";
import Button from "@/components/ui/Button";

interface LearnControlsProps {
  state: LearnState;
  totalSteps: number;
  onBack: () => void;
  onForward: () => void;
  onRestart: () => void;
  onHint: () => void;
  onDismissHint: () => void;
}

export default function LearnControls({
  state,
  totalSteps,
  onBack,
  onForward,
  onRestart,
  onHint,
  onDismissHint,
}: LearnControlsProps) {
  const { phase, currentStepIndex, hintCount } = state;

  const isActive =
    phase !== "idle" && phase !== "intro" && phase !== "line_complete";
  const canGoBack = isActive && currentStepIndex > 0;
  const canGoForward = isActive && currentStepIndex < totalSteps;
  const hintActive = phase === "hint_shown";
  const canHint = phase === "awaiting_user";

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Button
        variant="secondary"
        size="sm"
        onClick={onBack}
        disabled={!canGoBack}
        title="Go back one move (←)"
      >
        ← Back
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={onForward}
        disabled={!canGoForward}
        title="Advance one move (→)"
      >
        Forward →
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={onRestart}
        title="Restart from the beginning"
      >
        ↺ Restart
      </Button>

      {hintActive ? (
        <Button
          variant="primary"
          size="sm"
          onClick={onDismissHint}
          title="Hide hint"
        >
          Hide hint
        </Button>
      ) : (
        <Button
          variant={hintCount > 0 ? "primary" : "secondary"}
          size="sm"
          onClick={onHint}
          disabled={!canHint}
          title="Show hint"
        >
          Hint{hintCount > 0 ? ` (${hintCount})` : ""}
        </Button>
      )}
    </div>
  );
}
