import React from "react";
import { RightAside } from "@/components/candidate/RightAside/RightAside";
import { SidebarToggle } from "@/components/shared/SidebarToggle/SidebarToggle";

export default function CandidatePage() {
  return (
    <>
      <main className="ml-[260px] pt-28 px-8 pb-12 grid grid-cols-12 gap-8 min-h-screen">
        {/* Main Content Area - Intentionally left empty for now */}
        <section className="col-span-8 space-y-8 relative">
          {/* Future search bar and opportunities cards go here */}
          <SidebarToggle />
        </section>

        {/* Right Aside */}
        <RightAside />
      </main>
    </>
  );
}
