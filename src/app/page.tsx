import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlightWindowScroll from "@/components/FlightWindowScroll";
import TrustBar from "@/components/TrustBar";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import ResortsHotels from "@/components/ResortsHotels";
import HolidayPackages from "@/components/HolidayPackages";
import VisaServices from "@/components/VisaServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingDeskSection from "@/components/BookingDeskSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { siteConfig } from "@/config/site";

// Organization schema lives on the homepage only — keeping it out of the
// root layout means it won't get duplicated onto every future subpage.
const schema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": siteConfig.name,
  "url": "https://airtixholiday.com",
  "logo": "https://airtixholiday.com/logo.png",
  "image": "https://airtixholiday.com/logo.png",
  "description": siteConfig.description,
  "telephone": siteConfig.contact.officePhoneDial,
  "email": siteConfig.contact.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd Floor, Skyline Plaza, Marine Drive",
    "addressLocality": "Kochi",
    "addressRegion": "Kerala",
    "postalCode": "682031",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "priceRange": "$$"
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex flex-col flex-1">
        <Hero />
        <FlightWindowScroll />
        <TrustBar />
        <ResortsHotels />
        <HolidayPackages />
        <VisaServices />
        <Services />
        <WhyChooseUs />
        <AboutUs />
        <BookingDeskSection />
        <CTABanner />
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Mobile-Only Sticky Floating CTA */}
      <MobileStickyCTA />
    </div>
  );
}
