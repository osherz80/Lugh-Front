"use client";

interface JobSearchProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export function JobSearch({
  value,
  onChange,
  placeholder = "What's your next move?",
}: JobSearchProps) {
  return (
    <div className="relative group w-full max-w-2xl mx-auto mb-10">
      <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
        <span className="material-symbols-outlined text-zinc-400 text-2xl">search</span>
      </div>
      <input
        type="text"
        {...(value !== undefined ? { value } : {})}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white h-16 pl-16 pr-6 rounded-2xl shadow-lugh-blur border-none focus:ring-2 focus:ring-brand/20 text-lg transition-all placeholder:text-zinc-400 font-sans outline-none"
      />
    </div>
  );
}
