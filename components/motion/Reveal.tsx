"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const OFFSETS = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
} as const;

type Direction = keyof typeof OFFSETS;

export default function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  amount?: number;
}) {
  const offset = OFFSETS[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
