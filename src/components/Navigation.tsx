import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Resources", href: "/resources" },
];

import { useRouter } from "next/navigation";
// ... imports

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const redirectToPayment = () => {
    window.open("https://paystack.shop/pay/fk5vg2pd9m", "_blank");
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      router.push(href);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          transition-all duration-500 ease-in-out
          flex items-center justify-between
          ${isScrolled
            ? "w-full max-w-5xl px-6 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
            : "w-full max-w-7xl px-8 py-5 rounded-3xl bg-transparent border-transparent"
          }
        `}
      >
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-black text-primary hover:scale-105 transition-transform duration-300 tracking-tighter"
        >
          Websyncdigital
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {link.name}
            </button>
          ))}
          <Button
            variant="hero"
            size="sm"
            onClick={redirectToPayment}
            className={`
              rounded-full px-8 py-5 text-xs font-black uppercase tracking-widest
              ${isScrolled ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white/10 backdrop-blur-md text-white border border-white/20"}
              hover:scale-105 active:scale-95 transition-all duration-300
            `}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 md:hidden p-6 rounded-[2.5rem] bg-[#0d121f]/98 backdrop-blur-3xl border border-white/10 animate-scale-in shadow-2xl">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-lg font-bold text-white/70 hover:text-primary transition-colors px-4"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 px-4 border-t border-white/5">
                <Button variant="hero" className="w-full rounded-2xl py-6 font-black uppercase tracking-widest" onClick={redirectToPayment}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
