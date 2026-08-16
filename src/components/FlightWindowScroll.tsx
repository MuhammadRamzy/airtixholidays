"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, SunRays, PlaneTrail } from "./decor/SkyBackdrop";

// Two separate tone-maps: the SKY gets pushed hard toward the site's painted
// palette (navy -> periwinkle -> warm cream) and blurred so it reads as an
// atmospheric backdrop, not a crisp separate photograph. The window FRAME is
// a physical object (plastic, metal) — re-tinting it blue made it look wrong,
// so it gets a much lighter neutral grade instead, just enough to feel like
// it belongs in the same world.
const SKY_DUOTONE_ID = "sky-duotone";
const FRAME_GRADE_ID = "frame-grade";
function ToneFilters() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <filter id={SKY_DUOTONE_ID} x="-15%" y="-15%" width="130%" height="130%">
        <feColorMatrix
          type="matrix"
          values="0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0 0 0 1 0"
        />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0.035 0.63 0.98" />
          <feFuncG type="table" tableValues="0.06 0.73 0.93" />
          <feFuncB type="table" tableValues="0.16 0.92 0.85" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="6" />
      </filter>
      <filter id={FRAME_GRADE_ID}>
        <feColorMatrix type="saturate" values="0.25" />
        <feComponentTransfer>
          <feFuncR type="linear" slope="0.85" intercept="0.08" />
          <feFuncG type="linear" slope="0.85" intercept="0.09" />
          <feFuncB type="linear" slope="0.87" intercept="0.11" />
        </feComponentTransfer>
      </filter>
    </svg>
  );
}

export default function FlightWindowScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Driven directly off scrollYProgress — no spring smoothing. A spring on a
  // scroll-scrubbed value is, by definition, always chasing the actual
  // scroll position (that lag is what "buggy and laggy" was), and on a fast
  // scroll or direction change it can overshoot and wobble. Tracking scroll
  // 1:1 makes every transform frame-perfect and removes both problems.
  const progress = scrollYProgress;

  // ─── WINDOW ───
  // Gentle scale (was 1 -> 25, which pixelated the raster frame badly well
  // before the fade even started) and a wide, early, overlapping fade so the
  // frame dissolves smoothly into the sky rather than zooming into a blur
  // and then vanishing abruptly. No animated blur filter here — recomputing
  // a CSS blur() every scroll frame (on top of the layer's own SVG filter)
  // is expensive to repaint and was the other big source of jank.
  const windowScale = useTransform(progress, [0, 0.5], [1, 2.3]);
  const windowOpacity = useTransform(progress, [0.15, 0.5], [1, 0]);

  // ─── SKY ───
  // Subtler parallax than before (was 1.1 -> 1.4) so the motion feels like a
  // slow, premium drift rather than a rushed zoom.
  const skyScale = useTransform(progress, [0, 1], [1.08, 1.22]);
  const skyY = useTransform(progress, [0, 1], ["0%", "10%"]);

  // Illustrated clouds drift in gradually as the frame dissolves, thickening
  // through the middle of the scroll so the photographic sky is increasingly
  // read through a layer of painted cloud rather than seen directly.
  const cloudsOpacity = useTransform(progress, [0.1, 0.4], [0, 1]);

  // ─── CONTENT ───
  // Starts before the window has fully dissolved so the two overlap instead
  // of leaving a dead gap in the middle of the scroll.
  const contentOpacity = useTransform(progress, [0.42, 0.62], [0, 1]);
  const contentY = useTransform(progress, [0.42, 0.62], [30, 0]);

  // ─── HANDOFF ───
  // The last stretch of scroll fades a solid wash over the whole scene so the
  // cut into TrustBar (white) feels like arriving somewhere, not a hard clip.
  const handoffOpacity = useTransform(progress, [0.82, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-slate-950">
      <ToneFilters />

      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* 1. Sky — heavily tone-mapped and blurred so it reads as a painted
             backdrop, not a separate photographic medium */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0 origin-bottom"
          style={{ scale: skyScale, y: skyY }}
        >
          <Image
            src="https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=2500&auto=format&fit=crop"
            alt="Beautiful sky view from airplane window - AirTixHolidays"
            fill
            sizes="100vw"
            className="object-cover scale-110"
            style={{ filter: `url(#${SKY_DUOTONE_ID})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-transparent to-primary-950/30" />
        </motion.div>

        {/* Warm light breaking through, upper-left, like sun through cloud */}
        <SunRays className="absolute -top-[10%] -left-[5%] w-[70%] h-[70%] z-[3]" />

        {/* 1b. Painted clouds thicken in as the window dissolves, and a
             distant plane drifts through — the sky becomes visibly painted,
             not just re-colored */}
        <motion.div
          style={{ opacity: cloudsOpacity }}
          className="absolute inset-0 z-[5] pointer-events-none overflow-hidden mix-blend-screen"
        >
          <Cloud className="absolute top-[14%] left-[4%] w-80 sm:w-[26rem] opacity-85" duration={42} />
          <Cloud className="absolute top-[50%] right-[2%] w-72 sm:w-96 opacity-75" duration={48} flip />
          <Cloud className="absolute bottom-[4%] left-[24%] w-64 sm:w-80 opacity-70" duration={38} />
          <Cloud className="absolute top-[2%] right-[22%] w-48 sm:w-64 opacity-55" duration={44} />
        </motion.div>
        <PlaneTrail className="top-[30%] z-[6]" colorClassName="text-primary-100" duration={60} />

        {/* 2. Window frame — a much lighter, near-neutral grade (re-tinting a
             physical plastic/metal object with the sky's blue duotone looked
             wrong) and a blur that grows as it fades, so it dissolves into
             the scene instead of pixelating from an extreme zoom */}
        <motion.div
          style={{ scale: windowScale, opacity: windowOpacity }}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none origin-center"
        >
          <Image
            src="/airplane-window.webp"
            alt="Airplane interior window view looking out into the sky"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ filter: `url(#${FRAME_GRADE_ID})` }}
          />
          {/* Glass reflection glare precisely in the center over the hole */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[60%] min-w-[240px] min-h-[360px] max-w-[400px] max-h-[600px] rounded-[6rem] bg-gradient-to-tr from-white/10 via-white/5 to-transparent backdrop-blur-[2px] pointer-events-none" />
        </motion.div>

        {/* 3. Content, fading in as the frame dissolves rather than after a gap */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none"
        >
          <div className="bg-[#020617]/50 backdrop-blur-xl p-8 sm:p-12 rounded-[2rem] border border-white/10 shadow-2xl max-w-4xl w-full flex flex-col items-center pointer-events-auto">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.22em] text-red-400 uppercase font-extrabold drop-shadow-md">
                The Journey Begins
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl leading-[0.95] tracking-tighter mb-6 text-white drop-shadow-2xl">
              Experience the{" "}
              <span className="serif-italic font-normal text-red-500 font-serif lowercase italic tracking-normal drop-shadow-lg">
                extraordinary
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Step out of the ordinary and experience seamless journeys connecting Kerala to the world. We don&apos;t just book tickets; we craft experiences.
            </p>
          </div>
        </motion.div>

        {/* 4. Handoff wash — softens the cut into the next (white) section */}
        <motion.div
          style={{ opacity: handoffOpacity }}
          className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-b from-transparent via-white/40 to-white"
        />

      </div>
    </section>
  );
}
