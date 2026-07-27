"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Bed, Ship, Compass, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

interface StayData {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  inclusions: string;
  highlights: string[];
}

export default function ResortsHotels() {
  const stays: StayData[] = [
    {
      id: "stay-beach",
      title: "Luxury Beach Resorts & Wellness Stays",
      category: "Beach & Wellness",
      location: "Coastal Destinations",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 240,
      inclusions: "Direct Bookings + Airport Transfers + Custom Spa Packages",
      highlights: ["Clifftop & beachfront property access", "Curated wellness & Ayurvedic treatments", "Infinity pool and sunset lounges", "Strategic partnership discounts"],
    },
    {
      id: "stay-hill",
      title: "Premium Hill Station Resorts & Tea Bungalows",
      category: "Mountain Stays",
      location: "Munnar, Wayanad & GCC Heights",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 190,
      inclusions: "Resort Suites + Guided Plantation Tours + Campfires",
      highlights: ["Misty tea-garden view balconies", "Sunrise valley view boutique cottages", "Guided forest safaris & treks", "Private campfire & barbecue nights"],
    },
    {
      id: "stay-houseboat",
      title: "Traditional Backwater Houseboat Cruise Bookings",
      category: "Houseboats",
      location: "Alleppey & Kumarakom",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 310,
      inclusions: "Private A/C Bedrooms + Onboard Chef + All Meals",
      highlights: ["Traditional wooden craftsmanship", "Full backwater cruise itineraries", "Authentic Kerala traditional meals", "Exclusive family/couple charters"],
    },
    {
      id: "stay-city",
      title: "Star-Class Business & Leisure City Hotels",
      category: "Luxury City Hotels",
      location: "Major GCC & Indian Cities",
      image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 165,
      inclusions: "Luxury Suite Reservations + Airport Shuttle + Breakfast",
      highlights: ["Prime downtown city locations", "Corporate GDS business rate access", "Modern amenities & fitness centers", "Flexible check-in/check-out options"],
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
                tailored stays for standard luxury and family getaways
              </span>
            </h2>
            <div className="editorial-line-gold w-1/3 mt-6" />
          </div>

          {/* Carousel Control Buttons */}
          <div className="flex items-center gap-2 self-end">
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

        {/* Stays Carousel */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
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
                className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-500 group flex flex-col justify-between h-full w-[290px] sm:w-[380px] md:w-[420px] shrink-0 snap-start"
              >
                {/* Stay Card Image Frame */}
                <div className="h-72 sm:h-80 relative overflow-hidden">
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3.5 py-1.5 rounded-xl text-[9px] font-mono tracking-widest uppercase bg-primary-950 text-white border border-white/10 shadow-md">
                      {stay.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 z-10 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/95 text-slate-800 shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                    <span>{stay.rating}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({stay.reviews})</span>
                  </div>
                  <img
                    src={stay.image}
                    alt={stay.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Atmospheric overlay */}
                  <div className="absolute inset-0 bg-primary-950/10 mix-blend-multiply pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Stay Card Body */}
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-teal-650 mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{stay.location}</span>
                    </div>

                    <h3 className="font-display font-black text-xl sm:text-2xl text-primary-950 mb-4 group-hover:text-teal-650 transition-colors leading-tight">
                      {stay.title}
                    </h3>

                    {/* Bullet Highlights */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {stay.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs md:text-sm text-slate-600 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing/Inclusions & WhatsApp Inquiry */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto">
                    <div>
                      <span className="text-[9px] text-slate-450 uppercase font-black tracking-widest block">
                        Included Services
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-650 block mt-0.5 max-w-[280px]">
                        {stay.inclusions}
                      </span>
                    </div>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-teal-50 hover:bg-teal-600 text-teal-650 hover:text-white font-bold py-3 px-5 rounded-xl text-xs md:text-sm tracking-wide transition-all duration-300 min-h-[44px] hover:scale-[1.02]"
                    >
                      <span>Book Stay</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
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
