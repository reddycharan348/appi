"use client";

import { useState, useEffect } from "react";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "/about" },
    { name: "Wholesale", href: "/wholesale" },
    { name: "Services", href: "/services" },
    { name: "FAQs", href: "/faq" },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>H K G N Egg Mart | #1 Egg Wholesale in Shanthipuram | Best Daily Market Rates</title>
        <meta name="description" content="H K G N Egg Mart is Shanthipuram's premier egg wholesale distributor. Best egg rates in Shanthipuram, Arimuthanapalle, and Chittoor. Daily market price updates and door-step delivery for shops." />
        <meta name="keywords" content="egg Shanthipuram, egg wholesale Shanthipuram, Shanthipuram egg price today, best egg rates Shanthipuram, HKGN Egg Mart, Arimuthanapalle egg supply, wholesale egg distribution Chittoor, fresh eggs Shanthipuram, egg shops Shanthipuram" />
        <meta name="author" content="HKGN Egg Mart Management" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="canonical" href="https://hkgn-egg-mart.com" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white text-[#121212]`}>
        {/* Navigation */}
        <header 
          className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
            isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm" : "bg-transparent py-6"
          }`}
        >
          <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-brand-gold group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <Image src="/images/logo.png" alt="HKGN Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-outfit text-3xl font-black tracking-tighter text-black">H K G N</span>
                <span className="text-[11px] uppercase tracking-[5px] text-brand-yellow font-black">Egg Mart</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex gap-10 items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-brand-yellow transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="btn-premium bg-black text-white hover:bg-brand-gold hover:text-black py-3 px-8 text-xs uppercase tracking-widest">
                  Partner with us
                </Link>
              </li>
            </ul>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-3 bg-black text-white rounded-2xl shadow-xl active:scale-95 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[110] bg-black text-white lg:hidden"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-center mb-16">
                   <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full border border-brand-gold overflow-hidden">
                      <Image src="/images/logo.png" alt="Logo" fill className="object-cover" />
                    </div>
                    <span className="font-outfit text-xl font-black">HKGN</span>
                  </div>
                  <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-white/10 rounded-2xl">
                    <X />
                  </button>
                </div>
                
                <ul className="space-y-8">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-4xl font-black hover:text-brand-gold transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link 
                      href="/contact" 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-4xl font-black text-brand-gold"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="mt-auto pt-10 border-t border-white/10">
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">Official Partnership Line</p>
                  <div className="space-y-4">
                    <a href="tel:08179715066" className="flex items-center gap-4 text-2xl font-bold">
                      <Phone className="text-brand-gold" /> 081797 15066
                    </a>
                    <div className="flex items-center gap-4 text-gray-400">
                      <Mail className="text-brand-gold" /> info@hkgneggmart.com
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="min-h-screen">
          {children}
        </main>

        {/* Premium Footer */}
        <footer className="bg-black text-white pt-32 pb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-20">
              <div className="md:col-span-5">
                <div className="flex items-center gap-4 mb-10">
                  <div className="relative w-14 h-14 rounded-2xl border border-brand-gold overflow-hidden shadow-2xl">
                    <Image src="/images/logo.png" alt="HKGN" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black font-outfit">H K G N Egg Mart</h4>
                    <p className="text-brand-yellow text-xs font-black uppercase tracking-[4px]">Shanthipuram's Trusted Leader</p>
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10 font-medium">
                  The premier wholesale egg distributor in Andhra Pradesh. 
                  Committed to powering local retail businesses with daily market-minimal rates and farm-fresh supply since 1994.
                </p>
                <div className="flex gap-4">
                   <Link href="tel:08179715066" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all cursor-pointer">
                      <Phone size={20} />
                   </Link>
                   <Link href="/contact" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all cursor-pointer">
                      <Mail size={20} />
                   </Link>
                </div>
              </div>

              <div className="md:col-span-3">
                <h5 className="text-xs font-black uppercase tracking-[4px] text-brand-yellow mb-10">Resources</h5>
                <ul className="space-y-6">
                  {navLinks.map(l => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-gray-400 hover:text-white font-bold transition-colors">{l.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-4">
                <h5 className="text-xs font-black uppercase tracking-[4px] text-brand-yellow mb-10">Regional Office</h5>
                <p className="text-gray-400 font-bold leading-loose mb-10">
                  Main Road, Shanthipuram Junction,<br />
                  Arimuthanapalle, Chittoor Dist,<br />
                  Andhra Pradesh, PIN: 517423
                </p>
                <Link href="/admin" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                   Admin Reception <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-gray-600 text-sm font-bold">© 2026 H K G N Egg Mart. All rights reserved. | 32+ Years of Quality</p>
              <div className="flex gap-10 text-[10px] font-black uppercase tracking-[3px] text-gray-600">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Supply</Link>
                <Link href="/sitemap" className="hover:text-white transition-colors">Site Map</Link>
                <Link href="/sitemap.xml" className="hover:text-white transition-colors">XML Sitemap</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* WhatsApp Floating Action */}
        <Link 
          href="https://wa.me/918179715066" 
          className="fixed bottom-8 right-8 bg-[#25D366] p-5 rounded-full shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all z-[9999] group"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl text-black font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl border border-gray-100">
             Contact Today's Fleet Manager
          </div>
        </Link>
      </body>
    </html>
  );
}
