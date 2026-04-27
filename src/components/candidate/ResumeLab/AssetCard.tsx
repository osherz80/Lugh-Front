import React from "react";

interface AssetCardProps {
  type: "master" | "tailored";
  title: string;
  tags: string[];
  score: number;
  tailoredFor?: string;
  date: string;
  format: string;
}

export function AssetCard({
  type,
  title,
  tags,
  score,
  tailoredFor,
  date,
  format,
}: AssetCardProps) {
  return (
    <div className="relative bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
      {/* Master Badge */}
      {type === "master" && (
        <div className="absolute -top-3 left-6 bg-brand text-white text-[0.625rem] font-bold px-3 py-1 uppercase tracking-wider rounded-full shadow-sm">
          Master
        </div>
      )}

      {/* Document Skeleton Placeholder */}
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

      {/* Header: Title & Score */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight line-clamp-1">
            {title}
          </h3>
          <div className="flex gap-2 mt-2.5 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-surface-low text-zinc-600 text-[0.625rem] font-bold px-2.5 py-1 rounded border border-zinc-200/50 uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Score Circle */}
        <div className="w-12 h-12 rounded-full border-[2.5px] border-brand flex items-center justify-center shrink-0">
          <span className="text-brand font-extrabold text-[0.8rem]">{score}%</span>
        </div>
      </div>

      {/* Spacer to push footer to bottom if needed */}
      <div className="flex-grow"></div>

      {/* Info Line */}
      <div className="mt-8 flex items-center gap-1.5">
        {type === "tailored" ? (
          <>
            <span
              className="material-symbols-outlined text-[0.95rem] text-brand"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              domain
            </span>
            <span className="text-sm font-bold text-brand">
              Tailored for: {tailoredFor}
            </span>
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-[0.95rem] text-slate-400">
              info
            </span>
            <span className="text-sm text-slate-500">Source for all variants</span>
          </>
        )}
      </div>

      {/* Footer Line */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-slate-400">
          <span className="material-symbols-outlined text-[0.95rem]">
            history
          </span>
          <span className="text-xs font-medium">{date}</span>
        </div>
        <span className="bg-surface-low text-zinc-500 font-bold text-[0.625rem] px-2 py-1 rounded">
          {format}
        </span>
      </div>
    </div>
  );
}
