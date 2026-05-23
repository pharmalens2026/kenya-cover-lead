import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "How do I choose the right insurance cover?",
      a: "Choosing the right cover depends on your specific needs, assets, and budget. Our agents provide personalized advice to help you understand the risks you face and select the most appropriate coverage."
    },
    {
      q: "What documents are needed for motor insurance?",
      a: "For motor insurance, you typically need a copy of your Logbook, KRA PIN certificate, and your National ID or Passport."
    },
    {
      q: "How long does it take to settle a claim?",
      a: "Claim settlement timelines vary by insurer and the complexity of the claim. Generally, straightforward motor or medical claims are settled within 14-30 days of submitting all required documentation."
    },
    {
      q: "Can I pay my premiums in installments?",
      a: "Yes, we offer Insurance Premium Financing (IPF) through our banking partners, allowing you to pay your annual premiums in manageable monthly installments."
    },
    {
      q: "What is 'Comprehensive' motor insurance?",
      a: "Comprehensive insurance covers damage to your vehicle (from accidents, fire, or theft) as well as your legal liability to third parties for bodily injury, death, or property damage."
    },
    {
      q: "How do I renew my policy?",
      a: "We notify you 30 days before your policy expires. You can renew by contacting your assigned agent or visiting our office. We also facilitate online renewals via M-Pesa."
    }
  ];

  return (
    <section className="bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F5A623] font-bold uppercase tracking-widest text-sm">Got Questions?</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#003366] mt-4 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about insurance policies, claims, and premiums in Kenya.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-100 py-2">
                <AccordionTrigger className="text-left font-bold text-[#003366] text-lg hover:text-[#F5A623] hover:no-underline transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">Still have questions? We're here to help.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#003366] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#003366]/90 transition-colors">
              Chat with an Agent
            </button>
            <button className="bg-[#F5A623] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#F5A623]/90 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}