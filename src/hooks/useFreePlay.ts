// Drives the free-play board: a live, unscripted game starting from some position.
// Holds the move list (SAN) and rebuilds a fresh Chess instance from it every time
// — never a Chess instance held across renders, same rule as the rest of the app.
//
// Two modes (user-toggled):
//   "engine" — you play your side, Stockfish replies as the opponent
//   "both"   — you move both colours yourself and just watch the eval bar
//
// The engine also feeds the eval bar after every position change; stale evals from
// superseded positions are dropped via an id guard.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import type { EngineScore, FreePlayMode, Side } from "@/types";
import { buildGameFromMoves } from "@/utils/chess";
import { parseUciMove, type StockfishEngine } from "@/utils/engine";
import { sideToMoveFromFen, toWhitePerspective } from "@/utils/evalScore";

export function useFreePlay(
  startFen: string,
  userSide: Side,
  engineRef: MutableRefObject<StockfishEngine | null>,
  engineReady: boolean,
) {
  const [moves, setMoves] = useState<string[]>([]);
  const [mode, setMode] = useState<FreePlayMode>("engine");
  const [score, setScore] = useState<EngineScore | null>(null);
  const [thinking, setThinking] = useState(false); // eval in progress
  const [engineThinking, setEngineThinking] = useState(false); // computing a reply
  // Browse the move history without un-playing moves. null = follow the live
  // position; a number is the ply being viewed (0 = start FEN).
  const [viewIndex, setViewIndex] = useState<number | null>(null);

  // Starting a new position (different line/step) resets the board.
  useEffect(() => {
    setMoves([]);
    setScore(null);
    setViewIndex(null);
  }, [startFen]);

  const game = useMemo(
    () => buildGameFromMoves(startFen, moves),
    [startFen, moves],
  );
  const turn: Side = game.turn() === "w" ? "white" : "black";
  const isGameOver = game.isGameOver();

  // When browsing the past, the board shows an earlier position; otherwise it
  // shows the live game. The eval bar follows whatever is on the board.
  const isBrowsing = viewIndex !== null && viewIndex < moves.length;
  const displayGame = useMemo(
    () =>
      isBrowsing
        ? buildGameFromMoves(startFen, moves.slice(0, viewIndex ?? 0))
        : game,
    [isBrowsing, startFen, moves, viewIndex, game],
  );
  const fen = displayGame.fen();

  const lastMove = useMemo(() => {
    const history = displayGame.history({ verbose: true });
    const last = history[history.length - 1];
    return last ? { from: last.from, to: last.to } : null;
  }, [displayGame]);

  // No moving while reviewing history — step back to the live end first.
  const isUserTurn =
    !isBrowsing &&
    !engineThinking &&
    !isGameOver &&
    (mode === "both" || turn === userSide);

  const playMove = useCallback(
    (from: string, to: string): boolean => {
      const chess = buildGameFromMoves(startFen, moves);
      let result;
      try {
        result = chess.move({ from, to, promotion: "q" });
      } catch {
        return false;
      }
      if (!result) return false;

      setMoves((cur) => [...cur, result.san]);
      setViewIndex(null); // jump back to the live position after moving

      // In engine mode, let Stockfish answer if it's now the opponent's turn.
      const replySide: Side = chess.turn() === "w" ? "white" : "black";
      const engine = engineRef.current;
      if (
        mode === "engine" &&
        engine &&
        engineReady &&
        replySide !== userSide &&
        !chess.isGameOver()
      ) {
        setEngineThinking(true);
        engine.bestMove(chess.fen()).then((uci) => {
          if (uci) {
            setMoves((cur) => {
              const c2 = buildGameFromMoves(startFen, cur);
              try {
                const rep = c2.move(parseUciMove(uci));
                if (rep) return [...cur, rep.san];
              } catch {
                /* position moved on under us — ignore */
              }
              return cur;
            });
          }
          setEngineThinking(false);
        });
      }
      return true;
    },
    [startFen, moves, mode, userSide, engineReady, engineRef],
  );

  const takeBack = useCallback(() => {
    setViewIndex(null);
    setMoves((cur) => {
      if (cur.length === 0) return cur;
      const next = cur.slice(0, -1);
      // In engine mode, step back past the engine's reply too, so the board lands
      // back on the user's turn. Side to move alternates from the start FEN by
      // move-count parity, so no need to rebuild the game just to read the turn.
      const startSide = sideToMoveFromFen(startFen);
      const flipped: Side = startSide === "white" ? "black" : "white";
      const sideToMove = next.length % 2 === 0 ? startSide : flipped;
      if (mode === "engine" && next.length > 0 && sideToMove !== userSide) {
        return next.slice(0, -1);
      }
      return next;
    });
  }, [mode, startFen, userSide]);

  const reset = useCallback(() => {
    setViewIndex(null);
    setMoves([]);
  }, []);

  // History browsing. Scroll/step back through played moves and forward again,
  // without removing anything. viewForward returns to the live position at the end.
  const viewBack = useCallback(() => {
    setViewIndex((cur) => {
      const base = cur === null ? moves.length : cur;
      return Math.max(0, base - 1);
    });
  }, [moves.length]);

  const viewForward = useCallback(() => {
    setViewIndex((cur) => {
      if (cur === null) return null;
      const next = cur + 1;
      return next >= moves.length ? null : next;
    });
  }, [moves.length]);

  const canViewBack = (viewIndex ?? moves.length) > 0;
  const canViewForward = isBrowsing;

  // Re-evaluate after every position change. The id guard means only the latest
  // request is allowed to update the bar. Scores are cached by FEN so browsing
  // back and forth through the move history never re-runs the engine on a
  // position it has already judged.
  const evalCacheRef = useRef<Map<string, EngineScore>>(new Map());
  const evalIdRef = useRef(0);
  useEffect(() => {
    const id = ++evalIdRef.current;
    const cached = evalCacheRef.current.get(fen);
    if (cached) {
      setScore(cached);
      setThinking(false);
      return;
    }
    const engine = engineRef.current;
    if (!engineReady || !engine) return;
    setThinking(true);
    engine.evaluate(fen).then((raw) => {
      if (id !== evalIdRef.current) return; // a newer position superseded this
      const sc = toWhitePerspective(raw, sideToMoveFromFen(fen));
      evalCacheRef.current.set(fen, sc);
      setScore(sc);
      setThinking(false);
    });
  }, [fen, engineReady, engineRef]);

  return {
    fen,
    turn,
    moves,
    mode,
    setMode,
    score,
    thinking,
    engineThinking,
    isUserTurn,
    isGameOver,
    lastMove,
    playMove,
    takeBack,
    reset,
    viewBack,
    viewForward,
    canViewBack,
    canViewForward,
    isBrowsing,
  };
}
