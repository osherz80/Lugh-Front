"use client";

import React from "react";
import { FileTrigger, Button } from "react-aria-components";

export function AdaptationCard() {
  return (
    <div className="relative bg-surface-low rounded-3xl p-10 border-2 border-dashed border-zinc-200/80 flex flex-col items-center text-center h-full">
      {/* Icon */}
      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
        <span
          className="material-symbols-outlined text-brand text-2xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          upload_file
        </span>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col items-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
          The Adaptation
        </h2>
        <p className="text-slate-500 leading-relaxed text-[0.95rem] max-w-sm">
          Drop your existing resume here or paste a job link to tailor perfectly
          to the role requirements.
        </p>
      </div>

      {/* Action Button using React Aria FileTrigger */}
      <div className="mt-8 w-full">
        <FileTrigger
          acceptedFileTypes={[".pdf", ".doc", ".docx"]}
          onSelect={(e) => {
            if (e) {
              const files = Array.from(e);
              console.log("Selected files:", files);
              // Handle file upload here
            }
          }}
        >
          <Button className="w-full bg-white border border-slate-200 text-slate-700 font-bold py-4 px-6 rounded-xl transition-all hover:bg-slate-50 active:scale-[0.98] shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-brand/50 cursor-pointer">
            Select File
          </Button>
        </FileTrigger>
        <p className="text-center text-xs text-slate-400 mt-3 font-medium">
          PDF, DOCx up to 10MB
        </p>
      </div>
    </div>
  );
}
