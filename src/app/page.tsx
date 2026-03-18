import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import SkillsAndCerts from "@/components/SkillsAndCerts";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="home" className="bg-black text-white min-h-screen selection:bg-white/30 selection:text-white">
      {/* Floating Header Navbar */}
      <Navbar />

      {/* Hero: Scroll area using Frame sequences */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      
      {/* Page Content Below the sequence */}
      <div className="relative z-20 bg-black flex flex-col pt-12">
        <About />
        <SkillsAndCerts />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="w-full py-12 text-center text-zinc-500 text-sm border-t border-white/5 bg-black relative z-20">
        <p className="flex flex-col md:flex-row items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} Somraj Laskar.</span>
          <span className="hidden md:block w-1 h-1 bg-zinc-500 rounded-full"></span>
          <span>B.E. CSE Hons. Information Security</span>
        </p>
      </footer>
    </main>
  );
}
