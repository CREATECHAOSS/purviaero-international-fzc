export const metadata = {
  title: '24/7 AOG Desk | Purvi Aero International FZC',
  description: 'Aircraft on ground? Our dedicated AOG desk operates 24/7/365 to expedite critical aviation spares directly to your facility.',
};

const protocol = [
  {
    step: '01',
    title: 'Immediate Inventory Check',
    desc: 'Our specialists instantly cross-reference your part requirement against our global supplier network and bonded stores.',
  },
  {
    step: '02',
    title: 'Rapid Certification Review',
    desc: 'Airworthiness documentation is verified instantly — 8130-3, EASA Form 1, or DGCA as required.',
  },
  {
    step: '03',
    title: 'Next-Flight-Out (NFO) Dispatch',
    desc: 'We arrange NFO courier or air freight to ensure your part arrives at your gate with maximum speed.',
  },
];

export default function AOGPage() {
  return (
    <>
      {/* Dark Hero */}
      <section className="bg-dark relative overflow-hidden border-b border-white/5">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #8B949E 1px, transparent 1px),
                              linear-gradient(to bottom, #8B949E 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Accent glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-40">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="inline-flex items-center gap-3 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-10 border border-accent/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              AOG Desk — Active 24/7/365
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black text-white leading-tight">
              Aircraft On Ground?<br/>
              <span className="text-accent italic">We Are On It.</span>
            </h1>
            <p className="mt-8 text-gray-400 text-xl leading-relaxed max-w-2xl font-medium">
              Every minute grounded impacts your bottom line. Our dedicated AOG desk operates around the clock to expedite critical spares directly to your facility.
            </p>
            <a
              href="tel:+919820603873"
              className="mt-12 inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-dark font-black text-lg px-12 py-5 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,207,176,0.4)] group tracking-tight"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call AOG Hotline Now
            </a>
          </div>
        </div>
      </section>

      {/* Protocol */}
      <section className="bg-dark relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center mb-20">
            <h2 className="section-heading">Our AOG Response Protocol</h2>
            <p className="mt-5 section-subheading max-w-xl mx-auto">
              A precise, high-speed execution framework designed to minimize aircraft downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {protocol.map((item) => (
              <div key={item.step} className="card group relative overflow-hidden">
                <span className="text-[140px] font-heading font-black text-white/5 absolute -bottom-10 -right-5 select-none leading-none group-hover:text-accent/10 transition-colors">
                  {item.step}
                </span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent font-black text-sm flex items-center justify-center mb-8 border border-accent/20">
                    {parseInt(item.step)}
                  </div>
                  <h3 className="font-heading font-bold text-white text-2xl mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-24 bg-surface border border-white/5 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl rounded-full" />
            <div className="relative z-10">
              <p className="text-white font-heading font-bold text-3xl tracking-tight">Don't Let Ground Time Cost You More.</p>
              <p className="text-gray-500 text-lg mt-3 font-medium">Reach our AOG specialists now — we respond in under 2 minutes.</p>
            </div>
            <a
              href="tel:+919820603873"
              className="flex-shrink-0 relative z-10 btn-primary px-10 py-5 text-base"
            >
              Call AOG Hotline
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
