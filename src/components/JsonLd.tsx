import { SITE } from "@/lib/site";

/**
 * Structured data (schema.org) so Google understands this is a local
 * computer repair business: address, map location, hours, phone, services.
 * Eligible for rich results and helps the Google Maps / local pack listing.
 */
export default function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": ["ComputerStore", "LocalBusiness"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    slogan: SITE.tagline,
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}/opengraph-image`,
    logo: `${SITE.url}/apple-icon.png`,
    telephone: SITE.phones[0],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: `${SITE.address.locality}, ${SITE.address.city}`,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: SITE.mapsUrl,
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "Place", name: "Kukatpally" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SITE.hours.days,
        opens: SITE.hours.opens,
        closes: SITE.hours.closes,
      },
    ],
    contactPoint: SITE.phones.map((telephone) => ({
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    })),
    sameAs: SITE.social,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Computer Repair & Sales Services",
      itemListElement: SITE.services.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE.url}/#business` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([business, website]).replace(/</g, "\\u003c"),
      }}
    />
  );
}