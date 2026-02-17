import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Winepress Woman | Kingdom Konfidence & Women’s Empowerment",
  description:
    "Winepress Woman equips Christian women for spiritual growth, purposeful living, and unwavering confidence in God—refined in the winepress of improvement and released in Kingdom Konfidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="min-h-[60dvh]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
