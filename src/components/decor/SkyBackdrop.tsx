"use client";

/**
 * A light, painterly "sky story" motif threaded through the page below the Hero —
 * soft hand-drawn clouds, a distant bird or two, warm sunlight glows — the gentle
 * feeling of gliding through open sky between takeoff and arrival. Everything here
 * is intentionally quiet: low opacity, slow drift, never competing with content.
 */

import React from "react";
import { motion } from "framer-motion";

const CLOUD_PATH =
  "M35,78 C20,78 12,63 26,55 C18,39 38,26 57,33 C64,14 96,10 109,28 C129,15 162,22 165,43 C188,39 201,59 187,70 C201,77 194,92 175,92 L46,92 C26,92 17,87 35,78 Z";

interface CloudProps {
  className?: string;
  style?: React.CSSProperties;
  flip?: boolean;
  drift?: number;
  duration?: number;
}

/** One soft, layered, hand-painted cloud — shadowed underside, lit top, soft ink edge. */
export function Cloud({ className = "", style, flip = false, drift = 14, duration = 26 }: CloudProps) {
  return (
    <motion.svg
      viewBox="0 0 210 100"
      className={`pointer-events-none select-none overflow-visible ${className}`}
      style={{ ...style, transform: flip ? "scaleX(-1)" : undefined }}
      animate={{ x: [0, drift, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {/* soft underside shadow, offset and blurred for a painted (not stickered) feel */}
      <path d={CLOUD_PATH} transform="translate(6,9)" fill="currentColor" className="text-slate-400" opacity={0.35} style={{ filter: "blur(2px)" }} />
      {/* body */}
      <path d={CLOUD_PATH} fill="currentColor" className="text-primary-100" style={{ filter: "blur(0.4px)" }} />
      {/* sun-lit highlight along the top-left, like a brushed cel-shade pass */}
      <path
        d="M40,60 C34,50 40,38 52,36 C58,24 78,18 92,26 C98,18 116,16 124,26"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        className="text-white"
        opacity={0.55}
        style={{ filter: "blur(1.5px)" }}
      />
      {/* fine ink edge to hold the shape together */}
      <path d={CLOUD_PATH} fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-300" opacity={0.4} />
    </motion.svg>
  );
}

/** A loose, distant flock — three simple wing-strokes drifting very slowly. */
export function Birds({ className = "", colorClassName = "text-slate-400" }: { className?: string; colorClassName?: string }) {
  return (
    <motion.svg
      viewBox="0 0 80 30"
      className={`pointer-events-none select-none ${colorClassName} ${className}`}
      animate={{ x: [0, 10, 0], opacity: [0.5, 0.85, 0.5] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <path d="M4 14 Q10 6 16 14 Q22 6 28 14" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M34 20 Q39 13 44 20 Q49 13 54 20" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.75" />
      <path d="M56 6 Q60 1 64 6 Q68 1 72 6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.55" />
    </motion.svg>
  );
}

/** Soft god-rays fanning out from a light source — the warm shaft of light through cloud. */
export function SunRays({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      animate={{ opacity: [0.5, 0.75, 0.5], rotate: [0, 3, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      style={{
        background:
          "conic-gradient(from 200deg at 50% 50%, transparent 0deg, rgba(253,240,220,0.5) 8deg, transparent 20deg, transparent 55deg, rgba(253,240,220,0.35) 63deg, transparent 78deg, transparent 140deg, rgba(253,240,220,0.4) 150deg, transparent 165deg, transparent 360deg)",
        filter: "blur(6px)",
      }}
    />
  );
}

/** A small painted plane, banking gently, trailing a soft fading contrail — one of a
 * few hand-drawn "other transport" touches threaded through the sky story. */
export function PlaneTrail({
  className = "",
  duration = 55,
  colorClassName = "text-primary-800",
}: {
  className?: string;
  duration?: number;
  colorClassName?: string;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      initial={{ x: "-10vw" }}
      animate={{ x: "110vw" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 140 40" className={`w-28 sm:w-36 overflow-visible ${colorClassName}`}>
        <path d="M0,24 C30,22 55,22 78,22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 5" strokeLinecap="round" opacity="0.4" />
        <g transform="translate(82,14) rotate(4)">
          <path
            d="M0,10 L26,10 L34,6 L38,7 L32,11 L38,13 L34,14 L26,12 L14,14 L8,20 L4,20 L7,13 L0,13 Z"
            fill="currentColor"
            opacity="0.75"
          />
        </g>
      </svg>
    </motion.div>
  );
}

/** A soft blurred glow orb — "cool" daylight or "warm" golden-hour tone. */
export function SoftGlow({
  className = "",
  tone = "cool",
}: {
  className?: string;
  tone?: "cool" | "warm";
}) {
  const bg = tone === "warm" ? "bg-gold-400/10" : "bg-primary-200/25";
  return <div aria-hidden="true" className={`pointer-events-none rounded-full blur-[70px] ${bg} ${className}`} />;
}

/**
 * Shared color-grade for every photograph on the page (Hero showcase slides,
 * the flight-window sequence, destination cards) — a touch less saturated and
 * a touch warmer, so real photography reads as part of the same soft,
 * storybook world as the painted clouds rather than a jarring separate medium.
 * Apply alongside <PhotoWash /> for the full effect.
 */
export const PHOTO_FILTER = "saturate-[0.85] contrast-[0.94] brightness-[1.04]";

/** The warm/cool tint wash that sits on top of a photo — pair with PHOTO_FILTER. */
export function PhotoWash({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-100/20 via-transparent to-gold-300/15 mix-blend-soft-light ${className}`}
    />
  );
}

/**
 * A cloud-bumped horizon silhouette used at section seams so the page transitions
 * feel like descending through a cloud layer rather than a hard straight edge.
 * `fillClassName` should match the section background painted beneath it.
 */
export function CloudHorizon({
  fillClassName = "text-white",
  className = "absolute -top-px left-0 right-0 z-10",
}: {
  fillClassName?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={`w-full h-[46px] sm:h-[64px] md:h-[86px] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,40 C60,10 120,55 190,35 C260,15 300,60 380,42 C460,24 500,58 580,40 C660,22 710,55 800,38 C890,21 930,52 1010,36 C1090,20 1140,50 1220,34 C1300,18 1360,45 1440,30 L1440,90 L0,90 Z"
        fill="currentColor"
        className={fillClassName}
      />
    </svg>
  );
}
