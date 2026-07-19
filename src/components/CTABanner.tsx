"use client";

import React from "react";
import { motion } from "framer-motion";
import BookingButton from "./BookingButton";
import { Compass, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-primary-950 text-white z-20 border-t border-white/10">
      {/* High-quality radial gradient background mesh for dynamic contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08)_0,transparent_65%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Asymmetric text & serif italic headings */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready to Fly?</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tighter max-w-3xl">
              Book your next flight <br />
              <span className="serif-italic font-normal font-serif text-gold-400 italic lowercase block mt-2">
                or custom holiday package today
              </span>
            </h2>
            
            <p className="text-slate-300 font-medium text-base sm:text-lg max-w-2xl leading-relaxed">
              Get instant access to special ticket rates, direct booking channels, visa coordination services, and 24/7 client helpline services. Let us handle the details.
            </p>
          </div>

          {/* Right Column: Premium print ad styled booking box */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <div className="w-full max-w-md p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md space-y-6">
              <BookingButton variant="primary" className="w-full !py-4 text-base shadow-xl shadow-gold-500/10 hover:scale-[1.02] transition-transform" />
              
              <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase text-center">
                Secure external routing via AirTix booking servers.
              </p>
              
              <div className="editorial-line-gold w-full" />
              
              <div className="flex justify-between font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                <span>GATE PASS // V4.0</span>
                <span>CCJ ⇄ DXB / COK ⇄ DOH</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
