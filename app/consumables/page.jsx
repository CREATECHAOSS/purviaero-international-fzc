import Link from "next/link";
import FadeIn from "@/components/FadeIn";

/* ─────────────────────────────────────────────
   Consumable Category Card
───────────────────────────────────────────── */
function CategorySection({ id, title, eyebrow, description, items, note, reversed = false }) {
  return (
    <section id={id} className={`py-16 md:py-24 border-b border-black/5 ${reversed ? "bg-[#F9FAFB]" : "bg-white"}`}>
      <div className="section-container">
        <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-start`}>
          {/* Text Content */}
          <FadeIn className="flex-1">
            <div className="inline-flex items-center gap-2 mb-6 uppercase tracking-[0.3em] font-bold text-[10px] text-accent">
              <span className="w-8 h-px bg-accent" />
              {eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-8 leading-[1.1] tracking-tight">
              {title}
            </h2>
            <p className="text-[#374151] text-lg leading-relaxed mb-10 font-medium opacity-90 border-l-4 border-secondary pl-8 py-2 bg-secondary/5 rounded-r-xl">
              {description}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 mb-10">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-[6px] shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="4.5" stroke="#0071CE" strokeWidth="1.5"/>
                      <circle cx="6" cy="6" r="1.5" fill="#0071CE"/>
                    </svg>
                  </span>
                  <span className="text-[#374151] leading-relaxed text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            {note && (
              <div className="p-5 bg-secondary/5 border border-secondary/15 rounded-xl mb-8">
                <p className="text-xs text-secondary font-bold uppercase tracking-widest mb-1">Note</p>
                <p className="text-sm text-[#374151] font-medium leading-relaxed">{note}</p>
              </div>
            )}
            <Link href="/contact" className="btn-outline px-10 py-5 text-sm">
              Request Availability
            </Link>
          </FadeIn>

          {/* Visual Panel */}
          <FadeIn delay={150} className="flex-1 w-full">
            <div className="bg-primary rounded-3xl p-10 md:p-14 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-secondary/20 transition-all duration-700" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
                <ul className="space-y-4">
                  {items.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/80 font-medium text-sm">
                      <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-1">Compliance Standard</p>
                  <p className="text-white font-bold text-sm">Full batch traceability · SDS included · Shelf-life monitored</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export const metadata = {
  title: 'MRO Consumables — Aviation Chemicals, Lubricants & Coatings | Purvi Aero International FZC',
  description: 'Aviation-grade lubricants, adhesives, sealants, cleaning solvents, aerospace paints, and MRO chemicals. Batch-traced, shelf-life managed, hazmat compliant. Supplied by Purvi Aero International FZC, UAE.',
};

export default function ConsumablesPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-primary py-16 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <span className="eyebrow !text-secondary mb-8 justify-center">MRO Consumables Supply</span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tighter">
              Aviation-Grade <br className="hidden md:block"/>
              <span className="text-secondary">Chemicals & Consumables</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium mb-12">
              Lubricants, adhesives, sealants, solvents, paints, and coatings — sourced from named OEM product lines with full batch traceability, shelf-life management, and hazmat-compliant documentation.
            </p>
            <div className="flex justify-center gap-8">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white font-rajdhani">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Batch Traced</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white font-rajdhani">SDS</span>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Every Shipment</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white font-rajdhani">24hr</span>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Quote Target</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── QUICK NAV ── */}
      <section className="bg-white py-10 border-b border-black/5">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Lubricants & Greases", anchor: "#lubricants" },
              { label: "Adhesives & Sealants", anchor: "#adhesives" },
              { label: "Cleaning Solvents", anchor: "#cleaning" },
              { label: "Paints & Coatings", anchor: "#paints" },
              { label: "General Chemicals", anchor: "#general" },
            ].map((item) => (
              <a
                key={item.anchor}
                href={item.anchor}
                className="px-6 py-3 rounded-xl border border-primary/10 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY SECTIONS ── */}
      <CategorySection
        id="lubricants"
        eyebrow="Confirmed OEM Supply"
        title="Aviation-Grade Lubricants & Greases"
        description="Aeroshell and Shell Aviation product lines — turbine oils, hydraulic fluids, greases, and MIL-SPEC lubricants supplied with full batch traceability and shelf-life monitoring for every unit."
        items={[
          "Aeroshell Turbine Oils (500 Series)",
          "Aeroshell Greases (multi-purpose, high-temp)",
          "Shell Aviation Hydraulic Fluids",
          "MIL-PRF qualified lubricant grades",
          "Cure-date and expiry tracking per batch",
          "SDS and technical data sheets included",
        ]}
        reversed={false}
      />

      <CategorySection
        id="adhesives"
        eyebrow="Supplier Range — Awaiting Confirmation"
        title="Adhesives, Sealants & Epoxies"
        description="Structural adhesives, airframe sealants, and epoxy systems for MRO applications. Pidilite Industries product lines — exact product range to be confirmed."
        items={[
          "Structural adhesives for airframe bonding",
          "Fuel-tank and pressure-cabin sealants",
          "Epoxy systems for composite repair",
          "Sealant kits pre-configured for maintenance events",
          "Batch-level traceability and cure-date monitoring",
          "Cold-chain and temperature-controlled storage",
        ]}
        note="Pidilite Industries range (Araldite, M-Seal, Fevicol Industrial, or similar) — specific sub-brand to be confirmed before product names are published."
        reversed={true}
      />

      <CategorySection
        id="cleaning"
        eyebrow="Supplier List — Awaiting Confirmation"
        title="Cleaning Solvents & Degreasers"
        description="Aviation-approved cleaning chemicals and degreasers for component overhaul, engine wash, and line maintenance. Supplier list under final confirmation."
        items={[
          "Aviation-approved component degreasers",
          "Engine wash and compressor cleaning solutions",
          "Interior cleaning and disinfection chemicals",
          "Hazmat-compliant packaging and labelling",
          "SDS documentation for every product line",
          "Bulk supply with per-unit batch traceability",
        ]}
        note="Brand suggestions under review: Zip-Chem, Brulin, Turco, Ardrox. Exact supplier list to be confirmed before publishing."
        reversed={false}
      />

      <CategorySection
        id="paints"
        eyebrow="Supplier List — Awaiting Confirmation"
        title="Aerospace Paints & Coatings"
        description="Topcoats, primers, and specialty coatings for airframe painting, touch-up, and corrosion protection. Major aerospace coatings OEMs — supplier list under final confirmation."
        items={[
          "Polyurethane topcoats and basecoats",
          "Epoxy and chromate primers",
          "Corrosion-inhibiting coatings",
          "Touch-up paint kits for line maintenance",
          "Spec compliance: Boeing, Airbus, and OEM paint specs",
          "Shelf-life monitoring and batch documentation",
        ]}
        note="Brand suggestions under review: PPG Aerospace / Desothane, Akzo Nobel Aerospace Coatings, Sherwin-Williams Aerospace. Exact supplier list to be confirmed."
        reversed={true}
      />

      <CategorySection
        id="general"
        eyebrow="Core Chemical Supply"
        title="General Aviation-Grade Chemicals"
        description="Primers, corrosion inhibitors, sealant kits, and specialty chemicals that support both scheduled maintenance and unscheduled repair events."
        items={[
          "Corrosion inhibitor compounds (CICs)",
          "Chromate and non-chromate primer systems",
          "Pre-kitted sealant and adhesive sets",
          "Preservation and storage protection fluids",
          "De-icing and anti-icing fluid supply",
          "Custom kitting for C-check and D-check events",
        ]}
        reversed={false}
      />

      {/* ── CTA ── */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#0071CE 1.5px, transparent 1.5px)", backgroundSize: "40px 40px" }} />
        <div className="section-container relative z-10 text-center">
          <FadeIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tighter">
              Need Consumables <span className="text-secondary">Quoted?</span>
            </h2>
            <p className="text-white/60 text-lg font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Send your consumable requirement list — part numbers, specs, or product names — and our team will return availability, batch details, and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary px-12 py-5 text-lg">Request Consumable Quote</Link>
              <div className="flex flex-col items-center sm:items-start text-white/40">
                <span className="text-[10px] font-bold uppercase tracking-widest mb-1">Direct Line</span>
                <span className="text-sm font-bold text-white/80">rfq@purviaero.com</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
