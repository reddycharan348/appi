import { Metadata } from "next";
import { MapPin, Phone, Mail, MessageSquare, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact HKGN Egg Mart | Wholesale Inquiry Shanthipuram",
  description: "Join over 500+ successful shops. Contact HKGN Egg Mart for the best wholesale egg rates in Shanthipuram. Message from the founder and business inquiry form.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-black mb-6 font-outfit">Let's Grow <span className="text-[#ccac00]">Together</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Join over 500+ successful shops that rely on us for their daily supply. Get a customized quote today.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Info Column */}
            <div className="space-y-12">
              {/* Founder's Message */}
              <div className="bg-black text-white p-10 rounded-[40px] relative overflow-hidden">
                <Quote className="absolute top-6 right-6 text-[#FFD700]/20" size={80} />
                <h3 className="text-xl font-bold mb-6 text-[#FFD700]">Message from the Founder</h3>
                <p className="text-2xl font-light italic leading-relaxed mb-8 relative z-10">
                  "Our commitment is to your growth. If your shop grows, we grow. That is why we keep our rates minimal and our quality maximum."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-[#FFD700] rounded-full" />
                  <span className="font-bold tracking-widest text-xs uppercase">HKGN Leadership Team</span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <MapPin className="text-[#ccac00] mb-4" size={32} />
                  <h4 className="font-bold mb-2">Warehouse Address</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Main Road, Shanthipuram, Arimuthanapalle, Andhra Pradesh 517423
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <Phone className="text-[#ccac00] mb-4" size={32} />
                  <h4 className="font-bold mb-2">Primary Contact</h4>
                  <p className="text-gray-500 text-sm">081797 15066</p>
                </div>
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 md:col-span-2">
                  <Mail className="text-[#ccac00] mb-4" size={32} />
                  <h4 className="font-bold mb-2">Email Inquiry</h4>
                  <p className="text-gray-500 text-sm">support@hkgneggmart.com</p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-white p-10 md:p-14 rounded-[50px] shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-[#FFD700] rounded-xl">
                  <MessageSquare size={24} className="text-black" />
                </div>
                <h2 className="text-3xl font-bold">Partnership Inquiry</h2>
              </div>

              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Shop Name / Business Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your business name"
                    className="w-full p-5 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-[#FFD700] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">WhatsApp Number</label>
                  <input 
                    type="tel" 
                    placeholder="081797 15066"
                    className="w-full p-5 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-[#FFD700] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Target Weekly Volume (Crates)</label>
                  <select className="w-full p-5 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-[#FFD700] transition-all appearance-none">
                    <option>10 - 50 Crates</option>
                    <option>50 - 200 Crates</option>
                    <option>200+ Crates</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">How can we support your business?</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full p-5 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-[#FFD700] transition-all"
                  />
                </div>

                <button className="w-full bg-black text-[#FFD700] py-6 rounded-2xl font-black text-lg hover:bg-[#ccac00] hover:text-black transition-all shadow-xl">
                  Submit Wholesale Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
