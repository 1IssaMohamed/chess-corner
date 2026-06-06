import { useEffect, useRef } from "react";
import { playMove, playWrong, playComplete } from "@/utils/sounds";

// Plays sound effects based on what just changed. We track previous values in
// refs so we can detect when step or phase actually changes inside the effect.
// Using refs instead of state means we don't trigger extra re-renders.
export function useMoveSounds(currentStepIndex: number, phase: string) {
  const prevStep = useRef(currentStepIndex);
  const prevPhase = useRef(phase);

  useEffect(() => {
    const stepChanged = currentStepIndex !== prevStep.current;
    const phaseChanged = phase !== prevPhase.current;

    if (stepChanged && phase !== "idle" && phase !== "intro") {
      playMove();
    }
    if (phaseChanged && phase === "wrong_move") {
      playWrong();
    }
    if (phaseChanged && phase === "line_complete") {
      playComplete();
    }

    prevStep.current = currentStepIndex;
    prevPhase.current = phase;
  }, [currentStepIndex, phase]);
}
