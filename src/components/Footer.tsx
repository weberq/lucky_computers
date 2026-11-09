import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return <footer className="border-t border-slate-200 bg-white pb-28 pt-12 md:pb-10">
    <div className="container-width grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div><p className="text-xl font-black tracking-tight">LUCKY COMPUTERS</p><p className="mt-3 text-sm leading-7 text-slate-600">Laptops, custom PCs, accessories and device repairs in Kukatpally, Hyderabad.</p><p className="mt-3 text-sm font-semibold">Open daily · {SITE.hoursDisplay}</p></div>
      <nav aria-label="Footer navigation" className="grid content-start gap-3 text-sm font-semibold"><Link href="/laptops/">Laptops, PCs & accessories</Link><Link href="/repairs/">Laptop & mobile repairs</Link><Link href="/visit/">Address & directions</Link><Link href="/privacy/">Privacy & measurement</Link></nav>
      <div className="text-sm leading-7"><p>{SITE.address.street}, {SITE.address.locality}, {SITE.address.city} {SITE.address.postalCode}</p><a className="font-bold text-blue-700" href={`tel:${SITE.phone}`} data-action="call_click" data-placement="footer">{SITE.phoneDisplay}</a><div className="mt-3 flex gap-5"><a href={SITE.social[0]} target="_blank" rel="noopener noreferrer">Instagram</a><a href={SITE.social[1]} target="_blank" rel="noopener noreferrer">YouTube</a></div></div>
    </div>
    <p className="container-width mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Lucky Computers. Product availability and prices are confirmed by the store.</p>
  </footer>;
}
