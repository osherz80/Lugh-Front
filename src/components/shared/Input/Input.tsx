"use client";

import { forwardRef } from "react";
import { TextField, Input as AriaInput, Label, FieldError, Text } from "react-aria-components";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  description?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", name, placeholder, error, description, ...rest }, ref) => {
    return (
      <TextField 
        className="w-full flex flex-col gap-1.5 group" 
        name={name} 
        type={type}
        isInvalid={!!error}
      >
        <Label className="text-xs font-bold text-zinc-600 uppercase tracking-widest pl-1">
          {label}
        </Label>
        <AriaInput
          ref={ref}
          placeholder={placeholder}
          className="w-full px-4 py-3.5 bg-canvas font-sans border-none rounded-xl outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-brand/20 text-zinc-900 placeholder:text-zinc-400 disabled:opacity-50"
          {...rest}
        />
        {description && <Text slot="description" className="text-sm text-zinc-500 pl-1">{description}</Text>}
        {error && <FieldError className="text-sm text-red-500 font-medium pl-1">{error}</FieldError>}
      </TextField>
    );
  }
);

Input.displayName = "Input";
