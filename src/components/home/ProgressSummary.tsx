import ProgressBar from "@/components/ui/ProgressBar";

interface ProgressSummaryProps {
  practiced: number;
  mastered: number;
  totalLines: number;
}

export default function ProgressSummary({
  practiced,
  mastered,
  totalLines,
}: ProgressSummaryProps) {
  return (
    <div
      className="rounded-xl p-5 border"
      style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
    >
      <h2
        className="text-base font-semibold mb-1"
        style={{ color: "var(--text-primary)" }}
      >
        Your Repertoire
      </h2>
      <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
        {practiced} of {totalLines} lines practiced · {mastered} mastered
      </p>
      <ProgressBar value={practiced} max={totalLines} showLabel />
    </div>
  );
}
