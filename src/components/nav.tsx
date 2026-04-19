"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export function Nav() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 120], [0, 1]);
  const y = useTransform(scrollY, [0, 120], [-12, 0]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 mix-blend-difference">
        <Link
          href="#top"
          className="font-display text-xl tracking-tight text-bone"
          aria-label="Return to top"
        >
          Æ
        </Link>
        <ul className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.24em] text-bone md:flex font-mono">
          <li>
            <a href="#manifesto" className="hover:text-ember transition-colors cursor-pointer">
              Manifesto
            </a>
          </li>
          <li>
            <a href="#catalogue" className="hover:text-ember transition-colors cursor-pointer">
              Catalogue
            </a>
          </li>
          <li>
            <a href="#instruments" className="hover:text-ember transition-colors cursor-pointer">
              Instruments
            </a>
          </li>
          <li>
            <a href="#dispatch" className="hover:text-ember transition-colors cursor-pointer">
              Dispatches
            </a>
          </li>
        </ul>
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone">
          MMLI / 04.19
        </span>
      </div>

      <motion.div
        style={{ opacity, y }}
        className="fixed inset-x-0 top-0 z-40 h-px bg-gradient-to-r from-transparent via-mist to-transparent"
        aria-hidden="true"
      />
    </>
  );
}
