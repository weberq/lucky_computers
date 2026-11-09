export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
export const sitePath = (path = "/") => `${BASE_PATH}${path}`;
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://luckycomputers.in").replace(/\/$/, "");

export const SITE = {
  url: siteUrl,
  isPreview: new URL(siteUrl).hostname.endsWith(".github.io"),
  name: "Lucky Computers",
  tagline: "Your neighbourhood computer store.",
  title: "Lucky Computers | Laptops, PCs & Accessories in Kukatpally",
  description: "Visit Lucky Computers in Kukatpally for refurbished laptops, new laptops on request, custom PCs, accessories and device repairs. Open daily 10:30 AM–9:30 PM.",
  keywords: ["Lucky Computers Kukatpally", "refurbished laptops Kukatpally", "laptop shop Kukatpally", "new laptops Kukatpally", "custom PC Hyderabad", "computer accessories Kukatpally", "mobile accessories Kukatpally", "laptop repair Kukatpally", "iPhone repair Kukatpally"],
  phone: "+919618849601",
  phoneDisplay: "96188 49601",
  phones: ["+919618849601"],
  whatsapp: "https://wa.me/919618849601",
  address: {
    street: "3-2-33, Hanuman Temple Road, Bagh Ameer, Baghameeri Village",
    locality: "Kukatpally",
    city: "Hyderabad",
    region: "Telangana",
    postalCode: "500072",
    country: "IN",
  },
  landmark: "Near Kukatpally Metro Pillar 808",
  // Coordinates in the original shop's Google Maps place link, not the map viewport centre.
  geo: { latitude: 17.4868567, longitude: 78.4116071 },
  mapsUrl: "https://www.google.com/maps?cid=14236691913806698288",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=17.4868567%2C78.4116071&travelmode=driving",
  mapsEmbedUrl: "https://maps.google.com/maps?cid=14236691913806698288&output=embed",
  hours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:30", closes: "21:30" },
  hoursDisplay: "10:30 AM–9:30 PM",
  social: ["https://www.instagram.com/luckycomputers_official", "https://youtube.com/@luckycomputers-official"],
  services: ["Refurbished laptop and desktop sales", "New laptops on request", "Custom PC building", "Computer and mobile accessories", "Laptop and desktop repair", "Mobile phone repair, including Apple iPhone", "Screen and motherboard repair", "Data recovery", "RAM and SSD upgrades", "Overheating diagnosis"],
} as const;

export function whatsappUrl(message: string) {
  return `${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function pageMetadata(title: string, description: string, path: string) {
  return {
    title, description,
    alternates: { canonical: `${SITE.url}${path}` },
    openGraph: { title, description, url: `${SITE.url}${path}`, type: "website" as const },
    twitter: { card: "summary_large_image" as const, title, description },
  };
}
