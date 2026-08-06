"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/recruiter", icon: "home", label: "Home" },
    { href: "#", icon: "account_circle", label: "Candidates" },
    { href: "/recruiter/job-post", icon: "description", label: "Jobs" },
  ];

  const bottomItems = [
    { href: "#", icon: "settings", label: "Settings" },
    { href: "#", icon: "help_outline", label: "Support" },
  ];

  const NavLink = ({ href, icon, label }: { href: string; icon: string; label: string }) => {
    // A navigation link is active if the current pathname matches its href
    // or if the pathname is /recruiter/job-post and the link is Jobs (/recruiter/job-post)
    const isActive = pathname === href || (href !== "#" && pathname.startsWith(href) && href !== "/recruiter");

    return (
      <Link
        href={href}
        className={`flex items-center gap-3 px-4 py-3 transition-all active:scale-95 rounded-xl ${
          isActive
            ? "bg-brand-tint text-brand font-semibold"
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
    <aside className="h-screen w-[16rem] fixed left-0 top-0 flex flex-col py-8 px-4 bg-slate-50 font-sans text-base antialiased border-r border-zinc-200/50">
      <div className="mb-10 px-4">
        <h1 className="text-2xl font-bold text-brand tracking-tight">Lugh Seeker</h1>
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
      </div>
    </aside>
  );
}
