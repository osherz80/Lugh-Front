"use client"
import React from "react";

export function SidebarToggle() {
  return (
    <div className="absolute -right-4 top-0 bottom-0 pointer-events-none w-4">
      <div className="sidebar-divider h-full"></div>
      <div className="collapse-toggle pointer-events-auto">
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </div>
    </div>
  );
}
