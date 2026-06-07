// General-purpose button. Pass variant for colour and size for padding/text size.
// All HTML button attributes (onClick, disabled, title, etc.) work as usual.

import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-chess-amber text-gray-950 hover:bg-amber-400 active:bg-amber-400 font-semibold disabled:opacity-40 disabled:cursor-not-allowed",
  secondary:
    "border border-[var(--border)] text-text-primary hover:bg-[var(--bg-elevated)] active:bg-[var(--bg-elevated)] hover:border-[var(--accent-amber)] disabled:opacity-40 disabled:cursor-not-allowed",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-[var(--bg-elevated)] active:bg-[var(--bg-elevated)] disabled:opacity-40 disabled:cursor-not-allowed",
  danger:
    "bg-red-800/80 text-red-100 hover:bg-red-700 active:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm rounded",
  md: "px-4 py-2 text-sm rounded-md",
  lg: "px-5 py-2.5 text-base rounded-md",
};

export default function Button({
  variant = "secondary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 transition-colors duration-150 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
