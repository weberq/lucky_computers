"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";
const TAG_ID = GA_ID || ADS_ID;
const STORAGE_KEY = "lucky-measurement-consent";
const ACTIONS = new Set(["directions_click", "call_click", "whatsapp_click", "whatsapp_enquiry_click"]);
declare global {
  interface Window { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void; }
}

export default function Analytics() {
  const pathname = usePathname();
  const lastPage = useRef("");
  const initialized = useRef(false);
  const [choice, setChoice] = useState<string | null>(null);
  useEffect(() => {
    if (!TAG_ID) return;
    let saved: string | null = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch { /* Storage can be unavailable. */ }
    // Read browser storage after hydration without making server HTML depend on it.
    queueMicrotask(() => setChoice(saved === "accepted" || saved === "declined" ? saved : "unset"));
  }, []);
  useEffect(() => {
    if (!TAG_ID || choice !== "accepted") return;
    window.dataLayer = window.dataLayer || [];
    // gtag expects the array-like arguments object, not a nested event payload.
    // eslint-disable-next-line prefer-rest-params -- The Google tag API uses an Arguments object.
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("consent", initialized.current ? "update" : "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    if (!initialized.current) {
    initialized.current = true;
    window.gtag("js", new Date());
    if (GA_ID) window.gtag("config", GA_ID, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
    if (ADS_ID) window.gtag("config", ADS_ID, { allow_ad_personalization_signals: false });
    }
    const listener = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-action]") : null;
      if (!target || !ACTIONS.has(target.dataset.action ?? "")) return;
      // Don't record invalid form submissions or any enquiry text/contact data.
      if (target instanceof HTMLButtonElement && target.form && !target.form.checkValidity()) return;
      window.gtag?.("event", target.dataset.action, {
        action_placement: target.dataset.placement ?? "page",
        page_path: window.location.pathname,
        transport_type: "beacon",
      });
    };
    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, [choice]);

  useEffect(() => {
    if (!GA_ID || choice !== "accepted" || !window.gtag || lastPage.current === pathname) return;
    lastPage.current = pathname;
    window.gtag("event", "page_view", { send_to: GA_ID, page_path: pathname, page_location: window.location.origin + pathname });
  }, [choice, pathname]);

  function choose(value: "accepted" | "declined") {
    try { localStorage.setItem(STORAGE_KEY, value); } catch { /* This visit still respects the choice. */ }
    if (value === "declined") window.gtag?.("consent", "update", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    setChoice(value);
  }
  if (!TAG_ID) return null;
  return <>
    {choice === "accepted" && <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(TAG_ID)}`} strategy="afterInteractive"/>}
    {choice === "unset" ? <aside aria-label="Optional website measurement" className="fixed bottom-24 left-4 right-4 z-[60] max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:bottom-4"><p className="font-bold">Help us improve store visits</p><p className="mt-2 text-sm leading-6 text-slate-600">Allow optional measurement of page views and directions, call and WhatsApp clicks? Your enquiry text is not included.</p><div className="mt-4 flex gap-3"><button className="btn-primary" onClick={()=>choose("accepted")}>Allow measurement</button><button className="btn-secondary" onClick={()=>choose("declined")}>No thanks</button></div></aside> : <button className="mb-24 ml-5 text-xs underline text-slate-600 md:mb-4" onClick={()=>setChoice("unset")}>Measurement preferences</button>}
  </>;
}
