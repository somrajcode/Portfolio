"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen bg-black py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* About Info Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
              Behind the Code.
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-zinc-500 to-transparent"></div>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            I am a dynamic and ambitious Bachelor of Engineering student specializing in Computer Science Engineering, with a keen focus on Information Security. I possess a comprehensive understanding of core engineering principles and a deep interest in protecting digital assets and mitigating cyber threats.
          </p>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Proficient in Kali Linux Tools and a diverse range of programming languages, including Python and C++, supported by a solid grasp of database management systems and Defensive Security methodologies.
          </p>
          <div className="pt-4 flex gap-4">
             <a href="mailto:somrajlaskar01@gmail.com" className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform">
               Contact Me
             </a>
             <a href="tel:+919774304632" className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors">
               +91 9774304632
             </a>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
             <span className="w-4 h-4 rounded-full bg-green-500 blur-[2px]"></span>
             Education Journey
          </h3>
          <div className="space-y-12 relative border-l border-white/10 ml-3 pl-8">
            {/* Degree */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-black border-[3px] border-white text-transparent">.</span>
              <p className="text-green-400 text-sm font-bold tracking-widest mb-2 uppercase">2023 &mdash; 2027</p>
              <h4 className="text-xl font-semibold text-white mb-2">B.E. CSE Hons. Information Security</h4>
              <p className="text-zinc-400 font-medium mb-1">Chandigarh University</p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Currently pursuing a Bachelor of Engineering in Computer Science and Engineering along with a Hons in Information Security with IBM.
              </p>
            </div>
            
            {/* High School */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-black border-[3px] border-white/30 text-transparent">.</span>
              <p className="text-zinc-500 text-sm font-bold tracking-widest mb-2 uppercase">2020 &mdash; 2023</p>
              <h4 className="text-xl font-semibold text-white mb-2">Higher Secondary School (CBSE)</h4>
              <p className="text-zinc-400 font-medium mb-1">Bhavans Tripura VidyaMandir</p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                House Head, Discipline Captain, and a sincere student.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
