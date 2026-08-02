"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 60);
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300"
      animate={{
        backgroundColor: scrolled
          ? "rgba(9, 9, 11, 0.85)"
          : "rgba(9, 9, 11, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottomColor: scrolled
          ? "rgba(63, 63, 70, 0.5)"
          : "rgba(63, 63, 70, 0)",
      }}
      style={{ borderBottomWidth: 1 }}
    >
      {/* Logo */}
      <motion.a
        href="/"
        className="text-sm font-mono font-semibold tracking-widest text-violet-400 uppercase"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        &lt;ND /&gt;
      </motion.a>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors relative group"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 + 0.2 }}
          >
            {link.label}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-violet-400 group-hover:w-full transition-all duration-300" />
          </motion.a>
        ))}
      </nav>

      {/* CTA */}
      <motion.a
        href="#contact"
        onClick={(e) => handleClick(e, "#contact")}
        className="hidden md:flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full border border-violet-500/50 text-violet-400 hover:bg-violet-500/10 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Hire me
      </motion.a>
    </motion.header>
  );
}
