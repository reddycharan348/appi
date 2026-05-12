"use client";

import { useState } from "react";
import { Plus, Minus, Search, MessageCircle, Phone, ArrowRight, HelpCircle, ShieldCheck, Truck, Tag, DollarSign, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Pricing & Market Rates",
      question: "How do you determine the daily minimal market rate?",
      answer: "We aggregate farm-gate prices every morning at 9:00 AM from premium poultry farms across the region. By bypassing intermediaries and sourcing in high volumes, we are able to establish a 'Minimal Market Index' that is significantly lower than standard retail-wholesale rates. This rate is synced across our platform daily.",
      icon: DollarSign
    },
    {
      category: "Delivery & Logistics",
      question: "What are your standard delivery windows for Shanthipuram?",
      answer: "Our logistics fleet begins dispatches at 4:00 AM. We offer priority windows between 5:00 AM and 8:00 AM for our Platinum and Silver partners to ensure shop floors are stocked before opening. For other partners, we guarantee same-day delivery if the order is confirmed before the morning dispatch cycle.",
      icon: Clock
    },
    {
      category: "Quality Assurance",
      question: "What is your policy on transit breakage?",
      answer: "We take full responsibility for the physical integrity of our cargo. Our 'Zero-Breakage' protocol involves industrial shock-absorbent crating and specialized handling. In the rare event of transit damage, we provide 100% immediate replacement or credit on your next order cycle upon verification by our delivery officer.",
      icon: ShieldCheck
    },
    {
      category: "Partnership & Wholesale",
      question: "How do I qualify for the 'Enterprise Fleet' tier?",
      answer: "The Enterprise Fleet tier is designed for institutional buyers and high-volume distributors ordering 50+ crates per dispatch. Qualification involves a volume audit and a dedicated regional logistics assessment to ensure we can meet the high-capacity demand consistently at the absolute minimal global rate.",
      icon: Truck
    },
    {
      category: "Payment & Terms",
      question: "What payment methods do you accept for bulk orders?",
      answer: "We accept all major digital payments (UPI, Bank Transfer) and cash-on-delivery. For long-term 'Wholesale Hub' and 'Enterprise' partners, we offer flexible credit facilities and monthly billing cycles, subject to a successful business partnership audit and verification.",
      icon: Tag
    },
    {
      category: "Support",
      question: "Can I place an emergency order outside of dispatch hours?",
      answer: "Yes. While our primary dispatches happen in the early morning, our Shanthipuram hub supports 'Direct Pickup' for existing partners. For urgent resupply, you can contact your dedicated Fleet Manager directly via our WhatsApp integration or the partner hotline.",
      icon: MessageCircle
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* SEO Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-yellow font-black text-[10px] tracking-[4px] uppercase mb-6 rounded-full border border-brand-gold/10"
          >
            Partner Support Hub
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter"
          >
            Frequently Asked <br /> <span className="text-brand-yellow">Questions.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Find detailed information about our wholesale operations, market pricing models, and regional logistics network in Shanthipuram.
          </motion.p>

          {/* Search Bar - High Fidelity */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-2xl mx-auto group"
          >
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="text-gray-400 group-focus-within:text-brand-gold transition-colors" size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search pricing, delivery, or quality terms..."
              className="w-full pl-16 pr-6 py-6 bg-white border border-gray-100 rounded-[32px] outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all shadow-xl shadow-black/5 font-medium placeholder:text-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>

        {/* FAQ Accordion - Expanded Details */}
        <div className="space-y-6 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={faq.question}
                className={`glass-card rounded-[32px] overflow-hidden border transition-all duration-500 ${
                  openIndex === index ? 'bg-white border-brand-gold shadow-2xl' : 'bg-white/50 border-gray-100 hover:border-brand-gold/50'
                }`}
              >
                <button 
                  className="w-full px-10 py-8 flex items-center justify-between gap-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                      openIndex === index ? 'bg-black text-brand-gold' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <faq.icon size={24} />
                    </div>
                    <div>
                       <span className="text-[10px] font-black uppercase tracking-[3px] text-brand-yellow mb-1 block">{faq.category}</span>
                       <h3 className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-black' : 'text-gray-700'}`}>
                         {faq.question}
                       </h3>
                    </div>
                  </div>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index ? 'bg-black text-white rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                    >
                      <div className="px-10 pb-10 ml-18 border-t border-gray-50 pt-8">
                        <p className="text-gray-500 text-lg leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredFaqs.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-[40px] border border-dashed border-gray-200"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="text-gray-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-400">No matching questions found.</h3>
              <p className="text-gray-500 mt-2 font-medium">Try searching for "pricing", "delivery" or "breakage".</p>
            </motion.div>
          )}
        </div>

        {/* Final Professional Support Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card bg-black rounded-[56px] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-3xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">Can't find what <br /> you're looking for?</h2>
            <p className="text-gray-400 text-lg font-medium mb-10 max-w-md mx-auto">
              Our regional partnership managers are available 24/7 for detailed wholesale inquiries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-premium bg-brand-gold text-black px-10 group shadow-2xl shadow-brand-gold/10">
                Contact Management <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:08179715066" className="btn-premium bg-white/5 border border-white/10 text-white px-10 hover:bg-white/10 font-bold">
                <Phone size={18} className="text-brand-gold" /> Call Hub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
