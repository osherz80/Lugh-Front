"use client";

import { ModeToggle } from "@/components/shared/ModeToggle/ModeToggle";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-4 px-8 flex justify-center bg-transparent">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <div className="h-8 flex flex-col justify-center">
          <span className="font-sans font-black text-2xl tracking-[-0.075rem] text-[#115E59]">
            Lugh
          </span>
        </div>
        
        <div className="flex items-center absolute left-1/2 -translate-x-1/2">
          <ModeToggle />
        </div>
        
        <div className="w-8" /> {/* Placeholder for right side balance */}
      </div>
    </header>
  );
};
