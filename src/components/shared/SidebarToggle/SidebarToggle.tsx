"use client";
import React from "react";
import { motion } from "framer-motion";

interface SidebarToggleProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function SidebarToggle({ isCollapsed, onToggle }: SidebarToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-brand shadow-lg z-50 hover:bg-zinc-50 hover:scale-110 transition-all duration-300 pointer-events-auto"
    >
      <motion.span
        className="material-symbols-outlined text-base font-bold"
        animate={{ rotate: isCollapsed ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        chevron_right
      </motion.span>
    </button>
  );
}
