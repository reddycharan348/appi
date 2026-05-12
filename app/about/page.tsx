"use client";

import { ShieldCheck, Award, Users, History, ArrowRight, Star, Target, MapPin, TrendingDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen overflow-hidden">
      {/* SEO Optimized Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[1px] w-12 bg-brand-gold"></span>
              <span className="text-brand-yellow font-bold uppercase tracking-[4px] text-xs">SHANTHIPURAM'S FINEST SINCE 1994</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-black leading-[0.9] mb-8 tracking-tighter">
              A Legacy of <br />
              <span className="text-gold-gradient">Integrity & Growth.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-10 font-medium">
              For over three decades, HKGN Egg Mart has been the primary wholesale engine for retail shop owners across Shanthipuram and surrounding regions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-premium bg-black text-white hover:bg-gray-900 shadow-xl">
                Become a Partner <ArrowRight size={20} />
              </Link>
              <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white border border-gray-100 shadow-sm">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-brand-gold border-2 border-white overflow-hidden flex items-center justify-center">
                      <Users size={12} className="text-black" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-700">Supplying 500+ Shops Daily</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-brand-gold rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Narrative Section - Detailed Matter */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              {...fadeIn}
              className="lg:col-span-7 relative"
            >
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-3xl group">
                <Image 
                  src="/images/shanthipuram_egg_wholesale_hub_1778596772209.png" 
                  alt="HKGN Heritage and Growth in Shanthipuram" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="text-brand-gold fill-brand-gold" size={16} />
                    <span className="text-sm font-bold tracking-widest uppercase">The Region's Choice</span>
                  </div>
                  <h3 className="text-3xl font-bold">Uncompromising Freshness</h3>
                </div>
              </div>
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl hidden md:block shadow-2xl border-brand-gold/10"
              >
                <div className="text-4xl font-black text-black">99.9%</div>
                <div className="text-xs text-gray-500 font-black uppercase tracking-widest">Client Retention Rate</div>
              </motion.div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-yellow font-black text-[10px] tracking-[4px] uppercase mb-6 rounded-full">The HKGN Story</div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
                Empowering the <br />
                <span className="text-brand-yellow">Retail Economy.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Established in 1994, HKGN Egg Mart began as a small regional hub with a single goal: to provide local retail shops with farm-fresh produce at prices that actually allow them to grow. 
                </p>
                <p>
                  Over the decades, our commitment to "Minimal Market Rates" has transformed our operations into a massive distribution network. We source directly from high-capacity poultry farms, bypassing middlemen and passing those critical margin savings directly to our shop partners.
                </p>
                <p>
                  We understand that for a small business, even a few paise difference per unit can determine the success of a month. That is why we audit our market rates every morning at 9:00 AM.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-black text-black mb-1">1994</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-[4px] font-black">Pioneer Established</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-black mb-1">50M+</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-[4px] font-black">Volume Handled</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Expanded Detail */}
      <section className="py-32 bg-black text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24">
             <motion.div {...fadeIn}>
                <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-gold/20">
                  <Target className="text-black" size={32} />
                </div>
                <h3 className="text-4xl font-black mb-6">Our Mission</h3>
                <p className="text-xl text-gray-400 leading-relaxed font-medium">
                  To eliminate supply chain inefficiencies and provide every retail shop in the Shanthipuram mandal with the highest quality egg supply at the absolute lowest daily market price.
                </p>
             </motion.div>
             <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                  <ShieldCheck className="text-brand-gold" size={32} />
                </div>
                <h3 className="text-4xl font-black mb-6">Our Vision</h3>
                <p className="text-xl text-gray-400 leading-relaxed font-medium">
                  To be the digital-first backbone of regional wholesale distribution, utilizing data and optimized logistics to keep local shop owners ahead of market fluctuations.
                </p>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: History, title: "32+ Years", desc: "Unmatched expertise in managing regional market price fluctuations." },
              { icon: MapPin, title: "Local Presence", desc: "Deeply rooted in Shanthipuram, serving Arimuthanapalle and beyond." },
              { icon: TrendingDown, title: "Lowest Rates", desc: "Guaranteed minimal rates achieved through direct farm-procurement." },
              { icon: Award, title: "Premium QC", desc: "Every crate undergoes a 3-point quality check before dispatch." }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group glass-dark p-8 rounded-[32px] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 border-white/5"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-gold transition-colors duration-500">
                  <item.icon className="text-brand-gold group-hover:text-black transition-colors" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Subtle Background Glow */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-gold/5 to-transparent pointer-events-none"></div>
      </section>

      {/* Call to Action - Professional Closure */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            {...fadeIn}
            className="bg-brand-gold rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-3xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black text-black mb-8 leading-none tracking-tighter">Ready to maximize <br /> your shop's profit?</h2>
              <p className="text-black/70 text-xl max-w-2xl mx-auto mb-12 font-bold">
                Join the massive network of successful retail partners who rely on HKGN Egg Mart for their daily business success.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact" className="btn-premium bg-black text-white hover:bg-gray-900 px-12 shadow-2xl">
                  Get Today's Rates
                </Link>
                <Link href="/wholesale" className="btn-premium bg-white/20 backdrop-blur-md text-black border border-black/10 hover:bg-white/40 font-bold">
                  View Tiers
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
