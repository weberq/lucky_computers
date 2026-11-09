export default function WhyUs() {
  return <section className="section-pad bg-slate-950 text-white" id="why-us"><div className="container-width"><p className="eyebrow text-blue-300!">A store you can visit</p><h2 className="section-title mt-2">Talk it through before you choose.</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{[
    ["Choose around your needs","Tell us your budget, the software you use and how you work. Discuss suitable specifications in person."],
    ["Ask about the details","For a refurbished unit, confirm its condition, battery, included charger and any warranty before purchasing."],
    ["Find us every day","Visit on Hanuman Temple Road near Kukatpally Metro Pillar 808, from 10:30 AM to 9:30 PM."]
  ].map(([title,text])=><div key={title} className="border-t border-slate-700 pt-5"><h3 className="text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{text}</p></div>)}</div></div></section>;
}
