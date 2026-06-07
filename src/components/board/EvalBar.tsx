// Vertical engine eval bar, sits next to the board and stretches to its height.
// White's share fills from White's home side (bottom when the board faces White,
// top when flipped for Black). The number is shown on whoever is winning, the way
// lichess does it. While the engine is still thinking we sit at 50/50 and dim.
//
// The fill colours are the chess SIDES (light = White, dark = Black), like a
// lichess eval bar — they are intentionally hardcoded, NOT theme tokens, so the
// bar reads the same in light and dark mode.

import type { EngineScore, Side } from "@/types";
import { evalToFillPercent, formatEval } from "@/utils/evalScore";

// Chess-side colours (light = White's share, dark = Black's), plus the label
// colours that contrast against each. Intentionally fixed, not theme tokens.
const WHITE_FILL = "#ededed";
const BLACK_FILL = "#3a3a3a";
const LABEL_ON_WHITE = "#1a1a1a";
const LABEL_ON_BLACK = "#e8e8e8";

interface EvalBarProps {
  score: EngineScore | null;
  orientation: Side;
  loading?: boolean;
}

export default function EvalBar({ score, orientation, loading }: EvalBarProps) {
  const fillPercent = score ? evalToFillPercent(score) : 50;
  const whiteOnBottom = orientation === "white";
  const whiteWinning = fillPercent >= 50;

  // Anchor the white block to White's home end so it grows toward Black.
  const whiteBlockStyle = whiteOnBottom
    ? { bottom: 0, height: `${fillPercent}%` }
    : { top: 0, height: `${fillPercent}%` };

  // The label rides on the winning side: at the bottom when the side sitting at
  // the bottom is the one that's winning. In the colour that contrasts there.
  const labelEndIsBottom = whiteOnBottom === whiteWinning;
  const labelStyle = {
    [labelEndIsBottom ? "bottom" : "top"]: "2px",
    color: whiteWinning ? LABEL_ON_WHITE : LABEL_ON_BLACK,
  } as const;

  return (
    <div
      className="relative w-6 sm:w-7 self-stretch rounded-md overflow-hidden flex-shrink-0 ring-1 ring-chess-border/40"
      style={{ background: BLACK_FILL, opacity: loading ? 0.55 : 1 }}
      title={score ? formatEval(score) : "Evaluating…"}
    >
      <div
        className="absolute left-0 right-0 transition-all duration-500 ease-out"
        style={{ ...whiteBlockStyle, background: WHITE_FILL }}
      />
      <span
        className="absolute left-0 right-0 text-center text-[10px] font-bold font-mono leading-none"
        style={labelStyle}
      >
        {score ? formatEval(score) : ""}
      </span>
    </div>
  );
}
