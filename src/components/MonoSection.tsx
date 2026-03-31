"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import monoPartner from "@/assets/mono-partner.png";
import securitySeal from "@/assets/security-seal.webp";

const MonoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="security" className="py-16 md:py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container-custom">
        <div 
          ref={ref} 
          className="flex flex-col md:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Image Side - Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative group"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden glass-morphism-card border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
               <Image
                src={monoPartner}
                alt="WebSync Digital and Mono Security Partnership"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Security Seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
              className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_20px_rgba(37,99,235,0.4)] z-10"
            >
              <Image 
                src={securitySeal} 
                alt="WebSync Verified Security Seal" 
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Text Side - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 space-y-6 lg:space-y-8"
          >
            <div>
              <span className="text-xs font-body font-bold tracking-[0.3em] uppercase text-primary/80 mb-3 block">
                Infrastructure Partner
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                Secure & Seamless Payments via Mono
              </h2>
            </div>

            <div className="space-y-4 text-white/70 font-body font-light text-base lg:text-lg leading-relaxed">
              <p>
                To power our frictionless ₦9,999 monthly subscription model, we’ve partnered with <span className="text-white font-medium">Mono</span>—Africa&apos;s leading financial infrastructure provider.
              </p>
              <p>
                <span className="text-white font-medium">Mono connects directly to your bank securely.</span> It uses your <span className="text-white font-medium">BVN and Account Number</span> as KYC solely to verify ownership. This process ensures that payments are accurate and that your financial identity is fully protected.
              </p>
              <p>
                Most importantly: <span className="text-primary font-medium italic">We never store your bank credentials or have direct access to your account.</span> All transactions are encrypted with bank-grade 256-bit AES security, ensuring that your business and bank information remain private and 100% secure.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="https://mono.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white/90 hover:text-primary transition-colors group"
              >
                Learn more about Mono security
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MonoSection;
