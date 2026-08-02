"use client";

import { motion } from "motion/react";

const skills = [
  { name: "React", icon: "⚛️", level: 95 },
  { name: "Next.js", icon: "▲", level: 90 },
  { name: "TypeScript", icon: "TS", level: 88 },
  { name: "Tailwind CSS", icon: "🌊", level: 92 },
  { name: "Node.js", icon: "🟢", level: 80 },
  { name: "Motion", icon: "✦", level: 85 },
  { name: "GraphQL", icon: "◈", level: 75 },
  { name: "PostgreSQL", icon: "🐘", level: 70 },
  { name: "Docker", icon: "🐳", level: 65 },
  { name: "Figma", icon: "🎨", level: 82 },
  { name: "Git", icon: "⑂", level: 90 },
  { name: "Three.js", icon: "◉", level: 60 },
];

const tools = [
  "VS Code", "Vercel", "GitHub", "Notion", "Postman", "Linear",
];

function SkillBar({ name, icon, level, delay }: { name: string; icon: string; level: number; delay: number }) {
  return (
    <motion.div
      className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-violet-500/40 hover:bg-zinc-900 transition-all group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-xl w-8 text-center leading-none font-mono">{icon}</span>
          <span className="font-medium text-sm text-zinc-200">{name}</span>
        </div>
        <span className="text-xs font-mono text-violet-400">{level}%</span>
      </div>
      {/* Progress bar */}
      <div className="h-1 rounded-full bg-zinc-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section label */}
      <motion.p
        className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        02. Skills
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        My <span className="text-gradient">Tech Stack</span>
      </motion.h2>

      <motion.p
        className="text-zinc-400 mb-12 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Technologies I work with daily to build modern web applications.
      </motion.p>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            {...skill}
            delay={i * 0.05}
          />
        ))}
      </div>

      {/* Tools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
          Tools & Workflow
        </p>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              className="text-sm text-zinc-400 border border-zinc-700 rounded-full px-4 py-1.5 hover:border-violet-500/50 hover:text-violet-400 transition-colors cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
