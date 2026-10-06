"use client";

import Link from "next/link";
import brandManifest from "@/public/logos.json";

/* ────────────────────────────────────────────────────────
    LINE ICONS FOR CONSUMABLE CATEGORIES
   ──────────────────────────────────────────────────────── */

const LubricantsIcon = ({ className = "w-10 h-10" }) => (
  <svg className={`${className} text-[#B8872A]`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13.5m0 0l-3.75-3.75M12 16.5l3.75-3.75M4.5 19.5h15" />
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth={1.5} />
  </svg>
);

const AdhesivesIcon = ({ className = "w-10 h-10" }) => (
  <svg className={`${className} text-[#B8872A]`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

const SolventsIcon = ({ className = "w-10 h-10" }) => (
  <svg className={`${className} text-[#B8872A]`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v7.5m-3.75-3.75h7.5" />
  </svg>
);

const PaintsIcon = ({ className = "w-10 h-10" }) => (
  <svg className={`${className} text-[#B8872A]`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-1.305 3.579A3 3 0 0011.8 19.38l.685-.685m1.562-4.522l.686-.686a3 3 0 00-3.579-1.305l-4.522 1.562m4.522-1.562l-1.562-4.522a3 3 0 00-1.305-3.579M19.38 11.8a3 3 0 00-1.305-3.579l-4.522 1.562m0 0l1.562 4.522" />
  </svg>
);

const ChemicalsIcon = ({ className = "w-10 h-10" }) => (
  <svg className={`${className} text-[#B8872A]`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M1.5 12l3 3m-3-3l-3 3M19.5 12a48.656 48.656 0 01-.138 3.662M1.5 12a48.656 48.656 0 00.138 3.662" />
  </svg>
);

/* ────────────────────────────────────────────────────────
    DECORATIVE GEOMETRIC AND BACKGROUND PATTERNS
   ──────────────────────────────────────────────────────── */

const GeometricBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none z-0" fill="none" viewBox="0 0 800 600" aria-hidden="true">
    <circle cx="400" cy="300" r="180" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="12 12" />
    <circle cx="400" cy="300" r="280" stroke="#FFFFFF" strokeWidth="1" />
    <circle cx="400" cy="300" r="80" stroke="#FFFFFF" strokeWidth="3" />
    <line x1="50" y1="300" x2="750" y2="300" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="6 6" />
    <line x1="400" y1="50" x2="400" y2="550" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="6 6" />
    <path d="M150 150 L650 450 M150 450 L650 150" stroke="#FFFFFF" strokeWidth="0.75" />
    <rect x="250" y="150" width="300" height="300" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 4" />
  </svg>
);

const DottedPattern = () => (
  <svg className="absolute top-4 right-4 w-28 h-28 opacity-[0.06] pointer-events-none z-0" fill="none" viewBox="0 0 100 100" aria-hidden="true">
    <pattern id="dot-grid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="#000543" />
    </pattern>
    <rect width="100" height="100" fill="url(#dot-grid)" />
  </svg>
);

const DottedPatternWhite = () => (
  <svg className="absolute top-4 right-4 w-28 h-28 opacity-[0.07] pointer-events-none z-0" fill="none" viewBox="0 0 100 100" aria-hidden="true">
    <pattern id="dot-grid-white" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="#FFFFFF" />
    </pattern>
    <rect width="100" height="100" fill="url(#dot-grid-white)" />
  </svg>
);

/* ────────────────────────────────────────────────────────
    REUSABLE LAYOUT HELPERS
   ──────────────────────────────────────────────────────── */

/* Navy duotone image block — fills its container */
const DuotoneImage = ({ src, alt, className = "" }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-[#000543] ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover opacity-55" />
    <div className="absolute inset-0 bg-[#000543]/35 mix-blend-multiply" />
  </div>
);

/* Page header strip */
const PageHeader = ({ section, label, dark = false }) => (
  <div className={`flex justify-between items-center pb-3 relative z-10 ${dark ? "border-b border-white/10" : "border-b border-slate-200"}`}>
    <span className={`text-[10px] font-bold tracking-[0.25em] uppercase font-mono ${dark ? "text-[#B8872A]" : "text-accent"}`}>{section}</span>
    <span className={`text-[10px] font-bold tracking-[0.1em] uppercase font-mono ${dark ? "text-white/40" : "text-primary/40"}`}>{label}</span>
  </div>
);

/* Page footer strip */
const PageFooter = ({ pageNum, dark = false }) => (
  <div className={`flex justify-between items-center text-[9px] font-mono pt-3 relative z-10 ${dark ? "border-t border-white/10 text-white/20" : "border-t border-slate-200 text-slate-300"}`}>
    <span>PURVI AERO INTERNATIONAL FZC • BROCHURE</span>
    <span>PAGE {pageNum}</span>
  </div>
);

/* Bullet dot SVG */
const BulletDot = () => (
  <span className="mt-[6px] shrink-0">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke="#0071CE" strokeWidth="1.5"/>
      <circle cx="6" cy="6" r="1.5" fill="#0071CE"/>
    </svg>
  </span>
);

export default function BrochurePage() {
  return (
    <main className="bg-slate-100 min-h-screen py-10 print:py-0 print:bg-white select-none">
      {/* Dynamic Style injection to hide global Navbar/Footer and set Page/Print styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        nav, footer, #whatsapp-button {
          display: none !important;
        }
        body {
          background-color: #F1F5F9 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        @media print {
          body {
            background-color: #FFFFFF !important;
          }
          .no-print {
            display: none !important;
          }
          @page {
            size: A4 landscape;
            margin: 0 !important;
          }
        }
      ` }} />

      {/* Control bar for screen view */}
      <div className="max-w-[297mm] mx-auto mb-6 px-4 py-3 bg-white shadow-md rounded-xl flex justify-between items-center no-print">
        <div className="flex flex-col">
          <h1 className="text-lg font-extrabold text-primary font-rajdhani tracking-tight">Purvi Aero Corporate Brochure</h1>
          <p className="text-xs text-text-secondary">A4 Landscape Format • 10 Pages • Verified Brand Compliance</p>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="px-4 py-2 border border-primary/10 rounded-lg text-xs font-bold text-primary hover:bg-slate-50 uppercase tracking-wider transition-all">
            Back to Site
          </Link>
          <button 
            onClick={() => window.print()} 
            className="px-5 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            Print / Save to PDF
          </button>
        </div>
      </div>

      {/* Pages Container */}
      <div className="flex flex-col gap-8 print:gap-0 max-w-[297mm] mx-auto">

        {/* ────────────────────────────────────────────────────────
            PAGE 1: COVER
           ──────────────────────────────────────────────────────── */}
        <section className="brochure-page bg-[#000543] text-white flex flex-col justify-between px-[48px] py-[36px] overflow-hidden">
          {/* Full Cover Hangar Background with Navy Duotone Overlay */}
          <div className="absolute inset-0 z-0">
            <img src="/images/brochure_cover.png" alt="Hangar" className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#000543] via-[#000543]/90 to-transparent" />
          </div>

          <GeometricBackground />
          <div className="absolute -top-32 -right-32 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#B8872A]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Top: Header */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-3">
              <img src="/icon-light.svg" alt="Purvi Aero" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-widest leading-none font-outfit">PURVI AERO</span>
                <span className="text-[8px] font-bold tracking-[0.35em] text-secondary leading-none mt-1 uppercase font-outfit">INTERNATIONAL FZC</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase font-bold border-r-2 border-accent pr-3 mr-3">Brochure v1.0</span>
              <span className="text-[9px] font-mono tracking-widest text-[#B8872A] uppercase font-bold">2026/2027</span>
            </div>
          </div>

          {/* Middle: Title & Branding */}
          <div className="my-auto relative z-10 max-w-2xl">
            <div className="w-20 h-1 bg-[#B8872A] mb-8 rounded-full" />
            <h1 className="text-6xl font-black tracking-tighter leading-[0.95] mb-5 font-rajdhani">
              Aviation Consumables <br />
              <span className="text-secondary font-outfit font-extrabold">Supply & Logistics</span>
            </h1>
            <p className="text-lg text-white/70 max-w-lg leading-relaxed font-outfit font-medium border-l-2 border-[#B8872A] pl-5 py-1">
              Serving commercial carriers, regional operators, and global MRO providers from our UAE distribution hub.
            </p>
          </div>

          {/* Bottom: Footer bar */}
          <div className="flex justify-between items-end border-t border-white/10 pt-5 relative z-10">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-1">Company Slogan</p>
              <p className="text-sm font-bold text-secondary uppercase tracking-[0.15em] font-outfit">Keeping the World Airborne</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-1">Direct Technical Line</p>
              <p className="text-sm font-bold text-white tracking-wider font-outfit">+971 58 960 3693 • rfq@purviaerointernational.com</p>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────────────────
            PAGE 2: ABOUT / POSITIONING
           ──────────────────────────────────────────────────────── */}
        <section className="brochure-page bg-white flex flex-col justify-between px-[48px] py-[36px] overflow-hidden">
          <DottedPattern />
          <PageHeader section="01 / Corporate Profile" label="Purvi Aero International FZC" />

          {/* Content — fills remaining space */}
          <div className="flex-1 grid grid-cols-12 gap-10 items-center relative z-10 py-4">
            {/* Left: Text Positioning */}
            <div className="col-span-7">
              <span className="text-[11px] font-bold tracking-[0.2em] text-secondary uppercase block mb-4 font-mono">Aviation Chemical Consumables Specialist</span>
              <h2 className="text-4xl font-extrabold text-primary font-rajdhani leading-[1.05] mb-5">
                Consumables Sourcing <br />
                From Our UAE Hub
              </h2>
              <p className="text-[#374151] text-[14px] leading-relaxed mb-3 font-medium font-outfit opacity-95">
                Purvi Aero International FZC is a UAE-based aviation consumables trader specialising in turbine oils, greases, sealants, paints, and cleaning solvents for commercial, regional, and MRO operators.
              </p>
              <p className="text-[#374151] text-[14px] leading-relaxed mb-5 font-medium font-outfit opacity-95">
                We operate as a technical procurement desk — every chemical list is vetted against OEM maintenance-manual specifications before dispatch, preventing parts mismatch and ensuring regulatory compliance. Our Umm Al Quwain Free Zone warehouse enables fast cross-border transit across the Middle East, Africa, and South Asia.
              </p>
              
              <div className="border-l-4 border-[#B8872A] bg-slate-50 p-5 rounded-r-lg">
                <p className="text-[13px] font-bold text-[#B8872A] uppercase tracking-wider mb-1 font-mono">What We Do</p>
                <p className="text-[14px] font-semibold text-[#374151] leading-relaxed font-outfit">
                  Source, vet, and deliver shelf-life-sensitive aviation chemicals and greases — with full batch traceability, SDS documentation, and cure-date management on every shipment.
                </p>
              </div>
            </div>

            {/* Right: Operational Image with Navy Overlay & Strengths */}
            <div className="col-span-5 flex flex-col gap-4 h-full justify-center">
              <DuotoneImage src="/images/brochure_about.png" alt="MRO Workspace" className="h-[180px]" />
              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: "Consumables First", desc: "Turbine oils, sealants, paints, solvents, and greases — our core business." },
                  { title: "Spec-Vetting Desk", desc: "Every order matched to OEM maintenance-manual specifications before dispatch." },
                  { title: "UAE Logistics Hub", desc: "UAQ Free Zone warehouse — fast transit across the Middle East, Africa, and CIS." }
                ].map((strength, index) => (
                  <div key={index} className="px-4 py-3 border border-slate-100 rounded-xl bg-slate-50/50">
                    <h4 className="text-[12px] font-extrabold text-primary uppercase tracking-wider font-rajdhani">{strength.title}</h4>
                    <p className="text-[11px] text-text-secondary leading-snug font-outfit font-medium mt-0.5">{strength.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <PageFooter pageNum={2} />
        </section>

        {/* ────────────────────────────────────────────────────────
            PAGE 3: BRANDS WE SUPPORT
           ──────────────────────────────────────────────────────── */}
        <section className="brochure-page bg-white flex flex-col justify-between px-[48px] py-[36px] overflow-hidden">
          <DottedPattern />
          <PageHeader section="02 / Verified Brands" label="Purvi Aero International FZC" />

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center relative z-10 py-4">
            <div className="mb-8">
              <span className="text-[11px] font-bold tracking-[0.2em] text-secondary uppercase block mb-2 font-mono">Supply Partnerships</span>
              <h2 className="text-4xl font-extrabold text-primary font-rajdhani leading-none mb-3">Verified Product Lines In Stock</h2>
              <p className="text-[14px] text-text-secondary font-outfit max-w-2xl">Every product is sourced directly from named OEM partners or approved master distributors to ensure full batch tracing.</p>
            </div>

            <div className="grid grid-cols-4 gap-5">
              {brandManifest.map((brand) => (
                <div key={brand.id} className="flex flex-col justify-between p-5 bg-slate-50 rounded-xl border border-slate-100 min-h-[88px]">
                  <div className="w-full flex-1 flex items-center justify-center">
                    <span className="text-[14px] font-extrabold text-primary tracking-tight text-center leading-snug font-outfit">{brand.name}</span>
                  </div>
                  <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-[#B8872A] mt-3 block text-center">{brand.category}</span>
                </div>
              ))}
            </div>
          </div>

          <PageFooter pageNum={3} />
        </section>

        {/* ────────────────────────────────────────────────────────
            PAGE 4: LUBRICANTS & GREASES
           ──────────────────────────────────────────────────────── */}
        <section className="brochure-page bg-white flex flex-col justify-between px-[48px] py-[36px] overflow-hidden">
          <DottedPattern />
          <PageHeader section="03 / Consumables Verticals" label="Lubricants & Greases" />

          {/* Content — image-led left column, specs right */}
          <div className="flex-1 grid grid-cols-12 gap-10 items-stretch relative z-10 py-4">
            {/* Left Box */}
            <div className="col-span-5 bg-[#000543] text-white p-7 rounded-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8872A]/10 rounded-full blur-xl" />
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest block">Confirmed Supply</span>
                <LubricantsIcon />
              </div>
              <h3 className="text-[26px] font-extrabold mb-3 font-rajdhani text-white leading-tight">Lubricants & Greases</h3>
              <p className="text-[13px] text-white/70 leading-relaxed font-outfit mb-4">
                Aeroshell and Shell Aviation product lines — turbine oils, hydraulic fluids, greases, and MIL-SPEC lubricants supplied with full batch traceability and shelf-life monitoring for every unit.
              </p>
              {/* Product photo — real visual weight */}
              <DuotoneImage src="/images/brochure_lubricants.png" alt="Lubricant drums and containers" className="flex-1 min-h-[120px]" />
              <div className="pt-3 mt-4 border-t border-white/10 text-[10px] font-mono font-bold text-[#B8872A] tracking-wider uppercase">
                100% Batch Traced • SDS Included
              </div>
            </div>

            {/* Right List */}
            <div className="col-span-7 flex flex-col justify-center">
              <h4 className="text-[13px] font-extrabold uppercase tracking-widest text-[#374151] opacity-60 mb-6 font-mono">Product Matrix & Specifications</h4>
              <ul className="grid grid-cols-2 gap-5">
                {[
                  "Aeroshell Turbine Oils (500 Series)",
                  "Aeroshell Greases (multi-purpose, high-temp)",
                  "Shell Aviation Hydraulic Fluids",
                  "MIL-PRF qualified lubricant grades",
                  "Cure-date and expiry tracking per batch",
                  "SDS and technical data sheets included"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <BulletDot />
                    <span className="text-[14px] text-[#374151] font-semibold leading-relaxed font-outfit">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <PageFooter pageNum={4} />
        </section>

        {/* ────────────────────────────────────────────────────────
            PAGE 5: ADHESIVES & SEALANTS
           ──────────────────────────────────────────────────────── */}
        <section className="brochure-page bg-white flex flex-col justify-between px-[48px] py-[36px] overflow-hidden">
          <DottedPattern />
          <PageHeader section="04 / Consumables Verticals" label="Adhesives & Sealants" />

          <div className="flex-1 grid grid-cols-12 gap-10 items-stretch relative z-10 py-4">
            {/* Left Box */}
            <div className="col-span-5 bg-[#000543] text-white p-7 rounded-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8872A]/10 rounded-full blur-xl" />
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest block">Technical Sourcing Range</span>
                <AdhesivesIcon />
              </div>
              <h3 className="text-[26px] font-extrabold mb-3 font-rajdhani text-white leading-tight">Adhesives, Sealants & Epoxies</h3>
              <p className="text-[13px] text-white/70 leading-relaxed font-outfit mb-4">
                Structural adhesives, airframe sealants, and epoxy systems for MRO applications. Sourced to Boeing, Airbus, and MIL-SPEC quality metrics.
              </p>
              {/* Product photo */}
              <DuotoneImage src="/images/brochure_adhesives.png" alt="Sealant cartridges and adhesive applicators" className="flex-1 min-h-[100px]" />
              <div className="p-3 mt-4 bg-white/5 border border-white/10 rounded-xl">
                <p className="text-[9px] text-[#B8872A] font-bold uppercase tracking-widest font-mono mb-1">Supplier Range Note</p>
                <p className="text-[11px] text-white/50 leading-relaxed font-outfit font-medium">Pidilite Industries range (Araldite, M-Seal, Fevicol Industrial, or similar) — specific sub-brands to be confirmed.</p>
              </div>
            </div>

            {/* Right List */}
            <div className="col-span-7 flex flex-col justify-center">
              <h4 className="text-[13px] font-extrabold uppercase tracking-widest text-[#374151] opacity-60 mb-6 font-mono">Product Matrix & Specifications</h4>
              <ul className="grid grid-cols-2 gap-5">
                {[
                  "Structural adhesives for airframe bonding",
                  "Fuel-tank and pressure-cabin sealants",
                  "Epoxy systems for composite repair",
                  "Sealant kits pre-configured for maintenance events",
                  "Batch-level traceability and cure-date monitoring",
                  "Cold-chain and temperature-controlled storage"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <BulletDot />
                    <span className="text-[14px] text-[#374151] font-semibold leading-relaxed font-outfit">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <PageFooter pageNum={5} />
        </section>

        {/* ────────────────────────────────────────────────────────
            PAGE 6: CLEANING SOLVENTS & DEGREASERS
           ──────────────────────────────────────────────────────── */}
        <section className="brochure-page bg-white flex flex-col justify-between px-[48px] py-[36px] overflow-hidden">
          <DottedPattern />
          <PageHeader section="05 / Consumables Verticals" label="Cleaning Solvents" />

          <div className="flex-1 grid grid-cols-12 gap-10 items-stretch relative z-10 py-4">
            {/* Left Box */}
            <div className="col-span-5 bg-[#000543] text-white p-7 rounded-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8872A]/10 rounded-full blur-xl" />
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest block">Hazmat-Compliant Supply</span>
                <SolventsIcon />
              </div>
              <h3 className="text-[26px] font-extrabold mb-3 font-rajdhani text-white leading-tight">Cleaning Solvents & Degreasers</h3>
              <p className="text-[13px] text-white/70 leading-relaxed font-outfit mb-4">
                Aviation-approved cleaning chemicals and degreasers for component overhaul, engine wash, and line maintenance. Sourced per-order with complete SDS metrics.
              </p>
              {/* Product photo */}
              <DuotoneImage src="/images/brochure_solvents.png" alt="Industrial cleaning solvent containers" className="flex-1 min-h-[100px]" />
              <div className="p-3 mt-4 bg-white/5 border border-white/10 rounded-xl">
                <p className="text-[9px] text-[#B8872A] font-bold uppercase tracking-widest font-mono mb-1">Brand Assessment</p>
                <p className="text-[11px] text-white/50 leading-relaxed font-outfit font-medium">Zip-Chem, Brulin, Turco, and Ardrox brand formulations under active technical review.</p>
              </div>
            </div>

            {/* Right List */}
            <div className="col-span-7 flex flex-col justify-center">
              <h4 className="text-[13px] font-extrabold uppercase tracking-widest text-[#374151] opacity-60 mb-6 font-mono">Product Matrix & Specifications</h4>
              <ul className="grid grid-cols-2 gap-5">
                {[
                  "Aviation-approved component degreasers",
                  "Engine wash and compressor cleaning solutions",
                  "Interior cleaning and disinfection chemicals",
                  "Hazmat-compliant packaging and labelling",
                  "SDS documentation for every product line",
                  "Bulk supply with per-unit batch traceability"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <BulletDot />
                    <span className="text-[14px] text-[#374151] font-semibold leading-relaxed font-outfit">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <PageFooter pageNum={6} />
        </section>

        {/* ────────────────────────────────────────────────────────
            PAGE 7: PAINTS & COATINGS + GENERAL MRO CHEMICALS
           ──────────────────────────────────────────────────────── */}
        <section className="brochure-page bg-white flex flex-col justify-between px-[48px] py-[36px] overflow-hidden">
          <DottedPattern />
          <PageHeader section="06 / Consumables Verticals" label="Paints & General MRO" />

          {/* Content — two equal columns, image anchoring each */}
          <div className="flex-1 grid grid-cols-2 gap-10 items-stretch relative z-10 py-4">
            {/* Paints & Coatings */}
            <div className="border border-slate-100 bg-slate-50 p-6 rounded-2xl relative overflow-hidden flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-extrabold text-primary font-rajdhani">Aerospace Paints & Coatings</h3>
                <div className="flex gap-2 items-center shrink-0 ml-2">
                  <span className="text-[9px] font-mono font-bold bg-[#B8872A]/10 text-[#B8872A] px-2 py-0.5 rounded">Vetted Brands</span>
                  <PaintsIcon className="w-8 h-8" />
                </div>
              </div>
              {/* Image anchors the column */}
              <DuotoneImage src="/images/brochure_paints.png" alt="Aerospace paint spray application" className="h-[140px] mb-4" />
              <p className="text-[13px] text-[#374151] leading-relaxed font-outfit mb-4 opacity-90">
                Topcoats, primers, and specialty coatings for airframe painting, touch-ups, and structural protection. Sourced from major aerospace coatings OEMs (PPG Aerospace, Desothane, AkzoNobel, Sherwin-Williams).
              </p>
              <ul className="space-y-2 text-[12px] font-semibold text-[#374151]/95 font-outfit mt-auto">
                <li className="list-disc list-inside">Polyurethane topcoats and basecoats</li>
                <li className="list-disc list-inside">Epoxy and chromate primers</li>
                <li className="list-disc list-inside">Corrosion-inhibiting coatings</li>
                <li className="list-disc list-inside">Touch-up paint kits for line maintenance</li>
              </ul>
            </div>

            {/* General MRO Chemicals */}
            <div className="border border-slate-100 bg-slate-50 p-6 rounded-2xl relative overflow-hidden flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-extrabold text-primary font-rajdhani">General Aviation Chemicals</h3>
                <div className="flex gap-2 items-center shrink-0 ml-2">
                  <span className="text-[9px] font-mono font-bold bg-secondary/10 text-secondary px-2 py-0.5 rounded">Core Supply</span>
                  <ChemicalsIcon className="w-8 h-8" />
                </div>
              </div>
              <p className="text-[13px] text-[#374151] leading-relaxed font-outfit mb-4 opacity-90">
                Primers, corrosion inhibitors, sealant kits, and specialty chemicals that support scheduled maintenance checks (C & D checks) as well as unexpected AOG repair events.
              </p>
              <ul className="space-y-2 text-[12px] font-semibold text-[#374151]/95 font-outfit">
                <li className="list-disc list-inside">Corrosion Inhibitor Compounds (CICs)</li>
                <li className="list-disc list-inside">Chromate and non-chromate systems</li>
                <li className="list-disc list-inside">Pre-kitted sealant and adhesive sets</li>
                <li className="list-disc list-inside">Preservation and storage protection fluids</li>
                <li className="list-disc list-inside">De-icing and anti-icing fluid supply</li>
                <li className="list-disc list-inside">Custom kitting for C-check and D-check events</li>
              </ul>
            </div>
          </div>

          <PageFooter pageNum={7} />
        </section>

        {/* ────────────────────────────────────────────────────────
            PAGE 8: QUALITY & COMPLIANCE
           ──────────────────────────────────────────────────────── */}
        <section className="brochure-page bg-[#000543] text-white flex flex-col justify-between px-[48px] py-[36px] overflow-hidden">
          <DottedPatternWhite />
          <PageHeader section="07 / Logistical Compliance" label="Purvi Aero International FZC" dark />

          {/* Content */}
          <div className="flex-1 grid grid-cols-12 gap-10 items-stretch relative z-10 py-4">
            {/* Left Strategy & Supporting Visual */}
            <div className="col-span-5 flex flex-col gap-5 justify-center">
              <div>
                <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest block mb-3">Technical Quality Management</span>
                <h3 className="text-4xl font-extrabold mb-4 font-rajdhani text-white leading-[1.05]">Chemical Logistics & Spec Vetting</h3>
                <p className="text-[14px] text-white/70 leading-relaxed font-outfit">
                  Chemical logistics require compliance steps that general parts brokers omit. We structure dispatch around the preservation requirements of limited-shelf-life materials.
                </p>
              </div>
              <DuotoneImage src="/images/brochure_quality.png" alt="Chemical Labeling & Spec Check" className="h-[180px]" />
            </div>

            {/* Right Audit Protocol Steps */}
            <div className="col-span-7 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-center">
              <h4 className="text-[14px] font-bold uppercase tracking-widest text-[#B8872A] mb-6 font-mono">Verification Audit Protocol</h4>
              <ul className="space-y-5">
                {[
                  "Standard Airworthiness Docs (FAA 8130-3 / EASA Form 1 when applicable)",
                  "OEM & Authorized Supplier Vetting Standards",
                  "Batch Traceability & Cure-Date Management",
                  "Hazmat Packaging & Airfreight Logistics Vetting",
                  "Spec-Lock Alignment Reviews"
                ].map((step, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white/90 font-outfit text-[14px] font-medium">
                    <span className="w-7 h-7 rounded-full bg-secondary text-white font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <PageFooter pageNum={8} dark />
        </section>

        {/* ────────────────────────────────────────────────────────
            PAGE 9: SPARES & ROTABLES + MRO SUPPORT
           ──────────────────────────────────────────────────────── */}
        <section className="brochure-page bg-white flex flex-col justify-between px-[48px] py-[36px] overflow-hidden">
          <DottedPattern />
          <PageHeader section="08 / Spares & Credibility" label="Purvi Aero International FZC" />

          {/* Content — two equal columns, image-anchored */}
          <div className="flex-1 grid grid-cols-2 gap-10 items-stretch relative z-10 py-4">
            {/* Spares Capabilities */}
            <div className="flex flex-col">
              <DuotoneImage src="/images/brochure_spares.png" alt="Spares Component" className="h-[160px] mb-5" />
              <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest block mb-2">Secondary Capability</span>
              <h3 className="text-2xl font-extrabold text-primary mb-3 font-rajdhani">Aircraft Spares & Rotables</h3>
              <p className="text-[13px] text-[#374151] leading-relaxed font-outfit mb-5 opacity-90">
                Alongside our primary chemical supply, we coordinate spares procurement, rotable exchanges, and expendable hardware packages for commercial, regional, and MRO fleets.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl">
                  <h4 className="font-extrabold text-[12px] text-primary font-rajdhani uppercase tracking-wider mb-1">Rotables</h4>
                  <p className="text-[11px] text-text-secondary leading-snug">Engine, landing gear, and component exchanges.</p>
                </div>
                <div className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl">
                  <h4 className="font-extrabold text-[12px] text-primary font-rajdhani uppercase tracking-wider mb-1">Expendables</h4>
                  <p className="text-[11px] text-text-secondary leading-snug">Fasteners, gaskets, O-rings, and standard hardware packs.</p>
                </div>
              </div>
            </div>

            {/* MRO Transport Aircraft Support */}
            <div className="flex flex-col">
              <DuotoneImage src="/images/brochure_military.png" alt="Transport aircraft MRO hangar" className="h-[160px] mb-5" />
              <span className="text-[10px] font-mono font-bold text-[#B8872A] uppercase tracking-widest block mb-2">MRO Consumables Support</span>
              <h3 className="text-2xl font-extrabold text-primary mb-3 font-rajdhani">Transport Aircraft MRO Support</h3>
              <p className="text-[13px] text-[#374151] leading-relaxed font-outfit mb-5 opacity-90">
                We support MRO facilities that service military transport aircraft with consumables supply — paints, coatings, sealants, and cleaning chemicals required for scheduled and unscheduled maintenance events.
              </p>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-3 text-[12px] font-semibold font-outfit text-[#374151]/95 mt-auto">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B8872A] shrink-0" />
                  Consumables supply for transport aircraft heavy maintenance checks.
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B8872A] shrink-0" />
                  Hazmat-compliant packaging and logistics for chemical shipments.
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B8872A] shrink-0" />
                  Full batch traceability and SDS documentation on all items supplied.
                </p>
              </div>
            </div>
          </div>

          <PageFooter pageNum={9} />
        </section>

        {/* ────────────────────────────────────────────────────────
            PAGE 10: CONTACT & BACK COVER
           ──────────────────────────────────────────────────────── */}
        <section className="brochure-page bg-[#000543] text-white flex flex-col justify-between px-[48px] py-[36px] overflow-hidden">
          {/* Subtle Back Cover Hangar Visual with Navy Overlay */}
          <div className="absolute inset-0 z-0">
            <img src="/images/brochure_cover.png" alt="Hangar" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-[#000543]/90" />
          </div>

          <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#B8872A]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Header */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-3">
              <img src="/icon-light.svg" alt="Purvi Aero" className="h-12 w-auto" />
              <div className="flex flex-col text-left">
                <span className="text-xl font-extrabold tracking-widest leading-none font-outfit">PURVI AERO</span>
                <span className="text-[8px] font-bold tracking-[0.35em] text-secondary leading-none mt-1 uppercase font-outfit">INTERNATIONAL FZC</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono tracking-widest text-[#B8872A] uppercase font-bold">Keeping the World Airborne</span>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-3 gap-10 my-auto relative z-10 text-left">
            {/* Direct Line */}
            <div>
              <p className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest mb-3">Direct Contact Desks</p>
              <h4 className="text-base font-extrabold font-outfit mb-1">Direct Technical Line</h4>
              <p className="text-[15px] font-bold text-white font-outfit mb-5">+971 58 960 3693</p>
              
              <h4 className="text-[14px] font-extrabold font-outfit mb-1">Technical RFQ</h4>
              <p className="text-[14px] text-white/70 font-outfit mb-4">rfq@purviaerointernational.com</p>

              <h4 className="text-[14px] font-extrabold font-outfit mb-1">General Office</h4>
              <p className="text-[14px] text-white/70 font-outfit">info@purviaerointernational.com</p>
            </div>

            {/* Registered Address */}
            <div className="col-span-2 border-l border-white/10 pl-10">
              <p className="text-[10px] font-mono font-bold text-[#B8872A] uppercase tracking-widest mb-3">UAE Registered Address</p>
              <p className="text-[14px] text-white/80 font-outfit font-medium leading-relaxed mb-5">
                Warehouse No. (A-02), Block - A,<br />
                Umm Al Quwain Free Trade Zone,<br />
                Ahmed Bin Rashid Port,<br />
                Umm Al Quwain, United Arab Emirates
              </p>
              <div className="inline-block p-4 rounded-xl bg-white/5 border border-white/10 text-[12px] text-white/50 leading-relaxed font-outfit max-w-sm">
                <span className="text-[#B8872A] font-bold uppercase tracking-wider block mb-1">Intake Priority</span>
                Submit parts and specifications lists directly to our RFQ intake desk for prioritized commercial processing.
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex justify-between items-center border-t border-white/10 pt-5 relative z-10 text-white/30 text-[9px] font-mono">
            <span>&copy; 2026 Purvi Aero International FZC. All Rights Reserved.</span>
            <span>Umm Al Quwain, UAE</span>
          </div>
        </section>

      </div>

      {/* Embedded CSS styling for A4 print optimization */}
      <style jsx>{`
        .brochure-page {
          width: 297mm;
          height: 210mm;
          overflow: hidden;
          box-sizing: border-box;
          position: relative;
          page-break-after: always;
          break-after: page;
        }

        @media screen {
          .brochure-page {
            margin: 20px auto;
            border-radius: 1rem;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(0, 5, 67, 0.05);
          }
        }
      `}</style>
    </main>
  );
}
