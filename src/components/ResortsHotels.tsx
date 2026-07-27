"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Hotel, Briefcase, Bed, Ship } from "lucide-react";
import { siteConfig } from "@/config/site";
import InquireButton from "./InquireButton";

interface StayService {
  id: string;
  title: string;
  category: string;
  description: string;
  iconType: "resort" | "hotel" | "houseboat" | "group";
  features: string[];
  inclusions: string;
}

export default function ResortsHotels() {
  const stays: StayService[] = [
    {
      id: "stay-resorts",
      title: "Luxury Resort Bookings",
      category: "Leisure Stays",
      description: "Direct contracted rates and custom packages for premium beachfront, clifftop, and wellness resorts globally.",
      iconType: "resort",
      features: [
        "Direct access to premium partner property inventory",
        "Curated wellness, spa & Ayurvedic stay options",
        "Bespoke premium amenities & dining packages",
        "Strategic price discounts for families & groups"
      ],
      inclusions: "Resort Stays + Custom Activities + Transfers"
    },
    {
      id: "stay-hotels",
      title: "Premium & Business Hotel Bookings",
      category: "City & Business",
      description: "Exclusive corporate tariffs and reservations at star-rated hotels located in prime city centers.",
      iconType: "hotel",
      features: [
        "Exclusive negotiated corporate room rates",
        "Complementary high-speed internet & breakfast options",
        "Strategic locations near airports & transit hubs",
        "Flexible room check-in & check-out availability"
      ],
      inclusions: "Room Reservations + Standard Amenities + Priority Booking"
    },
    {
      id: "stay-houseboats",
      title: "Traditional Houseboat Charters",
      category: "Waterway Cruises",
      description: "Private cruise bookings on traditional wooden houseboats traversing Kumarakom & Alleppey backwaters.",
      iconType: "houseboat",
      features: [
        "Private charters for families and corporate events",
        "Onboard professional chef preparing local delicacies",
        "Scenic guided day-trips & overnight cruise routes",
        "Air-conditioned premium deluxe rooms & sun decks"
      ],
      inclusions: "Private Vessel Charter + Onboard Meals + Cruise Tour"
    },
    {
      id: "stay-groups",
      title: "Group Stays & Bulk Room Allocations",
      category: "Group Departures",
      description: "Meticulous room blocks and custom stay coordination for family events, corporate groups, and tour groups.",
      iconType: "group",
      features: [
        "Specialized bulk bookings and discount benefits",
        "Dedicated destination manager for group check-in",
        "Event space reservations and customized meal plans",
        "Flexible group cancellation & allocation schemes"
      ],
      inclusions: "Bulk Allocations + Dedicated Event Coordination"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const renderIcon = (type: "resort" | "hotel" | "houseboat" | "group") => {
    switch (type) {
      case "resort":
        return <Bed className="w-8 h-8" />;
      case "hotel":
        return <Hotel className="w-8 h-8" />;
      case "houseboat":
        return <Ship className="w-8 h-8" />;
      case "group":
        return <Briefcase className="w-8 h-8" />;
      default:
        return <Bed className="w-8 h-8" />;
    }
  };

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
              Premium Stays // Local & International
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary-950 leading-[0.95] tracking-tighter">
              Resort & Hotel Services <br />
              <span className="serif-italic font-normal font-serif text-teal-650 italic lowercase">
                tailored accommodation bookings for standard luxury and family getaways
              </span>
            </h2>
            <div className="editorial-line-gold w-1/3 mt-6" />
          </div>

          {/* Carousel Control Buttons (mobile/tablet only — desktop shows a full grid) */}
          <div className="flex items-center gap-2 self-end lg:hidden">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stays Carousel (mobile/tablet) — full grid on desktop so every stay type is visible at once */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {stays.map((stay) => {
            const encodedMsg = encodeURIComponent(
              `Hi AirTixHolidays Team, I would like to inquire about booking a stays package for "${stay.title}" (${stay.category}).`
            );
            const waLink = `https://wa.me/${siteConfig.departments.holidays.phoneDial}?text=${encodedMsg}`;

            return (
              <motion.div
                key={stay.id}
                variants={cardVariants}
                className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-500 group flex flex-col justify-between h-full w-[290px] sm:w-[380px] md:w-[420px] lg:w-auto shrink-0 snap-start lg:shrink"
              >
                {/* Stay Card Decorative Header - Replaced image with high-end graphic pattern */}
                <div className="h-44 relative overflow-hidden bg-gradient-to-br from-primary-950 to-primary-900 flex items-center justify-center border-b border-slate-200/20">
                  {/* Decorative background vectors */}
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <pattern id={`stay-pat-${stay.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" className="text-white" />
                      </pattern>
                      <rect width="100%" height="100%" fill={`url(#stay-pat-${stay.id})`} />
                    </svg>
                  </div>
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3.5 py-1.5 rounded-xl text-[9px] font-mono tracking-widest uppercase bg-teal-650 text-white shadow-md">
                      {stay.category}
                    </span>
                  </div>
                  
                  {/* Icon Representation */}
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform duration-500 shadow-inner">
                    {renderIcon(stay.iconType)}
                  </div>
                </div>

                {/* Stay Card Body */}
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-primary-950 mb-3 group-hover:text-teal-650 transition-colors leading-tight">
                      {stay.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-6">
                      {stay.description}
                    </p>

                    {/* Features list */}
                    <ul className="grid grid-cols-1 gap-2.5 mb-6">
                      {stay.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-tight">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-1.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing/Inclusions & WhatsApp Inquiry */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col gap-4 mt-auto">
                    <div>
                      <span className="text-[9px] text-slate-450 uppercase font-black tracking-widest block">
                        Service Scope
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-650 block mt-0.5">
                        {stay.inclusions}
                      </span>
                    </div>

                    <InquireButton href={waLink} fullWidth />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
