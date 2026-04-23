import React from "react";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Rank Stat */}
      <div className="bg-white p-4 rounded-2xl no-line-shadow text-center border border-zinc-100">
        <span
          className="material-symbols-outlined text-amber-500 mb-2"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          stars
        </span>
        <p className="text-[10px] uppercase font-bold text-zinc-500">Rank</p>
        <p className="text-xl font-extrabold text-brand">Top 5%</p>
      </div>

      {/* Views Stat */}
      <div className="bg-white p-4 rounded-2xl no-line-shadow text-center border border-zinc-100">
        <span
          className="material-symbols-outlined text-blue-500 mb-2"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          visibility
        </span>
        <p className="text-[10px] uppercase font-bold text-zinc-500">Views</p>
        <p className="text-xl font-extrabold text-brand">124</p>
      </div>
    </div>
  );
}
