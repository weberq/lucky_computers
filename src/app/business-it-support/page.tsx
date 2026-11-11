import Link from "next/link";
import { pageMetadata, SITE } from "@/lib/site";
import StoreActions from "@/components/StoreActions";
import BusinessEnquiry from "@/components/BusinessEnquiry";
import JsonLd from "@/components/JsonLd";

const description = "Business-only IT support in Kukatpally: office laptop and desktop repairs, computer maintenance and RAM/SSD upgrades. Contact Lucky Computers for a quote.";
const services = [
  ["Office laptop & desktop repairs", "Bring your business-use computer to our Kukatpally store for assessment. Discuss the fault, replacement parts and a repair quote before work begins."],
  ["Business computer maintenance", "Discuss maintenance for computers used by your office or business, including overheating, dust and unexpected shutdowns."],
  ["Office RAM & SSD upgrades", "Discuss compatible memory and storage options for your business computers. We confirm parts availability and costs with you."],
  ["Business IT support", "Tell us about your office's computer issues and the number of devices involved. We will confirm the scope of work, service arrangements and quote."],
];

export const metadata = pageMetadata("Business-Only IT Support & Office Computer Repairs in Kukatpally", description, "/business-it-support/");

export default function BusinessSupportPage() {
  return <main id="main-content">
    <JsonLd description={description} services={services.map(([name])=>name)}/>
    <section className="section-pad bg-blue-50"><div className="container-width">
      <p className="eyebrow">Exclusively for offices & business customers</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">IT support for your business.<br/>Here in Kukatpally.</h1>
      <p className="my-6 max-w-2xl text-lg leading-8 text-slate-600">Office laptop and desktop repairs, computer maintenance and upgrades from Lucky Computers. This dedicated service accepts business enquiries for business-use equipment only.</p>
      <p className="mb-6 font-semibold">Near Metro Pillar 808 · Open daily {SITE.hoursDisplay}</p>
      <StoreActions source="business_hero" message="Hi Lucky Computers, I represent a business and need business-only IT support. Business name: __. Office devices and requirements: __."/>
      <p className="mt-5 text-sm leading-7 text-slate-600">Please provide your business name and requirements when calling or visiting. Personal-device repair enquiries are handled separately through our <Link className="underline" href="/repairs/">consumer repair service</Link>.</p>
    </div></section>
    <section className="section-pad"><div className="container-width">
      <p className="eyebrow">Support for business-use equipment</p><h2 className="section-title mt-2">Discuss the work your office needs.</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">{services.map(([title,text])=><article className="rounded-2xl border border-slate-200 p-6" key={title}><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}</div>
      <p className="mt-6 text-sm leading-7 text-slate-600">Scope, parts, price, turnaround and any warranty are confirmed after assessment. Contact the store before arranging service or bringing multiple devices.</p>
    </div></section>
    <section className="section-pad bg-slate-50"><div className="container-width grid gap-8 lg:grid-cols-2">
      <div><p className="eyebrow">Visit Lucky Computers</p><h2 className="section-title mt-2">Bring your office requirements.</h2>
        <address className="mt-6 not-italic text-lg leading-8">{SITE.address.street},<br/>{SITE.address.locality}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}</address>
        <p className="mt-3 font-semibold text-blue-700">{SITE.landmark}</p><p className="my-6">Sunday–Saturday: {SITE.hoursDisplay}</p>
        <StoreActions source="business_visit" message="Hi Lucky Computers, I would like to discuss IT support for my business. Business name: __. Requirements: __."/>
      </div><BusinessEnquiry/>
    </div></section>
  </main>;
}
