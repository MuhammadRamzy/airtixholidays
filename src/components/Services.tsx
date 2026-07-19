"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MoonStar, 
  Plane, 
  Ticket, 
  Globe, 
  Palmtree, 
  Briefcase, 
  FileCheck, 
  Hotel, 
  FileText,
  MessageSquare,
  ArrowUpRight
} from "lucide-react";
import { siteConfig } from "@/config/site";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: "hajj-umrah",
      title: "Hajj & Umrah",
      desc: "Complete holy pilgrimage packages with premium hotel stays, visa processing, guided tours, and comfortable transport.",
      icon: <MoonStar className="w-6 h-6 text-teal-650 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: "air-tickets",
      title: "Air Tickets",
      desc: "Priority flight bookings on all domestic and international carriers, specializing in high-demand Kerala-GCC routes.",
      icon: <Plane className="w-6 h-6 text-teal-650 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: "bus-train",
      title: "Bus & Train Tickets",
      desc: "Instant reservation of bus and train tickets across India, ensuring convenient connectivity for your onward journeys.",
      icon: <Ticket className="w-6 h-6 text-teal-650 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: "visit-visa",
      title: "Global Visit Visa",
      desc: "Fast-tracked visa processing and document support for UAE, Qatar, Saudi Arabia, Oman, Europe, UK, and worldwide destinations.",
      icon: <Globe className="w-6 h-6 text-teal-650 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: "holidays",
      title: "Holiday Packages",
      desc: "Bespoke domestic and international holiday itineraries designed for families, honeymooners, and corporate groups.",
      icon: <Palmtree className="w-6 h-6 text-teal-650 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: "emigration",
      title: "Emigration",
      desc: "Hassle-free emigration clearance (POI/ECNR) and documentation support for professionals relocating overseas.",
      icon: <Briefcase className="w-6 h-6 text-teal-650 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: "attestation",
      title: "Certificate Attestation",
      desc: "Secure certificate attestation services (HRD, MEA, Embassy) for educational, marriage, and birth certificates.",
      icon: <FileCheck className="w-6 h-6 text-teal-650 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: "hotel-booking",
      title: "Resort & Hotel Booking",
      desc: "Curated hotel and resort reservations globally, ranging from budget-friendly stays to ultra-luxury beach resorts.",
      icon: <Hotel className="w-6 h-6 text-teal-650 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: "passport",
      title: "Passport Application",
      desc: "Complete assistance for new passport applications, renewals, tatkaal services, and correcting passport errors.",
      icon: <FileText className="w-6 h-6 text-teal-650 group-hover:scale-110 transition-transform duration-300" />
    }
  ];

  // Framer Motion staggered variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="5%" y1="10%" x2="95%" y2="90%" stroke="#eab308" strokeWidth="1" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
            Our Offerings // Full Expat & Leisure Suite
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary-950 leading-[0.95] tracking-tighter">
            Services We Provide <br />
            <span className="serif-italic font-normal font-serif text-teal-650 italic lowercase">
              everything you need, from documentation to destination
            </span>
          </h2>
          <div className="editorial-line-gold w-1/3 mt-6" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            // Build a WhatsApp message URL specific to this service
            const encodedMsg = encodeURIComponent(
              `Hi AirTixHoliday Team, I am interested in inquiring about your "${service.title}" service.`
            );
            const waLink = `https://wa.me/919947257771?text=${encodedMsg}`;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="relative bg-white border border-slate-200/70 rounded-2xl p-6 md:p-8 flex flex-col justify-between group hover:border-teal-650/45 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
              >
                {/* Decorative index and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100 group-hover:bg-teal-650/10 group-hover:border-teal-650/20 transition-colors">
                    {service.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-gold-500/50 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-black text-lg md:text-xl text-primary-950 mb-3 group-hover:text-teal-650 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Quick WhatsApp Inquiry Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                    Available Live
                  </span>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    <span>Inquire</span>
                    <MessageSquare className="w-3.5 h-3.5 text-teal-500 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
