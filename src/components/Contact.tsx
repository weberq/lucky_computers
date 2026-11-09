import { SITE } from "@/lib/site";
import StoreActions from "@/components/StoreActions";
import EnquiryForm from "@/components/EnquiryForm";

export default function Contact({ salesOnly = false }: { salesOnly?: boolean }) {
  return <section id="contact" className="section-pad bg-slate-50">
    <div className="container-width">
      <p className="eyebrow">Visit Lucky Computers</p>
      <h2 className="section-title mt-2">Easy to find. Ready to help.</h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <address className="not-italic text-lg font-semibold leading-8">{SITE.address.street},<br/>{SITE.address.locality}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}</address>
          <p className="mt-2 text-blue-700 font-semibold">{SITE.landmark}</p>
          <p className="mt-4 mb-6 text-slate-700"><strong>Sunday–Saturday:</strong> {SITE.hoursDisplay}<br/><span className="text-sm">Call ahead for holiday hours or a specific product.</span></p>
          <StoreActions source="visit_section"/>
          <details className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-semibold">Show store map</summary>
            <p className="mb-3 mt-2 text-xs text-slate-500">The map is provided by Google. You can also use the directions button above.</p>
            <iframe src={SITE.mapsEmbedUrl} title="Lucky Computers store location on Google Maps" className="h-72 w-full rounded-lg border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </details>
        </div>
        <EnquiryForm salesOnly={salesOnly}/>
      </div>
    </div>
  </section>;
}
