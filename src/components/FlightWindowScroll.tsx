"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Cloud, SunRays, PlaneTrail } from "./decor/SkyBackdrop";

// Re-paints the photo through the same soft tonal range as the painted clouds
// (navy shadow -> periwinkle midtone -> warm cream highlight), then blurs it
// slightly so it reads as an atmospheric painted sky rather than a crisp,
// separate photographic medium. The window frame gets the tone mapping only
// (it needs to stay legible as an object), the open sky gets the blur too.
const SKY_DUOTONE_ID = "sky-duotone";
const SKY_DUOTONE_SOFT_ID = "sky-duotone-soft";
function SkyDuotoneFilter() {
  const stops = (
    <>
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
    </>
  );
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <filter id={SKY_DUOTONE_ID}>{stops}</filter>
      <filter id={SKY_DUOTONE_SOFT_ID} x="-10%" y="-10%" width="120%" height="120%">
        {stops}
        <feGaussianBlur stdDeviation="3.5" />
      </filter>
    </svg>
  );
}

export default function FlightWindowScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll position relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Apply a gentle spring physics to the scroll progress for an Apple-like fluid feel
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 120,
    mass: 0.5,
  });

  // ─── WINDOW SCALE & OPACITY ───
  // 0 to 0.5: Window scales up from 1 to 25 (massively blowing up the hole)
  const windowScale = useTransform(smoothProgress, [0, 0.5], [1, 25]);
  // 0.4 to 0.5: The physical window frame itself fades out so we only see the sky
  const windowOpacity = useTransform(smoothProgress, [0.4, 0.5], [1, 0]);

  // ─── SKY PARALLAX ───
  // The background sky slowly scales and moves upward as you scroll, like flying forward
  const skyScale = useTransform(smoothProgress, [0, 1], [1.1, 1.4]);
  const skyY = useTransform(smoothProgress, [0, 1], ["0%", "15%"]);

  // ─── CONTENT FADE IN ───
  // 0.6 to 0.8: After passing through the window, the text fades in
  const contentOpacity = useTransform(smoothProgress, [0.55, 0.75], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.55, 0.75], [40, 0]);
  const contentScale = useTransform(smoothProgress, [0.55, 0.75], [0.95, 1]);

  return (
    // Make the section tall so the user has to scroll for a while to complete the animation
    <section ref={containerRef} className="relative h-[300vh] bg-slate-950">
      <SkyDuotoneFilter />

      {/* The sticky container that holds the scene viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* 1. Background Sky Image (Video-like Parallax) — re-painted through the
             same soft tonal range as the illustrated clouds, then gently blurred
             so it reads as atmosphere rather than a crisp separate photograph */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0 origin-bottom"
          style={{ scale: skyScale, y: skyY }}
        >
          <Image
            src="https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=2500&auto=format&fit=crop"
            alt="Beautiful sky view from airplane window - AirTixHolidays"
            fill
            sizes="100vw"
            className="object-cover scale-105"
            style={{ filter: `url(#${SKY_DUOTONE_SOFT_ID})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/15 via-transparent to-primary-950/25" />
        </motion.div>

        {/* Warm light breaking through, upper-left, like sun through cloud */}
        <SunRays className="absolute -top-[10%] -left-[5%] w-[70%] h-[70%] z-[3]" />

        {/* 1b. Painted clouds and a distant plane drifting across the re-toned sky —
             blended (not stickered) into the photo via a soft screen blend */}
        <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden mix-blend-screen">
          <Cloud className="absolute top-[16%] left-[6%] w-72 sm:w-96 opacity-70" duration={42} />
          <Cloud className="absolute top-[52%] right-[4%] w-64 sm:w-80 opacity-60" duration={48} flip />
          <Cloud className="absolute bottom-[6%] left-[28%] w-56 sm:w-72 opacity-55" duration={38} />
        </div>
        <PlaneTrail className="top-[30%] z-[6]" colorClassName="text-primary-100" duration={60} />

        {/* 2. The Window Cutout Layer (Realistic Image), same re-toning, no blur — a
             foreground object still needs to read clearly as a window frame */}
        <motion.div
          style={{ scale: windowScale, opacity: windowOpacity }}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none origin-center"
        >
          <Image
            src="/airplane-window.png"
            alt="Airplane interior window view looking out into the sky"
            fill
            sizes="100vw"
            className="object-cover drop-shadow-[0_0_30px_rgba(0,0,0,0.7)]"
            style={{ transform: "scale(1.15)", filter: `url(#${SKY_DUOTONE_ID})` }}
          />
          {/* Glass reflection glare precisely in the center over the hole */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[60%] min-w-[240px] min-h-[360px] max-w-[400px] max-h-[600px] rounded-[6rem] bg-gradient-to-tr from-white/10 via-white/5 to-transparent backdrop-blur-[2px] pointer-events-none" />
        </motion.div>

        {/* 3. The Content Layer that appears when "outside" */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
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

      </div>
    </section>
  );
}
