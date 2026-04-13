"use client";

import { Separator } from "react-aria-components";

interface DividerProps {
  label?: string;
}

export const Divider = ({ label }: DividerProps) => {
  if (label) {
    return (
      <div className="flex items-center w-full py-2">
        <div className="flex-1 h-[0.1rem] bg-surface-low" />
        <span className="px-4 text-xs font-bold text-zinc-400 uppercase tracking-[0.08rem]">
          {label}
        </span>
        <div className="flex-1 h-[0.1rem] bg-surface-low" />
      </div>
    );
  }

  return <div className="w-full h-[0.1rem] bg-surface-low my-4" />;
};
