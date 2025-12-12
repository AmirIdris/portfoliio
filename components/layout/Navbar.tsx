"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isExperiencePage = pathname === "/experience";
  const isProjectsPage = pathname === "/projects";

  return (
    <header className={`sticky top-0 z-50 w-full border-b ${
      isExperiencePage 
        ? "border-zinc-200 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80" 
        : "border-border-subtle bg-background-dark/80"
    } backdrop-blur-md`}>
      <div className={`mx-auto ${isExperiencePage ? "max-w-5xl" : "max-w-7xl"} px-6 ${isExperiencePage ? "h-16" : ""}`}>
        <div className={`flex ${isExperiencePage ? "h-16" : ""} items-center justify-between`}>
        {/* Logo / Name */}
        <a href="/" className="flex items-center gap-3">
          {isExperiencePage ? (
            <>
              <div className="size-8 rounded bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center text-white">
                <span className="font-bold font-mono text-sm">AD</span>
              </div>
              <span className="text-sm font-semibold tracking-tight hidden sm:block text-zinc-900 dark:text-white">
                Alex Devries <span className="text-zinc-500 font-normal mx-2">/</span> Senior Backend Engineer
              </span>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center size-8 rounded-lg bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-[20px]">terminal</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">Alex Devries</span>
              <span className="hidden sm:inline-block text-zinc-500 font-mono text-xs px-2 py-0.5 rounded border border-white/5 bg-white/5">
                v2.0.4
              </span>
            </>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex ${isExperiencePage ? "items-center gap-1 sm:gap-6" : "gap-8"}`}>
          <a 
            className={`${isExperiencePage ? "text-xs sm:text-sm px-2 py-1" : "text-sm"} font-medium ${
              pathname === "/" || pathname === "/about" 
                ? isExperiencePage ? "font-bold text-primary" : "text-zinc-400 hover:text-white"
                : "text-zinc-500 hover:text-primary"
            } transition-colors`}
            href="/"
          >
            About
          </a>
          <a 
            className={`${isExperiencePage ? "text-xs sm:text-sm px-2 py-1" : "text-sm"} ${
              isExperiencePage ? "font-bold" : "font-medium"
            } ${
              isExperiencePage 
                ? "text-primary" 
                : "text-zinc-400 hover:text-white"
            } transition-colors`}
            href="/experience"
          >
            Experience
          </a>
          <a 
            className={`${isExperiencePage ? "text-xs sm:text-sm px-2 py-1" : "text-sm"} font-medium ${
              isProjectsPage
                ? isExperiencePage ? "font-bold text-primary" : "text-zinc-400 hover:text-white"
                : "text-zinc-500 hover:text-primary"
            } transition-colors`}
            href="/projects"
          >
            Projects
          </a>
          {isExperiencePage && (
            <a 
              className="text-xs sm:text-sm font-medium text-zinc-500 hover:text-primary transition-colors px-2 py-1"
              href="#contact"
            >
              Contact
            </a>
          )}
        </nav>

        {/* Mobile Menu Button & Actions */}
        <div className="flex items-center gap-4">
          {isExperiencePage ? (
            <button className="ml-2 sm:ml-4 bg-white dark:bg-zinc-800 hover:dark:bg-zinc-700 text-zinc-900 dark:text-white text-xs sm:text-sm font-medium py-1.5 px-3 rounded border border-zinc-200 dark:border-white/10 transition-all">
              Resume
            </button>
          ) : (
            <>
              <a 
                className="text-zinc-400 hover:text-white transition-colors" 
                href="#"
                aria-label="Resume"
              >
                <span className="material-symbols-outlined">description</span>
              </a>
              <a 
                className="text-zinc-400 hover:text-white transition-colors" 
                href="mailto:alex@example.com"
                aria-label="Email"
              >
                <span className="material-symbols-outlined">mail</span>
              </a>
            </>
          )}
          <button 
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden border-t ${
          isExperiencePage 
            ? "border-zinc-200 dark:border-white/10 bg-background-light/95 dark:bg-background-dark/95" 
            : "border-zinc-800 bg-background-dark/95"
        } backdrop-blur-md`}>
          <nav className="px-6 py-4 flex flex-col gap-4">
            <a 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" 
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" 
              href="/experience"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" 
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            {isExperiencePage && (
              <a 
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" 
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}


