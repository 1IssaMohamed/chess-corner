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
      // Play the wrong move out and look for a punishing reply, so the user
      // sees *why* the move was bad instead of just "try again". If it hangs
      // material, advance the board through the capture and highlight it;
      // otherwise leave the board on the wrong move.
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
      // Restore the position the user must retry from (the refutation demo, if
      // any, advanced the board past it).
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
