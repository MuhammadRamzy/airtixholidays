export const siteConfig = {
  name: "AirTixHolidays",
  description: "Premium flight tickets and holiday packages from Kerala to the Middle East and worldwide.",
  
  // External Booking Engine URL
  bookingUrl: "https://book.airtixholiday.com",
  
  // Contact details
  contact: {
    email: "sales@airtixholidays.com",
    address: "AirTixHolidays, 2nd Floor, Skyline Plaza, Marine Drive, Kochi, Kerala, India - 682031",
    officeHours: "Mon - Sat: 9:00 AM - 7:00 PM (IST)",
    officePhone: "0496 222 5771",
    officePhoneDial: "+914962225771",
  },

  // Departmental Contacts
  departments: {
    visa: {
      name: "Asmina",
      role: "Global Visa Services",
      phone: "+91 95442 57771",
      phoneDial: "919544257771",
    },
    holidays: {
      name: "Shahana",
      role: "Holidays & Resorts",
      phone: "+91 99473 57771",
      phoneDial: "919947357771",
    },
    sales: [
      { name: "Amaya", role: "Flight Sales Specialist", phone: "+91 99461 57771", phoneDial: "919946157771" },
      { name: "Irfana", role: "Flight Sales Specialist", phone: "+91 99478 57771", phoneDial: "919947857771" },
      { name: "Shabana", role: "Flight Sales Specialist", phone: "+91 99479 57771", phoneDial: "919947957771" },
      { name: "Safna", role: "Flight Sales Specialist", phone: "+91 99472 57771", phoneDial: "919947257771" },
    ]
  },

  // Social URLs
  social: {
    facebook: "https://facebook.com/airtixholiday",
    instagram: "https://instagram.com/airtixholiday",
    twitter: "https://twitter.com/airtixholiday",
  },

  // Navigation menu items
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Resorts & Stays", href: "#resorts" },
    { label: "Packages", href: "#packages" },
    { label: "Visas", href: "#visas" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
  ]
};

// Helper function to get a default WhatsApp link for flight sales
export function getGeneralSalesWhatsApp(message: string = "Hi AirTixHolidays Team, I am interested in booking a flight ticket.") {
  const defaultRep = siteConfig.departments.sales[0]; // Amaya as default
  return `https://wa.me/${defaultRep.phoneDial}?text=${encodeURIComponent(message)}`;
}
