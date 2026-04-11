"use client";

import Link from "next/link";

/* ─────────────────────────────────────────────
   Enterprise Footer — Purvi Aero International
   Structure: Brand | Links | Contact Desks
───────────────────────────────────────────── */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E1C36] text-white pt-24 pb-12 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-4 mb-8 group">
              {/* Geometric Lockup Icon */}
              <div className="flex gap-1.5 h-8">
                <div className="w-1 h-full bg-[#B8872A] rounded-full" />
                <div className="w-1 h-[80%] my-auto bg-[#B8872A]/70 rounded-full" />
                <div className="w-1 h-[60%] my-auto bg-[#B8872A]/40 rounded-full" />
              </div>
              
              <div className="flex flex-col">
                <span 
                  className="text-xl font-extrabold tracking-[0.05em] text-white leading-none"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  PURVI AERO
                </span>
                <span 
                  className="text-[10px] font-bold tracking-[0.4em] text-white/40 leading-none mt-2 uppercase"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  INTERNATIONAL FZC
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed font-medium mb-8">
              A global leader in specialized aviation procurement, providing technical sourcing for critical spares, rotable assets, and MRO consumables.
            </p>
            <div className="text-[#B8872A] font-bold text-sm italic tracking-widest uppercase">
              One Source. Every Part.
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8872A] mb-8">Capabilities</h4>
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {[
                { label: "Critical Spares", href: "/services#aircraft-spares" },
                { label: "Technical Consumables", href: "/services#mro-consumables" },
                { label: "Expendable Hardware", href: "/services#expendables-hardware" },
                { label: "Rotables Management", href: "/services#rotables-management" },
                { label: "AOG Priority Support", href: "/aog" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-white/60 hover:text-[#B8872A] transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Corporate Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8872A] mb-8">Corporate</h4>
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {[
                { label: "About Purvi Aero", href: "/about" },
                { label: "Quality & Compliance", href: "/#compliance" },
                { label: "Contact Us", href: "/contact" },
                { label: "Send an RFQ", href: "/contact" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-white/60 hover:text-[#B8872A] transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Digital Desks */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8872A] mb-8">Contact Desks</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Technical RFQ Intake</p>
                <a href="mailto:rfq@purviaero.com" className="text-white font-bold hover:text-[#B8872A] transition-colors block">
                  rfq@purviaero.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">General Enquiries</p>
                <a href="mailto:info@purviaero.com" className="text-white font-bold hover:text-[#B8872A] transition-colors block">
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
