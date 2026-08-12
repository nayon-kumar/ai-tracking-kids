import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrowthGenius - Track Your Child's Growth With Confidence",
  description:
    "Smart, science-backed tools to help parents confidently track and support their child's development, milestones, and growth every step of the way.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-white">
        <div className="relative isolate flex flex-col">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_75%_at_50%_58%,rgba(129,140,248,0.5),rgba(165,158,240,0.22)_45%,transparent_78%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_30%_at_50%_8%,rgba(165,158,240,0.3),transparent_70%)]"
          />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
