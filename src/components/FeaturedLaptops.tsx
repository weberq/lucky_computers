import Image from "next/image";
import Link from "next/link";
import { Laptop, Monitor, Cpu, Keyboard, Smartphone, ArrowUpRight } from "lucide-react";
import laptop from "@/assets/unsplash/laptop-lenovo.jpg";
import StoreActions from "@/components/StoreActions";

const categories = [
  {title:"Refurbished laptops & desktops", text:"Explore available systems for everyday use, work and study. Ask about condition, specifications and any warranty for the particular unit.", icon:Laptop},
  {title:"New laptops on request", text:"Tell us your preferred model, specifications and budget. Confirm the current price and expected availability before ordering.", icon:Monitor},
  {title:"Custom-built PCs", text:"Discuss a desktop configuration for work, study or gaming, with components chosen around your requirements and budget.", icon:Cpu},
  {title:"Computer accessories", text:"Monitors, keyboards, mice, laptop chargers and other accessories. Check compatibility with your device before purchasing.", icon:Keyboard},
  {title:"Mobile accessories", text:"Tempered glass screen protectors, cases, pouches and chargers. Bring your phone or model details to find a suitable fit.", icon:Smartphone},
];

export default function FeaturedLaptops({ detailed = false }: { detailed?: boolean }) {
  return <section id="inventory" className="section-pad bg-white">
    <div className="container-width">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div><p className="eyebrow">Shop locally</p><h2 className="section-title mt-2">Find the right fit for your day.</h2></div>
        {!detailed&&<Link href="/laptops/" className="flex items-center gap-2 font-semibold text-blue-700">Explore our range <ArrowUpRight size={19}/></Link>}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(({title,text,icon:Icon})=><article key={title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6"><Icon className="mb-5 text-blue-600" size={27}/><h3 className="text-xl font-bold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}
        <figure className="relative min-h-56 overflow-hidden rounded-2xl bg-slate-900">
          <Image src={laptop} alt="Illustration of a laptop; contact the store for current stock" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-70"/>
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent p-6 text-sm text-white">Product image is illustrative. Models and stock vary.</figcaption>
        </figure>
      </div>
      <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <h3 className="text-lg font-bold">Check what’s available before you travel.</h3>
        <p className="mb-5 mt-2 text-sm leading-6 text-slate-600">Share your budget and requirements. We’ll confirm current stock, specifications and prices. There is no online checkout.</p>
        <StoreActions source={detailed?"laptops_range":"home_range"} message="Hi Lucky Computers, I am looking for a laptop or PC. My budget is __ and I need it for __. What is available?"/>
      </div>
    </div>
  </section>;
}
