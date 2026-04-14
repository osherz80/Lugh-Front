"use client";

import { useState } from "react";
import { Input } from "@/components/shared/Input/Input";
import { Button } from "@/components/shared/Button/Button";
import { useSearchJobsMutation } from "@/store/services/api";

export default function SeekerPage() {
  const [query, setQuery] = useState("");
  const [searchJobs, { isLoading, data: results }] = useSearchJobsMutation();

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

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-canvas p-8">
      <div className="w-full max-w-2xl text-center mb-12">
        <h1 className="text-5xl font-bold text-zinc-900 tracking-tight mb-4">
          Find Your Next <span className="text-indigo-600">Opportunity</span>
        </h1>
        <p className="text-zinc-600 text-lg">
          Search for jobs using natural language. Our AI will find the best match for you.
        </p>
      </div>

      <div className="w-full max-w-xl bg-surface-lowest p-8 rounded-3xl shadow-lugh-blur flex flex-col gap-6">
        <Input
          label="What are you looking for?"
          placeholder="e.g. A remote React role with flexible hours..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          variant="primary"
          fullWidth
          onPress={handleSearch}
          isLoading={isLoading}
        >
          Search Jobs
        </Button>
      </div>

      {results && (
        <div className="mt-12 w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-6">Search Results</h2>
          <div className="grid gap-4">
            {/* Results would be mapped here */}
            <p className="text-zinc-500 italic">Results received from API. Implementation of list pending.</p>
          </div>
        </div>
      )}
    </div>
  );
}

