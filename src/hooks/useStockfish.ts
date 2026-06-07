// Owns the Stockfish engine's lifecycle. Spins up the worker on mount and tears
// it down on unmount, so the ~0.5MB wasm only loads on pages that actually use it
// (FreePlayPage). Exposes the engine instance plus a `ready` flag for the UI.

import { useEffect, useRef, useState } from "react";
import { StockfishEngine } from "@/utils/engine";

export function useStockfish() {
  const engineRef = useRef<StockfishEngine | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const engine = new StockfishEngine();
    engineRef.current = engine;
    let cancelled = false;
    engine.whenReady().then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
      engineRef.current = null;
      engine.dispose();
    };
  }, []);

  return { engineRef, ready };
}
