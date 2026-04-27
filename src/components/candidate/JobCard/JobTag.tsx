import React from "react";

interface JobTagProps {
  label: string;
  onClick: (tag: string) => void;
}

export function JobTag({ label, onClick }: JobTagProps) {
  return (
    <button
      onClick={() => onClick(label)}
      className="px-3 py-1 bg-surface-low hover:bg-zinc-200 rounded-full text-[0.6875rem] font-semibold text-zinc-600 transition-colors active:scale-95"
    >
      {label}
    </button>
  );
}
