import { Metadata } from "next";
import { CheckCircle2, TrendingDown, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Wholesale Egg Rates Shanthipuram | HKGN Egg Mart Bulk Pricing",
  description: "Get the latest wholesale egg rates in Shanthipuram. HKGN Egg Mart offers minimal market rates for bulk orders, daily freshness, and express delivery to your shop.",
};

export default function WholesalePage() {
  return (
    <div className="bg-white">
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black mb-6 font-outfit">Wholesale Excellence & <span className="text-[#ccac00]">Minimal Rates</span></h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              We specialize in providing high-volume egg supply to retail shops, supermarkets, and catering services in Arimuthanapalle and Shanthipuram. Our pricing model is designed to grow your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Partner with HKGN?</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                    <TrendingDown className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Minimal Market Rates</h4>
                    <p className="text-gray-500">We audit regional prices daily to ensure our shop partners always get the most competitive wholesale rate available.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Clock className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Morning Distribution</h4>
                    <p className="text-gray-500">Our dedicated logistics team ensures your crates arrive before your shop opens for business.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Quality Guarantee</h4>
                    <p className="text-gray-500">Every egg is candled and inspected. Any breakage during transport is replaced immediately, no questions asked.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black p-12 rounded-[50px] text-white">
              <h3 className="text-2xl font-bold mb-6 text-[#FFD700]">Bulk Pricing Tiers</h3>
              <ul className="space-y-6">
                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>10 - 50 Crates</span>
                  <span className="font-bold text-[#FFD700]">Standard Wholesale</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>50 - 200 Crates</span>
                  <span className="font-bold text-[#FFD700]">Premium Partner</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>200+ Crates</span>
                  <span className="font-bold text-[#FFD700]">Platinum Supply</span>
                </li>
              </ul>
              <div className="mt-12 bg-white/5 p-6 rounded-3xl border border-white/10">
                <p className="text-sm opacity-60 mb-4 italic">"HKGN Egg Mart has increased my shop's monthly profit by 22% just through their minimal pricing strategy."</p>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FFD700]">— Local Vendor, Shanthipuram</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
