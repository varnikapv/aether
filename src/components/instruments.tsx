"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { instruments } from "@/data/instruments";
import { Marquee } from "./marquee";

export function Instruments() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="instruments"
      className="relative overflow-hidden bg-bg-alt"
    >
      <div className="border-y border-mist-dim py-6">
        <Marquee
          items={["Instruments", "·", "Made by hand", "·", "Since 2041", "·"]}
          duration={55}
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-44">
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember md:col-span-3">
            § III — Instruments
          </p>
          <h2 className="font-display text-[clamp(2.6rem,7vw,7rem)] font-light leading-[0.95] tracking-[-0.03em] md:col-span-9">
            Six apparatus for reading{" "}
            <span className="italic text-bone-dim">what is not there.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[1px] border border-mist-dim bg-mist-dim sm:grid-cols-2 lg:grid-cols-3">
          {instruments.map((it, i) => (
            <motion.div
              key={it.code}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.05 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex min-h-[320px] flex-col justify-between bg-bg-alt p-8 transition-colors duration-500 hover:bg-bg-raise cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
                  {it.code}
                </span>
                <InstrumentMark index={i} />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-3xl font-light leading-tight tracking-tight text-bone transition-colors duration-300 group-hover:text-ember">
                  {it.name}
                </h3>
                <p className="text-sm leading-relaxed text-bone-dim">
                  {it.purpose}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ember">
                  {it.measure}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstrumentMark({ index }: { index: number }) {
  const marks = [
    <svg key="a" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="0.5" />
      <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="0.5" />
      <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="0.5" />
    </svg>,
    <svg key="b" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="8" width="32" height="32" stroke="currentColor" strokeWidth="0.5" />
      <path d="M8 8 L40 40 M40 8 L8 40" stroke="currentColor" strokeWidth="0.5" />
    </svg>,
    <svg key="c" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 4 L44 24 L24 44 L4 24 Z"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="0.5" />
    </svg>,
    <svg key="d" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M24 6 C36 6 42 18 42 24 C42 36 30 42 24 42 C12 42 6 30 6 24 C6 12 18 6 24 6 Z" stroke="currentColor" strokeWidth="0.5" />
      <path d="M24 14 L24 24 L32 28" stroke="currentColor" strokeWidth="0.5" />
    </svg>,
    <svg key="e" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M6 36 C18 20 30 20 42 36" stroke="currentColor" strokeWidth="0.5" />
      <path d="M6 28 C18 12 30 12 42 28" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="24" cy="8" r="2" stroke="currentColor" strokeWidth="0.5" />
    </svg>,
    <svg key="f" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <polygon
        points="24,4 44,18 36,42 12,42 4,18"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>,
  ];
  return (
    <div className="text-mist transition-transform duration-500 group-hover:rotate-45 group-hover:text-ember">
      {marks[index % marks.length]}
    </div>
  );
}
