import Link from "next/link";
import FadeIn from "@/components/FadeIn";

/* ─────────────────────────────────────────────
   SVG Illustration 1 — Aircraft Spares
   Theme: Component schematic / part diagram
───────────────────────────────────────────── */
function SparesIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[420px] mx-auto select-none">
      {/* Background grid */}
      <defs>
        <pattern id="grid1" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#0E1C36" strokeWidth="0.4" strokeOpacity="0.1"/>
        </pattern>
      </defs>
      <rect width="400" height="360" fill="url(#grid1)" rx="16"/>

      {/* Central component body */}
      <rect x="140" y="120" width="120" height="120" rx="6" stroke="#0E1C36" strokeWidth="2" fill="white"/>
      <rect x="155" y="135" width="90" height="90" rx="4" stroke="#0E1C36" strokeWidth="1" strokeOpacity="0.3" fill="none"/>

      {/* Component inner detail */}
      <circle cx="200" cy="180" r="28" stroke="#B8872A" strokeWidth="2"/>
      <circle cx="200" cy="180" r="16" stroke="#B8872A" strokeWidth="1.5" strokeDasharray="4 3"/>
      <circle cx="200" cy="180" r="5" fill="#B8872A"/>

      {/* Cross-hairs through center */}
      <line x1="200" y1="148" x2="200" y2="212" stroke="#0E1C36" strokeWidth="0.8" strokeOpacity="0.4"/>
      <line x1="168" y1="180" x2="232" y2="180" stroke="#0E1C36" strokeWidth="0.8" strokeOpacity="0.4"/>

      {/* Left connector arm */}
      <rect x="60" y="165" width="80" height="30" rx="4" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      <line x1="140" y1="180" x2="140" y2="180" stroke="#0E1C36" strokeWidth="1.5"/>
      <circle cx="80" cy="180" r="6" stroke="#B8872A" strokeWidth="1.5" fill="white"/>
      <line x1="60" y1="172" x2="60" y2="188" stroke="#B8872A" strokeWidth="2"/>

      {/* Right connector arm */}
      <rect x="260" y="165" width="80" height="30" rx="4" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      <circle cx="320" cy="180" r="6" stroke="#B8872A" strokeWidth="1.5" fill="white"/>
      <line x1="340" y1="172" x2="340" y2="188" stroke="#B8872A" strokeWidth="2"/>

      {/* Top connector arm */}
      <rect x="185" y="50" width="30" height="70" rx="4" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      <circle cx="200" cy="70" r="6" stroke="#B8872A" strokeWidth="1.5" fill="white"/>
      <line x1="192" y1="50" x2="208" y2="50" stroke="#B8872A" strokeWidth="2"/>

      {/* Bottom connector arm */}
      <rect x="185" y="240" width="30" height="70" rx="4" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      <circle cx="200" cy="290" r="6" stroke="#B8872A" strokeWidth="1.5" fill="white"/>
      <line x1="192" y1="310" x2="208" y2="310" stroke="#B8872A" strokeWidth="2"/>

      {/* Corner bolt indicators */}
      {[[152,132],[248,132],[152,228],[248,228]].map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="5" stroke="#0E1C36" strokeWidth="1" fill="white"/>
          <line x1={x-3} y1={y} x2={x+3} y2={y} stroke="#0E1C36" strokeWidth="0.8"/>
          <line x1={x} y1={y-3} x2={x} y2={y+3} stroke="#0E1C36" strokeWidth="0.8"/>
        </g>
      ))}

      {/* Data label tags */}
      <rect x="30" y="50" width="80" height="22" rx="3" fill="#0E1C36"/>
      <text x="70" y="65" textAnchor="middle" fontSize="8" fill="#B8872A" fontFamily="sans-serif" letterSpacing="1" fontWeight="600">P/N VERIFIED</text>

      <rect x="290" y="290" width="80" height="22" rx="3" fill="#0E1C36"/>
      <text x="330" y="305" textAnchor="middle" fontSize="8" fill="#B8872A" fontFamily="sans-serif" letterSpacing="1" fontWeight="600">8130 / FORM 1</text>

      {/* Dimension arrows */}
      <line x1="140" y1="330" x2="260" y2="330" stroke="#0E1C36" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="140" y1="326" x2="140" y2="334" stroke="#0E1C36" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="260" y1="326" x2="260" y2="334" stroke="#0E1C36" strokeWidth="1" strokeOpacity="0.4"/>
      <text x="200" y="345" textAnchor="middle" fontSize="8" fill="#0E1C36" fillOpacity="0.4" fontFamily="sans-serif">120 mm</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG Illustration 2 — MRO Consumables
   Theme: Fluid / chemical storage schematic
