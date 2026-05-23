import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";

interface HeroProps {
  onGetQuote: () => void;
}

export function Hero({ onGetQuote }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/2b8c45c6-d02b-48b3-8a15-eac1c7f23389/hero-kenyan-family-bda71b39-1778416193852.webp" 
          alt="Kenyan Family"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#003366]/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/30 text-[#F5A623] font-bold text-sm mb-6 uppercase tracking-widest">
              Kenya's Most Trusted Insurance Partner
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Securing Your Future, <br />
              <span className="text-[#F5A623]">One Policy at a Time.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 mb-10 leading-relaxed max-w-xl">
              Professional, transparent, and reliable insurance covers for individuals, families, and businesses across Kenya. Get the protection you deserve today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={onGetQuote}
                size="lg" 
                className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white text-lg font-bold py-7 px-8 rounded-xl shadow-lg shadow-[#F5A623]/20"
              >
                Get Instant Quote <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 hover:bg-white/20 border-white/30 text-white text-lg font-bold py-7 px-8 rounded-xl backdrop-blur-md"
              >
                Talk to an Agent
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, label: "Full Protection" },
                { icon: Clock, label: "Fast Claims" },
                { icon: Users, label: "10,000+ Clients" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-2 bg-[#F5A623]/20 rounded-lg">
                    <item.icon className="text-[#F5A623]" size={20} />
                  </div>
                  <span className="font-semibold text-blue-50">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges - Hidden on mobile */}
      <div className="hidden lg:block absolute bottom-12 right-12 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 max-w-xs shadow-2xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#003366] overflow-hidden bg-gray-200">
                <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" />
              </div>
            ))}
          </div>
          <span className="text-sm font-bold text-white">Join 10k+ Protected Kenyans</span>
        </div>
        <div className="flex text-[#F5A623]">
          {[1, 2, 3, 4, 5].map(i => <ShieldCheck key={i} size={16} fill="currentColor" />)}
        </div>
      </div>
    </section>
  );
}