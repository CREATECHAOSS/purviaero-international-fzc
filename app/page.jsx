import Link from 'next/link';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Traceability Guaranteed',
    desc: 'Every part comes with full back-to-birth documentation — FAA, EASA, and DGCA compliant.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global Sourcing Network',
    desc: 'Access to thousands of certified suppliers and OEM-approved distributors across six continents.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Rapid AOG Response',
    desc: '24/7/365 dedicated AOG desk with Next-Flight-Out (NFO) dispatch capability.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark overflow-hidden">
        {/* Background dot matrix */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(#8B949E 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Gradient overlay to soften edges */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark to-transparent" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-dark to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-48">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-3 bg-white/5 text-silver text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-10 border border-white/10 backdrop-blur-md shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Aviation Parts Procurement
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold text-white leading-[1.1] tracking-tight">
              Precision Aviation Spares.<br/>
              <span className="text-accent">Delivered on Time,</span> Every Time.
            </h1>

            <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
              Supplying critical Expendables, Consumables, and Rotables to Commercial Airlines, MROs, and Charter Operators worldwide.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
              <Link href="/contact" className="btn-primary text-base px-10 py-5">
                Request a Quote
              </Link>
              <Link href="/aog" className="btn-outline text-base px-10 py-5">
                24/7 AOG Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-surface relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {[
              { value: '50,000+', label: 'Part Numbers in Network' },
              { value: '30+', label: 'Countries Served' },
              { value: '24/7', label: 'AOG Support' },
              { value: '99.6%', label: 'On-Time Dispatch Rate' },
            ].map((stat) => (
              <div key={stat.label} className="p-4">
                <p className="font-heading text-4xl md:text-5xl font-black text-accent mb-3">{stat.value}</p>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className="bg-dark relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center mb-16">
            <h2 className="section-heading">Built for Absolute Reliability.</h2>
            <p className="mt-5 section-subheading max-w-2xl mx-auto">
              A supply chain tailored to the rigorous demands of modern aviation operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat) => (
              <div key={feat.title} className="card group flex flex-col items-start text-left">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-surface-light border border-white/5 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-white text-xl mb-3">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-surface border-t border-white/5 relative overflow-hidden">
        {/* Accent glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent opacity-5 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 text-center">
          <h2 className="section-heading">Ready to Streamline Your Procurement?</h2>
          <p className="mt-6 section-subheading max-w-xl mx-auto">
            Submit your RFQ and our procurement specialists will respond within 2 business hours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/contact" className="btn-primary px-12 py-5 text-base">Submit an RFQ</Link>
            <Link href="/services" className="btn-outline px-12 py-5 text-base">Browse Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
