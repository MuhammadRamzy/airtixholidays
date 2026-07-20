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
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-full px-8 py-3.5 text-sm md:text-base relative overflow-hidden tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 group";
  
  const variants = {
    primary:
      "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] border border-red-500/50 focus:ring-red-600",
    secondary:
      "bg-slate-900 hover:bg-slate-800 border border-white/10 text-white shadow-lg shadow-black/50 focus:ring-slate-700",
    outline:
      "border-2 border-white/30 bg-white/5 text-white hover:bg-white hover:text-primary-950 focus:ring-white",
  };

  return (
    <motion.a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Subtle pulse/glow element for primary button to draw eyes */}
      {variant === "primary" && (
        <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full hover:animate-none group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {variant === "primary" && <Plane className="w-4 h-4 mr-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />}
        Book Tickets Now
        {showIcon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
      
      {/* Reusable pulsing ambient ring in the background */}
      {variant === "primary" && (
        <span className="absolute -inset-1 rounded-full bg-red-600/30 blur opacity-70 group-hover:opacity-100 animate-pulse -z-10" />
      )}
    </motion.a>
  );
}
