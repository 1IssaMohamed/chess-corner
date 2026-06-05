interface WrongMoveOverlayProps {
  visible: boolean;
  wrongSan: string;
  correctSan: string;
  correctMoveExplanation?: string;
  warningMessage?: string;
  alternativeLine?: string | null;
  onDismiss: () => void;
}

export default function WrongMoveOverlay({
  visible,
  wrongSan,
  correctSan,
  correctMoveExplanation,
  warningMessage,
  alternativeLine,
  onDismiss,
}: WrongMoveOverlayProps) {
  if (!visible) return null;

  return (
    <div
      className="animate-slide-up rounded-xl border p-4"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 50,
        width: "360px",
        background: "var(--danger-bg)",
        borderColor: "var(--danger)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p
            className="font-semibold text-sm mb-1"
            style={{ color: "var(--danger)" }}
          >
            Not the right move
          </p>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            You played{" "}
            <span
              className="font-mono font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {wrongSan}
            </span>{" "}
            — the line continues{" "}
            <span
              className="font-mono font-bold"
              style={{ color: "var(--accent-amber)" }}
            >
              {correctSan}
            </span>
          </p>

          {alternativeLine && (
            <p
              className="text-xs mt-2 font-medium"
              style={{ color: "var(--accent-amber)" }}
            >
              That's the move for the {alternativeLine} — wrong line!
            </p>
          )}

          {correctMoveExplanation && (
            <p
              className="text-xs mt-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <span style={{ color: "var(--text-muted)" }}>
                Why {correctSan}?
              </span>{" "}
              {correctMoveExplanation}
            </p>
          )}

          {warningMessage && (
            <p
              className="text-xs mt-1"
              style={{ color: "var(--text-secondary)" }}
            >
              {warningMessage}
            </p>
          )}
        </div>
        <button
          onClick={onDismiss}
          className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
          style={{
            background: "var(--danger)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
