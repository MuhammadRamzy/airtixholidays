"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the hero (roughly 500px+)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden pointer-events-auto"
        >
          <div className="flex w-full bg-slate-900/95 backdrop-blur-xl rounded-full p-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-white/10">
            {/* Left Button: WhatsApp Live Support */}
            <a
              href={`https://wa.me/${siteConfig.departments.sales[0].phoneDial}?text=${encodeURIComponent("Hi AirTixHolidays Team, I need immediate assistance.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-slate-300 font-bold py-3 px-2 rounded-full text-[11px] font-mono tracking-widest uppercase transition-colors active:bg-white/10"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Support</span>
            </a>

            <div className="w-[1px] bg-white/10 my-2" />

            {/* Right Button: Direct Booking link */}
            <a
              href="#booking-desk"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#booking-desk");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-[1.5] flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-3 px-4 rounded-full text-[11px] font-mono tracking-widest uppercase shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              <span>Book Ticket</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
