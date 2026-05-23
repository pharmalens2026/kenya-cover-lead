import React from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 2 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="bg-white pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F5A623] font-bold uppercase tracking-widest text-sm">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#003366] mt-4 mb-6">Let's Talk About Your Protection</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions? Our team of insurance experts is here to help you navigate the complex world of insurance in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
            <div className="bg-[#003366]/5 p-4 rounded-2xl mb-6">
              <Phone className="text-[#003366]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-4">Direct line for immediate assistance</p>
            <a href="tel:+254700000000" className="text-[#F5A623] font-bold text-lg hover:underline">+254 700 000 000</a>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
            <div className="bg-[#003366]/5 p-4 rounded-2xl mb-6">
              <Mail className="text-[#003366]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">Send us your documents or queries</p>
            <a href="mailto:info@insurelink.co.ke" className="text-[#F5A623] font-bold text-lg hover:underline">info@insurelink.co.ke</a>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
            <div className="bg-[#003366]/5 p-4 rounded-2xl mb-6">
              <MapPin className="text-[#003366]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-2">Visit Us</h3>
            <p className="text-muted-foreground mb-4">Prism Tower, 3rd Ngong Ave</p>
            <span className="text-[#F5A623] font-bold text-lg">Nairobi, Kenya</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#003366] mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" required className="bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required className="bg-slate-50 border-slate-200" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" required className="bg-slate-50 border-slate-200" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" required className="bg-slate-50 border-slate-200 min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full bg-[#003366] hover:bg-[#003366]/90 text-white font-bold h-14 rounded-xl text-lg border-none">
                Send Message <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="h-full min-h-[400px] bg-slate-100 rounded-[40px] overflow-hidden relative border border-slate-200">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground p-8 text-center">
                <div>
                  <MapPin size={48} className="mx-auto mb-4 text-slate-300" />
                  <p className="font-bold">Google Maps Placeholder</p>
                  <p className="text-sm">Prism Tower, 3rd Ngong Avenue, Nairobi</p>
                </div>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.813605658097!2d36.8124!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d656000001%3A0x6b49e5d7d3d0f0d!2sPrism%20Tower!5e0!3m2!1sen!2ske!4v1650000000000!5m2!1sen!2ske" 
                className="w-full h-full border-0 grayscale" 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}