"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  /* ── scroll progress over the 300vh wrapper ───────────── */
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  /* smooth driver – prevents jitter */
  const progress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.3,
  });

  /* trigger entrance stagger once we have any motion */
  useMotionValueEvent(scrollYProgress, "change", () => {
    if (!entered) setEntered(true);
  });

  /* ── "Æther" drifts up-left ───────────────────────────── */
  const w1x = useTransform(progress, [0, 0.75], ["0vw", "-6vw"]);
  const w1y = useTransform(progress, [0, 0.75], ["0vh", "-10vh"]);
  const w1scale = useTransform(progress, [0, 0.75], [1, 1.08]);

  /* ── "weather" drifts right ──────────────────────────── */
  const w2x = useTransform(progress, [0, 0.75], ["0vw", "9vw"]);
  const w2y = useTransform(progress, [0, 0.75], ["0vh", "4vh"]);
  const w2scale = useTransform(progress, [0, 0.75], [1, 0.94]);

  /* ── "archive." drops down-right ────────────────────── */
  const w3x = useTransform(progress, [0, 0.75], ["0vw", "3vw"]);
  const w3y = useTransform(progress, [0, 0.75], ["0vh", "13vh"]);

  /* ── central divider line grows ─────────────────────── */
  const lineScaleY = useTransform(progress, [0.18, 0.58], [0, 1]);
  const lineOpacity = useTransform(progress, [0.15, 0.3, 0.82, 0.95], [0, 1, 1, 0]);

  /* ── tagline emerges in the breathing space ─────────── */
  const tagOpacity = useTransform(progress, [0.35, 0.62], [0, 1]);
  const tagY = useTransform(progress, [0.35, 0.62], [28, 0]);

  /* ── corner metadata ─────────────────────────────────── */
  const metaOpacity = useTransform(progress, [0.5, 0.72], [0, 1]);

  /* ── CTA ─────────────────────────────────────────────── */
  const ctaOpacity = useTransform(progress, [0.65, 0.85], [0, 1]);
  const ctaY = useTransform(progress, [0.65, 0.85], [18, 0]);

  /* ── whole stage exits ──────────────────────────────── */
  const stageOpacity = useTransform(progress, [0.88, 1], [1, 0]);
  const stageScale = useTransform(progress, [0.88, 1], [1, 0.96]);
  const stageBlur = useTransform(progress, [0.88, 1], [0, 10]);
  const stageFilter = useTransform(stageBlur, (b) => `blur(${b}px)`);

  /* ── background orbs drift at different rates ────────── */
  const orb1x = useTransform(progress, [0, 1], ["0%", "-22%"]);
  const orb1y = useTransform(progress, [0, 1], ["0%", "-18%"]);
  const orb1s = useTransform(progress, [0, 1], [1, 1.5]);
  const orb2x = useTransform(progress, [0, 1], ["0%", "30%"]);
  const orb2y = useTransform(progress, [0, 1], ["0%", "12%"]);
  const orb2s = useTransform(progress, [0, 1], [1, 1.3]);
  const orb3x = useTransform(progress, [0, 1], ["0%", "10%"]);
  const orb3y = useTransform(progress, [0, 1], ["0%", "-28%"]);

  return (
    /* ── 300vh scroll container ──────────────────────────── */
    <div ref={wrapperRef} id="top" className="relative h-[300vh]">
      {/* ── sticky stage ─────────────────────────────────── */}
      <motion.div
        style={{
          opacity: stageOpacity,
          scale: stageScale,
          filter: stageFilter,
        }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* ── atmospheric orbs ─────────────────────────── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <motion.div
            style={{ x: orb1x, y: orb1y, scale: orb1s }}
            className="absolute left-[30%] top-[20%] h-[55vw] w-[55vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,#1b3a6b_0%,transparent_60%)] opacity-55 blur-3xl"
          />
          <motion.div
            style={{ x: orb2x, y: orb2y, scale: orb2s }}
            className="absolute left-[5%] top-[50%] h-[28vw] w-[28vw] rounded-full bg-[radial-gradient(circle_at_center,#e8a95c_0%,transparent_65%)] opacity-22 blur-3xl"
          />
          <motion.div
            style={{ x: orb3x, y: orb3y }}
            className="absolute right-[4%] top-[12%] h-[20vw] w-[20vw] rounded-full bg-[radial-gradient(circle_at_center,#a9b7c6_0%,transparent_60%)] opacity-18 blur-3xl"
          />
        </div>

        {/* ── scroll progress bar (left edge) ──────────── */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 z-10 h-full w-px bg-mist-dim"
        >
          <motion.div
            style={{ scaleY: progress, transformOrigin: "top" }}
            className="h-full w-full bg-ember"
          />
        </div>

        {/* ── main composition ─────────────────────────── */}
        <div className="relative flex h-full flex-col justify-between px-8 py-8 md:px-14 md:py-10">

          {/* top bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-bone-dim"
          >
            <span>Æther — Atelier</span>
            <span>est. 2041</span>
            <span className="hidden md:inline">Vol. IX — Imaginary Weather</span>
            <span>52° N / 4° E</span>
          </motion.div>

          {/* center: title stage */}
          <div className="relative flex flex-1 items-center justify-center">

            {/* growing vertical line */}
            <motion.div
              aria-hidden="true"
              style={{ scaleY: lineScaleY, opacity: lineOpacity, transformOrigin: "top" }}
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-mist to-transparent"
            />

            {/* title words */}
            <div className="relative w-full">
              <h1 className="pointer-events-none select-none font-display font-light leading-[0.82] tracking-[-0.04em]">
                {/* "Æther" */}
                <motion.span
                  style={{ x: w1x, y: w1y, scale: w1scale }}
                  initial={{ opacity: 0, y: "0.5em" }}
                  animate={{ opacity: 1, y: "0em" }}
                  transition={{ duration: 1.1, delay: 0.05, ease: EASE_OUT }}
                  className="block text-[clamp(5rem,18vw,21rem)] text-bone"
                >
                  Æther
                </motion.span>

                {/* "weather" (offset, italic, mercury) */}
                <motion.span
                  style={{ x: w2x, y: w2y, scale: w2scale }}
                  initial={{ opacity: 0, y: "0.4em" }}
                  animate={{ opacity: 1, y: "0em" }}
                  transition={{ duration: 1.1, delay: 0.14, ease: EASE_OUT }}
                  className="block pl-[10%] text-[clamp(4rem,15vw,18rem)] italic mercury-text"
                >
                  weather
                </motion.span>

                {/* "archive." */}
                <motion.span
                  style={{ x: w3x, y: w3y }}
                  initial={{ opacity: 0, y: "0.4em" }}
                  animate={{ opacity: 1, y: "0em" }}
                  transition={{ duration: 1.1, delay: 0.22, ease: EASE_OUT }}
                  className="block text-right text-[clamp(4rem,15vw,18rem)] text-bone"
                >
                  archive.
                </motion.span>
              </h1>

              {/* tagline emerges in the breathing gap */}
              <motion.div
                style={{ opacity: tagOpacity, y: tagY }}
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <p className="max-w-sm text-center font-display text-lg italic leading-relaxed text-bone-dim md:text-xl">
                  Weather that does{" "}
                  <em className="not-italic text-bone">not</em> exist.
                  <br />
                  Six atmospheres, on file.
                </p>
              </motion.div>
            </div>
          </div>

          {/* bottom bar: metadata + CTA */}
          <div className="flex flex-wrap items-end justify-between gap-6">
            <motion.div
              style={{ opacity: metaOpacity }}
              className="flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim"
            >
              <span className="text-bone">In residence</span>
              <span>E. Halden · N. Orévny · K. Ailari</span>
            </motion.div>

            <motion.div
              style={{ opacity: metaOpacity }}
              className="hidden flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim md:flex"
            >
              <span>Instruments: 06 filed</span>
              <span>Atmospheres: 06 active</span>
            </motion.div>

            <motion.a
              href="#catalogue"
              style={{ opacity: ctaOpacity, y: ctaY }}
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-mist-dim px-6 py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone transition-all duration-200 hover:border-ember hover:text-ember"
            >
              Open Catalogue
              <span
                aria-hidden="true"
                className="inline-block h-px w-5 bg-current transition-all duration-200 group-hover:w-9"
              />
            </motion.a>
          </div>
        </div>

        {/* scroll hint — fades out once scrolled */}
        <motion.div
          style={{
            opacity: useTransform(progress, [0, 0.12], [1, 0]),
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-bone-dim">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-bone-dim to-transparent"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
