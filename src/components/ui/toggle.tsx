"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, label, checked, onChange, ...props }, ref) => {
    return (
      <label className="inline-flex items-center gap-3 cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            ref={ref}
            checked={checked}
            onChange={onChange}
            className="sr-only"
            {...props}
          />
          <div
            className={cn(
              "w-11 h-6 bg-surface-100 rounded-full transition-colors duration-200",
              checked && "bg-primary"
            )}
          />
          <div
            className={cn(
              "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 shadow-md",
              checked && "translate-x-5"
            )}
          />
        </div>
        {label && (
          <span className="text-sm text-text-secondary">{label}</span>
        )}
      </label>
    );
  }
);
Toggle.displayName = "Toggle";

export { Toggle };