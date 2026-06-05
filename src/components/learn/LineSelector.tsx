import type { Opening } from "@/types";
import { useNavigate } from "react-router-dom";

interface LineSelectorProps {
  opening: Opening;
  currentLineId: string;
  mode: "learn" | "practice";
}

export default function LineSelector({
  opening,
  currentLineId,
  mode,
}: LineSelectorProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2">
      <span
        className="text-xs font-semibold"
        style={{ color: "var(--text-secondary)" }}
      >
        Line:
      </span>
      <select
        value={currentLineId}
        onChange={(e) => navigate(`/${mode}/${opening.id}/${e.target.value}`)}
        className="flex-1 text-sm rounded-md px-2 py-1 border outline-none focus:ring-1"
        style={{
          background: "var(--bg-elevated)",
          borderColor: "var(--border)",
          color: "var(--text-primary)",
        }}
      >
        {opening.lines.map((line) => (
          <option key={line.id} value={line.id}>
            {line.name}
          </option>
        ))}
      </select>
    </div>
  );
}
