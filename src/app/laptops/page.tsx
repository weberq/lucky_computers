import Image from "next/image";
import shop from "@/assets/A1.png";
import { pageMetadata, SITE } from "@/lib/site";
import FeaturedLaptops from "@/components/FeaturedLaptops";
import StoreActions from "@/components/StoreActions";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata("Refurbished & New Laptops in Kukatpally", "Visit Lucky Computers for refurbished laptops and desktops, new laptops on request, custom PCs, monitors and accessories. Near Kukatpally Metro Pillar 808.", "/laptops/");

export default function LaptopsPage() {
  return <main id="main-content"><JsonLd/><section className="section-pad bg-gradient-to-br from-blue-50 to-white"><div className="container-width grid items-center gap-8 lg:grid-cols-2"><div><p className="eyebrow">Lucky Computers · Kukatpally</p><h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">Laptops, desktops & PCs.<br/><span className="text-blue-600">Come find yours.</span></h1><p className="my-6 text-lg leading-8 text-slate-600">Explore refurbished laptops, request a new model, or plan your custom PC. Visit our store to discuss specifications, condition and current prices.</p><p className="mb-6 text-sm font-semibold">Near Metro Pillar 808 · Open daily {SITE.hoursDisplay}</p><StoreActions source="laptops_hero" message="Hi Lucky Computers, I am interested in buying a laptop. Please share current options and prices."/></div><Image src={shop} alt="Laptops displayed inside Lucky Computers in Kukatpally" width={960} height={1280} priority sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"/></div></section><FeaturedLaptops detailed/>
    <section className="section-pad bg-white"><div className="container-width"><p className="eyebrow">Before you buy</p><h2 className="section-title mt-2">A few useful questions.</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{[
      ["Are new laptops in stock?","New laptops are supplied on customer request. Contact the store to confirm model availability, price and expected delivery."],
      ["Which refurbished models are available?","Stock changes. Share your budget and needs on WhatsApp, or visit the store to see the units currently available."],
      ["What should I check on a refurbished laptop?","Ask about processor, RAM, storage, battery condition, display, included charger, software licensing and the warranty or return terms for that unit."],
      ["Can I buy accessories or build a desktop?","Yes. We sell monitors, keyboards, mice, chargers and mobile accessories, and can discuss custom PC configurations."]
    ].map(([q,a])=><details key={q} className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold">{q}</summary><p className="mt-3 text-sm leading-7 text-slate-600">{a}</p></details>)}</div></div></section>
    <Contact salesOnly/>
  </main>;
}
