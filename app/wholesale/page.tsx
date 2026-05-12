"use client";

import { CheckCircle2, TrendingUp, Package, ShieldCheck, Zap, ArrowRight, BarChart3, Users, DollarSign, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function WholesalePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const pricingTiers = [
    {
      name: "Retail Partner",
      minOrder: "1-10 Crates",
      features: [
        "Daily Market-Minimal Pricing",
        "Free Delivery in Shanthipuram",
        "Morning Priority Dispatch",
        "Zero-Breakage Guarantee",
        "Flexible Cash/Online Payments"
      ],
      description: "Ideal for local grocery shops and neighborhood vendors requiring daily fresh replenishment."
    },
    {
      name: "Wholesale Hub",
      minOrder: "11-50 Crates",
      features: [
        "Fixed-Index Preferred Rates",
        "Priority Route Management",
        "Weekly Audit Reports",
        "Direct Farm-Batch Coding",
        "Dedicated Logistics Liaison",
        "Credit Facility (Terms Apply)"
      ],
      description: "Designed for larger supermarket chains and regional sub-distributors in the mandal."
    },
    {
      name: "Enterprise Fleet",
      minOrder: "50+ Crates",
      features: [
        "Absolute Minimal Global Rate",
        "Exclusive Dispatch Windows",
        "API Price Sync Integration",
        "Custom Packaging Options",
        "Volume Incentive Rebates",
        "Platinum Security Handling"
      ],
      description: "For high-volume institutional buyers, hospitality groups, and large-scale manufacturing units."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section - SEO Focused */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-yellow font-black text-[10px] tracking-[4px] uppercase mb-8 border border-brand-gold/10">
              Bulk Supply Infrastructure
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-black leading-none mb-10 tracking-tighter">
              The Region's Absolute <br />
              <span className="text-gold-gradient">Minimal Rates.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl font-medium">
              We leverage direct farm-to-shop procurement to eliminate middlemen, delivering significant margin advantages to our wholesale partners.
            </p>
          </motion.div>
        </div>
        
        {/* Background Visual */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <DollarSign className="w-full h-full text-brand-gold rotate-12" />
        </div>
      </section>

      {/* Pricing Engine Explanation - Detailed Matter */}
      <section className="py-24 bg-[#FAFAFA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <div className="w-16 h-16 bg-white rounded-[24px] shadow-xl flex items-center justify-center mb-10 border border-gray-50">
                <BarChart3 className="text-brand-yellow" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight tracking-tighter">
                Dynamic Market <br /> Pricing Transparency.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  In the wholesale sector, pricing is a moving target. At HKGN Egg Mart, we've institutionalized transparency. Every morning, our analysts aggregate the current farm-gate prices across the region to establish the "Minimal Market Index."
                </p>
                <p>
                  This rate is then updated across our system, ensuring that when you place a bulk order, you are always receiving the most competitive price possible. We don't believe in hidden markups; our profit comes from volume and logistics efficiency, not high margins.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-8 items-center">
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="text-[10px] font-black uppercase tracking-[3px] text-gray-400 mb-2">Sync Frequency</div>
                  <div className="text-2xl font-black text-black">Every 24 Hours</div>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="text-[10px] font-black uppercase tracking-[3px] text-gray-400 mb-2">Target Rate</div>
                  <div className="text-2xl font-black text-brand-yellow">Minimal Index</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative">
               <div className="relative aspect-square md:aspect-[4/3] rounded-[48px] overflow-hidden shadow-3xl">
                <Image 
                  src="/images/shanthipuram_fresh_egg_quality_1778596883231.png" 
                  alt="Quality Bulk Supply in Shanthipuram" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Floating Shield */}
              <div className="absolute -top-10 -right-10 glass-card p-8 rounded-3xl bg-black text-white border-white/10 shadow-2xl">
                 <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="text-brand-gold" size={20} />
                    <span className="text-xs font-black uppercase tracking-widest">Certified</span>
                 </div>
                 <div className="text-2xl font-bold">Grade A Quality</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tiered Partnership - Detailed Options */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 {...fadeIn} className="text-5xl font-black text-black mb-8 tracking-tighter">Wholesale Tiers.</motion.h2>
            <motion.p {...fadeIn} className="text-gray-500 text-xl font-medium leading-relaxed">
              We've structured our supply tiers to match the unique needs of every business size in Shanthipuram.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className={`relative group p-12 rounded-[56px] border-2 transition-all duration-700 h-full flex flex-col ${
                  i === 2 ? 'bg-black text-white border-brand-gold shadow-3xl shadow-brand-gold/10 scale-105' : 'bg-white border-gray-100 hover:border-brand-gold shadow-xl hover:shadow-2xl'
                }`}
              >
                {i === 2 && (
                  <div className="absolute top-10 right-10 px-4 py-1.5 bg-brand-gold text-black rounded-full text-[10px] font-black uppercase tracking-widest">
                    Best Value
                  </div>
                )}
                
                <div className="mb-10">
                  <h3 className={`text-3xl font-black mb-2 ${i === 2 ? 'text-brand-gold' : 'text-black'}`}>{tier.name}</h3>
                  <div className={`text-sm font-bold uppercase tracking-[4px] ${i === 2 ? 'text-gray-400' : 'text-brand-yellow'}`}>
                    Min Order: {tier.minOrder}
                  </div>
                </div>

                <p className={`mb-10 text-lg font-medium leading-relaxed ${i === 2 ? 'text-gray-400' : 'text-gray-500'}`}>
                  {tier.description}
                </p>

                <ul className="space-y-6 mb-12 flex-grow">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex gap-4 items-start group/item">
                      <CheckCircle2 size={20} className={i === 2 ? "text-brand-gold shrink-0 mt-1" : "text-brand-yellow shrink-0 mt-1"} />
                      <span className={`text-sm font-bold leading-relaxed ${i === 2 ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className={`w-full btn-premium justify-center py-5 text-sm uppercase tracking-widest ${
                    i === 2 ? 'bg-brand-gold text-black hover:bg-white' : 'bg-black text-white hover:bg-brand-gold hover:text-black'
                  }`}
                >
                  Partner Today <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Logic - Matter Expansion */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-4xl md:text-5xl font-black text-black mb-10 leading-tight tracking-tighter">How to Initiate <br /> Wholesale Supply.</h2>
               <div className="space-y-12">
                  {[
                    { title: "Volume Consultation", desc: "Speak with our Regional Supply Manager to define your shop's weekly volume requirements." },
                    { title: "Tier Optimization", desc: "We help you select the most profitable tier based on your storage capacity and customer traffic." },
                    { title: "Route Calibration", desc: "Our logistics team identifies your shop's location to assign a priority early-morning dispatch window." },
                    { title: "First Dispatch", desc: "Receive your first batch of farm-fresh eggs within 24 hours of successful onboarding." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shrink-0 text-2xl font-black text-brand-yellow group-hover:bg-brand-gold group-hover:text-black transition-all shadow-sm">
                        0{i+1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-black mb-2">{step.title}</h4>
                        <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative aspect-square md:aspect-[4/3] rounded-[48px] overflow-hidden shadow-3xl">
                  <Image 
                    src="/images/shanthipuram_egg_wholesale_hub_1778596772209.png" 
                    alt="Onboarding at HKGN Shanthipuram Hub" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-12 text-center">
                    <div>
                      <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse shadow-2xl">
                         <Wallet className="text-black" size={36} />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">Start Growing.</h3>
                      <p className="text-white/80 font-bold">Maximize your shop's profitability with HKGN supply infrastructure.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            {...fadeIn}
            className="bg-black text-white rounded-[56px] p-12 md:p-24 text-center relative overflow-hidden shadow-3xl"
          >
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.4)_0,transparent_70%)]"></div>
             <div className="relative z-10">
               <h2 className="text-5xl md:text-6xl font-black mb-8 leading-none tracking-tighter">Lock In the <br /> <span className="text-brand-gold">Minimal Rate Today.</span></h2>
               <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
                 Don't let market fluctuations impact your business. Partner with HKGN and stabilize your shop's supply chain.
               </p>
               <Link href="/contact" className="btn-premium bg-brand-gold text-black px-16 shadow-2xl shadow-brand-gold/10 group">
                 Begin Partnership <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
               </Link>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
