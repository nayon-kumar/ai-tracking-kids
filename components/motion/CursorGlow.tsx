"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const SIZE = 560;

export default function CursorGlow() {
  const mouseX = useMotionValue(-SIZE);
  const mouseY = useMotionValue(-SIZE);
  const springX = useSpring(mouseX, { damping: 28, stiffness: 180, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 180, mass: 0.5 });
  const x = useTransform(springX, (value) => value - SIZE / 2);
  const y = useTransform(springY, (value) => value - SIZE / 2);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || !hasFinePointer) return;

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 -z-10 rounded-full blur-2xl transition-opacity duration-500"
      style={{
        width: SIZE,
        height: SIZE,
        x,
        y,
        opacity: visible ? 1 : 0,
        backgroundImage:
          "radial-gradient(circle, rgba(129,140,248,0.35) 0%, rgba(165,158,240,0.18) 45%, transparent 72%)",
      }}
    />
  );
}
