/**
 * AirTix Inventory Flight database
 * Simulated GDS (Amadeus-Lite) seat inventory and departures cache.
 * In production, this module coordinates live passenger flight manifests
 * and seat allocations via the AirTix ERP booking gateway.
 */

export interface FlightStatus {
  flight: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  duration: string;
  status: "ON TIME" | "BOOKING OPEN" | "SEATS LOW" | "BEST VALUE";
  statusColor: string;
  frequency: string;
}

export const flightDirectory: FlightStatus[] = [
  {
    flight: "AT-101",
    from: "Kozhikode",
    fromCode: "CCJ",
    to: "DUBAI",
    toCode: "DXB",
    duration: "4h 10m",
    status: "BOOKING OPEN",
    statusColor: "border-teal-500/30 text-teal-700 bg-teal-50/50",
    frequency: "Daily Direct",
  },
  {
    flight: "AT-204",
    from: "Kochi",
    fromCode: "COK",
    to: "DOHA",
    toCode: "DOH",
    duration: "4h 45m",
    status: "BEST VALUE",
    statusColor: "border-gold-500/30 text-gold-700 bg-gold-50/50",
    frequency: "Mon, Wed, Fri",
  },
  {
    flight: "AT-112",
    from: "Trivandrum",
    fromCode: "TRV",
    to: "RIYADH",
    toCode: "RUH",
    duration: "5h 15m",
    status: "SEATS LOW",
    statusColor: "border-rose-500/30 text-rose-700 bg-rose-50/50",
    frequency: "Daily Direct",
  },
  {
    flight: "AT-305",
    from: "Kochi",
    fromCode: "COK",
    to: "ABU DHABI",
    toCode: "AUH",
    duration: "4h 20m",
    status: "ON TIME",
    statusColor: "border-slate-500/30 text-slate-700 bg-slate-50/50",
    frequency: "Daily Direct",
  },
  {
    flight: "AT-108",
    from: "Kozhikode",
    fromCode: "CCJ",
    to: "MUSCAT",
    toCode: "MCT",
    duration: "3h 55m",
    status: "BOOKING OPEN",
    statusColor: "border-teal-500/30 text-teal-700 bg-teal-50/50",
    frequency: "Tue, Thu, Sat",
  },
];
