"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "./marquee";

export function Closing() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1.02]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 1, 1]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-mist-dim bg-bg px-6 py-32 md:px-10 md:py-52"
    >
      <motion.div
        style={{ scale, opacity }}
        className="mx-auto flex max-w-[1400px] flex-col items-center gap-16 text-center"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
          § V — Envoi
        </p>
        <h2 className="font-display text-[clamp(3.5rem,14vw,16rem)] font-light leading-[0.85] tracking-[-0.04em] text-bone">
          Weather is a{" "}
          <span className="italic mercury-text">decision</span>
          <br />
          made slowly.
        </h2>
        <p className="max-w-xl font-display text-lg italic leading-relaxed text-bone-dim md:text-xl">
          Every atmosphere in the archive began as a sentence someone was
          afraid to finish.
        </p>
      </motion.div>

      <div className="mt-28 border-y border-mist-dim py-6">
        <Marquee
          items={["Æther", "—", "Atelier of Imaginary Weather", "—"]}
          duration={65}
          reverse
        />
      </div>
    </section>
  );
}
