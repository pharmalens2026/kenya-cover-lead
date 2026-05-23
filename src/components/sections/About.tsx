import React from "react";
import { CheckCircle2, Award, Target, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface AboutProps {
  fullPage?: boolean;
}

export function About({ fullPage }: AboutProps) {
  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty and transparency in all our dealings.",
      icon: Shield
    },
    {
      title: "Customer First",
      description: "Our clients are at the heart of everything we do. Your peace of mind is our priority.",
      icon: Heart
    },
    {
      title: "Innovation",
      description: "Leveraging technology to make insurance accessible and easy for every Kenyan.",
      icon: Target
    },
    {
      title: "Excellence",
      description: "We strive for excellence in service delivery and insurance advisory.",
      icon: Award
    }
  ];

  return (
    <section className={`py-24 overflow-hidden ${fullPage ? "pt-32" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/2b8c45c6-d02b-48b3-8a15-eac1c7f23389/hero-kenyan-family-bda71b39-1778416193852.webp" 
                alt="About InsureLink Kenya"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#F5A623] rounded-3xl -z-10 hidden md:block" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#003366]/10 rounded-full -z-10" />
            
            <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <h4 className="font-bold text-[#003366] text-xl mb-2">15+ Years of Excellence</h4>
              <p className="text-muted-foreground text-sm">Providing reliable insurance solutions across Kenya since 2008.</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-[#F5A623] font-bold uppercase tracking-widest text-sm">About InsureLink Kenya</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] mt-4 mb-6 leading-tight">
              A Trusted Partner in Your Financial Security Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              InsureLink Kenya is a leading insurance agency dedicated to simplifying insurance for individuals and businesses. We bridge the gap between complex insurance jargon and the coverage you actually need.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Licensed by the Insurance Regulatory Authority (IRA)",
                "Partnered with top 10 insurance companies in Kenya",
                "Fast and efficient claims assistance team",
                "24/7 dedicated customer support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-[#F5A623]/10 p-1 rounded-full">
                    <CheckCircle2 className="text-[#F5A623]" size={20} />
                  </div>
                  <span className="font-semibold text-[#003366]">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-3xl font-black text-[#003366] mb-1">98%</h3>
                <p className="text-sm font-semibold text-muted-foreground">Client Retention</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-3xl font-black text-[#003366] mb-1">KSh 1B+</h3>
                <p className="text-sm font-semibold text-muted-foreground">Claims Processed</p>
              </div>
            </div>
          </div>
        </div>

        {fullPage && (
          <div className="mt-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#003366] mb-6">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                These principles guide how we interact with our clients, partners, and each other every single day.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:border-[#F5A623]/30 transition-colors"
                >
                  <div className="bg-[#003366]/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <v.icon className="text-[#003366]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#003366] mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-[#003366] text-white p-12 rounded-[40px] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Target size={120} />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-xl text-blue-100/80 leading-relaxed">
                  To provide accessible, transparent, and reliable insurance solutions that empower Kenyans to protect what matters most and build a secure future.
                </p>
              </div>
              <div className="bg-[#F5A623] text-white p-12 rounded-[40px] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Heart size={120} />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-xl text-orange-50/80 leading-relaxed">
                  To be Kenya's most trusted insurance agency, known for excellence in service, innovation in delivery, and unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}