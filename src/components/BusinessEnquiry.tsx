"use client";
import { useState, type FormEvent } from "react";
import { whatsappUrl } from "@/lib/site";

export default function BusinessEnquiry() {
  const [handoff, setHandoff] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = ["Hello Lucky Computers, I represent a business and need business-only IT support.", `Business: ${String(data.get("business")).trim()}`, `Requirement: ${data.get("service")}`, `Details: ${String(data.get("details")).trim()}`].join("\n");
    const url = whatsappUrl(message);
    setHandoff(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
    <h2 className="text-2xl font-bold">Discuss your business requirements</h2>
    <p className="mt-2 text-sm leading-6 text-slate-600">For offices and business customers only. This form opens a WhatsApp draft for you to review and send.</p>
    <label className="mt-6 block text-sm font-semibold" htmlFor="business-name">Business or organisation name</label>
    <input className="form-input" id="business-name" name="business" autoComplete="organization" required maxLength={150}/>
    <label className="mt-5 block text-sm font-semibold" htmlFor="business-service">Service required</label>
    <select className="form-input" id="business-service" name="service" required defaultValue="">
      <option value="" disabled>Select a business service</option>
      {["Office laptop or desktop repair", "Business computer maintenance", "Office RAM or SSD upgrades", "Business IT support"].map(service=><option key={service}>{service}</option>)}
    </select>
    <label className="mt-5 block text-sm font-semibold" htmlFor="business-details">Devices and requirements</label>
    <textarea className="form-input min-h-32" id="business-details" name="details" required maxLength={1500} placeholder="Business location, number of office devices, models and the issue…"/>
    <label className="mt-5 flex items-start gap-3 text-sm leading-6"><input className="mt-1.5" type="checkbox" required name="businessOnly"/>I represent a business and am enquiring about devices used by that business, not personal-device repairs.</label>
    <p className="my-4 text-xs leading-5 text-slate-500">Do not include passwords, confidential files or payment details. This website does not store your enquiry.</p>
    <button className="btn-primary w-full" type="submit" data-action="whatsapp_enquiry_click" data-placement="business_enquiry">Prepare business enquiry</button>
    {handoff&&<p role="status" className="mt-4 text-sm leading-6">Your enquiry has not been sent yet. Review and send it in WhatsApp. <a className="text-blue-700 underline" href={handoff} target="_blank" rel="noopener noreferrer">Open WhatsApp again</a>.</p>}
  </form>;
}
