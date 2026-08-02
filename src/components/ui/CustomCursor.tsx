"use client";

import { motion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const rawX = useSpring(0, { stiffness: 500, damping: 35 });
  const rawY = useSpring(0, { stiffness: 500, damping: 35 });

  // Outer ring follows with more lag
  const outerX = useSpring(0, { stiffness: 150, damping: 20 });
  const outerY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      outerX.set(e.clientX);
      outerY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.matches("a, button, [data-cursor-hover], input, textarea, label")
      ) {
        setHovering(true);
      }
    };

    const handleHoverEnd = () => setHovering(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [visible, rawX, rawY, outerX, outerY]);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-violet-400 mix-blend-difference"
        style={{
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 10 : 6,
          height: hovering ? 10 : 6,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-violet-400/60"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 44 : 32,
          height: hovering ? 44 : 32,
          opacity: hovering ? 1 : 0.5,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
