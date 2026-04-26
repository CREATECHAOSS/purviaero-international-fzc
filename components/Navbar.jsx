"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",         label: "Home"     },
  { href: "/services", label: "Services" },
  { href: "/aog",      label: "AOG Support" },
  { href: "/about",    label: "About Us" },
  { href: "/contact",  label: "Contact"  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
          >
            <img 
              src="/logo-with-slogan-light.svg" 
              alt="Purvi Aero International" 
              className="h-14 w-auto transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-300 relative py-1 ${
                  isActive(href)
                    ? "text-secondary"
                    : "text-white/80 hover:text-secondary"
                }`}
              >
                {label}
                {/* Active underline */}
                {isActive(href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 btn-primary !px-6 !py-3 !text-[12px] shadow-secondary/10"
            >
              Submit RFQ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-secondary hover:text-secondary/80 transition-colors"
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
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  isActive(href)
                    ? "text-secondary bg-white/5"
                    : "text-white/80 hover:text-secondary hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-4 py-4 rounded-xl text-sm font-bold uppercase tracking-widest bg-secondary text-white text-center hover:bg-secondary/90 transition-colors"
            >
              Submit RFQ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
