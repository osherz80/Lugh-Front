"use client";

import React from "react";
import { ProfilePulse } from "@/components/candidate/ProfilePulse/ProfilePulse";
import { MarketInsights } from "@/components/candidate/MarketInsights/MarketInsights";
import { StatsGrid } from "@/components/candidate/StatsGrid/StatsGrid";

export default function CandidatePage() {
  return (
    <>
      <main className="ml-[260px] pt-28 px-8 pb-12 grid grid-cols-12 gap-8 min-h-screen">
        {/* Main Content Area - Intentionally left empty for now */}
        <section className="col-span-8 space-y-8 relative">
          {/* Future search bar and opportunities cards go here */}
        </section>

        {/* Right Aside */}
        <aside className="col-span-4 space-y-8">
          <ProfilePulse />
          <MarketInsights />
          <StatsGrid />
        </aside>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50">
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          forum
        </span>
      </button>
    </>
  );
}
