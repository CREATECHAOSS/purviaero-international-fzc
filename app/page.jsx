import Link from "next/link";
import FadeIn from "@/components/FadeIn";

/* ─────────────────────────────────────────────
   Turbine / Engine Cross-Section Schematic
───────────────────────────────────────────── */
function TurbineSchematic() {
  const cx = 240;
  const cy = 248;
  const BLADE_COUNT = 7;
  const blades = Array.from({ length: BLADE_COUNT }, (_, i) => {
    const baseDeg = (i * 360) / BLADE_COUNT;
    const baseRad = (baseDeg * Math.PI) / 180;
    const sweepRad = (38 * Math.PI) / 180;
    const innerR = 52;
    const outerR = 168;
    const innerSweep = 22 * Math.PI / 180;
    const iLx = cx + innerR * Math.cos(baseRad - innerSweep / 2);
    const iLy = cy + innerR * Math.sin(baseRad - innerSweep / 2);
    const iTx = cx + innerR * Math.cos(baseRad + innerSweep / 2);
    const iTy = cy + innerR * Math.sin(baseRad + innerSweep / 2);
    const oLx = cx + outerR * Math.cos(baseRad - sweepRad / 2);
    const oLy = cy + outerR * Math.sin(baseRad - sweepRad / 2);
    const oTx = cx + outerR * Math.cos(baseRad + sweepRad / 2);
    const oTy = cy + outerR * Math.sin(baseRad + sweepRad / 2);
    const camberR = (innerR + outerR) / 2 + 14;
    const camberRad = baseRad - 0.18;
    const cpLx = cx + camberR * Math.cos(camberRad - sweepRad * 0.38);
    const cpLy = cy + camberR * Math.sin(camberRad - sweepRad * 0.38);
    return { iLx, iLy, iTx, iTy, oLx, oLy, oTx, oTy, cpLx, cpLy };
  });

  return (
    <svg viewBox="0 0 480 496" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[520px] mx-auto select-none opacity-90 transition-opacity hover:opacity-100">
      <defs>
        <pattern id="eng-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M 24 0 L 0 0 0 24" fill="none" stroke="#000543" strokeWidth="0.5" /></pattern>
        <pattern id="eng-grid-major" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse"><rect width="120" height="120" fill="url(#eng-grid)" /><path d="M 120 0 L 0 0 0 120" fill="none" stroke="#000543" strokeWidth="1" /></pattern>
        <clipPath id="panel-clip"><rect x="16" y="16" width="448" height="448" rx="4" /></clipPath>
      </defs>
      <rect x="16" y="16" width="448" height="448" rx="4" fill="url(#eng-grid-major)" fillOpacity="0.10" />
      <rect x="16" y="16" width="448" height="448" rx="4" stroke="#000543" strokeWidth="1" strokeOpacity="0.18" />
      {[[28, 28], [452, 28], [28, 452], [452, 452]].map(([mx, my], i) => (
        <g key={i}>
          <line x1={mx} y1={my} x2={mx + (i % 2 === 0 ? 14 : -14)} y2={my} stroke="#00999F" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1={mx} y1={my} x2={mx} y2={my + (i < 2 ? 14 : -14)} stroke="#00999F" strokeWidth="1.5" strokeOpacity="0.6" />
        </g>
      ))}
      <circle cx={cx} cy={cy} r="198" stroke="#000543" strokeWidth="1.2" strokeOpacity="0.30" />
      <circle cx={cx} cy={cy} r="178" stroke="#000543" strokeWidth="1.5" strokeOpacity="0.55" />
      <g clipPath="url(#panel-clip)">
        {blades.map((b, i) => (
          <path key={i} d={`M ${b.iLx} ${b.iLy} Q ${b.cpLx} ${b.cpLy} ${b.oLx} ${b.oLy} A 178 178 0 0 1 ${b.oTx} ${b.oTy} L ${b.iTx} ${b.iTy} A 52 52 0 0 0 ${b.iLx} ${b.iLy} Z`} fill="#000543" fillOpacity="0.04" stroke="#000543" strokeWidth="1.2" strokeOpacity="0.65" />
        ))}
      </g>
      <circle cx={cx} cy={cy} r="52" stroke="#0071CE" strokeWidth="1" strokeOpacity="0.40" />
      <circle cx={cx} cy={cy} r="14" stroke="#000543" strokeWidth="1.5" strokeOpacity="0.80" />
    </svg>
  );
}

const SERVICES = [
  { 
    title: "Spares Procurement", 
    description: "End-to-end technical sourcing for rotables and expendables. We leverage an audited global supplier network to ensure rapid RFQ turnaround and verified parts availability for mission-critical operations." 
  },
  { 
    title: "Consumables & Chemicals", 
    description: "Specialized sourcing for aviation-grade chemicals, sealants, fluids, and lubricants. Every line item is verified for batch-trace integrity and supplied with complete SDS and technical data sheets." 
  },
  { 
    title: "Rotables & Supply Chain", 
    description: "Managed repair coordination and exchange programmes designed to minimize aircraft ground time. Our supply chain specialists optimize your rotable asset pool and repair cycle efficiency." 
  },
];

const BANNER_ITEMS = [
  { label: "Global Supplier\nNetwork", icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0071CE" strokeWidth="1.5"/><path d="M2 12H22" stroke="#0071CE" strokeWidth="1.5"/><path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2617 12 2C9.49872 19.2617 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="#0071CE" strokeWidth="1.5"/></svg> },
  { label: "Full Traceability\nDocumentation", icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10" stroke="#0071CE" strokeWidth="1.5"/><path d="M20 12V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H12" stroke="#0071CE" strokeWidth="1.5"/><path d="M15 4H20V9" stroke="#0071CE" strokeWidth="1.5"/></svg> },
  { label: "High-Tempo\nResponse", icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="#0071CE" strokeWidth="1.5"/></svg> },
  { label: "Enterprise\nAviation", icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M3 10L12 3L21 10V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10Z" stroke="#0071CE" strokeWidth="1.5"/><path d="M9 21V12H15V21" stroke="#0071CE" strokeWidth="1.5"/></svg> },
];

export const metadata = {
  title: 'Purvi Aero International FZC | Aviation Spares, Consumables & Rotables',
  description: 'Specialists in aircraft spares, MRO consumables, chemicals, expendables and rotables for the global aviation industry. One Source. Every Part.',
};

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-16 md:pt-32 pb-16 md:pb-24 bg-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(14,28,54,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,28,54,1) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 text-center lg:text-left">
            <FadeIn className="flex-1">
              <span className="eyebrow">Aviation Sourcing & Technical Support</span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-[1.05] font-extrabold mb-8 text-primary">
                Precision Spares <br />
                <span className="text-secondary">for Global Fleets</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 text-[#374151] font-medium border-l-4 border-accent pl-6 py-2">
                Providing airlines and MRO operators with a dedicated procurement desk for spares, rotables, and technical consumables. We prioritize operational speed and airworthiness trace for every line item.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-primary">Direct RFQ Portal</Link>
                <Link href="/services" className="btn-outline">Our Capabilities</Link>
              </div>
            </FadeIn>
            <FadeIn delay={200} className="flex-1 w-full max-w-[500px] lg:max-w-none">
              <TurbineSchematic />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="bg-[#F9FAFB] py-16 md:py-24 border-t border-black/5">
        <div className="section-container">
          <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Procurement Scopes</h2>
            <p className="mt-4 text-[#374151] font-medium opacity-70">Focusing on high-availability sourcing and rigorous technical compliance across three primary procurement desks.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((s, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="bg-white border border-primary/5 p-10 sm:p-12 rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-secondary/20 group">
                <h3 className="text-2xl font-bold mb-6 text-primary">{s.title}</h3>
                <p className="text-[#374151] font-medium opacity-80 leading-relaxed text-sm">
                  {s.description}
                </p>
                <div className="mt-8 h-1 w-12 bg-accent opacity-40 group-hover:w-24 transition-all duration-500" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET SUPPORT & INDUSTRIES SERVED ── */}
      <section className="bg-white py-16 md:py-24 border-b border-black/5">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
            <FadeIn className="lg:w-1/2">
              <span className="eyebrow">Enterprise Fleet Support</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Industries & Specialized Hubs</h2>
              <p className="text-[#374151] text-lg font-medium leading-relaxed mb-10">
                We act as a mission-critical extension of your procurement team, supporting a diverse range of aviation segments with specialized technical knowledge and logistic hubs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Commercial Airlines", desc: "Line and Base maintenance support for narrow and wide-body fleets." },
                  { title: "MRO Facilities", desc: "Just-in-time delivery of consumables and expendables for heavy maintenance." },
                  { title: "Regional Operators", desc: "Specialized rotable supporting for ATR, Dash-8, and regional jet platforms." },
                  { title: "General Aviation", desc: "Technical sourcing for corporate jet components and specialized avionics." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                      <p className="text-xs text-[#374151] opacity-70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={200} className="lg:w-1/2 bg-primary rounded-3xl p-10 md:p-16 relative overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-secondary/20 transition-all duration-700" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Technical Sourcing Advantage</h3>
                <ul className="space-y-6">
                  {[
                    "Standard Airworthiness Docs (FAA 8130-3 / EASA Form 1)",
                    "OEM & Authorized Supplier Channel Vetting",
                    "Batch Traceability for Chemicals & Consumables",
                    "AOG / Critical Lead Time Monitoring",
                    "Technical Parity Review for Legacy Parts",
                  ].map((list, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/80 font-medium text-sm">
                      <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {list}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="mt-10 btn-primary w-full text-center">View Technical Scopes</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── OPERATIONAL WORKFLOW ── */}
      <section className="bg-[#F9FAFB] py-16 md:py-24 border-y border-black/5">
        <div className="section-container">
          <FadeIn className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
            <span className="eyebrow">The Procurement Cycle</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">How We Work</h2>
            <p className="mt-6 text-[#374151] font-medium opacity-70 text-lg">A systematic approach to aviation sourcing, designed to ensure technical compliance and logistical efficiency for our global partners.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "RFQ Submission", desc: "Operators submit requirements through our technical intake portal or via email at rfq@purviaero.com." },
              { step: "02", title: "Technical Review", desc: "Our specialists vet line items for part number accuracy, alternate parity, and required certification standards." },
              { step: "03", title: "Commercial Quote", desc: "We provide detailed commercial offers including firm leads, condition verification, and airworthiness info." },
              { step: "04", title: "Logistical Dispatch", desc: "Following approval, units are dispatched via priority air freight or NFO courier services for rapid delivery." },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 100} className="relative p-10 border border-primary/5 rounded-2xl bg-white shadow-sm hover:border-accent/30 transition-all group">
                <span className="text-5xl font-extrabold text-primary/5 absolute top-6 right-6 italic group-hover:text-accent/10 transition-colors select-none">{item.step}</span>
                <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">{item.title}</h4>
                <p className="text-sm text-[#374151] font-medium leading-relaxed opacity-90">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTATION & TRACEABILITY ── */}
      <section className="bg-white py-16 md:py-28 border-b border-black/5">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
            <FadeIn className="lg:w-1/3 text-center lg:text-left">
              <span className="eyebrow">Rigorous Documentation</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Traceability & Reliability</h2>
              <p className="text-[#374151] font-medium leading-relaxed text-lg">Every aviation component sourced by Purvi Aero undergoes a documentation audit to ensure it meets the highest standards of technical trace and airworthiness.</p>
              <div className="mt-10 p-6 bg-[#F9FAFB] rounded-2xl border-l-4 border-secondary text-left">
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Technical Desk</p>
                <p className="text-xs text-[#374151] opacity-70 leading-relaxed font-medium italic">Our team monitors cure-dates, shelf-life, and technical parity for all consumable and chemical line items.</p>
              </div>
            </FadeIn>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { title: "Airworthiness Docs", desc: "FAA 8130-3 and EASA Form 1 documentation provided with components where applicable." },
                { title: "Standard Trace", desc: "OEM and Manufacturer Certificate of Conformance (CoC) ensured for all hardware line items." },
                { title: "Batch Monitoring", desc: "Full batch-level tracking for MRO chemicals, fasteners, and standard hardware units." },
                { title: "Shelf-Life Visibility", desc: "Precise cure date and expiry monitoring for all limited-life sealants and chemicals." },
                { title: "Global Paperwork", desc: "Accurate export documentation and commercial paperwork for seamless global logistics hubs." },
                { title: "Safety Data Sheets", desc: "Comprehensive technical data and SDS provided for all chemical materials sourced." },
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 50} className="flex gap-4 border-l border-primary/10 pl-6 group hover:border-secondary transition-colors duration-500">
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-2">{item.title}</h4>
                    <p className="text-xs text-[#374151] font-medium opacity-70 leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#0071CE 1.5px, transparent 1.5px)", backgroundSize: "40px 40px" }} />
        <div className="section-container relative z-10 text-center">
          <FadeIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">Your Technical <span className="text-secondary">RFQ Desk</span></h2>
            <p className="text-white/60 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed italic">
              "One Source. Every Part. Purvi Aero International FZC is dedicated to supporting the global aviation supply chain with operational speed and technical rigor."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary px-12 py-5 text-lg">Submit Spares Requirement</Link>
              <div className="flex flex-col items-center sm:items-start text-white/40">
                <span className="text-[10px] font-bold uppercase tracking-widest mb-1">Direct Technical Line</span>
                <span className="text-sm font-bold text-white/80">rfq@purviaero.com</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER NAVY GRID ── */}
      <section className="bg-white py-16 md:py-24 border-t border-black/5">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
            {BANNER_ITEMS.map(({ label, icon }, idx) => (
              <FadeIn key={label} delay={idx * 100} className="flex flex-col items-center text-center group">
                <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
                  {icon}
                </div>
                <h4 className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-pre-line leading-relaxed">
                  {label}
                </h4>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
