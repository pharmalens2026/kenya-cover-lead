import React from "react";
import { FileText, ClipboardCheck, PhoneCall, CheckCircle, Download, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Claims() {
  const steps = [
    {
      title: "Report the Incident",
      desc: "Notify us or your insurer immediately after the incident occurs. For motor accidents, ensure you get a police abstract.",
      icon: PhoneCall,
      color: "bg-blue-600"
    },
    {
      title: "Document Collection",
      desc: "Gather all necessary documents: claim forms, photos, receipts, and police reports as required by your policy.",
      icon: FileText,
      color: "bg-indigo-600"
    },
    {
      title: "Submission & Assessment",
      desc: "Submit your documents to us. An assessor will be assigned to evaluate the loss or damage.",
      icon: ClipboardCheck,
      color: "bg-violet-600"
    },
    {
      title: "Settlement",
      desc: "Once assessment is complete and approved, your claim will be processed for payment or repairs initiated.",
      icon: CheckCircle,
      color: "bg-emerald-600"
    }
  ];

  return (
    <section className="bg-white pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="lg:w-1/2">
            <span className="text-[#F5A623] font-bold uppercase tracking-widest text-sm">Claims Assistance</span>
            <h1 className="text-4xl md:text-5xl font-black text-[#003366] mt-4 mb-6">We're Here When You Need Us Most</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Filing a claim shouldn't be a headache. Our dedicated claims team is committed to making the process as smooth and transparent as possible.
            </p>
            <div className="bg-[#F5A623]/10 p-8 rounded-3xl border border-[#F5A623]/20">
              <div className="flex gap-4 mb-4">
                <AlertCircle className="text-[#F5A623] shrink-0" size={24} />
                <h4 className="font-bold text-[#003366] text-xl">24/7 Emergency Support</h4>
              </div>
              <p className="text-[#003366]/80 mb-6">For urgent claim assistance or road rescue, call our emergency hotline immediately.</p>
              <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-[#F5A623]/20 border-none">
                Call +254 700 000 999
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-100">
            <h3 className="text-2xl font-bold text-[#003366] mb-8">Claim Process Overview</h3>
            <div className="space-y-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 -z-0" />
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 relative z-10">
                  <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white shrink-0 shadow-lg shadow-slate-200`}>
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003366] text-lg mb-2">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#003366] rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Downloadable Claim Forms</h2>
              <p className="text-blue-100/70">Access the necessary forms to start your claim process immediately.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Motor Claim Form",
                "Medical Claim Form",
                "Personal Accident Form",
                "WIBA Claim Form"
              ].map((form) => (
                <div key={form} className="bg-white/10 hover:bg-white/20 transition-colors border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center group cursor-pointer">
                  <Download className="text-[#F5A623] mb-4 group-hover:translate-y-1 transition-transform" size={24} />
                  <span className="font-bold text-sm mb-4">{form}</span>
                  <span className="text-[10px] text-blue-200/50 uppercase tracking-widest">PDF (2.4 MB)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}