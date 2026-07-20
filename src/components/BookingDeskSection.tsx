"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Calendar, Globe, ChevronDown, MessageSquare, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function BookingDeskSection() {
  const [activeTab, setActiveTab] = useState<"flights" | "visas" | "holidays">("flights");
  
  // Flight form state
  const [origin, setOrigin] = useState("Kozhikode (CCJ)");
  const [destination, setDestination] = useState("Dubai (DXB)");
  const [passengers, setPassengers] = useState("1");
  const [classType, setClassType] = useState("Economy");

  // Visa form state
  const [visaCountry, setVisaCountry] = useState("United Arab Emirates (UAE)");
  
  // Holiday form state
  const [holidayType, setHolidayType] = useState("Domestic Kerala Family Tour");

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

  return (
    <section id="booking-desk" className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Background design accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-teal-650 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
            Live GDS Query Desk // Instant WhatsApp Fares
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-primary-950 uppercase tracking-tight mb-4">
            Route Your Enquiry Directly
          </h2>
          <p className="text-sm sm:text-base text-slate-650 font-medium max-w-2xl mx-auto leading-relaxed">
            Select your division, enter your travel parameters, and connect instantly with our specialized department desk to secure current pricing.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-white/5">
          {/* Status Indicator */}
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
                      ? "bg-gold-50 text-slate-950 shadow" 
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Content Container */}
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              {activeTab === "flights" && (
                <motion.div
                  key="flights-form-desk"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Origin (Kerala)</label>
                      <div className="relative">
                        <select 
                          value={origin} 
                          onChange={(e) => setOrigin(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                        >
                          <option className="bg-slate-950 text-white" value="Kozhikode (CCJ)">Kozhikode (CCJ)</option>
                          <option className="bg-slate-950 text-white" value="Kochi (COK)">Kochi (COK)</option>
                          <option className="bg-slate-950 text-white" value="Trivandrum (TRV)">Trivandrum (TRV)</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Destination (Gulf)</label>
                      <div className="relative">
                        <select 
                          value={destination} 
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                        >
                          <option className="bg-slate-950 text-white" value="Dubai (DXB)">Dubai (DXB)</option>
                          <option className="bg-slate-950 text-white" value="Doha (DOH)">Doha (DOH)</option>
                          <option className="bg-slate-950 text-white" value="Muscat (MCT)">Muscat (MCT)</option>
                          <option className="bg-slate-950 text-white" value="Riyadh (RUH)">Riyadh (RUH)</option>
                          <option className="bg-slate-950 text-white" value="Jeddah (JED)">Jeddah (JED)</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Passengers</label>
                      <div className="relative">
                        <select 
                          value={passengers} 
                          onChange={(e) => setPassengers(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                        >
                          <option className="bg-slate-950 text-white" value="1">1 Passenger</option>
                          <option className="bg-slate-950 text-white" value="2">2 Passengers</option>
                          <option className="bg-slate-950 text-white" value="3">3 Passengers</option>
                          <option className="bg-slate-950 text-white" value="4">4 Passengers</option>
                          <option className="bg-slate-950 text-white" value="5+">5+ Passengers</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Travel Class</label>
                      <div className="relative">
                        <select 
                          value={classType} 
                          onChange={(e) => setClassType(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                        >
                          <option className="bg-slate-950 text-white" value="Economy">Economy</option>
                          <option className="bg-slate-950 text-white" value="Premium Eco">Premium Eco</option>
                          <option className="bg-slate-950 text-white" value="Business">Business</option>
                          <option className="bg-slate-950 text-white" value="First Class">First Class</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center justify-between text-xs text-slate-350">
                    <div className="flex items-center gap-1.5 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-gold-500" />
                      <span>{origin.split(" ")[0]}</span>
                    </div>
                    <div className="flex-1 px-4 border-t border-dashed border-slate-700 relative mx-2">
                      <Plane className="w-3.5 h-3.5 text-teal-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                    </div>
                    <div className="flex items-center gap-1.5 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-teal-500" />
                      <span>{destination.split(" ")[0]}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "visas" && (
                <motion.div
                  key="visas-form-desk"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Destination Country</label>
                    <div className="relative">
                      <select 
                        value={visaCountry} 
                        onChange={(e) => setVisaCountry(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                      >
                        <option className="bg-slate-950 text-white" value="United Arab Emirates (UAE)">United Arab Emirates (UAE)</option>
                        <option className="bg-slate-950 text-white" value="Saudi Arabia (Tourist/Umrah)">Saudi Arabia (Tourist/Umrah)</option>
                        <option className="bg-slate-950 text-white" value="Qatar">Qatar (Hayya Visa)</option>
                        <option className="bg-slate-950 text-white" value="Oman">Oman</option>
                        <option className="bg-slate-950 text-white" value="Europe (Schengen)">Europe (Schengen)</option>
                        <option className="bg-slate-950 text-white" value="United Kingdom (UK)">United Kingdom (UK)</option>
                        <option className="bg-slate-950 text-white" value="Southeast Asia (Malaysia/Thailand)">Southeast Asia (Malaysia/Thailand)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
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
                  key="holidays-form-desk"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Service Category Interest</label>
                    <div className="relative">
                      <select 
                        value={holidayType} 
                        onChange={(e) => setHolidayType(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                      >
                        <option className="bg-slate-950 text-white" value="Domestic Kerala Family Tour">Domestic Kerala Family Tour</option>
                        <option className="bg-slate-950 text-white" value="Hajj & Umrah Pilgrimage Service">Hajj & Umrah Pilgrimage Service</option>
                        <option className="bg-slate-950 text-white" value="International Leisure Holiday">International Leisure Holiday</option>
                        <option className="bg-slate-950 text-white" value="Custom Flight & Hotel Booking">Custom Flight & Hotel Booking</option>
                        <option className="bg-slate-950 text-white" value="Corporate or Group Package">Corporate or Group Package</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
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

          {/* Action Button: WhatsApp inquiry */}
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
      </div>
    </section>
  );
}
