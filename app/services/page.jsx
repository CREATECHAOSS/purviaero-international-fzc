export const metadata = {
  title: 'Products & Services | Purvi Aero International FZC',
  description: 'Expendables, Consumables, Rotables, and MRO Supplies — fully traceable aviation parts for Commercial Airlines, MROs, and Charter Operators.',
};

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Expendables & Consumables',
    desc: 'Access to a vast inventory of high-turnover items. From specialized hardware to sealants and lubricants.',
    tags: ['Hardware', 'Sealants', 'Lubricants', 'Fasteners'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Rotables & Repairables',
    desc: 'Sourcing critical rotable components with complete back-to-birth traceability (FAA/EASA/DGCA). Facilitating outright sales, exchanges, and loans.',
    tags: ['FAA/EASA/DGCA', 'Outright Sales', 'Exchanges', 'Loans'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'MRO Supplies',
    desc: 'Supporting heavy maintenance facilities with tooling and heavy-check consumable kits tailored to specific platforms like the A320 or Bell 412.',
    tags: ['A320 Platform', 'Bell 412', 'Heavy-Check Kits', 'Tooling'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-surface-light to-transparent opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Products & Services</p>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-[1.15] max-w-3xl">
            Comprehensive Aviation Supply Solutions.
          </h1>
          <p className="mt-6 text-gray-400 max-w-2xl leading-relaxed text-lg font-medium">
            Every product we supply is backed by complete documentation, ensuring airworthiness compliance at every step.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-dark relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="card group flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-surface-light border border-white/5 text-accent flex items-center justify-center mb-8">
                  {svc.icon}
                </div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">{svc.title}</h2>
                <p className="text-gray-400 leading-relaxed text-sm mb-8 flex-1">{svc.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider bg-surface-light text-silver border border-white/10 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 card bg-surface-light border border-white/5 text-center p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent opacity-10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h3 className="section-heading mb-4 text-3xl">Can't Find What You Need?</h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto text-base">
                Our procurement specialists have access to an extensive global network. Submit your RFQ and we'll source it.
              </p>
              <a href="/contact" className="btn-primary inline-block">Submit an RFQ</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
