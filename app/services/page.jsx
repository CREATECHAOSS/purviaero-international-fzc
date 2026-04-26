import Link from "next/link";
import FadeIn from "@/components/FadeIn";

/* ─────────────────────────────────────────────
   SVG Illustration 1 — Aircraft Spares
   Theme: Component schematic
───────────────────────────────────────────── */
function SparesIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[420px] mx-auto select-none">
      <defs>
        <pattern id="grid1" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#000543" strokeWidth="0.4" strokeOpacity="0.1"/>
        </pattern>
      </defs>
      <rect width="400" height="360" fill="url(#grid1)" rx="16"/>
      <rect x="140" y="120" width="120" height="120" rx="6" stroke="#000543" strokeWidth="2" fill="white"/>
      <circle cx="200" cy="180" r="28" stroke="#0071CE" strokeWidth="2"/>
      <circle cx="200" cy="180" r="16" stroke="#0071CE" strokeWidth="1.5" strokeDasharray="4 3"/>
      <circle cx="200" cy="180" r="5" fill="#0071CE"/>
      <rect x="60" y="165" width="80" height="30" rx="4" stroke="#000543" strokeWidth="1.5" fill="white"/>
      <rect x="260" y="165" width="80" height="30" rx="4" stroke="#000543" strokeWidth="1.5" fill="white"/>
      <rect x="30" y="50" width="80" height="22" rx="3" fill="#000543"/>
      <text x="70" y="65" textAnchor="middle" fontSize="8" fill="#00999F" fontFamily="sans-serif" letterSpacing="1" fontWeight="600">P/N VERIFIED</text>
      <rect x="290" y="290" width="80" height="22" rx="3" fill="#000543"/>
      <text x="330" y="305" textAnchor="middle" fontSize="8" fill="#00999F" fontFamily="sans-serif" letterSpacing="1" fontWeight="600">DOCUMENTATION</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG Illustration 2 — MRO Consumables
───────────────────────────────────────────── */
function ConsumablesIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[420px] mx-auto select-none">
      <defs>
        <pattern id="grid2" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#000543" strokeWidth="0.4" strokeOpacity="0.1"/>
        </pattern>
      </defs>
      <rect width="400" height="360" fill="url(#grid2)" rx="16"/>
      <rect x="148" y="90" width="72" height="160" rx="8" stroke="#000543" strokeWidth="2" fill="white"/>
      <line x1="148" y1="170" x2="220" y2="170" stroke="#0071CE" strokeWidth="1.5"/>
      <rect x="160" y="82" width="48" height="12" rx="3" stroke="#000543" strokeWidth="1.5" fill="white"/>
      <rect x="30" y="270" width="90" height="22" rx="3" fill="#000543"/>
      <text x="75" y="285" textAnchor="middle" fontSize="8" fill="#00999F" fontFamily="sans-serif" letterSpacing="0.5" fontWeight="600">SPEC VERIFIED</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG Illustration 3 — Expendables
