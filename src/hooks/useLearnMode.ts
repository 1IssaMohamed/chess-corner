// The Learn mode brain. All state lives in a useReducer so the whole flow is
// predictable: dispatch an action, get a new state, React re-renders.
// Phases: idle → playing → awaiting_user ↔ wrong_move/hint_shown → line_complete
// "browsing" is a special phase for when you're manually stepping through moves —
// it works like "playing" but does NOT auto-advance the computer's moves.

import { useReducer, useEffect, useCallback, useRef } from "react";
import type { LearnState, LearnPhase, Opening, OpeningLine } from "@/types";
import {
  STARTING_FEN,
  buildGameUpToStep,
  getFenAtStep,
  getExpectedSan,
  isMoveLegal,
  movesMatch,
  isUsersTurn,
  buildSquareStyles,
} from "@/utils/chess";

type LearnAction =
  | { type: "START"; opening: Opening; line: OpeningLine }
  | { type: "BEGIN" }
  | { type: "ADVANCE" }
  | { type: "BACK" }
  | { type: "BROWSE"; index: number }
  | { type: "RESTART" }
  | { type: "JUMP"; index: number }
  | { type: "USER_MOVE"; from: string; to: string; san: string }
  | { type: "DISMISS_WRONG" }
  | { type: "HINT" }
  | { type: "DISMISS_HINT" }
  | { type: "COMPLETE" };

function makeInitialState(): LearnState {
  return {
    phase: "idle",
    openingId: null,
    lineId: null,
    currentStepIndex: 0,
    fen: STARTING_FEN,
    wrongMoveSan: null,
    hintCount: 0,
    highlightSquares: {},
    arrowHint: null,
  };
}

// Jumps to any step in the line. restPhase decides what happens when you land on
// a computer move: "playing" kicks off the 700ms auto-advance timer, "browsing"
// just stops there so you can look around without the computer rushing ahead.
function goToIndex(
  state: LearnState,
  opening: Opening,
  line: OpeningLine,
  index: number,
  restPhase: LearnPhase,
): LearnState {
  const idx = Math.max(0, Math.min(index, line.moves.length));
  const fen = getFenAtStep(line, idx);
  const phase: LearnPhase =
    idx >= line.moves.length
      ? "line_complete"
      : isUsersTurn(idx, opening.side)
        ? "awaiting_user"
        : restPhase;
  return {
    ...state,
    phase,
    currentStepIndex: idx,
    fen,
    highlightSquares: {},
    arrowHint: null,
  };
}

function reduce(
  state: LearnState,
  action: LearnAction,
  opening: Opening | null,
  line: OpeningLine | null,
): LearnState {
  switch (action.type) {
    case "START": {
      return {
        ...makeInitialState(),
        phase: "intro",
        openingId: action.opening.id,
        lineId: action.line.id,
      };
    }
    case "BEGIN": {
      if (!line) return state;
      return {
        ...state,
        phase: "playing",
        currentStepIndex: 0,
        fen: STARTING_FEN,
        highlightSquares: {},
        arrowHint: null,
      };
    }
    case "ADVANCE": {
      if (!line || !opening) return state;
      const nextStep = state.currentStepIndex + 1;
      if (nextStep > line.moves.length)
        return { ...state, phase: "line_complete" };
      if (nextStep === line.moves.length) {
        const fen = getFenAtStep(line, nextStep);
        return {
          ...state,
          phase: "line_complete",
          currentStepIndex: nextStep,
          fen,
          highlightSquares: {},
          arrowHint: null,
        };
      }
      const fen = getFenAtStep(line, nextStep);
      const prev = line.moves[nextStep - 1];
      const chess = buildGameUpToStep(line, nextStep - 1);
      const lastMoveParsed = chess.move(prev.san);
      const lastMove = lastMoveParsed
        ? { from: lastMoveParsed.from, to: lastMoveParsed.to }
        : null;
      const phase: LearnPhase = isUsersTurn(nextStep, opening.side)
        ? "awaiting_user"
        : "playing";
      return {
        ...state,
        phase,
        currentStepIndex: nextStep,
        fen,
        highlightSquares: buildSquareStyles({ lastMove }),
        arrowHint: null,
      };
    }
    case "BACK": {
      if (!line || !opening) return state;
      return goToIndex(
        state,
        opening,
        line,
        state.currentStepIndex - 1,
        "browsing",
      );
    }
    case "BROWSE": {
      if (!line || !opening) return state;
      return goToIndex(state, opening, line, action.index, "browsing");
    }
    case "RESTART": {
      if (!line || !opening) return state;
      return {
        ...state,
        phase: "playing",
        currentStepIndex: 0,
        fen: STARTING_FEN,
        wrongMoveSan: null,
        hintCount: 0,
        highlightSquares: {},
        arrowHint: null,
      };
    }
    case "JUMP": {
      if (!line || !opening) return state;
      return goToIndex(state, opening, line, action.index, "playing");
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
            arrowHint: null,
          };
        }
        const phase: LearnPhase = isUsersTurn(nextStep, opening.side)
          ? "awaiting_user"
          : "playing";
        return {
          ...state,
          phase,
          currentStepIndex: nextStep,
          fen,
          highlightSquares: buildSquareStyles({ lastMove }),
          arrowHint: null,
        };
      }
      return {
        ...state,
        phase: "wrong_move",
        wrongMoveSan: action.san,
        highlightSquares: buildSquareStyles({
          wrongSquares: { from: action.from, to: action.to },
        }),
      };
    }
    case "DISMISS_WRONG": {
      if (!opening || !line) return state;
      return {
        ...state,
        phase: "awaiting_user",
        wrongMoveSan: null,
        highlightSquares: {},
      };
    }
    case "HINT": {
      if (!line) return state;
      const expectedSan = getExpectedSan(line, state.currentStepIndex);
      const chess = buildGameUpToStep(line, state.currentStepIndex);
      const moves = chess.moves({ verbose: true });
      const target = moves.find((m) => movesMatch(m.san, expectedSan));
      const arrowHint: [string, string] | null = target
        ? [target.from, target.to]
        : null;
      return {
        ...state,
        phase: "hint_shown",
        hintCount: state.hintCount + 1,
        arrowHint,
        highlightSquares: arrowHint
          ? buildSquareStyles({
              hintSquares: { from: arrowHint[0], to: arrowHint[1] },
            })
          : state.highlightSquares,
      };
    }
    case "DISMISS_HINT": {
      return {
        ...state,
        phase: "awaiting_user",
        arrowHint: null,
        highlightSquares: {},
      };
    }
    case "COMPLETE": {
      return { ...state, phase: "line_complete" };
    }
    default:
      return state;
  }
}

