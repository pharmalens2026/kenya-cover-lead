import React, { useState } from "react";
import { Shield, Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export function Header({ activePage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Products", id: "products" },
    { name: "Claims", id: "claims" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="bg-[#003366] text-white py-2 px-4 text-xs hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} className="text-[#F5A623]" /> +254 700 000 000</span>
            <span className="flex items-center gap-1"><Mail size={14} className="text-[#F5A623]" /> info@insurelink.co.ke</span>
          </div>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-[#F5A623]">Login</span>
            <span className="cursor-pointer hover:text-[#F5A623]">Register</span>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => handleNavigate("home")}
        >
          <div className="bg-[#003366] p-2 rounded-lg">
            <Shield className="text-[#F5A623] w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-xl tracking-tight text-[#003366]">InsureLink</span>
            <span className="block text-[10px] font-semibold text-[#F5A623] uppercase tracking-widest leading-none">Kenya</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className={`text-sm font-semibold transition-colors hover:text-[#F5A623] ${
                activePage === link.id ? "text-[#F5A623]" : "text-[#003366]"
              }`}
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="bg-[#003366] hover:bg-[#003366]/90 text-white font-bold"
            onClick={() => handleNavigate("quote")}
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-[#003366]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className={`text-left text-lg font-semibold py-2 ${
                    activePage === link.id ? "text-[#F5A623]" : "text-[#003366]"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <Button 
                className="bg-[#003366] w-full text-white font-bold py-6"
                onClick={() => handleNavigate("quote")}
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}