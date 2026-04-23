import React from "react";
import { RightAside } from "@/components/candidate/RightAside/RightAside";

export default function CandidatePage() {
  return (
    <>
      <main className="ml-[260px] pt-28 px-8 pb-12 flex gap-8 min-h-screen">
        {/* Main Content Area - Intentionally left empty for now */}
        <section className="flex-grow space-y-8 relative">
          {/* Future search bar and opportunities cards go here */}
        </section>

        {/* Right Aside */}
        <RightAside />
      </main>
    </>
  );
}
