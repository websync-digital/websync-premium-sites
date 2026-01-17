import { MessageCircle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const redirectToPayment = () => {
    window.open("https://paystack.shop/pay/fk5vg2pd9m", "_blank");
  };

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary mb-4">Websyncdigital</h3>
            <p className="text-muted-foreground">
              Premium Websites. One Small Monthly Fee. Built and managed by Vibe Coders.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary key hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => document.querySelector("#comparison")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Comparison
              </button>
              <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors text-left">
                Resources
              </Link>
              <button
                onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Pricing
              </button>
              <button
                onClick={redirectToPayment}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Get Started
              </button>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Privacy
              </Link>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Refund Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:digitalwebsync@gmail.com"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>digitalwebsync@gmail.com</span>
              </a>
              <a
                href="tel:+2347043576814"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>+2347043576814</span>
              </a>
              <a
                href="https://wa.me/2347043576814"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary hover:text-primary-hover transition-colors font-medium group"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Support</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              &copy; {currentYear} Websyncdigital. All rights reserved.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2 md:mt-0">
              Proudly serving businesses in <span className="text-primary/80">Anambra</span>, <span className="text-primary/80">Lagos</span>, <span className="text-primary/80">Abuja</span>, & <span className="text-primary/80">Port Harcourt</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
