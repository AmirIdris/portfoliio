
export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-zinc-800 bg-background-dark py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-500 text-sm">© 2024 Alex Devries. Built with Next.js & Tailwind.</p>
        
        <div className="flex items-center gap-6">
          <a
            aria-label="GitHub"
            className="text-zinc-500 hover:text-primary transition-colors"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
          </a>
          <a
            aria-label="LinkedIn"
            className="text-zinc-500 hover:text-primary transition-colors"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </a>
          <a
            aria-label="Twitter"
            className="text-zinc-500 hover:text-primary transition-colors"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">alternate_email</span>
          </a>
          <a
            aria-label="Email"
            className="text-zinc-500 hover:text-primary transition-colors"
            href="mailto:alex@example.com"
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

