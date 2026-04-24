import React from "react";

interface JobApplyProps {
  onClick: () => void;
}

export function JobApply({ onClick }: JobApplyProps) {
  return (
    <button
      onClick={onClick}
      className="bg-brand hover:bg-brand/90 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-brand/20"
    >
      Apply
    </button>
  );
}
