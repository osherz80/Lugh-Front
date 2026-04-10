"use client";

import { parserApi } from "@/api/parser";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setInputText } from "@/store/features/appSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.app.inputText);

  const handleInputChange = (value: string) => {
    dispatch(setInputText(value));
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-between py-32 px-16 bg-white dark:bg-black">
        <Image
          className="dark:invert mb-12"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-start gap-6 text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-950 transition-colors"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-950 transition-colors"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>

        <div className="w-full max-w-md mt-10 space-y-2">
          <label
            htmlFor="user-input"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 px-1"
          >
            Your input
          </label>
          <div className="relative group">
            <input
              id="user-input"
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Type something here..."
              className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-black dark:focus:ring-white/20 transition-all duration-200 shadow-sm"
            />
          </div>
          <div className="relative group">
            <button
              onClick={async () => {
                try {
                  const result = await parserApi.parse(inputValue)
                  console.log(result)
                } catch (error) {
                  console.error(error)
                }
              }}
              className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-black dark:focus:ring-white/20 transition-all duration-200 shadow-sm"
            >
              Parse
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-12">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-white px-8 transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 md:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-200 px-8 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 md:w-auto"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
