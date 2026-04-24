import React from "react";

interface MatchHighlightProps {
  matchScore: number;
  matchReason: string;
}

export function MatchHighlight({ matchScore, matchReason }: MatchHighlightProps) {

  const icon = matchScore >= 95 ? "bolt" : "auto_awesome"
  const title = matchScore >= 95 ? "Perfect fit:" : "High Potential:"

  return (
    <div className="bg-brand-tint/50 rounded-xl p-4 mb-6 flex gap-3 border-l-4 border-brand">
      <span
        className="material-symbols-outlined text-brand text-xl shrink-0"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
      <p className="text-sm text-zinc-800 leading-relaxed">
        <span className="font-bold text-brand">{title} </span>
        {matchReason}
      </p>
    </div>
  );
}
