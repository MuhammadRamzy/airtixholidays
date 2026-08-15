"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Plane, MessageCircle, Sparkles } from "lucide-react";
import BookingButton from "./BookingButton";
import { siteConfig } from "@/config/site";
import { Cloud, PhotoWash, PHOTO_FILTER } from "./decor/SkyBackdrop";

const showcaseSlides = [
  {
    id: "flights",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    badge: "Direct Routes",
    tagline: "Premium Flight Ticketing",
    title: "Connecting Kerala & The Gulf",
    desc: "Special fares for GCC ↔ India on all major carriers.",
  },
  {
    id: "visas",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    badge: "Express Processing",
    tagline: "Global Visit Visas",
    title: "Hassle-Free Documentation",
    desc: "Fast-tracked visa assistance for UAE, Saudi Arabia, Qatar & more.",
  },
  {
    id: "umrah",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Kaaba_mirror_edit_jj.jpg",
    badge: "Spiritual Journeys",
    tagline: "Hajj & Umrah Services",
    title: "Meticulously Planned Pilgrimages",
    desc: "Complete holy packages with premium stays & visa processing.",
  },
  {
    id: "holidays",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    badge: "Curated Escapes",
    tagline: "Bespoke Holiday Packages",
    title: "Crafting Seamless Leisure Trips",
    desc: "Custom family itineraries, luxury resort stays, and group tours.",
  },
  {
    id: "resort",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    badge: "Luxury Stays",
    tagline: "Resort & Hotel Booking",
    title: "Premium Accommodation",
    desc: "Curated stays at the finest domestic and international properties.",
  },
  {
    id: "attestation",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    badge: "Legal Documentation",
    tagline: "Certificate Attestation",
    title: "Verified Document Processing",
    desc: "Embassy and HRD attestation for all professional certificates.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  const waLink = `https://wa.me/${siteConfig.departments.holidays.phoneDial}?text=${encodeURIComponent("Hi, I'd like to check special fares for GCC to India / India to GCC flights.")}`;

  return (
    <section
      id="home"
      className="relative min-h-[640px] lg:min-h-screen flex items-center bg-primary-950 text-white overflow-x-hidden pt-28 pb-14 lg:py-0"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hero-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
        </svg>
      </div>

      {/* Glow accents */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-red-800/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left flex flex-col items-start"
          >
            {/* Logo — compact strip */}
            <motion.div variants={itemVariants} className="mb-3 relative z-10 py-3">
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="absolute inset-y-0 -left-[100vw] -right-[100vw] bg-gradient-to-r from-slate-100 via-white to-slate-50 shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden origin-left"
              >
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:10px_10px]" />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700 origin-left shadow-[0_0_16px_rgba(220,38,38,0.8)]"
                />
                <motion.div
                  animate={{ x: ["-50vw", "150vw"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                  className="absolute top-0 bottom-0 left-0 w-[40vw] bg-gradient-to-r from-transparent via-slate-300/30 to-transparent skew-x-12 mix-blend-overlay"
                />
              </motion.div>
              <motion.img
                initial={{ opacity: 0, filter: "blur(8px)", x: -16 }}
                animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                src="/logo.png"
                alt="AirTix Holidays"
                className="relative z-10 h-12 sm:h-14 md:h-16 w-auto object-contain origin-left drop-shadow-md"
              />
            </motion.div>

            {/* ── GCC ↔ INDIA FARES WIDGET (Special Offer Highlight) ── */}
            <motion.div variants={itemVariants} className="w-full max-w-xl mb-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
                <span className="text-[9px] font-mono tracking-[0.22em] text-red-400 uppercase font-extrabold">
                  Live Offer · Special Fares Available
                </span>
              </div>

              <div className="relative">
                {/* Animated promo glow ring */}
                <motion.div
                  className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-gold-450 via-gold-300 to-gold-450 opacity-70 blur-[2px]"
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative bg-white/[0.06] border border-gold-400/40 rounded-2xl p-3 sm:p-4 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] overflow-hidden">
                  {/* Corner ribbon badge */}
                  <div className="absolute top-0 right-0">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-gold-500 to-gold-450 text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl rounded-tr-2xl shadow-[0_2px_10px_rgba(220,38,38,0.4)]">
                      <Sparkles className="w-2.5 h-2.5" />
                      Special Offer
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 pr-2">
                    {/* Origin */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mb-0.5">From</p>
                      <p className="font-display font-black text-lg sm:text-xl text-white leading-none tracking-tight">GCC Airports</p>
                      <p className="text-[9px] font-mono text-red-400 mt-1 font-bold truncate">DXB · DOH · MCT · RUH · KWI</p>
                    </div>
                    {/* Animated plane */}
                    <div className="flex flex-col items-center gap-0.5 flex-shrink-0 px-1">
                      <div className="flex items-center gap-0.5 w-16 sm:w-20">
                        <div className="h-px bg-gradient-to-r from-transparent to-red-600/50 flex-1" />
                        <motion.div
                          animate={{ x: ["-3px", "3px", "-3px"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 rotate-90" />
                        </motion.div>
                        <div className="h-px bg-gradient-to-l from-transparent to-red-600/50 flex-1" />
                      </div>
                      <span className="text-[7px] text-slate-600 font-mono tracking-widest">BOTH WAYS</span>
                    </div>
                    {/* Destination */}
                    <div className="flex-1 min-w-0 text-right">
                      <p className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mb-0.5">To</p>
                      <p className="font-display font-black text-lg sm:text-xl text-white leading-none tracking-tight">India Airports</p>
                      <p className="text-[9px] font-mono text-red-400 mt-1 font-bold truncate">CCJ · COK · TRV · MAA · BOM</p>
                    </div>
                  </div>
                  {/* Bottom strip */}
                  <div className="mt-3 pt-2.5 border-t border-white/[0.08] flex items-center justify-between gap-3">
                    <p className="text-[9px] text-slate-400 leading-snug font-medium">
                      Lowest fares on all major carriers for GCC–India routes
                    </p>
                    <motion.a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-shrink-0 inline-flex items-center gap-1.5 bg-gradient-to-r from-gold-500 to-gold-450 hover:from-gold-450 hover:to-gold-500 text-white font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg shadow-[0_4px_14px_rgba(220,38,38,0.35)] transition-all whitespace-nowrap"
                    >
                      Get Fare <ArrowRight className="w-3 h-3" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] leading-[0.92] tracking-tighter mb-3 text-white">
              Connecting{" "}
              <span className="serif-italic font-normal text-red-600 font-serif lowercase italic tracking-normal">
                kerala
              </span>{" "}
              with your Gulf family.
            </motion.h1>

            {/* Services chips */}
            <motion.div variants={itemVariants} className="mb-3 w-full max-w-xl">
              <p className="text-[9px] font-mono tracking-[0.22em] text-slate-500 uppercase font-extrabold mb-2.5">Our Services</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Flight Bookings",
                  "Global Visit Visas",
                  "Hajj & Umrah",
                  "Holiday Packages",
                  "Resort & Hotel",
                  "Certificate Attestation",
                  "Emigration Services",
                  "Passport Assistance",
                ].map((s, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.09] text-[10px] text-slate-300 font-semibold hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Trust + CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 w-full">
              <BookingButton variant="primary" className="!px-8 !py-3.5 text-sm shadow-xl shadow-red-600/20 hover:scale-[1.02] transition-transform" />
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3.5 rounded-xl transition-colors shadow-lg shadow-emerald-900/20"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Accreditation */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-slate-500 uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                IATA & TAFI Accredited
              </div>
              <div className="w-px h-2.5 bg-slate-800" />
              <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-slate-500 uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                24/7 Gulf Helpline
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Showcase slideshow ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 w-full justify-end relative z-20"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/8 blur-[80px] rounded-full pointer-events-none" />
            <Cloud className="absolute -top-8 -left-10 w-40 opacity-50 pointer-events-none" duration={32} />
            <div className="relative w-full max-w-sm xl:max-w-md aspect-[3/4] rounded-[1.75rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 bg-slate-900">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={showcaseSlides[currentSlide].image}
                    alt={showcaseSlides[currentSlide].title}
                    fill
                    sizes="(min-width: 1280px) 448px, 384px"
                    className={`object-cover ${PHOTO_FILTER}`}
                    priority={currentSlide === 0}
                  />
                  <PhotoWash />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />
                  <div className="absolute top-5 left-5 z-10 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-red-600/30">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-red-400 uppercase">
                      {showcaseSlides[currentSlide].badge}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left z-10 space-y-2">
                    <span className="text-[9px] font-mono tracking-widest text-red-500 uppercase font-extrabold block">
                      {showcaseSlides[currentSlide].tagline}
                    </span>
                    <h3 className="font-display font-black text-xl uppercase leading-tight tracking-tight text-white">
                      {showcaseSlides[currentSlide].title}
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
                      {showcaseSlides[currentSlide].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* Slide dots */}
              <div className="absolute bottom-3.5 right-6 z-20 flex items-center gap-1.5">
                {showcaseSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "w-5 bg-red-600 shadow-[0_0_6px_rgba(220,38,38,0.8)]" : "w-1 bg-white/35 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent z-10" />
    </section>
  );
}
