"use client";

import { Truck, PackageCheck, Zap, Shield, MapPin, Clock, ArrowRight, CheckCircle2, ShieldAlert, BarChart3, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* SEO Optimized Header Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-yellow font-bold text-xs uppercase tracking-widest mb-8 border border-brand-gold/20">
              <Zap size={14} className="fill-brand-gold" /> Premier Wholesale Logistics
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-black leading-none mb-8 tracking-tighter">
              The Engine of <br />
              <span className="text-gold-gradient">Fresh Distribution.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium">
              HKGN Egg Mart provides a comprehensive logistics ecosystem designed for speed, safety, and business reliability across Shanthipuram and surrounding mandals.
            </p>
          </motion.div>
        </div>
        
        {/* Background Animation */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-brand-gold rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-gold rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
        </div>
      </section>

      {/* Service Block 1: Fleet - Detailed Matter */}
      <section className="py-24 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn} className="relative group">
              <div className="relative aspect-square md:aspect-[4/3] rounded-[48px] overflow-hidden shadow-3xl">
                <Image 
                  src="/images/shanthipuram_shop_delivery_route_1778596800260.png" 
                  alt="HKGN Distribution Fleet in Shanthipuram" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-transparent"></div>
              </div>
              {/* Floating Route Card */}
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-3xl hidden md:flex items-center gap-4 animate-float">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
                  <MapPin className="text-brand-gold" size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-black">Route Optimized</div>
                  <div className="text-xs text-gray-500">Real-time Shanthipuram GPS</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="w-16 h-16 bg-brand-gold/20 rounded-[24px] flex items-center justify-center mb-10 shadow-lg shadow-brand-gold/10">
                <Truck className="text-brand-yellow" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight">
                High-Performance <br /> Distribution Fleet.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                <p>
                  Our distribution infrastructure is built specifically for the needs of local retail shops and restaurants. We operate a fleet of route-optimized vehicles that start their dispatches as early as 4:00 AM.
                </p>
                <p>
                  By utilizing advanced logistics mapping, we ensure that every crate of eggs reaches its destination within a 2-hour window from dispatch. This minimizes temperature fluctuations and guarantees that you are selling the freshest produce possible.
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "Early Morning Dispatches (4 AM)",
                  "Route-Optimized Logistics",
                  "GPS-Tracked Delivery Fleet",
                  "Temperature Controlled Transit",
                  "Priority Shop-Floor Unloading",
                  "Emergency Mid-Day Resupply"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                      <CheckCircle2 className="text-brand-yellow group-hover:text-black" size={14} />
                    </div>
                    <span className="font-bold text-gray-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-premium bg-black text-white px-10 group">
                Check Delivery Schedule <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Block 2: Quality - Detailed Matter */}
      <section className="py-24 bg-[#0A0A0A] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-white/5 rounded-[24px] flex items-center justify-center mb-10 border border-white/10">
                <PackageCheck className="text-brand-gold" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Zero-Breakage <br /> <span className="text-brand-gold">Safety Protocol.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed mb-10 font-medium">
                <p>
                  In the wholesale egg business, breakage directly impacts your profit margins. HKGN Egg Mart has pioneered a proprietary "Zero-Loss" handling protocol that incorporates industrial shock-absorbent crates and specialized vehicle suspension.
                </p>
                <p>
                  Every delivery is accompanied by a quality-check officer who ensures that the unloading process is handled with surgical precision. This commitment to physical integrity means you sell 100% of the volume you pay for.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { icon: Shield, title: "100% Damage Replacement", desc: "Report any transit damage; we replace it immediately on the next dispatch cycle." },
                  { icon: BarChart3, title: "Impact Auditing", desc: "We track transit vibrations to optimize routes for fragile cargo safety." },
                  { icon: Globe, title: "Regional Coverage", desc: "Extending professional logistics to the most remote shops in the mandal." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-gold transition-colors duration-500">
                      <item.icon className="text-brand-gold group-hover:text-black transition-colors" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="order-1 lg:order-2 relative">
               <div className="relative aspect-square md:aspect-[4/3] rounded-[48px] overflow-hidden shadow-[0_0_80px_rgba(255,215,0,0.1)] border border-white/10">
                <Image 
                  src="/images/shanthipuram_fresh_egg_quality_1778596883231.png" 
                  alt="HKGN Quality Control Systems" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Floating Shield */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center animate-pulse-slow shadow-2xl border-4 border-black">
                <Shield size={48} className="text-black" />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Dark Grid Background */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </section>

      {/* Detailed Delivery Network Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.div {...fadeIn} className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/5 text-brand-yellow font-black text-[10px] tracking-[4px] uppercase mb-4 border border-brand-gold/10">Regional Reach</motion.div>
            <motion.h2 {...fadeIn} className="text-5xl font-black text-black mb-6">Our Distribution Mandate</motion.h2>
            <motion.p {...fadeIn} className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              We cover the entire Shanthipuram region and surrounding areas with pinpoint accuracy, ensuring every shop has access to minimal market rates.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Shanthipuram Central", coverage: "100% Home & Shop Delivery", time: "5 AM - 7 AM", detail: "Serving the main market and retail clusters with daily dispatches." },
              { title: "Arimuthanapalle Hub", coverage: "Priority Wholesale Junction", time: "6 AM - 8 AM", detail: "Strategic distribution point for high-volume wholesale partners." },
              { title: "Mandal Extensions", coverage: "Rural Enterprise Support", time: "Daily Dispatches", detail: "Extending reach to surrounding villages to support local shop growth." }
            ].map((area, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[40px] border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:border-brand-gold transition-all duration-500 group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm group-hover:bg-brand-gold transition-colors">
                    <Clock size={24} className="text-brand-yellow group-hover:text-black" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-brand-yellow px-3 py-1 bg-brand-gold/5 rounded-full">{area.time}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-brand-yellow text-xs font-black uppercase tracking-widest mb-4">{area.coverage}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">{area.detail}</p>
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-gold w-[95%]"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Lead Section - High Impact */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card bg-brand-gold rounded-[56px] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-3xl">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black text-black mb-6 leading-none tracking-tighter">Ready for a <br /> bulk dispatch?</h2>
              <p className="text-black/60 text-xl font-bold max-w-md">Our regional fleet is on standby to serve your shop with the lowest daily market rates.</p>
            </div>
            <div className="flex flex-col gap-4 relative z-10 w-full md:w-auto">
              <Link href="/contact" className="btn-premium bg-black text-white px-16 shadow-2xl justify-center">
                Contact Dispatch Manager
              </Link>
              <div className="flex items-center justify-center gap-3 text-black/40">
                <ShieldAlert size={14} />
                <span className="text-[10px] font-black uppercase tracking-[3px]">Next Dispatch: Tomorrow 4 AM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
