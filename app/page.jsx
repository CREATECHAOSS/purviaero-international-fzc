import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { BRAND_LOGOS } from "@/components/BrandLogos";
import brandManifest from "@/public/logos.json";

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[4/3] mx-auto select-none">
      {/* Background Grid Pattern under the images */}
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `linear-gradient(rgba(14,28,54,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,28,54,1) 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
      
      {/* Main Jet Engine Maintenance Photo */}
      <div className="absolute top-0 left-0 w-[80%] h-[80%] bg-slate-100 overflow-hidden rounded-3xl border border-primary/10 shadow-2xl">
        <img 
          src="/images/premium_photo-1661885246527-dc13405d3ec6.avif" 
          alt="Jet engine maintenance" 
          className="w-full h-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Overlapping Chemical Consumables Storage Photo */}
      <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-slate-100 overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
        <img 
          src="/images/kimya-deposu-raf-sistemleri.jpg" 
          alt="Aviation MRO chemical supply storage" 
          className="w-full h-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

const CONSUMABLE_CATEGORIES = [
  {
    code: "CHEM-01",
    title: "Lubricants & Greases",
    desc: "Aeroshell turbine oils, hydraulic fluids, and specialised greases for extreme environments.",
    products: ["AeroShell Turbine Oil 500", "AeroShell Grease 22", "AeroShell Fluid 41"],
    link: "/consumables#lubricants"
  },
  {
    code: "CHEM-02",
    title: "Adhesives & Sealants",
    desc: "Structural epoxies, fuel-tank sealants, and threadlockers verified to Boeing and Airbus standards.",
    products: ["Araldite structural epoxies", "PR-1440 fuel tank sealants", "Loctite threadlockers"],
    link: "/consumables#adhesives"
  },
  {
    code: "CHEM-03",
    title: "Cleaning Solvents & Degreasers",
    desc: "Aviation-approved solvents and aqueous degreasers formulated for turbine washes and parts overhaul.",
    products: ["Zip-Chem solvent formulas", "Brulin degreaser liquids", "Chemtronics technical sprays"],
    link: "/consumables#cleaning"
  },
  {
    code: "CHEM-04",
    title: "Aerospace Paints & Coatings",
    desc: "High-solids polyurethane topcoats, epoxy primers, and specialised chemical protective finishes.",
    products: ["PPG Desothane topcoats", "AkzoNobel coatings", "Sherwin-Williams primers"],
    link: "/consumables#paints"
  },
  {
    code: "CHEM-05",
    title: "General MRO Chemicals",
    desc: "Corrosion inhibitor compounds, pre-mixed sealant kits, and structural primers for routine maintenance.",
    products: ["Corrosion Inhibitors (CICs)", "Pre-mixed sealant packs", "Airframe primers"],
    link: "/consumables#general"
  }
];

export const metadata = {
  title: 'Purvi Aero International FZC | Aviation MRO Consumables Supply & Logistics',
  description: 'Specialists in aviation-grade lubricants, sealants, adhesives, cleaning solvents, aerospace coatings, and general MRO chemicals. UAE-based supplier serving global operators.',
};

export default function Home() {
  return (
    <main className="bg-white">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-16 md:pt-32 pb-12 bg-white border-b border-black/5">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(14,28,54,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,28,54,1) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 text-left">
            <FadeIn className="flex-1">
              <span className="eyebrow text-accent font-mono tracking-widest">MRO Chemical Logistics</span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-[1.05] font-extrabold mb-8 text-primary">
                Sourcing & Delivering <br />
                <span className="text-secondary">Aviation Consumables</span>
              </h1>
              <p className="text-base leading-relaxed mb-10 max-w-lg text-[#374151] font-medium border-l-4 border-accent pl-6 py-2">
                We supply AeroShell lubricants, PPG coatings, and Pidilite adhesives from our UAE logistics hub. Every batch is delivered with verified shelf-life tracking and manufacturer documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link href="/contact" className="btn-primary focus:outline-none focus:ring-2 focus:ring-secondary">Request Quote</Link>
                <Link href="/consumables" className="btn-outline focus:outline-none focus:ring-2 focus:ring-primary">MRO Consumables</Link>
              </div>
            </FadeIn>
            <FadeIn delay={200} className="flex-1 w-full max-w-[500px] lg:max-w-none">
              <HeroVisual />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── BRANDS WE SUPPORT (IMMEDIATELY BELOW HERO) ── */}
      <section className="bg-white py-12 border-b border-black/5">
        <div className="section-container">
          <div className="text-left mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#374151] opacity-60">Verified Product Lines & Brands In Stock</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {brandManifest.map((brand) => {
              const BrandIcon = BRAND_LOGOS[brand.id]?.svg;
              return (
                <FadeIn key={brand.id} className="flex flex-col items-center justify-center p-4 bg-[#F9FAFB] rounded-xl border border-primary/5 group hover:border-[#B8872A]/40 transition-all duration-300 h-24">
                  {BrandIcon ? (
                    <div className="w-full max-h-10 flex items-center justify-center text-primary opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                      <BrandIcon className="h-8 w-auto" />
                    </div>
                  ) : (
                    <span className="text-xs font-bold text-primary/60 group-hover:text-primary transition-colors text-center">{brand.name}</span>
                  )}
                  <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-[#374151]/40 mt-2 group-hover:text-[#B8872A] transition-colors">{brand.category}</span>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONSUMABLES CATEGORIES GRID ── */}
      <section className="bg-[#F9FAFB] py-16 md:py-24 border-b border-black/5">
        <div className="section-container">
          <FadeIn className="text-left mb-16 max-w-2xl">
            <span className="eyebrow text-accent font-mono tracking-widest">Consumables Hub</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Aviation Chemicals & Consumables</h2>
            <p className="mt-4 text-base text-[#374151] font-medium opacity-70">Physical stock and shipment-ready lines mapped to standard airframe specifications.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {CONSUMABLE_CATEGORIES.map((c, idx) => (
              <FadeIn key={idx} delay={idx * 100} className="bg-white border border-primary/5 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-[#B8872A]/30 group flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#B8872A] tracking-wider block mb-2">{c.code}</span>
                  <h3 className="text-lg font-bold mb-4 text-primary group-hover:text-secondary transition-colors">{c.title}</h3>
                  <p className="text-[#374151] font-medium opacity-80 leading-relaxed text-xs mb-6">
                    {c.desc}
                  </p>
                  <ul className="space-y-2 border-t border-black/5 pt-4">
                    {c.products.map((p, pIdx) => (
                      <li key={pIdx} className="text-[11px] font-semibold text-[#374151]/80 list-disc list-inside">{p}</li>
                    ))}
                  </ul>
                </div>
                <Link href={c.link} className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-accent group-hover:text-secondary transition-colors uppercase tracking-wider focus:outline-none focus:underline">
                  View Specifications
                  <svg className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIFIC MRO LOGISTICS ── */}
      <section className="bg-white py-16 md:py-24 border-b border-black/5">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
            <FadeIn className="lg:w-1/2">
              <span className="eyebrow text-accent font-mono tracking-widest">Logistical Compliance</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Specialised Consumables Handling</h2>
              <p className="text-[#374151] text-lg font-medium leading-relaxed mb-10">
                Chemical logistics require compliance steps that general parts brokers omit. We structure dispatch around the preservation requirements of limited-shelf-life materials.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Shelf-Life Control", desc: "Cure-dates and batch expirations are logged and checked on every inbound and outbound lot." },
                  { title: "Hazmat Dispatch", desc: "Compliant packaging, labelling, and airfreight routing for hazardous chemical classes." },
                  { title: "Trace Documentation", desc: "Manufacturer Certificates of Conformance (CoC) and Safety Data Sheets (SDS) are supplied with all items." },
                  { title: "Specification Vetting", desc: "Pre-dispatch check to match product grades to Airbus, Boeing, or military material standards." },
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8872A]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-[#B8872A]/20 transition-all duration-700" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Verification Audit Steps</h3>
                <ul className="space-y-6">
                  {[
                    "Standard Airworthiness Docs (FAA 8130-3 / EASA Form 1 when applicable)",
                    "OEM & Authorized Supplier Vetting Standards",
                    "Batch Traceability & Cure-Date Management",
                    "Hazmat Packaging & Airfreight Logistics Vetting",
                    "Spec-Lock Alignment Reviews",
                  ].map((list, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/80 font-medium text-sm">
                      <svg className="w-5 h-5 text-[#B8872A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {list}
                    </li>
                  ))}
                </ul>
                <Link href="/consumables" className="mt-10 btn-primary w-full text-center focus:outline-none focus:ring-2 focus:ring-secondary">Explore Product Verticals</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECONDARY CAPABILITY: SPARES ── */}
      <section className="bg-[#F9FAFB] py-16 md:py-24 border-b border-black/5">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
            <FadeIn className="flex-1">
              <span className="eyebrow text-accent font-mono tracking-widest">Secondary Capability</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Aircraft Spares & Rotables</h2>
              <p className="text-[#374151] text-base font-medium leading-relaxed mb-8 max-w-xl">
                We coordinate spares procurement, rotable exchanges, and expendable hardware packages for operators looking for a single source.
              </p>
              <div className="flex gap-4 mb-8">
                <Link href="/spares" className="btn-outline px-8 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary">Spares Capabilities</Link>
              </div>
            </FadeIn>
            <FadeIn delay={150} className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Rotables Management", desc: "Engine, APU, and landing gear line components managed through audited supplier pools." },
                { title: "Expendable Hardware", desc: "Bulk packages of aerospace fasteners, standard hardware, O-rings, and filters." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white border border-primary/5 rounded-2xl">
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wide mb-2">{item.title}</h4>
                  <p className="text-xs text-[#374151] opacity-75 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY AOG SUPPORT ── */}
      <section className="bg-white py-16 md:py-24 border-b border-black/5">
        <div className="section-container">
          <FadeIn className="bg-primary rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden group border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8872A]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#B8872A]/20 transition-all duration-700" />
            <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-12">
              <div>
                <span className="inline-flex items-center gap-2 bg-secondary/25 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-secondary/40">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  AOG Support Desk
                </span>
                <h4 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                  Aircraft On Ground. <br />
                  Logistics Initiated.
                </h4>
                <p className="text-white/50 text-base font-medium max-w-md">
                  Emergency consumables or spares. Direct intake monitors requests for rapid stock checks and priority dispatch.
                </p>
              </div>
              <div className="lg:flex lg:flex-col lg:items-end gap-6">
                <Link href="/aog" className="btn-primary px-12 py-6 text-xl shadow-2xl shadow-secondary/50 w-full lg:w-auto text-center focus:outline-none focus:ring-2 focus:ring-secondary">Access AOG Desk</Link>
                <div className="hidden lg:block text-right">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/30 mb-1">Emergency Desk</p>
                  <p className="text-white font-bold text-lg">rfq@purviaero.com</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#0071CE 1.5px, transparent 1.5px)", backgroundSize: "40px 40px" }} />
        <div className="section-container relative z-10 text-center">
          <FadeIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">Request a <span className="text-secondary">Commercial Quote</span></h2>
            <p className="text-white/60 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Submit your parts lists or chemical specs. Our intake desk targets sub-24hr turnaround for availability, trace validation, and commercial pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary px-12 py-5 text-lg focus:outline-none focus:ring-2 focus:ring-secondary">Request Quote</Link>
              <div className="flex flex-col items-center sm:items-start text-white/40">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1">Direct Technical Line</span>
                <span className="text-sm font-bold text-white/80">rfq@purviaero.com</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
