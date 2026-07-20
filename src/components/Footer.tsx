"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, MapPin, MessageSquare, Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-950 border-t border-white/5 text-slate-400 relative z-20">
      
      {/* 1. Hero Map & Contact Card Wrapper */}
      <div className="relative w-full">
        {/* Interactive Map */}
        <div className="relative w-full h-[250px] md:h-[500px] overflow-hidden border-b border-white/5">
          <iframe
            title="AirTix Head Office Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=11.689523,75.666240+(AirTix%20Holidays)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 w-full h-full object-cover absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-transparent to-primary-950 pointer-events-none z-10" />
        </div>
        
        {/* Docked (Mobile) / Floating (Desktop) Contact Card */}
        <div className="relative -mt-12 mb-8 md:mt-0 md:mb-0 md:absolute md:bottom-10 md:left-10 lg:left-1/2 lg:-translate-x-1/2 max-w-4xl w-full z-20 px-4 md:px-0 mx-auto">
          <div className="bg-[#0f0f13] md:bg-black/60 backdrop-blur-xl border border-red-600/20 shadow-2xl shadow-red-900/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            
            {/* Address */}
            <div className="flex-1 flex gap-4 items-start w-full">
              <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-lg uppercase tracking-wide mb-1">
                  Our Office
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  {siteConfig.contact.address}
                </p>
                <a 
                  href="https://maps.app.goo.gl/s7mAHo8UWX4oBeLZ6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-red-500 hover:text-red-400 text-xs font-bold uppercase tracking-widest transition-colors group"
                >
                  Open in Google Maps <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto min-w-[240px]">
              <a
                href={`tel:${siteConfig.contact.officePhoneDial}`}
                className="w-full flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-bold py-3 px-5 rounded-xl border border-white/10 transition-colors text-xs font-mono tracking-widest uppercase"
              >
                <Phone className="w-4 h-4 text-red-500" />
                {siteConfig.contact.officePhone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.departments.sales[0].phoneDial}?text=${encodeURIComponent("Hi AirTixHolidays Team, I am interested in booking a flight ticket.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex-1 flex items-center justify-center gap-3 bg-red-600/10 hover:bg-red-600/20 text-red-400 font-bold py-3 px-5 rounded-xl border border-red-500/20 transition-colors text-xs font-mono tracking-widest uppercase"
              >
                <MessageSquare className="w-4 h-4 text-red-500" />
                Live Support
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Full-Width Logo Banner */}
      <div className="w-full bg-white/95 border-y border-slate-200 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="inline-block group cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="AirTix Holidays"
              className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-[1.02] origin-left"
            />
          </a>
        </div>
      </div>

      {/* 3. Editorial Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Text Column */}
          <div className="md:col-span-5 space-y-6">
            
            <p className="text-sm md:text-base font-medium text-slate-400 leading-relaxed max-w-md">
              Kerala's premium flights and holiday specialist. Connecting families, tourists, and Gulf expatriates with premium travel solutions since 2011.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-red-600 hover:text-white border border-white/10 transition-all flex items-center justify-center" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-red-600 hover:text-white border border-white/10 transition-all flex items-center justify-center" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-red-600 hover:text-white border border-white/10 transition-all flex items-center justify-center" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core Services List (Complete Signboard Mapping) */}
            <div>
              <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-6 relative">
                Our Services
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-red-600" />
              </h4>
              <ul className="space-y-3.5 text-xs font-medium text-slate-300">
                {siteConfig.servicesList.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.querySelector("#services");
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="hover:text-red-400 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-red-600/50" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Departments */}
            <div className="col-span-2 lg:col-span-2">
              <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-6 relative">
                Direct WhatsApp Desks
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-red-600" />
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4 text-sm font-medium">
                  <a href={`https://wa.me/${siteConfig.departments.visa.phoneDial}`} target="_blank" rel="noopener noreferrer" className="block hover:text-red-400 transition-colors bg-white/5 border border-white/5 rounded-xl p-3">
                    <span className="block text-[10px] text-red-500 tracking-wider uppercase mb-1">Visa Processing</span>
                    <span className="flex justify-between items-center text-white">
                      {siteConfig.departments.visa.name}
                      <span className="font-mono text-xs text-slate-500 group-hover:text-red-400">{siteConfig.departments.visa.phone}</span>
                    </span>
                  </a>
                  <a href={`https://wa.me/${siteConfig.departments.holidays.phoneDial}`} target="_blank" rel="noopener noreferrer" className="block hover:text-red-400 transition-colors bg-white/5 border border-white/5 rounded-xl p-3">
                    <span className="block text-[10px] text-red-500 tracking-wider uppercase mb-1">Holiday Packages</span>
                    <span className="flex justify-between items-center text-white">
                      {siteConfig.departments.holidays.name}
                      <span className="font-mono text-xs text-slate-500">{siteConfig.departments.holidays.phone}</span>
                    </span>
                  </a>
                </div>
                
                <div className="space-y-4 text-sm font-medium">
                  <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                    <span className="block text-[10px] text-red-500 tracking-wider uppercase mb-3">Flight Booking Desk</span>
                    <ul className="space-y-3">
                      {siteConfig.departments.sales.map((rep) => (
                        <li key={rep.name}>
                          <a href={`https://wa.me/${rep.phoneDial}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 text-white flex justify-between items-center transition-colors">
                            {rep.name}
                            <span className="font-mono text-xs text-slate-500">{rep.phone.replace("+91", "").trim()}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
          <p>
            &copy; {new Date().getFullYear()} AirTix. All rights reserved. 
            <span className="block md:inline md:ml-2 text-[10px] text-slate-600">
              (Designed for Kerala/Gulf travel corridor operations)
            </span>
          </p>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] text-slate-600 hidden md:inline tracking-widest uppercase">
              GDS SYNC INTERACTION v4.0
            </span>
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="p-3 rounded-full bg-white/5 hover:bg-red-600 hover:text-white border border-white/10 transition-all flex items-center gap-2"
              aria-label="Scroll to top"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
