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
  title: {
    default: "AirTixHolidays | Premium Flights & Packages from Kerala",
    template: "%s | AirTixHolidays"
  },
  description: "Kerala's most trusted travel partner since 2011. Get instant low-fare flight tickets to the Middle East, Global Visit Visas, Umrah packages, and premium holiday resorts.",
  metadataBase: new URL("https://airtixholiday.com"),
  keywords: [
    "AirTixHolidays",
    "Flight tickets Kerala to Gulf",
    "Cheap flights Kochi to Dubai",
    "Kozhikode to Doha flights",
    "Umrah packages from Kerala",
    "Global visit visa agents Kerala",
    "Best travel agency in Kozhikode",
    "Domestic train tickets India",
    "Certificate attestation Kerala",
    "Resort booking Munnar"
  ],
  authors: [{ name: "AirTixHolidays Team" }],
  creator: "AirTixHolidays",
  publisher: "AirTixHolidays",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "AirTixHolidays | Kerala's Premium Travel & Holiday Partner",
    description: "Instant low-fare flight tickets, Global Visit Visas, Umrah packages, and premium holiday resorts. Connecting Kerala with the Gulf since 2011.",
    url: "https://airtixholiday.com",
    siteName: "AirTixHolidays",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AirTixHolidays Branding",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirTixHolidays | Flights & Packages",
    description: "Kerala's most trusted travel partner for flights, visas, and holiday packages.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://airtixholiday.com",
  }
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
