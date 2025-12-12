import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/sections/Projects";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[size:4rem_4rem] bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] opacity-20"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Projects />
    </div>
  );
}

