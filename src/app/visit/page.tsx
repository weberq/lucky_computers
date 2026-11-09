import { pageMetadata } from "@/lib/site";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
export const metadata = pageMetadata("Visit Our Kukatpally Store", "Get directions to Lucky Computers, Hanuman Temple Road near Metro Pillar 808, Kukatpally 500072. Open daily 10:30 AM–9:30 PM. Call 9618849601.", "/visit/");
export default function VisitPage() {
  return <main id="main-content"><JsonLd/><div className="container-width pt-12"><p className="eyebrow">Kukatpally, Hyderabad</p><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Your route to Lucky Computers.</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Find us on Hanuman Temple Road near Kukatpally Metro Pillar 808. Bring your requirements or your device, and we’ll discuss the options in store.</p></div><Contact/></main>;
}
