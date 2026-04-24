import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuickTipProps {
  isCollapsed?: boolean;
}

export function QuickTip({ isCollapsed }: QuickTipProps) {
  return (
    <div className="min-w-[280px]">
      <div className="bg-brand-tint/40 p-6 rounded-2xl border border-brand/10 space-y-3">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-brand text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>lightbulb</span>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.h4
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm font-bold text-brand"
              >
                Quick Tip
              </motion.h4>
            )}
          </AnimatePresence>
        </div>
        
        <AnimatePresence>
          {!isCollapsed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-zinc-600 leading-relaxed"
            >
              Users with a professional CV uploaded receive <span className="font-bold text-brand">3x more</span> relevant job matches through our AI curation.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
