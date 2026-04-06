import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: 'About Purvi Aero International FZC | UAE Aviation Parts Trader',
  description: 'Founded by aviation professionals. Purvi Aero International FZC is a UAE Free Zone registered trading company supplying certified aircraft components and MRO consumables globally.',
  openGraph: {
    title: 'About Purvi Aero International FZC | UAE Aviation Parts Trader',
    description: 'Founded by aviation professionals. Purvi Aero International FZC is a UAE Free Zone registered trading company supplying certified aircraft components and MRO consumables globally.',
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* ── SECTION 1: HERO ── */}
      <section className="bg-[#0E1C36] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <span className="block w-8 h-px bg-[#B8872A]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8872A]">
              Our Identity
            </span>
            <span className="block w-8 h-px bg-[#B8872A]" />
          </div>
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            About Purvi Aero <br className="hidden md:block"/> International FZC
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Founded by aviation professionals with decades of combined experience, Purvi Aero International FZC is a UAE Free Zone registered trading company specialising in the procurement and supply of aircraft spares, consumables and rotables.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: MISSION & ROOTS ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Box: Our Mission */}
            <FadeIn className="relative p-10 border border-[#0E1C36]/5 rounded-3xl bg-[#F5F3EE]/30">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0E1C36] flex items-center justify-center rounded-xl shadow-lg">
                  <svg className="w-6 h-6 text-[#B8872A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14H11V21L20 10H13z" />
                  </svg>
                </div>
                <h2 
                  className="text-2xl font-bold text-[#0E1C36]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Our Mission
                </h2>
              </div>
              <p className="text-[#374151] text-lg leading-relaxed mb-6">
                Our mission is to provide the global aviation industry with a reliable, fast, and fully traceable sourcing partner. We understand that in aviation, every minute counts, which is why we've built a supply chain that prioritises speed without ever compromising on safety or certification.
              </p>
              <div className="h-1.5 w-20 bg-[#B8872A] rounded-full" />
            </FadeIn>

            {/* Right Box: Our Approach */}
            <FadeIn delay={120} className="relative p-10 border border-[#0E1C36]/5 rounded-3xl bg-[#F5F3EE]/30">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0E1C36] flex items-center justify-center rounded-xl shadow-lg">
                  <svg className="w-6 h-6 text-[#B8872A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14H11V21L20 10H13z" />
                  </svg>
                </div>
                <h2 
                  className="text-2xl font-bold text-[#0E1C36]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Our Approach
                </h2>
              </div>
              <p className="text-[#374151] text-lg leading-relaxed mb-6">
                We operate as a lean, specialist procurement partner — not a catalogue distributor. Every enquiry is handled directly by experienced aviation professionals who understand documentation requirements, airworthiness standards, and the urgency of AOG situations.
              </p>
              <div className="h-1.5 w-20 bg-[#B8872A] rounded-full" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PLACEHOLDER ── */}
      <section className="bg-[#F5F3EE] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-[#0E1C36]/5 relative overflow-hidden group">
            {/* Decorative background circle */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#B8872A]/5 rounded-full transition-transform group-hover:scale-150 duration-700" />
            
            <p className="text-xl text-[#0E1C36] font-medium mb-6">
              Our offices and team details coming soon.
            </p>
            <p className="text-[#374151] mb-10">
              We are currently expanding our digital presence. For immediate enquiries or to request a quote, please use our contact form.
            </p>
            <Link 
              href="/contact" 
              className="btn-gold px-10 py-4 inline-block shadow-lg hover:shadow-[#B8872A]/20"
            >
              Go to Contact Form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
