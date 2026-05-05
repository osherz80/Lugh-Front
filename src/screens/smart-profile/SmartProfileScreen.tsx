import React from "react";
import { CVUpload } from "@/components/candidate/CVUpload/CVUpload";

/**
 * SmartProfileScreen - A blank page for the Smart Profile section.
 */
export const SmartProfileScreen = () => {
  return (
    <main className="ml-[16.25rem] pt-20 flex h-screen overflow-hidden bg-canvas">
      <section className="flex-grow overflow-y-auto px-8 py-12 space-y-8 no-scrollbar text-center">
        <div className="max-w-5xl mx-auto py-20">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Smart Profile
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Your centralized AI-powered profile that powers your career narrative. 
            This page is currently under construction.
          </p>
          <div className="mt-12 flex justify-center">
            <CVUpload />
          </div>
        </div>
      </section>
    </main>
  );
};
