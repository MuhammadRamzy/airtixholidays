"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion as motionBase, AnimatePresence as AnimatePresenceBase } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Menu, X, Phone, MessageSquare, ChevronDown, Sparkles, Building, Compass, Globe, ArrowRight, Mail } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSupportDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsSupportDropdownOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-sm"
            : "bg-transparent border-b border-white/10 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left alignment space / Editorial Nav */}

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavLinkClick(e, item.href)}
                  className={`font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-200 hover:scale-[1.03] ${
                    isScrolled
                      ? "text-slate-700 hover:text-teal-650"
                      : "text-white/80 hover:text-gold-400"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Support Dropdown Desk */}
            <div className="hidden md:block relative" ref={dropdownRef}>
              <button
                onClick={() => setIsSupportDropdownOpen(!isSupportDropdownOpen)}
                className={`flex items-center gap-2 font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all duration-300 border ${
                  isScrolled
                    ? "bg-primary-950 text-white border-transparent hover:bg-teal-650 hover:scale-[1.02]"
                    : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-primary-950 hover:border-transparent"
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact Desk</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isSupportDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresenceBase>
                {isSupportDropdownOpen && (
                  <motionBase.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-0 top-full mt-3 w-80 bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-100/50 p-5 space-y-4 text-slate-800"
                  >
                    <div className="flex items-center gap-1.5 pb-2 border-b border-slate-100">
                      <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                      <span className="font-mono text-[9px] tracking-widest text-slate-450 uppercase font-extrabold">
                        Direct Desk Routing
                      </span>
                    </div>

                    {/* Department 1: Visas */}
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex justify-between">
                        <span>{siteConfig.departments.visa.role}</span>
                        <span className="text-teal-650 font-normal capitalize">Direct Line</span>
                      </div>
                      <a
                        href={`https://wa.me/${siteConfig.departments.visa.phoneDial}?text=${encodeURIComponent("Hi Asmina, I would like to inquire about Global Visa Services.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 rounded-xl bg-slate-50 hover:bg-teal-50 transition-colors border border-slate-100 hover:border-teal-100 group"
                      >
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-teal-650" />
                          <span className="text-xs font-bold text-slate-700">{siteConfig.departments.visa.name}</span>
                        </div>
                        <span className="text-xs font-mono text-slate-500 group-hover:text-teal-650 font-semibold">{siteConfig.departments.visa.phone}</span>
                      </a>
                    </div>

                    {/* Department 2: Holidays */}
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex justify-between">
                        <span>{siteConfig.departments.holidays.role}</span>
                        <span className="text-teal-650 font-normal capitalize">Direct Line</span>
                      </div>
                      <a
                        href={`https://wa.me/${siteConfig.departments.holidays.phoneDial}?text=${encodeURIComponent("Hi Shahana, I would like to inquire about Holiday Stays and Packages.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 rounded-xl bg-slate-50 hover:bg-teal-50 transition-colors border border-slate-100 hover:border-teal-100 group"
                      >
                        <div className="flex items-center gap-2">
                          <Compass className="w-4 h-4 text-teal-650" />
                          <span className="text-xs font-bold text-slate-700">{siteConfig.departments.holidays.name}</span>
                        </div>
                        <span className="text-xs font-mono text-slate-500 group-hover:text-teal-650 font-semibold">{siteConfig.departments.holidays.phone}</span>
                      </a>
                    </div>

                    {/* Department 3: Flight Booking Sales Team */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Flight Booking & Tickets</span>
                      <div className="grid grid-cols-2 gap-2">
                        {siteConfig.departments.sales.map((rep) => (
                          <a
                            key={rep.name}
                            href={`https://wa.me/${rep.phoneDial}?text=${encodeURIComponent(`Hi ${rep.name}, I would like to book a flight ticket.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-slate-50 hover:bg-teal-50 transition-colors border border-slate-100 hover:border-teal-100 text-left block"
                          >
                            <span className="text-[11px] font-bold text-slate-700 block">{rep.name}</span>
                            <span className="text-[9px] font-mono text-slate-400 block mt-0.5">{rep.phone.replace("+91", "").trim()}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Direct Contact Buttons (WhatsApp & Mail) */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <a
                        href="https://wa.me/919946157771?text=Hi%20AirTixHolidays%20Team%2C%20I%20have%20a%20general%20inquiry."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-mono text-[10px] uppercase tracking-widest font-black py-2.5 rounded-xl transition-colors shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        WhatsApp Support
                      </a>
                      
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-950 text-white font-mono text-[10px] uppercase tracking-widest font-black py-2.5 rounded-xl transition-colors shadow-sm"
                      >
                        <Mail className="w-3.5 h-3.5 text-gold-400" />
                        Email Desk
                      </a>
                    </div>

                    {/* Landline */}
                    <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-slate-550 font-medium">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>Kozhikode Landline:</span>
                      </div>
                      <a href={`tel:${siteConfig.contact.officePhoneDial}`} className="font-mono font-bold text-primary-950 hover:text-teal-650 transition-colors">
                        {siteConfig.contact.officePhone}
                      </a>
                    </div>
                  </motionBase.div>
                )}
              </AnimatePresenceBase>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 focus:outline-none transition-colors duration-300 ${
                isScrolled ? "text-primary-950 hover:text-teal-650" : "text-white hover:text-gold-400"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresenceBase>
        {isMobileMenuOpen && (
          <motionBase.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-2xl text-white pt-24 px-6 flex flex-col justify-between pb-8 lg:hidden overflow-y-auto"
          >
            {/* Background design accents */}
            <div className="absolute inset-0 pointer-events-none opacity-5 overflow-hidden">
              <Compass className="w-[150%] h-[150%] absolute -top-1/4 -right-1/3 text-white" />
            </div>

            {/* Scrollable container for mobile items */}
            <div className="space-y-8 mt-2 relative z-10">
              <div className="flex flex-col gap-3">
                {siteConfig.navItems.map((item, idx) => (
                  <motionBase.a
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavLinkClick(e, item.href)}
                    className="font-display font-black text-2xl uppercase tracking-tighter text-white hover:text-gold-400 flex items-center justify-between min-h-[48px] border-b border-white/5 group transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="serif-italic font-normal font-serif text-gold-500 text-sm mr-3 lowercase italic select-none">
                        0{idx + 1}.
                      </span>
                      {item.label}
                    </div>
                    <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </motionBase.a>
                ))}
              </div>

              {/* Mobile Contact Selector Panel */}
              <div className="space-y-4 bg-slate-900/85 p-5 rounded-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <Sparkles className="w-12 h-12 text-gold-400" />
                </div>
                
                <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-extrabold block mb-2 border-b border-white/5 pb-2">
                  Live Hotline Specialists // 24/7
                </span>
                
                {/* Visa */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/25">
                      <Globe className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <span className="text-[8px] text-slate-400 uppercase block font-bold">Global Visas</span>
                      <span className="font-bold text-xs text-white block -mt-0.5">{siteConfig.departments.visa.name}</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${siteConfig.departments.visa.phoneDial}?text=${encodeURIComponent("Hi Asmina, I need visa assistance.")}`}
                    className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-1.5 px-3 rounded-lg text-[10px] tracking-wider uppercase font-mono transition-colors min-h-[32px]"
                  >
                    Chat Visa
                  </a>
                </div>

                {/* Holidays */}
                <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center border border-gold-500/25">
                      <Compass className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <span className="text-[8px] text-slate-400 uppercase block font-bold">Holidays & Tours</span>
                      <span className="font-bold text-xs text-white block -mt-0.5">{siteConfig.departments.holidays.name}</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${siteConfig.departments.holidays.phoneDial}?text=${encodeURIComponent("Hi Shahana, I'm interested in booking a package.")}`}
                    className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-1.5 px-3 rounded-lg text-[10px] tracking-wider uppercase font-mono transition-colors min-h-[32px]"
                  >
                    Chat Holidays
                  </a>
                </div>

                {/* Sales list */}
                <div className="pt-3 border-t border-white/5">
                  <span className="text-[8px] text-slate-400 uppercase block font-bold mb-2">Flight Tickets & GDS Bookings</span>
                  <div className="grid grid-cols-2 gap-2">
                    {siteConfig.departments.sales.map((rep) => (
                      <a
                        key={rep.name}
                        href={`https://wa.me/${rep.phoneDial}?text=${encodeURIComponent(`Hi ${rep.name}, I want to book a flight ticket.`)}`}
                        className="p-2 rounded-lg bg-white/5 border border-white/5 text-left text-white block hover:bg-white/10 hover:border-white/10 transition-all group"
                      >
                        <span className="text-[10px] font-black block group-hover:text-gold-400 transition-colors">{rep.name}</span>
                        <span className="text-[8px] text-white/40 block font-mono mt-0.5">{rep.phone.replace("+91 ", "")}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons (WhatsApp & Mail) */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5">
                  <a
                    href="https://wa.me/919946157771?text=Hi%20AirTixHolidays%20Team%2C%20I%20have%20a%20general%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-mono text-[9px] uppercase tracking-widest font-black py-2 rounded-lg transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3 h-3" />
                    WhatsApp
                  </a>
                  
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="w-full flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 text-white font-mono text-[9px] uppercase tracking-widest font-black py-2 rounded-lg transition-colors shadow-sm"
                  >
                    <Mail className="w-3 h-3 text-gold-400" />
                    Email
                  </a>
                </div>

                {/* Landline */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-white/60">
                    <Building className="w-3.5 h-3.5 text-white/30" />
                    <span>Office Landline:</span>
                  </div>
                  <a href={`tel:${siteConfig.contact.officePhoneDial}`} className="font-mono font-black text-gold-400 hover:underline">
                    {siteConfig.contact.officePhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-between font-mono text-[8px] text-white/20 tracking-wider pt-4 border-t border-white/5 mt-auto relative z-10">
              <span>AIRTIX HOLIDAYS COK DESK</span>
              <span>EST. 2026</span>
            </div>
          </motionBase.div>
        )}
      </AnimatePresenceBase>
    </>
  );
}
