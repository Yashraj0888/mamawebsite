import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { About } from "@/components/sections/About";
import { Faculty } from "@/components/sections/Faculty";
import { Courses } from "@/components/sections/Courses";
import { Results } from "@/components/sections/Results";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      {/* Sections */}
      <Hero />
      <Highlights />
      <About />
      <Faculty />
      <Courses />
      <Results />
      <Contact />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
