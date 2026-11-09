import { pageMetadata } from "@/lib/site";
import StoreActions from "@/components/StoreActions";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata("Laptop, Computer & Mobile Repair in Kukatpally", "Visit Lucky Computers for laptop, desktop, mobile and iPhone repairs, screen replacement, data recovery, RAM/SSD upgrades and overheating issues in Kukatpally.", "/repairs/");
const repairs = [
  ["Laptop & desktop repairs","Bring your computer in to discuss the fault, diagnosis, parts availability and a repair quote."],
  ["Mobile phone & iPhone repairs","We repair mobile phones, including Apple iPhones. Ask about the repair options and replacement parts for your model."],
  ["Screen & motherboard repairs","Discuss damaged screens and motherboard faults. Availability, cost and repair time depend on the device and assessment."],
  ["RAM & SSD upgrades","Ask which memory and storage upgrades are compatible with your laptop or desktop and how they fit your requirements."],
  ["Data recovery","Discuss recovery options for lost or inaccessible files. The outcome depends on the condition of the storage device."],
  ["Overheating & maintenance","Bring in devices affected by heat, dust or unexpected shutdowns to discuss cleaning and repair options."],
];
export default function RepairsPage() {
  return <main id="main-content"><JsonLd/><section className="section-pad bg-blue-50"><div className="container-width"><p className="eyebrow">Repair services · Kukatpally</p><h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">Laptop, computer & mobile repairs.</h1><p className="my-6 max-w-2xl text-lg leading-8 text-slate-600">Visit Lucky Computers on Hanuman Temple Road near Metro Pillar 808. Tell us what’s wrong and discuss repair options, parts and costs.</p><StoreActions source="repairs_hero" message="Hi Lucky Computers, I need a repair. My device model is __ and the problem is __."/></div></section><section className="section-pad"><div className="container-width grid gap-4 md:grid-cols-2 lg:grid-cols-3">{repairs.map(([title,text])=><article key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}</div><p className="container-width mt-6 text-sm leading-7 text-slate-600">Confirm the parts to be used, expected turnaround, price and any repair warranty with the store before proceeding. References to Apple and other brands identify devices we service; they do not imply manufacturer authorisation.</p></section><Contact/></main>;
}
