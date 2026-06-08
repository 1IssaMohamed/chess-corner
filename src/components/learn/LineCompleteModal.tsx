// Full-screen overlay shown when you finish a line. In Learn mode it can show
// the continuation viewer ("See the rest of the idea →"). In Practice mode it
// shows your mistake count and offers retry or next line.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { OpeningLine, Side } from "@/types";
import ContinuationViewer from "./ContinuationViewer";
import Button from "@/components/ui/Button";

interface LineCompleteModalProps {
  mode: "learn" | "practice";
  line: OpeningLine;
  orientation: Side;
  wrongStepsCount?: number;
  isSeq?: boolean;
  nextSeqLine?: OpeningLine | null;
  onRestart: () => void;
  onPractice?: () => void;
  onNextSeqLine?: () => void;
  onAllDone?: () => void;
  onNextLine?: () => void;
  // Branch off into free play from a position in the continuation viewer.
  onPlayFromHere?: (continuationStep: number) => void;
}

export default function LineCompleteModal({
  mode,
  line,
  orientation,
  wrongStepsCount = 0,
  isSeq,
  nextSeqLine,
  onRestart,
  onPractice,
  onNextSeqLine,
  onAllDone,
  onNextLine,
  onPlayFromHere,
}: LineCompleteModalProps) {
  const navigate = useNavigate();
  const [showContinuation, setShowContinuation] = useState(false);
  const hasContinuation = (line.continuationMoves?.length ?? 0) > 0;
  const isPerfect = wrongStepsCount === 0;

  // First sentence of the continuationIdea — shown as a teaser before the viewer opens
  const ideaTeaser = line.continuationIdea
    ? (line.continuationIdea.match(/^.+?[.!?](?:\s|$)/)?.[0]?.trim() ??
      line.continuationIdea)
    : null;

  return (
    <div
      className="animate-fade-in"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px",
      }}
    >
      <div
        className="rounded-2xl border p-5 sm:p-8"
        style={{
          background: "var(--bg-elevated)",
          borderColor: "var(--success)",
          maxWidth: "600px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
        }}
      >
        {/* Header */}
        <p
          className="font-bold text-2xl mb-1 text-center"
          style={{ color: "var(--success)" }}
        >
          {mode === "practice"
            ? isPerfect
              ? "Perfect run!"
              : `Done — ${wrongStepsCount} mistake${wrongStepsCount !== 1 ? "s" : ""}`
            : "Line complete!"}
        </p>
        <p
          className="text-sm text-center mb-5"
          style={{ color: "var(--text-secondary)" }}
        >
          {mode === "practice"
            ? isPerfect
              ? "No mistakes. Excellent recall."
              : "Keep practicing to get it perfect."
            : isSeq && nextSeqLine
              ? `Next up: ${nextSeqLine.name}`
              : "You know this line. Ready to test yourself?"}
        </p>

        {/* Continuation section — learn only */}
        {mode === "learn" && hasContinuation && (
          <div className="mb-5">
            {showContinuation ? (
              <ContinuationViewer
                line={line}
                orientation={orientation}
                onPlayFromHere={onPlayFromHere}
              />
            ) : (
              <>
                {/* Teaser — first sentence of continuationIdea */}
                {ideaTeaser && (
                  <p
                    className="text-sm leading-relaxed text-center mb-3 px-2 italic"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {ideaTeaser}
                  </p>
                )}
                <p className="text-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setShowContinuation(true)}
                  >
                    See the rest of the idea →
                  </Button>
                </p>
              </>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-2 justify-center flex-wrap">
          <Button variant="secondary" size="sm" onClick={onRestart}>
            {mode === "learn" ? "↺ Go again" : "↺ Try again"}
          </Button>

          {mode === "learn" ? (
            <>
              <Button variant="secondary" size="sm" onClick={onPractice}>
                Practice this line →
              </Button>
              {nextSeqLine ? (
                <Button variant="primary" size="sm" onClick={onNextSeqLine}>
                  Next line →
                </Button>
              ) : (
                <Button variant="primary" size="sm" onClick={onAllDone}>
                  All done! Back to opening
                </Button>
              )}
            </>
          ) : (
            <Button variant="primary" size="sm" onClick={onNextLine}>
              Next line →
            </Button>
          )}
        </div>

        {/* Home link */}
        <p className="text-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="text-xs underline underline-offset-2 transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            ← All openings
          </button>
        </p>
      </div>
    </div>
  );
}
