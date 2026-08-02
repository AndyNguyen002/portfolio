"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce with real-time inventory, Stripe payments, and a beautiful storefront built with Next.js and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    color: "from-violet-500/20 to-purple-500/5",
    accent: "violet",
    size: "large",
    year: "2024",
    link: "#",
    github: "#",
  },
  {
    title: "AI Dashboard",
    description:
      "Analytics dashboard with AI-powered insights. Real-time data viz, customizable widgets.",
    tags: ["React", "D3.js", "OpenAI", "Tailwind"],
    color: "from-cyan-500/20 to-blue-500/5",
    accent: "cyan",
    size: "small",
    year: "2024",
    link: "#",
    github: "#",
  },
  {
    title: "Design System",
    description:
      "Component library with 60+ components, dark/light theme, and Storybook docs.",
    tags: ["React", "Storybook", "Radix UI"],
    color: "from-pink-500/20 to-rose-500/5",
    accent: "pink",
    size: "small",
    year: "2023",
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio V2",
    description:
      "Animated portfolio with WebGL hero, custom cursor, Lenis smooth scroll, and Motion animations.",
    tags: ["Next.js", "Motion", "Lenis", "GSAP"],
    color: "from-amber-500/20 to-orange-500/5",
    accent: "amber",
    size: "large",
    year: "2025",
    link: "#",
    github: "#",
  },
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
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 200px at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, rgba(139,92,246,0.06), transparent)`,
        }}
      />

      <div className="relative z-10 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-xs font-mono text-zinc-500">{project.year}</span>
            <h3 className="text-xl font-bold text-zinc-100 mt-1 group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-2 mt-1">
            <motion.a
              href={project.github}
              className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:border-zinc-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </motion.a>
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
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Tags */}
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
    <section id="projects" className="section-padding px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section label */}
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
        Selected <span className="text-gradient">Work</span>
      </motion.h2>

      <motion.p
        className="text-zinc-400 mb-12 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A collection of projects I&apos;ve built — from side projects to client work.
      </motion.p>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 perspective-1000">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* View all */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-violet-400 transition-colors font-mono"
          whileHover={{ x: 4 }}
        >
          View all projects
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
