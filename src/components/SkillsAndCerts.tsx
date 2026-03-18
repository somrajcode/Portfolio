"use client";
import { motion } from "framer-motion";

const skills = [
  "Kali Linux OS & Tools", "Network Security", "Communication",
  "SIEM Tools", "C++", "Python", "Defensive Tools", "Leadership", "Team Management"
];

const certifications = [
  { name: "Google CyberSecurity", issuer: "Coursera", color: "text-blue-400 border-blue-400" },
  { name: "Cisco Network Essentials", issuer: "Cisco", color: "text-emerald-400 border-emerald-400" },
  { name: "Security, Compliance & Identity (SC-900)", issuer: "Microsoft", color: "text-sky-400 border-sky-400" },
  { name: "Google Cloud Digital Leader", issuer: "Google", color: "text-orange-400 border-orange-400" },
];

export default function SkillsAndCerts() {
  return (
    <section id="skills" className="relative min-h-screen bg-neutral-950 py-32 px-6 md:px-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none w-full h-full object-cover mix-blend-overlay opacity-10" />

      <div className="max-w-7xl mx-auto space-y-32 z-10 relative">
        {/* SKILLS */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              My Toolkit.
            </h2>
            <div className="w-20 h-[1px] bg-white/20 mb-12"></div>
          </motion.div>

          {/* Floating Skill Bubbles */}
          <motion.div
            className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="px-6 py-4 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md shadow-2xl flex items-center justify-center text-zinc-300 font-medium tracking-wide hover:border-white/20 hover:scale-105 transition-all text-center"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CERTIFICATIONS */}
        <div id="certifications">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Certifications.
            </h2>
            <div className="w-20 h-[1px] bg-white/20 mb-12"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 content-stretch">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.name}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-zinc-900 shadow-md border border-white/5 hover:bg-zinc-800 transition-colors flex flex-col justify-between min-h-[220px]"
              >
                <div>
                   <span className={`text-xs font-bold uppercase tracking-widest ${cert.color.split(" ")[0]}`}>
                     {cert.issuer}
                   </span>
                   <h3 className="mt-4 text-xl font-bold text-white group-hover:text-blue-100 transition-colors">
                     {cert.name}
                   </h3>
                </div>
                <div className="mt-8 flex justify-end">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:bg-white/10 transition-all ${cert.color.split(" ")[1]}`}>
                    <svg className={`w-4 h-4 ${cert.color.split(" ")[0]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
