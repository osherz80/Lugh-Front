import React from "react";
import { CV } from "@/store/types/cv";
import { CVCard } from "./CVCard/CVCard";

interface CVListProps {
  cvs: CV[];
  onCvClick: (cv: CV) => void;
  currentCvId?: string;
}

export function CVList({ cvs, onCvClick, currentCvId }: CVListProps) {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
          My Curated Assets
        </h1>
        <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-2xl leading-relaxed">
          Manage your master record and its specialized variants. AI-powered matching
          ensures your CV speaks the language of every opportunity.
        </p>
      </header>

      {/* Grid of Assets */}
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 pb-12">
        {cvs.map((cv) => (
          <CVCard
            key={cv.id}
            onClick={() => onCvClick(cv)}
            isActive={cv.id === currentCvId}
            {...cv}
          />
        ))}
      </div>
    </>
  );
}
