import ExperienceItem, { ExperienceItemProps } from "@/components/ui/ExperienceItem";

const experiences: ExperienceItemProps[] = [
  {
    title: "Senior Backend Engineer",
    company: "TechGiant",
    companyUrl: "#",
    dateRange: "Jan 2020 — Present",
    icon: "cloud",
    description:
      'Lead architect for the core payments team. Spearheaded the migration from monolithic architecture to <span class="text-blue-500 dark:text-blue-400 font-medium">microservices</span>, resulting in a 40% reduction in system latency and improved fault tolerance.',
    highlights: [
      'Designed high-throughput event processing pipeline handling <span class="text-zinc-900 dark:text-white font-mono text-xs">$1M+</span> daily volume.',
      "Mentored 4 junior engineers and established team-wide code review standards.",
      "Reduced AWS infrastructure costs by 25% through spot instance optimization.",
    ],
    techStack: ["Go", "gRPC", "Kubernetes", "AWS", "Terraform"],
    isCurrent: true,
  },
  {
    title: "Backend Engineer",
    company: "FinTechStartup",
    companyUrl: "#",
    dateRange: "Jun 2017 — Dec 2019",
    icon: "account_balance",
    description:
      "Designed and implemented the core ledger system. Worked closely with product managers to deliver features in a fast-paced environment.",
    highlights: [
      'Built real-time fraud detection service using <span class="text-zinc-900 dark:text-white font-mono text-xs">Redis</span> and Node.js.',
      "Optimized complex SQL queries reducing report generation time by 60%.",
      "Integrated 3rd party banking APIs (Plaid, Stripe) for seamless user onboarding.",
    ],
    techStack: ["Node.js", "PostgreSQL", "Redis", "TypeScript", "Docker"],
  },
  {
    title: "Software Developer",
    company: "LegacyCorp",
    companyUrl: "#",
    dateRange: "May 2015 — May 2017",
    icon: "business",
    description:
      "Maintained and enhanced legacy enterprise applications. Introduced modern development practices to the team.",
    highlights: [
      "Implemented the first CI/CD pipelines using Jenkins, reducing deployment time from 2 days to 2 hours.",
      "Refactored critical monolithic modules into modular Spring Boot services.",
      "Developed automated testing suite achieving 85% code coverage.",
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "Jenkins"],
  },
];

export default function Experience() {
  return (
    <main className="relative z-10 grow px-6 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Page Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Work Experience
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            7+ years architecting scalable distributed systems and high-throughput APIs. Specialized in Go, Node.js, and Cloud Infrastructure.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-0 sm:pl-8 border-l-0 sm:border-l border-zinc-800 space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>

        {/* Footer Call to Action */}
        <div className="flex flex-col items-center justify-center pt-12 pb-8 border-t border-white/5">
          <p className="text-zinc-400 mb-6 text-center">
            Interested in working together?
          </p>
          <a
            className="group flex items-center gap-2 text-white font-bold text-lg hover:text-primary transition-colors"
            href="mailto:hello@johndoe.com"
          >
            <span className="material-symbols-outlined text-primary">mail</span>
            Get in touch
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}

