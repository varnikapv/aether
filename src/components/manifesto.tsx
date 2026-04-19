"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const paragraphs = [
  "We do not predict weather.",
  "We compose it — slowly, by hand, from observations nobody has made and instruments nobody has yet built.",
  "An atmosphere is a room large enough to move through. Each of ours is catalogued, numbered, and waiting.",
];

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section
      ref={ref}
      id="manifesto"
      className="relative border-y border-mist-dim px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 md:grid-cols-12">
        <div className="md:col-span-3">
          <div className="sticky top-28 flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
            <span className="text-ember">§ I</span>
            <span>Manifesto</span>
            <span>Vol. IX</span>
          </div>
        </div>
        <div className="md:col-span-8 md:col-start-5 flex flex-col gap-10">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.1 + i * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(1.6rem,3.2vw,3rem)] font-light leading-[1.15] tracking-[-0.01em] text-bone"
            >
              {i === 1 ? (
                <>
                  We compose it — slowly, by hand, from observations nobody
                  has made and instruments <em>nobody</em> has yet built.
                </>
              ) : (
                p
              )}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
