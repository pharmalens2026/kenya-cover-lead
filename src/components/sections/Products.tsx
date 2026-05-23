import React from "react";
import { Car, HeartPulse, Building2, Umbrella, Home, Plane, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const products = [
  {
    title: "Motor Insurance",
    icon: Car,
    description: "Comprehensive and third-party covers for private and commercial vehicles.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2b8c45c6-d02b-48b3-8a15-eac1c7f23389/motor-insurance-86102400-1778416192561.webp",
    category: "Personal"
  },
  {
    title: "Medical Insurance",
    icon: HeartPulse,
    description: "Quality healthcare access for individuals, families, and corporate employees.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2b8c45c6-d02b-48b3-8a15-eac1c7f23389/medical-insurance-871e50e4-1778416192501.webp",
    category: "Personal"
  },
  {
    title: "Business Insurance",
    icon: Building2,
    description: "Tailored covers for SMEs and corporates including Fire, WIBA, and Liability.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2b8c45c6-d02b-48b3-8a15-eac1c7f23389/business-insurance-0e3e7f48-1778416192254.webp",
    category: "Business"
  },
  {
    title: "Life Insurance",
    icon: Umbrella,
    description: "Ensure your family's future with our life, education, and pension policies.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    category: "Personal"
  },
  {
    title: "Home Insurance",
    icon: Home,
    description: "Protection for your property and household contents against fire, theft, and natural disasters.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/2b8c45c6-d02b-48b3-8a15-eac1c7f23389/home-insurance-1fa5edde-1778416193798.webp",
    category: "Personal"
  },
  {
    title: "Travel Insurance",
    icon: Plane,
    description: "Travel with peace of mind with covers for medical emergencies, luggage loss, and cancellations.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c055?auto=format&fit=crop&q=80&w=800",
    category: "Personal"
  }
];

interface ProductsProps {
  limit?: number;
  onSeeAll?: () => void;
  fullPage?: boolean;
}

export function Products({ limit, onSeeAll, fullPage }: ProductsProps) {
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className={`py-24 ${fullPage ? "bg-white pt-32" : "bg-slate-50"}`}>
      <div className="container mx-auto px-4">
        {!fullPage && (
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#F5A623] font-bold uppercase tracking-widest text-sm">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#003366] mt-2">Insurance Covers Designed for You</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                We partner with leading insurers in Kenya to bring you the best-in-class covers at competitive rates.
              </p>
            </div>
            {onSeeAll && (
              <Button 
                variant="outline" 
                className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-bold h-12"
                onClick={onSeeAll}
              >
                View All Products <ArrowRight size={16} className="ml-2" />
              </Button>
            )}
          </div>
        )}

        {fullPage && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-[#003366] mb-6">Our Insurance Products</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From personal lifestyle protection to enterprise risk management, we offer a wide range of insurance solutions tailored for the Kenyan market.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group"
            >
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#003366] flex items-center gap-1">
                  <ShieldCheck size={14} className="text-[#F5A623]" /> {product.category}
                </div>
              </div>
              <div className="p-8">
                <div className="bg-[#003366]/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F5A623]/10 transition-colors">
                  <product.icon className="text-[#003366] group-hover:text-[#F5A623] transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-3">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
                <Button className="w-full bg-slate-100 hover:bg-[#003366] hover:text-white text-[#003366] font-bold shadow-none transition-all">
                  Learn More & Get Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {fullPage && (
          <div className="mt-24 bg-[#003366] rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F5A623]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#F5A623]/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Don't See What You're Looking For?</h2>
              <p className="text-xl text-blue-50/80 mb-10 max-w-2xl mx-auto">
                We offer specialized covers including Marine, Agriculture, Cyber, and SACCO insurance. Talk to our experts for a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white font-bold h-14 px-10 rounded-xl border-none">
                  Consult an Expert
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold h-14 px-10 rounded-xl">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}