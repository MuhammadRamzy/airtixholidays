"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, CheckCircle2, Compass, Users } from "lucide-react";

export default function AboutUs() {
  const missionPoints = [
    "Offer the best airfare and holiday packages at highly competitive prices.",
    "Support travel agents and individual customers with transparent pricing and dependable service.",
    "Deliver accurate, real-time travel updates, ensuring travelers stay informed about airline schedules, visa regulations, and global travel requirements.",
    "Build long-term relationships through trust, integrity, innovation, and excellence in every journey we create."
  ];

  const visionPoints = [
    "Being the first choice for travel agents and customers seeking the best airfare and travel solutions.",
    "Expanding our global network to provide seamless travel experiences across the world.",
    "Leveraging our collective expertise to create innovative travel products and services.",
    "Empowering travelers and travel partners with timely information, competitive pricing, and exceptional customer support.",
    "Creating a future where every journey begins with confidence, value, and the assurance of professional service."
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className="py-16 md:py-20 bg-[#FAF9F6] relative overflow-hidden border-b border-slate-200/60">
      {/* Editorial layout markings */}
      <div className="absolute top-12 left-12 font-mono text-[9px] text-slate-400 tracking-[0.3em] uppercase hidden lg:block">
        AIRTIX STATEMENT // FOUNDATION & POLICY
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Who We Are & Our Promise */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
                Who We Are // Executive Team
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary-950 leading-[0.95] tracking-tighter">
                AIRTIX <br />
                <span className="serif-italic font-normal font-serif text-teal-650 italic lowercase">
                  holidays
                </span>
              </h2>
            </div>
            
            <div className="editorial-line-gold w-1/3" />

            <p className="text-base text-slate-650 leading-relaxed font-medium">
              At AIRTIX HOLIDAYS, our mission is to redefine the travel experience by delivering reliable, affordable, and professional travel solutions. Founded by four travel professionals with more than 12 years of industry experience, we are committed to providing exceptional value through strategic airline partnerships, bulk ticket procurement, and personalized customer service.
            </p>

            {/* Promise Box - Highly Stylized */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-500" />
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span className="font-mono text-[9px] tracking-widest text-slate-450 uppercase font-bold">
                  Our Direct Promise
                </span>
              </div>
              <blockquote className="font-serif text-xl sm:text-2xl text-primary-950 italic leading-snug">
                "Experience. Value. Trust. Together We Make Every Journey Better."
              </blockquote>
            </div>

            <div className="pt-6 border-t border-slate-200/80 flex items-center gap-4 text-xs font-mono text-slate-400">
              <Users className="w-4 h-4 text-teal-600" />
              <span>FOUNDED BY 4 INDUSTRY VETERANS</span>
            </div>
          </div>

          {/* Right Column: Mission and Vision Cards */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-10"
            >
              
              {/* Mission Section */}
              <motion.div variants={itemVariants} className="bg-white border border-slate-200/70 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100">
                    <Compass className="w-5 h-5 text-teal-650" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 tracking-wider block uppercase">Our Target</span>
                    <h3 className="font-display font-black text-xl text-primary-950 uppercase tracking-tight">
                      Our Mission
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed">
                  We strive to elevate travel standards through structural integrity, pricing transparency, and 24/7 GDS sync and customer support.
                </p>

                <ul className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex gap-3 items-start text-xs sm:text-sm text-slate-650 font-medium leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Vision Section */}
              <motion.div variants={itemVariants} className="bg-white border border-slate-200/70 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center border border-gold-100">
                    <Shield className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 tracking-wider block uppercase">Our Future</span>
                    <h3 className="font-display font-black text-xl text-primary-950 uppercase tracking-tight">
                      Our Vision
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed">
                  To become one of the most trusted and preferred travel companies in India and beyond by setting new standards in affordability, service quality, and travel expertise.
                </p>

                <ul className="space-y-4">
                  {visionPoints.map((point, index) => (
                    <li key={index} className="flex gap-3 items-start text-xs sm:text-sm text-slate-650 font-medium leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

             </motion.div>
          </div>

        </div>

        {/* Managing Directors Section */}
        <div className="mt-12 pt-8 border-t border-slate-200/60">
          <div className="max-w-3xl mb-12">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
              Leadership Team // Board of Directors
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-primary-950 leading-tight">
              Meet Our Managing Directors <br />
              <span className="serif-italic font-normal font-serif text-teal-650 italic lowercase">
                seasoned veterans guiding our operations with trust
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Director 1: MUHAMMED AZHAR AK */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-2 border-gold-500/30 p-1 group-hover:border-gold-500 transition-colors">
                <img
                  src="/directors/MUHAMMED AZHAR AK.png"
                  alt="MUHAMMED AZHAR AK"
                  className="w-full h-full object-cover rounded-full bg-slate-50"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80";
                  }}
                />
              </div>
              <h4 className="font-display font-black text-lg text-primary-950 uppercase tracking-tight mb-1">
                Muhammed Azhar AK
              </h4>
              <span className="text-xs font-mono font-bold text-gold-600 uppercase tracking-wider mb-3 block">
                Managing Director
              </span>
              <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs mb-4">
                Over 14 years of professional experience in AK Travels, Villiapally. A pioneer in strategic airline relationships and bulk fare procurement.
              </p>
              <div className="w-full pt-4 mt-auto border-t border-slate-100 min-h-[60px] text-[11px] text-slate-400 italic font-medium leading-normal">
                Specializes in Gulf corridor routes, bulk ticket acquisition, and corporate relationship building.
              </div>
            </div>

            {/* Director 2: ISHAQ VANIMAL */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-2 border-gold-500/30 p-1 group-hover:border-gold-500 transition-colors">
                <img
                  src="/directors/ISHAQ VANIMAL.png"
                  alt="ISHAQ VANIMAL"
                  className="w-full h-full object-cover rounded-full bg-slate-50"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80";
                  }}
                />
              </div>
              <h4 className="font-display font-black text-lg text-primary-950 uppercase tracking-tight mb-1">
                Ishaq Vanimal
              </h4>
              <span className="text-xs font-mono font-bold text-gold-600 uppercase tracking-wider mb-3 block">
                Managing Director
              </span>
              <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs mb-4">
                Over 13 years of professional experience in Flyconnect Travels & Tours. Specialist in bespoke holiday packages and GDS bookings.
              </p>
              <div className="w-full pt-4 mt-auto border-t border-slate-100 min-h-[60px] text-[11px] text-slate-400 italic font-medium leading-normal">
                Oversees international tour curation, religious pilgrimage logistics, and global partner coordination.
              </div>
            </div>

            {/* Director 3: SAMEER VP */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-2 border-gold-500/30 p-1 group-hover:border-gold-500 transition-colors">
                <img
                  src="/directors/SAMEER VP.png"
                  alt="SAMEER VP"
                  className="w-full h-full object-cover rounded-full bg-slate-50"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80";
                  }}
                />
              </div>
              <h4 className="font-display font-black text-lg text-primary-950 uppercase tracking-tight mb-1">
                Sameer VP
              </h4>
              <span className="text-xs font-mono font-bold text-gold-600 uppercase tracking-wider mb-3 block">
                Managing Director
              </span>
              <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs mb-4">
                Over 13 years of professional experience in Green Air Holidays, Nadapuram. Expert in ticketing systems, agent partnerships, and regional desks.
              </p>
              <div className="w-full pt-4 mt-auto border-t border-slate-100 min-h-[60px] text-[11px] text-slate-400 italic font-medium leading-normal">
                Oversees flight routing sales desks, regional agent networks, and Nadapuram corridor development.
              </div>
            </div>

            {/* Director 4: MUHAMMED SAFVAN TP */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-2 border-gold-500/30 p-1 group-hover:border-gold-500 transition-colors">
                <img
                  src="/directors/Muhammad Safvan TP.png"
                  alt="MUHAMMED SAFVAN TP"
                  className="w-full h-full object-cover rounded-full bg-slate-50"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80";
                  }}
                />
              </div>
              <h4 className="font-display font-black text-lg text-primary-950 uppercase tracking-tight mb-1">
                Muhammed Safvan TP
              </h4>
              <span className="text-xs font-mono font-bold text-gold-600 uppercase tracking-wider mb-3 block">
                Managing Director
              </span>
              <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs mb-4">
                Over 4 years of professional experience in AK Travels, Villiapally. Focused on modern travel operations, technology adoption, and customer experience.
              </p>
              <div className="w-full pt-4 mt-auto border-t border-slate-100 min-h-[60px] text-[11px] text-slate-400 italic font-medium leading-normal">
                Manages digital platform operations, local agency help desks, and customer support coordination.
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations & Memberships Section */}
        <div className="mt-12 pt-8 border-t border-slate-200/60 text-center">
          <div className="max-w-3xl mx-auto mb-10">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
              TRUSTED & RECOGNIZED // INDUSTRY STANDARDS
            </span>
            <h3 className="font-display font-black text-3xl text-primary-950 leading-tight">
              Our Accreditations & Memberships <br />
              <span className="serif-italic font-normal font-serif text-teal-650 italic lowercase">
                licensed by official travel councils and state associations
              </span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto mt-8 bg-[#FAF9F6] border border-slate-200/50 p-8 rounded-3xl">
            {/* MKTA */}
            <div className="flex flex-col items-center justify-center w-36 h-28 p-4 bg-white border border-slate-200/40 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-500/30 transition-all duration-300 group">
              <img
                src="/accreditation/mkta.png"
                alt="MKTA Logo"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-2 block">MKTA</span>
            </div>

            {/* SETAK */}
            <div className="flex flex-col items-center justify-center w-36 h-28 p-4 bg-white border border-slate-200/40 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-500/30 transition-all duration-300 group">
              <img
                src="/accreditation/setak.png"
                alt="SETAK Logo"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-2 block">SETAK</span>
            </div>

            {/* MTC */}
            <div className="flex flex-col items-center justify-center w-36 h-28 p-4 bg-white border border-slate-200/40 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-500/30 transition-all duration-300 group">
              <img
                src="/accreditation/MTC LOGO.png"
                alt="MTC Logo"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-2 block">MTC</span>
            </div>

            {/* TASK */}
            <div className="flex flex-col items-center justify-center w-36 h-28 p-4 bg-white border border-slate-200/40 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-500/30 transition-all duration-300 group">
              <img
                src="/accreditation/task.png"
                alt="TASK Logo"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-2 block">TASK</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
