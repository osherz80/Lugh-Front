"use client";

import Image from "next/image";

export const HeroLeft = () => {
  return (
    <div className="flex flex-col gap-[32px] w-full max-w-[652px]">
      {/* Typography */}
      <div className="flex flex-col gap-6 w-[512px]">
        <h1 className="text-zinc-900 font-medium text-[72px] leading-[72px] tracking-[-1.8px] font-sans">
          Find your <span className="text-seeker italic font-semibold">soul-match</span> career
        </h1>
        <p className="text-[#3D4946] text-[20px] leading-[32px] max-w-[468px]">
          Moving beyond standard databases. We use AI to curate opportunities that align with your unique professional vector, not just your keywords.
        </p>
      </div>

      {/* Visual Composition */}
      <div className="relative w-[652px] h-[192px] mt-8 flex">
        {/* Left Image */}
        <div className="absolute left-0 top-0 w-[206.67px] h-[128px] bg-surface-low rounded-2xl overflow-hidden shadow-lg shadow-black/5 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 cursor-default">
          <Image 
            src="/assets/png/house_window.png" 
            alt="Workspace" 
            fill 
            className="object-cover opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
        
        {/* Middle Image - Staggered down by 32px */}
        <div className="absolute left-[222.67px] top-[32px] w-[206.67px] h-[128px] bg-surface-low rounded-2xl overflow-hidden shadow-lg shadow-black/5 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 cursor-default">
          <Image 
            src="/assets/png/working_man.png" 
            alt="Professional" 
            fill 
            className="object-cover opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
        
        {/* Right Image - Staggered down by 16px */}
        <div className="absolute left-[445.33px] top-[16px] w-[206.67px] h-[128px] bg-surface-low rounded-2xl overflow-hidden shadow-lg shadow-black/5 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 cursor-default">
          <Image 
            src="/assets/png/corridor_ilusion.png" 
            alt="Path" 
            fill 
            className="object-cover opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Ambient Blur Behind */}
        <div className="absolute left-[-16px] top-[-16px] w-[96px] h-[96px] bg-seeker/5 rounded-full blur-[32px] -z-10" />
      </div>
    </div>
  );
};

