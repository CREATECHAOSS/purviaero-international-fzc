import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: 'About Purvi Aero International FZC | MRO Consumables Partner',
  description: 'Specialised aviation trading company based in the UAE. Sourcing partner for aircraft chemicals, sealants, lubricants, coatings, and line components. Purvi Aero International FZC.',
};

export default function AboutPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-primary py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.45]">
          <img 
            src="/images/premium_photo-1661963090269-dcb0d1929cda.avif" 
            alt="Aircraft on tarmac silhouette" 
            className="w-full h-full object-cover filter brightness-[0.75] contrast-100"
          />
        </div>
        <div className="absolute inset-0 bg-[#000543]/40 pointer-events-none" />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <span className="eyebrow mb-8 justify-center" style={{ color: '#00999F' }}>Corporate Profile</span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tighter leading-none" style={{ color: '#ffffff' }}>
              Purvi Aero <br className="hidden md:block"/> International FZC
            </h1>
            <p className="text-lg sm:text-2xl max-w-4xl mx-auto leading-relaxed font-medium" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              A UAE-based aviation trading company built to manage the logistical and technical compliance demands of aerospace chemical consumables.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── VALUES & OPERATIONS ── */}
      <section className="bg-white py-20 border-b border-black/5">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {/* Mission */}
            <FadeIn className="relative p-10 border border-primary/5 rounded-3xl bg-[#F9FAFB] shadow-sm hover:shadow-xl transition-all group">
              <div className="mb-8 flex items-center gap-5">
                <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-2xl shadow-xl group-hover:bg-secondary transition-colors duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14H11V21L20 10H13z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-primary">Our Mission</h2>
              </div>
              <p className="text-[#374151] text-lg leading-relaxed mb-8 font-medium">
                To streamline the procurement and transport of shelf-life sensitive aviation chemicals and greases for commercial, regional, and MRO operators worldwide, combining strict spec vetting with efficient UAE-hub logistics.
              </p>
              <div className="h-1 w-20 bg-accent rounded-full group-hover:w-full transition-all duration-700 opacity-30" />
            </FadeIn>

            {/* Approach */}
            <FadeIn delay={120} className="relative p-10 border border-primary/5 rounded-3xl bg-[#F9FAFB] shadow-sm hover:shadow-xl transition-all group">
              <div className="mb-8 flex items-center gap-5">
                <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-2xl shadow-xl group-hover:bg-secondary transition-colors duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M11 7h2m-2 3h2m-2 3h2m-2 3h2" />
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-primary">Our Approach</h2>
              </div>
              <p className="text-[#374151] text-lg leading-relaxed mb-8 font-medium">
                We operate as a technical procurement desk. Every chemical list is vetted against OEM maintenance manual specifications before dispatch to prevent parts mismatch and ensure regulatory compliance.
              </p>
              <div className="h-1 w-20 bg-accent rounded-full group-hover:w-full transition-all duration-700 opacity-30" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── OPERATIONAL SCOPE ── */}
      <section className="bg-white py-20">
        <div className="section-container">
          <div className="bg-primary rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <span className="eyebrow !text-accent block mb-6">Compliance Desk</span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">Technical Quality Management</h3>
                <p className="text-white/60 font-medium text-lg leading-relaxed mb-10">
                  Monitoring cure-dates, shelf-life limits, and spec alignments is central to our quality process.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/90 font-bold uppercase tracking-widest text-xs">
                    <span className="w-2 h-2 rounded-full bg-accent" /> Full Batch Traceability Vetted
                  </div>
                  <div className="flex items-center gap-4 text-white/90 font-bold uppercase tracking-widest text-xs">
                    <span className="w-2 h-2 rounded-full bg-accent" /> SDS & Hazmat Compliance Assured
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                {[
                  { title: "Direct OEM Sourcing", desc: "Accessing approved turbine oil, sealant, and paint product lines from verified producers." },
                  { title: "Shelf-Life Audits", desc: "Strict verification of remaining shelf-life and manufacturing cure-dates on all chemical lots." },
                  { title: "UAE Logistical Hub", desc: "Fast transit times and cross-border customs handling via Umm Al Quwain Free Zone." },
                  { title: "Spares Support Desk", desc: "Rotable components and expendable hardware sourced as a secondary desk capability." },
                ].map((item, idx) => (
                  <div key={idx} className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-500 group">
                    <h4 className="text-secondary font-extrabold text-xl mb-4 group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-[#F9FAFB] py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="bg-white p-12 md:p-20 rounded-[3rem] shadow-sm border border-primary/5 relative">
            <h3 className="text-3xl font-bold text-primary mb-8">Intake Desk</h3>
            <p className="text-lg text-[#374151] mb-12 font-medium opacity-80 leading-relaxed">
              Submit your parts lists or chemical specs for pricing and lead time checks.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary px-12 py-5 text-lg shadow-secondary/20">Request Quote</Link>
              <div className="flex flex-col items-center sm:items-start text-left px-8 py-4 bg-primary/5 rounded-2xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">General Inbox</span>
                <span className="text-sm font-bold text-primary">info@purviaero.com</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
