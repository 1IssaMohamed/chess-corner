import type { LineProgress, MasteryLevel, ProgressStore } from "@/types";

const STORAGE_KEY = "cheesychess_progress";
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

export function computeMastery(lp: LineProgress): MasteryLevel {
  if (lp.practiceSuccesses >= 3 && lp.currentStreak >= 2) return 3;
  if (lp.practiceSuccesses >= 1) return 2;
  if (lp.mastery >= 1) return 1;
  return 0;
}

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
