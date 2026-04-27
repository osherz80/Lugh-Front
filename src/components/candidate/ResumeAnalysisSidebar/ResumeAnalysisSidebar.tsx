import React from "react";
import { DonutChart } from "@/components/shared/DonutChart/DonutChart";
import { CVMetricsCard } from "@/components/candidate/CVMetricsCard/CVMetricsCard";

interface InsightFix {
  id: number;
  title: string;
  boost: string;
  tag?: string;
}

interface ResumeAnalysisSidebarProps {
  targetRole?: string;
  fileName?: string;
  overallScore?: number;
  metrics?: Record<string, number>;
  insights?: InsightFix[];
}

export function ResumeAnalysisSidebar({
  targetRole = "Fullstack Engineer",
  fileName = "ActiveMaster_2026.pdf",
  overallScore = 76,
  metrics,
  insights = [
    { id: 1, title: "Quantify Results at Lugh", boost: "+4%", tag: "AI Magic" },
    { id: 2, title: "Add 3 Missing Keywords", boost: "+2%" },
    { id: 3, title: "Complete LinkedIn Profile", boost: "+6%" },
  ],
}: ResumeAnalysisSidebarProps) {
  return (
    <aside className="w-[24rem] border-l border-zinc-200/50 bg-white dark:bg-slate-900/50 overflow-y-auto no-scrollbar hidden 2xl:block">
      <div className="p-8 space-y-10">
        {/* Active Asset Info */}
        <section className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Target Role</p>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {targetRole} <span className="text-zinc-400 font-normal">(or dynamic role)</span>
            </h3>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {fileName}
          </h2>
        </section>

        {/* Score Section using DonutChart component */}
        <section className="flex flex-col items-center justify-center py-6">
          <div className="relative flex flex-col items-center">
            <DonutChart score={overallScore} size={48} text="Current Score" />
          </div>
        </section>

        {/* Metrics Analysis */}
        <CVMetricsCard metrics={metrics} />

        {/* Insights & Fixes Placeholder */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Insights & Fixes</h3>
          <div className="space-y-3">
            {insights.map((fix) => (
              <div
                key={fix.id}
                className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3"
              >
                <div className="flex justify-between items-start">
                  <p className="text-sm font-bold text-slate-700 dark:text-zinc-300">
                    {fix.title}
                  </p>
                  <span className="text-[0.625rem] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                    {fix.boost} Match Score
                  </span>
                </div>
                {fix.tag && (
                  <span className="inline-flex items-center gap-1 text-[0.625rem] font-bold text-brand bg-brand-tint px-2 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-xs">auto_awesome</span>
                    {fix.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
