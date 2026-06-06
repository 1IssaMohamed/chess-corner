// Dark/light mode toggle. Theme is stored in localStorage between sessions and
// applied via a `data-theme` attribute on the <html> element, which the CSS
// variables in index.css pick up to swap the whole colour palette at once.

import { useState, useEffect } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("chesscorner_theme") as Theme) ?? "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("chesscorner_theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return { theme, toggle };
}