───────────────────────────────────────────── */
function ConsumablesIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[420px] mx-auto select-none">
      <defs>
        <pattern id="grid2" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#0E1C36" strokeWidth="0.4" strokeOpacity="0.1"/>
        </pattern>
      </defs>
      <rect width="400" height="360" fill="url(#grid2)" rx="16"/>

      {/* Large drum / canister */}
      <rect x="148" y="90" width="72" height="160" rx="8" stroke="#0E1C36" strokeWidth="2" fill="white"/>
      {/* Fill level indicator */}
      <rect x="148" y="170" width="72" height="80" rx="0" fill="#0E1C36" fillOpacity="0.06"/>
      <line x1="148" y1="170" x2="220" y2="170" stroke="#B8872A" strokeWidth="1.5"/>
      {/* Drum markings */}
      {[110, 130, 150, 170, 190, 210, 230].map((y, i) => (
        <line key={i} x1="152" y1={y} x2={i % 2 === 0 ? 168 : 162} y2={y} stroke="#0E1C36" strokeWidth="1" strokeOpacity="0.4"/>
      ))}
      {/* Cap */}
      <rect x="160" y="82" width="48" height="12" rx="3" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      <rect x="174" y="76" width="20" height="8" rx="2" stroke="#B8872A" strokeWidth="1.5" fill="white"/>
      {/* Label area */}
      <rect x="156" y="196" width="56" height="36" rx="3" stroke="#B8872A" strokeWidth="1" fill="none"/>
      <text x="184" y="211" textAnchor="middle" fontSize="7" fill="#0E1C36" fontFamily="sans-serif" fontWeight="600">MIL-PRF</text>
      <text x="184" y="224" textAnchor="middle" fontSize="7" fill="#B8872A" fontFamily="sans-serif" fontWeight="700">APPROVED</text>
      {/* Base rail */}
      <rect x="132" y="250" width="104" height="10" rx="3" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>

      {/* Small container left */}
      <rect x="68" y="160" width="46" height="90" rx="6" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      <rect x="78" y="154" width="26" height="10" rx="3" stroke="#0E1C36" strokeWidth="1" fill="white"/>
      <rect x="68" y="205" width="46" height="45" rx="0" fill="#0E1C36" fillOpacity="0.05"/>
      <line x1="68" y1="205" x2="114" y2="205" stroke="#B8872A" strokeWidth="1"/>

      {/* Small container right */}
      <rect x="286" y="160" width="46" height="90" rx="6" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      <rect x="296" y="154" width="26" height="10" rx="3" stroke="#0E1C36" strokeWidth="1" fill="white"/>
      <rect x="286" y="220" width="46" height="30" rx="0" fill="#0E1C36" fillOpacity="0.05"/>
      <line x1="286" y1="220" x2="332" y2="220" stroke="#B8872A" strokeWidth="1"/>

      {/* Connecting pipes */}
      <path d="M 114 195 Q 148 195 148 195" stroke="#0E1C36" strokeWidth="1.5" strokeDasharray="3 2"/>
      <path d="M 220 195 Q 254 195 286 195" stroke="#0E1C36" strokeWidth="1.5" strokeDasharray="3 2"/>

      {/* Classification labels */}
      <rect x="30" y="270" width="90" height="22" rx="3" fill="#0E1C36"/>
      <text x="75" y="285" textAnchor="middle" fontSize="8" fill="#B8872A" fontFamily="sans-serif" letterSpacing="0.5" fontWeight="600">SPEC VERIFIED</text>

      <rect x="280" y="270" width="90" height="22" rx="3" fill="#0E1C36"/>
      <text x="325" y="285" textAnchor="middle" fontSize="8" fill="#B8872A" fontFamily="sans-serif" letterSpacing="0.5" fontWeight="600">OEM APPROVED</text>

      {/* Fastener illustration top-right */}
      <circle cx="330" cy="90" r="22" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      <circle cx="330" cy="90" r="12" stroke="#B8872A" strokeWidth="1.5"/>
      <line x1="316" y1="90" x2="344" y2="90" stroke="#0E1C36" strokeWidth="3" strokeLinecap="round"/>
      <line x1="330" y1="76" x2="330" y2="104" stroke="#0E1C36" strokeWidth="3" strokeLinecap="round"/>

      {/* Sealant tube top-left */}
      <ellipse cx="70" cy="90" rx="20" ry="40" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      <ellipse cx="70" cy="68" rx="8" ry="6" stroke="#B8872A" strokeWidth="1.5" fill="white"/>
      <line x1="70" y1="62" x2="70" y2="52" stroke="#B8872A" strokeWidth="2" strokeLinecap="round"/>
      {[78,90,102,114,122].map((y,i) => (
        <line key={i} x1="50" y1={y} x2="90" y2={y} stroke="#0E1C36" strokeWidth="0.8" strokeOpacity="0.2"/>
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG Illustration 3 — Expendables & Hardware
   Theme: Hardware / fastener / seal schematic
───────────────────────────────────────────── */
function ExpendablesIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[420px] mx-auto select-none">
      <defs>
        <pattern id="grid3exp" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#0E1C36" strokeWidth="0.4" strokeOpacity="0.1"/>
        </pattern>
      </defs>
      <rect width="400" height="360" fill="url(#grid3exp)" rx="16"/>

      {/* O-ring / seal — top left */}
      <circle cx="90" cy="100" r="38" stroke="#0E1C36" strokeWidth="2" fill="white"/>
      <circle cx="90" cy="100" r="24" stroke="#B8872A" strokeWidth="2.5"/>
      <circle cx="90" cy="100" r="10" stroke="#0E1C36" strokeWidth="1" strokeOpacity="0.3" fill="white"/>
      <text x="90" y="158" textAnchor="middle" fontSize="7" fill="#0E1C36" fontFamily="sans-serif" fontWeight="600" fillOpacity="0.6">O-RING</text>

      {/* Bolt — top center */}
      <rect x="176" y="44" width="28" height="56" rx="4" stroke="#0E1C36" strokeWidth="2" fill="white"/>
      <rect x="168" y="44" width="44" height="14" rx="3" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      {[60,70,80,90].map((y,i) => (
        <line key={i} x1="180" y1={y} x2="204" y2={y} stroke="#0E1C36" strokeWidth="0.7" strokeOpacity="0.25"/>
      ))}
      <rect x="182" y="100" width="16" height="30" rx="2" stroke="#B8872A" strokeWidth="1.5" fill="white"/>
      <text x="190" y="144" textAnchor="middle" fontSize="7" fill="#0E1C36" fontFamily="sans-serif" fontWeight="600" fillOpacity="0.6">BOLT</text>

      {/* Filter element — top right */}
      <rect x="292" y="56" width="60" height="80" rx="8" stroke="#0E1C36" strokeWidth="2" fill="white"/>
      {[74,84,94,104,114,124].map((y,i) => (
        <line key={i} x1="298" y1={y} x2="346" y2={y} stroke="#0E1C36" strokeWidth="0.8" strokeOpacity="0.3"/>
      ))}
      <circle cx="322" cy="56" r="8" stroke="#B8872A" strokeWidth="1.5" fill="white"/>
      <line x1="322" y1="48" x2="322" y2="40" stroke="#B8872A" strokeWidth="1.5"/>
      <text x="322" y="152" textAnchor="middle" fontSize="7" fill="#0E1C36" fontFamily="sans-serif" fontWeight="600" fillOpacity="0.6">FILTER</text>

      {/* Gasket — center left */}
      <rect x="44" y="196" width="90" height="44" rx="6" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      <rect x="56" y="208" width="66" height="20" rx="3" stroke="#B8872A" strokeWidth="1.5" fill="none"/>
      <line x1="56" y1="218" x2="122" y2="218" stroke="#0E1C36" strokeWidth="0.8" strokeOpacity="0.3"/>
      <text x="89" y="256" textAnchor="middle" fontSize="7" fill="#0E1C36" fontFamily="sans-serif" fontWeight="600" fillOpacity="0.6">GASKET</text>

      {/* Electrical connector — center */}
      <rect x="154" y="190" width="92" height="56" rx="6" stroke="#0E1C36" strokeWidth="2" fill="white"/>
      {[[168,206],[180,206],[192,206],[204,206],[216,206],[168,222],[180,222],[192,222],[204,222],[216,222]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="4" stroke="#B8872A" strokeWidth="1.2" fill="white"/>
      ))}
      <line x1="154" y1="218" x2="246" y2="218" stroke="#0E1C36" strokeWidth="0.6" strokeOpacity="0.2"/>
      <text x="200" y="262" textAnchor="middle" fontSize="7" fill="#0E1C36" fontFamily="sans-serif" fontWeight="600" fillOpacity="0.6">CONNECTOR</text>

      {/* Locking wire spool — center right */}
      <circle cx="322" cy="218" r="30" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      <circle cx="322" cy="218" r="18" stroke="#B8872A" strokeWidth="1.5" strokeDasharray="5 3"/>
      <circle cx="322" cy="218" r="6" stroke="#0E1C36" strokeWidth="1.5" fill="white"/>
      <path d="M 322 188 Q 358 196 352 218" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="322" y="262" textAnchor="middle" fontSize="7" fill="#0E1C36" fontFamily="sans-serif" fontWeight="600" fillOpacity="0.6">LOCK WIRE</text>

      {/* Traceability badge */}
      <rect x="30" y="300" width="110" height="22" rx="3" fill="#0E1C36"/>
      <text x="85" y="315" textAnchor="middle" fontSize="8" fill="#B8872A" fontFamily="sans-serif" letterSpacing="0.5" fontWeight="600">CERT & TRACEABLE</text>

      {/* OEM tag */}
      <rect x="260" y="300" width="110" height="22" rx="3" fill="#0E1C36"/>
      <text x="315" y="315" textAnchor="middle" fontSize="8" fill="#B8872A" fontFamily="sans-serif" letterSpacing="0.5" fontWeight="600">OEM APPROVED</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SVG Illustration 4 — Rotables Management
   Theme: Circular repair cycle diagram
───────────────────────────────────────────── */
function RotablesIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[420px] mx-auto select-none">
      <defs>
        <pattern id="grid4" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#0E1C36" strokeWidth="0.4" strokeOpacity="0.1"/>
        </pattern>
      </defs>
      <rect width="400" height="360" fill="url(#grid4)" rx="16"/>

      {/* Outer cycle ring */}
      <circle cx="200" cy="180" r="130" stroke="#0E1C36" strokeWidth="1.5" strokeOpacity="0.15"/>
      <circle cx="200" cy="180" r="115" stroke="#0E1C36" strokeWidth="1" strokeDasharray="6 4" strokeOpacity="0.3"/>

      {/* Gold progress arc — 3/4 of circle */}
      <path
        d="M 200 65 A 115 115 0 1 1 84 267"
        stroke="#B8872A" strokeWidth="3" strokeLinecap="round"
      />

      {/* Arrow head at end of arc */}
      <polygon points="78,258 94,274 78,280" fill="#B8872A"/>

      {/* Centre hub */}
      <circle cx="200" cy="180" r="46" fill="#0E1C36"/>
      <circle cx="200" cy="180" r="38" stroke="#B8872A" strokeWidth="1" strokeOpacity="0.4" fill="none"/>
      <text x="200" y="175" textAnchor="middle" fontSize="9" fill="#B8872A" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">ROTABLE</text>
      <text x="200" y="190" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="400" fillOpacity="0.7">CYCLE</text>

      {/* Stage nodes at 12, 3, 6, 9 o'clock positions */}
      {/* Top — Remove */}
      <circle cx="200" cy="65" r="20" fill="white" stroke="#0E1C36" strokeWidth="2"/>
      <text x="200" y="61" textAnchor="middle" fontSize="7" fill="#0E1C36" fontFamily="sans-serif" fontWeight="700">REMOVE</text>
      <text x="200" y="72" textAnchor="middle" fontSize="7" fill="#B8872A" fontFamily="sans-serif">&amp; SHIP</text>

      {/* Right — Repair */}
      <circle cx="315" cy="180" r="20" fill="white" stroke="#0E1C36" strokeWidth="2"/>
      <text x="315" y="176" textAnchor="middle" fontSize="7" fill="#0E1C36" fontFamily="sans-serif" fontWeight="700">REPAIR</text>
      <text x="315" y="187" textAnchor="middle" fontSize="7" fill="#B8872A" fontFamily="sans-serif">SHOP</text>

      {/* Bottom — Certify */}
      <circle cx="200" cy="295" r="20" fill="white" stroke="#0E1C36" strokeWidth="2"/>
      <text x="200" y="291" textAnchor="middle" fontSize="7" fill="#0E1C36" fontFamily="sans-serif" fontWeight="700">CERTIFY</text>
      <text x="200" y="302" textAnchor="middle" fontSize="7" fill="#B8872A" fontFamily="sans-serif">TAG</text>

      {/* Left — Exchange */}
      <circle cx="85" cy="180" r="20" fill="#0E1C36" stroke="#B8872A" strokeWidth="2"/>
      <text x="85" y="176" textAnchor="middle" fontSize="7" fill="white" fontFamily="sans-serif" fontWeight="700">EXCHANGE</text>
      <text x="85" y="187" textAnchor="middle" fontSize="7" fill="#B8872A" fontFamily="sans-serif">POOL</text>

      {/* Small diagonal markers on ring */}
      {[30, 60, 120, 150, 210, 240, 270, 300, 330].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const r = 115;
        return (
          <circle key={i} cx={200 + r * Math.sin(rad)} cy={180 - r * Math.cos(rad)} r="2.5" fill="#0E1C36" fillOpacity="0.25"/>
        );
      })}

      {/* AOG tag badge */}
      <rect x="296" y="36" width="72" height="22" rx="11" fill="#B8872A"/>
      <text x="332" y="51" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="700" letterSpacing="1">AOG READY</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Bullet point component
