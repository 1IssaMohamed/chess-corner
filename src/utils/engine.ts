// Thin UCI wrapper around the Stockfish web worker. No React in here — it just
// speaks the engine's text protocol and hands back parsed results. The worker is
// the single-threaded stockfish.js build (vendored in public/engine/), which needs
// no COOP/COEP headers, so it works on GitHub Pages.
//
// Stockfish is mutable and single-threaded: it processes one search at a time. So
// every command is serialized through an internal promise chain — a new request
// waits for the previous one to finish. Callers that fire rapidly (e.g. an eval on
// every position change) should ignore stale results themselves; see useFreePlay.

import type { EngineScore } from "@/types";

// Worker path respects Vite's base (`/chess-corner/` on Pages, `/` locally). The
// worker resolves stockfish.wasm relative to its own URL, so the two files just
// need to sit next to each other in public/engine/.
const ENGINE_URL = `${import.meta.env.BASE_URL}engine/stockfish.wasm.js`;

// Search settings. Depth drives the eval bar (fast on this single-threaded build);
// movetime is how long the engine thinks for its opponent reply in engine mode.
const DEFAULT_EVAL_DEPTH = 12;
const DEFAULT_MOVE_TIME_MS = 800;

// Pulls "score cp 34" or "score mate -3" out of an info line. Score is from the
// perspective of the side to move — the caller converts to White's perspective.
function parseScore(line: string): EngineScore | null {
  const m = line.match(/score (cp|mate) (-?\d+)/);
  if (!m) return null;
  const value = parseInt(m[2], 10);
  return m[1] === "cp" ? { cp: value, mate: null } : { cp: null, mate: value };
}

// Splits a UCI move string ("e2e4", "e7e8q") into chess.js move fields. UCI
// format knowledge lives here with the rest of the protocol handling. Promotion
// defaults to queen (we never show a promotion picker).
export function parseUciMove(uci: string): {
  from: string;
  to: string;
  promotion: string;
} {
  return {
    from: uci.slice(0, 2),
    to: uci.slice(2, 4),
    promotion: uci.slice(4, 5) || "q",
  };
}

export class StockfishEngine {
  private worker: Worker;
  private listener: ((line: string) => void) | null = null;
  // Serializes commands — each task runs only after the previous settles.
  private chain: Promise<unknown> = Promise.resolve();
  private ready: Promise<void>;

  constructor() {
    this.worker = new Worker(ENGINE_URL);
    this.worker.onmessage = (e: MessageEvent) => {
      const line = typeof e.data === "string" ? e.data : (e.data?.data ?? "");
      this.listener?.(line);
    };
    this.ready = this.boot();
  }

  // Queues a transaction: install a line listener, send the command(s), and
  // resolve once `onLine` calls its resolve callback (on a terminating line).
  private run<T>(
    send: () => void,
    onLine: (line: string, resolve: (value: T) => void) => void,
  ): Promise<T> {
    const task = () =>
      new Promise<T>((resolve) => {
        this.listener = (line) =>
          onLine(line, (value) => {
            this.listener = null;
            resolve(value);
          });
        send();
      });
    const result = this.chain.then(task);
    // Keep the chain alive even if a task rejects (it shouldn't, but be safe).
    this.chain = result.catch(() => undefined);
    return result;
  }

  // Resolves once the engine has finished its UCI handshake.
  whenReady(): Promise<void> {
    return this.ready;
  }

  private async boot(): Promise<void> {
    await this.run<void>(
      () => this.worker.postMessage("uci"),
      (line, resolve) => {
        if (line.startsWith("uciok")) resolve();
      },
    );
    await this.run<void>(
      () => this.worker.postMessage("isready"),
      (line, resolve) => {
        if (line.startsWith("readyok")) resolve();
      },
    );
  }

  // Searches to a fixed depth and returns the final score (side-to-move POV).
  async evaluate(
    fen: string,
    depth = DEFAULT_EVAL_DEPTH,
  ): Promise<EngineScore> {
    await this.ready;
    let last: EngineScore = { cp: null, mate: null };
    return this.run<EngineScore>(
      () => {
        this.worker.postMessage(`position fen ${fen}`);
        this.worker.postMessage(`go depth ${depth}`);
      },
      (line, resolve) => {
        if (line.startsWith("info")) {
          const score = parseScore(line);
          if (score) last = score;
        } else if (line.startsWith("bestmove")) {
          resolve(last);
        }
      },
    );
  }

  // Picks a move after thinking for `movetime` ms. Returns the UCI move string
  // (e.g. "e2e4", "e7e8q") or null if there's no legal move.
  async bestMove(
    fen: string,
    movetime = DEFAULT_MOVE_TIME_MS,
  ): Promise<string | null> {
    await this.ready;
    return this.run<string | null>(
      () => {
        this.worker.postMessage(`position fen ${fen}`);
        this.worker.postMessage(`go movetime ${movetime}`);
      },
      (line, resolve) => {
        if (line.startsWith("bestmove")) {
          const move = line.split(/\s+/)[1];
          resolve(move && move !== "(none)" ? move : null);
        }
      },
    );
  }

  dispose(): void {
    this.listener = null;
    this.worker.terminate();
  }
}
