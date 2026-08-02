"use client";

import { motion } from "motion/react";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Python / FastAPI", level: 78 },
      { name: "Node.js / NestJS", level: 72 },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL / SQL", level: 72 },
      { name: "Redis", level: 65 },
    ],
  },
  {
    label: "Libraries & State",
    skills: [
      { name: "Redux", level: 85 },
      { name: "TanStack Query", level: 80 },
      { name: "Chart.js", level: 85 },
      { name: "React Router", level: 88 },
    ],
  },
];

const tools = ["Git", "Docker", "Azure", "VMware", "Nginx", "Webpack", "Vite"];

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-zinc-300">{name}</span>
        <span className="text-xs font-mono text-violet-400">{level}%</span>
      </div>
      <div className="h-1 rounded-full bg-zinc-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.15, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  let delay = 0;

  return (
    <section id="skills" className="section-padding px-6 md:px-12 max-w-6xl mx-auto">
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
        Technologies I use to build real-time systems, data-heavy dashboards, and full-stack products.
      </motion.p>

      {/* Skill groups */}
      <div className="grid sm:grid-cols-2 gap-10 mb-12">
        {skillGroups.map((group) => (
          <motion.div
            key={group.label}
            className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
              {group.label}
            </p>
            {group.skills.map((skill) => {
              const d = delay;
              delay += 0.06;
              return <SkillBar key={skill.name} {...skill} delay={d} />;
            })}
          </motion.div>
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
          Tools & Platforms
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
