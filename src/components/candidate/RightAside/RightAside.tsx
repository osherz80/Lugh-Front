"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProfilePulse } from "../ProfilePulse/ProfilePulse";
import { MarketInsights } from "../MarketInsights/MarketInsights";
import { StatsGrid } from "../StatsGrid/StatsGrid";
import { SidebarToggle } from "../../shared/SidebarToggle/SidebarToggle";

export function RightAside() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 350 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative space-y-8 flex-shrink-0 overflow-visible whitespace-nowrap bg-canvas/50 backdrop-blur-sm border-l border-zinc-200/50 p-4"
    >
      <SidebarToggle
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
      />

      <div className="flex flex-col space-y-8">
        <ProfilePulse isCollapsed={isCollapsed} />
        <MarketInsights isCollapsed={isCollapsed} />
        <StatsGrid isCollapsed={isCollapsed} />
      </div>
    </motion.aside>
  );
}
