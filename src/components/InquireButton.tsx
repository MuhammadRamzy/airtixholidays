"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";

interface InquireButtonProps {
  href: string;
  label?: string;
  className?: string;
  fullWidth?: boolean;
}

export default function InquireButton({
  href,
  label = "Enquire Now",
  className = "",
  fullWidth = false,
}: InquireButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/30 transition-all duration-300 min-h-[44px] ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      <MessageCircle className="w-4 h-4 flex-shrink-0" />
      <span>{label}</span>
      <ArrowUpRight className="w-3.5 h-3.5 opacity-70 flex-shrink-0" />
    </motion.a>
  );
}
