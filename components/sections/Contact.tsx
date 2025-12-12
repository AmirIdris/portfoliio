"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "hello@backend.dev";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: "code",
      href: "#",
      borderClass: "hover:border-primary/40",
      bgClass: "group-hover:bg-primary/10",
      textClass: "group-hover:text-primary",
      shadowClass: "hover:shadow-[0_0_20px_rgba(13,116,242,0.1)]",
    },
    {
      name: "LinkedIn",
      icon: "work",
      href: "#",
      borderClass: "hover:border-blue-500/40",
      bgClass: "group-hover:bg-blue-500/10",
      textClass: "group-hover:text-blue-500",
      shadowClass: "hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
    },
    {
      name: "Twitter",
      icon: "alternate_email",
      href: "#",
      borderClass: "hover:border-zinc-500/40",
      bgClass: "group-hover:bg-zinc-500/10",
      textClass: "group-hover:text-zinc-100",
      shadowClass: "hover:shadow-[0_0_20px_rgba(113,113,122,0.1)]",
    },
    {
      name: "Resume",
      icon: "description",
      href: "#",
      borderClass: "hover:border-green-500/40",
      bgClass: "group-hover:bg-green-500/10",
      textClass: "group-hover:text-green-500",
      shadowClass: "hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]",
      downloadIcon: true,
    },
  ];

  return (
    <div className="flex w-full grow flex-col items-center justify-center px-4 md:px-10 lg:px-40 py-20">
      <div className="flex flex-col w-full max-w-[800px] gap-12 relative z-10">
        {/* Subtle Grid Background Pattern */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none -z-10"></div>
        <div className="absolute top-40 -right-40 w-64 h-64 bg-blue-400/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        {/* Header Section */}
        <div className="flex flex-col gap-6 items-start">
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-300">Open to opportunities</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-white">
              Let's build something <br className="hidden md:block" />{" "}
              <span className="text-zinc-400">scalable together.</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl font-normal leading-relaxed">
              Specializing in high-performance distributed systems and backend architecture. I help companies scale their infrastructure from 0 to 1 and beyond.
            </p>
          </div>
        </div>

        {/* Email Interaction Component */}
        <div className="w-full max-w-lg mt-2 group/email">
          <label className="block text-sm font-medium text-zinc-400 mb-2 ml-1">
            Email Address
          </label>
          <div className="relative flex items-center w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-zinc-400" style={{ fontSize: "20px" }}>
                mail
              </span>
            </div>
            <input
              className="w-full pl-12 pr-12 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-base font-mono text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all cursor-pointer hover:border-zinc-600 shadow-sm"
              readOnly
              type="text"
              value={email}
              onClick={copyEmail}
            />
            <button
              onClick={copyEmail}
              className="absolute inset-y-0 right-2 my-auto px-3 py-1.5 flex items-center justify-center rounded-lg hover:bg-zinc-800 transition-colors group-hover/email:text-white text-zinc-400"
            >
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                {copied ? "check" : "content_copy"}
              </span>
            </button>
            {/* Tooltip hint */}
            <div className="absolute -top-10 right-0 bg-zinc-100 text-zinc-900 text-xs px-2 py-1 rounded opacity-0 group-hover/email:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
              {copied ? "Copied!" : "Click to copy"}
            </div>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              className={`group flex flex-col items-center justify-center gap-3 p-6 bg-zinc-900 border border-zinc-800 rounded-xl ${link.borderClass} transition-all ${link.shadowClass} hover:-translate-y-0.5`}
              href={link.href}
            >
              <div className={`p-3 bg-zinc-800 rounded-full ${link.bgClass} ${link.textClass} transition-colors`}>
                <span className="material-symbols-outlined text-3xl">{link.icon}</span>
              </div>
              <div className={`flex items-center gap-1 text-zinc-300 ${link.textClass} transition-colors`}>
                <span className="font-medium text-sm">{link.name}</span>
                <span
                  className={`material-symbols-outlined text-sm opacity-50 ${
                    link.downloadIcon
                      ? "group-hover:translate-y-0.5"
                      : "-rotate-45 group-hover:rotate-0"
                  } transition-transform duration-300`}
                >
                  {link.downloadIcon ? "download" : "arrow_forward"}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-4"></div>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm w-full">
          <p className="text-zinc-500">© 2024 Senior Backend Engineer.</p>
          <div className="flex items-center gap-6">
            <p className="text-zinc-600 flex items-center gap-2">
              <span className="material-symbols-outlined text-base">terminal</span>
              Designed in code
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

