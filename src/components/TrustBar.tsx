"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp";
import { Calendar, Route, Heart, Plane } from "lucide-react";

export default function TrustBar() {
  const stats = [
    {
      id: "years",
      to: 15,
      suffix: "+",
      label: "Years in Business",
      icon: <Calendar className="w-5 h-5 text-teal-600" />,
      sub: "Trusted operations since 2011",
    },
    {
      id: "routes",
      to: 20,
      suffix: "+",
      label: "Gulf Routes Covered",
      icon: <Route className="w-5 h-5 text-teal-600" />,
      sub: "Connecting Kerala & Middle East",
    },
    {
      id: "customers",
      to: 50,
      suffix: "k+",
      label: "Happy Travellers",
      icon: <Heart className="w-5 h-5 text-teal-600" />,
      sub: "Families & expats served",
    },
    {
      id: "airlines",
      to: 50,
      suffix: "+",
      label: "Airline Partners",
      icon: <Plane className="w-5 h-5 text-teal-600" />,
      sub: "Major international carriers",
    },
  ];
  return (
    <section className="bg-white border-y border-slate-200/80 py-6 md:py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 lg:gap-0 pb-6 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`flex-shrink-0 w-[75vw] sm:w-[45vw] lg:w-auto snap-center flex flex-col items-start text-left lg:px-8 lg:first:pl-0 lg:last:pr-0 ${
                index % 2 === 0 ? "lg:border-none" : ""
              } ${
                index < 3 ? "lg:border-r lg:border-slate-200/80" : ""
              } border border-slate-200/50 lg:border-none rounded-2xl lg:rounded-none p-5 lg:p-0 bg-slate-50 lg:bg-transparent`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="serif-italic font-normal font-serif text-teal-650 text-xs italic select-none">
                  0{index + 1}.
                </span>
                <span className="font-mono text-[9px] tracking-widest text-slate-450 uppercase font-bold">
                  {stat.label}
                </span>
              </div>
              
              <div className="text-4xl md:text-5xl font-display font-black text-primary-950 leading-none tracking-tight">
                <CountUp to={stat.to} suffix={stat.suffix} />
              </div>
              
              <p className="text-xs text-slate-650 mt-3 font-medium leading-relaxed max-w-[200px]">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
