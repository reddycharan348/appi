"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Globe, CheckCircle2, Package, Truck, ShieldCheck, HelpCircle } from "lucide-react";

export default function SitemapPage() {
  const sections = [
    {
      title: "Core Infrastructure",
      links: [
        { name: "Home", href: "/", icon: Globe, desc: "Shanthipuram's primary wholesale dashboard." },
        { name: "Our Story", href: "/about", icon: ShieldCheck, desc: "A 32-year legacy of integrity." },
        { name: "Wholesale Tiers", href: "/wholesale", icon: Package, desc: "Custom supply plans for every shop size." }
      ]
    },
    {
      title: "Services & Support",
      links: [
        { name: "Fleet Logistics", href: "/services", icon: Truck, desc: "Early morning route-optimized delivery." },
        { name: "FAQs", href: "/faq", icon: HelpCircle, desc: "Common questions about pricing and quality." },
        { name: "Contact Management", href: "/contact", icon: Phone, desc: "Initiate wholesale partnership inquiries." }
      ]
    },
    {
      title: "Administration",
      links: [
        { name: "Price Portal", href: "/admin", icon: MapPin, desc: "Authorized access for market rate updates." }
      ]
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-yellow font-black text-[10px] tracking-[4px] uppercase mb-6 rounded-full border border-brand-gold/10"
          >
            Digital Navigation
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter"
          >
            Site <span className="text-brand-yellow">Directory.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto"
          >
            A comprehensive map of our digital wholesale ecosystem in Shanthipuram. Use the links below to navigate our supply network.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {sections.map((section, idx) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-8"
            >
              <h2 className="text-xs font-black uppercase tracking-[4px] text-brand-yellow border-b border-gray-100 pb-6">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.links.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className="group block p-6 bg-white rounded-3xl border border-gray-50 hover:border-brand-gold hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-brand-gold group-hover:text-black transition-colors">
                        <link.icon size={20} className="text-gray-400 group-hover:text-black transition-colors" />
                      </div>
                      <span className="text-xl font-bold text-black">{link.name}</span>
                    </div>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed mb-4">{link.desc}</p>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit Section <ArrowRight size={12} />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global SEO Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 bg-black rounded-[56px] text-white overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.1)_0,transparent_50%)]"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                <h3 className="text-3xl font-black mb-6">Regional Search Index</h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-8">
                   Our platform is optimized for the Shanthipuram and Chittoor wholesale market. We ensure our partners can find daily market rates with zero friction.
                </p>
                <div className="flex flex-wrap gap-3">
                   {["Egg Shanthipuram", "Wholesale Andhra", "Market Rates Today", "Retail Partner Hub"].map(tag => (
                     <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-500">
                        {tag}
                     </span>
                   ))}
                </div>
             </div>
             <div className="flex justify-center md:justify-end">
                <Link href="/contact" className="btn-premium bg-brand-gold text-black px-12 group shadow-2xl shadow-brand-gold/20">
                   Contact Regional Hub <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
