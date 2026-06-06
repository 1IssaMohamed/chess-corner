// All shared TypeScript types live here. Start here when you want to understand
// the data model. Nothing gets imported from outside src/ — types only.

import type { CSSProperties } from "react";

export type Side = "white" | "black";
// 0 = never opened the line, 1 = finished Learn once, 2 = practiced at least
// once, 3 = mastered (3 clean practice runs + streak ≥ 2)
export type MasteryLevel = 0 | 1 | 2 | 3;

// One move in a line. Both the user's moves and the computer's moves use this.
export interface MoveAnnotation {
  san: string; // standard algebraic notation, e.g. "Nf3" or "O-O"
  explanation: string; // plain-English "why" shown in Learn mode
  wrongMoveWarning?: string; // extra hint shown if you play wrong at this step
  isKeyMove?: boolean; // flags the move with "KEY MOVE ★" in the UI
}

export type Difficulty = "beginner" | "intermediate" | "advanced";
export const DIFFICULTY_ORDER: Difficulty[] = [
  "beginner",
  "intermediate",
  "advanced",
];

export interface ContinuationMove {
  san: string;
  idea?: string;
}

// A single variation within an opening. moves[] contains BOTH sides alternating
// from index 0 — even indices are White's moves, odd are Black's.
export interface OpeningLine {
  id: string;
  name: string;
  moves: MoveAnnotation[];
  difficulty: Difficulty;
  description: string;
  // Optional "see the idea" mini-board shown after line_complete in Learn mode
  continuationMoves?: ContinuationMove[];
  continuationIdea?: string;
}

export interface Opening {
  id: string;
  name: string;
  side: Side;
  eco: string;
  description: string;
  lines: OpeningLine[];
  tags: string[];
}

export interface LineProgress {
  lineId: string;
  openingId: string;
  mastery: MasteryLevel;
  practiceAttempts: number;
  practiceSuccesses: number;
  lastPracticed: string | null;
  bestStreak: number;
  currentStreak: number;
  wrongMoveCount: number;
  wrongMovesByStep: number[]; // index = step index, value = times wrong at that step
}

export interface ProgressStore {
  version: number;
  lines: Record<string, LineProgress>;
  lastUpdated: string;
}

// "browsing" is like "playing" but won't auto-advance the computer's move —
// used when you're manually stepping through moves with Back/Forward/scroll.
export type LearnPhase =
  | "idle"
  | "intro"
  | "playing"
  | "browsing"
  | "awaiting_user"
  | "wrong_move"
  | "hint_shown"
  | "line_complete";

export interface LearnState {
  phase: LearnPhase;
  openingId: string | null;
  lineId: string | null;
  currentStepIndex: number;
  fen: string;
  wrongMoveSan: string | null;
  hintCount: number;
  highlightSquares: Record<string, CSSProperties>;
  arrowHint: [string, string] | null;
}

export type PracticePhase =
  | "idle"
  | "computer_move"
  | "awaiting_user"
  | "wrong_move"
  | "line_complete"
  | "gave_up";

export interface Refutation {
  san: string; // the opponent move that punishes the blunder
  capturedPiece: string; // chess.js piece letter: p/n/b/r/q
}

export interface PracticeState {
  phase: PracticePhase;
  openingId: string | null;
  lineId: string | null;
  currentStepIndex: number;
  fen: string;
  wrongMoveSan: string | null;
  highlightSquares: Record<string, CSSProperties>;
  wrongSteps: number[]; // step indices where the user made a mistake this session
  // When a wrong move hangs material, the opponent's punishing reply is shown
  // on the board so the user sees *why* the move was bad.
  refutation: Refutation | null;
  refutationMessage: string | null;
}
