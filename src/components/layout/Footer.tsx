import React from "react";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "About Us", id: "about" },
    { name: "Insurance Products", id: "products" },
    { name: "Claims Assistance", id: "claims" },
    { name: "Request a Quote", id: "quote" },
    { name: "Frequently Asked Questions", id: "faq" },
    { name: "Contact Us", id: "contact" },
  ];

  const products = [
    "Motor Insurance",
    "Medical Insurance",
    "Life & Family",
    "Business & SME",
    "Home Insurance",
    "Travel Insurance",
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <Shield className="text-primary w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-2xl tracking-tight">InsureLink</span>
                <span className="block text-[10px] font-semibold text-accent uppercase tracking-widest leading-none">Kenya</span>
              </div>
            </div>
            <p className="text-blue-100/80 leading-relaxed">
              Kenya's premier insurance agency providing professional, trustworthy, and digitally accessible insurance solutions for individuals, families, and corporates.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-accent w-fit pb-1">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => onNavigate(link.id)}
                    className="text-blue-100/80 hover:text-accent flex items-center gap-2 group transition-colors"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Covers */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-accent w-fit pb-1">Our Covers</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate("products")}
                    className="text-blue-100/80 hover:text-accent flex items-center gap-2 group transition-colors"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-accent w-fit pb-1">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <span className="text-blue-100/80">
                  12th Floor, Prism Tower,<br />
                  3rd Ngong Avenue, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={20} />
                <span className="text-blue-100/80">+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={20} />
                <span className="text-blue-100/80">info@insurelink.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200/60">
          <p>© {currentYear} InsureLink Kenya. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
            <a href="#" className="hover:text-accent">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}