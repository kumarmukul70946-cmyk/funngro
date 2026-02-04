import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FunnGro - Real Company Projects for Students",
  description: "Connect with companies, work on real projects, and earn money. FunnGro bridges the gap between students and businesses.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.funngro.com/",
    siteName: "FunnGro",
    title: "FunnGro - Real Company Projects for Students",
    description: "Connect with companies, work on real projects, and earn money.",
    images: [
      {
        url: "https://www.funngro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FunnGro Platform",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
        {children}
      </body>
    </html>
  );
}
