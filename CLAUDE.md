# CheesyChess — CLAUDE.md

## What This Is

A local chess openings learning web app (React + TypeScript + Vite).
Runs on localhost:5173. No backend. Progress stored in localStorage.
Built to help the user learn and practice chess opening repertoires.

## Dev Commands

- `npm run dev` — start dev server (auto-opens browser at localhost:5173)
- `npm run type-check` — TypeScript check (no emit)
- `npm run lint` — ESLint
- `npm run build` — production build

## Path Alias

All src imports use `@/` — e.g. `import { Opening } from '@/types'`
Configured in both `vite.config.ts` and `tsconfig.json`.

## Architecture Overview

- `src/types/index.ts` — ALL shared types (Opening, Line, Move, Progress, state machines). Start here.
- `src/data/openings/` — built-in repertoire data (8 openings, ~22 lines total)
- `src/data/openings/index.ts` — REPERTOIRE array, barrel export
- `src/stores/progressStore.ts` — pure functions for localStorage progress (immutable updates)
- `src/hooks/useLearnMode.ts` — learn mode state machine (useReducer)
- `src/hooks/usePracticeMode.ts` — practice mode state machine (useReducer)
- `src/hooks/useProgress.ts` — React hook wrapping progressStore
- `src/hooks/useClickToMove.ts` — click-a-piece-then-click-a-square input (alongside drag)
- `src/hooks/useMoveSounds.ts` — Web Audio click/buzz/chime on move/wrong/complete (shared by both pages)
- `src/utils/chess.ts` — chess.js integration (buildGameUpToStep, movesMatch, getFenAtStep, buildContinuationFens, findRefutation, pieceName)
- `src/utils/sounds.ts` — synthesised sounds via Web Audio (no audio files)
- `src/components/learn/ContinuationViewer.tsx` — "see the idea" mini-board that auto-plays a line's `continuationMoves`
- `src/utils/progress.ts` — mastery percentage helpers + `getOrderedLines(opening)` (beginner→intermediate→advanced)
- `src/utils/random.ts` — weighted random line selection
- `src/components/` — UI components grouped by feature (layout/, board/, learn/, practice/, home/, ui/)

## Key Design Rules

- Opening line `moves[]` contains moves for BOTH sides, alternating from move 0
- `isUsersTurn(stepIndex, side)`: even stepIndex = white's move, odd = black's move
- Computer moves auto-play after 800ms delay via useEffect watching phase === 'computer_move'
- Wrong move in Learn: show overlay then snap back, user retries (no penalty). Overlay also names an alternative line if the wrong move is the book move of a sibling line, and shows the correct move's explanation.
- Wrong move in Practice: records the step in `wrongSteps`, board stays for retry. If the wrong move hangs material, `findRefutation` plays the punishing capture out on the board and the overlay explains it ("That drops the knight — …"); DISMISS_WRONG restores the retry position.
- NEVER mutate a Chess instance across renders — always call buildGameUpToStep to rebuild
- Board flips for Black openings: pass `boardOrientation="black"` to ChessboardWrapper
- `isKeyMove` on a move: shown as "KEY MOVE" in MoveExplanation and a ★ in MoveList
- Learn nav: Back/Forward, ← → keys, and mouse scroll wheel; manual stepping uses the `browsing` phase (no auto-advance). Listeners read the step from a ref so they bind once.
- Optional `continuationMoves`/`continuationIdea` on a line: a "See the idea →" button on line_complete reveals ContinuationViewer. All 10 openings have a continuation on their first beginner line.

## State Machines

### Learn Mode Phases

