"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Menu, X, Phone } from "lucide-react";
import BookingButton from "./BookingButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking a link
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
            ? "bg-[#FAF9F6]/90 backdrop-blur-md border-b border-slate-200/50 py-3.5"
            : "bg-transparent border-b border-white/10 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo - Minimalist Editorial Serif Logotype */}
            <a
              href="#home"
              onClick={(e) => handleNavLinkClick(e, "#home")}
              className="flex items-baseline gap-2 group cursor-pointer"
            >
              <span className={`font-display font-black text-xl md:text-2xl tracking-tighter uppercase transition-colors duration-300 ${
                isScrolled ? "text-primary-950" : "text-white"
              }`}>
                AIRTIX
              </span>
              <span className="serif-italic font-normal font-serif text-gold-500 text-sm lowercase italic select-none">
                holidays
              </span>
            </a>

            {/* Central Masthead Index Label (Desktop only) */}
            <div className="hidden lg:block text-center select-none">
              <span className={`font-mono text-[9px] tracking-[0.25em] font-medium transition-colors duration-300 ${
                isScrolled ? "text-slate-450" : "text-white/40"
              }`}>
                KERALA-GULF DESK // EST. 2026 // VOL. IV
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavLinkClick(e, item.href)}
                  className={`font-semibold text-xs uppercase tracking-widest transition-all duration-200 hover:scale-[1.03] ${
                    isScrolled
                      ? "text-slate-700 hover:text-teal-650"
                      : "text-white/80 hover:text-gold-450"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 font-bold text-xs uppercase tracking-wider transition-colors duration-200 ${
                  isScrolled ? "text-slate-700 hover:text-teal-650" : "text-white/95 hover:text-gold-400"
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
                <span>Help Desk</span>
              </a>
              <BookingButton 
                variant="primary" 
                className={`!px-5 !py-2.5 text-xs font-bold font-mono tracking-wider ${
                  isScrolled ? "shadow-md shadow-slate-200" : "border border-white/20 bg-white/5 hover:bg-white text-white hover:text-primary-950"
                }`} 
                showIcon={false} 
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 focus:outline-none transition-colors duration-300 ${
                isScrolled ? "text-primary-950 hover:text-teal-650" : "text-white hover:text-gold-400"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer - Styled in Editorial Dark Slate */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#030712] text-white pt-28 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            {/* Background design accents for mobile menu */}
            <div className="absolute top-24 left-8 font-mono text-[8px] text-white/20 tracking-[0.3em] uppercase">
              NAVIGATION INDEX
            </div>
            
            {/* Nav Links List */}
            <div className="flex flex-col gap-5 mt-4">
              {siteConfig.navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavLinkClick(e, item.href)}
                  className="font-display font-black text-3xl uppercase tracking-tighter text-white hover:text-gold-400 flex items-center min-h-[54px] border-b border-white/5"
                >
                  <span className="serif-italic font-normal font-serif text-teal-600 text-base mr-3 lowercase italic select-none">
                    0{idx + 1}.
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Contact & Booking Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col gap-4 relative z-10"
            >
              <div className="editorial-line-gold w-full opacity-30" />
              
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-bold py-3.5 px-6 rounded-xl border border-white/10 transition-colors duration-200 min-h-[48px] text-xs font-mono tracking-widest uppercase"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                WhatsApp Assistance
              </a>
              <BookingButton variant="primary" className="w-full py-4 min-h-[48px] text-xs font-mono tracking-widest uppercase" />
              
              <div className="flex justify-between font-mono text-[8px] text-white/20 tracking-wider mt-4">
                <span>GATEWAY V4.0</span>
                <span>CCJ ⇄ DXB ⇄ COK</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
