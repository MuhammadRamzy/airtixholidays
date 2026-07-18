"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

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
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-full px-8 py-3.5 text-sm md:text-base relative overflow-hidden tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary:
      "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-primary-950 shadow-lg shadow-gold-500/25 focus:ring-gold-500",
    secondary:
      "bg-teal-500 hover:bg-teal-400 text-white shadow-lg shadow-teal-500/20 focus:ring-teal-500",
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
        Book Tickets Now
        {showIcon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
      
      {/* Reusable pulsing ambient ring in the background */}
      {variant === "primary" && (
        <span className="absolute -inset-1 rounded-full bg-gold-500/20 blur opacity-70 group-hover:opacity-100 animate-pulse -z-10" />
      )}
    </motion.a>
  );
}
