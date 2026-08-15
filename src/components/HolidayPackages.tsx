"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import InquireButton from "./InquireButton";
import { Cloud, SoftGlow, PhotoWash, PHOTO_FILTER } from "./decor/SkyBackdrop";

interface PackageData {
  id: string;
  title: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  tag: string;
  highlights: string[];
  inclusions: string;
}

export default function HolidayPackages() {
  const holidayPackages: PackageData[] = [
    {
      id: "pkg-kerala",
      title: "Munnar Hills & Alleppey Houseboat",
      location: "Kerala, India",
      duration: "4 Nights / 5 Days",
      rating: 4.9,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
      tag: "Domestic Best Seller",
      highlights: ["Hill Station Resort Stay", "Premium Backwater Houseboat", "Waterfall & Tea Garden Trekking", "Spice Plantation Tours"],
      inclusions: "Resort Stay + Houseboat + Transfers",
    },
    {
      id: "pkg-dubai",
      title: "Dubai & Abu Dhabi Grand Explorer",
      location: "United Arab Emirates",
      duration: "5 Nights / 6 Days",
      rating: 4.8,
      reviews: 218,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      tag: "Expat Favorite",
      highlights: ["Burj Khalifa Sky View", "Desert Safari with BBQ Dinner", "Sheikh Zayed Mosque Visit", "Premium Hotel stays"],
      inclusions: "Flights + 4★ Hotels + Tours + Visa",
    },
    {
      id: "pkg-maldives",
      title: "Maldives Luxury Bliss Getaway",
      location: "Maldives",
      duration: "3 Nights / 4 Days",
      rating: 4.9,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
      tag: "Premium Beach Resort",
      highlights: ["Overwater Villa Upgrade", "Speedboat Airport Transfers", "All-Inclusive Dining", "Snorkeling & Water Sports"],
      inclusions: "Overwater Villa + All Meals + Transfers",
    }
  ];

  const umrahPackages: PackageData[] = [
    {
      id: "pkg-umrah-premium",
      title: "Premium 5-Star Umrah Package",
      location: "Makkah & Madinah (Saudi Arabia)",
      duration: "14 Days Spiritual Journey",
      rating: 5.0,
      reviews: 320,
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Kaaba_mirror_edit_jj.jpg",
      tag: "Luxury Pilgrimage",
      highlights: ["5-Star Hotel close to Makkah Haram", "Luxury Hotel in Madinah", "Detailed Ziyarah Tours", "Specialized Spiritual Guides"],
      inclusions: "Flights + 5★ Hotels + Visa + Guided Tours + Luxury Transfers",
    },
    {
      id: "pkg-umrah-economy",
      title: "Economy Deluxe Umrah Package",
      location: "Makkah & Madinah (Saudi Arabia)",
      duration: "14 Days Spiritual Journey",
      rating: 4.9,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
      tag: "Affordable Pilgrimage",
      highlights: ["Comfortable Hotel stays", "Spiritual Guidance lectures", "Holy Site Ziyarah Tours", "Express Visa processing"],
      inclusions: "Flights + Clean Budget Hotels + Visa + Group Transfers",
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
          <div className="absolute top-6 right-6 z-10 px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 text-slate-800 shadow-md flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
            <span>{pkg.rating}</span>
            <span className="text-[10px] text-slate-400">({pkg.reviews})</span>
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
            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              <span className="flex items-center gap-1 text-teal-650">
                <MapPin className="w-3.5 h-3.5" />
                {pkg.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {pkg.duration}
              </span>
            </div>

            <h3 className="font-display font-black text-xl md:text-2xl text-primary-900 mb-6 group-hover:text-teal-650 transition-colors leading-tight">
              {pkg.title}
            </h3>

            <ul className="space-y-2.5 mb-8">
              {pkg.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-650 font-medium">
                  <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-slate-100 mt-auto">
            <div>
              <span className="text-[10px] text-slate-450 uppercase font-black tracking-widest block">
                Included Services
              </span>
              <span className="text-xs font-bold text-slate-600 block mt-1">
                {pkg.inclusions}
              </span>
            </div>

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
