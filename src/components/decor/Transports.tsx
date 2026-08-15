"use client";

/**
 * Hand-painted "other transport" motifs — quiet companions to the sky story,
 * each tied to a real service on the page (houseboats, bus & train tickets).
 * Same soft, layered technique as Cloud: blurred shadow pass, flat body, ink edge.
 */

import React from "react";
import { motion } from "framer-motion";

interface MotifProps {
  className?: string;
  style?: React.CSSProperties;
  flip?: boolean;
  drift?: number;
  duration?: number;
}

/** A traditional Kerala houseboat, resting on a gentle painted swell. */
export function Houseboat({ className = "", style, flip = false, drift = 6, duration = 10 }: MotifProps) {
  return (
    <motion.svg
      viewBox="0 0 160 90"
      className={`pointer-events-none select-none overflow-visible ${className}`}
      style={{ ...style, transform: flip ? "scaleX(-1)" : undefined }}
      animate={{ x: [0, drift, 0], y: [0, -2, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {/* shadow */}
      <ellipse cx="82" cy="72" rx="58" ry="6" fill="currentColor" className="text-slate-400" opacity="0.25" style={{ filter: "blur(2px)" }} />
      {/* woven roof arch */}
      <path
        d="M30,52 C34,26 62,14 90,16 C114,18 128,32 130,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        className="text-gold-600"
        opacity="0.55"
      />
      {/* hull */}
      <path d="M14,52 L146,52 L134,70 L26,70 Z" fill="currentColor" className="text-primary-700" opacity="0.5" />
      {/* waterline swell */}
      <path d="M0,72 C20,68 40,76 60,72 C80,68 100,76 120,72 C136,69 148,73 160,71" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-300" opacity="0.5" strokeLinecap="round" />
      {/* ink edge */}
      <path d="M14,52 L146,52 L134,70 L26,70 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-800" opacity="0.35" />
    </motion.svg>
  );
}

/** A small painted train, three carriages, gliding along a soft rail line. */
export function Train({ className = "", style, flip = false, drift = 10, duration = 34 }: MotifProps) {
  return (
    <motion.svg
      viewBox="0 0 200 60"
      className={`pointer-events-none select-none overflow-visible ${className}`}
      style={{ ...style, transform: flip ? "scaleX(-1)" : undefined }}
      animate={{ x: [0, drift, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {/* shadow */}
      <rect x="8" y="46" width="184" height="4" rx="2" fill="currentColor" className="text-slate-400" opacity="0.3" style={{ filter: "blur(1.5px)" }} />
      {/* carriages */}
      {[0, 66, 132].map((offset, i) => (
        <g key={i} transform={`translate(${offset},0)`}>
          <rect x="6" y="16" width="56" height="28" rx="6" fill="currentColor" className={i === 0 ? "text-primary-700" : "text-primary-500"} opacity="0.55" />
          <rect x="14" y="23" width="12" height="10" rx="2" fill="currentColor" className="text-primary-100" opacity="0.8" />
          <rect x="32" y="23" width="12" height="10" rx="2" fill="currentColor" className="text-primary-100" opacity="0.8" />
          <circle cx="18" cy="46" r="4" fill="currentColor" className="text-primary-900" opacity="0.5" />
          <circle cx="50" cy="46" r="4" fill="currentColor" className="text-primary-900" opacity="0.5" />
        </g>
      ))}
      {/* connecting rail */}
      <line x1="0" y1="46" x2="200" y2="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" className="text-primary-300" opacity="0.5" />
    </motion.svg>
  );
}
