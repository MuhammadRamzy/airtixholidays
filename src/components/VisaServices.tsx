"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, FileCheck, CheckCircle2, MessageSquare, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

interface VisaData {
  id: string;
  country: string;
  duration: string;
  processingTime: string;
  requirements: string[];
  badge: string;
}

export default function VisaServices() {
  const visas: VisaData[] = [
    {
      id: "visa-uae",
      country: "United Arab Emirates (UAE)",
      duration: "14 / 30 / 60 Days Single & Multi-Entry",
      processingTime: "24 - 48 Hours Express",
      requirements: ["Passport Scan (6-Month Validity)", "White Background Passport Photo", "Onward Flight Booking"],
      badge: "Express Processing",
    },
    {
      id: "visa-saudi",
      country: "Saudi Arabia (Tourist & Umrah)",
      duration: "90 Days Multi-Entry / 1-Year Validity",
      processingTime: "1 - 3 Working Days",
      requirements: ["Passport Scan", "Passport Photo", "Valid Health Insurance", "Umrah Intentions Clearance"],
      badge: "Umrah Ready",
    },
    {
      id: "visa-qatar",
      country: "Qatar Visa & Hayya Assistance",
      duration: "30 Days Tourist Visa",
      processingTime: "2 - 4 Working Days",
      requirements: ["Passport Scan", "Passport Photo", "Confirmed Hotel Reservation", "Return Flight Ticket"],
      badge: "Popular GCC",
    },
    {
      id: "visa-oman",
      country: "Oman Tourist Visa",
      duration: "10 / 30 Days E-Visa",
      processingTime: "24 - 72 Hours",
      requirements: ["Passport Scan", "Passport Photo", "Gulf Country Resident Card (if applicable)"],
      badge: "GCC Resident Special",
    },
    {
      id: "visa-schengen",
      country: "Europe (Schengen) & UK Assistance",
      duration: "Short-stay Tourist & Business Visas",
      processingTime: "10 - 15 Working Days",
      requirements: ["Original Passport", "No Objection Certificate (NOC)", "6-Month Bank Statements", "Detailed Travel Itinerary"],
      badge: "Complete Documentation Support",
    },
    {
      id: "visa-southeast",
      country: "Malaysia, Thailand & Singapore",
      duration: "30 Days Tourist E-Visa",
      processingTime: "2 - 4 Working Days",
      requirements: ["Passport Copy", "Passport Photo", "Proof of Accommodation", "Financial Adequacy Proof"],
      badge: "Holiday Corridor",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="visas" className="py-10 md:py-12 bg-white relative overflow-hidden border-b border-slate-200/60">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90%" cy="10%" r="200" fill="none" stroke="#eab308" strokeWidth="1" strokeDasharray="8 8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
            Global Visa Services // Hassle-Free Documentation
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary-950 leading-[0.95] tracking-tighter">
            Global Visit Visa Assistance <br />
            <span className="serif-italic font-normal font-serif text-teal-650 italic lowercase">
              fast-tracked documentation for the Gulf, Europe, UK & worldwide
            </span>
          </h2>
          <div className="editorial-line-gold w-1/3 mt-6" />
        </div>

        {/* Asymmetric layout with visa list and document check */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: General Visa Inquiries & Document Checklist */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            <div className="bg-[#FAF9F6] border border-slate-200/70 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-display font-black text-lg text-primary-950 uppercase tracking-tight mb-4">
                Common Document Checklist
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-medium leading-relaxed">
                While specific requirements vary by destination, these core documents are required for almost all visit visas:
              </p>
              
              <ul className="space-y-3.5">
                <li className="flex gap-3 items-start text-xs sm:text-sm text-slate-650 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Passport copy with at least 6 months validity from date of travel</span>
                </li>
                <li className="flex gap-3 items-start text-xs sm:text-sm text-slate-650 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Recent passport-size photo (usually white background, matte finish)</span>
                </li>
                <li className="flex gap-3 items-start text-xs sm:text-sm text-slate-650 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Confirmed return flight tickets & premium hotel reservations (AirTix will manage)</span>
                </li>
                <li className="flex gap-3 items-start text-xs sm:text-sm text-slate-650 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>NOC letter or Resident permit copy (where required)</span>
                </li>
              </ul>

              {/* General Visa WhatsApp CTA */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <a
                  href={`https://wa.me/${siteConfig.departments.visa.phoneDial}?text=${encodeURIComponent("Hi AirTixHolidays Team, I'm interested in inquiring about your general visa processing services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-xl transition-colors text-xs font-mono uppercase tracking-wider min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Contact Visa Experts
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visas Grid */}
          <div className="lg:col-span-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {visas.map((visa) => {
                const encodedMsg = encodeURIComponent(
                  `Hi AirTixHolidays Team, I want to inquire about visit visa assistance for "${visa.country}".`
                );
                const waLink = `https://wa.me/${siteConfig.departments.visa.phoneDial}?text=${encodedMsg}`;

                return (
                  <motion.div
                    key={visa.id}
                    variants={itemVariants}
                    className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between group hover:border-teal-650/45 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300"
                  >
                    <div>
                      {/* Badge & Title */}
                      <div className="flex justify-between items-start gap-4 mb-4">
                        <span className="px-2.5 py-1 rounded bg-teal-50 text-teal-700 text-[9px] font-mono font-bold uppercase tracking-wider border border-teal-100">
                          {visa.badge}
                        </span>
                        <Globe className="w-5 h-5 text-slate-350 group-hover:text-teal-600 transition-colors" />
                      </div>

                      <h3 className="font-display font-black text-lg text-primary-950 mb-2 leading-tight">
                        {visa.country}
                      </h3>
                      
                      <div className="mb-4 text-xs font-semibold text-slate-500 font-mono">
                        <div className="mb-0.5">Validity: {visa.duration}</div>
                        <div>Timeframe: {visa.processingTime}</div>
                      </div>

                      {/* Doc check for this specific visa */}
                      <div className="border-t border-slate-100 pt-4 mb-6">
                        <span className="text-[9px] text-slate-400 font-mono uppercase tracking-widest block mb-2">
                          Specific Docs Required
                        </span>
                        <ul className="space-y-1.5">
                          {visa.requirements.map((req, idx) => (
                            <li key={idx} className="flex gap-2 items-start text-xs text-slate-650 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-1.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* WhatsApp Action Button */}
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-slate-50 group-hover:bg-teal-50 text-slate-700 group-hover:text-teal-700 font-bold py-3 rounded-xl border border-slate-200/60 group-hover:border-teal-100 transition-colors text-xs font-mono uppercase tracking-wider min-h-[44px]"
                    >
                      <span>Inquire Visa</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
