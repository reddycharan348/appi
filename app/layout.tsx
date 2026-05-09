import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Egg Wholesale in Shanthipuram | H K G N Egg Mart",
  description: "H K G N Egg Mart is the leading egg wholesale supplier in Shanthipuram. Premium quality eggs at minimal market rates for shops and vendors.",
  keywords: ["egg wholesale in Shanthipuram", "HKGN Egg Mart", "best egg rates for shops", "Arimuthanapalle egg supply"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white text-[#333]`}>
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="HKGN Logo" width={50} height={50} className="rounded-full" />
              <div className="flex flex-col">
                <span className="font-outfit text-2xl font-extrabold tracking-tight text-[#121212]">H K G N</span>
                <span className="text-[10px] uppercase tracking-[3px] text-[#ccac00] font-bold">Egg Mart</span>
              </div>
            </Link>
            <ul className="hidden md:flex gap-10 items-center font-medium text-sm">
              <li><Link href="/about" className="hover:text-[#ccac00] transition-colors">Our Story</Link></li>
              <li><Link href="/wholesale" className="hover:text-[#ccac00] transition-colors">Wholesale</Link></li>
              <li><Link href="/services" className="hover:text-[#ccac00] transition-colors">Services</Link></li>
              <li><Link href="/faq" className="hover:text-[#ccac00] transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="bg-[#FFD700] px-6 py-2.5 rounded-full font-bold hover:shadow-lg transition-all">Contact Us</Link></li>
            </ul>
          </nav>
        </header>

        <main className="pt-20">
          {children}
        </main>

        <footer className="bg-gray-50 border-t border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <Image src="/images/logo.png" alt="HKGN Logo" width={40} height={40} />
                  <span className="font-outfit text-xl font-bold">H K G N Egg Mart</span>
                </div>
                <p className="text-gray-500 max-w-sm leading-relaxed">
                  The most trusted egg wholesale partner in Shanthipuram, Andhra Pradesh. Dedicated to quality, freshness, and minimal rates since 1994.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-6">Sitemap</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li><Link href="/about" className="hover:text-black">About Us</Link></li>
                  <li><Link href="/wholesale" className="hover:text-black">Wholesale Rates</Link></li>
                  <li><Link href="/services" className="hover:text-black">Our Reach</Link></li>
                  <li><Link href="/contact" className="hover:text-black">Partner With Us</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6">Contact</h4>
                <p className="text-sm text-gray-500 leading-loose">
                  Main Road, Shanthipuram,<br />
                  Arimuthanapalle, AP 517423<br />
                  081797 15066
                </p>
              </div>
            </div>
            <div className="pt-12 border-t border-gray-200 flex flex-col md:row justify-between items-center text-xs text-gray-400 gap-4">
              <p>© 2026 H K G N Egg Mart. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/admin" className="hover:text-gray-600">Admin Login</Link>
                <Link href="/sitemap.xml" className="hover:text-gray-600">Sitemap XML</Link>
              </div>
            </div>
          </div>
        </footer>

        <Link 
          href="https://wa.me/918179715066" 
          className="fixed bottom-8 right-8 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-[9999]"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </Link>
      </body>
    </html>
  );
}
