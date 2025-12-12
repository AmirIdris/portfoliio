import Navbar from "@/components/layout/Navbar";
import Skills from "@/components/sections/Skills";

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Skills />
    </div>
  );
}

