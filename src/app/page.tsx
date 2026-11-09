import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedLaptops from "@/components/FeaturedLaptops";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";

export default function HomePage() {
  return <main id="main-content"><JsonLd/><Hero/><FeaturedLaptops/><WhyUs/>
    <section id="services" className="section-pad bg-white"><div className="container-width grid gap-5 md:grid-cols-[1fr_auto] md:items-center"><div><p className="eyebrow">Device repairs in Kukatpally</p><h2 className="section-title mt-2">Need help with a device?</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">We also repair laptops, desktops and mobile phones, including Apple iPhones. Discuss screen or motherboard repairs, data recovery, RAM and SSD upgrades, and overheating issues.</p></div><Link className="btn-secondary" href="/repairs/">Explore repair services →</Link></div></section>
    <Contact/>
  </main>;
}
