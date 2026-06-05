import { useState } from "react";
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
}: LineCompleteModalProps) {
  const [showContinuation, setShowContinuation] = useState(false);
  const hasContinuation = (line.continuationMoves?.length ?? 0) > 0;
  const isPerfect = wrongStepsCount === 0;

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
        padding: "24px",
      }}
    >
      <div
        className="rounded-2xl border"
        style={{
          background: "var(--bg-elevated)",
          borderColor: "var(--success)",
          maxWidth: "600px",
          width: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "32px",
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

        {/* Line description — learn only */}
        {mode === "learn" && line.description && !showContinuation && (
          <p
            className="text-sm leading-relaxed mb-5 text-center px-2"
            style={{ color: "var(--text-muted)" }}
          >
            {line.description}
          </p>
        )}

        {/* Continuation viewer — learn only */}
        {mode === "learn" && hasContinuation && (
          <div className="mb-5">
            {showContinuation ? (
              <ContinuationViewer line={line} orientation={orientation} />
            ) : (
              <p className="text-center">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowContinuation(true)}
                >
                  See the idea →
                </Button>
              </p>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-2 justify-center flex-wrap">
          <Button variant="secondary" size="sm" onClick={onRestart}>
            {mode === "learn" ? "↺ Go again" : "↺ Try again"}
          </Button>

          {mode === "learn" ? (
            isSeq ? (
              nextSeqLine ? (
                <Button variant="primary" size="sm" onClick={onNextSeqLine}>
                  Next Line →
                </Button>
              ) : (
                <Button variant="primary" size="sm" onClick={onAllDone}>
                  All done! Back to opening
                </Button>
              )
            ) : (
              <Button variant="primary" size="sm" onClick={onPractice}>
                Practice this line →
              </Button>
            )
          ) : (
            <Button variant="primary" size="sm" onClick={onNextLine}>
              Next line →
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
