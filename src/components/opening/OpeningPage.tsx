import { useParams, useNavigate, Link } from "react-router-dom";
import { findOpening } from "@/data/openings";
import { useProgress } from "@/hooks/useProgress";
import { getOrderedLines } from "@/utils/progress";
import { pickLineFromOpening } from "@/utils/random";
import { DIFFICULTY_ORDER } from "@/types";
import type { LineProgress, OpeningLine } from "@/types";

function difficultyLabel(d: OpeningLine["difficulty"]) {
  if (d === "beginner") return "Beginner";
  if (d === "intermediate") return "Intermediate";
  return "Advanced";
}

function difficultyStyle(d: OpeningLine["difficulty"]) {
  if (d === "beginner")
    return { color: "var(--success)", bg: "var(--success-bg)" };
  if (d === "intermediate")
    return { color: "var(--accent-amber)", bg: "var(--accent-amber-dim)" };
  return { color: "var(--danger)", bg: "var(--danger-bg)" };
}

function AccuracyBadge({ progress }: { progress: LineProgress }) {
  if (progress.practiceAttempts === 0) return null;
  const pct = Math.round(
    (progress.practiceSuccesses / progress.practiceAttempts) * 100,
  );
  const { color, bg } =
    pct >= 80
      ? { color: "var(--success)", bg: "var(--success-bg)" }
      : pct >= 60
        ? { color: "var(--accent-amber)", bg: "var(--accent-amber-dim)" }
        : { color: "var(--danger)", bg: "var(--danger-bg)" };
  return (
    <span
      className="text-xs px-1.5 py-0.5 rounded font-mono font-medium"
      style={{ background: bg, color }}
    >
      {pct}%
    </span>
  );
}

function WeakMoveHint({
  progress,
  line,
}: {
  progress: LineProgress;
  line: OpeningLine;
}) {
  const { wrongMovesByStep } = progress;
  if (wrongMovesByStep.length === 0) return null;

  const maxWrong = wrongMovesByStep.reduce(
    (m, v) => (v ? Math.max(m, v) : m),
    0,
  );
  if (maxWrong < 2) return null;

  const worstStep = wrongMovesByStep.indexOf(maxWrong);
  const san = line.moves[worstStep]?.san;
  if (!san) return null;

  return (
    <span className="text-xs" style={{ color: "var(--danger)" }}>
      Stumbles on: <span className="font-mono">{san}</span>
    </span>
  );
}

export default function OpeningPage() {
  const { openingId } = useParams<{ openingId: string }>();
  const navigate = useNavigate();
  const opening = findOpening(openingId ?? "");
  const { getLine, store } = useProgress();

  if (!opening) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p style={{ color: "var(--text-secondary)" }}>Opening not found.</p>
        <Link
          to="/"
          className="text-sm underline mt-4 inline-block"
          style={{ color: "var(--accent-amber)" }}
        >
          Go back home
        </Link>
      </div>
    );
  }

  const orderedLines = getOrderedLines(opening);

  const byDifficulty = DIFFICULTY_ORDER.map((diff) => ({
    difficulty: diff,
    lines: orderedLines.filter((l) => l.difficulty === diff),
  })).filter((g) => g.lines.length > 0);

  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm mb-6 hover:opacity-70 transition-opacity"
        style={{ color: "var(--text-secondary)", textDecoration: "none" }}
      >
        ← All openings
      </Link>

      {/* Opening header */}
      <div
        className="mb-8 pb-8 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-xs px-2 py-0.5 rounded font-medium"
            style={{
              background:
                opening.side === "white"
                  ? "var(--accent-amber-dim)"
                  : "rgba(120,100,180,0.12)",
              color:
                opening.side === "white" ? "var(--accent-amber)" : "#9b89d4",
            }}
          >
            {opening.side === "white" ? "♔ White" : "♚ Black"}
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {opening.lines.length} line{opening.lines.length !== 1 ? "s" : ""}
          </span>
        </div>

        <h1
          className="text-2xl font-bold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          {opening.name}
        </h1>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "var(--text-secondary)" }}
        >
          {opening.description}
        </p>

        <div className="flex gap-3 mb-4">
          <button
            onClick={() =>
              orderedLines.length > 0 &&
              navigate(`/learn/${opening.id}/${orderedLines[0].id}?seq=1`)
            }
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-85"
            style={{
              background: "var(--accent-amber)",
              color: "#0a0a0f",
              cursor: "pointer",
            }}
          >
            Learn All →
          </button>
          <button
            onClick={() =>
              navigate(
                `/practice/${opening.id}/${pickLineFromOpening(opening, store)}`,
              )
            }
            className="px-5 py-2.5 rounded-lg text-sm font-medium border transition-all hover:opacity-75"
            style={{
              background: "transparent",
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
              cursor: "pointer",
            }}
          >
            Practice Random
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {opening.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded"
              style={{
                background: "var(--bg-elevated)",
                color: "var(--text-muted)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Lines grouped by difficulty */}
      <div className="flex flex-col gap-10">
        {byDifficulty.map(({ difficulty, lines }) => {
          const ds = difficultyStyle(difficulty);
          return (
            <section key={difficulty}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ background: ds.bg, color: ds.color }}
                >
                  {difficultyLabel(difficulty)}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "var(--border)" }}
                />
              </div>

              <div className="flex flex-col gap-3">
                {lines.map((line) => {
                  const progress = getLine(opening.id, line.id);
                  return (
                    <div
                      key={line.id}
                      className="rounded-xl border p-4 transition-all duration-150"
                      style={{
                        background: "var(--bg-surface)",
                        borderColor: "var(--border)",
                        boxShadow: "var(--shadow)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3
                            className="font-semibold text-sm mb-1"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {line.name}
                          </h3>
                          <p
                            className="text-xs leading-relaxed mb-3"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {line.description}
                          </p>

                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className="text-xs"
                              style={{ color: "var(--text-muted)" }}
                            >
                              Mastery
                            </span>
                            {[0, 1, 2, 3].map((lvl) => (
                              <span
                                key={lvl}
                                className="w-2 h-2 rounded-full transition-all"
                                style={{
                                  background:
                                    lvl < progress.mastery
                                      ? "var(--accent-amber)"
                                      : "var(--bg-elevated)",
                                  border: "1.5px solid var(--border)",
                                }}
                              />
                            ))}
                            <span
                              className="text-xs ml-1"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {line.moves.length} moves
                            </span>
                            <AccuracyBadge progress={progress} />
                            <WeakMoveHint progress={progress} line={line} />
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 flex-shrink-0">
                          <button
                            onClick={() =>
                              navigate(`/learn/${opening.id}/${line.id}`)
                            }
                            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-85"
                            style={{
                              background: "var(--accent-amber)",
                              color: "#0a0a0f",
                              cursor: "pointer",
                            }}
                          >
                            Learn
                          </button>
                          <button
                            onClick={() =>
                              navigate(`/practice/${opening.id}/${line.id}`)
                            }
                            className="px-4 py-2 rounded-lg text-sm font-medium border transition-all hover:opacity-75"
                            style={{
                              background: "transparent",
                              borderColor: "var(--border)",
                              color: "var(--text-secondary)",
                              cursor: "pointer",
                            }}
                          >
                            Practice
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
