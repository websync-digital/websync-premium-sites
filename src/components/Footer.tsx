"use client";

import Image from 'next/image';
import logo from '../../public/assets/logo.png';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/#hero" className="inline-block transition-transform hover:scale-105">
              <Image
                src={logo}
                alt="WebSync Digital Logo"
                width={120}
                height={30}
                className="h-7 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/50 font-body leading-relaxed max-w-[240px]">
              We transform bold ideas into exceptional brands and sales-driven digital platforms. 
              Only ₦9,999 monthly. No setup fees.
            </p>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 w-fit">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/70">CAC Verified: RC 9470161</span>
            </div>
          </div>

          {/* Solution Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-primary">WebSync Solutions</h4>
            <ul className="space-y-4">
              {['Bespoke Premium Design', 'Unlimited Free Updates', 'Enterprise-Grade SEO', 'Monthly Maintenance'].map((item) => (
                <li key={item}>
                  <a href="#pricing" className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-body">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-white/30 text-primary/0">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/#pricing" className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-body">Select Your Plan</Link>
              </li>
              <li>
                <Link href="/#metrics" className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-body">Success Stories</Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-body">Our Blog</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-body">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-body">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
             <h4 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-primary">Get in Touch</h4>
             <ul className="space-y-4">
                <li>
                  <a href="mailto:digitalwebsync@gmail.com" className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-body block">
                    digitalwebsync@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/2349111719701" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-body block font-bold text-primary">
                    WhatsApp: Chat with our Team
                  </a>
                </li>
             </ul>
             <div className="pt-4">
               <span className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-medium">Headquarters: Nigeria 🇳🇬</span>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[11px] text-white/30 font-body tracking-widest uppercase">
              © {new Date().getFullYear()} WebSync Digital. All rights reserved.
            </p>
            <div className="flex items-center gap-4 border-l border-white/10 pl-6 hidden md:flex">
              <Link href="/privacy" className="text-[10px] text-white/20 hover:text-white uppercase tracking-widest transition-colors font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-[10px] text-white/20 hover:text-white uppercase tracking-widest transition-colors font-medium">Terms of Service</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-white/20 font-body tracking-[0.2em] uppercase italic">
              Empowering Nigerian SMEs with World-Class Digital Assets.
            </span>
          </div>
          {/* Mobile Legal Links */}
          <div className="flex items-center gap-6 md:hidden">
            <Link href="/privacy" className="text-[10px] text-white/20 uppercase tracking-widest font-medium">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] text-white/20 uppercase tracking-widest font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
