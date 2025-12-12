"use client";

import Image from "next/image";
import { ArrowRight, FolderOpen } from "lucide-react";

const techStack = [
  { name: "Go", icon: "code", color: "text-primary" },
  { name: "Rust", icon: "settings", color: "text-orange-400" },
  { name: "Docker", icon: "deployed_code", color: "text-blue-400" },
  { name: "Kubernetes", icon: "hub", color: "text-blue-600" },
  { name: "AWS", icon: "cloud", color: "text-yellow-500" },
  { name: "PostgreSQL", icon: "database", color: "text-blue-300" },
];

export default function Hero() {
  return (
    <main className="relative z-10 grow flex flex-col justify-center py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
            {/* Monospace status badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-blue-400 tracking-wide uppercase">
                Available for new opportunities
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Building scalable <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
                  backend systems.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                I'm <span className="text-white font-medium">Alex Devries</span>, a Senior Backend Engineer. I architect distributed infrastructure, build robust APIs, and optimize database performance for high-growth tech companies.
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Core Technologies
              </span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="px-3 py-1.5 rounded bg-surface-dark border border-zinc-800 text-zinc-300 text-sm font-medium flex items-center gap-2 hover:border-zinc-700 hover:text-white transition-colors cursor-default"
                  >
                    <span className={`material-symbols-outlined text-[16px] ${tech.color}`}>
                      {tech.icon}
                    </span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
              <button className="h-12 px-6 rounded-lg bg-primary hover:bg-blue-600 text-white font-semibold shadow-[0_0_20px_-5px_rgba(13,116,242,0.5)] transition-all flex items-center gap-2 group">
                <span>View Resume</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a 
                href="/projects"
                className="h-12 px-6 rounded-lg bg-surface-dark border border-zinc-800 text-zinc-300 font-medium hover:text-white hover:border-zinc-600 transition-all flex items-center gap-2"
              >
                <span>See Projects</span>
                <FolderOpen className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative group">
            {/* Abstract glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-surface-dark shadow-2xl">
              {/* Header of the 'window' mimicking a code editor or browser */}
              <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>

              {/* The Image */}
              <div className="aspect-[4/3] w-full bg-zinc-800 relative">
                <Image
                  alt="Professional portrait of Amir"
                  src="/images/amir-profile-picture.jpg"
                  fill
                  className="object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay gradient for text readability if needed, kept subtle */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>

                {/* Floating Badge on Image */}
                <div className="absolute bottom-4 right-4 bg-zinc-900/90 backdrop-blur border border-zinc-700 px-3 py-2 rounded-lg shadow-lg">
                  <p className="text-xs text-zinc-400 font-mono">Previously at</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-white tracking-tight">Stripe</span>
                    <span className="text-zinc-600">•</span>
                    <span className="font-bold text-white tracking-tight">Vercel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

