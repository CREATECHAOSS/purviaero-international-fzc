import Link from "next/link";
import HomeClient from "./HomeClient";

/* ─────────────────────────────────────────────
   Turbine / Engine Cross-Section Schematic
   Engineering technical drawing style.
   Colors: #0E1C36 (navy) · #B8872A (gold)
   (Server component — no client hooks needed)
───────────────────────────────────────────── */
function TurbineSchematic() {
  const cx = 240;
  const cy = 248;

  /* ── Blade geometry helper ─────────────────
     Each blade is a curved quadrilateral that
     radiates from the hub. We draw 7 blades,
     each rotated by 360/7 ≈ 51.4°.
  ─────────────────────────────────────────── */
  const BLADE_COUNT = 7;
  const blades = Array.from({ length: BLADE_COUNT }, (_, i) => {
    const baseDeg = (i * 360) / BLADE_COUNT;
    const baseRad = (baseDeg * Math.PI) / 180;
    const sweepRad = (38 * Math.PI) / 180; // blade angular width

    const innerR = 52;
    const outerR = 168;
    const innerSweep = 22 * Math.PI / 180;

    // Leading & trailing edge – inner arc points
    const iLx = cx + innerR * Math.cos(baseRad - innerSweep / 2);
    const iLy = cy + innerR * Math.sin(baseRad - innerSweep / 2);
    const iTx = cx + innerR * Math.cos(baseRad + innerSweep / 2);
    const iTy = cy + innerR * Math.sin(baseRad + innerSweep / 2);

    // Leading & trailing edge – outer arc points
    const oLx = cx + outerR * Math.cos(baseRad - sweepRad / 2);
    const oLy = cy + outerR * Math.sin(baseRad - sweepRad / 2);
    const oTx = cx + outerR * Math.cos(baseRad + sweepRad / 2);
    const oTy = cy + outerR * Math.sin(baseRad + sweepRad / 2);

    // Control point for the leading-edge camber curve
    const camberR = (innerR + outerR) / 2 + 14;
    const camberBias = -0.18; // sweep toward leading edge
    const camberRad = baseRad + camberBias;
    const cpLx = cx + camberR * Math.cos(camberRad - sweepRad * 0.38);
    const cpLy = cy + camberR * Math.sin(camberRad - sweepRad * 0.38);

    return { iLx, iLy, iTx, iTy, oLx, oLy, oTx, oTy, cpLx, cpLy, innerR, outerR };
  });

  /* ── Dimension / annotation ticks ─────── */
  const dimAngles = [15, 67, 120, 173, 226, 278, 330];

  return (
    <svg
      viewBox="0 0 480 496"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Abstract turbine engine cross-section schematic"
      className="w-full max-w-[520px] mx-auto select-none"
    >
      {/* ── Background grid ──────────────────────────── */}
      <defs>
        <pattern id="eng-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#0E1C36" strokeWidth="0.5" />
        </pattern>
        <pattern id="eng-grid-major" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect width="120" height="120" fill="url(#eng-grid)" />
          <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#0E1C36" strokeWidth="1" />
        </pattern>
        <clipPath id="panel-clip">
          <rect x="16" y="16" width="448" height="448" rx="4" />
        </clipPath>
      </defs>

      {/* Grid background */}
      <rect x="16" y="16" width="448" height="448" rx="4" fill="url(#eng-grid-major)" fillOpacity="0.10" />

      {/* ── Panel border ─────────────────────────────── */}
      <rect x="16" y="16" width="448" height="448" rx="4" stroke="#0E1C36" strokeWidth="1" strokeOpacity="0.18" />
      {/* Inner inset border */}
      <rect x="24" y="24" width="432" height="432" rx="2" stroke="#0E1C36" strokeWidth="0.5" strokeOpacity="0.10" strokeDasharray="6 4" />

      {/* ── Corner registration marks ─────────────────── */}
      {[[28, 28], [452, 28], [28, 452], [452, 452]].map(([mx, my], i) => {
        const dx = i % 2 === 0 ? 1 : -1;
        const dy = i < 2 ? 1 : -1;
        return (
          <g key={i}>
            <line x1={mx} y1={my} x2={mx + dx * 14} y2={my} stroke="#B8872A" strokeWidth="1" strokeOpacity="0.5" />
            <line x1={mx} y1={my} x2={mx} y2={my + dy * 14} stroke="#B8872A" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx={mx} cy={my} r="1.5" fill="#B8872A" fillOpacity="0.6" />
          </g>
        );
      })}

      {/* ── Cross-hair centre lines ───────────────────── */}
      <line x1={cx} y1="32" x2={cx} y2="460" stroke="#0E1C36" strokeWidth="0.6" strokeOpacity="0.15" strokeDasharray="8 5" />
      <line x1="32" y1={cy} x2="448" y2={cy} stroke="#0E1C36" strokeWidth="0.6" strokeOpacity="0.15" strokeDasharray="8 5" />

      {/* ── Outer nacelle ring ───────────────────────── */}
      <circle cx={cx} cy={cy} r="210" stroke="#0E1C36" strokeWidth="1" strokeOpacity="0.12" />
      <circle cx={cx} cy={cy} r="198" stroke="#0E1C36" strokeWidth="1.2" strokeOpacity="0.30" />
      {/* Gold accent ring */}
      <circle cx={cx} cy={cy} r="192" stroke="#B8872A" strokeWidth="0.8" strokeOpacity="0.20" strokeDasharray="5 4" />

      {/* ── Blade outer shroud / fan ring ────────────── */}
      <circle cx={cx} cy={cy} r="178" stroke="#0E1C36" strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx={cx} cy={cy} r="172" stroke="#0E1C36" strokeWidth="0.5" strokeOpacity="0.20" />

      {/* ── Turbine blades ───────────────────────────── */}
      <g clipPath="url(#panel-clip)">
        {blades.map(({ iLx, iLy, iTx, iTy, oLx, oLy, oTx, oTy, cpLx, cpLy }, i) => (
          <g key={i}>
            {/* Blade face — filled with very subtle navy tint */}
            <path
              d={`M ${iLx} ${iLy}
                  Q ${cpLx} ${cpLy} ${oLx} ${oLy}
                  A 178 178 0 0 1 ${oTx} ${oTy}
                  L ${iTx} ${iTy}
                  A 52 52 0 0 0 ${iLx} ${iLy} Z`}
              fill="#0E1C36"
              fillOpacity="0.04"
              stroke="#0E1C36"
              strokeWidth="1.2"
              strokeOpacity="0.65"
              strokeLinejoin="round"
            />
            {/* Leading-edge gold accent line */}
            <path
              d={`M ${iLx} ${iLy} Q ${cpLx} ${cpLy} ${oLx} ${oLy}`}
              stroke="#B8872A"
              strokeWidth="1"
              strokeOpacity="0.55"
              fill="none"
            />
            {/* Blade camber mid-line (construction line) */}
            <path
              d={`M ${(iLx + iTx) / 2} ${(iLy + iTy) / 2}
                  Q ${cpLx} ${cpLy}
                  ${(oLx + oTx) / 2} ${(oLy + oTy) / 2}`}
              stroke="#0E1C36"
              strokeWidth="0.6"
              strokeOpacity="0.25"
              strokeDasharray="4 3"
              fill="none"
            />
          </g>
        ))}
      </g>

      {/* ── Blade root fillet (inner boundary) ───────── */}
      <circle cx={cx} cy={cy} r="56" stroke="#0E1C36" strokeWidth="1" strokeOpacity="0.30" />
      <circle cx={cx} cy={cy} r="52" stroke="#B8872A" strokeWidth="1" strokeOpacity="0.40" />

      {/* ── Hub / shaft cross-section ─────────────────── */}
      <circle cx={cx} cy={cy} r="44" stroke="#0E1C36" strokeWidth="1.5" strokeOpacity="0.60" fill="#0E1C36" fillOpacity="0.04" />
      <circle cx={cx} cy={cy} r="36" stroke="#0E1C36" strokeWidth="1" strokeOpacity="0.35" />
      <circle cx={cx} cy={cy} r="26" stroke="#B8872A" strokeWidth="1.2" strokeOpacity="0.55" fill="#B8872A" fillOpacity="0.04" />
      {/* Shaft bore */}
      <circle cx={cx} cy={cy} r="14" stroke="#0E1C36" strokeWidth="1.5" strokeOpacity="0.80" fill="#0E1C36" fillOpacity="0.10" />
      <circle cx={cx} cy={cy} r="6"  stroke="#B8872A" strokeWidth="1" strokeOpacity="0.90" fill="#B8872A" fillOpacity="0.18" />
      {/* Centre point */}
      <circle cx={cx} cy={cy} r="2"  fill="#B8872A" fillOpacity="0.9" />

      {/* ── Radial dimension annotation ticks ────────── */}
      {dimAngles.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const r1 = 180, r2 = 194, r3 = 200;
        return (
          <g key={i}>
            <line
              x1={cx + r1 * Math.cos(rad)} y1={cy + r1 * Math.sin(rad)}
              x2={cx + r3 * Math.cos(rad)} y2={cy + r3 * Math.sin(rad)}
              stroke="#B8872A" strokeWidth="0.8" strokeOpacity="0.45"
            />
            <circle cx={cx + r2 * Math.cos(rad)} cy={cy + r2 * Math.sin(rad)} r="1" fill="#B8872A" fillOpacity="0.5" />
          </g>
        );
      })}

      {/* ── Outer dimension leader lines ─────────────── */}
      {/* Horizontal span */}
      <line x1={cx - 198} y1={cy + 224} x2={cx + 198} y2={cy + 224} stroke="#0E1C36" strokeWidth="0.7" strokeOpacity="0.25" />
      <line x1={cx - 198} y1={cy + 220} x2={cx - 198} y2={cy + 228} stroke="#0E1C36" strokeWidth="0.7" strokeOpacity="0.25" />
      <line x1={cx + 198} y1={cy + 220} x2={cx + 198} y2={cy + 228} stroke="#0E1C36" strokeWidth="0.7" strokeOpacity="0.25" />
      {/* Vertical span */}
      <line x1={cx + 218} y1={cy - 178} x2={cx + 218} y2={cy + 178} stroke="#0E1C36" strokeWidth="0.7" strokeOpacity="0.20" />
      <line x1={cx + 214} y1={cy - 178} x2={cx + 222} y2={cy - 178} stroke="#0E1C36" strokeWidth="0.7" strokeOpacity="0.20" />
      <line x1={cx + 214} y1={cy + 178} x2={cx + 222} y2={cy + 178} stroke="#0E1C36" strokeWidth="0.7" strokeOpacity="0.20" />

      {/* ── Annotation labels ─────────────────────────── */}
      <text x={cx}         y={cy + 240} textAnchor="middle" fontSize="7" fill="#0E1C36" fillOpacity="0.40" fontFamily="monospace" letterSpacing="1">
        Ø 396 mm  FAN DIAMETER
      </text>
      <text x={cx + 234}  y={cy}       textAnchor="start"  fontSize="7" fill="#0E1C36" fillOpacity="0.35" fontFamily="monospace" dominantBaseline="central" letterSpacing="0.5">
        356 mm
      </text>

      {/* ── Title block ───────────────────────────────── */}
      <rect x="16" y="462" width="448" height="28" rx="0" fill="#0E1C36" fillOpacity="0.04" stroke="#0E1C36" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="16" y1="462" x2="464" y2="462" stroke="#B8872A" strokeWidth="0.8" strokeOpacity="0.35" />
      {/* Left divider */}
      <line x1="200" y1="462" x2="200" y2="490" stroke="#0E1C36" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="340" y1="462" x2="340" y2="490" stroke="#0E1C36" strokeWidth="0.5" strokeOpacity="0.15" />

      <text x="32"  y="476" fontSize="7" fill="#0E1C36" fillOpacity="0.45" fontFamily="monospace" letterSpacing="1.5" dominantBaseline="central">TURBINE CROSS-SECTION</text>
      <text x="215" y="473" fontSize="6" fill="#0E1C36" fillOpacity="0.35" fontFamily="monospace" dominantBaseline="central">DRG NO.</text>
      <text x="215" y="483" fontSize="6.5" fill="#B8872A" fillOpacity="0.65" fontFamily="monospace" dominantBaseline="central">PAI-ENG-001</text>
      <text x="355" y="473" fontSize="6" fill="#0E1C36" fillOpacity="0.35" fontFamily="monospace" dominantBaseline="central">SCALE 1:4</text>
      <text x="355" y="483" fontSize="6" fill="#0E1C36" fillOpacity="0.30" fontFamily="monospace" dominantBaseline="central">REV A · 2024</text>
    </svg>
  );
}

