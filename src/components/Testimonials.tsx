"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Route, Star, Plane } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  route: string;
  fromCode: string;
  toCode: string;
  quote: string;
  rating: number;
  classType: string;
  seat: string;
  gate: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "test-1",
      name: "M. HARRIS",
      role: "Logistics Manager, UAE",
      route: "Kozhikode ⇄ Dubai",
      fromCode: "CCJ",
      toCode: "DXB",
      quote: "As an expat working in Dubai, booking flights back home to Kozhikode has always been stressful. AirTixHoliday made it effortless. Their Gulf route desk sorted out extra baggage allowances and group tickets for my family with absolute reliability.",
      rating: 5,
      classType: "BUSINESS CLASS",
      seat: "12A",
      gate: "G4",
    },
    {
      id: "test-2",
      name: "ANJALI MENON",
      role: "Software Engineer, Qatar",
      route: "Kochi ⇄ Doha",
      fromCode: "COK",
      toCode: "DOH",
      quote: "Superb service! I booked a 4-day Kerala vacation packages for my parents who were visiting me in Doha. From flight tickets to visa assistance and premium hotel reservations, everything went incredibly smooth. Highly recommended!",
      rating: 5,
      classType: "FIRST CLASS",
      seat: "03C",
      gate: "A2",
    },
    {
      id: "test-3",
      name: "FAISAL RAHMAN",
      role: "Business Owner, Saudi Arabia",
      route: "Trivandrum ⇄ Riyadh",
      fromCode: "TRV",
      toCode: "RUH",
      quote: "Outstanding ticket fares and exceptional customer helpline support. I had an emergency trip to Riyadh and needed immediate booking support at midnight. Their WhatsApp support team replied in minutes and handled the bookings perfectly.",
      rating: 5,
      classType: "PREMIUM ECO",
      seat: "18F",
      gate: "C10",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;

    autoplayTimer.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 6500);

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [emblaApi, isPaused]);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Editorial layout markings */}
      <div className="absolute top-12 left-12 font-mono text-[9px] text-slate-400 tracking-[0.3em] uppercase hidden lg:block">
        AirTix Vol. IV / Passenger Testimonials
      </div>
      <div className="absolute top-12 right-12 font-mono text-[9px] text-slate-400 tracking-[0.3em] uppercase hidden lg:block">
        Verification: GDS Registered
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3 font-display">
            Boarding Success
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-primary-950 leading-[0.95] tracking-tighter">
            Our Happy Expat <br />
            <span className="serif-italic font-normal font-serif text-teal-650 italic lowercase">boarding passes</span>
          </h2>
        </div>

        {/* Embla Carousel Viewport */}
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex select-none touch-pan-y">
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="flex-[0_0_100%] min-w-0 px-2 sm:px-4 flex justify-center"
                >
                  
                  {/* High Fidelity Boarding Pass Ticket */}
                  <div className="w-full max-w-4xl bg-[#FAF9F6] border border-slate-200/80 rounded-3xl shadow-sm overflow-hidden relative flex flex-col md:grid md:grid-cols-4">
                    
                    {/* Ticket Circle Punch Hole Decorations (Tear off connectors) */}
                    <div className="hidden md:block absolute top-0 right-1/4 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200/80 z-10" />
                    <div className="hidden md:block absolute bottom-0 right-1/4 translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200/80 z-10" />

                    {/* MAIN TICKET (3/4 Width) */}
                    <div className="md:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-dashed border-slate-300 relative">
                      
                      {/* Ticket Header */}
                      <div className="flex items-center justify-between border-b border-slate-250/60 pb-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Plane className="w-3.5 h-3.5 text-teal-600 rotate-45" />
                          <span className="font-mono text-[10px] tracking-widest text-slate-800 font-bold">
                            AIRTIX BOARDING PASS // FIRST CLASS ONLY
                          </span>
                        </div>
                        <span className="text-[9px] font-bold font-mono text-gold-600 bg-gold-50 border border-gold-300/40 px-3 py-1 rounded-full uppercase tracking-wider">
                          {test.classType}
                        </span>
                      </div>

                      {/* Flight Details Row */}
                      <div className="grid grid-cols-3 items-center justify-between mb-8">
                        <div className="text-left">
                          <p className="text-3xl sm:text-4xl font-black font-display text-primary-950 leading-none tracking-tighter">
                            {test.fromCode}
                          </p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 font-mono">
                            {test.route.split("⇄")[0].trim()}
                          </p>
                        </div>

                        <div className="flex flex-col items-center justify-center relative">
                          <span className="text-[8px] font-bold text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded-full mb-1.5 font-mono">
                            FLIGHT ACTIVE
                          </span>
                          <div className="w-full border-t border-dashed border-slate-300 relative">
                            <Plane className="w-4 h-4 text-teal-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-3xl sm:text-4xl font-black font-display text-primary-950 leading-none tracking-tighter">
                            {test.toCode}
                          </p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 font-mono">
                            {test.route.split("⇄")[1].trim()}
                          </p>
                        </div>
                      </div>

                      {/* Quote Content */}
                      <blockquote className="text-base sm:text-lg md:text-xl font-medium text-slate-700 leading-relaxed italic mb-8 serif-italic font-serif">
                        "{test.quote}"
                      </blockquote>

                      {/* Passenger Details Footer */}
                      <div className="grid grid-cols-3 gap-4 border-t border-slate-250/60 pt-5 mt-auto text-left font-mono">
                        <div>
                          <span className="text-[8px] text-slate-450 font-bold uppercase tracking-wider block">Passenger</span>
                          <span className="text-xs sm:text-sm font-bold text-primary-950">{test.name}</span>
                        </div>
                        <div>
                          <span className="text-[8px] text-slate-450 font-bold uppercase tracking-wider block">Gate</span>
                          <span className="text-xs sm:text-sm font-bold text-primary-950">{test.gate}</span>
                        </div>
                        <div>
                          <span className="text-[8px] text-slate-450 font-bold uppercase tracking-wider block">Seat</span>
                          <span className="text-xs sm:text-sm font-bold text-primary-950">{test.seat}</span>
                        </div>
                      </div>

                    </div>

                    {/* TEAR OFF FLIGHT STUB (1/4 Width) */}
                    <div className="md:col-span-1 bg-slate-100/30 p-6 sm:p-8 md:p-10 flex flex-col justify-between items-center text-center relative">
                      
                      {/* Star Rating details */}
                      <div className="flex flex-col items-center">
                        <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block mb-2 font-mono">Verified Expat</span>
                        <div className="flex items-center gap-0.5 justify-center mb-4">
                          {[...Array(test.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                          ))}
                        </div>

                        <p className="font-display font-black text-sm text-primary-950 leading-none">
                          {test.name}
                        </p>
                        <p className="text-[9px] font-semibold text-slate-450 uppercase tracking-widest mt-1.5 font-mono">
                          {test.role}
                        </p>
                      </div>

                      {/* Route connection stub details */}
                      <div className="my-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-[9px] font-bold text-teal-700 font-mono tracking-wider">
                        <Route className="w-3 h-3" />
                        <span>{test.fromCode} ⇄ {test.toCode}</span>
                      </div>

                      {/* Dynamic CSS Barcode */}
                      <div className="w-full flex flex-col items-center mt-auto">
                        <div 
                          className="h-10 w-full opacity-60"
                          style={{
                            background: "repeating-linear-gradient(90deg, #0f172a, #0f172a 2px, transparent 2px, transparent 6px)"
                          }}
                          role="img"
                          aria-label="Boarding pass barcode representation"
                        />
                        <span className="text-[8px] text-slate-400 font-mono tracking-widest mt-1.5">
                          *PASS-{test.seat}*
                        </span>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows (Desktop Only) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-primary-950 hover:border-gold-500 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm cursor-pointer"
              aria-label="Previous boarding pass"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20">
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-primary-950 hover:border-gold-500 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm cursor-pointer"
              aria-label="Next boarding pass"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel indicators/dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 min-h-[10px] min-w-[10px] cursor-pointer ${
                index === selectedIndex
                  ? "bg-gold-500 w-6"
                  : "bg-slate-250 hover:bg-slate-350"
              }`}
              aria-label={`Boarding pass slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
