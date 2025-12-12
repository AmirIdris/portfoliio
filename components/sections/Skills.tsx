import SkillCard, { SkillCardProps } from "@/components/ui/SkillCard";

const skillCategories: SkillCardProps[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Go", "Rust", "Python", "TypeScript", "SQL", "C++"],
  },
  {
    title: "Infrastructure",
    icon: "cloud",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Ansible"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "Redis", "MongoDB", "Cassandra", "ElasticSearch"],
  },
  {
    title: "Architecture",
    icon: "hub",
    skills: ["Microservices", "Event-Driven", "gRPC", "GraphQL", "REST"],
  },
  {
    title: "Tools & Ops",
    icon: "build",
    skills: ["GitHub Actions", "Prometheus", "Grafana", "CircleCI", "Datadog"],
  },
  {
    title: "Security",
    icon: "lock",
    skills: ["OAuth 2.0", "OpenID Connect", "RBAC", "mTLS"],
  },
];

export default function Skills() {
  return (
    <main className="relative z-10 grow py-12 sm:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-4 text-left sm:text-center md:items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Open to Work
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technical Expertise
          </h1>
          <p className="max-w-2xl text-lg text-zinc-400 font-normal leading-relaxed">
            Senior Backend Engineer building scalable, fault-tolerant distributed systems. Specializing in high-performance architecture and developer tooling.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </main>
  );
}

