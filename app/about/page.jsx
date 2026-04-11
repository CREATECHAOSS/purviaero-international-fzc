import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: 'About Purvi Aero International FZC | Aviation Spares Profile',
  description: 'Founded by aviation professionals. Purvi Aero International FZC is a global trading company providing aircraft components and MRO consumables to the aviation industry. One Source. Every Part.',
};

export default function AboutPage() {
  return (
    <main>
      {/* ── SECTION 1: HERO ── */}
      <section className="bg-[#0E1C36] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h20v20H0V0zm10 17L3 10l7-7 7 7-7 7z\" fill=\"%23B8872A\" fill-opacity=\"1\"/%3E%3C/svg%3E')" }} />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <span className="eyebrow !text-[#B8872A] mb-8 justify-center">Corporate Profile</span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tighter leading-none">
              Purvi Aero <br className="hidden md:block"/> International FZC
            </h1>
            <p className="text-lg sm:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-medium">
              Founded by aviation professionals with decades of combined experience, we act as a high-tempo technical sourcing partner for global airlines and MRO operators.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: VALUES & OPERATIONS ── */}
      <section className="bg-white py-20 border-b border-black/5">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {/* Mission */}
            <FadeIn className="relative p-10 border border-[#0E1C36]/5 rounded-3xl bg-[#F9FAFB] shadow-sm hover:shadow-xl transition-all group">
              <div className="mb-8 flex items-center gap-5">
                <div className="w-14 h-14 bg-[#0E1C36] flex items-center justify-center rounded-2xl shadow-xl group-hover:bg-[#B8872A] transition-colors duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14H11V21L20 10H13z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-[#0E1C36]">Our Mission</h2>
              </div>
              <p className="text-[#374151] text-lg leading-relaxed mb-8 font-medium">
                Our mission is to provide the global aviation industry with a reliable, operationally rigorous, and professional sourcing partner. We prioritize responsive service alongside exacting technical requirements for spares and rotables.
              </p>
              <div className="h-1 w-20 bg-[#B8872A] rounded-full group-hover:w-full transition-all duration-700 opacity-30" />
            </FadeIn>

            {/* Approach */}
            <FadeIn delay={120} className="relative p-10 border border-[#0E1C36]/5 rounded-3xl bg-[#F9FAFB] shadow-sm hover:shadow-xl transition-all group">
              <div className="mb-8 flex items-center gap-5">
                <div className="w-14 h-14 bg-[#0E1C36] flex items-center justify-center rounded-2xl shadow-xl group-hover:bg-[#B8872A] transition-colors duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M11 7h2m-2 3h2m-2 3h2m-2 3h2" />
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-[#0E1C36]">Our Approach</h2>
              </div>
              <p className="text-[#374151] text-lg leading-relaxed mb-8 font-medium">
                We operate as a technical procurement partner — not a catalogue distributor. Every enquiry is handled by aviation professionals who understand technical requirements, airworthiness standards, and the critical urgency of operations.
              </p>
              <div className="h-1 w-20 bg-[#B8872A] rounded-full group-hover:w-full transition-all duration-700 opacity-30" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OPERATIONAL SCOPE (Expansion) ── */}
      <section className="bg-white py-20">
        <div className="section-container">
          <div className="bg-[#0E1C36] rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8872A]/10 blur-[100px] rounded-full" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <span className="eyebrow !text-[#B8872A] block mb-6">Operational Focus</span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">Rigorous Quality <br/> Management</h3>
                <p className="text-white/60 font-medium text-lg leading-relaxed mb-10">
                  Purvi Aero processes every procurement line through a multi-stage technical audit before dispatch.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/90 font-bold uppercase tracking-widest text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#B8872A]" /> FAA Regular Audit Compliance
                  </div>
                  <div className="flex items-center gap-4 text-white/90 font-bold uppercase tracking-widest text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#B8872A]" /> EASA Documentation Parity
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                {[
                  { title: "Global Supplier Network", desc: "Accessing a worldwide vetted network of OEMs, authorized distributors, and bonded repair facilities." },
                  { title: "Technical Verification", desc: "Pre-offer technical review of part numbers, alternate revisions, and airworthiness status." },
                  { title: "Logistical Speed", desc: "Strategically located to support rapid transit times for international aviation hubs." },
                  { title: "Trace Consistency", desc: "Ensuring all shipments are delivered with the required certification (8130-3, Form 1, CoC)." },
                ].map((item, idx) => (
                  <div key={idx} className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-500 group">
                    <h4 className="text-[#B8872A] font-extrabold text-xl mb-4 group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CONTACT CTA ── */}
      <section className="bg-[#F9FAFB] py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="bg-white p-12 md:p-20 rounded-[3rem] shadow-sm border border-[#0E1C36]/5 relative">
            <h3 className="text-3xl font-bold text-[#0E1C36] mb-8">Technical Trading & Supply</h3>
            <p className="text-lg text-[#374151] mb-12 font-medium opacity-80 leading-relaxed">
              We are currently expanding our digital intake systems for global operators. For immediate technical enquiries or to submit your spare requirement lists, please use our prioritized RFQ portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-gold px-12 py-5 text-lg">Access RFQ Portal</Link>
              <div className="flex flex-col items-center sm:items-start text-left px-8 py-4 bg-[#0E1C36]/5 rounded-2xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8872A] mb-1">General Inbox</span>
                <span className="text-sm font-bold text-[#0E1C36]">info@purviaero.com</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
