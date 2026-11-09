"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MapPin } from "lucide-react";
import logo from "@/assets/Logo.webp";
import { SITE } from "@/lib/site";

const links = [{name:"Laptops & PCs",href:"/laptops/"},{name:"Repairs",href:"/repairs/"},{name:"Visit the store",href:"/visit/"}];

export default function Navbar() {
  const [open,setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
    <nav className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8" aria-label="Main navigation">
      <Link href="/" className="flex items-center gap-2.5" onClick={()=>setOpen(false)} aria-label="Lucky Computers home">
        <Image src={logo} width={42} height={42} alt="" className="rounded-full" priority />
        <span className="font-black tracking-tight text-slate-950">LUCKY COMPUTERS<span className="block text-[10px] font-semibold tracking-widest text-blue-600">KUKATPALLY · HYDERABAD</span></span>
      </Link>
      <div className="hidden items-center gap-7 md:flex">{links.map(link=><Link className="text-sm font-semibold text-slate-700 hover:text-blue-700" key={link.href} href={link.href}>{link.name}</Link>)}</div>
      <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary hidden! lg:inline-flex!" data-action="directions_click" data-placement="header"><MapPin size={17}/> Directions</a>
      <button className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-slate-200 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(!open)}>{open?<X size={22}/>:<Menu size={22}/>}</button>
    </nav>
    {open&&<nav id="mobile-menu" className="border-t border-slate-100 p-4 md:hidden" aria-label="Mobile navigation">{links.map(link=><Link className="block rounded-lg px-4 py-3 font-semibold hover:bg-blue-50" key={link.href} href={link.href} onClick={()=>setOpen(false)}>{link.name}</Link>)}</nav>}
  </header>;
}
