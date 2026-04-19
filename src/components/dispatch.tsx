"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { dispatches } from "@/data/dispatches";

export function Dispatch() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="dispatch"
      className="relative px-6 py-32 md:px-10 md:py-44"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember md:col-span-3">
            § IV — Field Log
          </p>
          <h2 className="font-display text-[clamp(2.6rem,7vw,7rem)] font-light leading-[0.95] tracking-[-0.03em] md:col-span-9">
            Dispatches from the{" "}
            <span className="italic mercury-text">observers.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <ol className="md:col-span-7 flex flex-col">
            {dispatches.map((d, i) => (
              <motion.li
                key={d.date}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col gap-3 border-t border-mist-dim py-9 transition-colors duration-300 hover:border-ember"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
                    {d.date}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
                    {String(i + 1).padStart(2, "0")} / {dispatches.length}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-light leading-snug tracking-tight text-bone transition-colors duration-300 group-hover:text-ember md:text-3xl">
                  {d.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-bone-dim md:text-base">
                  {d.body}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-mist">
                  {d.author}
                </p>
              </motion.li>
            ))}
          </ol>

          <div className="md:col-span-4 md:col-start-9">
            <div className="sticky top-28 flex flex-col gap-8 border border-mist-dim bg-bg-alt p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
                Subscribe
              </p>
              <h3 className="font-display text-3xl font-light leading-tight tracking-tight text-bone md:text-4xl">
                A forecast arrives by post, unscheduled.
              </h3>
              <p className="text-sm leading-relaxed text-bone-dim">
                Four dispatches per year. Posted on paper of unspecified
                weight. Readable only once.
              </p>
              <SubscribeForm />
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
                No tracking. No retention. No refunds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubscribeForm() {
  const [state, setState] = useState<"idle" | "sent">("idle");
  const [email, setEmail] = useState("");

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setState("sent");
      }}
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center gap-2 border-b border-mist-dim pb-2 focus-within:border-ember transition-colors">
        <input
          id="email"
          type="email"
          placeholder="your.address@elsewhere"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent py-2 font-mono text-sm text-bone placeholder:text-mist-dim focus:outline-none"
        />
        <button
          type="submit"
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember transition-colors hover:text-bone cursor-pointer"
          aria-label="Subscribe to dispatches"
        >
          {state === "sent" ? "Filed." : "Enlist →"}
        </button>
      </div>
    </form>
  );
}
