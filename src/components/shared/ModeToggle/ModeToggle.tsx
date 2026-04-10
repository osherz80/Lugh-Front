"use client";

import { useState } from "react";
import { Button } from "react-aria-components";

export const ModeToggle = () => {
  const [mode, setMode] = useState<"seeker" | "recruiter">("seeker");

  return (
    <div className="flex bg-[#E6E8EA] rounded-full p-1 w-fit shadow-inner">
      <Button
        onPress={() => setMode("seeker")}
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 outline-none
          ${mode === "seeker" 
            ? "bg-[#E2F4F3] text-seeker shadow-sm" 
            : "text-zinc-500 hover:text-zinc-700"
          }`}
      >
        Seeker
      </Button>
      <Button
        onPress={() => setMode("recruiter")}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 outline-none
          ${mode === "recruiter" 
            ? "bg-[#EEF2FF] text-indigo-600 shadow-sm" 
            : "text-zinc-500 hover:text-zinc-700"
          }`}
      >
        Recruiter
      </Button>
    </div>
  );
};
