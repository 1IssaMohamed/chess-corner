// sticky top-0 z-50 keeps the header on top while the page content scrolls under it.

import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

export default function TopBar() {
  const { theme, toggle } = useTheme();

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-base hover:opacity-75 transition-opacity"
          style={{ color: "var(--text-primary)", textDecoration: "none" }}
        >
          <span className="text-xl" style={{ color: "var(--accent-amber)" }}>
            ♟
          </span>
          Chess Corner
        </Link>

        <button
          onClick={toggle}
          className="text-sm px-3 py-1.5 rounded-lg border transition-all hover:opacity-75"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-elevated)",
            color: "var(--text-secondary)",
            cursor: "pointer",
          }}
        >
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
      </div>
    </header>
  );
}
