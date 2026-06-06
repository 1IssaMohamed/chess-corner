// The Practice mode brain. No hints available here — the user plays from memory.
// Key difference from Learn mode: wrong moves record a penalty and can show a
// refutation (opponent capturing the hanging piece) so you see WHY it was bad.
// Phases: computer_move (800ms delay) ↔ awaiting_user → wrong_move → line_complete/gave_up

import { useReducer, useEffect, useCallback, useRef } from "react";
import type {
  PracticeState,
  PracticePhase,
  Opening,
  OpeningLine,
} from "@/types";
import {
  STARTING_FEN,
  buildGameUpToStep,
  getFenAtStep,
  getExpectedSan,
  isMoveLegal,
  movesMatch,
  isUsersTurn,
  buildSquareStyles,
  findRefutation,
  pieceName,
} from "@/utils/chess";

type PracticeAction =
  | { type: "START"; opening: Opening; line: OpeningLine }
  | { type: "AUTO_ADVANCE" }
  | { type: "USER_MOVE"; from: string; to: string; san: string }
  | { type: "DISMISS_WRONG" }
  | { type: "GIVE_UP" }
  | { type: "RETRY" };

function makeInitialState(): PracticeState {
  return {
    phase: "idle",
    openingId: null,
    lineId: null,
    currentStepIndex: 0,
    fen: STARTING_FEN,
    wrongMoveSan: null,
    highlightSquares: {},
    wrongSteps: [],
    refutation: null,
    refutationMessage: null,
  };
}

// Figure out which phase to start in — if step 0 is the user's move, go
// straight to awaiting_user. Otherwise, let the computer play first.
function initialPhase(opening: Opening): PracticePhase {
  return isUsersTurn(0, opening.side) ? "awaiting_user" : "computer_move";
}

function reduce(
  state: PracticeState,
  action: PracticeAction,
  opening: Opening | null,
  line: OpeningLine | null,
): PracticeState {
  switch (action.type) {
    case "START": {
      return {
        ...makeInitialState(),
        phase: initialPhase(action.opening),
        openingId: action.opening.id,
        lineId: action.line.id,
      };
    }
    case "AUTO_ADVANCE": {
      if (!line || !opening) return state;
      if (state.phase !== "computer_move") return state;
      const step = state.currentStepIndex;
      const chess = buildGameUpToStep(line, step);
      const moveSan = getExpectedSan(line, step);
      const result = chess.move(moveSan);
      if (!result) return state;
      const nextStep = step + 1;
      const fen = chess.fen();
      const lastMove = { from: result.from, to: result.to };
      if (nextStep >= line.moves.length) {
        return {
          ...state,
          phase: "line_complete",
          currentStepIndex: nextStep,
          fen,
          highlightSquares: buildSquareStyles({ lastMove }),
        };
      }
      const phase: PracticePhase = isUsersTurn(nextStep, opening.side)
        ? "awaiting_user"
        : "computer_move";
      return {
        ...state,
        phase,
        currentStepIndex: nextStep,
        fen,
        highlightSquares: buildSquareStyles({ lastMove }),
      };
    }
    case "USER_MOVE": {
      if (!line || !opening) return state;
      const expected = getExpectedSan(line, state.currentStepIndex);
      if (movesMatch(action.san, expected)) {
        const nextStep = state.currentStepIndex + 1;
        const fen = getFenAtStep(line, nextStep);
        const lastMove = { from: action.from, to: action.to };
        if (nextStep >= line.moves.length) {
          return {
            ...state,
            phase: "line_complete",
            currentStepIndex: nextStep,
            fen,
            highlightSquares: buildSquareStyles({ lastMove }),
          };
        }
        const phase: PracticePhase = isUsersTurn(nextStep, opening.side)
          ? "awaiting_user"
          : "computer_move";
        return {
          ...state,
          phase,
          currentStepIndex: nextStep,
          fen,
          highlightSquares: buildSquareStyles({ lastMove }),
        };
      }
      // Play the wrong move and look for a punishing reply — if the wrong move
      // hangs a piece, we actually show the opponent capturing it on the board
      // so the user sees WHY the move was bad, not just "that's wrong, try again".
      const afterWrong = buildGameUpToStep(line, state.currentStepIndex);
      afterWrong.move({ from: action.from, to: action.to, promotion: "q" });
      const ref = findRefutation(afterWrong.fen());

      let wrongFen = state.fen;
      let highlighted = { from: action.from, to: action.to };
      if (ref) {
        afterWrong.move({ from: ref.from, to: ref.to, promotion: "q" });
        wrongFen = afterWrong.fen();
        highlighted = { from: ref.from, to: ref.to };
      }

      const refutationObj = ref
        ? { san: ref.san, capturedPiece: ref.capturedPiece }
        : null;
      return {
        ...state,
        phase: "wrong_move",
        wrongMoveSan: action.san,
        wrongSteps: [...state.wrongSteps, state.currentStepIndex],
        fen: wrongFen,
        refutation: refutationObj,
        refutationMessage: refutationObj
          ? `That drops the ${pieceName(refutationObj.capturedPiece)} — ${action.san} runs into ${refutationObj.san}.`
          : null,
        highlightSquares: buildSquareStyles({ wrongSquares: highlighted }),
      };
    }
    case "DISMISS_WRONG": {
      // Restore the position to retry from — the refutation demo might have
      // advanced the board one extra move, so we rebuild from the line data.
      const fen = line ? getFenAtStep(line, state.currentStepIndex) : state.fen;
      return {
        ...state,
        phase: "awaiting_user",
        wrongMoveSan: null,
        refutation: null,
        refutationMessage: null,
        fen,
        highlightSquares: {},
      };
    }
    case "GIVE_UP": {
      return { ...state, phase: "gave_up" };
    }
    case "RETRY": {
      if (!opening || !line) return makeInitialState();
      return {
        ...makeInitialState(),
        phase: initialPhase(opening),
        openingId: opening.id,
        lineId: line.id,
      };
    }
    default:
      return state;
  }
}

