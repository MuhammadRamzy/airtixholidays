"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, PhoneCall, FileCheck, Compass } from "lucide-react";

interface Benefit {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs() {
  const benefits: Benefit[] = [
    {
      id: "support",
      title: "24/7 Expat Helpline",
      desc: "Dedicated support desk specializing in Gulf worker flights, emergency bookings, reschedule options, and holiday coordination.",
      icon: <PhoneCall className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      id: "fares",
      title: "Best Fare Guarantee",
      desc: "Direct flight tickets and bulk package rates from Kerala to major Gulf airports. Unmatched savings for families and group bookings.",
      icon: <ShieldCheck className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      id: "visa",
      title: "Instant Visa Processing",
      desc: "Fast-tracked visa assistance for Dubai, Qatar, Oman, Saudi Arabia, and other holiday destinations. Stress-free documentation support.",
      icon: <FileCheck className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      id: "planners",
      title: "Custom Tour Planning",
      desc: "Bespoke itineraries designed for families, honeymooners, and corporate teams. We curate every detail to match your exact requests.",
      icon: <Compass className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform duration-300" />,
    },
  ];

  // Framer Motion staggered variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="why-us" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Repeating flight-path motif running subtly in background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="#eab308" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Editorial placement */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
            The AirTix Difference
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary-900 leading-[0.95] tracking-tighter">
            Why Book Your Next Trip With Us?
          </h2>
        </div>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Philosophy & Quote */}
          <div className="lg:col-span-5 space-y-8 sticky top-24">
            <div className="editorial-line-gold w-1/2" />
            <blockquote className="text-2xl sm:text-3xl text-primary-950 font-serif serif-italic leading-relaxed">
              "Travel is more than moving from one place to another. For the global Malayali, it is a bridge to family, built on absolute trust, direct routing, and premium care."
            </blockquote>
            <div>
              <p className="font-display font-bold text-sm tracking-wider uppercase text-slate-800">
                — AirTix Tour Directors
              </p>
              <p className="text-xs text-slate-400 font-mono tracking-widest mt-1">
                ESTABLISHED FOR GLOBAL EXPATRIATES
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 hidden lg:block">
              <span className="editorial-coord text-slate-400">KOCHI / COK REGIONAL OFFICE</span>
            </div>
          </div>

          {/* Right Column: Numbered List Index */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
            >
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={benefit.id}
                  variants={itemVariants}
                  className="relative pt-6 border-t border-slate-200/80 flex flex-col justify-between group"
                >
                  {/* Large decorative number overlay */}
                  <span className="absolute top-2 right-0 font-display font-black text-5xl lg:text-6xl text-gold-500/10 group-hover:text-gold-550/20 transition-colors select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  
                  <div>
                    <h3 className="font-display font-black text-lg md:text-xl text-primary-900 mb-3 group-hover:text-teal-650 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed mb-4">
                      {benefit.desc}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                    DIRECT ACCESS SERVICE
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