───────────────────────────────────────────── */
function ExpendablesIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[420px] mx-auto select-none">
      <defs>
        <pattern id="grid3exp" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#000543" strokeWidth="0.4" strokeOpacity="0.1"/>
        </pattern>
      </defs>
      <rect width="400" height="360" fill="url(#grid3exp)" rx="16"/>
      <circle cx="90" cy="100" r="38" stroke="#000543" strokeWidth="2" fill="white"/>
      <circle cx="90" cy="100" r="24" stroke="#0071CE" strokeWidth="2.5"/>
      <rect x="176" y="44" width="28" height="56" rx="4" stroke="#000543" strokeWidth="2" fill="white"/>
      <rect x="168" y="44" width="44" height="14" rx="3" stroke="#000543" strokeWidth="1.5" fill="white"/>
      <rect x="292" y="56" width="60" height="80" rx="8" stroke="#000543" strokeWidth="2" fill="white"/>
      <rect x="30" y="300" width="110" height="22" rx="3" fill="#000543"/>
      <text x="85" y="315" textAnchor="middle" fontSize="8" fill="#00999F" fontFamily="sans-serif" letterSpacing="0.5" fontWeight="600">CERT & TRACEABLE</text>
    </svg>
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
          
          {/* Illustration Content */}
          <FadeIn className="w-full lg:w-[40%] flex-shrink-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative bg-white border border-primary/10 rounded-3xl p-6 shadow-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
                {illustration}
              </div>
              {/* Technical stat label */}
              <div className="absolute -bottom-6 -right-6 md:right-10 bg-primary text-white p-6 rounded-2xl shadow-2xl border border-white/10 hidden md:block">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-1">Scope Availability</p>
                <p className="text-xl font-bold font-rajdhani">{highlight}</p>
              </div>
            </div>
          </FadeIn>

          {/* Text Content */}
          <FadeIn delay={150} className="flex-1">
            <div className="inline-flex items-center gap-2 mb-6 uppercase tracking-[0.3em] font-bold text-[10px] text-accent">
              <span className="w-8 h-px bg-accent" />
              Technical Capability
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
  title: 'Aviation Parts & Procurement Capabilities | Purvi Aero International FZC',
  description: 'Technical sourcing for aircraft spares, MRO consumables, chemicals, expendables and rotables. End-to-end procurement solutions for global aviation operators.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-primary py-16 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M54.826 10.511L31.247 2.448c-.812-.28-1.682-.28-2.494 0L5.174 10.511c-.71.243-1.174.912-1.174 1.664v35.65c0 .752.464 1.421 1.174 1.664l23.579 8.063c.406.14.83.21 1.253.21s.847-.07 1.253-.21l23.579-8.063c.71-.243 1.174-.912 1.174-1.664V12.175c0-.752-.464-1.421-1.174-1.664zM30 5.17l21.175 7.243L30 19.656 8.825 12.413 30 5.17zM6 14.281l23 7.872V52.28L6 44.408V14.281zm48 30.127l-23 7.872V22.153l23-7.872v30.127z\" fill=\"%230071CE\" fill-opacity=\"1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')" }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <span className="eyebrow !text-secondary mb-8 justify-center">Strategic Sourcing</span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tighter">
              Procurement <span className="text-secondary">Verticals</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium mb-12 italic">
              "Managing the technical complexities of aviation procurement with institutional rigor and operational speed."
            </p>
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white font-rajdhani">24hr</span>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">RFQ Target</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white font-rajdhani">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Trace Check</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CAPABILITY TIERS ── */}
      <ServiceSection
        id="aircraft-spares"
        bg="#FFFFFF"
        illustration={<SparesIllustration />}
        title="Spares & Line Components"
        highlight="GLOBAL POOL ACCESS"
        paragraph="Direct support for rotables and line components for commercial and regional platforms. We utilize an audited supplier network to source components with firm airworthiness standing."
        bullets={[
          "Engine & APU Components (OEM/OH)",
          "Flight Control & Landing Gear Spares",
          "Avionics & Communication Hardware",
          "Interior Components & Gallery Spares",
          "Technical Alternate Parity Reviews",
          "FAA 8130-3 / EASA Form 1 Certification",
        ]}
        reversed={false}
      />

      <ServiceSection
        id="mro-consumables"
        bg="#F9FAFB"
        illustration={<ConsumablesIllustration />}
        title="Technical Chemicals & Fluids"
        highlight="SPEC-LOCKED SUPPLY"
        paragraph="Handling the technical compliance requirements for aerospace chemicals and fluids. Our team monitors batch trace, cure-dates, and technical spec parity for every shipment."
        bullets={[
          "MIL-SPEC Lubricants & Hydraulic Fluids",
          "Aerospace Sealants & Structural Adhesives",
          "Technical Cleaning Solutions & Degreasers",
          "Batch Certification & Trace Visibility",
          "SDS & Hazmat Compliance Management",
          "Cold-Chain & Specialized Storage Monitoring",
        ]}
        reversed={true}
      />

      <ServiceSection
        id="expendables-hardware"
        bg="#FFFFFF"
        illustration={<ExpendablesIllustration />}
        title="Expendables & Hardware"
        highlight="BULK TRACEABILITY"
        paragraph="Optimizing the supply of high-usage expendables and structural hardware for base maintenance and heavy checks (C & D). We focus on line-item granularity and documentation."
        bullets={[
          "AN, MS, NAS & Boeing Standard Fasteners",
          "Technical O-Rings, Seals & Gaskets",
          "Pneumatic & Hydraulic Filter Elements",
          "High-Usage Bulk Expendables Packages",
          "Kitting Services for Maintenance Events",
          "Manufacturer CoC Documentation Standards",
        ]}
        reversed={false}
      />

      {/* ── WHY BUYERS WORK WITH US (Trust Section) ── */}
      <section className="bg-primary py-16 md:py-24 text-white relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Why Sourcing Teams <br/><span className="text-secondary">Choose Purvi Aero</span></h2>
              <div className="space-y-8">
                {[
                  { title: "Defensible Airworthiness", desc: "Every component is vetted for documentation parity, ensuring technically sound units for your fleet." },
                  { title: "Rapid Commercial Bids", desc: "Our prioritized RFQ desk targets sub-24hr turnaround for standard spare quotes." },
                  { title: "Logistical Rigor", desc: "Strategic dispatch from international hubs to minimize grounded time (AOG Support)." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-secondary transition-colors">
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
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Platform Expertise</h3>
              <p className="text-[#374151] font-medium mb-10 opacity-80 italic">"Providing specialized technical sourcing support for the world's most critical airframes and powerplants."</p>
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
              <Link href="/contact" className="mt-12 btn-primary w-full text-center shadow-secondary/20">Start Capability Review</Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── RFQ CTA ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container text-center">
          <FadeIn className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Ready for Quote?</h2>
            <p className="text-[#374151] text-lg font-medium opacity-80 mb-12 leading-relaxed">
              Experience the efficiency of a dedicated technical sourcing partner. Submit your requirement lists directly to our intake desk for immediate processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-12 py-5 text-lg shadow-secondary/20">Submit Requirement List</Link>
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
