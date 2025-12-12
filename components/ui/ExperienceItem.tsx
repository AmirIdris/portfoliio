import { ArrowOutward } from "lucide-react";

export interface ExperienceItemProps {
  title: string;
  company: string;
  companyUrl?: string;
  dateRange: string;
  icon: string;
  description: string;
  highlights: string[];
  techStack: string[];
  isCurrent?: boolean;
}

export default function ExperienceItem({
  title,
  company,
  companyUrl,
  dateRange,
  icon,
  description,
  highlights,
  techStack,
  isCurrent = false,
}: ExperienceItemProps) {
  return (
    <div className="relative group">
      {/* Timeline Node (Desktop) */}
      <div
        className={`hidden sm:flex absolute -left-[41px] top-1 ${
          isCurrent ? "h-5 w-5" : "h-3 w-3"
        } items-center justify-center rounded-full border ${
          isCurrent
            ? "border-primary bg-background-dark shadow-[0_0_0_4px_rgba(13,116,242,0.1)]"
            : "border-zinc-300 dark:border-zinc-700 bg-background-light dark:bg-background-dark"
        }`}
      >
        {isCurrent && (
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
        {/* Date */}
        <div className="w-full sm:w-32 flex-shrink-0 pt-1.5">
          <span
            className={`font-mono text-xs sm:text-sm font-medium tracking-wide uppercase ${
              isCurrent
                ? "text-primary"
                : "text-zinc-400 dark:text-zinc-500"
            }`}
          >
            {dateRange}
          </span>
        </div>

        {/* Content Card */}
        <div className="flex-grow glass-card rounded-xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                {title}
              </h3>
              {companyUrl ? (
                <a
                  className="text-base text-zinc-500 dark:text-zinc-400 hover:text-white transition-colors flex items-center gap-1 mt-1 w-fit"
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_outward
                  </span>
                </a>
              ) : (
                <p className="text-base text-zinc-500 dark:text-zinc-400 mt-1">
                  {company}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Logo Placeholder */}
              <div className="size-10 bg-zinc-800 rounded-lg flex items-center justify-center border border-white/5">
                <span className="material-symbols-outlined text-zinc-400">
                  {icon}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p
              className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400 list-disc list-outside ml-4 marker:text-zinc-600 dark:marker:text-zinc-600">
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: highlight }}
                />
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-600 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

