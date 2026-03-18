"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[70vh] bg-black py-32 px-6 md:px-24 flex flex-col justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-zinc-900/40 blur-[150px] rounded-[100%] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-zinc-500 tracking-[0.2em] uppercase text-sm font-bold mb-4">What&apos;s Next?</p>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none">
            Get In Touch
          </h2>
          <p className="text-lg md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities in Cybersecurity and Creative Development. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          <a
            href="mailto:somrajlaskar01@gmail.com"
            className="px-8 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 hover:bg-zinc-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Say Hello &mdash; Email
          </a>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/somrajlaskar" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 transition-colors">
              <span className="font-bold">IN</span>
            </a>
            <a href="https://github.com/somrajlaskar" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 transition-colors">
              <span className="font-bold">GH</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
