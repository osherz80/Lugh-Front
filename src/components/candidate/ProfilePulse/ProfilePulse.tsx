import React from "react";

export function ProfilePulse() {
  return (
    <div className="bg-surface-lowest p-8 rounded-2xl no-line-shadow border-t-4 border-brand">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="material-symbols-outlined text-brand"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          analytics
        </span>
        <h3 className="font-bold text-lg text-zinc-900">Profile Pulse</h3>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center">
          <span className="text-sm text-zinc-500">Profile Strength</span>
          <span className="text-sm font-bold text-brand">65%</span>
        </div>
        <div className="w-full bg-surface-low h-2 rounded-full overflow-hidden">
          <div className="bg-brand h-full w-[65%] rounded-full"></div>
        </div>
        <p className="text-xs text-zinc-500 leading-relaxed">
          Your profile is missing key metrics that AI recruiters look for in high-tier roles.
        </p>
      </div>

      <button className="w-full seeker-gradient text-white py-4 rounded-xl font-bold text-sm shadow-xl shadow-brand/20 hover:shadow-brand/30 transition-all active:scale-[0.98]">
        Complete Profile to Unlock AI Match Scores
      </button>
    </div>
  );
}
