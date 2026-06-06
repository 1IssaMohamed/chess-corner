import { NavLink, useNavigate } from "react-router-dom";
import { REPERTOIRE } from "@/data/openings";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside
      className="w-64 flex-shrink-0 flex flex-col border-r"
      style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
    >
      {/* Logo */}
      <div
        className="px-5 py-4 border-b cursor-pointer"
        style={{ borderColor: "var(--border)" }}
        onClick={() => navigate("/")}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">♟</span>
          <div>
            <div
              className="font-bold text-base"
              style={{ color: "var(--accent-amber)" }}
            >
              Chess Corner
            </div>
            <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Opening Repertoire
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav
        className="px-3 py-3 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
              isActive
                ? "bg-chess-elevated text-chess-amber font-medium"
                : "text-gray-400 hover:text-gray-200 hover:bg-chess-elevated"
            }`
          }
        >
          <span>⊞</span> Home
        </NavLink>
      </nav>

      {/* Opening tree */}
      <div className="flex-1 overflow-y-auto px-3 py-3">
        <div
          className="text-xs font-semibold uppercase tracking-wider mb-2 px-2"
          style={{ color: "var(--text-secondary)" }}
        >
          Playing White
        </div>
        {REPERTOIRE.filter((o) => o.side === "white").map((opening) => (
          <OpeningTreeItem key={opening.id} opening={opening} />
        ))}
        <div
          className="text-xs font-semibold uppercase tracking-wider mb-2 mt-4 px-2"
          style={{ color: "var(--text-secondary)" }}
        >
          Playing Black
        </div>
        {REPERTOIRE.filter((o) => o.side === "black").map((opening) => (
          <OpeningTreeItem key={opening.id} opening={opening} />
        ))}
      </div>
    </aside>
  );
}

function OpeningTreeItem({ opening }: { opening: (typeof REPERTOIRE)[0] }) {
  return (
    <div className="mb-1">
      <NavLink
        to={`/learn/${opening.id}/${opening.lines[0]?.id ?? "main-line"}`}
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors w-full text-left ${
            isActive
              ? "bg-chess-elevated text-chess-amber font-medium"
              : "text-gray-300 hover:text-gray-100 hover:bg-chess-elevated/50"
          }`
        }
      >
        <span className="text-xs opacity-50">{opening.eco}</span>
        <span className="truncate">{opening.name}</span>
      </NavLink>
      <div className="ml-4">
        {opening.lines.map((line) => (
          <NavLink
            key={line.id}
            to={`/learn/${opening.id}/${line.id}`}
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3 py-1 rounded-md text-xs transition-colors w-full ${
                isActive
                  ? "text-chess-amber bg-chess-elevated/60"
                  : "text-gray-500 hover:text-gray-300 hover:bg-chess-elevated/30"
              }`
            }
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0" />
            <span className="truncate">{line.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
