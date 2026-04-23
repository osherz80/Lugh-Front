"use client";

import { forwardRef, useState } from "react";
import { TextField, Input as AriaInput, Label, FieldError, Text } from "react-aria-components";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  description?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", name, placeholder, error, description, ...rest }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const isPassword = type === "password";
    const currentType = isPassword ? (isVisible ? "text" : "password") : type;

    return (
      <TextField
        className="w-full flex flex-col gap-1.5 group"
        name={name}
        type={currentType}
        isInvalid={!!error}
      >
        <Label className="text-xs font-bold text-zinc-600 uppercase tracking-widest pl-1">
          {label}
        </Label>
        <div className="relative w-full">
          <AriaInput
            ref={ref}
            placeholder={placeholder}
            className={`w-full px-4 py-3 bg-surface-low font-sans border border-zinc-200 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-brand focus:ring-1 focus:ring-brand/20 text-zinc-900 placeholder:text-zinc-400 disabled:opacity-50 ${isPassword ? "pr-12" : ""}`}
            {...rest}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setIsVisible(!isVisible)}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center p-1.5 text-zinc-400 hover:text-zinc-600 focus:outline-none transition-colors"
              aria-label={isVisible ? "Hide password" : "Show password"}
            >
              {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
        {description && <Text slot="description" className="text-sm text-zinc-500 pl-1">{description}</Text>}
        {error && <FieldError className="text-sm text-red-500 font-medium pl-1">{error}</FieldError>}
      </TextField>
    );
  }
);

Input.displayName = "Input";
