import React from "react";
import { RightAside } from "@/components/candidate/RightAside/RightAside";
import { JobSearch } from "@/components/candidate/JobSearch/JobSearch";
import { JobFilters } from "@/components/candidate/JobFilters/JobFilters";
import { JobCard } from "@/components/candidate/JobCard/JobCard";

const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    location: "San Francisco, CA (Remote)",
    matchScore: 98,
    matchReason: "Your GitHub shows advanced proficiency in React hooks which this role requires. Additionally, your recent project in micro-frontends matches their architecture roadmap.",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    id: 2,
    title: "Lead Product Developer",
    location: "London, UK (Hybrid)",
    matchScore: 92,
    matchReason: "Your experience leading the 'Vortex' project aligns with their need for someone who can manage distributed engineering teams and high-scale AI infrastructure.",
    tags: ["GraphQL", "Tailwind", "Node.js"],
    isFavorited: true,
  },
  {
    id: 3,
    title: "Fullstack Developer",
    location: "New York, NY (Remote)",
    matchScore: 88,
    matchReason: "Your background in Node.js and PostgreSQL perfectly complements their stack. Your recent work with real-time sockets is exactly what they need for their new collab feature.",
    tags: ["Node.js", "PostgreSQL", "Socket.io"],
  },
  {
    id: 4,
    title: "UI/UX Engineer",
    location: "Berlin, Germany (On-site)",
    matchScore: 95,
    matchReason: "Your portfolio demonstrates a deep understanding of design systems and accessibility, which is the core focus of their upcoming platform redesign.",
    tags: ["Figma", "Tailwind", "Accessibility"],
  },
];

export default function CandidatePage() {
  return (
    <>
      <main className="ml-[260px] pt-28 px-8 pb-12 flex gap-8 min-h-screen">
        {/* Main Content Area */}
        <section className="flex-grow space-y-6 relative">
          <JobSearch />
          <JobFilters />
          
          <div className="space-y-6">
            {MOCK_JOBS.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </section>

        {/* Right Aside */}
        <RightAside />
      </main>
    </>
  );
}
