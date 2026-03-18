"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ShadowFox (Virtual Internship)",
    period: "May 2025",
    description:
      "Penetrated a Dummy Website and got Hands on Experience on Web vulnerability and Packet Capturing via Wireshark to find the Login Credentials.",
    tags: ["Cybersecurity", "Wireshark", "Web Vuln"],
  },
  {
    title: "Volume Controller via Hand Gesture",
    period: "2023",
    description:
      "Initiated the Project with Python and using in-built libraries like matplotlib, pycharm, etc. Helps to Control the Volume of any virtual machines after integration.",
    tags: ["Python", "Computer Vision", "Automation"],
  },
  {
    title: "Adiptify-Adaptive Learning Platform",
    period: "2024",
    description:
      "Developed an AI-powered adaptive learning platform using LLMs and GenAI techniques. Designed a RAG architecture for curriculum-aware, personalized responses. Integrated DeepSeek-RV470B LLM using Ollama. Used FAISS for semantic retrieval and deployed services on Azure.",
    tags: ["AI/LLM", "RAG", "Python", "Azure"],
  },
  {
    title: "Armoly (Remote Internship)",
    period: "2023",
    description:
      "Had Hands-on experience on Linux Tools, SIEM Tools and SOC Operations of a real-world cybersecurity problems.",
    tags: ["SOC", "SIEM Tools", "Linux"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen bg-black py-32 px-6 md:px-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Selected Work & Experience
          </h2>
          <div className="w-24 h-[1px] bg-white/20"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-xl overflow-hidden hover:bg-white/[0.05] transition-colors duration-500"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex-col mb-12">
                <p className="text-zinc-500 text-sm mb-4 tracking-wider uppercase">
                  {project.period}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
