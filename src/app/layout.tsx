import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/providers/StoreProvider";
import { AppThemeProvider } from "@/providers/AppThemeProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
  description: "Matching the best talent with the best opportunities.",
};

export default function RootLayout({
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
          <GoogleOAuthProvider clientId={process.env.NEXT_GOOGLE_CLIENT_ID || ''}>
            <AppThemeProvider>
              {children}
            </AppThemeProvider>
          </GoogleOAuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
