"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success" | "warning" | "danger";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
          {
            "bg-surface-100 text-text-secondary": variant === "default",
            "bg-primary/20 text-primary": variant === "primary",
            "bg-green-500/20 text-green-400": variant === "success",
            "bg-yellow-500/20 text-yellow-400": variant === "warning",
            "bg-red-500/20 text-red-400": variant === "danger",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };