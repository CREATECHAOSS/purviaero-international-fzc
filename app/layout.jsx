import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: 'Purvi Aero International FZC | Aviation Parts Procurement',
  description:
    'Precision aviation spares and procurement for Commercial Airlines, MROs and Charter Operators worldwide. Expendables, Consumables, Rotables — traced, certified, delivered.',
  keywords: 'aviation spares, aircraft parts, MRO supplies, AOG support, rotables, expendables, consumables',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="flex flex-col min-h-screen font-sans bg-dark text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
