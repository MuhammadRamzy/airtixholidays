"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Plane, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import BookingButton from "./BookingButton";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const handleScrollToPackages = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#packages");
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-primary-950 text-white pt-32 pb-24 overflow-hidden"
    >
      {/* Editorial Grid overlay in background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-12 gap-8 px-8">
          <div className="col-span-3 border-r border-white h-full" />
          <div className="col-span-3 border-r border-white h-full" />
          <div className="col-span-3 border-r border-white h-full" />
          <div className="col-span-3 h-full" />
        </div>
      </div>

      {/* Decorative vertical editorial tag */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute right-6 top-1/3 z-10 hidden xl:flex items-center gap-4 origin-right rotate-90 translate-x-12 select-none"
      >
        <span className="editorial-coord text-slate-500 tracking-[0.4em] text-[9px]">
          AIRTIX JOURNAL // ISSUE 04 // EXPAT EDITION
        </span>
        <div className="w-12 h-[1px] bg-slate-700" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetric Editorial copy */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left flex flex-col items-start"
          >
            
            {/* Trust Chip & Fine Line */}
            <motion.div variants={itemVariants} className="w-full mb-8">
              <div className="inline-flex items-center gap-3 text-xs md:text-sm font-semibold tracking-widest text-gold-400 uppercase mb-4">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Kerala's Premier Flight & Holiday Partner</span>
              </div>
              <div className="editorial-line-gold w-3/4" />
            </motion.div>

            {/* Title - Asymmetric typography, italic offset */}
            <motion.h1 variants={itemVariants} className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter mb-8 text-white">
              Connecting <br />
              <span className="serif-italic font-normal text-gold-400 font-serif lowercase italic tracking-normal block my-1">
                Kerala
              </span> 
              with your Gulf family.
            </motion.h1>

            {/* Geographic Marker coordinates for Kerala and Middle East */}
            <motion.div variants={itemVariants} className="flex gap-8 mb-8 font-mono text-[10px] text-slate-500 tracking-wider">
              <div>
                <span className="text-gold-500/80 block">CCJ / COK / TRV</span>
                <span>10.8505° N, 76.2711° E</span>
              </div>
              <div className="border-l border-slate-800 pl-8">
                <span className="text-teal-400 block">DXB / DOH / MCT</span>
                <span>25.2048° N, 55.2708° E</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-slate-350 font-medium max-w-xl leading-relaxed mb-12">
              The bespoke travel gateway for Malayali expatriates. Secure flight ticketing, visa assistance, and tailor-made family holidays worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto">
              <BookingButton variant="primary" className="!px-12 !py-5 text-base shadow-2xl transition-all duration-300 hover:scale-[1.02] shadow-gold-500/10" />
              <a
                href="#packages"
                onClick={handleScrollToPackages}
                className="inline-flex items-center justify-center font-display font-semibold border-b-2 border-white/20 hover:border-white text-white py-2 text-sm md:text-base tracking-widest transition-all uppercase group"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-4 h-4 ml-3 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Layered Editorial Image Collage (Condé Nast style) */}
          <div className="lg:col-span-5 w-full relative h-[500px] md:h-[550px] mt-8 lg:mt-0">
            
            {/* Background gold fine line bounding frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute inset-4 border border-gold-500/20 pointer-events-none rounded-2xl z-0" 
            />
            
            {/* Image 1: Kerala Houseboat (Vertical background) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="absolute left-0 top-12 w-[60%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 asymmetric-frame-left border border-white/10 group"
            >
              <img
                src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80"
                alt="Kerala backwaters"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.85] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-primary-950/20 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="editorial-coord text-white tracking-widest text-[9px] block">KERALA WATERWAYS</span>
                <span className="text-[10px] text-gold-400 font-serif italic">Alleppey Houseboat</span>
              </div>
            </motion.div>

            {/* Image 2: Dubai Skyline (Horizontal foreground overlap) */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="absolute right-0 top-36 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-20 asymmetric-frame-right border border-white/10 group"
            >
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
                alt="Dubai Skyline"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.85] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-primary-950/20 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="editorial-coord text-white tracking-widest text-[9px] block">MIDDLE EAST HUB</span>
                <span className="text-[10px] text-gold-400 font-serif italic">Burj Khalifa, Dubai</span>
              </div>
            </motion.div>

            {/* Image 3: Small square detail frame (Paris/Global) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1, ease: "backOut" }}
              className="absolute right-12 bottom-6 w-[35%] aspect-square rounded-2xl overflow-hidden shadow-xl z-30 border border-white/15 group hidden sm:block"
            >
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80"
                alt="Paris Cafe"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.85] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-primary-950/20 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 z-20">
                <span className="editorial-coord text-white tracking-widest text-[8px] block">GLOBAL TOURS</span>
                <span className="text-[9px] text-gold-400 font-serif italic">Paris, France</span>
              </div>
            </motion.div>

            {/* Flight Path Graphic linking the layered images with Framer Motion path animation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-25" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M 120 180 C 180 180, 220 220, 260 220"
                fill="none"
                stroke="url(#heroArc)"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="heroArc" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

        </div>
      </div>

      {/* Decorative Editorial line transitions */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-10" />
    </section>
  );
}
