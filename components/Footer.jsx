import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/aog', label: 'AOG Desk' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 text-silver">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-xl font-heading font-bold text-white tracking-wide">
              Purvi Aero <span className="text-accent">International</span> FZC
            </p>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Precision aviation parts procurement for Commercial Airlines, MROs, and Charter Operators worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">Quick Links</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:rfq@purviaero.com" className="hover:text-accent transition-colors">
                  rfq@purviaero.com
                </a>
              </li>
              <li>
                <a href="tel:+919820603873" className="hover:text-accent transition-colors">
                  AOG Hotline: +91 98206 03873
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919820603873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <Link href="/aog" className="btn-outline text-xs px-6 py-3">
                24/7 AOG Desk
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Purvi Aero International FZC. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Traceability Guaranteed &bull; Global Sourcing &bull; Rapid AOG
          </p>
        </div>
      </div>
    </footer>
  );
}
