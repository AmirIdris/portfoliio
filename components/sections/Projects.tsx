import ProjectCard, { ProjectCardProps } from "@/components/ui/ProjectCard";
import Link from "next/link";

const projects: ProjectCardProps[] = [
  {
    icon: "hub",
    title: "Distributed Event Streamer",
    description:
      'A high-throughput message queue system capable of handling <span class="font-mono text-zinc-300">10k req/s</span> with <span class="font-mono text-zinc-300">&lt;5ms</span> latency. Implements Raft consensus for data consistency.',
    status: { type: "active", label: "Active" },
    techStack: ["Rust", "gRPC", "RocksDB"],
    links: [
      { type: "source", href: "#", label: "Source" },
      { type: "docs", href: "#", label: "Docs" },
    ],
  },
  {
    icon: "api",
    title: "Multi-Tenant API Gateway",
    description:
      'Scalable authentication and rate-limiting service. Features dynamic routing and JWT verification with <span class="font-mono text-zinc-300">Redis</span> caching for sub-millisecond overhead.',
    status: { type: "version", label: "v1.2" },
    techStack: ["Go", "Redis", "Docker"],
    links: [
      { type: "source", href: "#", label: "Source" },
      { type: "demo", href: "#", label: "Demo" },
    ],
  },
  {
    icon: "account_balance_wallet",
    title: "Immutable Payment Ledger",
    description:
      'Double-entry ledger system ensuring financial accuracy. Built on an event-sourced architecture to provide a complete audit trail of <span class="font-mono text-zinc-300">1M+</span> transactions.',
    techStack: ["PostgreSQL", "Kafka", "Node.js"],
    links: [{ type: "source", href: "#", label: "Source" }],
  },
  {
    icon: "dns",
    title: "Global CDN Allocator",
    description:
      'Intelligent traffic routing based on geo-IP and real-time server load. Reduces latency by <span class="font-mono text-zinc-300">~40%</span> across 5 continents.',
    techStack: ["Elixir", "Phoenix", "Terraform"],
    links: [
      { type: "private", href: "#", label: "Private" },
      { type: "case-study", href: "#", label: "Case Study" },
    ],
  },
  {
    icon: "search",
    title: "Semantic Search Engine",
    description:
      "Vector database implementation for similarity search on large text corpuses. Optimized for memory efficiency using custom quantization.",
    status: { type: "wip", label: "WIP" },
    techStack: ["Python", "C++", "FAISS"],
    links: [{ type: "source", href: "#", label: "Source" }],
  },
];

export default function Projects() {
  return (
    <main className="relative z-10 grow py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Engineering & <span className="text-zinc-500">Architecture</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              A curated selection of backend systems focusing on high-throughput, fault tolerance, and scalable infrastructure.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}

          {/* Add New / View Archived Card */}
          <Link
            href="#"
            className="group relative flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-700 bg-transparent p-6 transition-all hover:border-zinc-500 hover:bg-white/5 min-h-[300px]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">add</span>
            </div>
            <span className="mt-4 text-sm font-medium text-zinc-400 group-hover:text-white">
              View Archived Projects
            </span>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">© 2024 Alex Devries. Built with precision.</p>
          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-zinc-500">
              <span className="block size-2 rounded-full bg-green-500"></span>
              <span className="text-xs font-mono">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

