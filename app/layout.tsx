import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MaterialSymbolsLoader from "@/components/MaterialSymbolsLoader";
import "./globals.css";

// Load Inter font
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alex Devries - Senior Backend Engineer",
  description: "I'm Alex Devries, a Senior Backend Engineer. I architect distributed infrastructure, build robust APIs, and optimize database performance for high-growth tech companies.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-x-hidden selection:bg-primary/30 selection:text-white`}>
        <MaterialSymbolsLoader />
        {children}
      </body>
    </html>
  );
}
