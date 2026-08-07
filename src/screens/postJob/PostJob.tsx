"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared/Button/Button";
import { Tag } from "@/components/shared/Tag/Tag";
import { useCreateJobPostMutation } from "@/store/services/api/job";

export default function PostJob() {
  const router = useRouter();

  // Manual Form States
  const [jobTitle, setJobTitle] = useState("Senior Frontend Engineer");
  const [department, setDepartment] = useState("engineering");
  const [location, setLocation] = useState("San Francisco, CA");

  const [employmentType, setEmploymentType] = useState("Full-time");
  const [seniority, setSeniority] = useState("Senior");
  const [workModel, setWorkModel] = useState("Hybrid");

  const [pitch, setPitch] = useState("Stellar Systems is building the next generation of cloud-native infrastructure tooling. We are a fast-growing team focused on developer productivity and high-performance frontend interfaces.");
  const [responsibilities, setResponsibilities] = useState("Architect and implement modern micro-frontend applications using React, Next.js, and TypeScript. Collaborate closely with product managers and designers to craft performant UI experiences.");
  const [mustHaves, setMustHaves] = useState("5+ years of experience with modern React, TypeScript, and state management. Strong understanding of frontend performance optimization and CSS design systems.");
  const [niceToHaves, setNiceToHaves] = useState("Experience with WebSockets, GraphQL, and micro-frontend architectures.");
  const [perks, setPerks] = useState("Comprehensive health, dental, and vision insurance. Flexible PTO, remote workspace stipend, and annual learning & conference budget.");

  // Mode & Auto States
  const [formMode, setFormMode] = useState<"Manual" | "Auto">("Manual");
  const [autoJobDescription, setAutoJobDescription] = useState("");
  const [autoJobSourceUrl, setAutoJobSourceUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const [createJobPost, { isLoading }] = useCreateJobPostMutation();

  const handlePublish = async () => {
    if (!jobTitle.trim()) return;

    try {
      await createJobPost({
        jobTitle,
        jobDescription: `${pitch}\n\nResponsibilities:\n${responsibilities}\n\nMust-haves:\n${mustHaves}`,
      }).unwrap();
      alert("Job post published successfully!");
      router.push("/recruiter/listed-jobs");
    } catch (error) {
      console.error("Failed to publish job post:", error);
      alert("Failed to publish job post. Check console for details.");
    }
  };

  const handleAutoGenerate = () => {
    if (!autoJobDescription.trim() && !autoJobSourceUrl.trim()) {
      alert("Please paste a job description or enter a job source URL.");
      return;
    }

    setIsGenerating(true);
    setTimeout(() => {
      // Populate fields from description and switch to Manual view for review
      setJobTitle("Senior Frontend Engineer");
      setDepartment("engineering");
      setLocation("San Francisco, CA");
      setIsGenerating(false);
      setFormMode("Manual");
    }, 1200);
  };

  const employmentOptions = ["Full-time", "Part-time", "Contract", "Internship"];
  const seniorityOptions = ["Junior", "Mid", "Senior", "Lead"];
  const workModelOptions = ["On-site", "Hybrid", "Remote"];

  return (
    <main className="ml-[16.25rem] flex-1 flex flex-col min-h-screen bg-canvas relative">
      {/* Top Header */}
      <header className="sticky top-0 w-full z-30 flex justify-between items-center px-8 h-24 bg-canvas/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="flex items-center gap-8 h-full">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => router.push("/recruiter/listed-jobs")}
              className="text-zinc-500 hover:text-zinc-950 transition-colors p-1.5 rounded-full hover:bg-surface-low flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Go back to jobs"
            >
              <span className="material-symbols-outlined text-2xl font-bold">arrow_back</span>
            </button>
            <h2 className="text-2xl font-extrabold tracking-tight text-zinc-950">Post New Job</h2>
          </div>
          
          {/* Underline Tabs */}
          <nav className="flex items-center gap-6 h-full">
            <button
              type="button"
              onClick={() => setFormMode("Manual")}
              className={`h-full flex items-center border-b-2 text-sm font-bold transition-all ${
                formMode === "Manual"
                  ? "border-brand text-brand"
                  : "border-transparent text-zinc-500 hover:text-zinc-800"
              }`}
            >
              Manual
            </button>
            <button
              type="button"
              onClick={() => setFormMode("Auto")}
              className={`h-full flex items-center border-b-2 text-sm font-bold transition-all ${
                formMode === "Auto"
                  ? "border-brand text-brand"
                  : "border-transparent text-zinc-500 hover:text-zinc-800"
              }`}
            >
              Auto
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-zinc-500 hover:text-brand transition-colors p-2 rounded-full hover:bg-surface-low">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
          <div className="relative">
            <img
              alt="User profile"
              className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-transparent hover:ring-brand transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCBMJKUgTlcQuYEG5Ai3-vqkR8auZ9s7axhPtPr09m8Z_R_uD4-LGGO1-Pv4hqsFfpi4s-cuNX00aSc9S2q0_IcSCMSKcm0T36wQoXDyWaqDIoblvfNF88Nbb0dyNGhG-djQ12A4y1Tr-6VAUp57vv9zPOXHduWkbpvYOcsqW19tRvTC43_fjlBjYf6qaHdRGz8tzv1zPGVgQqxZienphwLFBjTkSn5gmvFO7tDsUxFLHH_753wQoyOA"
            />
          </div>
        </div>
      </header>

      {/* Content Area */}
      <div className="flex-1 p-8 pb-24 flex justify-center">
        {formMode === "Auto" ? (
          /* Exact Auto Mode Screen from Screenshot */
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
                isLoading={isGenerating}
              >
                <span className="flex items-center gap-2">
                  Generate Job Post
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                </span>
              </Button>
            </div>
          </div>
        ) : (
          /* Manual Mode Screen */
          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lugh-blur border border-zinc-200/50 p-8 md:p-12 space-y-10">
            
            {/* Section 1: Basics */}
            <section className="space-y-6">
              <h3 className="font-sans text-xl font-bold tracking-tight text-zinc-950">1. Basics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Title */}
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-zinc-700">Job Title</label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300/80 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors outline-none text-zinc-900"
                    placeholder="e.g. Senior Frontend Engineer"
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
                {/* Department */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-zinc-700">Department / Team</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300/80 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors outline-none text-zinc-900 bg-white"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value="">Select a department</option>
                    <option value="engineering">Engineering</option>
                    <option value="design">Design</option>
                    <option value="product">Product</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                  </select>
                </div>
                {/* Location */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-zinc-700">Location</label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300/80 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors outline-none text-zinc-900"
                    placeholder="e.g. San Francisco, CA"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
            </section>

            <hr className="border-zinc-200/60" />

            {/* Section 2: Configuration */}
            <section className="space-y-6">
              <h3 className="font-sans text-xl font-bold tracking-tight text-zinc-950">2. Configuration</h3>
              <div className="space-y-8">
                {/* Employment Type */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-zinc-700">Employment Type</label>
                  <div className="flex flex-wrap gap-3">
                    {employmentOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setEmploymentType(option)}
                        className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm active:scale-95 ${
                          employmentType === option
                            ? "bg-brand text-white"
                            : "bg-white border border-zinc-300/80 text-zinc-600 hover:border-brand hover:text-brand"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seniority */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-zinc-700">Seniority</label>
                  <div className="flex flex-wrap gap-3">
                    {seniorityOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSeniority(option)}
                        className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm active:scale-95 ${
                          seniority === option
                            ? "bg-brand text-white"
                            : "bg-white border border-zinc-300/80 text-zinc-600 hover:border-brand hover:text-brand"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Work Model */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-zinc-700">Work Model</label>
                  <div className="flex flex-wrap gap-3">
                    {workModelOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setWorkModel(option)}
                        className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm active:scale-95 ${
                          workModel === option
                            ? "bg-brand text-white"
                            : "bg-white border border-zinc-300/80 text-zinc-600 hover:border-brand hover:text-brand"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-zinc-200/60" />

            {/* Section 3: The Pitch */}
            <section className="space-y-6">
              <h3 className="font-sans text-xl font-bold tracking-tight text-zinc-950">3. The Pitch</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-zinc-700">About Us / Pitch</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300/80 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors outline-none text-zinc-900 resize-y min-h-[120px]"
                    placeholder="Introduce your company and why someone should join..."
                    value={pitch}
                    onChange={(e) => setPitch(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-zinc-700">Responsibilities & Impact</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300/80 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors outline-none text-zinc-900 resize-y min-h-[120px]"
                    placeholder="What will the day-to-day look like?"
                    value={responsibilities}
                    onChange={(e) => setResponsibilities(e.target.value)}
                  />
                </div>
              </div>
            </section>

            <hr className="border-zinc-200/60" />

            {/* Section 4: Requirements */}
            <section className="space-y-6">
              <h3 className="font-sans text-xl font-bold tracking-tight text-zinc-950">4. Requirements</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-zinc-700">Must-haves</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300/80 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors outline-none text-zinc-900 resize-y min-h-[100px]"
                    placeholder="Essential skills, qualifications, or experience..."
                    value={mustHaves}
                    onChange={(e) => setMustHaves(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-zinc-700">Nice-to-haves</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300/80 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors outline-none text-zinc-900 resize-y min-h-[100px]"
                    placeholder="Bonus skills or preferred qualifications..."
                    value={niceToHaves}
                    onChange={(e) => setNiceToHaves(e.target.value)}
                  />
                </div>
              </div>
            </section>

            <hr className="border-zinc-200/60" />

            {/* Section 5: Perks */}
            <section className="space-y-6">
              <h3 className="font-sans text-xl font-bold tracking-tight text-zinc-950">5. Perks</h3>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-700">Benefits & Perks</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300/80 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors outline-none text-zinc-900 resize-y min-h-[100px]"
                  placeholder="Health insurance, PTO, learning budget, etc."
                  value={perks}
                  onChange={(e) => setPerks(e.target.value)}
                />
              </div>
            </section>

            {/* Actions */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-end space-y-4 sm:space-y-0 sm:space-x-4 border-t border-zinc-200/60">
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
                onPress={handlePublish}
                isLoading={isLoading}
                icon={<span className="material-symbols-outlined text-sm">send</span>}
              >
                Publish Job
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
