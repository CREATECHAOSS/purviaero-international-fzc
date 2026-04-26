import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter, Rajdhani, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const rajdhani = Rajdhani({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-rajdhani' 
});

export const metadata = {
  metadataBase: new URL('https://purviaero.com'),
  title: 'Purvi Aero International FZC',
  description: 'Global aviation spares and components supplier. One Source. Every Part.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Purvi Aero International FZC',
    description: 'Global aviation spares and components supplier. One Source. Every Part.',
    url: 'https://purviaero.com',
    siteName: 'Purvi Aero International FZC',
    type: 'website',
  },
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/icon-light.svg',
    apple: '/icon-light.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${rajdhani.variable}`}>
      <body className="flex flex-col min-h-screen font-sans bg-white text-primary antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
