import { useNavigate } from "react-router-dom";
import type { Opening, ProgressStore } from "@/types";
import { getOpeningMasteryPercent } from "@/utils/progress";
import BoardPreview from "@/components/board/BoardPreview";

interface OpeningCardProps {
  opening: Opening;
  store: ProgressStore;
}

export default function OpeningCard({ opening, store }: OpeningCardProps) {
  const navigate = useNavigate();
  const percent = getOpeningMasteryPercent(opening, store);
  const lineCount = opening.lines.length;

  return (
    <div
      onClick={() => navigate(`/opening/${opening.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/opening/${opening.id}`)}
      className="opening-card flex gap-4 rounded-xl border p-4 cursor-pointer outline-none"
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      {/* Board thumbnail */}
      <div
        className="rounded-lg overflow-hidden flex-shrink-0"
        style={{ border: "1px solid var(--border-subtle)" }}
      >
        <BoardPreview opening={opening} />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <h3
          className="font-semibold text-base leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {opening.name}
        </h3>

        <p
          className="text-xs leading-relaxed mt-1"
          style={{
            color: "var(--text-secondary)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {opening.description}
        </p>

        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {lineCount} line{lineCount !== 1 ? "s" : ""}
          </span>
          <div className="flex items-center gap-2">
            <div
              className="w-20 h-1.5 rounded-full overflow-hidden"
              style={{ background: "var(--bg-elevated)" }}
            >
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${percent}%`,
                  background: "var(--accent-amber)",
                }}
              />
            </div>
            <span
              className="text-xs font-mono"
              style={{ color: "var(--text-muted)" }}
            >
              {percent}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
