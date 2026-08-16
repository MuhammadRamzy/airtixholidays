"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { Cloud, SunRays, PlaneTrail, SoftGlow } from "./decor/SkyBackdrop";

type Phase =
  | "hidden"
  | "standby"
  | "prelude1"
  | "prelude2"
  | "prelude3"
  | "tour1"
  | "tour2"
  | "tour3"
  | "tour4"
  | "rewind"
  | "live"
  | "done";

const TOUR_STOPS = ["The Gateway", "The Experience", "The Promise", "The People"];

export default function TheatricalLaunch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isLaunch = searchParams.get("launch") === "true";

  const [phase, setPhase] = useState<Phase>("hidden");
  const [exiting, setExiting] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  // Fades the whole overlay out before actually tearing it down, so landing
  // on the real site (already scrolled to the very top) reads as a smooth
  // arrival rather than a hard cut.
  const completeLaunch = useCallback(() => {
    clearAllTimers();
    setExiting(true);
    window.scrollTo(0, 0);
    timers.current.push(
      setTimeout(() => {
        setPhase("done");
        router.replace("/", { scroll: false });
      }, 500)
    );
  }, [router]);

  // Lock scroll for the duration of the sequence — separate from the
  // "jump to top" reset below so it doesn't re-fire (and re-snap the
  // scroll position) on every single phase change.
  useEffect(() => {
    const active = isLaunch && phase !== "done" && phase !== "hidden";
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLaunch, phase]);

  // Entering launch mode: reset to top once, then either respect
  // prefers-reduced-motion (skip straight through) or arm the standby
  // screen. This only depends on `isLaunch`, so it never re-triggers a
  // scroll reset mid-sequence. The setState here is intentional — this
  // effect exists specifically to synchronize local state with an
  // external system (the `?launch=true` URL flag), which is exactly
  // what effects are for.
  useEffect(() => {
    if (!isLaunch) return;
    window.scrollTo(0, 0);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      completeLaunch();
      return;
    }
    setPhase("standby");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLaunch]);

  // Clear any pending timers on unmount so a stray setTimeout can't fire
  // a setState after the component (or the sequence) is gone.
  useEffect(() => clearAllTimers, []);

  const animateScrollTo = (targetY: number, duration: number) => {
    const startY = window.scrollY;
    const change = targetY - startY;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, startY + change * ease);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  const cinematicScrollTo = (targetPercent: number, duration: number) => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    animateScrollTo(maxScroll * targetPercent, duration);
  };

  // Scrolls so a real element's top lands `revealFraction` of the viewport
  // height down from the top of the screen — measured fresh at call time,
  // so it's accurate at any viewport size and any responsive layout,
  // instead of a fixed page-height percentage that only lines up on one
  // specific screen size.
  const cinematicScrollToElement = (selector: string, revealFraction: number, duration: number) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const targetY = Math.max(0, Math.min(maxScroll, elTop - window.innerHeight * revealFraction));
    animateScrollTo(targetY, duration);
  };

  const schedule = (fn: () => void, delay: number) => {
    timers.current.push(setTimeout(fn, delay));
  };

  const startSequence = () => {
    setPhase("prelude1");

    // Sequence Timings
    schedule(() => setPhase("prelude2"), 3500);
    schedule(() => setPhase("prelude3"), 7000);

    // Begin Tour — each stop targets a real section by id, measured at call
    // time, so the story text always lands on the content it describes
    // regardless of viewport size or how the responsive layout reflows.
    schedule(() => {
      setPhase("tour1");
      cinematicScrollTo(0, 1000);
    }, 11000);

    schedule(() => {
      setPhase("tour2");
      cinematicScrollToElement("#packages", 0.12, 3000);
    }, 16000);

    schedule(() => {
      setPhase("tour3");
      cinematicScrollToElement("#why-us", 0.1, 3000);
    }, 21000);

    schedule(() => {
      setPhase("tour4");
      cinematicScrollToElement("#directors", 0.08, 3000);
    }, 26000);

    schedule(() => {
      setPhase("rewind");
      cinematicScrollTo(0, 2000);
    }, 31000);

    schedule(() => {
      setPhase("live");
    }, 33500);
  };

  // Escape key always bails out of the sequence, for live-event safety.
  useEffect(() => {
    if (!isLaunch || phase === "hidden" || phase === "done") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") completeLaunch();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isLaunch, phase, completeLaunch]);

  if (!isLaunch || phase === "hidden" || phase === "done") return null;

  const isTour = phase.includes("tour");
  const isPrelude = phase.includes("prelude");
  // Ambient sky decor everywhere except mid-tour, where it would compete
  // with the live site showing through the lens — and again at "live",
  // landing us back among clouds like the plane has arrived.
  const isAtmosphere = phase === "standby" || isPrelude || phase === "live";
  const canSkip = phase !== "live";
  const tourIndex = isTour ? Number(phase.slice(-1)) - 1 : -1;

  return (
    <motion.div
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden"
    >

      {/* Ambient painted sky — same decor language as the rest of the site,
          kept off during the tour so it never competes with the live window. */}
      {isAtmosphere && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SunRays className="absolute -top-[15%] -right-[10%] w-[65%] h-[65%] opacity-40" />
          <SoftGlow tone="warm" className="absolute bottom-0 left-[10%] w-96 h-96 opacity-60" />
          <Cloud className="absolute top-[18%] left-[6%] w-72 opacity-[0.18]" duration={40} />
          <Cloud className="absolute bottom-[15%] right-[8%] w-64 opacity-[0.14]" duration={46} flip />
          <PlaneTrail className="top-[28%] opacity-30" colorClassName="text-white" duration={38} />
        </div>
      )}

      {/* Skip control — a live-event escape hatch, always available except
          during the final reveal (a few seconds from completion anyway). */}
      {canSkip && (
        <button
          onClick={completeLaunch}
          className="fixed top-5 right-5 md:top-8 md:right-8 z-[10000] pointer-events-auto font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50 hover:text-white border border-white/15 hover:border-white/40 rounded-full px-4 py-2 transition-colors backdrop-blur-sm"
        >
          Skip
        </button>
      )}

      {/*
        THE SPOTLIGHT LENS — an airplane-window-shaped porthole onto the live
        site, ringed with a soft gold halo instead of a cold vignette, so the
        "camera lens" reads as a cabin window rather than surveillance gear.
        Its box-shadow is what paints the dark overlay everywhere *outside*
        the lens — including when the lens is fully closed (width/height 0),
        where that same shadow becomes a full-screen backdrop. That's used
        deliberately at every non-tour phase, standby through the live
        reveal, so there's always a solid, legible background behind text —
        no separate "reveal the whole site" state that could leave overlay
        text with nothing opaque behind it.
      */}
      <motion.div
        className="fixed z-[9998] flex items-center justify-center"
        style={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          boxShadow: isTour
            ? "0 0 0 9999px rgba(4, 9, 20, 0.94), 0 0 0 3px rgba(234,179,8,0.35), 0 0 60px 12px rgba(234,179,8,0.15)"
            : "0 0 0 9999px rgba(4, 9, 20, 0.94)",
        }}
        initial={{ width: 0, height: 0, borderRadius: "50%" }}
        animate={{
          width: isTour ? "94vw" : 0,
          height: isTour ? "82vh" : 0,
          borderRadius: isTour ? "32px" : "50%",
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* Inner scanning sweep for the lens */}
        {isTour && (
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/70 to-transparent shadow-[0_0_15px_rgba(220,38,38,0.8)]"
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        )}
      </motion.div>

      {/* HUD GRAPHICS */}
      {(phase === "standby" || isPrelude || isTour) && <HUDGraphics phase={phase} />}

      {/* Tour progress — four flight-leg markers filling in as the tour visits
          each stop, so the sequence reads as a journey with a beginning and
          an end rather than an open-ended wait. */}
      {isTour && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3">
          {TOUR_STOPS.map((stop, i) => (
            <div key={stop} className="flex items-center gap-3">
              <div className={`h-1.5 rounded-full transition-all duration-500 ${i === tourIndex ? "w-8 bg-amber-400" : i < tourIndex ? "w-1.5 bg-amber-400/60" : "w-1.5 bg-white/25"}`} />
            </div>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* STANDBY — boarding pass */}
        {phase === "standby" && (
          <motion.div
            key="standby"
            className="absolute inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-auto px-6"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            <BoardingPass onBoard={startSequence} />
          </motion.div>
        )}

        {/* PRELUDE TEXTS */}
        {phase === "prelude1" && <StoryText key="p1" text="Travel isn't just about the destination..." />}
        {phase === "prelude2" && <StoryText key="p2" text="It's about the journey." />}
        {phase === "prelude3" && <StoryText key="p3" text="Today, we elevate yours." highlight />}

        {/* TOUR TEXTS */}
        {phase === "tour1" && <TourOverlay key="t1" step={1} title="The Gateway" desc="Connecting Kerala to the Middle East, and the world beyond." align="left" />}
        {phase === "tour2" && <TourOverlay key="t2" step={2} title="The Experience" desc="Curating premium, unforgettable experiences." align="right" />}
        {phase === "tour3" && <TourOverlay key="t3" step={3} title="The Promise" desc="Built on a foundation of absolute trust." align="left" />}
        {phase === "tour4" && <TourOverlay key="t4" step={4} title="The People" desc="Guided by experts who care." align="center" />}

        {/* LIVE REVEAL */}
        {phase === "live" && (
          <motion.div
            key="live"
            className="absolute inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-auto overflow-hidden"
          >
            {/* One-shot plane crossing the reveal, trailing behind the headline */}
            <motion.div
              className="absolute top-[38%] left-0 text-amber-400"
              initial={{ x: "-15vw", opacity: 0 }}
              animate={{ x: "115vw", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3.2, ease: "easeInOut", times: [0, 0.15, 0.8, 1] }}
            >
              <svg viewBox="0 0 140 40" className="w-28 sm:w-36 overflow-visible">
                <path d="M0,24 C30,22 55,22 78,22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 5" strokeLinecap="round" opacity="0.4" />
                <g transform="translate(82,14) rotate(4)">
                  <path
                    d="M0,10 L26,10 L34,6 L38,7 L32,11 L38,13 L34,14 L26,12 L14,14 L8,20 L4,20 L7,13 L0,13 Z"
                    fill="currentColor"
                    opacity="0.85"
                  />
                </g>
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <Image src="/logo.png" alt="AirTixHolidays" width={612} height={408} className="h-20 md:h-28 w-auto object-contain brightness-0 invert drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]" priority />
            </motion.div>

            <motion.h1
              initial={{ scale: 0.85, opacity: 0, filter: "blur(20px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, type: "spring" }}
              className="font-display font-black text-white text-4xl sm:text-5xl md:text-7xl tracking-tighter text-center mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              AirTixHolidays is{" "}
              <span className="serif-italic font-normal font-serif italic lowercase text-red-500">live</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-white/60 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-12"
            >
              Kerala &middot; The Gulf &middot; The World
            </motion.p>

            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              onClick={completeLaunch}
              className="px-14 py-5 bg-white text-[#040914] hover:bg-gray-200 font-bold tracking-[0.2em] text-lg rounded-full shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95 uppercase"
            >
              Enter the Experience
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ----------------------------------------------------------------------
// HELPER COMPONENTS FOR THEATRICAL GRAPHICS
// ----------------------------------------------------------------------

function BoardingPass({ onBoard }: { onBoard: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-lg"
    >
      <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[1.75rem] p-8 sm:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Perforated tear-line, boarding-pass style */}
        <div className="absolute left-0 right-0 top-[68%] border-t border-dashed border-white/15" />
        <div className="absolute -left-3 top-[68%] -translate-y-1/2 w-6 h-6 rounded-full bg-[#040914]" />
        <div className="absolute -right-3 top-[68%] -translate-y-1/2 w-6 h-6 rounded-full bg-[#040914]" />

        <div className="flex items-center justify-center mb-7">
          <Image src="/logo.png" alt="AirTixHolidays" width={612} height={408} className="h-14 md:h-16 w-auto object-contain brightness-0 invert" priority />
        </div>

        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-[10px] tracking-[0.3em] text-amber-400 uppercase font-bold">Boarding Pass</span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="font-mono text-[10px] tracking-[0.3em] text-red-500 uppercase font-bold flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Systems Optimal
          </motion.span>
        </div>

        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">From</p>
            <p className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">Kerala</p>
          </div>
          <div className="flex flex-col items-center px-3">
            <span className="text-white/30 text-lg">&#9992;</span>
            <span className="text-[8px] font-mono text-white/30 tracking-widest mt-1">MAIDEN VOYAGE</span>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">To</p>
            <p className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">The World</p>
          </div>
        </div>

        <button
          onClick={onBoard}
          className="w-full px-8 py-5 bg-red-600 hover:bg-red-500 text-white font-bold tracking-[0.25em] text-sm md:text-base rounded-2xl transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:scale-[1.02] active:scale-[0.98] uppercase"
        >
          Initiate Maiden Flight
        </button>

        <p className="text-center text-white/30 font-mono text-[9px] tracking-widest uppercase mt-4">
          Press Esc anytime to skip
        </p>
      </div>
    </motion.div>
  );
}

function StoryText({ text, highlight = false }: { text: string; highlight?: boolean }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -15, filter: "blur(10px)" }}
      transition={{ duration: 1.2 }}
      className={`absolute z-[9999] font-serif italic text-2xl md:text-5xl tracking-wide text-center max-w-3xl px-6 ${highlight ? "text-red-500" : "text-white/90"}`}
    >
      &ldquo;{text}&rdquo;
    </motion.h2>
  );
}

function TourOverlay({ title, desc, align, step }: { title: string; desc: string; align: "left" | "right" | "center"; step: number }) {
  // Positioned in viewport-relative units (not px) so these always stay
  // safely inside the lens's own bounds (94vw x 82vh, centered) at any
  // viewport size — the lens is large enough now that fixed-px offsets
  // could straddle its edge instead of sitting cleanly inside it.
  const posClasses = {
    left: "bottom-[9vh] left-8 md:left-16 text-left",
    right: "top-[11vh] right-8 md:right-16 text-right",
    center: "bottom-[9vh] left-0 right-0 flex flex-col items-center text-center px-6"
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -30 : align === "right" ? 30 : 0, y: align === "center" ? 30 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`absolute z-[9999] max-w-md md:max-w-xl ${posClasses[align]}`}
    >
      <div className="bg-[#040914]/85 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
        <p className="text-red-500 font-mono tracking-[0.3em] text-xs md:text-sm mb-3 uppercase flex items-center gap-3 justify-center md:justify-start">
          <span className="font-display font-black text-amber-400">0{step}</span>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          {title}
        </p>
        <h3 className="text-white text-2xl md:text-4xl font-light leading-snug">{desc}</h3>
      </div>
    </motion.div>
  );
}

function HUDGraphics({ phase }: { phase: Phase }) {
  const isTour = phase.includes("tour");

  return (
    <div className="absolute inset-0 z-[9999] pointer-events-none p-6 md:p-12 flex flex-col justify-between opacity-70">
      {/* Top HUD — flight departure board styling instead of a targeting HUD */}
      <div className="flex justify-between items-start font-mono text-[10px] md:text-xs text-red-500 tracking-[0.2em]">
        <div>
          <p>FLIGHT AT-001 &middot; MAIDEN VOYAGE</p>
          <p>ALTITUDE: 35,000FT</p>
          <motion.p animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>&#9679; LIVE</motion.p>
        </div>
        <div className="text-right text-amber-400 pr-24 md:pr-28">
          <p>STATUS: {isTour ? "EN ROUTE" : "BOARDING"}</p>
          <p>ORIGIN: KOCHI, KERALA</p>
          <p>10.8505&deg; N, 76.2711&deg; E</p>
        </div>
      </div>

      {/* Corner crosshairs — plain bordered corners rather than SVG paths,
          since SVG `d` coordinates can't use CSS calc() (the previous
          version silently failed to render 3 of the 4 corners). */}
      <div className="absolute top-6 left-6 w-10 h-10 border-l-2 border-t-2 border-red-600/50" />
      <div className="absolute top-6 right-6 w-10 h-10 border-r-2 border-t-2 border-amber-400/50" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-l-2 border-b-2 border-amber-400/50" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-r-2 border-b-2 border-red-600/50" />
    </div>
  );
}
