export interface SkillCardProps {
  title: string;
  icon: string;
  skills: string[];
}

export default function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <div className="group relative flex flex-col gap-5 rounded-xl border border-white/10 bg-zinc-900/50 p-6 shadow-sm backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(13,116,242,0.1)]">
      <div className="flex items-center gap-3 border-b border-white/5 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
            {icon}
          </span>
        </div>
        <h2 className="text-lg font-bold leading-tight text-white">
          {title}
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-center rounded border border-white/10 bg-white/5 px-2.5 py-1.5 transition-colors group-hover:border-primary/20"
          >
            <span className="font-mono text-xs font-medium text-slate-200">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