idle → intro → playing → awaiting_user (user's turn) or playing (auto-advance computer moves)
browsing — manual Back/Forward/scroll landed on a computer move; like playing but does NOT auto-advance
wrong_move → awaiting_user (manual dismiss)
hint_shown → awaiting_user
line_complete → (restart or next line)

### Practice Mode Phases

idle → computer_move (800ms delay) → awaiting_user
wrong_move (manual dismiss via "Got it" button) → awaiting_user
line_complete → (retry or next line)
gave_up → (retry or next line)

## Progress Schema

- localStorage key: `cheesychess_progress`
- Line key format: `${openingId}::${lineId}`
- Mastery levels: 0=unseen, 1=seen (completed Learn), 2=practiced, 3=mastered
- Upgrade to mastery 3: practiceSuccesses >= 3 AND currentStreak >= 2

## Built-in Openings (10 openings, 80+ lines)

White: Ruy López, Italian Game, Queen's Gambit, London System, Ponziani
Black: Sicilian Defense, Caro-Kann, French Defense, King's Indian Defense, Queen's Gambit Declined

Each opening has 6–11 lines tagged beginner/intermediate/advanced.

## Adding a New Opening — Full Guide

### 1. Create the data file

Create `src/data/openings/<id>.ts`. Copy an existing file as a template (e.g. `ponziani.ts`).

```typescript
import type { Opening } from "@/types";

const myOpening: Opening = {
  id: "my-opening", // kebab-case; must match the filename
  name: "My Opening",
  side: "white", // "white" | "black" — which side the learner plays
  eco: "X00", // ECO code (not shown in UI but kept for reference)
  description: "...", // 1–2 sentences shown on the opening detail page
  tags: ["e4", "aggressive"], // used for filtering/display
  lines: [
    /* see below */
  ],
};

export default myOpening;
```

### 2. Write each line

```typescript
{
  id: "my-opening-main",          // kebab-case, unique within the opening
  name: "Main Line: 3...Nf6",
  difficulty: "beginner",         // "beginner" | "intermediate" | "advanced"
  description: "...",             // shown on the line card on the opening detail page

  moves: [
    // ALL moves for BOTH sides, alternating, starting from move 0 (White's first move)
    // Even index = White's move, Odd index = Black's move
    { san: "e4",  explanation: "...", isKeyMove: true },   // index 0 — White
    { san: "e5",  explanation: "..." },                    // index 1 — Black
    { san: "Nf3", explanation: "..." },                    // index 2 — White
    // ...
  ],

  // Optional — only add when it meaningfully illustrates the idea behind the line
  continuationMoves: ["f4", "g5", "Nf3"],  // SAN strings; appended after the line ends
  continuationIdea: "...",                  // sentence(s) explaining what the continuation shows
}
```

**Move field rules:**

- `san` — standard algebraic notation exactly as chess.js produces (e.g. `"O-O"`, `"exd4"`, `"Nxf7+"`)
- `explanation` — plain English "why" for this move, shown step-by-step in Learn mode
- `isKeyMove?: boolean` — marks the move with "KEY MOVE" + ★ in the UI; use sparingly (3–5 per line max)
- `wrongMoveWarning?: string` — extra hint shown if the user plays the wrong move at this step

**Side rules:**

- If `side = "white"`: even-index moves are the user's turns; odd-index are the computer's
- If `side = "black"`: odd-index moves are the user's turns; even-index are the computer's
- The board flips automatically for `side = "black"` (black pieces at bottom)

**Difficulty ordering inside an opening:**

- Always put `beginner` lines first, then `intermediate`, then `advanced`
- `getOrderedLines()` in `src/utils/progress.ts` enforces this for sequential learn mode

### 3. Register the opening

In `src/data/openings/index.ts`:

```typescript
import myOpening from "./my-opening";

export const REPERTOIRE: Opening[] = [
  // White openings first, then Black
  // ...existing openings...
  myOpening,
];
```

White openings appear in the White section on the home page; Black openings in the Black section. Order within each section is the display order.

### 4. Validate — REQUIRED before shipping

Run the validator to ensure every move in every line is legal chess:

```bash
node scripts/validate-openings.mjs
```

Expected output: `Checked N lines. Illegal main: 0 | Illegal continuation: 0 — ALL LINES VALID ✓`

If a line fails, the script prints the opening ID, line ID, move index, and the failing SAN. Fix by replaying the line manually in a chess board tool, finding the exact failure point, and correcting the SAN.

**Common mistakes caught by the validator:**

- Wrong move order (forgot a move, have duplicates, or sides swapped)
- Illegal SAN (e.g. `Bf4` when the e3 pawn blocks it, `exd5` when nothing is on d5)
- `continuationMoves` that don't follow on from the line's final position

### 5. Optional: add continuation

A continuation is a short sequence of illustrative moves played automatically after the line ends in Learn mode. It shows the user "what comes next" — the strategic idea behind the line.

Rules for a good continuation:

- 4–7 moves maximum
- Must be legal chess following on from the last move of the line
- `continuationIdea` should explain the strategic takeaway in 2–4 sentences
- Not every line needs one — only add when it genuinely teaches something

The validator checks continuation legality too. All 10 current openings have continuations on their first beginner line.

## Sequential Learn Mode

URL param `?seq=1` on `/learn/:openingId/:lineId` enables sequential mode.

- "Learn All →" button on OpeningPage starts at the first beginner line with `?seq=1`
- On `line_complete`, shows "Next Line →" (navigates to next ordered line) or "All done!" on the last line
- `getOrderedLines(opening)` in `src/utils/progress.ts` sorts lines by DIFFICULTY_ORDER

## Practice Random

"Practice Random" button on OpeningPage picks a random line from the opening
and navigates to `/practice/:openingId/:randomLineId`.

## UI Theme

Dark + light mode. Light mode is a deep warm parchment (creamy/tan, never white) — bg-base `#ede1ca`, cards `#e5d8bf`, warm brown text.

- Primary accent: amber `#d4a017`
- Base bg: `#0a0a0f` (near-black)
- Board dark squares: `#4a7c59` (deep green)
- Board light squares: `#d4c5a9` (warm cream)
- Full CSS variables in `src/index.css`

## Progress Tracking

See TODO.md for current implementation status.
