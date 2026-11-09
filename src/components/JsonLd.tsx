import { SITE } from "@/lib/site";
export default function JsonLd() {
  const business = {
    "@context": "https://schema.org", "@type": "ComputerStore",
    "@id": `${SITE.url}/#business`, name: SITE.name,
    description: SITE.description, url: SITE.url + "/",
    image: `${SITE.url}/store.png`, logo: `${SITE.url}/logo.webp`,
    telephone: SITE.phone, currenciesAccepted: "INR",
    address: { "@type": "PostalAddress", streetAddress: SITE.address.street, addressLocality: `${SITE.address.locality}, ${SITE.address.city}`, addressRegion: SITE.address.region, postalCode: SITE.address.postalCode, addressCountry: SITE.address.country },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
    hasMap: SITE.mapsUrl,
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: SITE.hours.days, opens: SITE.hours.opens, closes: SITE.hours.closes }],
    sameAs: [SITE.mapsUrl, ...SITE.social],
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Products and services", itemListElement: SITE.services.map(name=>({ "@type": "OfferCatalog", name })) },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(business).replace(/</g,"\\u003c")}}/>;
}