/* ─── Services data ─── */
const SERVICES = [
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M21 16V8L12 3L3 8V16L12 21L21 16Z" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3V21" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 8L12 13L21 8" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Aircraft Spares",
    description: "Rotables, expendables and overhauled components sourced globally with full traceability documentation.",
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M7 21V19C7 17.8954 7.89543 17 9 17H15C16.1046 17 17 17.8954 17 19V21" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17V7M12 7L9 10M12 7L15 10" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3C10.3431 3 9 4.34315 9 6V7H15V6C15 4.34315 13.6569 3 12 3Z" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Consumables",
    description: "Sealants, fluids, fasteners, compounds and MRO consumables from approved manufacturers.",
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.5997 2 15.1166 2.3735 16.4609 3.03761" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 2L12 12M22 2H17M22 2V7" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Rotables & Repair",
    description: "Exchange pool access, repair management and certified serviceable units for rapid AOG response.",
  },
];

/* ─── Banner data ─── */
const BANNER_ITEMS = [
  {
    label: "Global Supplier\nNetwork",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H22" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2617 12 22C9.49872 19.2617 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Full Traceability\nDocumentation",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M9 12L11 14L15 10" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 12V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H12" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 4H20V9" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Rapid AOG\nResponse",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "UAE Free Zone\nRegistered",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M3 10L12 3L21 10V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10Z" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21V12H15V21" stroke="#B8872A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

/* ─── Main page (Server Component shell) ─── */
export const metadata = {
  title: 'Purvi Aero International FZC | Aviation Spares, Consumables & Rotables — Dubai, UAE',
  description: 'UAE-based aviation parts supplier specialising in aircraft spares, MRO consumables, chemicals, expendables and rotables. Serving airlines and MRO operators worldwide. One Source. Every Part.',
  openGraph: {
    title: 'Purvi Aero International FZC | Aviation Spares, Consumables & Rotables — Dubai, UAE',
    description: 'UAE-based aviation parts supplier specialising in aircraft spares, MRO consumables, chemicals, expendables and rotables. Serving airlines and MRO operators worldwide. One Source. Every Part.',
  },
};

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden py-20">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(14,28,54,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(14,28,54,0.03) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom right, rgba(184,135,42,0.07) 0%, transparent 65%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-12">

            {/* LEFT — Text */}
            <div className="flex-1 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="block w-8 h-px bg-[#B8872A]" />
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#B8872A]">
                  Aviation Spares &amp; Rotables Supplier
                </span>
                <span className="block w-8 h-px bg-[#B8872A]" />
              </div>

              {/* Company Name */}
              <h1
                className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] leading-[1.08] font-bold mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0E1C36", letterSpacing: "-0.01em" }}
              >
                PURVI AERO<br />
                <span className="block mt-1">INTERNATIONAL</span>
                <span
                  className="block mt-1 text-3xl sm:text-4xl lg:text-[2.6rem] font-normal tracking-widest"
                  style={{ color: "#0E1C36", opacity: 0.45 }}
                >
                  FZC
                </span>
              </h1>

              {/* Tagline */}
              <p
                className="text-2xl sm:text-3xl font-semibold mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#B8872A", letterSpacing: "0.04em" }}
              >
                One Source. Every Part.
              </p>

              {/* Divider */}
              <span className="block h-px w-16 mb-6 mx-auto lg:mx-0" style={{ backgroundColor: "#B8872A", opacity: 0.5 }} />

              {/* Sub-heading */}
              <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 text-[#374151]">
                Your trusted source for aviation spares, consumables and rotables.
                Serving airlines and MROs worldwide from Dubai, UAE.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-gold group">
                  <span>Request a Quote</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/services" className="btn-navy-outline group">
                  <span>Our Services</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 max-w-2xl mx-auto lg:mx-0">
                {[
                  { value: "24/7",  label: "AOG Support"           },
                  { value: "50+",   label: "Airline & MRO Clients" },
                  { value: "100%",  label: "Traced & Certified"    },
                  { value: "UAE",   label: "Free Zone Registered"  },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center lg:text-left">
                    <p className="text-2xl font-bold text-[#0E1C36]" style={{ fontFamily: "Georgia, serif" }}>{value}</p>
                    <p className="text-[10px] sm:text-xs font-medium tracking-wider uppercase mt-1.5 text-[#374151]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — SVG */}
            <div className="flex-1 flex items-center justify-center w-full max-w-[480px] lg:max-w-none mx-auto">
              <div className="relative w-full max-w-[440px] lg:max-w-[500px]">
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at center, rgba(184,135,42,0.10) 0%, transparent 68%)", transform: "scale(1.15)" }}
                />
                <TurbineSchematic />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #B8872A 30%, #0E1C36 50%, #B8872A 70%, transparent)", opacity: 0.25 }}
        />
      </section>

      {/* ── SERVICES CARDS ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map(({ icon, title, description }) => (
              <div
                key={title}
                className="fade-in-up bg-white border border-[#0E1C36]/15 p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#B8872A] hover:shadow-xl"
              >
                <div className="mb-6">{icon}</div>
                <h3 className="text-xl font-bold text-[#0E1C36] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {title}
                </h3>
                <p className="text-[#374151] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ── ABOUT TEXT SECTION ── */}
      <section className="bg-white py-20">
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <div className="fade-in-up space-y-6 text-[#374151] text-[15px] leading-[1.8]">
            <p>
              Purvi Aero International FZC is a UAE Free Zone registered aviation trading company supplying aircraft spares, MRO consumables, chemicals, expendables, and rotables to airlines, MRO operators, and ground handling companies across the Middle East, South Asia, and beyond.
            </p>
            <p>
              We source components from OEM-approved suppliers and authorised distributors, ensuring every part is accompanied by the correct airworthiness documentation — whether that is an FAA 8130-3, EASA Form 1, or manufacturer certificate of conformance.
            </p>
            <p>
              Our consumables range includes aviation sealants, corrosion inhibitors, hydraulic fluids, lubricants, cleaning compounds, and structural adhesives — all batch-traceable and supplied with full Safety Data Sheets. For hardware and expendables, we source O-rings, gaskets, filters, fasteners, and electrical components to the exact specification required.
            </p>
            <p>
              Based in Dubai with a global supplier network, we offer fast turnaround on routine stock requirements and priority support for AOG situations.
            </p>
          </div>
        </div>
      </section>

      {/* ── NAVY BANNER ── */}
      <section className="bg-[#0E1C36] py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {BANNER_ITEMS.map(({ label, icon }) => (
              <div key={label} className="fade-in-up flex flex-col items-center text-center group">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {icon}
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-base tracking-wide uppercase whitespace-pre-line">
                  {label}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client wrapper for Intersection Observer */}
      <HomeClient />
    </main>
  );
}
