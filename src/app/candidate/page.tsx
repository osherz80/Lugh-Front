"use client";

import { useState } from "react";
import { Input } from "@/components/shared/Input/Input";
import { Button } from "@/components/shared/Button/Button";
import { useSearchJobsMutation, useUploadCVMutation } from "@/store/services/api";

export default function CandidatePage() {
  const [query, setQuery] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [searchJobs, { isLoading: isSearching, data: results }] = useSearchJobsMutation();
  const [uploadCV, { isLoading: isUploading }] = useUploadCVMutation();

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      await searchJobs({ jobSearch: query }).unwrap();
      alert("Search request sent!");
    } catch (error) {
      console.error("Failed to search jobs:", error);
      alert("Search failed. Check console.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      await uploadCV(selectedFile).unwrap();
      alert("CV uploaded successfully!");
      setSelectedFile(null);
    } catch (error) {
      console.error("Failed to upload CV:", error);
      alert("Upload failed. Check console.");
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-canvas p-8 gap-8">
      <div className="w-full max-w-2xl text-center mb-4">
        <h1 className="text-5xl font-bold text-zinc-900 tracking-tight mb-4">
          Find Your Next <span className="text-brand">Opportunity</span>
        </h1>
        <p className="text-zinc-600 text-lg">
          Search for jobs using natural language or upload your CV to get matched instantly.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8">
        {/* Search Section */}
        <div className="flex-1 bg-surface-lowest p-8 rounded-3xl shadow-lugh-blur flex flex-col gap-6">
          <h2 className="text-lg font-bold text-zinc-900 mb-2">Search Jobs</h2>
          <Input
            label="What are you looking for?"
            placeholder="e.g. A remote React role..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            variant="primary"
            fullWidth
            onPress={handleSearch}
            isLoading={isSearching}
          >
            Search Jobs
          </Button>
        </div>

        {/* Upload Section */}
        <div className="flex-1 bg-surface-lowest p-8 rounded-3xl shadow-lugh-blur flex flex-col gap-6">
          <h2 className="text-lg font-bold text-zinc-900 mb-2">Upload CV</h2>
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-xs font-bold text-zinc-600 uppercase tracking-widest pl-1">
              Resume/CV (PDF, DOCX)
            </label>
            <div className="relative group flex-1 flex flex-col justify-center">
              <input
                type="file"
                id="cv-upload"
                onChange={handleFileChange}
                className="w-full px-4 py-3 bg-surface-low font-sans border-0 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:ring-1 focus:ring-brand/20 text-zinc-900 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-brand/10 file:text-brand hover:file:bg-brand/20 cursor-pointer"
                accept=".pdf,.doc,.docx"
              />
              {selectedFile && (
                <p className="mt-2 text-sm text-brand font-medium pl-1 truncate">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>
          </div>
          <Button
            variant="primary"
            fullWidth
            onPress={handleUpload}
            isLoading={isUploading}
            isDisabled={!selectedFile}
          >
            Submit Resume
          </Button>
        </div>
      </div>

      {results && (
        <div className="mt-4 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-6">Search Results</h2>
          <div className="grid gap-4">
            <p className="text-zinc-500 italic">Results received from API. Implementation of list pending.</p>
          </div>
        </div>
      )}
    </div>
  );
}

