import React from "react";
import { ProfilePulse } from "../ProfilePulse/ProfilePulse";
import { MarketInsights } from "../MarketInsights/MarketInsights";
import { StatsGrid } from "../StatsGrid/StatsGrid";

export function RightAside() {
  return (
    <aside className="col-span-4 space-y-8">
      <ProfilePulse />
      <MarketInsights />
      <StatsGrid />
    </aside>
  );
}
