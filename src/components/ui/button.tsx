"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-primary hover:bg-primary-dark text-white hover:shadow-lg hover:shadow-primary/25": variant === "primary",
            "bg-surface-100 hover:bg-surface-200 text-white border border-border": variant === "secondary",
            "border border-border hover:border-primary bg-transparent text-white hover:bg-surface": variant === "outline",
            "bg-transparent hover:bg-surface text-text-secondary hover:text-white": variant === "ghost",
            "bg-red-600 hover:bg-red-700 text-white": variant === "danger",
          },
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-4 py-2.5 text-sm": size === "md",
            "px-6 py-3 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };