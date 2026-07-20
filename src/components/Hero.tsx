"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import BookingButton from "./BookingButton";
import { siteConfig } from "@/config/site";

const showcaseSlides = [
  {
    id: "flights",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    badge: "Direct Routes",
    tagline: "Premium Flight Ticketing",
    title: "Connecting Kerala & The Gulf",
    desc: "Instant low-fare bookings on all major domestic and international carriers.",
  },
  {
    id: "visas",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    badge: "Express Processing",
    tagline: "Global Visit Visas",
    title: "Hassle-Free Documentation",
    desc: "Fast-tracked visa assistance for UAE, Saudi Arabia, Qatar, and worldwide.",
  },
  {
    id: "umrah",
    image: "https://images.unsplash.com/photo-1580418826893-67e1f7210ff1?auto=format&fit=crop&w=800&q=80",
    badge: "Spiritual Journeys",
    tagline: "Hajj & Umrah Services",
    title: "Meticulously Planned Pilgrimages",
    desc: "Complete holy packages with premium stays, visa processing, and guidance.",
  },
  {
    id: "holidays",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    badge: "Curated Escapes",
    tagline: "Bespoke Holiday Plans",
    title: "Crafting Seamless Leisure Trips",
    desc: "Custom family itineraries, luxury resort stays, and corporate group tours.",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToPackages = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Staggered animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-primary-950 text-white pt-28 pb-20 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hero-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
        </svg>
      </div>

      {/* Decorative colored glow circles */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetric Editorial copy */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left flex flex-col items-start"
          >
            {/* Brand Logo placement inside Hero left column - elegant glow instead of white box */}
            <motion.div variants={itemVariants} className="mb-8 relative inline-block">
              {/* Diffused spotlight for contrast */}
              <div className="absolute inset-0 bg-white/15 blur-2xl rounded-full pointer-events-none scale-150" />
              <img
                src="/logo.png"
                alt="AirTix Holidays"
                className="relative z-10 h-22 md:h-26 object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]"
              />
            </motion.div>

            {/* Title */}
            <motion.h1 variants={itemVariants} className="font-display font-black text-[2.6rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter mb-6 text-white">
              Connecting <br />
              <span className="serif-italic font-normal text-gold-400 font-serif lowercase italic tracking-normal block my-1">
                kerala
              </span> 
              with your Gulf family.
            </motion.h1>

            {/* Geographic Marker coordinates for Kerala and Middle East */}
            <motion.div variants={itemVariants} className="flex gap-6 mb-6 font-mono text-[10px] text-slate-550 tracking-wider">
              <div>
                <span className="text-gold-500/80 block font-bold">CCJ / COK / TRV</span>
                <span>Kozhikode / Kochi / Trivandrum</span>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <span className="text-teal-450 block font-bold">DXB / DOH / MCT / RUH</span>
                <span>UAE / Qatar / Oman / Saudi</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-350 font-medium max-w-xl leading-relaxed mb-8">
              Premium travel portal for global expatriates. Secure immediate low-fare flight ticketing, fast-tracked visit visas, and curated family holiday packages.
            </motion.p>

            {/* Trust features */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8 max-w-md w-full">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-teal-500" />
                <span>MKTA & TASK ACCREDITED</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-teal-500" />
                <span>24/7 GULF HELPLINE DESK</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 w-full">
              <BookingButton variant="primary" className="!px-10 !py-4.5 text-sm shadow-2xl shadow-gold-500/10 hover:scale-[1.02] transition-transform" />
              <a
                href="#services"
                onClick={handleScrollToPackages}
                className="inline-flex items-center justify-center font-display font-bold border-b-2 border-white/20 hover:border-white text-white py-2 text-xs tracking-widest transition-all uppercase group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 ml-2.5 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Services Carousel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center perspective-[1000px]"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-900">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  {/* Feature Image */}
                  <img
                    src={showcaseSlides[currentSlide].image}
                    alt={showcaseSlides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Editorial Badge */}
                  <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-md">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-900 uppercase">
                      {showcaseSlides[currentSlide].badge}
                    </span>
                  </div>

                  {/* Editorial Frame Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-left z-10 space-y-3">
                    <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-extrabold block">
                      {showcaseSlides[currentSlide].tagline}
                    </span>
                    <h3 className="font-display font-black text-2xl uppercase leading-tight tracking-tight text-white">
                      {showcaseSlides[currentSlide].title}
                    </h3>
                    <p className="text-xs text-slate-350 leading-relaxed font-medium">
                      {showcaseSlides[currentSlide].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 right-8 z-20 flex items-center gap-2">
                {showcaseSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "w-6 bg-gold-400" : "w-1.5 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Editorial line transitions */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-10" />
    </section>
  );
}
