"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared/Button/Button";
import { useCreateJobPostMutation } from "@/store/services/api/job";

export function AutoPostJob() {
  const router = useRouter();
  const [autoJobDescription, setAutoJobDescription] = useState("");
  const [autoJobSourceUrl, setAutoJobSourceUrl] = useState("");
  
  const [createJobPost, { isLoading }] = useCreateJobPostMutation();

  const handleAutoGenerate = async () => {
    if (!autoJobDescription.trim() && !autoJobSourceUrl.trim()) {
      alert("Please paste a job description or enter a job source URL.");
      return;
    }

    try {
      await createJobPost({
        method: "auto",
        auto: {
          description: autoJobDescription,
          sourceUrl: autoJobSourceUrl || undefined,
        },
      }).unwrap();

      alert("Auto job post created successfully!");
      router.push("/recruiter/listed-jobs");
    } catch (error) {
      console.error("Failed to generate job post:", error);
      alert("Failed to generate job post. Check console for details.");
    }
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lugh-blur border border-zinc-200/50 p-8 md:p-12 space-y-10">
      {/* 1. Job Description */}
      <section className="space-y-4">
        <h3 className="font-sans text-xl font-bold tracking-tight text-zinc-950">1. Job Description</h3>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-zinc-700">Paste full job description here...</label>
          <textarea
            className="w-full px-4 py-3 rounded-xl border border-zinc-300/80 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors outline-none text-zinc-900 resize-y min-h-[220px]"
            placeholder="Paste full job description here..."
            value={autoJobDescription}
            onChange={(e) => setAutoJobDescription(e.target.value)}
          />
        </div>
      </section>

      <hr className="border-zinc-200/60" />

      {/* 2. Job Source */}
      <section className="space-y-4">
        <h3 className="font-sans text-xl font-bold tracking-tight text-zinc-950">2. Job Source</h3>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-zinc-700">Company or Job Post URL (Optional)</label>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-zinc-400 text-xl pointer-events-none">
              link
            </span>
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-300/80 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors outline-none text-zinc-900 placeholder:text-zinc-400"
              placeholder="https://company.com/careers/job-post"
              value={autoJobSourceUrl}
              onChange={(e) => setAutoJobSourceUrl(e.target.value)}
            />
          </div>
        </div>
      </section>

      <hr className="border-zinc-200/60" />

      {/* Actions */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-end space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          variant="outline"
          type="button"
          onPress={() => alert("Draft saved!")}
        >
          Save Draft
        </Button>
        <Button
          variant="primary"
          type="button"
          onPress={handleAutoGenerate}
          isLoading={isLoading}
        >
          <span className="flex items-center gap-2">
            Generate Job Post
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
          </span>
        </Button>
      </div>
    </div>
  );
}

export default AutoPostJob;
