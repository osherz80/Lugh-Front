"use client";

import React from "react";
import { motion } from "framer-motion";
import { DonutChart } from "@/components/shared/DonutChart/DonutChart";
import { ProgressBar } from "@/components/shared/ProgressBar/ProgressBar";


/**
 * ResumeLabScreen - The dedicated space for resume experimentation and optimization.
 */
export const ResumeLabScreen = () => {
  return (
    <main className="ml-[260px] pt-20 flex h-screen overflow-hidden bg-canvas">
      {/* Main Content Area */}
      <section className="flex-grow overflow-y-auto px-8 py-12 space-y-8 no-scrollbar">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
              My Curated Assets
            </h1>
            <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-2xl leading-relaxed">
              Manage your master record and its specialized variants. AI-powered matching
              ensures your CV speaks the language of every opportunity.
            </p>
          </header>

          {/* Grid of Assets - Placeholder for CV Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* CV Cards will go here */}
            <div className="aspect-[3/4] rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400">
              CV Card Placeholder
            </div>
            <div className="aspect-[3/4] rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400">
              CV Card Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Right Sidebar - Analysis & Insights */}
      <aside className="w-[380px] border-l border-zinc-200/50 bg-white dark:bg-slate-900/50 overflow-y-auto no-scrollbar hidden 2xl:block">
        <div className="p-8 space-y-10">
          {/* Active Asset Info */}
          <section className="space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Target Role</p>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Fullstack Engineer <span className="text-zinc-400 font-normal">(or dynamic role)</span>
              </h3>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              ActiveMaster_2026.pdf
            </h2>
          </section>

          {/* Score Section using DonutChart component */}
          <section className="flex flex-col items-center justify-center py-6">
            <div className="relative flex flex-col items-center">
              <DonutChart score={76} size={48} text="Current Score" />
            </div>
          </section>

          {/* Metrics Placeholder */}
          <section className="space-y-6">
            <ProgressBar
              label={
                <>
                  ATS Readability
                  <span className="material-symbols-outlined text-[14px]">info</span>
                </>
              }
              value={62}
              barClassName="bg-brand"
            />

            <ProgressBar
              label={
                <>
                  Keywords
                  <span className="material-symbols-outlined text-[14px]">info</span>
                </>
              }
              value={93}
              barClassName="bg-emerald-500"
            />

            <ProgressBar
              label={
                <>
                  Verb Impact
                  <span className="material-symbols-outlined text-[14px]">info</span>
                </>
              }
              value={41}
              barClassName="bg-amber-500"
            />

            <ProgressBar
              label={
                <>
                  Contact Density
                  <span className="material-symbols-outlined text-[14px]">info</span>
                </>
              }
              value={100}
              barClassName="bg-emerald-500"
            />
          </section>

          {/* Insights & Fixes Placeholder */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Insights & Fixes</h3>
            <div className="space-y-3">
              {[
                { id: 1, title: "Quantify Results at Lugh", boost: "+4%", tag: "AI Magic" },
                { id: 2, title: "Add 3 Missing Keywords", boost: "+2%" },
                { id: 3, title: "Complete LinkedIn Profile", boost: "+6%" },
              ].map((fix) => (
                <div key={fix.id} className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold text-slate-700 dark:text-zinc-300">
                      Card {fix.id}: {fix.title}
                    </p>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                      {fix.boost} Match Score
                    </span>
                  </div>
                  {fix.tag && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand bg-brand-tint px-2 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
                      {fix.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </main>
  );
};
