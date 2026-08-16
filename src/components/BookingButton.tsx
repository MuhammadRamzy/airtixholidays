"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ArrowRight, Plane } from "lucide-react";

interface BookingButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  showIcon?: boolean;
}

export default function BookingButton({
  className = "",
  variant = "primary",
  showIcon = true,
}: BookingButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-150 ease-out rounded-full px-8 py-3.5 text-sm md:text-base relative overflow-hidden tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 group";
  
  const variants = {
    primary:
      "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] border border-red-500/50 focus:ring-red-600",
    secondary:
      "bg-slate-900 hover:bg-slate-800 border border-white/10 text-white shadow-lg shadow-black/50 focus:ring-slate-700",
    outline:
      "border-2 border-white/30 bg-white/5 text-white hover:bg-white hover:text-primary-950 focus:ring-white",
  };

  return (
    <div className="relative group inline-block">
      {/* Static halo for primary button (removed infinite pulse) */}
      {variant === "primary" && (
        <div className="absolute -inset-1.5 bg-red-600/30 rounded-full blur-lg -z-10" />
      )}

      <motion.a
        href={siteConfig.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <span className="relative z-10 flex items-center gap-2">
          {variant === "primary" && (
            <Plane className="w-5 h-5 mr-1" />
          )}
          <span className="font-black tracking-widest uppercase">Book Tickets Now</span>
          {showIcon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
        </span>
      </motion.a>
    </div>
  );
}
