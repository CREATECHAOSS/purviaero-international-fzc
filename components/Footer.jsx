"use client";

import Link from "next/link";

/* ─────────────────────────────────────────────
   Enterprise Footer — Purvi Aero International
   Structure: Brand | Links | Contact Desks
───────────────────────────────────────────── */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-5 mb-10 group">
              <div className="relative flex items-center justify-center bg-white/5 p-3.5 rounded-2xl border border-white/10 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20">
                <img 
                  src="/icon-light.svg" 
                  alt="Purvi Aero Icon" 
                  className="h-12 w-auto transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span 
                  className="text-3xl font-extrabold tracking-[0.05em] text-white leading-none"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  PURVI AERO
                </span>
                <span 
                  className="text-[11px] font-bold tracking-[0.35em] text-secondary leading-none mt-2.5 uppercase"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  INTERNATIONAL FZC
                </span>
                <span 
                  className="text-[9px] font-medium tracking-[0.2em] text-white/50 leading-none mt-2 uppercase italic"
                >
                  Keeping the World Airborne
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed font-medium">
              A global leader in specialized aviation procurement, providing technical sourcing for critical spares, rotable assets, and MRO consumables.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Capabilities</h4>
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {[
                { label: "Critical Spares", href: "/services#aircraft-spares" },
                { label: "Technical Consumables", href: "/services#mro-consumables" },
                { label: "Expendable Hardware", href: "/services#expendables-hardware" },
                { label: "Rotables Management", href: "/services#rotables-management" },
                { label: "AOG Priority Support", href: "/aog" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-white/60 hover:text-secondary transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Corporate Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Corporate</h4>
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {[
                { label: "About Purvi Aero", href: "/about" },
                { label: "Quality & Compliance", href: "/#compliance" },
                { label: "Contact Us", href: "/contact" },
                { label: "Send an RFQ", href: "/contact" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-white/60 hover:text-secondary transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Digital Desks */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Contact Desks</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Technical RFQ Intake</p>
                <a href="mailto:rfq@purviaero.com" className="text-white font-bold hover:text-secondary transition-colors block">
                  rfq@purviaero.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">General Enquiries</p>
                <a href="mailto:info@purviaero.com" className="text-white font-bold hover:text-secondary transition-colors block">
                  info@purviaero.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-white/30">
            &copy; {currentYear} Purvi Aero International FZC. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/30">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Supply</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
