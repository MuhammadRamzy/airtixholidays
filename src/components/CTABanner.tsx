"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SoftGlow, Birds } from "./decor/SkyBackdrop";

export default function CTABanner() {
  const waGeneral = `https://wa.me/${siteConfig.departments.holidays.phoneDial}?text=${encodeURIComponent("Hi AirTix Holidays Team, I'd like to inquire about your travel services.")}`;
  const waFlight = `https://wa.me/${siteConfig.departments.holidays.phoneDial}?text=${encodeURIComponent("Hi, I need to book a flight. Please assist me with availability and fares.")}`;

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-primary-950 text-white z-20 border-t border-white/10">
      {/* Animated glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-red-600/15 rounded-full blur-[80px] pointer-events-none"
      />

      {/* Sky story: golden-hour light as the journey nears its destination */}
      <SoftGlow tone="warm" className="absolute -top-16 right-[8%] w-72 h-72 opacity-70" />
      <Birds className="absolute top-10 left-[10%] w-16 opacity-40 hidden md:block" colorClassName="text-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/15 border border-red-500/25 text-red-400 font-mono text-[10px] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Ready to Travel?
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tighter">
              Book your next flight <br />
              <span className="serif-italic font-normal font-serif text-red-500 italic lowercase block mt-1">
                or custom holiday package today
              </span>
            </h2>

            <p className="text-slate-300 font-medium text-base sm:text-lg max-w-lg leading-relaxed">
              Special fares on GCC↔India routes. Fast visa processing. Complete hajj & umrah packages. One team, all your travel needs.
            </p>

            {/* Route codes */}
            <div className="flex gap-4 font-mono text-[10px] text-slate-500 uppercase tracking-widest flex-wrap">
              <span className="text-red-400 font-bold">CCJ · COK · TRV</span>
              <span>⇄</span>
              <span className="text-red-400 font-bold">DXB · DOH · MCT · RUH</span>
            </div>
          </div>

          {/* Right: Action box */}
          <div className="flex flex-col gap-4">
            {/* Primary WhatsApp CTA */}
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-900/30 hover:shadow-emerald-500/20 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-black tracking-tight">Chat with Our Team</p>
                  <p className="text-[10px] text-emerald-200 font-medium">WhatsApp · Instant reply</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 opacity-60 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Book a flight CTA */}
            <a
              href={waFlight}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-red-900/30 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-black tracking-tight">Book a Flight Now</p>
                  <p className="text-[10px] text-red-200 font-medium">GCC ↔ India · Special Fares</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 opacity-60 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-[10px] text-slate-600 font-mono text-center tracking-wider uppercase pt-1">
              IATA & TAFI Accredited · Kerala's Trusted Gulf Partner
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
