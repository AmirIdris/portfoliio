"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-[20px]">terminal</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-white">Alex Devries</span>
            <span className="hidden sm:inline-block text-zinc-500 font-mono text-xs px-2 py-0.5 rounded border border-white/5 bg-white/5">
              v2.0.4
            </span>
            </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              className={`text-sm font-medium transition-colors ${
                pathname === "/" 
                  ? "text-white" 
                  : "text-zinc-400 hover:text-white"
              }`}
              href="/"
            >
              About
            </Link>
            <Link 
              className={`text-sm font-medium transition-colors ${
                pathname === "/experience" 
                  ? "text-white" 
                  : "text-zinc-400 hover:text-white"
              }`}
              href="/experience"
            >
              Experience
            </Link>
            <Link 
              className={`text-sm font-medium transition-colors ${
                pathname === "/skills" 
                  ? "text-white" 
                  : "text-zinc-400 hover:text-white"
              }`}
              href="/skills"
            >
              Skills
            </Link>
            <a 
              className={`text-sm font-medium transition-colors ${
                pathname === "/projects" 
                  ? "text-white" 
                  : "text-zinc-400 hover:text-white"
              }`}
              href="/projects"
            >
              Projects
            </a>
            <a 
              className={`text-sm font-medium transition-colors ${
                pathname === "/contact" 
                  ? "text-white" 
                  : "text-zinc-400 hover:text-white"
              }`}
              href="/contact"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button & Actions */}
          <div className="flex items-center gap-4">
            <Link 
              className="text-zinc-400 hover:text-white transition-colors" 
              href="#"
              aria-label="Resume"
            >
              <span className="material-symbols-outlined">description</span>
            </Link>
            <Link 
              className="text-zinc-400 hover:text-white transition-colors" 
              href="mailto:alex@example.com"
              aria-label="Email"
            >
              <span className="material-symbols-outlined">mail</span>
            </Link>
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
        <div className="md:hidden border-t border-zinc-800 bg-background-dark/95 backdrop-blur-md">
          <nav className="px-6 py-4 flex flex-col gap-4">
            <Link 
              className={`text-sm font-medium transition-colors ${
                pathname === "/" 
                  ? "text-white" 
                  : "text-zinc-400 hover:text-white"
              }`}
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              className={`text-sm font-medium transition-colors ${
                pathname === "/experience" 
                  ? "text-white" 
                  : "text-zinc-400 hover:text-white"
              }`}
              href="/experience"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
                    </Link>
            <Link 
              className={`text-sm font-medium transition-colors ${
                pathname === "/skills" 
                  ? "text-white" 
                  : "text-zinc-400 hover:text-white"
              }`}
              href="/skills"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <a 
              className={`text-sm font-medium transition-colors ${
                pathname === "/projects" 
                  ? "text-white" 
                  : "text-zinc-400 hover:text-white"
              }`}
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              className={`text-sm font-medium transition-colors ${
                pathname === "/contact" 
                  ? "text-white" 
                  : "text-zinc-400 hover:text-white"
              }`}
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}


