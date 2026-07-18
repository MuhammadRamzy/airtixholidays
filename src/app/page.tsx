import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import RouteHighlights from "@/components/RouteHighlights";
import HolidayPackages from "@/components/HolidayPackages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex flex-col flex-1">
        <Hero />
        <TrustBar />
        <RouteHighlights />
        <HolidayPackages />
        <WhyChooseUs />
        <Testimonials />
        <CTABanner />
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Mobile-Only Sticky Floating CTA */}
      <MobileStickyCTA />
    </div>
  );
}
