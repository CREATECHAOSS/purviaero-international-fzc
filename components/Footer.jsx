import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E1C36] text-white py-14 border-t border-[#B8872A]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center">

        {/* Brand */}
        <div className="flex flex-col items-center mb-6 font-rajdhani">
          <div className="flex items-baseline space-x-1">
            <span style={{ fontWeight: 700, color: "#B8872A", fontSize: "20px", letterSpacing: "3px" }}>
              PURVI AERO
            </span>
          </div>
          <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.55)", fontSize: "10px", letterSpacing: "5px" }}>
            INTERNATIONAL
          </span>
        </div>
        <p className="text-lg italic font-medium text-white/60 mb-8">
          One Source. Every Part.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-sm text-white/50">
          <p>
            &copy; {currentYear} Purvi Aero International FZC. All Rights Reserved.
          </p>
          <nav className="flex gap-6">
            {[
              { href: "/",         label: "Home"     },
              { href: "/services", label: "Services" },
              { href: "/about",    label: "About"    },
              { href: "/contact",  label: "Contact"  },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-[#B8872A] transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
