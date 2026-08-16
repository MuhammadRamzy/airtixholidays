"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import InquireButton from "./InquireButton";
import { Cloud, SoftGlow, PhotoWash, PHOTO_FILTER } from "./decor/SkyBackdrop";

interface ServiceData {
  id: string;
  title: string;
  image: string;
  description: string;
}

const services: ServiceData[] = [
  {
    id: "svc-holidays",
    title: "Holiday Packages",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    description: "Family and leisure holiday packages, planned around your dates, destination, and budget. Tell us what you have in mind and we'll put together a custom itinerary.",
  },
  {
    id: "svc-umrah",
    title: "Hajj & Umrah Packages",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Kaaba_mirror_edit_jj.jpg",
    description: "Pilgrimage packages covering flights, visas, and hotel stays in Makkah and Madinah. Get in touch with our team for current options and pricing.",
  }
];

export default function HolidayPackages() {
  const renderCard = (svc: ServiceData, delayIndex: number) => {
    const encodedMsg = encodeURIComponent(
      `Hi AirTixHolidays Team, I would like to inquire about ${svc.title}.`
    );
    const waLink = `https://wa.me/${siteConfig.departments.holidays.phoneDial}?text=${encodedMsg}`;

    return (
      <motion.div
        key={svc.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: delayIndex * 0.1 }}
        className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-100 transition-all duration-550 group flex flex-col justify-between h-full"
      >
        <div className="h-64 relative overflow-hidden">
          <Image
            src={svc.image}
            alt={svc.title}
            fill
            sizes="(min-width: 768px) 480px, 285px"
            className={`object-cover transition-transform duration-700 group-hover:scale-[1.04] ${PHOTO_FILTER}`}
          />
          <PhotoWash />
          <div className="absolute inset-0 bg-primary-950/15 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        <div className="p-8 flex flex-col justify-between flex-1">
          <div>
            <h3 className="font-display font-black text-xl md:text-2xl text-primary-900 mb-4 group-hover:text-teal-650 transition-colors leading-tight">
              {svc.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8">
              {svc.description}
            </p>
          </div>

          <InquireButton href={waLink} fullWidth />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="packages" className="py-10 md:py-12 bg-[#FAF9F6] relative overflow-hidden border-b border-slate-200/60">
      {/* Sky story: a drifting cloud, warm glow */}
      <Cloud className="absolute top-6 right-[8%] w-48 sm:w-64 opacity-40 hidden md:block" duration={28} flip />
      <SoftGlow tone="warm" className="absolute bottom-10 left-[4%] w-64 h-64" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
            Holiday & Pilgrimage Packages
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary-900 leading-[0.95] tracking-tighter">
            Holiday & Umrah Packages <br />
            <span className="serif-italic font-normal font-serif text-teal-650 italic lowercase">
              planned around you
            </span>
          </h2>
          <p className="text-slate-500 mt-6 text-base md:text-lg leading-relaxed font-medium">
            Holiday and pilgrimage packages, custom-built for your dates and group. Reach out to our team for current itineraries and pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((svc, idx) => renderCard(svc, idx))}
        </div>

        {/* Custom Customization CTA block */}
        <div className="mt-16 text-center max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
          <p className="text-sm md:text-base font-semibold text-slate-700 mb-4">
            Do you require customized group departures or customized itineraries?
          </p>
          <InquireButton
            href={`https://wa.me/${siteConfig.departments.holidays.phoneDial}?text=${encodeURIComponent("Hi AirTixHolidays Team, I'm interested in arranging a customized Umrah or Holiday Package.")}`}
            label="Chat with Package Planners"
          />
        </div>
      </div>
    </section>
  );
}
