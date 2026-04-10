"use client";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center border-t border-[#F8FAFC] py-10 px-8 mt-auto">
      <div className="w-full max-w-[1280px] flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-sans font-bold text-sm tracking-[-0.7px] text-[#115E59]">LUGH</span>
          <span className="font-medium text-xs text-zinc-500">© 2024 Talent Orchestration Platform</span>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="font-semibold text-xs tracking-[1.2px] uppercase text-zinc-400 hover:text-zinc-600 transition-colors">
            Privacy
          </a>
          <a href="#" className="font-semibold text-xs tracking-[1.2px] uppercase text-zinc-400 hover:text-zinc-600 transition-colors">
            Terms
          </a>
          <a href="#" className="font-semibold text-xs tracking-[1.2px] uppercase text-zinc-400 hover:text-zinc-600 transition-colors">
            Ethics
          </a>
        </div>
      </div>
    </footer>
  );
};
