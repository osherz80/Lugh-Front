"use client";

import React from "react";
import { useRouter } from "next/navigation";

export interface PostJobHeaderProps {
  formMode: "Manual" | "Auto";
  onFormModeChange: (mode: "Manual" | "Auto") => void;
}

export function PostJobHeader({ formMode, onFormModeChange }: PostJobHeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 w-full z-30 flex justify-between items-center px-8 h-24 bg-canvas/80 backdrop-blur-md border-b border-zinc-200/50">
      <div className="flex items-center gap-8 h-full">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push("/recruiter/listed-jobs")}
            className="text-zinc-500 hover:text-zinc-950 transition-colors p-1.5 rounded-full hover:bg-surface-low flex items-center justify-center cursor-pointer active:scale-95"
            aria-label="Go back to jobs"
          >
            <span className="material-symbols-outlined text-2xl font-bold">arrow_back</span>
          </button>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-950">Post New Job</h2>
        </div>

        {/* Underline Tabs */}
        <nav className="flex items-center gap-6 h-full">
          <button
            type="button"
            onClick={() => onFormModeChange("Manual")}
            className={`h-full flex items-center border-b-2 text-sm font-bold transition-all ${
              formMode === "Manual"
                ? "border-brand text-brand"
                : "border-transparent text-zinc-500 hover:text-zinc-800"
            }`}
          >
            Manual
          </button>
          <button
            type="button"
            onClick={() => onFormModeChange("Auto")}
            className={`h-full flex items-center border-b-2 text-sm font-bold transition-all ${
              formMode === "Auto"
                ? "border-brand text-brand"
                : "border-transparent text-zinc-500 hover:text-zinc-800"
            }`}
          >
            Auto
          </button>
        </nav>
      </div>

      <div className="flex items-center space-x-6">
        <button className="text-zinc-500 hover:text-brand transition-colors p-2 rounded-full hover:bg-surface-low">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
        <div className="relative">
          <img
            alt="User profile"
            className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-transparent hover:ring-brand transition-all"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCBMJKUgTlcQuYEG5Ai3-vqkR8auZ9s7axhPtPr09m8Z_R_uD4-LGGO1-Pv4hqsFfpi4s-cuNX00aSc9S2q0_IcSCMSKcm0T36wQoXDyWaqDIoblvfNF88Nbb0dyNGhG-djQ12A4y1Tr-6VAUp57vv9zPOXHduWkbpvYOcsqW19tRvTC43_fjlBjYf6qaHdRGz8tzv1zPGVgQqxZienphwLFBjTkSn5gmvFO7tDsUxFLHH_753wQoyOA"
          />
        </div>
      </div>
    </header>
  );
}

export default PostJobHeader;
