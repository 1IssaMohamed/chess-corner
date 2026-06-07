// Free-play mode: pick up a line at any point and play it out for real. Stockfish
// either answers your moves (engine mode) or stays out of the way (both mode), and
// the eval bar judges every position so you can see why one move holds and another
// drops the game. Launched from the "Play from here" button in Learn.

import {
  useParams,
  useNavigate,
  useSearchParams,
  Link,
} from "react-router-dom";
import { findLine } from "@/data/openings";
import { useStockfish } from "@/hooks/useStockfish";
import { useFreePlay } from "@/hooks/useFreePlay";
import { useClickToMove } from "@/hooks/useClickToMove";
import { getFenAtStep, buildSquareStyles, STARTING_FEN } from "@/utils/chess";
import { formatEval } from "@/utils/evalScore";
import ChessboardWrapper from "@/components/board/ChessboardWrapper";
import EvalBar from "@/components/board/EvalBar";
import Button from "@/components/ui/Button";

export default function FreePlayPage() {
  const { openingId, lineId } = useParams<{
    openingId: string;
    lineId: string;
  }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { opening, line } = findLine(openingId ?? "", lineId ?? "");

  // Clamp the requested step into the line's range, then compute the start FEN.
  const requestedStep = parseInt(searchParams.get("step") ?? "0", 10);
  const step = line
    ? Math.max(0, Math.min(requestedStep || 0, line.moves.length))
    : 0;
  const startFen = line ? getFenAtStep(line, step) : STARTING_FEN;
  const userSide = opening?.side ?? "white";

  const { engineRef, ready } = useStockfish();
  const fp = useFreePlay(startFen, userSide, engineRef, ready);

  const { onSquareClick, clickHighlights } = useClickToMove(
    fp.fen,
    fp.isUserTurn,
    fp.playMove,
  );

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

  const squareStyles = {
    ...buildSquareStyles({ lastMove: fp.lastMove }),
    ...clickHighlights,
  };

  const status = (() => {
    if (!ready) return "Loading engine…";
    if (fp.isGameOver) return "Game over";
    if (fp.engineThinking) return "Opponent thinking…";
    if (fp.mode === "engine") return fp.isUserTurn ? "Your move" : "…";
    return `${fp.turn === "white" ? "White" : "Black"} to move`;
  })();

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-6 flex flex-col gap-4">
      {/* Breadcrumb + mode label */}
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
            Free play
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/learn/${opening.id}/${line.id}`)}
          >
            ← Back to Learn
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Board + eval bar + controls */}
        <div className="w-full lg:w-[520px] lg:flex-shrink-0 flex flex-col gap-3">
          <div className="flex gap-2 sm:gap-3 items-stretch">
            <EvalBar
              score={fp.score}
              orientation={opening.side}
              loading={!ready || fp.thinking}
            />
            <div className="flex-1 min-w-0">
              <ChessboardWrapper
                fen={fp.fen}
                orientation={opening.side}
                onPieceDrop={fp.playMove}
                onSquareClick={onSquareClick}
                isDraggable={fp.isUserTurn}
                squareStyles={squareStyles}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              variant="secondary"
              size="sm"
              onClick={fp.takeBack}
              disabled={fp.moves.length === 0 || fp.engineThinking}
              title="Undo the last move"
            >
              ↶ Take back
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={fp.reset}
              disabled={fp.moves.length === 0}
              title="Back to the starting position"
            >
              ↺ Reset
            </Button>
            <span
              className="text-sm ml-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              {status}
            </span>
          </div>

          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Play any moves you like — the bar shows Stockfish's verdict. Take
            back to try a different idea.
          </p>
        </div>

        {/* Info panel */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          {/* Mode toggle */}
          <div
            className="rounded-xl p-4 border"
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: "var(--accent-amber)" }}
            >
              Opponent
            </p>
            <div className="flex gap-2">
              <Button
                variant={fp.mode === "engine" ? "primary" : "secondary"}
                size="sm"
                onClick={() => fp.setMode("engine")}
              >
                Engine replies
              </Button>
              <Button
                variant={fp.mode === "both" ? "primary" : "secondary"}
                size="sm"
                onClick={() => fp.setMode("both")}
              >
                Move both sides
              </Button>
            </div>
            <p
              className="text-xs mt-3 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {fp.mode === "engine"
                ? `Stockfish plays the opposing side. You play ${userSide}.`
                : "You move both colours — try a line, take it back, try another."}
            </p>
          </div>

          {/* Eval readout */}
          <div
            className="rounded-xl p-4 border flex items-center justify-between"
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--border)",
            }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
              Evaluation
            </span>
            <span
              className="text-lg font-bold font-mono"
              style={{ color: "var(--text-primary)" }}
            >
              {fp.score ? formatEval(fp.score) : "—"}
            </span>
          </div>

          {/* Move list */}
          {fp.moves.length > 0 && (
            <div
              className="rounded-xl p-4 border"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
            >
              <p className="text-sm font-mono leading-relaxed">
                {fp.moves.map((san, i) => (
                  <span key={i} style={{ color: "var(--text-secondary)" }}>
                    {i % 2 === 0 && (
                      <span style={{ color: "var(--text-muted)" }}>
                        {Math.floor(i / 2) + 1}.
                      </span>
                    )}{" "}
                    {san}{" "}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
