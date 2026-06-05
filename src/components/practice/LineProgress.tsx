import type { LineProgress as LineProgressType } from "@/types";
import ProgressBar from "@/components/ui/ProgressBar";

interface LineProgressProps {
  progress: LineProgressType | undefined;
}

const masteryLabels = ["Unseen", "Seen", "Practiced", "Mastered"];
const masteryColors = [
  "text-gray-500",
  "text-blue-400",
  "text-amber-400",
  "text-green-400",
];

export default function LineProgress({ progress }: LineProgressProps) {
  if (!progress) return null;

  const mastery = progress.mastery;
  const successRate =
    progress.practiceAttempts === 0
      ? 0
      : Math.round(
          (progress.practiceSuccesses / progress.practiceAttempts) * 100,
        );

  return (
    <div
      className="rounded-lg p-4"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--text-secondary)" }}
        >
          Your Progress
        </span>
        <span className={`text-sm font-bold ${masteryColors[mastery]}`}>
          {masteryLabels[mastery]}
        </span>
      </div>

      <ProgressBar
        value={progress.practiceSuccesses}
        max={Math.max(progress.practiceAttempts, 1)}
        className="mb-3"
        showLabel
      />

      <div
        className="grid grid-cols-2 gap-2 text-xs"
        style={{ color: "var(--text-secondary)" }}
      >
        <div>
          <span
            className="block font-medium"
            style={{ color: "var(--text-primary)" }}
          >
            {progress.practiceAttempts}
          </span>
          Attempts
        </div>
        <div>
          <span
            className="block font-medium"
            style={{ color: "var(--text-primary)" }}
          >
            {progress.practiceSuccesses}
          </span>
          Perfect runs
        </div>
        <div>
          <span
            className="block font-medium"
            style={{ color: "var(--text-primary)" }}
          >
            {progress.currentStreak}
          </span>
          Current streak
        </div>
        <div>
          <span
            className="block font-medium"
            style={{ color: "var(--text-primary)" }}
          >
            {successRate}%
          </span>
          Success rate
        </div>
      </div>
    </div>
  );
}
