import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Contact />
    </div>
  );
}

