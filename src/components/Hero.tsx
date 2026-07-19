"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Plane, ArrowRight, Sparkles, Calendar, Globe, ChevronDown, MessageSquare, ShieldCheck, MapPin } from "lucide-react";
import BookingButton from "./BookingButton";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"flights" | "visas" | "holidays">("flights");
  
  // Flight form state
  const [origin, setOrigin] = useState("CCJ");
  const [destination, setDestination] = useState("DXB");
  const [passengers, setPassengers] = useState("1");
  const [classType, setClassType] = useState("Economy");

  // Visa form state
  const [visaCountry, setVisaCountry] = useState("United Arab Emirates (UAE)");
  
  // Holiday form state
  const [holidayType, setHolidayType] = useState("Premium Alleppey Houseboat Cruise");

  const handleScrollToPackages = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#packages");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getWhatsAppLink = () => {
    if (activeTab === "flights") {
      const msg = `Hi AirTix Holidays, I would like to check ticket fares and availability from ${origin} to ${destination} for ${passengers} passenger(s) (${classType} class).`;
      return `https://wa.me/${siteConfig.departments.sales[0].phoneDial}?text=${encodeURIComponent(msg)}`;
    } else if (activeTab === "visas") {
      const msg = `Hi AirTix Holidays, I'm looking for visit visa processing and assistance for ${visaCountry}. Please share the requirements and details.`;
      return `https://wa.me/${siteConfig.departments.visa.phoneDial}?text=${encodeURIComponent(msg)}`;
    } else {
      const msg = `Hi AirTix Holidays, I want to inquire about a holiday package for ${holidayType}. Please send itineraries and details.`;
      return `https://wa.me/${siteConfig.departments.holidays.phoneDial}?text=${encodeURIComponent(msg)}`;
    }
  };

  const getActionText = () => {
    if (activeTab === "flights") return "Send Ticket Query on WhatsApp";
    if (activeTab === "visas") return "Inquire Visa Requirements on WhatsApp";
    return "Request Holiday Plan on WhatsApp";
  };

  // Staggered animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-primary-950 text-white pt-28 pb-20 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hero-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
        </svg>
      </div>

      {/* Decorative colored glow circles */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetric Editorial copy */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left flex flex-col items-start"
          >
            {/* Trust Chip & Fine Line */}
            <motion.div variants={itemVariants} className="w-full mb-6">
              <div className="inline-flex items-center gap-2.5 text-xs md:text-sm font-semibold tracking-widest text-gold-400 uppercase mb-3">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Kerala's Premier Flight & Holiday Partner</span>
              </div>
              <div className="h-[1px] bg-gradient-to-r from-gold-500/50 to-transparent w-3/4" />
            </motion.div>

            {/* Title */}
            <motion.h1 variants={itemVariants} className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter mb-6 text-white">
              Connecting <br />
              <span className="serif-italic font-normal text-gold-400 font-serif lowercase italic tracking-normal block my-1">
                kerala
              </span> 
              with your Gulf family.
            </motion.h1>

            {/* Geographic Marker coordinates for Kerala and Middle East */}
            <motion.div variants={itemVariants} className="flex gap-6 mb-6 font-mono text-[10px] text-slate-550 tracking-wider">
              <div>
                <span className="text-gold-500/80 block font-bold">CCJ / COK / TRV</span>
                <span>Kozhikode / Kochi / Trivandrum</span>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <span className="text-teal-450 block font-bold">DXB / DOH / MCT / RUH</span>
                <span>UAE / Qatar / Oman / Saudi</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-350 font-medium max-w-xl leading-relaxed mb-8">
              Premium travel portal for global expatriates. Secure immediate low-fare flight ticketing, fast-tracked visit visas, and curated family holiday packages.
            </motion.p>

            {/* Trust features */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8 max-w-md w-full">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-teal-500" />
                <span>MKTA & TASK ACCREDITED</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-teal-500" />
                <span>24/7 GULF HELPLINE DESK</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 w-full">
              <BookingButton variant="primary" className="!px-10 !py-4.5 text-sm shadow-2xl shadow-gold-500/10 hover:scale-[1.02] transition-transform" />
              <a
                href="#packages"
                onClick={handleScrollToPackages}
                className="inline-flex items-center justify-center font-display font-bold border-b-2 border-white/20 hover:border-white text-white py-2 text-xs tracking-widest transition-all uppercase group"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-4 h-4 ml-2.5 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: High Fidelity Interactive Booking Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
              {/* Header inside Widget */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-widest text-slate-350 font-bold uppercase">
                    AIRTIX LIVE BOOKING DESK
                  </span>
                </div>
                <span className="text-[9px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded uppercase">
                  GDS Active
                </span>
              </div>

              {/* Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-white/5 p-1 rounded-xl mb-6">
                {[
                  { id: "flights", label: "Flights", icon: Plane },
                  { id: "visas", label: "Visas", icon: Globe },
                  { id: "holidays", label: "Holidays", icon: Calendar }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all ${
                        isActive 
                          ? "bg-gold-500 text-slate-950 shadow" 
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Form Content Container with AnimatePresence */}
              <div className="min-h-[220px]">
                <AnimatePresence mode="wait">
                  {activeTab === "flights" && (
                    <motion.div
                      key="flights-form"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* Origin & Destination Select */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Origin (Kerala)</label>
                          <div className="relative">
                            <select 
                              value={origin} 
                              onChange={(e) => setOrigin(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                            >
                              <option className="bg-slate-950 text-white" value="Kozhikode (CCJ)">Kozhikode (CCJ)</option>
                              <option className="bg-slate-950 text-white" value="Kochi (COK)">Kochi (COK)</option>
                              <option className="bg-slate-950 text-white" value="Trivandrum (TRV)">Trivandrum (TRV)</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                          </div>
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Destination (Gulf)</label>
                          <div className="relative">
                            <select 
                              value={destination} 
                              onChange={(e) => setDestination(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                            >
                              <option className="bg-slate-950 text-white" value="Dubai (DXB)">Dubai (DXB)</option>
                              <option className="bg-slate-950 text-white" value="Doha (DOH)">Doha (DOH)</option>
                              <option className="bg-slate-950 text-white" value="Muscat (MCT)">Muscat (MCT)</option>
                              <option className="bg-slate-950 text-white" value="Riyadh (RUH)">Riyadh (RUH)</option>
                              <option className="bg-slate-950 text-white" value="Jeddah (JED)">Jeddah (JED)</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Passengers & Class Select */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Passengers</label>
                          <div className="relative">
                            <select 
                              value={passengers} 
                              onChange={(e) => setPassengers(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                            >
                              <option className="bg-slate-950 text-white" value="1">1 Passenger</option>
                              <option className="bg-slate-950 text-white" value="2">2 Passengers</option>
                              <option className="bg-slate-950 text-white" value="3">3 Passengers</option>
                              <option className="bg-slate-950 text-white" value="4">4 Passengers</option>
                              <option className="bg-slate-950 text-white" value="5+">5+ Passengers</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                          </div>
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Travel Class</label>
                          <div className="relative">
                            <select 
                              value={classType} 
                              onChange={(e) => setClassType(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                            >
                              <option className="bg-slate-950 text-white" value="Economy">Economy</option>
                              <option className="bg-slate-950 text-white" value="Premium Eco">Premium Eco</option>
                              <option className="bg-slate-950 text-white" value="Business">Business</option>
                              <option className="bg-slate-950 text-white" value="First Class">First Class</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Flight connection preview arc */}
                      <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center justify-between text-xs text-slate-350">
                        <div className="flex items-center gap-1.5 font-bold">
                          <MapPin className="w-3.5 h-3.5 text-gold-500" />
                          <span>{origin.split(" ")[1] || origin}</span>
                        </div>
                        <div className="flex-1 px-4 border-t border-dashed border-slate-700 relative mx-2">
                          <Plane className="w-3.5 h-3.5 text-teal-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                        </div>
                        <div className="flex items-center gap-1.5 font-bold">
                          <MapPin className="w-3.5 h-3.5 text-teal-500" />
                          <span>{destination.split(" ")[1] || destination}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "visas" && (
                    <motion.div
                      key="visas-form"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Destination Country</label>
                        <div className="relative">
                          <select 
                            value={visaCountry} 
                            onChange={(e) => setVisaCountry(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                          >
                            <option className="bg-slate-950 text-white" value="United Arab Emirates (UAE)">United Arab Emirates (UAE)</option>
                            <option className="bg-slate-950 text-white" value="Saudi Arabia (Tourist/Umrah)">Saudi Arabia (Tourist/Umrah)</option>
                            <option className="bg-slate-950 text-white" value="Qatar">Qatar (Hayya Visa)</option>
                            <option className="bg-slate-950 text-white" value="Oman">Oman</option>
                            <option className="bg-slate-950 text-white" value="Europe (Schengen)">Europe (Schengen)</option>
                            <option className="bg-slate-950 text-white" value="United Kingdom (UK)">United Kingdom (UK)</option>
                            <option className="bg-slate-950 text-white" value="Southeast Asia (Malaysia/Thailand)">Southeast Asia (Malaysia/Thailand)</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-2 text-xs text-left">
                        <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">Visa Division Service Pledge</span>
                        <p className="text-slate-350 leading-normal">
                          Full documentation checks, health insurance registration, bio-metric appointment scheduling, and express processing support managed by Asmina (Visa Dept).
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "holidays" && (
                    <motion.div
                      key="holidays-form"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Holiday Package Focus</label>
                        <div className="relative">
                          <select 
                            value={holidayType} 
                            onChange={(e) => setHolidayType(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                          >
                            <option className="bg-slate-950 text-white" value="Premium Alleppey Houseboat Cruise">Premium Alleppey Houseboat Cruise</option>
                            <option className="bg-slate-950 text-white" value="Munnar Mist Valley Hill Resort stay">Munnar Mist Valley Hill Resort Stay</option>
                            <option className="bg-slate-950 text-white" value="Wayanad Canopy Pool Villa Holiday">Wayanad Canopy Pool Villa Holiday</option>
                            <option className="bg-slate-950 text-white" value="Premium 5-Star Umrah Package">Premium 5-Star Umrah Package</option>
                            <option className="bg-slate-950 text-white" value="Deluxe Malaysia/Thailand Holiday">Deluxe Malaysia/Thailand Holiday</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-2 text-xs text-left">
                        <span className="text-[10px] font-bold text-gold-400 uppercase tracking-wider block">Custom Family Itineraries</span>
                        <p className="text-slate-350 leading-normal">
                          Direct transfers, premium hotel rooms, custom sightseeing activities, and regional Kerala food coordinators managed by Shahana (Holidays Dept).
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Button: Book/Inquire via WhatsApp */}
              <div className="mt-6">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-emerald-650 hover:bg-emerald-700 text-white font-bold py-4 px-4 rounded-xl shadow-lg transition-colors text-xs font-mono uppercase tracking-wider min-h-[48px]"
                >
                  <MessageSquare className="w-4.5 h-4.5" />
                  <span>{getActionText()}</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Editorial line transitions */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-10" />
    </section>
  );
}
