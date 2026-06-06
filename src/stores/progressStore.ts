// Pure functions for reading and writing progress to localStorage.
// Every function that "changes" something returns a NEW ProgressStore object
// rather than mutating the existing one — keeps state management predictable.

import type { LineProgress, MasteryLevel, ProgressStore } from "@/types";

// The localStorage key and schema version. Bump CURRENT_VERSION + add a
// migration case in migrateProgressStore whenever the LineProgress shape changes.
const STORAGE_KEY = "chesscorner_progress";
const CURRENT_VERSION = 2;

export function makeLineKey(openingId: string, lineId: string): string {
  return `${openingId}::${lineId}`;
}

function defaultLineProgress(openingId: string, lineId: string): LineProgress {
  return {
    lineId,
    openingId,
    mastery: 0,
    practiceAttempts: 0,
    practiceSuccesses: 0,
    lastPracticed: null,
    bestStreak: 0,
    currentStreak: 0,
    wrongMoveCount: 0,
    wrongMovesByStep: [],
  };
}

function emptyStore(): ProgressStore {
  return {
    version: CURRENT_VERSION,
    lines: {},
    lastUpdated: new Date().toISOString(),
  };
}

// Handles loading data saved by an older version of the app. When we add new
// fields to LineProgress, old saved data won't have them — this backfills them.
export function migrateProgressStore(raw: unknown): ProgressStore {
  if (typeof raw !== "object" || raw === null) return emptyStore();
  const obj = raw as Record<string, unknown>;
  if (typeof obj.lines !== "object" || obj.lines === null) return emptyStore();

  // v1 → v2: backfill wrongMovesByStep on existing lines
  if (obj.version === 1) {
    const lines = obj.lines as Record<string, LineProgress>;
    const migrated: Record<string, LineProgress> = {};
    for (const [key, lp] of Object.entries(lines)) {
      migrated[key] = { ...lp, wrongMovesByStep: [] };
    }
    return {
      version: 2,
      lines: migrated,
      lastUpdated:
        typeof obj.lastUpdated === "string"
          ? obj.lastUpdated
          : new Date().toISOString(),
    };
  }

  if (obj.version !== CURRENT_VERSION) return emptyStore();
  return obj as unknown as ProgressStore;
}

export function loadProgress(): ProgressStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyStore();
    return migrateProgressStore(JSON.parse(raw));
  } catch {
    return emptyStore();
  }
}

export function saveProgress(store: ProgressStore): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function getLineProgress(
  store: ProgressStore,
  openingId: string,
  lineId: string,
): LineProgress {
  return (
    store.lines[makeLineKey(openingId, lineId)] ??
    defaultLineProgress(openingId, lineId)
  );
}

// The mastery level ladder:
//   0 = never opened  1 = finished Learn  2 = practiced at least once
//   3 = mastered — requires 3 clean practice runs AND a current streak of ≥ 2
// The streak requirement means you can't just lucky your way to mastered in one go.
export function computeMastery(lp: LineProgress): MasteryLevel {
  if (lp.practiceSuccesses >= 3 && lp.currentStreak >= 2) return 3;
  if (lp.practiceSuccesses >= 1) return 2;
  if (lp.mastery >= 1) return 1;
  return 0;
}

// Called when a user finishes Learn mode on a line for the first time.
// Only bumps mastery to 1 if they haven't practiced it yet (higher mastery wins).
export function markLineSeen(
  store: ProgressStore,
  openingId: string,
  lineId: string,
): ProgressStore {
  const key = makeLineKey(openingId, lineId);
  const existing = getLineProgress(store, openingId, lineId);
  const updated: LineProgress = {
    ...existing,
    mastery: existing.mastery < 1 ? 1 : existing.mastery,
  };
  return {
    ...store,
    lines: {
      ...store.lines,
      [key]: { ...updated, mastery: computeMastery(updated) },
    },
    lastUpdated: new Date().toISOString(),
  };
}

// Called at the end of a practice session (whether the user finished or gave up).
// penalties = number of wrong moves + 1 if gave up. A perfect run = penalties 0.
// wrongSteps tracks which step indices you got wrong, so we can show "stumbles on X" in the UI.
export function recordPracticeAttempt(
  store: ProgressStore,
  openingId: string,
  lineId: string,
  penalties: number,
  wrongSteps: number[],
): ProgressStore {
  const key = makeLineKey(openingId, lineId);
  const existing = getLineProgress(store, openingId, lineId);
  const success = penalties === 0;
  const newStreak = success ? existing.currentStreak + 1 : 0;

  const newWrongMovesByStep = [...existing.wrongMovesByStep];
  for (const step of wrongSteps) {
    newWrongMovesByStep[step] = (newWrongMovesByStep[step] ?? 0) + 1;
  }

  const updated: LineProgress = {
    ...existing,
    practiceAttempts: existing.practiceAttempts + 1,
    practiceSuccesses: success
      ? existing.practiceSuccesses + 1
      : existing.practiceSuccesses,
    lastPracticed: new Date().toISOString(),
    currentStreak: newStreak,
    bestStreak: Math.max(existing.bestStreak, newStreak),
    wrongMoveCount: existing.wrongMoveCount + penalties,
    wrongMovesByStep: newWrongMovesByStep,
  };
  return {
    ...store,
    lines: {
      ...store.lines,
      [key]: { ...updated, mastery: computeMastery(updated) },
    },
    lastUpdated: new Date().toISOString(),
  };
}
