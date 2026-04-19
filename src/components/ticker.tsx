"use client";

import { motion } from "framer-motion";

const readings = [
  "−42.7 lum",
  "pH 6.1",
  "+311 k",
  "drift 0.02",
  "−8.2 °C",
  "98% rh",
  "322 mm",
  "1.4 kHz",
  "0.4 lum",
  "magnetic pull",
  "00.0 wind",
  "00.0 rain",
];

export function Ticker() {
  return (
    <div className="border-y border-mist-dim bg-bg">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap py-4 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        >
          {[...readings, ...readings, ...readings, ...readings].map((r, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 text-bone"
            >
              <span className="text-ember">◆</span>
              {r}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
