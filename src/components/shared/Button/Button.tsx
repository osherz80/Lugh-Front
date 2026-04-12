"use client";

import { Button as AriaButton, ButtonProps as AriaButtonProps } from "react-aria-components";

type Variant = "primary" | "secondary" | "outline" | "social";

export interface ButtonProps extends AriaButtonProps {
  variant?: Variant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-lg shadow-brand/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:grayscale",
  secondary:
    "bg-surface-low text-zinc-900 hover:bg-surface-theme transition-colors disabled:opacity-50",
  outline:
    "bg-surface-low/50 text-zinc-600 hover:bg-surface-low transition-colors disabled:opacity-50",
  social:
    "bg-white shadow-sm hover:bg-surface-low transition-colors flex items-center justify-center h-[2.9rem]",
};

export const Button = ({
  variant = "primary",
  children,
  icon,
  fullWidth = false,
  isLoading = false,
  className = "",
  isDisabled,
  ...props
}: ButtonProps) => {
  return (
    <AriaButton
      isDisabled={isDisabled || isLoading}
      className={`
        relative inline-flex items-center justify-center font-bold outline-none transition-all duration-300 rounded-xl
        focus:ring-2 focus:ring-offset-2 focus:ring-brand/50
        ${variantStyles[variant]}
        ${fullWidth ? "w-full" : ""}
        ${variant === "social" ? "px-10 py-3" : "px-8 py-4"}
        ${className}
      `}
      {...props}
    >
      {icon && !isLoading && <span className="mr-2 flex items-center justify-center">{icon}</span>}
      {children}
    </AriaButton>
  );
};
