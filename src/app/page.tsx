"use client";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setInputText } from "@/store/features/appSlice";
import { useParseTextMutation } from "@/store/services/api";

export default function Home() {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.app.inputText);
  const [parseText, { isLoading, error, data }] = useParseTextMutation();

  const handleInputChange = (value: string) => {
    dispatch(setInputText(value));
  };

  const handleParse = async () => {
    try {
      const result = await parseText({ prompt: inputValue }).unwrap();
      console.log("Success:", result);
    } catch (err) {
      console.error("Failed to parse:", err);
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-canvas font-sans selection:bg-seeker/20 selection:text-seeker">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-24 px-8">
        <div className="w-full max-w-2xl bg-surface-lowest p-12 rounded-2xl shadow-lugh-blur flex flex-col items-center gap-12 transition-all">
          <Image
            className="mb-4"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            priority
          />
          
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
              The Digital Curator
            </h1>
            <p className="max-w-md text-lg text-zinc-500 leading-relaxed">
              Prioritize signal over noise with intentional asymmetry and massive white space.
            </p>
          </div>

          <div className="w-full space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="user-input"
                className="block text-sm font-semibold text-zinc-600 px-1 uppercase tracking-wider"
              >
                Prompt Input
              </label>
              <div className="relative">
                <input
                  id="user-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder="Ask the curator..."
                  className="w-full px-6 py-4 bg-surface-low rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-seeker/5 transition-all duration-300 shadow-sm text-lg"
                  disabled={isLoading}
                />
              </div>
            </div>

            <button
              onClick={handleParse}
              disabled={isLoading || !inputValue.trim()}
              className="w-full px-8 py-5 bg-seeker text-white font-bold rounded-xl shadow-lg shadow-seeker/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:grayscale transition-all duration-300 text-lg flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Execute Insights"
              )}
            </button>
            
            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-center text-sm font-medium animate-in fade-in slide-in-from-top-2">
                Curator encountered an error. Please refine your query.
              </div>
            )}

            {data && (
              <div className="p-8 bg-seeker-tint rounded-xl animate-in zoom-in-95 duration-500">
                <p className="text-sm font-bold text-seeker uppercase tracking-widest mb-4">
                  AI Snippet
                </p>
                <div className="text-seeker leading-relaxed font-medium">
                  {JSON.stringify(data.result || data)}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-8 text-base font-medium sm:flex-row mt-16 scale-90 opacity-60 hover:opacity-100 transition-opacity">
          <a
            className="flex h-12 items-center justify-center gap-2 px-8 transition-colors hover:text-seeker"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy
          </a>
          <a
            className="flex h-12 items-center justify-center gap-2 px-8 transition-colors hover:text-seeker"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
