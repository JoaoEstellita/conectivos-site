import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "hero";
}

export function GradientText({ children, className = "", variant = "primary" }: GradientTextProps) {
  return (
    <span
      className={className}
      style={{
        background: variant === "hero"
          ? "linear-gradient(135deg, #C4B5FD, #93C5FD, #6EE7B7)"
          : "linear-gradient(135deg, #A78BFA, #60A5FA)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}
