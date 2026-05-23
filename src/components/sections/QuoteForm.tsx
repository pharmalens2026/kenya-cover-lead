import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, MessageSquare, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

interface QuoteFormProps {
  fullPage?: boolean;
}

export function QuoteForm({ fullPage }: QuoteFormProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Quote request sent! One of our agents will contact you shortly.", {
        description: "Expect a call or WhatsApp message within 15 minutes.",
      });
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section className={`py-24 ${fullPage ? "bg-white pt-32" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <span className="text-[#F5A623] font-bold uppercase tracking-widest text-sm">Get a Quote</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] mt-4 mb-6 leading-tight">
              Protect What Matters <br /> Most Today
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Fill out the form below to receive a personalized quote tailored to your needs and budget. Our agents are ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-[#003366]/5 p-4 rounded-2xl h-fit">
                  <Phone className="text-[#003366]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] text-lg">Call Us Directly</h4>
                  <p className="text-muted-foreground">+254 700 000 000</p>
                  <p className="text-[#F5A623] font-semibold text-sm">Available Mon-Fri, 8am - 5pm</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#003366]/5 p-4 rounded-2xl h-fit">
                  <MessageSquare className="text-[#003366]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] text-lg">WhatsApp Agent</h4>
                  <p className="text-muted-foreground">+254 700 000 001</p>
                  <p className="text-[#F5A623] font-semibold text-sm">Instant support for inquiries</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#003366]/5 p-4 rounded-2xl h-fit">
                  <Clock className="text-[#003366]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] text-lg">Fast Response</h4>
                  <p className="text-muted-foreground">Expect a detailed quotation within</p>
                  <p className="text-[#F5A623] font-semibold text-sm">1-2 Working Hours</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-slate-50 p-8 md:p-12 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" required className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="e.g. 0700 000 000" required className="bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="insuranceType">Insurance Type</Label>
                  <Select required>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select Cover Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="motor">Motor Insurance</SelectItem>
                      <SelectItem value="medical">Medical Insurance</SelectItem>
                      <SelectItem value="life">Life & Family</SelectItem>
                      <SelectItem value="business">Business / SME</SelectItem>
                      <SelectItem value="home">Home Insurance</SelectItem>
                      <SelectItem value="other">Other / Specialized</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Details (Optional)</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Tell us more (e.g., car make/model, number of dependents, etc.)" 
                  className="bg-white min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#003366] hover:bg-[#003366]/90 text-white font-bold py-7 rounded-2xl text-lg shadow-lg shadow-[#003366]/20 border-none"
              >
                {loading ? "Processing..." : "Submit Quote Request"} <Send className="ml-2" size={20} />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}