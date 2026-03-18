"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // SEC 1: 0% to 100% (Somraj Laskar - Starts Center, Moves Top)
  const opacity1 = useTransform(scrollYProgress, [0, 0.9, 0.95], [1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0.35]);
  const y1 = useTransform(scrollYProgress, [0, 0.15, 0.3], ["0vh", "0vh", "-36vh"]);

  // SEC 2: 30% to 55% (Engineering & Defense - Bottom Left)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.25, 0.4, 0.6], [0.95, 1, 1.05]);
  const x2 = useTransform(scrollYProgress, [0.25, 0.4, 0.6], [-50, 0, 50]);

  // SEC 3: 65% to 90% (Bridging... - Top Right)
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.6, 0.75, 0.95], [0.95, 1, 1.05]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.75, 0.95], [50, 0, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full text-white px-6 md:px-16 overflow-hidden">
      
      {/* 1. INITIAL INTRO (Center to Top) */}
      <motion.div
        style={{ opacity: opacity1, scale: scale1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center will-change-transform z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mix-blend-overlay text-white leading-none">
            SOMRAJ
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mix-blend-overlay text-white leading-none -mt-4 md:-mt-8">
            LASKAR
          </h1>
          <p className="mt-8 text-xl md:text-3xl font-light tracking-widest uppercase text-white/70 mix-blend-difference">
            InfoSec &bull; Creative Dev
          </p>
        </motion.div>
      </motion.div>

      {/* 2. SECOND ACT (Bottom Left) -> Reverted to longer text and original alignment constraints */}
      <motion.div
        style={{ opacity: opacity2, scale: scale2, x: x2 }}
        className="absolute inset-0 flex flex-col items-start justify-end pb-32 md:pb-48 text-left will-change-transform"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full md:max-w-2xl mix-blend-difference text-white leading-tight drop-shadow-2xl tracking-tight">
          I build and secure <br/>
          <span className="italic font-light text-zinc-300">digital experiences.</span>
        </h2>
        <p className="mt-4 text-base md:text-xl text-zinc-200 font-medium mix-blend-difference drop-shadow-md max-w-lg leading-relaxed border-l-[1.5px] border-white/30 pl-5">
          Crafting performant web interactions while protecting digital assets and mitigating cyber threats.
        </p>
      </motion.div>

      {/* 3. THIRD ACT (Top Right) -> Reverted text and fixed alignment width */}
      <motion.div
        style={{ opacity: opacity3, scale: scale3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-start pt-32 md:pt-48 text-right will-change-transform"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full md:max-w-2xl mix-blend-difference text-white leading-tight drop-shadow-2xl tracking-tight">
          Bridging defense <br/>and <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500">engineering.</span>
        </h2>
        <p className="mt-4 text-base md:text-xl text-zinc-200 font-medium mix-blend-difference drop-shadow-md max-w-lg self-end leading-relaxed border-r-[1.5px] border-white/30 pr-5">
          Driven by a deep interest in Kali Linux tools, SIEM, and offensive/defensive methodologies.
        </p>
      </motion.div>

      {/* Scroll Indicator uses same blend */}
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 mix-blend-difference z-0"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/70">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/70 to-transparent"></div>
      </motion.div>
    </div>
  );
}
