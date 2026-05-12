import React from "react";
import { DonutChart } from "@/components/shared/DonutChart/DonutChart";
import { CVMetricsCard } from "@/components/candidate/CVMetricsCard/CVMetricsCard";
import { CV } from '@/store/types/types'

interface ResumeAnalysisSidebarProps {
  cv: CV | null;
}

import { TipsSection } from "../TipsSection/TipsSection";

export function ResumeAnalysisSidebar({ cv }: ResumeAnalysisSidebarProps) {
  if (!cv) {
    return (
      <aside className="w-[24rem] border-l border-zinc-200/50 bg-white dark:bg-slate-900/50 overflow-y-auto no-scrollbar hidden 2xl:block">
        <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-4">
          <span className="material-symbols-outlined text-5xl text-slate-300">
            description
          </span>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No CV Selected</h3>
            <p className="text-sm text-slate-500">Select a CV from your assets to see detailed analysis and insights.</p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-[24rem] border-l border-zinc-200/50 bg-white dark:bg-slate-900/50 overflow-y-auto no-scrollbar hidden 2xl:block">
      <div className="p-8 space-y-10">
        {/* Active Asset Info */}
        <section className="space-y-1">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
            {cv.roleTag}
          </h2>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {cv.fileName}
          </h3>
        </section>

        {/* Score Section using DonutChart component */}
        <section className="flex flex-col items-center justify-center py-6">
          <div className="relative flex flex-col items-center">
            <DonutChart score={cv.overallScore} size={48} text="Current Score" />
          </div>
        </section>

        {/* Metrics Analysis */}
        <CVMetricsCard cv={cv} />

        {/* Insights & Fixes Section */}
        <TipsSection tips={cv.tips} />
      </div>
    </aside>
  );
}
