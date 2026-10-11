import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Manar | Senior Front-End Developer",
  description:
    "Explore Manar's front-end development portfolio, featuring React, Angular, TypeScript, and scalable, reusable UI architecture.",

  openGraph: {
    title: "Manar Aitallah | Front-End Developer",
    description:
      "Explore my front-end projects, technical decisions, and approach to building maintainable web applications.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manar | Senior Front-End Developer",
    description:
      "Explore my front-end projects, technical decisions, and approach to building maintainable web applications.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
