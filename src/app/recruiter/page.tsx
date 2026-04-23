"use client";

import { useState } from "react";
import { Input } from "@/components/shared/Input/Input";
import { Button } from "@/components/shared/Button/Button";
import { useCreateJobPostMutation } from "@/store/services/api";

export default function RecruiterPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [createJobPost, { isLoading }] = useCreateJobPostMutation();

  const handleSend = async () => {
    if (!jobDescription.trim() || !jobTitle.trim()) return;

    try {
      await createJobPost({ jobDescription, jobTitle }).unwrap();
      // setInputValue("");
      alert("Job post sent successfully!");
    } catch (error) {
      console.error("Failed to send job post:", error);
      alert("Failed to send job post. Check console for details.");
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-canvas p-8">
      <h1 className="text-4xl font-bold text-zinc-900 mb-8 tracking-tight">Recruiter Dashboard</h1>
      <div className="w-full max-w-md flex flex-col gap-6 bg-surface-lowest p-8 rounded-2xl shadow-lugh-blur">
        <Input
          label="Job Title"
          placeholder="e.g. Senior Frontend Developer"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <Input
          label="Job Description"
          placeholder="e.g. 5+ years exp with React, TypeScript..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <Button
          variant="primary"
          fullWidth
          onPress={handleSend}
          isLoading={isLoading}
        >
          Send Job Post
        </Button>
      </div>
    </div>
  );
}
