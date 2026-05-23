import React from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Kamau",
    role: "Business Owner, Nairobi",
    content: "InsureLink Kenya helped me find the perfect SME cover for my retail business. Their advice on Professional Indemnity was eye-opening. Exceptional service!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=john"
  },
  {
    name: "Sarah Wanjiku",
    role: "IT Professional, Thika",
    content: "The claims process for my car accident was surprisingly smooth. The team at InsureLink handled all the paperwork with CIC, and I got my settlement in record time.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Dr. Evans Musembi",
    role: "Health Practitioner, Mombasa",
    content: "I've used them for both personal medical cover and group medical for my clinic staff. Their expertise in health insurance products is unmatched in Kenya.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=evans"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-24 text-slate-200 -z-10">
        <Quote size={200} />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold uppercase tracking-widest text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-black text-primary mt-2">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Join thousands of satisfied Kenyans who trust InsureLink for their protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F5A623" className="text-accent" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed italic mb-8 flex-grow">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-slate-100" />
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}