"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Package, Truck, Tag } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    fetch("/data/prices.json")
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setCurrentPrice(data[data.length - 1].price);
        }
      });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_eggs_artistic_1778346205172.png" 
            alt="Wholesale Eggs Shanthipuram" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#FFD700] px-4 py-1.5 rounded-full text-xs font-bold mb-8">
              <span className="animate-pulse w-2 h-2 bg-black rounded-full" />
              LIVE TODAY'S RATE
            </div>
            <h1 className="font-outfit text-6xl md:text-8xl font-black text-white leading-tight mb-8">
              Freshness <br />
              <span className="text-[#FFD700]">Redefined.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Premium egg wholesale in Shanthipuram. Providing high-grade supply at minimal market rates for over 500+ shops across Andhra Pradesh.
            </p>
            
            <div className="flex flex-col md:row gap-6 items-start">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
                <span className="text-gray-400 text-xs font-bold block mb-2 uppercase tracking-widest">Today's Wholesale Rate</span>
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-black text-[#FFD700]">₹{currentPrice.toFixed(2)}</span>
                  <span className="text-gray-300 text-sm mb-2">/ per egg</span>
                </div>
              </div>
              <Link href="/wholesale" className="group bg-[#FFD700] hover:bg-white text-black px-10 py-5 rounded-full font-black text-lg transition-all flex items-center gap-4">
                Bulk Ordering
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mb-8">
                <Tag className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Minimal Rates</h3>
              <p className="text-gray-500 leading-relaxed">
                Direct farm sourcing allows us to offer pricing that maximizes your shop's profit margins. We audited our rates daily.
              </p>
            </div>
            <div className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mb-8">
                <Truck className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fast-Track Delivery</h3>
              <p className="text-gray-500 leading-relaxed">
                Our fleet ensures eggs reach your counter within hours of collection, preserving freshness and quality.
              </p>
            </div>
            <div className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mb-8">
                <Package className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Zero Breakage</h3>
              <p className="text-gray-500 leading-relaxed">
                Specialized industrial crates and expert handling guarantee 100% integrity for your bulk orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          <div>
            <span className="block text-6xl font-black text-[#FFD700] mb-2">30+</span>
            <span className="text-xs uppercase tracking-[4px] font-bold text-gray-500">Years Exp</span>
          </div>
          <div>
            <span className="block text-6xl font-black text-[#FFD700] mb-2">500+</span>
            <span className="text-xs uppercase tracking-[4px] font-bold text-gray-500">Shop Partners</span>
          </div>
          <div>
            <span className="block text-6xl font-black text-[#FFD700] mb-2">10k+</span>
            <span className="text-xs uppercase tracking-[4px] font-bold text-gray-500">Daily Crates</span>
          </div>
          <div>
            <span className="block text-6xl font-black text-[#FFD700] mb-2">24/7</span>
            <span className="text-xs uppercase tracking-[4px] font-bold text-gray-500">Support</span>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.03] select-none">
          WHOLESALE
        </div>
      </section>
    </div>
  );
}
