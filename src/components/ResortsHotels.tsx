"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Cloud, Birds, PhotoWash, PHOTO_FILTER } from "./decor/SkyBackdrop";
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

      {/* Sky story: quiet clouds drifting behind the stays */}
      <Cloud className="absolute -top-4 left-[6%] w-44 sm:w-60 opacity-40 hidden md:block" duration={32} />
      <Birds className="absolute top-24 right-[38%] w-16 opacity-70 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
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

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors text-xs font-mono uppercase tracking-wider min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              Enquire About Stays
            </a>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-white/60">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
                alt="Resort and hotel stays booked by AirTixHolidays"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className={`object-cover ${PHOTO_FILTER}`}
              />
              <PhotoWash />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
            </div>
            <Houseboat className="absolute -bottom-8 -left-10 w-40 sm:w-52 opacity-90 hidden md:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
