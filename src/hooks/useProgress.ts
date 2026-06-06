// React hook that wraps progressStore. Holds the current store in React state
// so components re-render when progress changes, and keeps localStorage in sync.

import { useState, useCallback, useMemo } from "react";
import {
  loadProgress,
  saveProgress,
  getLineProgress,
  markLineSeen,
  recordPracticeAttempt,
} from "@/stores/progressStore";
import type { LineProgress, ProgressStore } from "@/types";

export function useProgress() {
  const [store, setStore] = useState<ProgressStore>(loadProgress);

  // Saves to localStorage AND updates React state in one shot — always do both
  // together so the UI and the persisted data stay in sync.
  const update = useCallback((next: ProgressStore) => {
    saveProgress(next);
    setStore(next);
  }, []);

  const markSeen = useCallback(
    (openingId: string, lineId: string) => {
      update(markLineSeen(store, openingId, lineId));
    },
    [store, update],
  );

  const recordAttempt = useCallback(
    (
      openingId: string,
      lineId: string,
      penalties: number,
      wrongSteps: number[],
    ) => {
      update(
        recordPracticeAttempt(store, openingId, lineId, penalties, wrongSteps),
      );
    },
    [store, update],
  );

  const getLine = useCallback(
    (openingId: string, lineId: string): LineProgress => {
      return getLineProgress(store, openingId, lineId);
    },
    [store],
  );

  const { totalLines, totalMastered } = useMemo(() => {
    const lines = Object.values(store.lines);
    return {
      totalLines: lines.length,
      totalMastered: lines.reduce((n, l) => n + (l.mastery === 3 ? 1 : 0), 0),
    };
  }, [store]);

  return { store, markSeen, recordAttempt, getLine, totalLines, totalMastered };
}
