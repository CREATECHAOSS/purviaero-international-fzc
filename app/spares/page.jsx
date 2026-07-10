import Link from "next/link";
import FadeIn from "@/components/FadeIn";

/* ─────────────────────────────────────────────
   SVG Illustration — Aircraft Spares
───────────────────────────────────────────── */
function SparesIllustration() {
  return (
    <div className="relative w-full h-[280px] bg-slate-100 overflow-hidden rounded-2xl">
      <img 
        src="/images/photo-1556388158-158ea5ccacbd.avif" 
        alt="Aircraft landing gear close-up" 
        className="w-full h-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   SVG Illustration — Expendables
───────────────────────────────────────────── */
function ExpendablesIllustration() {
  return (
    <div className="relative w-full h-[280px] bg-slate-100 overflow-hidden rounded-2xl">
      <img 
        src="/images/photo-1758873263428-f4b2edb45fe1.avif" 
        alt="Aviation hardware fasteners tray" 
        className="w-full h-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Bullet Component
───────────────────────────────────────────── */
function Bullet({ text }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-[6px] shrink-0">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="#0071CE" strokeWidth="1.5"/>
          <circle cx="6" cy="6" r="1.5" fill="#0071CE"/>
        </svg>
      </span>
      <span className="text-[#374151] leading-relaxed text-sm font-medium">{text}</span>
    </li>
  );
}

/* ─────────────────────────────────────────────
   Reusable Service Section
───────────────────────────────────────────── */
function ServiceSection({ id, bg, illustration, title, highlight, paragraph, bullets, reversed = false }) {
  return (
    <section id={id} style={{ backgroundColor: bg }} className="py-16 md:py-24 border-b border-black/5">
      <div className="section-container">
        <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-start gap-12 md:gap-20`}>
          <FadeIn className="w-full lg:w-[40%] flex-shrink-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative bg-white border border-primary/10 rounded-3xl p-6 shadow-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
                {illustration}
              </div>
              <div className="absolute -bottom-6 -right-6 md:right-10 bg-primary text-white p-6 rounded-2xl shadow-2xl border border-white/10 hidden md:block">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-1">Scope</p>
                <p className="text-xl font-bold font-rajdhani">{highlight}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="flex-1">
            <div className="inline-flex items-center gap-2 mb-6 uppercase tracking-[0.3em] font-bold text-[10px] text-accent">
              <span className="w-8 h-px bg-accent" />
              Secondary Capability
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-8 leading-[1.1] tracking-tight">
              {title}
            </h2>
            <p className="text-[#374151] text-lg leading-relaxed mb-10 font-medium opacity-90 border-l-4 border-secondary pl-8 py-2 bg-secondary/5 rounded-r-xl">
              {paragraph}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 mb-10">
              {bullets.map((b) => <Bullet key={b} text={b} />)}
            </ul>
            <Link href="/contact" className="btn-outline px-10 py-5 text-sm">
              Request Technical Offer
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export const metadata = {
  title: 'Spares & Rotables — Aircraft Components & Expendable Hardware | Purvi Aero International FZC',
  description: 'Technical sourcing for aircraft rotables, line-replaceable units, and expendable hardware. FAA 8130-3 / EASA Form 1 documentation. Purvi Aero International FZC, UAE.',
};

export default function SparesPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-primary py-16 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M54.826 10.511L31.247 2.448c-.812-.28-1.682-.28-2.494 0L5.174 10.511c-.71.243-1.174.912-1.174 1.664v35.65c0 .752.464 1.421 1.174 1.664l23.579 8.063c.406.14.83.21 1.253.21s.847-.07 1.253-.21l23.579-8.063c.71-.243 1.174-.912 1.174-1.664V12.175c0-.752-.464-1.421-1.174-1.664zM30 5.17l21.175 7.243L30 19.656 8.825 12.413 30 5.17zM6 14.281l23 7.872V52.28L6 44.408V14.281zm48 30.127l-23 7.872V22.153l23-7.872v30.127z\" fill=\"%230071CE\" fill-opacity=\"1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')" }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <span className="eyebrow !text-secondary mb-8 justify-center">Secondary Capability</span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tighter">
              Spares & <span className="text-secondary">Rotables</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium mb-12">
              Alongside our primary consumables supply, Purvi Aero sources rotable components, line-replaceable units, and expendable hardware for commercial and regional fleets.
            </p>
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white font-rajdhani">24hr</span>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">RFQ Target</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white font-rajdhani">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Trace Verified</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ROTABLES & LINE COMPONENTS ── */}
      <ServiceSection
        id="rotables"
        bg="#FFFFFF"
        illustration={<SparesIllustration />}
        title="Rotables & Line Components"
        highlight="GLOBAL POOL ACCESS"
        paragraph="Direct support for rotable components and line-replaceable units for commercial and regional platforms. We utilise an audited supplier network to source components with firm airworthiness standing."
        bullets={[
          "Engine & APU Components (OEM/OH)",
          "Flight Control & Landing Gear Spares",
          "Avionics & Communication Hardware",
          "Interior Components & Galley Spares",
          "Technical Alternate Parity Reviews",
          "FAA 8130-3 / EASA Form 1 Certification",
        ]}
        reversed={false}
      />

      {/* ── EXPENDABLES & HARDWARE ── */}
      <ServiceSection
        id="expendables"
        bg="#F9FAFB"
        illustration={<ExpendablesIllustration />}
        title="Expendables & Hardware"
        highlight="BULK TRACEABILITY"
        paragraph="High-usage expendables and structural hardware for base maintenance and heavy checks (C & D). We focus on line-item granularity and documentation for every fastener, seal, and filter element."
        bullets={[
          "AN, MS, NAS & Boeing Standard Fasteners",
          "Technical O-Rings, Seals & Gaskets",
          "Pneumatic & Hydraulic Filter Elements",
          "High-Usage Bulk Expendables Packages",
          "Kitting Services for Maintenance Events",
          "Manufacturer CoC Documentation Standards",
        ]}
        reversed={true}
      />

      {/* ── PLATFORM EXPERTISE ── */}
      <section className="bg-primary py-16 md:py-24 text-white relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Platform <br/><span className="text-secondary">Expertise</span></h2>
              <div className="space-y-8">
                {[
                  { title: "Airworthiness Documentation", desc: "Every component is vetted for documentation parity — FAA 8130-3 and EASA Form 1 as standard." },
                  { title: "Rapid Commercial Bids", desc: "Our RFQ desk targets sub-24hr turnaround for standard spare quotes." },
                  { title: "Logistical Coordination", desc: "Dispatch from international hubs to minimise transit time for your maintenance schedule." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                      <span className="text-secondary font-bold font-rajdhani text-lg">0{i+1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={200} className="bg-white p-10 md:p-14 rounded-[3rem] text-primary">
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Fleet Coverage</h3>
              <p className="text-[#374151] font-medium mb-10 opacity-80">Sourcing support for the world&apos;s most operated airframes and powerplants.</p>
              <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                {[
                  { label: "Boeing", sub: "737 Series / 777" },
                  { label: "Airbus", sub: "A320 Family / A330" },
                  { label: "Regional", sub: "ATR / Dash-8 / Embraer" },
                  { label: "Propulsion", sub: "CFM56 / V2500 / PW" },
                ].map((fleet, idx) => (
                  <div key={idx}>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-1">{fleet.label}</p>
                    <p className="text-lg font-extrabold tracking-tight">{fleet.sub}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="mt-12 btn-primary w-full text-center shadow-secondary/20">Request Spares Quote</Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container text-center">
          <FadeIn className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Need a Part Sourced?</h2>
            <p className="text-[#374151] text-lg font-medium opacity-80 mb-12 leading-relaxed">
              Submit your requirement list to our technical intake desk. Our team reviews every line item for part number accuracy, airworthiness documentation, and commercial viability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-12 py-5 text-lg shadow-secondary/20">Submit Spares RFQ</Link>
              <div className="text-left px-6 py-4 bg-[#F9FAFB] rounded-2xl border border-primary/5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Direct Intake</p>
                <p className="text-sm font-bold text-primary">rfq@purviaero.com</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
