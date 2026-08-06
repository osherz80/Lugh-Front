"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared/Button/Button";
import { Tag } from "@/components/shared/Tag/Tag";

export function ListedJobs() {
  const router = useRouter();

  const handlePostNewJob = () => {
    router.push("/recruiter/post-job");
  };

  return (
    <main className="ml-[16.25rem] flex-grow flex flex-col min-h-screen bg-canvas">
      {/* Top Header */}
      <header className="px-12 py-8 flex justify-between items-end sticky top-0 bg-canvas/90 backdrop-blur-md z-40">
        <div>
          <h2 className="font-sans text-3xl font-bold text-zinc-900 tracking-tight">Active Jobs</h2>
          <p className="text-zinc-500 mt-1 text-sm font-medium">Manage and monitor your open requisitions.</p>
        </div>
        <Button
          variant="primary"
          icon={<span className="material-symbols-outlined text-sm">add</span>}
          onPress={handlePostNewJob}
        >
          Post New Job
        </Button>
      </header>

      {/* Content Area */}
      <div className="px-12 pb-24 flex-1">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Job Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lugh-blur relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300 border border-zinc-100/50">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-6">
                <img 
                  className="w-16 h-16 rounded-xl object-cover bg-zinc-100 border border-zinc-200/50" 
                  alt="Stellar Systems Logo" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYh8QJGqEP7dma8sP_jxxURgCO6eKrRPJMgOlEN_6MSr915VhJLPx8VbL0X4epxBCvjMZUsOnp3o5gxR5uDv_vJlo36W0bDhhsxS7dPtAY24Qb6m63sDqtsdUUDISWrjN2bdTcB_ouqiiyRK2AukWQgxCEVxO716av8YLo9MN7a__EoOiynAoVjLe4L34mYHX7K5Fg9eUuAu9g648v7C_wslRqHHSjxO_c0skAp_gtPdukDW_Y1wWrzKZwOEYyrECk0jA"
                />
                <div>
                  <h3 className="font-sans text-xl font-bold text-zinc-950 mb-1">Senior Frontend Engineer</h3>
                  <p className="text-zinc-500 text-sm font-medium mb-3">Stellar Systems • San Francisco, CA • Full-time</p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag label="React" />
                    <Tag label="TypeScript" />
                    <Tag label="Next.js" />
                    <Tag label="Tailwind" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-4">
                <Button
                  variant="primary"
                  onPress={() => {}}
                >
                  Apply Now
                </Button>
              </div>
            </div>

            {/* AI Insight Box */}
            <div className="mt-6 bg-brand-tint border-l-4 border-brand p-4 rounded-r-xl flex gap-3 items-start shadow-sm shadow-brand/5">
              <span className="material-symbols-outlined text-brand" style={{ fontVariationSettings: "'FILL' 1" }}>
                bolt
              </span>
              <p className="text-sm text-zinc-800 leading-relaxed">
                <span className="font-bold text-brand">Perfect fit:</span> Your GitHub shows advanced proficiency in React hooks which this role requires. Additionally, your recent project in micro-frontends matches their architecture roadmap and team structure.
              </p>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lugh-blur relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300 border border-zinc-100/50">
            <div className="flex justify-between items-start">
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-400 border border-zinc-200/50">
                  <span className="material-symbols-outlined text-3xl">domain</span>
                </div>
                <div>
                  <h3 className="font-sans text-xl font-bold text-zinc-950 mb-1">Lead UX Designer</h3>
                  <p className="text-zinc-500 text-sm font-medium mb-3">Nova Creatives • Remote • Contract</p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag label="Figma" />
                    <Tag label="Design Systems" />
                    <Tag label="Prototyping" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-4">
                <Button
                  variant="outline"
                  onPress={() => {}}
                >
                  Manage Job
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
