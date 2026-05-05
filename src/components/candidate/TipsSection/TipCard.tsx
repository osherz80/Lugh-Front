import React from 'react';
import { CVTip } from '@/store/services/types/types';
import { motion, AnimatePresence } from 'framer-motion';

interface TipCardProps {
    tip: CVTip;
    isExpanded: boolean;
    onToggle: () => void;
}

export function TipCard({ tip, isExpanded, onToggle }: TipCardProps) {
    return (
        <div
            onClick={onToggle}
            className={`p-4 rounded-2xl bg-white dark:bg-slate-800 border transition-all duration-300 cursor-pointer group ${isExpanded
                    ? "border-emerald-200 dark:border-emerald-900 shadow-md"
                    : "border-slate-200 dark:border-slate-700 shadow-sm hover:border-slate-300"
                }`}
        >
            <div className="flex justify-between items-start gap-4">
                <p className={`text-sm font-bold transition-colors ${isExpanded ? "text-emerald-700 dark:text-emerald-400" : "text-slate-700 dark:text-zinc-300"
                    }`}>
                    {tip.title}
                </p>
                <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[0.625rem] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-lg">
                        +{tip.gain}%
                    </span>
                    <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="material-symbols-outlined text-slate-400 text-sm"
                    >
                        expand_more
                    </motion.span>
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-3">
                            {tip.tip}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
