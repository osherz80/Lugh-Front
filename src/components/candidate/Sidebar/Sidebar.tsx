import Link from "next/link";
import React from "react";

export function Sidebar() {
  return (
    <aside className="h-screen w-[260px] fixed left-0 top-0 flex flex-col py-8 px-4 bg-slate-50 dark:bg-slate-900 font-sans text-base antialiased z-50 border-r border-zinc-200/50">
      <div className="mb-10 px-4">
        <h1 className="text-2xl font-bold text-brand tracking-tight">Lugh Seeker</h1>
        <p className="text-xs text-zinc-500 font-medium opacity-70">The Digital Curator</p>
      </div>

      <nav className="flex-1 space-y-1">
        <Link 
          href="/candidate" 
          className="flex items-center gap-3 px-4 py-3 bg-brand-tint dark:bg-brand/20 text-brand rounded-xl font-semibold transition-transform active:scale-95"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span>Home</span>
        </Link>
        <Link 
          href="#" 
          className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-brand transition-all active:scale-95 hover:bg-surface-low rounded-xl"
        >
          <span className="material-symbols-outlined">account_circle</span>
          <span>Smart Profile</span>
        </Link>
        <Link 
          href="#" 
          className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-brand transition-all active:scale-95 hover:bg-surface-low rounded-xl"
        >
          <span className="material-symbols-outlined">description</span>
          <span>Applications</span>
        </Link>
        <Link 
          href="#" 
          className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-brand transition-all active:scale-95 hover:bg-surface-low rounded-xl"
        >
          <span className="material-symbols-outlined">biotech</span>
          <span>Resume Lab</span>
        </Link>
      </nav>

      <div className="mt-auto space-y-1">
        <Link 
          href="#" 
          className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-brand transition-all active:scale-95 hover:bg-surface-low rounded-xl"
        >
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </Link>
        <Link 
          href="#" 
          className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-brand transition-all active:scale-95 hover:bg-surface-low rounded-xl"
        >
          <span className="material-symbols-outlined">help_outline</span>
          <span>Support</span>
        </Link>

        <div className="mt-6 px-4">
          <button className="w-full py-3 px-4 rounded-xl seeker-gradient text-white font-bold text-sm shadow-lg shadow-brand/20 active:scale-95 transition-all">
            Complete Profile
          </button>
        </div>
      </div>

      {/* Sidebar Divider and Toggle (Visual) */}
      <div className="absolute -right-4 top-0 bottom-0 pointer-events-none w-4">
        <div className="sidebar-divider h-full"></div>
        <div className="collapse-toggle pointer-events-auto">
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        </div>
      </div>
    </aside>
  );
}
