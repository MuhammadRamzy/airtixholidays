"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Star, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

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
  const packages: PackageData[] = [
    {
      id: "pkg-kerala",
      title: "Munnar Hills & Alleppey Houseboat",
      location: "Kerala, India",
      duration: "4 Nights / 5 Days",
      rating: 4.9,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
      tag: "Domestic Best Seller",
      highlights: ["Hill Station Resort", "Premium Houseboat Stay", "Waterfall Trekking", "Spice Plantation Tour"],
      inclusions: "Resort Stay + Houseboat + Transfers",
    },
    {
      id: "pkg-dubai",
      title: "Dubai & Abu Dhabi Grand Explorer",
      location: "UAE",
      duration: "5 Nights / 6 Days",
      rating: 4.8,
      reviews: 218,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      tag: "Expat Favorite",
      highlights: ["Burj Khalifa Sky View", "Desert Safari with BBQ", "Sheikh Zayed Mosque Visit", "Premium Hotel stays"],
      inclusions: "Flights + 4★ Hotels + Tours + Visa",
    },
    {
      id: "pkg-maldives",
      title: "Maldives Luxury Bliss Getaway",
      location: "Maldives",
      duration: "3 Nights / 4 Days",
      rating: 4.9,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80",
      tag: "Premium Beach Resort",
      highlights: ["Overwater Villa Upgrade", "Speedboat Transfers", "All-Inclusive Dining", "Snorkeling Equipment"],
      inclusions: "Overwater Villa + All Meals + Transfers",
    },
  ];
  return (
    <section id="packages" className="py-24 md:py-32 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative vertical coordinates watermark */}
      <div className="absolute left-6 top-1/4 z-10 hidden xl:block select-none font-mono text-[9px] text-slate-300 tracking-[0.3em] uppercase origin-left rotate-90">
        CURATED ESCAPES // DIRECT TICKETING INCLUDED
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Left-aligned and asymmetric */}
        <div className="max-w-3xl mb-20">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
            Curated Escapes
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary-900 leading-[0.95] tracking-tighter">
            Top Holiday Packages <br />
            <span className="serif-italic font-normal font-serif text-teal-600 italic lowercase">planned for expatriates</span>
          </h2>
          <p className="text-slate-500 mt-6 text-base md:text-lg leading-relaxed font-medium">
            Handpicked itineraries by our travel directors. From Kerala's green waterways to the landmarks of the Gulf and luxury island retreats.
          </p>
        </div>

        {/* Asymmetric Staggered Cards Layout */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* 1. FEATURED COVER STORY PACKAGE (Munnar/Kerala Houseboat) */}
          {(() => {
            const pkg = packages[0];
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm group items-stretch"
              >
                {/* Horizontal featured image */}
                <div className="lg:col-span-7 h-80 lg:h-auto relative overflow-hidden">
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-900 text-white shadow-md">
                      {pkg.tag}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 z-10 px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 text-slate-800 shadow-md flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                    <span>{pkg.rating}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({pkg.reviews} reviews)</span>
                  </div>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Consistent color treatment overlay */}
                  <div className="absolute inset-0 bg-primary-950/15 mix-blend-multiply pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Horizontal body */}
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1 text-teal-600">
                        <MapPin className="w-3.5 h-3.5" />
                        {pkg.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {pkg.duration}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl lg:text-3xl text-primary-900 mb-6 group-hover:text-teal-650 transition-colors leading-tight">
                      {pkg.title}
                    </h3>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-650 font-medium">
                          <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                    <div>
                      <span className="text-[10px] text-slate-450 uppercase font-black tracking-widest block">
                        Included Services
                      </span>
                      <span className="text-sm font-bold text-slate-600 block mt-1">
                        {pkg.inclusions}
                      </span>
                    </div>

                    <a
                      href={siteConfig.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-teal-50 hover:bg-teal-600 text-teal-650 hover:text-white font-bold py-3 px-6 rounded-xl text-xs md:text-sm tracking-wide transition-all duration-300 min-h-[44px] hover:scale-[1.03]"
                    >
                      <span>Enquire Package</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Staggered Row for package 2 & 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* 2. DUBAI EXPLORER CARD (Left Wide Card - 7 Columns) */}
            {(() => {
              const pkg = packages[1];
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm group flex flex-col justify-between"
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
                    </div>
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
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

                      <h3 className="font-display font-black text-2xl text-primary-900 mb-6 group-hover:text-teal-650 transition-colors leading-tight">
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

                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                      <div>
                        <span className="text-[10px] text-slate-450 uppercase font-black tracking-widest block">
                          Included Services
                        </span>
                        <span className="text-sm font-bold text-slate-600 block mt-1">
                          {pkg.inclusions}
                        </span>
                      </div>

                      <a
                        href={siteConfig.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-teal-50 hover:bg-teal-600 text-teal-650 hover:text-white font-bold py-3 px-6 rounded-xl text-xs md:text-sm tracking-wide transition-all duration-300 min-h-[44px] hover:scale-[1.03]"
                      >
                        <span>Enquire</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* 3. MALDIVES CARD (Right Narrow Card - 5 Columns with vertical alignment offset) */}
            {(() => {
              const pkg = packages[2];
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="lg:col-span-5 bg-white rounded-3xl overflow-hidden border border-slate-150/60 premium-shadow group flex flex-col justify-between lg:translate-y-8"
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
                    </div>
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
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

                      <h3 className="font-display font-black text-2xl text-primary-900 mb-6 group-hover:text-teal-650 transition-colors leading-tight">
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

                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                      <div>
                        <span className="text-[10px] text-slate-450 uppercase font-black tracking-widest block">
                          Included Services
                        </span>
                        <span className="text-sm font-bold text-slate-600 block mt-1">
                          {pkg.inclusions}
                        </span>
                      </div>

                      <a
                        href={siteConfig.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-teal-50 hover:bg-teal-600 text-teal-650 hover:text-white font-bold py-3 px-6 rounded-xl text-xs md:text-sm tracking-wide transition-all duration-300 min-h-[44px] hover:scale-[1.03]"
                      >
                        <span>Enquire</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

          </div>
        </div>

        {/* Custom Customization CTA block */}
        <div className="mt-28 text-center max-w-2xl mx-auto">
          <p className="text-sm md:text-base font-semibold text-slate-500 mb-4">
            Looking for something custom? We design bespoke tours for groups and families.
          </p>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-bold text-base transition-colors"
          >
            <span>Chat with Tour Planner</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
