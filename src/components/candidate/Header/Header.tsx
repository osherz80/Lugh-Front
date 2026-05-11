import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16.25rem)] z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex justify-between items-center h-20 px-8 ml-[16.25rem]">
      <div className="flex items-center gap-8 font-sans text-sm font-medium">
        <Link href="/candidate" className="text-brand font-bold border-b-2 border-brand pb-1">
          Dashboard
        </Link>
        <Link href="#" className="text-zinc-500 hover:text-brand transition-colors">
          Analytics
        </Link>
        <Link href="#" className="text-zinc-500 hover:text-brand transition-colors">
          Insights
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="p-2 text-zinc-500 hover:bg-surface-low hover:text-brand rounded-full transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-zinc-500 hover:bg-surface-low hover:text-brand rounded-full transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          </button>
        </div>

        <div className="flex items-center gap-3 border-l pl-6 border-zinc-200">
          <div className="text-right">
            <p className="text-xs font-bold text-zinc-900">Alex Rivera</p>
            <p className="text-[0.625rem] text-zinc-500">Senior Engineer</p>
          </div>
          <img
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-brand/10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdVgkDzvKcQjv91P_cmdxELAhAfoxaVx2KlwDyDsRuHzYsFfS6hpU6TtvXlNnckDXr8YBbhkjgymeC4LpHG6WjGRclSWw17mqGUrEDbhCR40kTrtXdXg84x487iwDeiL3oGtCHI_vPlEk4t0HHy7QciYwq6AIsMXK8doOFsMicS1itEWX00-nf7caQP0Jbws_n-EEc2ySNd2A_p0t7dvhxVW3HjLsUwst-l3iEL747YW-VC7vsvYJHhGlLDav8qwXc6S1DAflQzu9A"
          />
        </div>
      </div>
    </header>
  );
}
