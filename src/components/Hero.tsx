"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import BookingButton from "./BookingButton";
import { siteConfig } from "@/config/site";

const showcaseSlides = [
  {
    id: "flights",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    badge: "Direct Routes",
    tagline: "Premium Flight Ticketing",
    title: "Connecting Kerala & The Gulf",
    desc: "Instant low-fare bookings on all major domestic and international carriers.",
  },
  {
    id: "visas",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    badge: "Express Processing",
    tagline: "Global Visit Visas",
    title: "Hassle-Free Documentation",
    desc: "Fast-tracked visa assistance for UAE, Saudi Arabia, Qatar, and worldwide.",
  },
  {
    id: "umrah",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Kaaba_mirror_edit_jj.jpg",
    badge: "Spiritual Journeys",
    tagline: "Hajj & Umrah Services",
    title: "Meticulously Planned Pilgrimages",
    desc: "Complete holy packages with premium stays, visa processing, and guidance.",
  },
  {
    id: "holidays",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    badge: "Curated Escapes",
    tagline: "Bespoke Holiday Packages",
    title: "Crafting Seamless Leisure Trips",
    desc: "Custom family itineraries, luxury resort stays, and corporate group tours.",
  },
  {
    id: "bus-train",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    badge: "Domestic Transit",
    tagline: "Bus & Train Tickets",
    title: "Reliable Domestic Connections",
    desc: "Seamless inter-city rail and premium bus ticketing across India.",
  },
  {
    id: "emigration",
    image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=800&auto=format&fit=crop",
    badge: "Clearance Support",
    tagline: "Emigration Services",
    title: "Streamlined Emigration Check",
    desc: "Complete assistance for ECR passport holders traveling for employment.",
  },
  {
    id: "attestation",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    badge: "Legal Documentation",
    tagline: "Certificate Attestation",
    title: "Verified Document Processing",
    desc: "Embassy and HRD attestation for educational and professional certificates.",
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
    id: "passport",
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop",
    badge: "Govt Services",
    tagline: "Passport Application",
    title: "Hassle-Free Passport Services",
    desc: "End-to-end assistance for new passport applications and renewals.",
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

      {/* Decorative colored glow circles - Updated to Brand Red */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-red-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetric Editorial copy */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left flex flex-col items-start relative"
          >
            {/* Brand Logo - Creative Full-Width Airline Banner */}
            <motion.div variants={itemVariants} className="mb-12 lg:mb-16 relative z-10 py-5 lg:py-6">
              {/* Massive Full-Width White Strip with Creative Styling */}
              <div className="absolute inset-y-0 -left-[100vw] -right-[100vw] bg-gradient-to-r from-slate-100 via-white to-slate-50 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-t border-white overflow-hidden">
                {/* Subtle aviation micro-grid texture */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
                {/* Bold Red architectural accent line running the full length */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-700 via-red-500 to-red-600" />
                {/* Speed lines accent */}
                <div className="absolute top-0 bottom-0 right-[20vw] w-[30vw] bg-gradient-to-r from-transparent via-slate-200/50 to-transparent skew-x-12 opacity-50" />
              </div>

              <img
                src="/logo.png"
                alt="AirTix Holidays"
                className="relative z-10 h-16 sm:h-20 md:h-24 lg:h-[7rem] w-auto object-contain origin-left drop-shadow-sm"
              />
            </motion.div>

            {/* Title - Updated highlight to Brand Red */}
            <motion.h1 variants={itemVariants} className="font-display font-black text-[2.6rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter mb-6 text-white">
              Connecting <br />
              <span className="serif-italic font-normal text-red-600 font-serif lowercase italic tracking-normal block my-1">
                kerala
              </span> 
              with your Gulf family.
            </motion.h1>

            {/* Geographic Marker coordinates - Updated accents */}
            <motion.div variants={itemVariants} className="flex gap-6 mb-6 font-mono text-[10px] text-slate-550 tracking-wider">
              <div>
                <span className="text-red-500/80 block font-bold">CCJ / COK / TRV</span>
                <span>Kozhikode / Kochi / Trivandrum</span>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <span className="text-red-500/80 block font-bold">DXB / DOH / MCT / RUH</span>
                <span>UAE / Qatar / Oman / Saudi</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-350 font-medium max-w-xl leading-relaxed mb-8">
              Premium travel portal for global expatriates. Secure immediate low-fare flight ticketing, fast-tracked visit visas, and curated family holiday packages.
            </motion.p>

            {/* Trust features */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-6 pt-2 overflow-x-auto no-scrollbar pb-2 whitespace-nowrap" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <span>IATA & TAFI Accredited</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <span>24/7 Gulf Helpline Desk</span>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 w-full">
              {/* Primary button is styled via its own component, but we will ensure it matches red/black globally later if needed */}
              <BookingButton variant="primary" className="!px-10 !py-4.5 text-sm shadow-2xl shadow-red-600/20 hover:scale-[1.02] transition-transform" />
              <a
                href="#services"
                onClick={handleScrollToPackages}
                className="inline-flex items-center justify-center font-display font-bold border-b-2 border-white/20 hover:border-red-500 text-white hover:text-red-400 py-2 text-xs tracking-widest transition-all uppercase group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 ml-2.5 text-red-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Services Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end xl:justify-center relative mt-12 lg:mt-0 z-30"
          >
            {/* Extremely subtle backdrop glow to anchor it to the dark mode */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-lg aspect-[3/4] lg:aspect-[4/5.5] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 group bg-slate-900 lg:-translate-y-8">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  
                  {/* Editorial Badge */}
                  <div className="absolute top-6 left-6 z-10 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-red-600/30 shadow-md">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase">
                      {showcaseSlides[currentSlide].badge}
                    </span>
                  </div>

                  {/* Editorial Frame Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-left z-10 space-y-3">
                    <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-extrabold block">
                      {showcaseSlides[currentSlide].tagline}
                    </span>
                    <h3 className="font-display font-black text-2xl uppercase leading-tight tracking-tight text-white drop-shadow-md">
                      {showcaseSlides[currentSlide].title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium drop-shadow-sm">
                      {showcaseSlides[currentSlide].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Carousel Indicators - Updated to Brand Red */}
              <div className="absolute bottom-4 right-8 z-20 flex items-center gap-2">
                {showcaseSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "w-6 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]" : "w-1.5 bg-white/40 hover:bg-white/70"
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
      <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/20 to-transparent z-10" />
    </section>
  );
}