export function usePracticeMode(
  opening: Opening | null,
  line: OpeningLine | null,
) {
  const openingRef = useRef(opening);
  const lineRef = useRef(line);
  openingRef.current = opening;
  lineRef.current = line;

  const [state, dispatchRaw] = useReducer(
    (s: PracticeState, a: PracticeAction) =>
      reduce(s, a, openingRef.current, lineRef.current),
    makeInitialState(),
  );

  const stateRef = useRef(state);
  stateRef.current = state;

  const dispatch = useCallback(
    (action: PracticeAction) => dispatchRaw(action),
    [],
  );

  useEffect(() => {
    if (!opening || !line) return;
    dispatch({ type: "START", opening, line });
  }, [opening?.id, line?.id]);

  // When it's the computer's turn, wait 800ms then play its move automatically.
  // The delay makes it feel like the opponent is "thinking" rather than instant.
  useEffect(() => {
    if (state.phase !== "computer_move") return;
    const timer = setTimeout(() => {
      dispatch({ type: "AUTO_ADVANCE" });
    }, 800);
    return () => clearTimeout(timer);
  }, [state.phase, state.currentStepIndex]);

  const handleUserMove = useCallback((from: string, to: string): boolean => {
    const s = stateRef.current;
    if (s.phase !== "awaiting_user") return false;
    const o = openingRef.current;
    const l = lineRef.current;
    if (!o || !l) return false;
    const chess = buildGameUpToStep(l, s.currentStepIndex);
    const san = isMoveLegal(chess, from, to);
    if (!san) return false;
    dispatch({ type: "USER_MOVE", from, to, san });
    return true;
  }, []);

  const giveUp = useCallback(() => dispatch({ type: "GIVE_UP" }), []);
  const retry = useCallback(() => dispatch({ type: "RETRY" }), []);
  const dismissWrong = useCallback(
    () => dispatch({ type: "DISMISS_WRONG" }),
    [],
  );

  return { state, handleUserMove, giveUp, retry, dismissWrong };
}
