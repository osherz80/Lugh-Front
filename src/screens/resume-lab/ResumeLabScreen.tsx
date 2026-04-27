"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * ResumeLabScreen - The dedicated space for resume experimentation and optimization.
 */
export const ResumeLabScreen = () => {
  return (
    <main className="ml-[260px] pt-20 flex h-screen overflow-hidden bg-canvas">
      <section className="flex-grow overflow-y-auto px-8 py-12 space-y-8 no-scrollbar">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Resume Lab</h1>
            <p className="text-slate-500 dark:text-zinc-400 text-lg">
              Experiment, refine, and optimize your professional identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-brand">science</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
              <p className="text-slate-500 dark:text-zinc-400">
                We're building advanced AI tools to help you craft the perfect resume for any role.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-brand/5 to-transparent border border-brand/10 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-brand">auto_awesome</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Optimization</h3>
              <p className="text-slate-500 dark:text-zinc-400">
                Real-time feedback and tailoring suggestions based on live job market data.
              </p>
            </div>
          </div>

          {/* Placeholder for future content */}
          <div className="mt-12 p-12 rounded-[40px] border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-slate-300 dark:text-slate-700 text-4xl">biotech</span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-400 dark:text-slate-600">Laboratory Work in Progress</h2>
            <p className="text-slate-400 dark:text-slate-600 mt-2 max-w-md">
              The Digital Curator is currently synthesizing new features for your career growth.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};
