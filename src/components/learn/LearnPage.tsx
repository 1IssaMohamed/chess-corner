import {
  useParams,
  useNavigate,
  Link,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useMemo, useRef } from "react";
import { findLine } from "@/data/openings";
import { useLearnMode } from "@/hooks/useLearnMode";
import { useProgress } from "@/hooks/useProgress";
import { useClickToMove } from "@/hooks/useClickToMove";
import { useMoveSounds } from "@/hooks/useMoveSounds";
import LineCompleteModal from "./LineCompleteModal";
import { getOrderedLines } from "@/utils/progress";
import { getExpectedSan, isUsersTurn } from "@/utils/chess";
import ChessboardWrapper from "@/components/board/ChessboardWrapper";
import MoveExplanation from "./MoveExplanation";
import WrongMoveOverlay from "./WrongMoveOverlay";
import LearnControls from "./LearnControls";
import MoveList from "./MoveList";
import LineSelector from "./LineSelector";
import Button from "@/components/ui/Button";

export default function LearnPage() {
  const { openingId, lineId } = useParams<{
    openingId: string;
    lineId: string;
  }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isSeq = searchParams.get("seq") === "1";
  const { markSeen } = useProgress();

  const { opening, line } = findLine(openingId ?? "", lineId ?? "");

  const {
    state,
    goBack,
    browseTo,
    restart,
    jumpToStep,
    showHint,
    dismissHint,
    dismissWrong,
    handleUserMove,
  } = useLearnMode(opening ?? null, line ?? null);

  useEffect(() => {
    if (state.phase === "line_complete" && openingId && lineId) {
      markSeen(openingId, lineId);
    }
  }, [state.phase, openingId, lineId, markSeen]);

  useMoveSounds(state.currentStepIndex, state.phase);

  // Current step held in a ref so the nav listeners bind once, not per move.
  const stepRef = useRef(state.currentStepIndex);
  stepRef.current = state.currentStepIndex;

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goBack();
      if (e.key === "ArrowRight") browseTo(stepRef.current + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goBack, browseTo]);

  // Scroll wheel navigation on the board column
  const boardColRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = boardColRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) goBack();
      else browseTo(stepRef.current + 1);
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [goBack, browseTo]);

  if (!opening || !line) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
        <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
          Opening not found.
        </p>
        <Link
          to="/"
          className="text-sm underline"
          style={{ color: "var(--accent-amber)" }}
        >
          Go back home
        </Link>
      </div>
    );
  }

  const isUserTurn =
    (state.phase === "awaiting_user" ||
      state.phase === "hint_shown" ||
      state.phase === "browsing") &&
    isUsersTurn(state.currentStepIndex, opening.side);

  // Click-to-move
  const { onSquareClick, clickHighlights } = useClickToMove(
    state.fen,
    isUserTurn,
    handleUserMove,
  );

  const mergedSquareStyles = { ...state.highlightSquares, ...clickHighlights };

  const currentMove = line.moves[state.currentStepIndex] ?? null;
  const expectedSan =
    state.currentStepIndex < line.moves.length
      ? getExpectedSan(line, state.currentStepIndex)
      : "";

  // Detect if wrong move belongs to another line in the opening
  const wrongMoveAlternativeLine =
    state.wrongMoveSan && opening
      ? (opening.lines.find(
          (l) =>
            l.id !== line.id &&
            l.moves[state.currentStepIndex]?.san === state.wrongMoveSan,
        ) ?? null)
      : null;

  const arrows = useMemo(
    () =>
      state.arrowHint
        ? [{ startSquare: state.arrowHint[0], endSquare: state.arrowHint[1] }]
        : [],
    [state.arrowHint],
  );

  // Stable across the session — opening and line don't change while on this page
  const nextSeqLine = useMemo(() => {
    const ordered = getOrderedLines(opening);
    const idx = ordered.findIndex((l) => l.id === line.id);
    return ordered[idx + 1] ?? null;
  }, [opening, line.id]);

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-6 flex flex-col gap-4">
      {/* Breadcrumb + mode switch */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 text-sm">
          <Link
            to={`/opening/${opening.id}`}
            className="hover:opacity-70 transition-opacity"
            style={{ color: "var(--text-secondary)", textDecoration: "none" }}
          >
            {opening.name}
          </Link>
          <span style={{ color: "var(--text-muted)" }}>/</span>
          <span style={{ color: "var(--text-primary)" }}>{line.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-xs px-2.5 py-1 rounded-full font-semibold"
            style={{
              background: "var(--accent-amber-dim)",
              color: "var(--accent-amber)",
            }}
          >
            Learn
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/practice/${opening.id}/${line.id}`)}
          >
            Practice mode →
          </Button>
        </div>
      </div>

      <LineSelector opening={opening} currentLineId={line.id} mode="learn" />

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Board + controls */}
        <div
          ref={boardColRef}
          className="w-full lg:w-[520px] lg:flex-shrink-0 flex flex-col gap-3"
        >
          <ChessboardWrapper
            fen={state.fen}
            orientation={opening.side}
            onPieceDrop={handleUserMove}
            onSquareClick={onSquareClick}
            isDraggable={isUserTurn}
            squareStyles={mergedSquareStyles}
            arrows={arrows}
          />

          <LearnControls
            state={state}
            totalSteps={line.moves.length}
            onBack={goBack}
            onForward={() => browseTo(state.currentStepIndex + 1)}
            onRestart={restart}
            onHint={showHint}
            onDismissHint={dismissHint}
          />

          {/* Hint banner */}
          {state.phase === "hint_shown" && state.arrowHint && (
            <div
              className="rounded-xl border p-3 animate-fade-in"
              style={{
                background: "var(--accent-amber-dim)",
                borderColor: "var(--accent-amber)",
              }}
            >
              <p
                className="text-sm font-medium"
                style={{ color: "var(--accent-amber)" }}
              >
                Hint: look at the highlighted piece
              </p>
              {currentMove?.explanation && (
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {currentMove.explanation}
                </p>
              )}
            </div>
          )}

          <WrongMoveOverlay
            visible={state.phase === "wrong_move"}
            wrongSan={state.wrongMoveSan ?? ""}
            correctSan={expectedSan}
            correctMoveExplanation={currentMove?.explanation}
            warningMessage={currentMove?.wrongMoveWarning}
            alternativeLine={wrongMoveAlternativeLine?.name ?? null}
            onDismiss={dismissWrong}
          />

          {state.phase === "line_complete" && (
            <LineCompleteModal
              mode="learn"
              line={line}
              orientation={opening.side}
              isSeq={isSeq}
              nextSeqLine={nextSeqLine}
              onRestart={restart}
              onPractice={() => navigate(`/practice/${opening.id}/${line.id}`)}
              onNextSeqLine={() =>
                nextSeqLine &&
                navigate(`/learn/${opening.id}/${nextSeqLine.id}?seq=1`)
              }
              onAllDone={() => navigate(`/opening/${opening.id}`)}
            />
          )}
        </div>

        {/* Info panel */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          <MoveExplanation
            key={state.currentStepIndex}
            move={currentMove}
            stepIndex={state.currentStepIndex}
            totalSteps={line.moves.length}
            learningSide={opening.side}
          />

          {state.currentStepIndex === 0 && state.phase !== "line_complete" && (
            <div
              className="rounded-xl p-4 border"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {line.description}
              </p>
            </div>
          )}

          <MoveList
            moves={line.moves}
            currentIndex={state.currentStepIndex}
            onClickStep={jumpToStep}
          />

          <p className="text-xs mt-auto" style={{ color: "var(--text-muted)" }}>
            ← → arrow keys or scroll to navigate · click or drag pieces to play
          </p>
        </div>
      </div>
    </div>
  );
}
