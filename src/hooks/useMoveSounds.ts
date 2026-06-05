import { useEffect, useRef } from "react";
import { playMove, playWrong, playComplete } from "@/utils/sounds";

// Plays a click on each move, a buzz on a wrong move, and a chime on completion.
// Works for both Learn and Practice phases (the excluded phases simply never occur
// in one mode or the other).
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
