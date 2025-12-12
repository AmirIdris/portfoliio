import Navbar from "@/components/layout/Navbar";
import Experience from "@/components/sections/Experience";

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-grid-pattern bg-grid"></div>

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <Experience />
    </div>
  );
}

