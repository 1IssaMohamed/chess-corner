import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { findLine, REPERTOIRE } from "@/data/openings";
import { usePracticeMode } from "@/hooks/usePracticeMode";
import { useProgress } from "@/hooks/useProgress";
import { useClickToMove } from "@/hooks/useClickToMove";
import { makeLineKey } from "@/stores/progressStore";
import { pickNextLine } from "@/utils/random";
import { isUsersTurn, getExpectedSan } from "@/utils/chess";
import { useMoveSounds } from "@/hooks/useMoveSounds";
import LineCompleteModal from "@/components/learn/LineCompleteModal";
import ChessboardWrapper from "@/components/board/ChessboardWrapper";
import PracticeStatus from "./PracticeStatus";
import PracticeControls from "./PracticeControls";
import LineProgress from "./LineProgress";
import LineSelector from "@/components/learn/LineSelector";
import WrongMoveOverlay from "@/components/learn/WrongMoveOverlay";
import Button from "@/components/ui/Button";

export default function PracticePage() {
  const { openingId, lineId } = useParams<{
    openingId: string;
    lineId: string;
  }>();
  const navigate = useNavigate();
  const { recordAttempt, getLine, store } = useProgress();

  const { opening, line } = findLine(openingId ?? "", lineId ?? "");
  const { state, handleUserMove, giveUp, retry, dismissWrong } =
    usePracticeMode(opening ?? null, line ?? null);

  const lineProgress =
    opening && line ? getLine(opening.id, line.id) : undefined;
  const currentKey =
    opening && line ? makeLineKey(opening.id, line.id) : undefined;

  useEffect(() => {
    const isTerminal =
      state.phase === "line_complete" || state.phase === "gave_up";
    if (isTerminal && opening && line) {
      const penalty =
        state.wrongSteps.length + (state.phase === "gave_up" ? 1 : 0);
      recordAttempt(opening.id, line.id, penalty, state.wrongSteps);
    }
  }, [state.phase, opening, line, recordAttempt]);

  useMoveSounds(state.currentStepIndex, state.phase);

  const goNextLine = () => {
    const next = pickNextLine(REPERTOIRE, store, currentKey);
    if (next) {
      navigate(`/practice/${next.openingId}/${next.lineId}`);
    } else {
      navigate("/");
    }
  };

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

  const expectedSan =
    state.currentStepIndex < line.moves.length
      ? getExpectedSan(line, state.currentStepIndex)
      : "";

  const isUserTurn =
    state.phase === "awaiting_user" &&
    isUsersTurn(state.currentStepIndex, opening.side);

  const { onSquareClick, clickHighlights } = useClickToMove(
    state.fen,
    isUserTurn,
    handleUserMove,
  );

  const mergedSquareStyles = { ...state.highlightSquares, ...clickHighlights };

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
              background: "rgba(120,100,180,0.15)",
              color: "#9b89d4",
            }}
          >
            Practice
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/learn/${opening.id}/${line.id}`)}
          >
            ← Learn mode
          </Button>
        </div>
      </div>

      <LineSelector opening={opening} currentLineId={line.id} mode="practice" />

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Board */}
        <div className="w-full lg:w-[520px] lg:flex-shrink-0 flex flex-col gap-3">
          <ChessboardWrapper
            fen={state.fen}
            orientation={opening.side}
            onPieceDrop={handleUserMove}
            onSquareClick={onSquareClick}
            isDraggable={isUserTurn}
            squareStyles={mergedSquareStyles}
          />

          <PracticeControls
            phase={state.phase}
            onGiveUp={giveUp}
            onRetry={retry}
            onNextLine={goNextLine}
          />

          <WrongMoveOverlay
            visible={state.phase === "wrong_move"}
            wrongSan={state.wrongMoveSan ?? ""}
            correctSan={expectedSan}
            warningMessage={state.refutationMessage ?? undefined}
            onDismiss={dismissWrong}
          />

          {state.phase === "line_complete" && (
            <LineCompleteModal
              mode="practice"
              line={line}
              orientation={opening.side}
              wrongStepsCount={state.wrongSteps.length}
              onRestart={retry}
              onNextLine={goNextLine}
            />
          )}

          {state.phase === "gave_up" && (
            <div
              className="rounded-xl p-5 text-center animate-fade-in border"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
            >
              <p
                className="font-semibold text-base mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                No problem — go study first
              </p>
              <p
                className="text-sm mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Review the line in Learn mode, then come back to practice.
              </p>
              <div className="flex gap-2 justify-center">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => navigate(`/learn/${opening.id}/${line.id}`)}
                >
                  Study line
                </Button>
                <Button variant="primary" size="sm" onClick={retry}>
                  Try again anyway
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Info panel */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          <PracticeStatus
            phase={state.phase}
            penaltyCount={state.wrongSteps.length}
            stepIndex={state.currentStepIndex}
            totalSteps={line.moves.length}
          />

          <LineProgress progress={lineProgress} />

          <div
            className="rounded-xl p-4 border"
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--border)",
            }}
          >
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Play moves from memory. No hints available — that's the point.
              Make a mistake and you'll see what the correct move was.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
