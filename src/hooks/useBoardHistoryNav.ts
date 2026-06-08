// Shared ← / → and scroll-wheel navigation for the board-centric pages (Learn,
// Free Play). Binds a window keydown listener plus a wheel listener scoped to
// `elementRef`, and calls the latest callbacks through an internal ref so the
// listeners attach only once. Scroll up / → = forward, scroll down / ← = back.
//
// passive: false on the wheel listener is required so preventDefault() can stop
// the page from scrolling at the same time as stepping through moves.

import { useEffect, useRef, type RefObject } from "react";

interface BoardHistoryNav {
  onBack: () => void;
  onForward: () => void;
}

export function useBoardHistoryNav<T extends HTMLElement>(
  elementRef: RefObject<T | null>,
  { onBack, onForward }: BoardHistoryNav,
) {
  const navRef = useRef({ onBack, onForward });
  navRef.current = { onBack, onForward };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navRef.current.onBack();
      else if (e.key === "ArrowRight") navRef.current.onForward();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) navRef.current.onForward();
      else navRef.current.onBack();
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [elementRef]);
}
