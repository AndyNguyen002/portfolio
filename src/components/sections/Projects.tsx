"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    title: "Gridbeyond",
    description:
      "AI-powered energy platform bridging Distributed Energy Resources (DERs) and the electricity grid. Complex data visualization with real-time energy trading analytics.",
    tags: ["React.js", "Redux", "Webpack", "SCSS"],
    color: "from-emerald-500/20 to-green-500/5",
    year: "2025",
    size: "large",
    company: "SETA International",
    link: "#",
    github: "#",
  },
  {
    title: "TII Forensic",
    description:
      "AI chatbot for forensic investigators to analyze digital evidence. Built with modern React patterns and real-time data querying.",
    tags: ["Next.js", "Tailwind", "React Query", "React Router"],
    color: "from-blue-500/20 to-cyan-500/5",
    year: "2024",
    size: "small",
    company: "SETA International",
    link: "#",
    github: "#",
  },
  {
    title: "ChatX",
    description:
      "AI chatbot automation platform for customer care with company-specific knowledge. Full-stack implementation with payments, auth, and deployment pipeline.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
    color: "from-violet-500/20 to-purple-500/5",
    year: "2024",
    size: "small",
    company: "ChatX AI Technology",
    link: "https://www.chatx.vn/",
    github: "#",
  },
  // {
  //   title: "Financial Dashboard",
  //   description:
  //     "Real-time financial dashboard with live WebSocket price feeds, interactive Chart.js visualizations, and role-based access control with Google OAuth and MetaMask.",
  //   tags: ["React", "Chart.js", "WebSocket", "MetaMask"],
  //   color: "from-amber-500/20 to-orange-500/5",
  //   year: "2023",
  //   size: "large",
  //   company: "ACD Tech",
  //   link: "#",
  //   github: "#",
  // },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isLarge = project.size === "large";

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-2xl border border-zinc-800 bg-zinc-900/80 overflow-hidden group cursor-pointer ${
        isLarge ? "md:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient bg on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative z-10 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-white">{project.year}</span>
              <span className="text-[10px] font-mono text-white border border-zinc-700 rounded-full px-2 py-0.5">
                {project.company}
              </span>
            </div>
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
          {project.link !== '#' && (
            <div className="flex gap-2 mt-1 shrink-0">
            <motion.a
              href={project.link}
              className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:border-zinc-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </div>
          )}
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-zinc-400 bg-zinc-800 border border-zinc-700/50 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      data-snap-section="true"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
        <motion.p
          className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          03. Projects
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <motion.p
          className="text-zinc-400 mb-8 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Projects I&apos;ve built — from AI-powered energy platforms to real-time financial dashboards.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
