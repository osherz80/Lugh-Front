"use client";

import Image from "next/image";
import { useHeroLeft } from "./useHeroLeft";

export const HeroLeft = () => {
  const { } = useHeroLeft();
  return (
    <div className="flex flex-col gap-8 w-full max-w-163">
      {/* Typography */}
      <div className="flex flex-col gap-6 w-128">
        <h1 className="text-zinc-900 font-medium text-7xl leading-none tracking-[-0.11rem] font-sans">
          Find your <span className="text-brand italic font-semibold">soul-match</span> career
        </h1>
        <p className="text-[#3D4946] text-xl leading-8 max-w-117">
          Moving beyond standard databases. We use AI to curate opportunities that align with your unique professional vector, not just your keywords.
        </p>
      </div>

      {/* Visual Composition */}
      <div className="relative w-163 h-48 mt-8 flex">
        {/* Left Image */}
        <div className="absolute left-0 top-0 w-[12.9rem] h-32 bg-surface-low rounded-2xl overflow-hidden shadow-lg shadow-black/5 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 cursor-default">
          <Image
            src="/assets/png/house_window.png"
            alt="Workspace"
            fill
            className="object-cover"
          />
        </div>

        {/* Middle Image - Staggered down by 2rem (top-8) */}
        <div className="absolute left-[13.9rem] top-8 w-[12.9rem] h-32 bg-surface-low rounded-2xl overflow-hidden shadow-lg shadow-black/5 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 cursor-default">
          <Image
            src="/assets/png/working_man.png"
            alt="Professional"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Image - Staggered down by 1rem (top-4) */}
        <div className="absolute left-[27.8rem] top-4 w-[12.9rem] h-32 bg-surface-low rounded-2xl overflow-hidden shadow-lg shadow-black/5 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 cursor-default">
          <Image
            src="/assets/png/corridor_ilusion.png"
            alt="Path"
            fill
            className="object-cover"
          />
        </div>

        {/* Ambient Blur Behind */}
        <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand/5 rounded-full blur-[2rem] -z-10" />
      </div>
    </div>
  );
};

