"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ShieldCheck, ChevronRight, CheckCircle2, User, Building, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for lead generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Column: Brand & Detail Expansion */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-brand-yellow font-black text-[10px] tracking-[4px] uppercase mb-8">
                <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span> Regional Partnership Hub
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-black leading-[0.85] mb-10 tracking-tighter">
                Partner With the <br />
                <span className="text-gold-gradient">Market Leader.</span>
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
                Initiate your wholesale journey with HKGN Egg Mart. Our regional partnership managers are ready to optimize your shop's supply chain and profit margins.
              </p>

              <div className="space-y-10">
                {[
                  { 
                    icon: Phone, 
                    title: "Regional Hotline", 
                    value: "081797 15066", 
                    desc: "Available 4:00 AM - 10:00 PM daily for wholesale dispatches." 
                  },
                  { 
                    icon: MapPin, 
                    title: "Shanthipuram Hub", 
                    value: "Main Road Junction, Arimuthanapalle", 
                    desc: "Central distribution point for the entire Chittoor mandal." 
                  },
                  { 
                    icon: Clock, 
                    title: "Operational Hours", 
                    value: "24/7 Logistics Support", 
                    desc: "Continuous monitoring of regional farm rates and fleet status." 
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center shrink-0 border border-gray-50 group-hover:bg-black group-hover:text-brand-gold transition-all duration-500">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-[3px] text-brand-yellow mb-2">{item.title}</h4>
                      <div className="text-2xl font-black text-black mb-1">{item.value}</div>
                      <p className="text-gray-400 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-[40px] bg-black text-white relative overflow-hidden shadow-2xl">
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                       <ShieldCheck className="text-brand-gold" size={24} />
                       <span className="text-xs font-black uppercase tracking-[3px]">Secure Business Inquiry</span>
                    </div>
                    <p className="text-gray-400 font-medium mb-8">
                       Your business details are encrypted and handled with the highest level of regional priority.
                    </p>
                    <div className="flex gap-4">
                       <div className="w-1.5 h-12 bg-brand-gold rounded-full"></div>
                       <div>
                          <div className="text-2xl font-black text-white">Guaranteed Response</div>
                          <div className="text-xs font-black text-gray-500 uppercase tracking-widest">Within 2 Business Hours</div>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High Fidelity Lead Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="glass-card bg-white rounded-[56px] p-10 md:p-16 border-gray-100 shadow-3xl shadow-black/5"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-[3px] text-gray-400 ml-2">Proprietor Name</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                            <User size={18} className="text-gray-300 group-focus-within:text-brand-gold transition-colors" />
                          </div>
                          <input 
                            required
                            type="text" 
                            className="w-full pl-14 pr-6 py-5 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-bold placeholder:text-gray-300"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-[3px] text-gray-400 ml-2">Business Contact</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                            <Phone size={18} className="text-gray-300 group-focus-within:text-brand-gold transition-colors" />
                          </div>
                          <input 
                            required
                            type="tel" 
                            className="w-full pl-14 pr-6 py-5 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-bold placeholder:text-gray-300"
                            placeholder="Mobile Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[3px] text-gray-400 ml-2">Shop/Enterprise Name</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                          <Building size={18} className="text-gray-300 group-focus-within:text-brand-gold transition-colors" />
                        </div>
                        <input 
                          required
                          type="text" 
                          className="w-full pl-14 pr-6 py-5 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-bold placeholder:text-gray-300"
                          placeholder="e.g. Sri Venkateswara Traders"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[3px] text-gray-400 ml-2">Partnership Interest</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["Retail Partner", "Wholesale Hub", "Enterprise Fleet"].map((opt) => (
                          <label key={opt} className="relative group cursor-pointer">
                            <input type="radio" name="interest" className="peer sr-only" defaultChecked={opt === "Retail Partner"} />
                            <div className="w-full text-center py-4 rounded-2xl bg-gray-50 border border-gray-100 peer-checked:bg-brand-gold peer-checked:text-black peer-checked:border-brand-gold transition-all font-black text-[10px] uppercase tracking-widest text-gray-400">
                              {opt}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[3px] text-gray-400 ml-2">Wholesale Inquiry Details</label>
                      <div className="relative group">
                        <div className="absolute top-6 left-6 pointer-events-none">
                          <FileText size={18} className="text-gray-300 group-focus-within:text-brand-gold transition-colors" />
                        </div>
                        <textarea 
                          required
                          rows={5}
                          className="w-full pl-14 pr-6 py-5 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-bold placeholder:text-gray-300 resize-none"
                          placeholder="Tell us about your daily/weekly volume needs..."
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className="w-full btn-premium bg-black text-white hover:bg-brand-gold hover:text-black py-6 text-lg group shadow-2xl justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>Submit Partnership Inquiry <Send className="group-hover:translate-x-2 transition-transform" size={20} /></>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl animate-float">
                      <CheckCircle2 size={48} className="text-black" />
                    </div>
                    <h2 className="text-4xl font-black text-black mb-6">Inquiry Transmitted.</h2>
                    <p className="text-gray-500 text-lg font-medium max-w-sm mx-auto mb-10 leading-relaxed">
                      Your business profile has been routed to our Regional Supply Manager. We will contact you within 2 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-brand-yellow font-black uppercase tracking-[4px] text-[10px] hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SEO Regional Map Section */}
      <section className="mt-32 pt-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-black mb-6 tracking-tighter">Visit Our Central Hub.</h2>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Strategic distribution for Shanthipuram, Chittoor District. Our hub is designed for high-capacity wholesale dispatches and partner consultations.
              </p>
            </div>
            <div className="flex gap-6">
               <div className="text-center p-8 bg-white rounded-[32px] border border-gray-50 shadow-xl">
                  <div className="text-4xl font-black text-black mb-1">517423</div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Regional PIN Code</div>
               </div>
               <div className="text-center p-8 bg-white rounded-[32px] border border-gray-50 shadow-xl">
                  <div className="text-4xl font-black text-black mb-1">24/7</div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Facility Monitoring</div>
               </div>
            </div>
          </div>
          
          {/* Mock Map Placeholder - High Fidelity */}
          <div className="w-full h-[500px] bg-gray-100 rounded-[64px] border border-gray-200 overflow-hidden relative group">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                   <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-bounce">
                      <MapPin className="text-black" size={32} />
                   </div>
                   <h3 className="text-2xl font-black text-gray-800">Shanthipuram Distribution Center</h3>
                   <p className="text-gray-400 font-bold mt-2">Arimuthanapalle Junction, Andhra Pradesh</p>
                </div>
             </div>
             {/* Map Overlay Stats */}
             <div className="absolute bottom-10 right-10 p-8 glass-card rounded-[40px] hidden md:block">
                <div className="space-y-4">
                   <div className="flex items-center gap-3">
                      <Globe size={18} className="text-brand-gold" />
                      <span className="text-xs font-black uppercase tracking-widest">Serving Chittoor Mandals</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Truck size={18} className="text-brand-gold" />
                      <span className="text-xs font-black uppercase tracking-widest">Priority Fleet Access</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
