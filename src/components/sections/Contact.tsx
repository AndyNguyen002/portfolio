"use client";

import { motion } from "motion/react";
import { useState } from "react";

const EMAIL = "ngocdungg002@gmail.com";
const GITHUB = "ngocdung";

const socials = [
  {
    name: "GitHub",
    handle: `@${GITHUB}`,
    href: `https://github.com/${GITHUB}`,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Phone",
    handle: "0981 153 616",
    href: "tel:+84981153616",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    name: "Location",
    handle: "Tay Ho, Ha Noi, Vietnam",
    href: "https://maps.google.com/?q=Tay+Ho+Hanoi",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding px-6 md:px-12 max-w-6xl mx-auto">
      <motion.p
        className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        04. Contact
      </motion.p>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&apos;s build
            <br />
            <span className="text-gradient">something great</span>
          </motion.h2>

          <motion.p
            className="text-zinc-400 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;m open to new opportunities — full-time roles, freelance, and interesting
            collaborations. Feel free to reach out anytime.
          </motion.p>

          {/* Email copy button */}
          <motion.button
            onClick={copyEmail}
            className="flex items-center gap-3 font-mono text-sm text-zinc-300 border border-zinc-700 hover:border-violet-500/50 rounded-xl px-5 py-3.5 mb-8 transition-colors group w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-4 h-4 text-violet-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-zinc-300 group-hover:text-white transition-colors truncate">
              {EMAIL}
            </span>
            <motion.span
              className="ml-auto text-xs text-zinc-500 shrink-0"
              key={copied ? "copied" : "copy"}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {copied ? "✓ Copied!" : "Copy"}
            </motion.span>
          </motion.button>

          {/* Socials */}
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
            }}
          >
            {socials.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-violet-400 transition-colors group"
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                whileHover={{ x: 6 }}
              >
                <span className="text-zinc-600 group-hover:text-violet-400 transition-colors">
                  {s.icon}
                </span>
                <span className="font-medium text-zinc-300">{s.name}</span>
                <span className="text-zinc-600 font-mono text-xs truncate">{s.handle}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right CTA card */}
        <motion.div
          className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 text-center py-8">
            <motion.div
              className="text-6xl mb-6 select-none"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              👋
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Nguyen Ngoc Dung</h3>
            <p className="text-sm font-mono text-violet-400 mb-1">Fullstack Developer</p>
            <p className="text-zinc-500 text-xs mb-8">Tay Ho, Ha Noi · Vietnam</p>
            <motion.a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-3.5 rounded-full font-medium transition-colors"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Send a Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600 font-mono"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <span>© 2025 Nguyen Ngoc Dung. All rights reserved.</span>
        <span>Built with Next.js · Motion · Tailwind CSS</span>
      </motion.div>
    </section>
  );
}
