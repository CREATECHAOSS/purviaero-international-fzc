export const metadata = {
  title: 'About Us | Purvi Aero International FZC',
  description: 'Learn how Purvi Aero International FZC bridges complex procurement demands with seamless aviation supply chain execution.',
};

const pillars = [
  { label: 'Commercial Airlines', icon: '✈' },
  { label: 'MRO Facilities', icon: '🔧' },
  { label: 'Private & Charter Operators', icon: '🛩' },
  { label: 'Rotorcraft Operators', icon: '🚁' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-surface to-dark" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">About Purvi Aero</p>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-[1.15] max-w-3xl">
            Keeping Fleets Airborne Through Supply Chain Excellence.
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                Purvi Aero International FZC bridges the gap between complex procurement demands and seamless operational execution. We are an integrated aviation supplier dedicated to providing fully traceable parts to Commercial Airlines, MRO facilities, and Private fleets. Our mission is to eliminate operational downtime by handling the complexities of sourcing, technical records verification, and logistics.
              </p>
              <p className="text-gray-400 leading-relaxed text-base">
                Founded by aviation professionals, we understand the critical nature of every component that keeps an aircraft airworthy. Every part we supply undergoes rigorous documentation review to ensure compliance with FAA, EASA, and DGCA regulations before it reaches your facility.
              </p>

              <div className="pt-10 grid grid-cols-2 gap-6">
                {[
                  { value: '15+', label: 'Years Experience' },
                  { value: '100%', label: 'Parts Traceable' },
                  { value: 'FAA/EASA', label: 'Compliance Standards' },
                  { value: 'NFO', label: 'Expedite Capability' },
                ].map((item) => (
                  <div key={item.label} className="card p-6 border border-white/5">
                    <p className="font-heading text-3xl font-black text-white">{item.value}</p>
                    <p className="text-xs text-accent mt-2 uppercase tracking-widest font-semibold">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="card bg-surface-light border border-white/5">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">We Serve</h3>
                <ul className="space-y-4">
                  {pillars.map((p) => (
                    <li key={p.label} className="flex items-center gap-4 text-white font-medium">
                      <div className="w-10 h-10 flex items-center justify-center bg-surface rounded-lg border border-white/5 text-lg">
                        {p.icon}
                      </div>
                      {p.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card bg-surface border-l-4 border-l-accent border-y-white/5 border-r-white/5">
                <h3 className="font-heading font-bold text-xl text-white mb-3">Our Core Commitment</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Zero compromise on airworthiness documentation. Every transaction is backed by complete chain-of-custody records and certified inspection documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
