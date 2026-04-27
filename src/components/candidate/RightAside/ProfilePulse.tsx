import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProfilePulseProps {
  isCollapsed?: boolean;
}

export function ProfilePulse({ isCollapsed }: ProfilePulseProps) {
  return (
    <div className="bg-surface-lowest p-6 rounded-2xl no-line-shadow border-t-4 border-brand min-w-[17.5rem]">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="material-symbols-outlined text-brand shrink-0"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          analytics
        </span>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="font-bold text-lg text-zinc-900"
            >
              Profile Pulse
            </motion.h3>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm text-zinc-500"
              >
                Profile Strength
              </motion.span>
            )}
          </AnimatePresence>
          <span className="text-sm font-bold text-brand shrink-0">65%</span>
        </div>
        <div className="w-full bg-surface-low h-2 rounded-full overflow-hidden shrink-0">
          <div className="bg-brand h-full w-[65%] rounded-full"></div>
        </div>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-zinc-500 leading-relaxed truncate"
            >
              Your profile is missing key metrics that AI recruiters look for in high-tier roles.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full seeker-gradient text-white py-4 rounded-xl font-bold text-sm shadow-xl shadow-brand/20 hover:shadow-brand/30 transition-all active:scale-[0.98]"
          >
            Complete Profile to Unlock AI Match Scores
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
