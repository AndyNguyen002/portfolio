"use client";

import { motion } from "motion/react";
import type { IconType } from "react-icons";
import {
  SiChartdotjs,
  SiDocker,
  SiFastapi,
  SiGit,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWebpack,
} from "react-icons/si";

interface SkillItem {
  icon: IconType;
  name: string;
  color: string;
}

interface SkillCategory {
  label: string;
  skills: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { icon: SiReact, name: "React.js", color: "#61DAFB" },
      { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
      { icon: SiRedux, name: "Redux", color: "#764ABC" },
      { icon: SiReactrouter, name: "React Router", color: "#CA4245" },
      { icon: SiReactquery, name: "TanStack Query", color: "#FF4154" },
      { icon: SiChartdotjs, name: "Chart.js", color: "#FF6384" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiNestjs, name: "Nest.js", color: "#E0234E" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
    ],
  },
  {
    label: "Database",
    skills: [
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiRedis, name: "Redis", color: "#DC382D" },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { icon: SiGit, name: "Git", color: "#F05032" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
      { icon: SiNginx, name: "Nginx", color: "#009639" },
      { icon: SiVercel, name: "Vercel", color: "#ffffff" },
      { icon: SiWebpack, name: "Webpack", color: "#8DD6F9" },
    ],
  },
];

function SkillBadge({ icon: Icon, name, color }: SkillItem) {
  return (
    <motion.div
      className="flex items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2.5 hover:border-zinc-600 hover:bg-zinc-800/60 transition-colors"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
    >
      <Icon style={{ color }} className="h-4 w-4 shrink-0" />
      <span className="text-sm text-zinc-300 whitespace-nowrap">{name}</span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" data-snap-section="true">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
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
          Tech <span className="text-gradient">Stack</span>
        </motion.h2>

        <motion.p
          className="text-zinc-400 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Core technologies for real-time platforms, dashboard systems, and full-stack product delivery.
        </motion.p>

        <div className="space-y-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{cat.label}</span>
                <div className="flex-1 h-px bg-zinc-800" />
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
