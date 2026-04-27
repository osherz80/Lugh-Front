"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/candidate", icon: "home", label: "Home" },
    { href: "#", icon: "account_circle", label: "Smart Profile" },
    { href: "#", icon: "description", label: "Applications" },
    { href: "/candidate/resume-lab", icon: "biotech", label: "Resume Lab" },
  ];

  const bottomItems = [
    { href: "#", icon: "settings", label: "Settings" },
    { href: "#", icon: "help_outline", label: "Support" },
  ];

  const NavLink = ({ href, icon, label }: { href: string; icon: string; label: string }) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`flex items-center gap-3 px-4 py-3 transition-all active:scale-95 rounded-xl ${isActive
            ? "bg-brand-tint dark:bg-brand/20 text-brand font-semibold"
            : "text-zinc-500 hover:text-brand hover:bg-surface-low"
          }`}
      >
        <span
          className="material-symbols-outlined"
          style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          {icon}
        </span>
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <aside className="h-screen w-[16.25rem] fixed left-0 top-0 flex flex-col py-8 px-4 bg-slate-50 dark:bg-slate-900 font-sans text-base antialiased z-50 border-r border-zinc-200/50">
      <div className="mb-10 px-4">
        <h1 className="text-2xl font-bold text-brand tracking-tight">Lugh Candidate</h1>
        <p className="text-xs text-zinc-500 font-medium opacity-70">The Digital Curator</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink key={item.label} {...item} />
        ))}
      </nav>

      <div className="mt-auto space-y-1">
        {bottomItems.map((item) => (
          <NavLink key={item.label} {...item} />
        ))}

        <div className="mt-6 px-4">
          <button className="w-full py-3 px-4 rounded-xl seeker-gradient text-white font-bold text-sm shadow-lg shadow-brand/20 active:scale-95 transition-all">
            Complete Profile
          </button>
        </div>
      </div>

    </aside>
  );
}
