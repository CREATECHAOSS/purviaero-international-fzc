"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",         label: "Home"     },
  { href: "/services", label: "Services" },
  { href: "/about",    label: "About"    },
  { href: "/contact",  label: "Contact"  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="bg-[#0E1C36] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-baseline font-rajdhani whitespace-nowrap group"
          >
            <span style={{ fontWeight: 700, color: "#B8872A", fontSize: "16px", letterSpacing: "2px" }}>
              PURVI
            </span>
            <span style={{ fontWeight: 700, color: "#FFFFFF", fontSize: "16px", letterSpacing: "2px", marginLeft: "4px" }}>
              AERO
            </span>
            <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.55)", fontSize: "11px", letterSpacing: "3px", marginLeft: "4px" }}>
              INTERNATIONAL
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-300 relative py-1 ${
                  isActive(href)
                    ? "text-[#B8872A]"
                    : "text-white/80 hover:text-[#B8872A]"
                }`}
              >
                {label}
                {/* Active underline */}
                {isActive(href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8872A] rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 bg-[#B8872A] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#A17624] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-[#B8872A]/30"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#B8872A] hover:text-[#A17624] transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0E1C36] border-t border-white/10">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  isActive(href)
                    ? "text-[#B8872A] bg-white/5"
                    : "text-white/80 hover:text-[#B8872A] hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-4 py-3 rounded-lg text-sm font-semibold bg-[#B8872A] text-white text-center hover:bg-[#A17624] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
