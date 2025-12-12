import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] bg-grid-pattern"></div>

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <Hero />

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
