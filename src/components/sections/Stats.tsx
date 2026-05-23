import React from "react";
import { Users, FileText, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";

export function Stats() {
  const stats = [
    { label: "Satisfied Clients", value: "10,000+", icon: Users },
    { label: "Insurance Partners", value: "15+", icon: Award },
    { label: "Claims Settled", value: "KSh 2B+", icon: FileText },
    { label: "Years Experience", value: "15+", icon: CheckCircle },
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="mb-4 p-3 bg-[#003366]/5 rounded-2xl">
                <stat.icon className="text-[#003366]" size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-[#003366] mb-2">{stat.value}</h3>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}