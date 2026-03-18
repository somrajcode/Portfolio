"use client";

import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center py-6 pointer-events-none"
    >
      <div className="pointer-events-auto flex gap-6 md:gap-10 px-8 py-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white/60 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
