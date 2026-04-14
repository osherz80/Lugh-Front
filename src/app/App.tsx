import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/providers/StoreProvider";
import { AppThemeProvider } from "@/providers/AppThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lugh - Elite Talent Network",
  description: "Building the future of talent management.",
};

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-canvas font-sans selection:bg-brand/20 selection:text-brand antialiased">
        <StoreProvider>
          <AppThemeProvider>
            <main className="flex-1 w-full">
              {children}
            </main>
          </AppThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
