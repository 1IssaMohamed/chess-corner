import type { CSSProperties } from "react";

export type Side = "white" | "black";
export type MasteryLevel = 0 | 1 | 2 | 3;

export interface MoveAnnotation {
  san: string;
  explanation: string;
  wrongMoveWarning?: string;
  isKeyMove?: boolean;
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

export interface OpeningLine {
  id: string;
  name: string;
  moves: MoveAnnotation[];
  difficulty: Difficulty;
  description: string;
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
