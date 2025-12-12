import { Code, Article, OpenInNew, Lock } from "lucide-react";

export interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  status?: {
    type: "active" | "version" | "wip";
    label: string;
  };
  techStack: string[];
  links?: {
    type: "source" | "docs" | "demo" | "case-study" | "private";
    href: string;
    label: string;
  }[];
}

const iconMap: Record<string, string> = {
  hub: "hub",
  api: "api",
  account_balance_wallet: "account_balance_wallet",
  dns: "dns",
  search: "search",
};

const linkIconMap = {
  source: "code",
  docs: "article",
  demo: "open_in_new",
  "case-study": "article",
  private: "lock",
};

export default function ProjectCard({
  icon,
  title,
  description,
  status,
  techStack,
  links = [],
}: ProjectCardProps) {
  const statusStyles = {
    active: "text-green-400 bg-green-400/10 border-green-400/20",
    version: "text-zinc-500 bg-zinc-800 border-white/5",
    wip: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  };

  return (
    <article className="group relative flex flex-col justify-between rounded-xl border border-border-subtle bg-surface-dark backdrop-blur-sm p-6 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(13,116,242,0.15)]">
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none"></div>

      <div>
        {/* Icon and Status */}
        <div className="mb-4 flex items-center justify-between">
          <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
            <span className="material-symbols-outlined text-[24px]">{iconMap[icon] || icon}</span>
          </div>
          {status && (
            <span
              className={`font-mono text-xs px-2 py-1 rounded border ${statusStyles[status.type]}`}
            >
              {status.label}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <div>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {links.length > 0 && (
          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-blue-400 transition-colors group/link"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {linkIconMap[link.type]}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

