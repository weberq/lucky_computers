import { MapPin, Phone, MessageCircle } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

export default function StoreActions({ source = "page", message = "Hi Lucky Computers, I would like to visit your Kukatpally store." }: { source?: string; message?: string }) {
  return <div className="flex flex-wrap gap-3">
    <a className="btn-primary" href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" data-action="directions_click" data-placement={source}><MapPin size={18} /> Get directions</a>
    <a className="btn-secondary" href={`tel:${SITE.phone}`} data-action="call_click" data-placement={source}><Phone size={18} /> Call {SITE.phoneDisplay}</a>
    <a className="btn-secondary" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" data-action="whatsapp_click" data-placement={source}><MessageCircle size={18} /> WhatsApp</a>
  </div>;
}

export function MobileStoreActions() {
  return <nav aria-label="Quick store actions" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white p-2 pb-[max(.5rem,env(safe-area-inset-bottom))] shadow-lg md:hidden">
    <a className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white" href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" data-action="directions_click" data-placement="mobile_bar"><MapPin size={17} /> Directions</a>
    <a className="flex min-h-12 items-center justify-center gap-2 text-sm font-bold" href={`tel:${SITE.phone}`} data-action="call_click" data-placement="mobile_bar"><Phone size={17} /> Call</a>
    <a className="flex min-h-12 items-center justify-center gap-2 text-sm font-bold" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" data-action="whatsapp_click" data-placement="mobile_bar"><MessageCircle size={17} /> WhatsApp</a>
  </nav>;
}
