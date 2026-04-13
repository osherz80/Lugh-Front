"use client";

import { Button } from "react-aria-components";
import { useModeToggle } from "./useModeToggle";

/**
 * ModeToggle - Component to switch between Seeker and Recruiter modes.
 * Strictly adheres to the Hybrid Clean Architecture by delegating state logic to useModeToggle.
 */
export const ModeToggle = () => {
  const { mode, handleModeChange } = useModeToggle();

  return (
    <div className="flex bg-[#E6E8EA] rounded-full p-1 w-fit shadow-inner">
      <Button
        onPress={() => handleModeChange("seeker")}
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 outline-none
          ${mode === "seeker"
            ? "bg-[#E2F4F3] text-seeker shadow-sm"
            : "text-zinc-500 hover:text-zinc-700"
          }`}
      >
        Seeker
      </Button>
      <Button
        onPress={() => handleModeChange("recruiter")}
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
