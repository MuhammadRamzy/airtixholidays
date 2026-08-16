"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, CheckCircle2, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import InquireButton from "./InquireButton";
import { Cloud, Birds } from "./decor/SkyBackdrop";

interface VisaData {
  id: string;
  country: string;
}

export default function VisaServices() {
  const visas: VisaData[] = [
    { id: "visa-uae", country: "United Arab Emirates (UAE)" },
    { id: "visa-saudi", country: "Saudi Arabia (Tourist & Umrah)" },
    { id: "visa-qatar", country: "Qatar Visa & Hayya Assistance" },
    { id: "visa-oman", country: "Oman Tourist Visa" },
    { id: "visa-schengen", country: "Europe (Schengen) & UK Assistance" },
    { id: "visa-southeast", country: "Malaysia, Thailand & Singapore" },
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

      {/* Sky story: distant birds crossing borders, a cloud drifting past */}
      <Birds className="absolute top-16 left-[12%] w-20 opacity-70 hidden lg:block" />
      <Cloud className="absolute bottom-6 right-[4%] w-44 sm:w-56 opacity-[0.35] hidden md:block" duration={30} flip />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 lg:mb-12"
        >
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
        </motion.div>

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

          {/* Right Column: Visa Packages Grid / Carousel */}
          <div className="lg:col-span-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-6 pb-6 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
                    className="flex-shrink-0 w-[85vw] sm:w-[350px] lg:w-auto snap-center bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between group hover:border-teal-650/45 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-4">
                        <Globe className="w-5 h-5 text-slate-350 group-hover:text-teal-600 transition-colors" />
                      </div>

                      <h3 className="font-display font-black text-lg text-primary-950 mb-2 leading-tight">
                        {visa.country}
                      </h3>

                      <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                        Documentation support and visa processing assistance. Contact our visa team for current requirements and timelines.
                      </p>
                    </div>

                    {/* WhatsApp Action Button */}
                    <InquireButton href={waLink} fullWidth />
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
