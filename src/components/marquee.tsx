"use client";

import { motion } from "framer-motion";

export function Marquee({
  items,
  reverse = false,
  duration = 40,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        initial={{ x: reverse ? "-33.333%" : 0 }}
        animate={{ x: reverse ? 0 : "-33.333%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className="mx-10 inline-flex items-center gap-10 font-display text-[clamp(3rem,9vw,9rem)] font-light tracking-tight text-bone"
          >
            {t}
            <span
              aria-hidden="true"
              className="h-2 w-2 rotate-45 bg-ember"
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
