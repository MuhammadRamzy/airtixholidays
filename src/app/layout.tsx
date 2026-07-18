import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AirTixHoliday — Flights & Holidays (Kerala's Gulf Specialist)",
  description: siteConfig.description,
  metadataBase: new URL("https://airtixholiday.com"),
  keywords: ["flight tickets", "Kerala to Gulf", "Middle East flights", "Kerala tour packages", "Kochi to Dubai", "Kozhikode to Doha"],
  openGraph: {
    title: "AirTixHoliday — Kerala's Premium Flight & Holiday Partner",
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans text-primary-900 bg-white">
        {children}
      </body>
    </html>
  );
}
