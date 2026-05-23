import React, { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Products } from "./components/sections/Products";
import { About } from "./components/sections/About";
import { Stats } from "./components/sections/Stats";
import { Partners } from "./components/sections/Partners";
import { Testimonials } from "./components/sections/Testimonials";
import { QuoteForm } from "./components/sections/QuoteForm";
import { Contact } from "./components/sections/Contact";
import { Claims } from "./components/sections/Claims";
import { FAQ } from "./components/sections/FAQ";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import { Toaster } from "./components/ui/sonner";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [activePage, setActivePage] = useState("home");

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero onGetQuote={() => setActivePage("quote")} />
            <Stats />
            <Products limit={3} onSeeAll={() => setActivePage("products")} />
            <About />
            <Partners />
            <Testimonials />
            <QuoteForm />
          </motion.div>
        );
      case "about":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <About fullPage />
          </motion.div>
        );
      case "products":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Products fullPage />
          </motion.div>
        );
      case "claims":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Claims />
          </motion.div>
        );
      case "quote":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <QuoteForm fullPage />
          </motion.div>
        );
      case "contact":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Contact />
          </motion.div>
        );
      case "faq":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <FAQ />
          </motion.div>
        );
      default:
        return <Hero onGetQuote={() => setActivePage("quote")} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <Footer onNavigate={setActivePage} />
      <WhatsAppButton />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;