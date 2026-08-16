"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Cloud, Birds } from "./decor/SkyBackdrop";
import { Houseboat } from "./decor/Transports";

export default function ResortsHotels() {
  const waLink = `https://wa.me/${siteConfig.departments.holidays.phoneDial}?text=${encodeURIComponent("Hi AirTixHolidays Team, I'm interested in resort and hotel booking assistance.")}`;

  return (
    <section id="resorts" className="py-10 md:py-12 bg-[#FAF9F6] relative overflow-hidden border-b border-slate-200/60">
      {/* Repeating background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="resort-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#resort-grid)" />
        </svg>
      </div>

      {/* Sky story: quiet clouds drifting behind the stays, a houseboat for the backwater charters */}
      <Cloud className="absolute -top-4 left-[6%] w-44 sm:w-60 opacity-40 hidden md:block" duration={32} />
      <Birds className="absolute top-24 right-[10%] w-16 opacity-70 hidden lg:block" />
      <Houseboat className="absolute bottom-4 right-[3%] w-40 sm:w-52 opacity-50 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
            Resort & Hotel Booking
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary-950 leading-[0.95] tracking-tighter">
            Resort & Hotel Bookings <br />
            <span className="serif-italic font-normal font-serif text-teal-650 italic lowercase">
              across Kerala and beyond
            </span>
          </h2>
          <p className="text-slate-500 mt-6 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
            Resort, hotel, and houseboat stay bookings for families, groups, and business travel. Tell us your dates and destination and we&apos;ll take care of the rest.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors text-xs font-mono uppercase tracking-wider min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              Enquire About Stays
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
