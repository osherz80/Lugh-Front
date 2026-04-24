import React from "react";

export function JobFilters() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold tracking-tight text-zinc-900">Curated Opportunities</h2>
      <div className="flex gap-2 bg-surface-low p-1 rounded-full">
        <button className="px-4 py-1.5 bg-white shadow-sm rounded-full text-xs font-bold text-brand transition-all">
          All Roles
        </button>
        <button className="px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-brand transition-all">
          Remote
        </button>
      </div>
    </div>
  );
}
