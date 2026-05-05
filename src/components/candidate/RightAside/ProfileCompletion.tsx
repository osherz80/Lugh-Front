import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProfileCompletionProps {
  isCollapsed?: boolean;
}

const CHECKLIST_ITEMS = [
  { id: 1, label: "Basic Information", sublabel: "Contact details and location verified", completed: true },
  { id: 2, label: "Upload Professional CV", sublabel: "Our AI needs your full work history", bonus: "+20%", completed: false },
  { id: 3, label: "Add 5 Core Skills", sublabel: "Help us match you with the right roles", bonus: "+10%", completed: false },
  { id: 4, label: "Set Work Preferences", sublabel: "Define salary, location, and role types", bonus: "+5%", completed: false },
];

export function ProfileCompletion({ isCollapsed }: ProfileCompletionProps) {
  return (
    <div className="space-y-4 min-w-[17.5rem]">
      <AnimatePresence>
        {!isCollapsed && (
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs font-bold uppercase tracking-wider text-zinc-500 opacity-60 px-4"
          >
            Profile Completion
          </motion.h3>
        )}
      </AnimatePresence>

      <div className="bg-surface-low p-6 rounded-2xl space-y-5">
        {CHECKLIST_ITEMS.map((item) => (
          <div key={item.id} className="flex gap-4 group items-start">
            <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${item.completed ? 'bg-brand border-brand text-white' : 'border-zinc-300 bg-white'}`}>
              {item.completed && <span className="material-symbols-outlined text-sm font-bold">check</span>}
            </div>
            
            <AnimatePresence>
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex-grow min-w-0"
                >
                  <div className="flex justify-between items-center gap-2">
                    <h4 className={`text-sm font-bold ${item.completed ? 'text-zinc-900' : 'text-zinc-500'}`}>
                      {item.label}
                    </h4>
                    {item.bonus && (
                      <span className="text-[0.625rem] font-bold text-brand bg-brand-tint px-1.5 py-0.5 rounded">
                        {item.bonus}
                      </span>
                    )}
                  </div>
                  <p className="text-[0.6875rem] text-zinc-400 mt-0.5 leading-tight truncate">
                    {item.sublabel}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
