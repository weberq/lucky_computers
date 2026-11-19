import Link from "next/link";
import { pageMetadata, SITE } from "@/lib/site";
import StoreActions from "@/components/StoreActions";
import BusinessEnquiry from "@/components/BusinessEnquiry";
import JsonLd from "@/components/JsonLd";

const description = "Office network setup, ongoing IT maintenance and annual maintenance contracts for businesses in Kukatpally. Discuss your office requirements with Lucky Computers.";
const services = [
  ["Office network setup", "Discuss networking for your workplace, including your office layout, users and connectivity requirements. We assess the scope and confirm the equipment and setup quote before work begins."],
  ["Ongoing business IT maintenance", "Arrange maintenance for your office IT environment. The systems covered, tasks, visit frequency and service arrangements are agreed with your business in advance."],
  ["Annual maintenance contracts (AMC)", "Discuss an IT maintenance contract for your business. Coverage, exclusions, duration, charges and response arrangements are specified in the quote and agreement."],
  ["Business IT support", "A service for business owners and office teams. Share your workplace location, number of users and IT requirements so we can confirm a suitable scope of support."],
];

export const metadata = pageMetadata("Office Network Setup & IT AMC in Kukatpally | Lucky Computers", description, "/business-it-support/");

export default function BusinessSupportPage() {
  return <main id="main-content">
    <JsonLd description={description} services={services.map(([name])=>name)}/>
    <section className="section-pad bg-blue-50"><div className="container-width">
      <p className="eyebrow">Exclusively for offices & business customers</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">IT support for your business.<br/>Here in Kukatpally.</h1>
      <p className="my-6 max-w-2xl text-lg leading-8 text-slate-600">Office network setup, ongoing IT maintenance and annual maintenance contracts from Lucky Computers. This dedicated service accepts enquiries from offices and business customers only.</p>
      <p className="mb-6 font-semibold">Near Metro Pillar 808 · Open daily {SITE.hoursDisplay}</p>
      <StoreActions source="business_hero" message="Hi Lucky Computers, I found your business IT services page. Business name: __. Office location: __. I need office network setup, ongoing IT maintenance or an AMC. Requirements: __."/>
      <p className="mt-5 text-sm leading-7 text-slate-600">Please provide your business name and requirements when calling or visiting. Lucky Computers also operates a separate <Link className="underline" href="/repairs/">personal-device repair service</Link>; it is not included in this business IT offer.</p>
    </div></section>
    <section className="section-pad"><div className="container-width">
      <p className="eyebrow">Commercial IT services</p><h2 className="section-title mt-2">Discuss the support your office needs.</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">{services.map(([title,text])=><article className="rounded-2xl border border-slate-200 p-6" key={title}><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}</div>
      <p className="mt-6 text-sm leading-7 text-slate-600">Scope, equipment, price and scheduling are confirmed after discussing your requirements. No fixed response time or unlimited support is promised. Contact us before arranging an office visit or signing a maintenance contract.</p>
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
