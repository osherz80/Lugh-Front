import React from "react";

interface JobCardProps {
  title: string;
  location: string;
  matchScore: number;
  matchReason: string;
  tags: string[];
}

export function JobCard({ title, location, matchScore, matchReason, tags }: JobCardProps) {
  // Calculate dash offset for circular progress (assuming circumference is 100)
  const radius = 15.915;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (matchScore / 100) * circumference;

  return (
    <article className="bg-white p-8 rounded-2xl shadow-lugh-blur group hover:translate-y-[-2px] transition-all duration-300 border border-zinc-100/50">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 mb-1">{title}</h3>
          <p className="text-zinc-500 font-medium">{location}</p>
        </div>

        <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <circle
              className="stroke-brand-tint"
              strokeWidth="3"
              fill="transparent"
              r={radius}
              cx="18"
              cy="18"
            />
            <circle
              className="stroke-brand transition-all duration-1000 ease-out"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="18"
              cy="18"
            />
          </svg>
          <span className="absolute text-[11px] font-extrabold text-brand">{matchScore}%</span>
        </div>
      </div>

      <div className="bg-brand-tint/50 rounded-xl p-4 mb-6 flex gap-3 border-l-4 border-brand">
        <span className="material-symbols-outlined text-brand text-xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
        <p className="text-sm text-zinc-800 leading-relaxed">
          <span className="font-bold text-brand">Perfect fit:</span> {matchReason}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 text-zinc-400 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-surface-low rounded-full text-[11px] font-semibold text-zinc-600">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button className="bg-brand hover:bg-brand/90 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-brand/20">
          Apply
        </button>
      </div>
    </article>
  );
}
