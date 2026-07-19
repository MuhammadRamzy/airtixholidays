import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import HolidayPackages from "@/components/HolidayPackages";
import VisaServices from "@/components/VisaServices";
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
        <AboutUs />
        <Services />
        <HolidayPackages />
        <VisaServices />
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
