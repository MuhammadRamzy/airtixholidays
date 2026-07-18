"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, MessageSquare, Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-950 border-t border-white/10 text-slate-400 py-20 md:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="flex items-baseline gap-2 group cursor-pointer"
            >
              <span className="font-display font-black text-2xl tracking-tighter uppercase text-white">
                AIRTIX
              </span>
              <span className="serif-italic font-normal font-serif text-gold-500 text-sm lowercase italic select-none">
                holidays
              </span>
            </a>
            
            <p className="text-xs md:text-sm font-medium text-slate-400 leading-relaxed">
              Kerala's premium flights and holiday specialist. Connecting families, tourists, and Gulf expatriates with premium travel solutions since 2011.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-teal-650 hover:text-white border border-white/10 transition-all flex items-center justify-center"
                aria-label="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-teal-650 hover:text-white border border-white/10 transition-all flex items-center justify-center"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-teal-650 hover:text-white border border-white/10 transition-all flex items-center justify-center"
                aria-label="Twitter Link"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-gold-500" />
            </h4>
            <ul className="space-y-3.5 text-xs md:text-sm font-medium">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      if (target) target.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-gold-450 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:text-gold-300 font-semibold"
                >
                  Booking Center →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Destinations */}
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-6 relative">
              Gulf Destinations
              <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-gold-500" />
            </h4>
            <ul className="space-y-3.5 text-xs md:text-sm font-medium">
              <li><a href="#routes" className="hover:text-gold-450 transition-colors">Kochi ⇄ Dubai, UAE</a></li>
              <li><a href="#routes" className="hover:text-gold-450 transition-colors">Kozhikode ⇄ Doha, Qatar</a></li>
              <li><a href="#routes" className="hover:text-gold-450 transition-colors">Trivandrum ⇄ Riyadh, Saudi</a></li>
              <li><a href="#routes" className="hover:text-gold-450 transition-colors">Kochi ⇄ Abu Dhabi, UAE</a></li>
              <li><a href="#routes" className="hover:text-gold-450 transition-colors">Kozhikode ⇄ Muscat, Oman</a></li>
            </ul>
          </div>

          {/* Column 4: Kerala HQ Address & Quick Contacts */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-6 relative">
              Kerala Head Office
              <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-gold-500" />
            </h4>
            
            <ul className="space-y-3 text-xs md:text-sm font-medium">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.contact.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold-450 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            {/* Click-to-call and WhatsApp buttons */}
            <div className="flex flex-col gap-2.5">
              <a
                href={`tel:${siteConfig.contact.phoneDial}`}
                className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold py-2.5 px-4 rounded-xl border border-white/10 transition-colors text-xs font-mono tracking-widest uppercase min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                Call Support: {siteConfig.contact.phone}
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 font-bold py-2.5 px-4 rounded-xl border border-teal-550/20 transition-colors text-xs font-mono tracking-widest uppercase min-h-[44px]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-teal-500" />
                WhatsApp Live Chat
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright area */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
          <p>
            &copy; {new Date().getFullYear()} AirTix. All rights reserved. 
            <span className="block md:inline md:ml-2 text-[10px] text-slate-650">
              (Designed for Kerala/Gulf travel corridor operations)
            </span>
          </p>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] text-slate-650 hidden md:inline">
              GDS SYNC INTERACTION v4.0 // PORT 5432
            </span>
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-teal-650 hover:text-white border border-white/10 transition-all flex items-center gap-1.5 min-h-[38px]"
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
