"use client";

import { Separator } from "react-aria-components";

interface DividerProps {
  label?: string;
}

export const Divider = ({ label }: DividerProps) => {
  if (label) {
    return (
      <div className="flex items-center w-full py-2">
        <Separator className="flex-1 h-px border-t border-[#E0E3E5]" />
        <span className="px-4 text-xs font-bold text-zinc-400 uppercase tracking-[1.2px]">
          {label}
        </span>
        <Separator className="flex-1 h-px border-t border-[#E0E3E5]" />
      </div>
    );
  }

  return <Separator className="w-full h-px border-t border-[#E0E3E5] my-4" />;
};