export function useLearnMode(
  opening: Opening | null,
  line: OpeningLine | null,
) {
  // Refs so closures (event listeners, timeouts) always see the latest values
  // without needing to be recreated every time opening/line changes.
  const openingRef = useRef(opening);
  const lineRef = useRef(line);
  openingRef.current = opening;
  lineRef.current = line;

  const [state, dispatchRaw] = useReducer(
    (s: LearnState, a: LearnAction) =>
      reduce(s, a, openingRef.current, lineRef.current),
    makeInitialState(),
  );

  // Same idea — handleUserMove reads from this ref so it doesn't need to be
  // re-created every time state changes (which would break drag/click handlers).
  const stateRef = useRef(state);
  stateRef.current = state;

  const dispatch = useCallback(
    (action: LearnAction) => dispatchRaw(action),
    [],
  );

  useEffect(() => {
    if (!opening || !line) return;
    dispatch({ type: "START", opening, line });
  }, [opening?.id, line?.id]);

  useEffect(() => {
    if (state.phase === "intro") {
      dispatch({ type: "BEGIN" });
    }
  }, [state.phase]);

  // Auto-advance the computer's moves. When phase is "playing" and it's not
  // the user's turn, we wait 700ms then play the next move automatically.
  // If it IS the user's turn somehow, we dispatch JUMP to flip to awaiting_user.
  useEffect(() => {
    if (state.phase !== "playing") return;
    if (!opening || !line) return;
    if (isUsersTurn(state.currentStepIndex, opening.side)) {
      dispatch({ type: "JUMP", index: state.currentStepIndex });
      return;
    }
    const timer = setTimeout(() => {
      dispatch({ type: "ADVANCE" });
    }, 700);
    return () => clearTimeout(timer);
  }, [state.phase, state.currentStepIndex]);

  // Called by the board when the user drags or clicks a piece. Returns true if
  // the move was accepted (legal + correct), false if not. The board uses this
  // to know whether to animate the piece or snap it back.
  const handleUserMove = useCallback((from: string, to: string): boolean => {
    const s = stateRef.current;
    if (
      s.phase !== "awaiting_user" &&
      s.phase !== "hint_shown" &&
      s.phase !== "browsing"
    )
      return false;
    const o = openingRef.current;
    const l = lineRef.current;
    if (!o || !l) return false;
    if (!isUsersTurn(s.currentStepIndex, o.side)) return false;
    const chess = buildGameUpToStep(l, s.currentStepIndex);
    const san = isMoveLegal(chess, from, to);
    if (!san) return false;
    dispatch({ type: "USER_MOVE", from, to, san });
    return true;
  }, []);

  const advance = useCallback(() => dispatch({ type: "ADVANCE" }), []);
  const goBack = useCallback(() => dispatch({ type: "BACK" }), []);
  const browseTo = useCallback(
    (index: number) => dispatch({ type: "BROWSE", index }),
    [],
  );
  const restart = useCallback(() => dispatch({ type: "RESTART" }), []);
  const jumpToStep = useCallback(
    (index: number) => dispatch({ type: "JUMP", index }),
    [],
  );
  const showHint = useCallback(() => dispatch({ type: "HINT" }), []);
  const dismissHint = useCallback(() => dispatch({ type: "DISMISS_HINT" }), []);
  const dismissWrong = useCallback(
    () => dispatch({ type: "DISMISS_WRONG" }),
    [],
  );

  return {
    state,
    advance,
    goBack,
    browseTo,
    restart,
    jumpToStep,
    showHint,
    dismissHint,
    dismissWrong,
    handleUserMove,
  };
}
