type BadgeVariant =
  | "white"
  | "black"
  | "beginner"
  | "intermediate"
  | "advanced"
  | "learn"
  | "practice";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  white: "bg-amber-900/40 text-amber-200 border border-amber-700/40",
  black: "bg-gray-700/60 text-gray-300 border border-gray-600/40",
  beginner: "bg-green-900/40 text-green-300 border border-green-700/40",
  intermediate: "bg-blue-900/40 text-blue-300 border border-blue-700/40",
  advanced: "bg-red-900/40 text-red-300 border border-red-700/40",
  learn: "bg-amber-900/40 text-amber-200 border border-amber-700/40",
  practice: "bg-purple-900/40 text-purple-300 border border-purple-700/40",
};

export default function Badge({
  variant = "white",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
