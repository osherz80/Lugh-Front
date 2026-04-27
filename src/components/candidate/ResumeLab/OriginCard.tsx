import React from "react";

export function OriginCard() {
  return (
    <div className="relative bg-white rounded-3xl p-10 overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full">
      {/* Decorative Top-Right Blob */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-tint/40 rounded-bl-[100px] -mr-4 -mt-4 pointer-events-none" />

      {/* Icon */}
      <div className="w-14 h-14 bg-brand-tint/60 rounded-2xl flex items-center justify-center mb-6">
        <span
          className="material-symbols-outlined text-brand text-2xl"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          auto_awesome
        </span>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
          The Origin
        </h2>
        <p className="text-slate-500 leading-relaxed text-[0.95rem] pr-4">
          Generate from Smart Profile in 30s. Our AI engine curates your history
          into a high-impact narrative instantly.
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-8">
        <button className="w-full bg-brand text-white font-bold py-4 px-6 rounded-xl transition-all hover:bg-brand/90 active:scale-[0.98] shadow-sm">
          Build Master CV
        </button>
      </div>
    </div>
  );
}
