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
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-2xl px-4 py-3 md:hidden flex items-center justify-between gap-3 safe-bottom pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        >
          {/* Left Button: WhatsApp Live Support */}
          <a
            href={`https://wa.me/${siteConfig.departments.sales[0].phoneDial}?text=${encodeURIComponent("Hi AirTixHolidays Team, I need immediate assistance.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-full text-xs transition-colors border border-slate-200 min-h-[44px]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
            WhatsApp HELP
          </a>

          {/* Right Button: Direct Booking link */}
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-gold-500 to-gold-600 text-primary-950 font-display font-black py-3 rounded-full text-xs shadow-md shadow-gold-500/10 min-h-[44px]"
          >
            BOOK TICKETS
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
