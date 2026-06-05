interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  className?: string;
  showLabel?: boolean;
}

export default function ProgressBar({
  value,
  max,
  color = "bg-chess-amber",
  className = "",
  showLabel = false,
}: ProgressBarProps) {
  const percent =
    max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100));

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex-1 h-2 bg-chess-elevated rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-500`}
          style={{ width: `${percent}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-gray-400 w-10 text-right">
          {percent}%
        </span>
      )}
    </div>
  );
}
