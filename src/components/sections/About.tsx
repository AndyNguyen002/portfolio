"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "10+", label: "Happy Clients" },
  { value: "∞", label: "Cups of Coffee" },
];

export function About() {
  return (
    <section id="about" className="section-padding px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section label */}
      <motion.p
        className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        01. About
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Text */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building things
            <br />
            <span className="text-gradient">people love to use</span>
          </motion.h2>

          <motion.div
            className="space-y-4 text-zinc-400 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I&apos;m a frontend developer with a deep passion for creating
              exceptional digital experiences. I specialize in building fast,
              accessible, and beautifully animated web applications.
            </p>
            <p>
              My approach combines clean architecture with thoughtful design —
              every interaction is intentional, every animation serves a purpose.
              I believe great software feels as good as it looks.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring design
              trends, contributing to open source, or leveling up my skills.
            </p>
          </motion.div>

          <motion.a
            href="/Nguyen_Ngoc_Dung_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-sm font-mono text-violet-400 border border-violet-500/30 hover:bg-violet-500/10 px-5 py-2.5 rounded-full transition-colors"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.a>
        </div>

        {/* Avatar + stats */}
        <div className="space-y-8">
          {/* Avatar placeholder */}
          <motion.div
            className="relative w-64 h-64 mx-auto md:mx-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Glow border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 p-0.5">
              <div className="w-full h-full rounded-2xl bg-zinc-900 flex items-center justify-center">
                <span className="text-7xl select-none">🧑‍💻</span>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -right-4 -bottom-4 grid grid-cols-3 gap-1.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-violet-500/40" />
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-violet-500/30 transition-colors group"
              >
                <div className="text-3xl font-bold text-gradient group-hover:scale-105 transition-transform inline-block">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
