"use client";

import React from "react";
import {
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps,
  Label,
} from "react-aria-components";

interface CustomProgressBarProps extends AriaProgressBarProps {
  label?: React.ReactNode;
  barClassName?: string;
  showValue?: boolean;
}

export function ProgressBar({
  label,
  barClassName = "bg-brand",
  showValue = true,
  ...props
}: CustomProgressBarProps) {
  return (
    <AriaProgressBar
      {...props}
      className="w-full flex flex-col gap-1 font-sans antialiased"
    >
      {({ percentage, valueText }) => (
        <>
          <div className="flex justify-between items-center text-[0.85rem] font-bold">
            {label && (
              <Label className="text-zinc-500 flex items-center gap-1">
                {label}
              </Label>
            )}
            {showValue && (
              <span className={barClassName.replace("bg-", "text-")}>
                {valueText}
              </span>
            )}
          </div>
          <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
            <div
              className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out ${barClassName}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </>
      )}
    </AriaProgressBar>
  );
}
