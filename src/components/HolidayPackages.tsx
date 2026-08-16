"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import InquireButton from "./InquireButton";
import { Cloud, SoftGlow, PhotoWash, PHOTO_FILTER } from "./decor/SkyBackdrop";

interface PackageData {
  id: string;
  title: string;
  location: string;
  image: string;
  tag: string;
  description: string;
}

export default function HolidayPackages() {
  const holidayPackages: PackageData[] = [
    {
      id: "pkg-kerala",
      title: "Kerala Holidays",
      location: "Kerala, India",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
      tag: "Domestic",
      description: "Hill stations, backwaters, and family getaways across Kerala, planned around your dates and budget.",
    },
    {
      id: "pkg-gulf",
      title: "Gulf & International Holidays",
      location: "UAE, Oman, Qatar & beyond",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      tag: "Expat Favorite",
      description: "City breaks and family holidays across the Gulf and other international destinations, with flights and stays arranged end-to-end.",
    },
    {
      id: "pkg-maldives",
      title: "Maldives & Island Getaways",
      location: "Maldives",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
      tag: "Beach & Resort",
      description: "Resort stays and honeymoon packages across the Maldives' island properties, matched to your preferred travel style.",
    }
  ];

  const umrahPackages: PackageData[] = [
    {
      id: "pkg-umrah-premium",
      title: "Premium Umrah Package",
      location: "Makkah & Madinah, Saudi Arabia",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Kaaba_mirror_edit_jj.jpg",
      tag: "Luxury Pilgrimage",
      description: "Hotel stays close to the Haram, guided Ziyarah tours, and full visa and flight arrangements for a comfortable pilgrimage.",
    },
    {
      id: "pkg-umrah-economy",
      title: "Economy Umrah Package",
      location: "Makkah & Madinah, Saudi Arabia",
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
      tag: "Affordable Pilgrimage",
      description: "Comfortable, budget-friendly hotel stays with the same complete visa, flight, and guided Ziyarah support.",
    }
  ];

  const renderCard = (pkg: PackageData, delayIndex: number) => {
    const encodedMsg = encodeURIComponent(
      `Hi AirTixHolidays Team, I would like to inquire about booking the "${pkg.title}" package to ${pkg.location}.`
    );
    const waLink = `https://wa.me/${siteConfig.departments.holidays.phoneDial}?text=${encodedMsg}`;

    return (
      <motion.div
        key={pkg.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: delayIndex * 0.1 }}
        className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-100 transition-all duration-550 group flex flex-col justify-between h-full"
      >
        <div className="h-64 relative overflow-hidden">
          <div className="absolute top-6 left-6 z-10">
            <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-900 text-white shadow-md">
              {pkg.tag}
            </span>
          </div>
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(min-width: 768px) 380px, 285px"
            className={`object-cover transition-transform duration-700 group-hover:scale-[1.04] ${PHOTO_FILTER}`}
          />
          <PhotoWash />
          <div className="absolute inset-0 bg-primary-950/15 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        <div className="p-8 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center gap-1 text-xs font-bold text-teal-650 uppercase tracking-widest mb-4">
              <MapPin className="w-3.5 h-3.5" />
              {pkg.location}
            </div>

            <h3 className="font-display font-black text-xl md:text-2xl text-primary-900 mb-4 group-hover:text-teal-650 transition-colors leading-tight">
              {pkg.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8">
              {pkg.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-slate-100 mt-auto">
            <span className="text-xs font-semibold text-slate-450">
              Itinerary and pricing tailored on request — ask us for a custom quote.
            </span>

            <InquireButton href={waLink} fullWidth />
          </div>
        </div>
      </motion.div>
    );
  };

  const leisureScrollRef = React.useRef<HTMLDivElement>(null);
  const umrahScrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollAmount = clientWidth * 0.75;
      ref.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="packages" className="py-10 md:py-12 bg-[#FAF9F6] relative overflow-hidden border-b border-slate-200/60">
      {/* Decorative vertical coordinates watermark */}
      <div className="absolute left-6 top-1/4 z-10 hidden xl:block select-none font-mono text-[9px] text-slate-300 tracking-[0.3em] uppercase origin-left rotate-90">
        CURATED ESCAPES // HAJJ & UMRAH PILGRIMAGE DEPT
      </div>

      {/* Sky story: a drifting cloud over leisure escapes, warm light over the pilgrimage division */}
      <Cloud className="absolute top-6 right-[8%] w-48 sm:w-64 opacity-40 hidden md:block" duration={28} flip />
      <SoftGlow tone="warm" className="absolute bottom-10 left-[4%] w-64 h-64" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Leisure Holiday Packages */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
              Curated Escapes // Leisure Division
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary-900 leading-[0.95] tracking-tighter">
              Holiday Packages <br />
              <span className="serif-italic font-normal font-serif text-teal-650 italic lowercase">
                expertly planned for families and expatriates
              </span>
            </h2>
            <p className="text-slate-500 mt-6 text-base md:text-lg leading-relaxed font-medium">
              Handpicked itineraries by our travel directors. From Kerala&apos;s green waterways to the landmarks of the Gulf and luxury island retreats.
            </p>
          </div>

          {/* Leisure Controls (mobile/tablet only — desktop shows a full grid) */}
          <div className="flex items-center gap-2 self-end lg:hidden">
            <button
              onClick={() => handleScroll(leisureScrollRef, "left")}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll(leisureScrollRef, "right")}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Holiday Packages Carousel (mobile/tablet) — full grid on desktop */}
        <div
          ref={leisureScrollRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 mb-16 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {holidayPackages.map((pkg, idx) => (
            <div key={pkg.id} className="w-[285px] sm:w-[350px] md:w-[380px] lg:w-auto shrink-0 snap-start lg:shrink">
              {renderCard(pkg, idx)}
            </div>
          ))}
        </div>

        {/* Section Header: Hajj & Umrah Pilgrimage Packages */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 pt-8 border-t border-slate-200/60">
          <div className="max-w-3xl">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
              Holy Journey // Pilgrimage Division
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary-900 leading-[0.95] tracking-tighter">
              Hajj & Umrah Packages <br />
              <span className="serif-italic font-normal font-serif text-teal-650 italic lowercase">
                spiritual journeys managed with experience and trust
              </span>
            </h2>
            <p className="text-slate-500 mt-6 text-base md:text-lg leading-relaxed font-medium">
              Meticulously structured pilgrimage services. Benefit from our 12+ years of expertise in catering to Holy trips with nearby hotels, flights, and guide clearance.
            </p>
          </div>

          {/* Umrah Controls (mobile/tablet only — desktop shows a full grid) */}
          <div className="flex items-center gap-2 self-end lg:hidden">
            <button
              onClick={() => handleScroll(umrahScrollRef, "left")}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll(umrahScrollRef, "right")}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Umrah Packages Carousel (mobile/tablet) — full grid on desktop */}
        <div
          ref={umrahScrollRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {umrahPackages.map((pkg, idx) => (
            <div key={pkg.id} className="w-[285px] sm:w-[350px] md:w-[380px] lg:w-auto shrink-0 snap-start lg:shrink">
              {renderCard(pkg, idx + 3)}
            </div>
          ))}
        </div>

        {/* Custom Customization CTA block */}
        <div className="mt-16 lg:mt-24 text-center max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
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
