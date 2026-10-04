
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const SITE = {
  url: resolveSiteUrl(),
  name: "Lucky Computers",
  tagline: "Fast. Reliable. Honest.",
  title: "Lucky Computers | Laptop & Computer Repair in Kukatpally, Hyderabad",
  description:
    "Lucky Computers in Kukatpally, Hyderabad offers expert laptop and desktop repair, screen replacement, data recovery, SSD & RAM upgrades, virus removal and quality refurbished laptops. Open Mon–Sat, 10 AM – 8 PM.",
  keywords: [
    "laptop repair Kukatpally",
    "computer repair Kukatpally",
    "laptop repair Hyderabad",
    "computer repair shop Hyderabad",
    "laptop screen replacement Hyderabad",
    "data recovery Hyderabad",
    "SSD upgrade Hyderabad",
    "RAM upgrade laptop",
    "virus removal Hyderabad",
    "refurbished laptops Hyderabad",
    "second hand laptops Kukatpally",
    "MacBook repair Hyderabad",
    "Lucky Computers",
  ],
  phones: ["+919618849601", "+919391919214", "+919391919215"],
  address: {
    street: "3-2-33, Hanuman Temple Rd, Bagh Ameer, Baghameeri Village",
    locality: "Kukatpally",
    city: "Hyderabad",
    region: "Telangana",
    postalCode: "500011",
    country: "IN",
  },
  geo: { latitude: 17.4848963, longitude: 78.3941357 },
  mapsUrl: "https://www.google.com/maps/place/Lucky+Computers/@17.4848963,78.3941357,14z/",
  hours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "20:00" },
  social: [
    "https://www.instagram.com/luckycomputers_official",
    "https://youtube.com/@luckycomputers-official",
  ],
  services: [
    "PC & Laptop Repairs",
    "Data Recovery",
    "Performance Upgrades (RAM, SSD, GPU)",
    "Malware & Virus Removal",
    "Refurbished Laptop & Desktop Sales",
    "Home & Office Network Setup",
    "OS Installation (Windows, Linux, macOS)",
    "Preventive Maintenance & Cleaning",
    "Laptop Screen Replacement",
  ],
} as const;