// Opening card on the home page. Clicking anywhere navigates to the opening
// detail page. role="button" + onKeyDown makes it accessible via keyboard too.
//
// The blurb comes from the main line's first move explanation — the same text
// shown at move 0 in Learn mode. Mobile: a "show more" toggle appears when the
// text overflows 2 lines. Desktop: a full-card overlay fades in on hover without
// changing the card size (the board preview stays fixed).

import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Opening, ProgressStore } from "@/types";
import { getOpeningMasteryPercent } from "@/utils/progress";
import BoardPreview from "@/components/board/BoardPreview";
import { OPENING_STATS } from "@/data/openingStats";

interface OpeningCardProps {
  opening: Opening;
  store: ProgressStore;
}

function formatGames(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M games`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}k games`;
  return `${n} games`;
}

export default function OpeningCard({ opening, store }: OpeningCardProps) {
  const navigate = useNavigate();
  const percent = getOpeningMasteryPercent(opening, store);
  const lineCount = opening.lines.length;
  const stats = OPENING_STATS[opening.id];

  // Text source: main line's first-move explanation (falls back to description)
  const blurb = opening.lines[0]?.moves[0]?.explanation ?? opening.description;

  // Hover state (desktop overlay)
  const [isHovered, setIsHovered] = useState(false);
  // Toggle state (mobile expand)
  const [isExpanded, setIsExpanded] = useState(false);
  // Whether blurb overflows 2 lines (controls toggle visibility)
  const [isClamped, setIsClamped] = useState(false);
  const blurbRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = blurbRef.current;
    if (!el) return;
    setIsClamped(el.scrollHeight > el.clientHeight + 2);
  }, [blurb]);

  return (
    <div
      onClick={() => navigate(`/opening/${opening.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/opening/${opening.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="opening-card relative flex gap-4 rounded-xl border p-4 cursor-pointer outline-none overflow-hidden"
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

        {/* Blurb — clamped to 2 lines; mobile toggle reveals all */}
        <p
          ref={blurbRef}
          className="text-xs leading-relaxed mt-1"
          style={{
            color: "var(--text-secondary)",
            display: "-webkit-box",
            WebkitLineClamp: isExpanded ? "unset" : 2,
            WebkitBoxOrient: "vertical",
            overflow: isExpanded ? "visible" : "hidden",
          }}
        >
          {blurb}
        </p>

        {/* "Show more / less" toggle — only visible when text overflows; hidden on hover (desktop handles it) */}
        {isClamped && !isHovered && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded((v) => !v);
            }}
            className="self-start text-xs mt-0.5 underline underline-offset-2 transition-opacity hover:opacity-70"
            style={{ color: "var(--accent-amber)" }}
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}

        {/* Win/draw/loss bar */}
        {stats && (
          <div className="mt-2">
            <div className="flex h-1.5 rounded-full overflow-hidden w-full gap-px">
              <div
                title={`White wins ${stats.whiteWin}%`}
                style={{
                  width: `${stats.whiteWin}%`,
                  background: "var(--accent-amber)",
                }}
              />
              <div
                title={`Draws ${stats.draw}%`}
                style={{
                  width: `${stats.draw}%`,
                  background: "var(--text-muted)",
                  opacity: 0.35,
                }}
              />
              <div
                title={`Black wins ${stats.blackWin}%`}
                style={{
                  width: `${stats.blackWin}%`,
                  background: "var(--text-primary)",
                  opacity: 0.55,
                }}
              />
            </div>
            <div
              className="flex items-center justify-between mt-1 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <div className="flex items-center gap-1">
                <span style={{ color: "var(--accent-amber)" }}>
                  {stats.whiteWin}%
                </span>
                <span>·</span>
                <span>{stats.draw}%</span>
                <span>·</span>
                <span>{stats.blackWin}%</span>
              </div>
              <span>{formatGames(stats.games)}</span>
            </div>
          </div>
        )}

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

      {/* Desktop hover overlay — covers the full card (board + info) with the full blurb */}
      {isHovered && (
        <div
          className="animate-fade-in absolute inset-0 rounded-xl flex flex-col justify-center px-5 py-4 pointer-events-none"
          style={{
            background: "var(--bg-surface)",
            opacity: 0.97,
          }}
        >
          <p
            className="text-xs font-semibold mb-2"
            style={{ color: "var(--accent-amber)" }}
          >
            {opening.name}
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {blurb}
          </p>
        </div>
      )}
    </div>
  );
}
