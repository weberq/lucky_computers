"use client";
import { useState, type FormEvent } from "react";
import { whatsappUrl } from "@/lib/site";

export default function EnquiryForm({ salesOnly = false }: { salesOnly?: boolean }) {
  const [handoff, setHandoff] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = ["Hello Lucky Computers,", `I'm interested in: ${data.get("interest")}`, `Details: ${String(data.get("message")).trim()}`].join("\n");
    const url = whatsappUrl(message);
    setHandoff(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
    <h3 className="text-2xl font-bold">Plan your visit</h3>
    <p className="mt-2 text-sm leading-6 text-slate-600">Tell us what you’re looking for. This opens a draft in WhatsApp for you to review and send.</p>
    <label className="mt-6 block text-sm font-semibold" htmlFor="interest">I’m interested in</label>
    <select className="form-input" id="interest" name="interest" required defaultValue="">
      <option value="" disabled>Select an option</option>
      {["Refurbished laptop or desktop","New laptop on request","Custom PC","Computer accessories","Mobile accessories",...(!salesOnly?["Laptop or desktop repair","Mobile or iPhone repair"]:[])].map(item=><option key={item}>{item}</option>)}
    </select>
    <label className="mt-5 block text-sm font-semibold" htmlFor="enquiry-message">Your requirements</label>
    <textarea className="form-input min-h-32" id="enquiry-message" name="message" required maxLength={1500} placeholder="Your budget, preferred specifications, device model or question…" />
    <p className="my-4 text-xs leading-5 text-slate-500">Please don’t include passwords or payment details. Your message is not stored on this website.</p>
    <button className="btn-primary w-full" type="submit" data-action="whatsapp_enquiry_click" data-placement="enquiry_form">Continue in WhatsApp</button>
    {handoff&&<p role="status" className="mt-4 text-sm leading-6 text-slate-700">Your enquiry has not been sent yet. Review and send it in WhatsApp. <a className="text-blue-700 underline" href={handoff} target="_blank" rel="noopener noreferrer">Open WhatsApp again</a>.</p>}
  </form>;
}
