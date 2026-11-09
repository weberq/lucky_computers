import Image from "next/image";
import Link from "next/link";
import shop from "@/assets/A1.png";
import StoreActions from "@/components/StoreActions";
import { SITE } from "@/lib/site";

export default function Hero() {
  return <section id="home" className="bg-gradient-to-br from-white via-blue-50/60 to-slate-100">
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:py-20">
      <div>
        <p className="eyebrow">Your neighbourhood computer store</p>
        <h1 className="mt-4 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Your next laptop.<br/><span className="text-blue-600">Right here in Kukatpally.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">Explore refurbished laptops and desktops, order a new laptop, or plan a custom PC. Find computer and mobile accessories in store.</p>
        <div className="my-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-800"><span>Open every day · {SITE.hoursDisplay}</span><span>{SITE.landmark}</span></div>
        <StoreActions source="home_hero" />
        <Link href="/laptops/" className="mt-5 inline-block font-semibold text-blue-700 underline underline-offset-4">Explore laptops, PCs & accessories →</Link>
      </div>
      <figure className="relative">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <Image src={shop} alt="Laptop displays and customer seating inside Lucky Computers" width={960} height={1280} sizes="(max-width: 1024px) 100vw, 45vw" priority className="aspect-[4/3] w-full object-cover object-center lg:aspect-[4/5]" />
        </div>
        <figcaption className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:left-6 sm:right-6"><p className="font-bold text-slate-950">Come in. Tell us what you need.</p><p className="mt-1 text-sm text-slate-600">Hanuman Temple Road · Kukatpally · 500072</p></figcaption>
      </figure>
    </div>
  </section>;
}
