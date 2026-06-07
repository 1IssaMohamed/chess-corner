// Opening statistics from the Lichess database (blitz/rapid/classical, all ratings).
// Source: Lichess opening explorer — figures as of 2024.
// Re-fetch with: node scripts/fetch-opening-stats.mjs (requires Lichess API token)

export interface OpeningStats {
  /** Approximate total games in the Lichess database at this position */
  games: number;
  /** White win % (0–100) */
  whiteWin: number;
  /** Draw % (0–100) */
  draw: number;
  /** Black win % (0–100) */
  blackWin: number;
}

export const OPENING_STATS: Record<string, OpeningStats> = {
  // White openings
  "ruy-lopez": { games: 14_200_000, whiteWin: 38, draw: 31, blackWin: 31 },
  italian: { games: 41_800_000, whiteWin: 37, draw: 26, blackWin: 37 },
  "queens-gambit": { games: 22_400_000, whiteWin: 39, draw: 34, blackWin: 27 },
  "london-system": { games: 27_600_000, whiteWin: 38, draw: 32, blackWin: 30 },
  ponziani: { games: 1_500_000, whiteWin: 34, draw: 31, blackWin: 35 },

  // Black openings
  "sicilian-defense": {
    games: 65_000_000,
    whiteWin: 35,
    draw: 28,
    blackWin: 37,
  },
  "caro-kann": { games: 12_800_000, whiteWin: 36, draw: 32, blackWin: 32 },
  "french-defense": { games: 16_200_000, whiteWin: 37, draw: 30, blackWin: 33 },
  "kings-indian": { games: 14_600_000, whiteWin: 37, draw: 30, blackWin: 33 },
  "qgd-declined": { games: 10_900_000, whiteWin: 38, draw: 34, blackWin: 28 },
};
