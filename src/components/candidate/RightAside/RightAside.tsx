"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProfilePulse } from "./ProfilePulse";
import { ProfileCompletion } from "./ProfileCompletion";
import { QuickTip } from "./QuickTip";
import { SidebarToggle } from "../../shared/SidebarToggle/SidebarToggle";

export function RightAside() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 350 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative flex-shrink-0 bg-canvas/50 backdrop-blur-sm border-l border-zinc-200/50 p-6 h-full no-scrollbar"
    >
      <SidebarToggle
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
      />

      <div className="flex flex-col space-y-8">
        <ProfilePulse isCollapsed={isCollapsed} />
        <ProfileCompletion isCollapsed={isCollapsed} />
        <QuickTip isCollapsed={isCollapsed} />
      </div>
    </motion.aside>
  );
}
