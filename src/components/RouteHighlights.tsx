"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Info, Database, RefreshCw, Radio } from "lucide-react";
import { siteConfig } from "@/config/site";
import { flightDirectory, FlightStatus } from "@/data/flights";

export default function RouteHighlights() {
  const [flights, setFlights] = useState<FlightStatus[]>(flightDirectory);
  const [isSyncing, setIsSyncing] = useState(false);
  const [latency, setLatency] = useState(142);
  const [lastUpdated, setLastUpdated] = useState("Just now");

  const triggerGDSSync = () => {
    setIsSyncing(true);
    // Simulate real-time API call to internal booking engine / GDS endpoint
    setTimeout(() => {
      setIsSyncing(false);
      setLatency(Math.floor(Math.random() * 80) + 60);
      setLastUpdated("Just now");
      // Add subtle shuffle animation to verify the sync worked
      setFlights([...flightDirectory].sort(() => Math.random() - 0.5));
    }, 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdated((prev) => {
        if (prev === "Just now") return "1m ago";
        if (prev === "1m ago") return "2m ago";
        if (prev === "2m ago") return "3m ago";
        return "5m ago";
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="routes" className="py-24 md:py-32 bg-[#FAF9F6] relative text-slate-900 overflow-hidden">
      {/* Editorial layout markings */}
      <div className="absolute top-12 left-12 font-mono text-[9px] text-slate-400 tracking-[0.3em] uppercase hidden lg:block">
        AirTix Index / Routes & Departures
      </div>
      <div className="absolute top-12 right-12 font-mono text-[9px] text-slate-400 tracking-[0.3em] uppercase hidden lg:block">
        Kerala ⇄ GCC Corridor
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
              Expat Specialization
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary-950 leading-[0.95] tracking-tighter">
              The Gulf Route <br className="hidden sm:inline" />
              <span className="serif-italic font-normal font-serif text-teal-650 italic lowercase">departures directory</span>
            </h2>
            <p className="text-slate-600 mt-6 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
              Real-time route schedules between Kerala's international hubs and the Arabian Gulf. Syncs directly with global distribution systems (GDS) to secure priority expat seats.
            </p>
          </div>
          
          {/* Dynamic GDS Connection Control Center */}
          <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end items-center">
            <div className="flex items-center gap-3 text-slate-700 bg-white border border-slate-200/70 rounded-xl px-4 py-2.5 text-xs font-mono shadow-sm">
              <Radio className={`w-3.5 h-3.5 ${isSyncing ? 'text-amber-500 animate-pulse' : 'text-emerald-500 animate-pulse'}`} />
              <span className="font-bold">GDS PORT: {isSyncing ? "SYNCING" : "CONNECTED"}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">{latency}ms</span>
            </div>
            
            <button
              onClick={triggerGDSSync}
              disabled={isSyncing}
              className="flex items-center gap-2 bg-primary-950 hover:bg-teal-600 text-white disabled:bg-slate-300 py-3 px-4.5 rounded-xl text-xs font-bold font-mono tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>SYNC ({lastUpdated})</span>
            </button>
          </div>
        </div>

        {/* Board container - Reimagined as an elegant directory list */}
        <div className="border-t border-b border-slate-200/80 divide-y divide-slate-200/50 mt-12 bg-white/40 backdrop-blur-md rounded-2xl p-4 md:p-8">
          
          {/* Header Row (Desktop only) */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <div className="col-span-2">Index & Flight</div>
            <div className="col-span-4">Route Corridors</div>
            <div className="col-span-2 text-center">Flight Duration</div>
            <div className="col-span-2 text-center">Frequency</div>
            <div className="col-span-2 text-right">Availability</div>
          </div>

          {/* Flights list */}
          <div className="divide-y divide-slate-200/60">
            {flights.map((flight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-6 hover:bg-slate-50/60 transition-all duration-300 group"
              >
                {/* Index & Flight Code */}
                <div className="col-span-2 flex items-center justify-between md:justify-start gap-4">
                  <span className="font-display font-black text-xl text-slate-350 tracking-tighter">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs font-bold bg-slate-100 text-slate-800 px-2 py-1 rounded border border-slate-200/40">
                    {flight.flight}
                  </span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase md:hidden">Flight</span>
                </div>

                {/* Route Corridors (Asymmetric headline styled) */}
                <div className="col-span-4 flex items-center justify-between md:block">
                  <span className="text-slate-400 text-[10px] font-bold uppercase md:hidden">Route</span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 md:gap-2">
                    <span className="font-display font-black text-xl md:text-2xl text-primary-950 tracking-tight group-hover:text-teal-650 transition-colors">
                      {flight.to}
                    </span>
                    <span className="text-xs font-serif italic text-slate-450 leading-none">direct from</span>
                    <span className="font-bold text-slate-700 text-sm md:text-base">
                      {flight.from} <span className="font-mono text-[10px] text-slate-400">({flight.fromCode})</span>
                    </span>
                  </div>
                </div>

                {/* Duration */}
                <div className="col-span-2 flex items-center justify-between md:block md:text-center">
                  <span className="text-slate-400 text-[10px] font-bold uppercase md:hidden">Duration</span>
                  <span className="text-sm font-semibold text-slate-700 font-mono">
                    {flight.duration}
                  </span>
                </div>

                {/* Frequency */}
                <div className="col-span-2 flex items-center justify-between md:block md:text-center">
                  <span className="text-slate-400 text-[10px] font-bold uppercase md:hidden">Frequency</span>
                  <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                    {flight.frequency}
                  </span>
                </div>

                {/* Status & CTA */}
                <div className="col-span-2 flex items-center justify-between md:block md:text-right">
                  <span className="text-slate-400 text-[10px] font-bold uppercase md:hidden">Status</span>
                  <div className="flex items-center gap-3 md:justify-end">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase border ${flight.statusColor}`}>
                      {flight.status}
                    </span>
                    
                    <a
                      href={siteConfig.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-teal-600 border border-slate-200/60 text-slate-650 hover:text-white transition-all duration-300 flex items-center justify-center min-h-[38px] min-w-[38px] hover:scale-105"
                      aria-label={`Inquire about ${flight.flight}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Informational bottom bar */}
        <div className="mt-12 flex items-center justify-center gap-3 text-xs text-slate-500 max-w-xl mx-auto text-center font-medium">
          <Info className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span>Special flight allocations are subject to seasonality. Expatriate tickets require validation of employment details prior to seat allocation.</span>
        </div>
      </div>
    </section>
  );
}
