import { Metadata } from "next";
import { HelpCircle, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional FAQs | HKGN Egg Mart Wholesale Partnership",
  description: "Common questions about wholesale egg supply in Shanthipuram. Learn about our minimal rates, delivery schedules, and quality assurance protocols.",
};

const faqs = [
  {
    category: "Wholesale Partnership",
    questions: [
      {
        q: "What is the minimum order quantity for wholesale pricing?",
        a: "We cater to businesses of all sizes. Our specialized wholesale rates begin at a minimum of 10 crates per week. For platinum partners (200+ crates), we offer customized pricing structures."
      },
      {
        q: "How do I become a registered shop partner?",
        a: "Simply fill out our wholesale inquiry form or contact our reception at 081797 15066. Our field executive will visit your shop within 24 hours to finalize the logistics."
      }
    ]
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        q: "How are the 'minimal rates' calculated?",
        a: "We eliminate middlemen and source directly from high-capacity farms. Our rates are updated daily at 9:00 AM based on the regional market index, ensuring you always get the best margin."
      },
      {
        q: "Do you offer credit facilities for long-term partners?",
        a: "Yes, after a successful 3-month partnership period, we offer flexible credit cycles tailored to your shop's cash flow requirements."
      }
    ]
  },
  {
    category: "Logistics & Quality",
    questions: [
      {
        q: "What is your delivery schedule for Shanthipuram?",
        a: "Our distribution fleet operates on a 'Morning-First' priority. All wholesale orders are delivered between 5:00 AM and 9:00 AM to ensure your stock is ready before peak customer hours."
      },
      {
        q: "What is the policy for breakage during transport?",
        a: "We maintain a Zero-Loss policy. Any damage reported during delivery is recorded and replaced in the next cycle, ensuring your inventory remains 100% profitable."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <HelpCircle className="mx-auto mb-6 text-[#FFD700]" size={48} />
          <h1 className="text-5xl font-black mb-4 font-outfit">Partnership <span className="text-[#FFD700]">Support Hub</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about scaling your retail business with HKGN Egg Mart wholesale solutions.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {faqs.map((cat, i) => (
              <div key={i}>
                <h2 className="text-xs font-bold uppercase tracking-[4px] text-[#ccac00] mb-8">{cat.category}</h2>
                <div className="space-y-6">
                  {cat.questions.map((item, j) => (
                    <div key={j} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-[#FFD700] transition-all group">
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="text-xl font-bold mb-4">{item.q}</h4>
                        <ChevronRight className="text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
