// Wrong-move notice. On phones it's an opaque bottom sheet docked to the bottom
// edge (full width, never covering the board); on desktop (sm+) it floats as a
// card in the bottom-right corner. Background is a solid elevated surface — NOT
// the translucent --danger-bg — so the text stays readable over the board.

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
      className="animate-slide-up border p-4 z-50
                 fixed inset-x-0 bottom-0 w-full rounded-t-2xl border-t-2
                 sm:inset-x-auto sm:left-auto sm:right-6 sm:bottom-6 sm:w-[360px] sm:max-w-[calc(100vw-48px)] sm:rounded-xl sm:border-t"
      style={{
        background: "var(--bg-elevated)",
        borderColor: "var(--danger)",
        boxShadow: "0 -8px 32px rgba(0,0,0,0.4)",
        paddingBottom: "calc(1rem + env(safe-area-inset-bottom))",
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
          className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-80 active:opacity-70"
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
