import React from "react";

export function JobSearch() {
  return (
    <div className="relative group w-full max-w-2xl mx-auto mb-10">
      <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
        <span className="material-symbols-outlined text-zinc-400 text-2xl">search</span>
      </div>
      <input
        type="text"
        placeholder="What's your next move?"
        className="w-full bg-white h-16 pl-16 pr-6 rounded-2xl shadow-lugh-blur border-none focus:ring-2 focus:ring-brand/20 text-lg transition-all placeholder:text-zinc-400 font-sans outline-none"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
        <kbd className="px-2 py-1 bg-surface-low rounded text-[10px] font-bold text-zinc-400">⌘ K</kbd>
      </div>
    </div>
  );
}
