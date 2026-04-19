"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { atmospheres, type Atmosphere } from "@/data/atmospheres";
import { cn } from "@/lib/utils";

export function Catalogue() {
  return (
    <section id="catalogue" className="px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
              § II — Catalogue
            </p>
            <h2 className="font-display text-[clamp(3rem,10vw,10rem)] font-light leading-[0.88] tracking-[-0.04em] text-bone">
              Six atmospheres,
              <br />
              <span className="italic mercury-text">on file.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-bone-dim">
            Entries revised quarterly. Specimens are stored in the Eventide
            Corridor at 4 °C and zero conviction.
          </p>
        </div>

        <ul className="flex flex-col">
          {atmospheres.map((a, i) => (
            <AtmosphereRow key={a.index} atmosphere={a} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function AtmosphereRow({
  atmosphere,
  index,
}: {
  atmosphere: Atmosphere;
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xText = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const even = index % 2 === 0;

  return (
    <li
      ref={ref}
      className="group relative grid grid-cols-1 gap-6 border-t border-mist-dim py-14 md:grid-cols-12 md:gap-8 md:py-20"
    >
      <div className="md:col-span-2 flex items-start gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
          {atmosphere.index}
        </span>
      </div>

      <motion.div
        style={{ x: xText }}
        className={cn(
          "md:col-span-6 flex flex-col gap-6",
          even ? "md:col-start-3" : "md:col-start-5"
        )}
      >
        <h3 className="font-display text-[clamp(2.4rem,6.5vw,6rem)] font-light leading-[0.9] tracking-[-0.03em] text-bone transition-colors duration-500 group-hover:text-ember">
          {atmosphere.name}
        </h3>
        <p className="max-w-md font-display text-lg italic leading-relaxed text-bone-dim">
          {atmosphere.abstract}
        </p>
        <div className="flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.25em] text-bone-dim">
          <span>{atmosphere.era}</span>
          <span>{atmosphere.region}</span>
          <span className="text-ember">{atmosphere.reading}</span>
        </div>
      </motion.div>

      <motion.div
        style={{ y: imageY }}
        className={cn(
          "md:col-span-3 relative aspect-[3/4] overflow-hidden rounded-sm",
          even ? "md:col-start-10" : "md:col-start-10"
        )}
      >
        <div
          className="absolute inset-0 transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          style={{
            background: `linear-gradient(160deg, ${atmosphere.palette[0]} 0%, ${atmosphere.palette[1]} 55%, ${atmosphere.palette[2]} 100%)`,
          }}
        />
        <div className="absolute inset-0 opacity-60 mix-blend-overlay">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), transparent 50%)",
            }}
          />
        </div>
        <div className="absolute inset-x-3 bottom-3 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-bone">
          <span>{atmosphere.specimen}</span>
          <span className="text-ember">↗</span>
        </div>
      </motion.div>
    </li>
  );
}
