import React from "react";
import { JobSearch } from "../JobSearch/JobSearch";
import { JobFilters } from "../JobFilters/JobFilters";
import { motion } from "framer-motion";

export function EmptyDashboard() {
  return (
    <div className="space-y-6">
      {/* Header sections remain visible but non-functional */}
      <JobSearch />
      <JobFilters />

      <div className="relative pt-4">
        {/* Skeleton Placeholders */}
        <div className="space-y-6 opacity-40 pointer-events-none">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-48 w-full border-2 border-dashed border-zinc-300 rounded-2xl"
            />
          ))}
        </div>

        {/* Floating CTA Card */}
        <div className="absolute inset-0 flex items-center justify-center z-10 -top-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] border border-zinc-100 max-w-lg w-full text-center space-y-8"
          >
            <div className="mx-auto w-20 h-20 bg-brand-tint/30 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-brand text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                description
              </span>
              <div className="absolute translate-y-1">
                <span className="material-symbols-outlined text-brand text-lg font-bold">arrow_upward</span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-zinc-900">Populate Your Feed</h2>
              <p className="text-zinc-500 leading-relaxed max-w-[17.5rem] mx-auto">
                Our AI needs your professional story to curate high-match opportunities. Upload your CV to see tailored roles.
              </p>
            </div>

            <button className="w-full seeker-gradient text-white py-4 rounded-xl font-bold text-sm shadow-xl shadow-brand/20 hover:shadow-brand/30 transition-all active:scale-[0.98]">
              Complete Profile
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
