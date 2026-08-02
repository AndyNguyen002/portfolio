"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "5+", label: "Projects Shipped" },
  { value: "3", label: "Companies" },
  { value: "300+", label: "Trial Users (ChatX)" },
];

const experience = [
  {
    company: "SETA International",
    role: "Frontend Developer",
    period: "Sept 2025 – present",
    highlights: [
      "Developed Strategy Compare feature across 12+ synchronized trading charts",
      "Built React/Python FastAPI full-stack features end-to-end",
      "Introduced shared API patterns and reusable component libraries",
    ],
  },
  {
    company: "ACD Tech",
    role: "Frontend Developer",
    period: "June 2023 – Sept 2025",
    highlights: [
      "Built real-time financial dashboards with live WebSocket & Chart.js",
      "Implemented Google OAuth and MetaMask authentication",
      "Refactored legacy React modules to improve maintainability",
    ],
  },
  {
    company: "ChatX AI Technology",
    role: "Fullstack Developer (Part-time)",
    period: "June 2024 – Jan 2025",
    highlights: [
      "Launched AI chatbot platform with 300+ trial users in Vietnam & Korea",
      "Built auth, Stripe payments, CI/CD on VPS + Nginx",
      "Refactored 6+ core modules of an open-source AI platform",
    ],
  },
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
        {/* Left — bio + stats */}
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
            <span className="text-gradient">people rely on</span>
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
              I&apos;m <strong className="text-zinc-200">Nguyen Ngoc Dung</strong>, a Fullstack Developer
              based in Tay Ho, Ha Noi. I specialize in React/TypeScript, real-time systems,
              and complex data visualization — from energy trading platforms to AI chatbot products.
            </p>
            <p>
              I&apos;ve worked across the full product lifecycle: architecture decisions,
              performance optimization, WebSocket integrations, authentication systems,
              and production incident resolution.
            </p>
            <p>
              Graduated with Distinction in Information Technology from Electric Power University (2025),
              with an Excellence Scholarship.
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

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4 mt-8"
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

        {/* Right — experience timeline */}
        <div className="space-y-6">
          <motion.p
            className="text-xs font-mono text-zinc-500 uppercase tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.p>

          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative pl-5 border-l border-zinc-800 hover:border-violet-500/40 transition-colors group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-zinc-700 bg-zinc-950 group-hover:border-violet-400 transition-colors" />

              <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                <h3 className="font-semibold text-zinc-200 text-sm">{exp.company}</h3>
                <span className="text-xs font-mono text-zinc-600">{exp.period}</span>
              </div>
              <p className="text-xs text-violet-400 font-mono mb-2">{exp.role}</p>
              <ul className="space-y-1">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-xs text-zinc-500 flex items-start gap-1.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
