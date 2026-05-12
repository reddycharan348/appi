"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Package, Truck, Tag, TrendingDown, Star, Zap, ShieldCheck, ChevronRight, BarChart3, Users, Building2, Store, MapPin, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    fetch("/data/prices.json")
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setCurrentPrice(data[data.length - 1].price);
        }
      })
      .catch(() => setCurrentPrice(4.85));

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-white">
      {/* Dynamic Hero Section - Premium Brand Poster Focus */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Layered Gradients */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hkgn_premium_poster_hero_1778598990168.png" 
            alt="HKGN Egg Mart Premium Brand Poster" 
            fill 
            className="object-cover scale-105" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 bg-brand-gold/20 backdrop-blur-md border border-brand-gold/30 px-6 py-2 rounded-full text-xs font-black text-brand-gold mb-10 tracking-[4px] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              #1 Egg Wholesale in Shanthipuram
            </div>
            
            <h1 className="font-outfit text-7xl md:text-[130px] font-black text-white leading-[0.82] mb-10 tracking-tighter">
              Best Egg <br />
              <span className="text-gold-gradient">Shanthipuram.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-medium max-w-2xl">
              Powering every shop in Shanthipuram and Arimuthanapalle. Get the absolute minimal market rates and direct door-step delivery for your retail business.
            </p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <Link href="/contact" className="btn-premium bg-brand-gold text-black hover:bg-white px-12 py-6 text-xl shadow-2xl shadow-brand-gold/30 group">
                Check Today's Price <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
              
              <div className="glass-card bg-white/5 border-white/10 p-6 rounded-[32px] flex items-center gap-6 shadow-2xl">
                <div>
                  <div className="text-[10px] font-black text-brand-gold uppercase tracking-[4px] mb-2">Market Index</div>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black text-white leading-none">₹{currentPrice.toFixed(2)}</span>
                    <span className="text-gray-400 text-sm font-bold mb-1 uppercase tracking-widest">/ Egg</span>
                  </div>
                </div>
                <div className="h-12 w-[1px] bg-white/10"></div>
                <div className="flex flex-col items-center">
                   <TrendingDown className="text-green-500" size={32} />
                   <span className="text-[10px] font-black text-green-500 uppercase mt-1">Shanthipuram Low</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-black uppercase tracking-[4px]">Shop Delivery Routes</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Shop Delivery Section - New Addition for SEO and User Request */}
      <section className="py-32 relative bg-white overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-yellow font-black text-[10px] tracking-[4px] uppercase mb-6 rounded-full">Regional Logistics</div>
              <h2 className="text-5xl md:text-7xl font-black text-black mb-10 leading-none tracking-tighter">
                Dedicated <br /> <span className="text-brand-yellow">Shop Routes.</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-500 font-medium leading-relaxed mb-12">
                <p>
                  We don't just supply; we deliver directly to your shop floor. Our specialized Shanthipuram route trucks ensure that every grocery store, hotel, and vendor receives fresh stock before their first customer arrives.
                </p>
                <p>
                  Covering all mandals including Arimuthanapalle, we provide an unbroken supply chain so you never run out of stock.
                </p>
              </div>
              <div className="flex gap-10 items-center">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-black">4:00 AM</span>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Daily Dispatch</span>
                </div>
                <div className="w-[1px] h-12 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-black">100%</span>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Shop Coverage</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative group">
              <div className="relative aspect-square md:aspect-[5/6] rounded-[64px] overflow-hidden shadow-3xl border border-gray-100">
                <Image 
                  src="/images/shanthipuram_shop_delivery_route_1778596800260.png" 
                  alt="HKGN Shop Delivery Route Shanthipuram" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
              {/* Floating Route Card */}
              <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-[48px] bg-black text-white border-none shadow-3xl">
                <div className="flex items-center gap-4">
                   <div className="w-14 h-14 bg-brand-gold rounded-2xl flex items-center justify-center">
                      <Truck className="text-black" size={28} />
                   </div>
                   <div>
                     <div className="text-xl font-black text-white">Direct-to-Shop</div>
                     <div className="text-[10px] font-black text-brand-gold uppercase tracking-widest mt-1">Shanthipuram & Arimuthanapalle</div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantage Grid - SEO Focus */}
      <section className="py-32 relative bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2 {...fadeIn} className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter">Why Shanthipuram <br /> Chooses HKGN.</motion.h2>
            <motion.p {...fadeIn} className="text-gray-500 text-xl font-medium leading-relaxed">
              Serving the local economy with 30+ years of dedicated wholesale experience and absolute price transparency.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              { 
                icon: Tag, 
                title: "Best Egg Price Today", 
                desc: "We provide the absolute minimal market rate for Shanthipuram. Our prices are updated every 24 hours to keep your shop ahead of the competition.", 
                color: "bg-brand-gold",
                metric: "Shanthipuram Lowest" 
              },
              { 
                icon: MapPin, 
                title: "Local Hub Presence", 
                desc: "Located in the heart of Shanthipuram, our distribution center is always reachable for emergency supplies and direct wholesale orders.", 
                color: "bg-black",
                metric: "Central Junction Hub"
              },
              { 
                icon: ShieldCheck, 
                title: "Quality & Freshness", 
                desc: "Direct from farm to shop. No storage delays. Every egg delivered to Shanthipuram shops is farm-fresh and quality-verified.", 
                color: "bg-brand-yellow",
                metric: "100% Quality Assurance"
              }
            ].map((adv, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group p-12 rounded-[56px] bg-white border border-gray-100 hover:shadow-3xl hover:border-brand-gold transition-all duration-700 cursor-pointer relative overflow-hidden"
              >
                <div className={`w-20 h-20 ${adv.color} rounded-[28px] flex items-center justify-center mb-10 shadow-xl transition-transform duration-500 group-hover:rotate-6`}>
                  <adv.icon className={adv.color === "bg-black" ? "text-brand-gold" : "text-black"} size={36} />
                </div>
                <h3 className="text-3xl font-black text-black mb-6">{adv.title}</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-medium mb-10">{adv.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                   <span className="text-xs font-black text-brand-yellow uppercase tracking-widest">{adv.metric}</span>
                   <div className="h-1.5 w-16 bg-gray-100 rounded-full group-hover:w-24 group-hover:bg-brand-gold transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive Call to Action - Shanthipuram SEO Focus */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeIn}
            className="bg-black text-white rounded-[84px] p-16 md:p-32 text-center relative overflow-hidden shadow-3xl shadow-brand-gold/10"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-6xl md:text-[100px] font-black mb-12 leading-[0.85] tracking-tighter">
                Scale Your <br /> <span className="text-brand-gold">Shanthipuram Shop.</span>
              </h2>
              <p className="text-xl md:text-3xl text-gray-400 font-bold max-w-3xl mx-auto mb-16 leading-relaxed">
                Join 500+ shops in Shanthipuram and Arimuthanapalle that trust HKGN for daily wholesale supply and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <Link href="/contact" className="btn-premium bg-brand-gold text-black px-16 py-7 text-2xl shadow-3xl hover:scale-105 active:scale-95 transition-all">
                  Partner with Us
                </Link>
                <Link href="/wholesale" className="btn-premium bg-white/10 backdrop-blur-md text-white border border-white/20 px-16 py-7 text-2xl font-black hover:bg-white/20">
                  View Wholesale Rates
                </Link>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[140px]"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
