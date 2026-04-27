import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StatsGridProps {
  isCollapsed?: boolean;
}

export function StatsGrid({ isCollapsed }: StatsGridProps) {
  return (
    <div className={`grid ${isCollapsed ? "grid-cols-1" : "grid-cols-2"} gap-4 transition-all duration-300`}>
      {/* Rank Stat */}
      <div className="bg-white p-4 rounded-2xl no-line-shadow text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[6.25rem]">
        <span
          className="material-symbols-outlined text-amber-500 mb-2 shrink-0"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          stars
        </span>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-[0.625rem] uppercase font-bold text-zinc-500">Rank</p>
              <p className="text-xl font-extrabold text-brand">Top 5%</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Views Stat */}
      <div className="bg-white p-4 rounded-2xl no-line-shadow text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[6.25rem]">
        <span
          className="material-symbols-outlined text-blue-500 mb-2 shrink-0"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          visibility
        </span>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-[0.625rem] uppercase font-bold text-zinc-500">Views</p>
              <p className="text-xl font-extrabold text-brand">124</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
