'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/aog', label: 'AOG Desk' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white group">
          <svg className="w-7 h-7 text-accent group-hover:scale-105 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2h0A1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>
          </svg>
          <span className="text-xl font-heading font-bold tracking-wide leading-tight">
            Purvi Aero <span className="text-accent">International</span>
            <span className="block text-[10px] font-sans font-medium text-silver tracking-widest uppercase leading-none mt-1">FZC</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-6">
            <Link href="/contact" className="btn-primary text-xs px-6 py-2.5">
              Request a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4 pb-2">
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full text-center text-sm py-3.5">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