───────────────────────────────────────────── */
function Bullet({ text }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[5px] flex-shrink-0">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7L6 11L12 3" stroke="#B8872A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="text-[#374151] leading-relaxed">{text}</span>
    </li>
  );
}

/* ─────────────────────────────────────────────
   Reusable Section component
   reversed=true → illustration on right (text left)
   paragraph prop → optional descriptive text block
───────────────────────────────────────────── */
function ServiceSection({ id, bg, illustration, title, paragraph, bullets, reversed = false }) {
  return (
    <section id={id} style={{ backgroundColor: bg }} className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16 lg:gap-20`}>

          {/* Illustration */}
          <FadeIn className="w-full lg:w-[45%] flex-shrink-0">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: "radial-gradient(ellipse at center, rgba(184,135,42,0.08) 0%, transparent 70%)" }}
              />
              {illustration}
            </div>
          </FadeIn>

          {/* Text block */}
          <FadeIn delay={120} className="flex-1 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5 justify-center lg:justify-start">
              <span className="block w-6 h-px bg-[#B8872A]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8872A]">
                Aviation Services
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0E1C36" }}
            >
              {title}
            </h2>

            {/* Optional paragraph */}
            {paragraph && (
              <p className="text-[#374151] leading-relaxed mb-8 text-left">
                {paragraph}
              </p>
            )}

            {/* Bullets */}
            <ul className="space-y-4 mb-10 text-left">
              {bullets.map((b) => <Bullet key={b} text={b} />)}
            </ul>

            {/* CTA link */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-sm group"
              style={{ color: "#B8872A" }}
            >
              <span className="border-b border-[#B8872A]/40 group-hover:border-[#B8872A] transition-all">
                Enquire Now
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Services Page
───────────────────────────────────────────── */
export const metadata = {
  title: 'Aviation Parts & MRO Consumables Supplier | Purvi Aero International FZC',
  description: 'Aircraft spares, MRO consumables, sealants, hydraulic fluids, fasteners, rotables and expendables supplied with full traceability documentation. Based in Dubai, UAE.',
  openGraph: {
    title: 'Aviation Parts & MRO Consumables Supplier | Purvi Aero International FZC',
    description: 'Aircraft spares, MRO consumables, sealants, hydraulic fluids, fasteners, rotables and expendables supplied with full traceability documentation. Based in Dubai, UAE.',
  },
};

export default function ServicesPage() {
  return (
    <main>
      {/* ── PAGE HERO ── */}
      <div className="bg-[#0E1C36] py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#B8872A" }}>
            What We Supply
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our Services
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            End-to-end aviation supply solutions — from certified components to consumables and managed rotable programmes.
          </p>
        </div>
      </div>

      {/* ── SECTION 1: Aircraft Spares & Components — white, illustration left ── */}
      <ServiceSection
        id="aircraft-spares"
        bg="#FFFFFF"
        illustration={<SparesIllustration />}
        title="Aircraft Spares & Components"
        bullets={[
          "Rotables and expendables",
          "Overhauled and serviceable units",
          "Manufacturer and PMA parts",
          "Full 8130 / EASA Form 1 documentation",
        ]}
        reversed={false}
      />

      {/* ── SECTION 2: MRO Consumables & Chemicals — cream, text left, illustration right ── */}
      <ServiceSection
        id="mro-consumables"
        bg="#F5F1E8"
        illustration={<ConsumablesIllustration />}
        title="MRO Consumables & Chemicals"
        paragraph="Our consumables range covers the full spectrum of day-to-day MRO requirements — from approved sealants and adhesives to hydraulic fluids, lubricants, corrosion inhibitors, and cleaning agents. All products are sourced from OEM-approved manufacturers with full batch traceability and shelf-life documentation."
        bullets={[
          "Sealants, adhesives and compounds",
          "Hydraulic and lubricating fluids",
          "Cleaning agents and surface treatments",
          "Corrosion inhibitors and primers",
          "Fasteners, hardware and fittings",
          "Approved manufacturer sourcing with full SDS documentation",
        ]}
        reversed={true}
      />

      {/* ── SECTION 3: Expendables & Hardware — white, illustration left ── */}
      <ServiceSection
        id="expendables-hardware"
        bg="#FFFFFF"
        illustration={<ExpendablesIllustration />}
        title="Expendables & Hardware"
        paragraph="Expendable components are the backbone of every maintenance event. We stock and source a comprehensive range of hardware, seals, gaskets, filters, and structural expendables — all certified and traceable to approved sources."
        bullets={[
          "O-rings, seals and gaskets",
          "Filters and filter elements",
          "Structural fasteners and bolts",
          "Electrical connectors and terminals",
          "Locking wire, split pins and safety items",
          "Certification and traceability on every line item",
        ]}
        reversed={false}
      />

      {/* ── SECTION 4: Rotables Management — cream, text left, illustration right ── */}
      <ServiceSection
        id="rotables-management"
        bg="#F5F1E8"
        illustration={<RotablesIllustration />}
        title="Rotables Management"
        bullets={[
          "Exchange and loan pool access",
          "Repair cycle management",
          "Certified serviceable tags",
          "AOG and priority support",
        ]}
        reversed={true}
      />

      {/* ── BOTTOM CTA BAND ── */}
      <div className="bg-[#0E1C36] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Need a specific part or service?
          </p>
          <p className="text-white/60 mb-8">
            Send us your requirement and we will respond within hours.
          </p>
          <Link
            href="/contact"
            className="btn-gold group inline-flex items-center gap-2"
          >
            <span>Send a Request</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
