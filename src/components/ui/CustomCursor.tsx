"use client";

import { motion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

function ReactIcon({ size, spinning }: { size: number; spinning: boolean }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: spinning ? 360 : 0 }}
      transition={
        spinning
          ? { duration: 8, repeat: Infinity, ease: "linear" }
          : { duration: 0.4 }
      }
    >
      {/* Orbit ellipses */}
      <ellipse
        cx="50" cy="50" rx="46" ry="17"
        stroke="#61DAFB" strokeWidth="3.5" opacity="0.9"
      />
      <ellipse
        cx="50" cy="50" rx="46" ry="17"
        stroke="#61DAFB" strokeWidth="3.5" opacity="0.9"
        transform="rotate(60 50 50)"
      />
      <ellipse
        cx="50" cy="50" rx="46" ry="17"
        stroke="#61DAFB" strokeWidth="3.5" opacity="0.9"
        transform="rotate(120 50 50)"
      />
      {/* Center nucleus */}
      <circle cx="50" cy="50" r="6" fill="#61DAFB" />
    </motion.svg>
  );
}

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useSpring(0, { stiffness: 400, damping: 30 });
  const y = useSpring(0, { stiffness: 400, damping: 30 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as Element;
      setHovering(
        target.matches("a, button, [data-cursor-hover], input, textarea, label, [role='button']")
      );
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [visible, x, y]);

  if (!visible) return null;

  const size = hovering ? 56 : 36;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{ scale: hovering ? 1 : 0.85, opacity: hovering ? 1 : 0.75 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
          filter: hovering
            ? "drop-shadow(0 0 10px rgba(97,218,251,0.7))"
            : "drop-shadow(0 0 4px rgba(97,218,251,0.3))",
        }}
      >
        <ReactIcon size={size} spinning={true} />
      </motion.div>
    </motion.div>
  );
}
