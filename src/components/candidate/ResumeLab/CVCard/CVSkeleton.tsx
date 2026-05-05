import React from "react";

export function CVSkeleton() {
  return (
    <div className="bg-surface-low rounded-2xl aspect-[4/3] p-6 mb-6 flex flex-col gap-5 overflow-hidden">
      <div className="space-y-2">
        <div className="h-4 bg-slate-200/70 rounded-full w-1/3"></div>
        <div className="h-3 bg-slate-200/50 rounded-full w-1/4"></div>
      </div>
      <div className="space-y-3 mt-4">
        <div className="h-2 bg-slate-200/50 rounded-full w-full"></div>
        <div className="h-2 bg-slate-200/50 rounded-full w-5/6"></div>
        <div className="h-2 bg-slate-200/50 rounded-full w-4/6"></div>
      </div>
    </div>
  );
}
