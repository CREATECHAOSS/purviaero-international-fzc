import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata = {
  title: 'Priority AOG Support | Purvi Aero International FZC',
  description: 'Aircraft on ground? Our dedicated team provides priority support to expedite critical aviation spares directly to your facility. rfq@purviaero.com',
};

const protocol = [
  {
    step: '01',
    title: 'Rapid Stock Verification',
    desc: 'Our specialists instantly cross-reference your part requirements against our own inventory and verified supplier networks.',
  },
  {
    step: '02',
    title: 'Technical Trace Audit',
    desc: 'Every AOG line is vetted for airworthiness documentation (FAA 8130-3 / EASA Form 1) to ensure zero delays at receiving.',
  },
  {
    step: '03',
    title: 'Next-Flight-Out Logisitics',
    desc: 'Priority coordination through NFO courier or express air freight to minimize transit time to your location or hangar.',
  },
];

export default function AOGPage() {
  return (
    <main className="bg-[#0E1C36]">
      {/* ── HIGH-URGENCY HERO ── */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 border-b border-white/5">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px),
                              linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-20"
          style={{ background: "radial-gradient(ellipse at center, rgba(184,135,42,0.15) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <FadeIn className="flex flex-col items-start max-w-3xl">
            <span className="inline-flex items-center gap-3 bg-[#B8872A]/20 text-white text-[10px] font-bold uppercase tracking-[0.25em] px-5 py-2.5 rounded-full mb-10 border border-[#B8872A]/40 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Critical AOG Support
            </span>
            <h1 
              className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tighter"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Aircraft On <br className="hidden md:block"/> Ground? <br/>
              <span className="text-[#B8872A]">We Move Now.</span>
            </h1>
            <p className="mt-10 text-white/70 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium border-l-4 border-[#B8872A] pl-8">
              Every grounded minute impacts your bottom line. Purvi Aero providing prioritized technical sourcing and logistical support for line-critical requirements.
            </p>
            <Link
              href="/contact"
              className="mt-12 btn-gold px-12 py-5 text-lg shadow-2xl hover:shadow-[#B8872A]/40"
            >
              Contact AOG Support Now
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── EXECUTION PROTOCOL ── */}
      <section className="relative py-20 md:py-32 bg-white rounded-t-[3rem] -mt-12 z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <FadeIn className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
            <span className="eyebrow">Priority Response Flow</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0E1C36] tracking-tight">Rapid Response Protocol</h2>
            <p className="mt-6 text-[#374151] font-medium opacity-70">A specialized intake and fulfillment path dedicated to minimizing grounded time for global operators.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {protocol.map((item, idx) => (
              <FadeIn key={item.step} delay={idx * 150} className="relative group">
                <div className="bg-[#F9FAFB] border border-[#0E1C36]/5 p-12 rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-[#B8872A]/20 h-full">
                  <span className="text-6xl font-black text-[#0E1C36]/5 absolute top-8 right-8 select-none group-hover:text-[#B8872A]/10 transition-colors pointer-events-none italic">
                    {item.step}
                  </span>
                  <h4 className="font-bold text-[#0E1C36] text-2xl mb-5 tracking-tight">{item.title}</h4>
                  <p className="text-[#374151] text-base leading-relaxed font-medium opacity-80">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400} className="mt-20 md:mt-32 bg-[#0E1C36] rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden group border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8872A]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#B8872A]/20 transition-all duration-700" />
            <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-12">
              <div>
                <span className="block text-[#B8872A] text-xs font-bold uppercase tracking-[0.3em] mb-4">Direct Intake Portal</span>
                <h4 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                  Supporting Your <br className="hidden md:block"/> Fleet, Globally.
                </h4>
                <p className="text-white/50 text-xl font-medium max-w-md">
                  Submit your AOG requirement list directly to our intake desk for immediate technical processing.
                </p>
              </div>
              <div className="lg:flex lg:flex-col lg:items-end gap-6">
                <Link
                  href="/contact"
                  className="btn-gold px-12 py-6 text-xl shadow-2xl hover:shadow-[#B8872A]/50 w-full lg:w-auto text-center"
                >
                  Submit Priority RFQ
                </Link>
                <div className="hidden lg:block text-right">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Emergency Inbox</p>
                  <p className="text-white font-bold text-lg">rfq@purviaero.com</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
