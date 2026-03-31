"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import registrationBadge from '@/assets/registration-badge.jpg';

const Registration = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="registration" className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="container-custom">
        <div ref={ref} className="bg-secondary/50 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 border border-border/50">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full md:w-1/2 lg:w-2/5"
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="relative aspect-[3/4] md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/50 bg-white/50 p-2 select-none group">
              <Image
                src={registrationBadge}
                alt="WebSync Digital Registration Certificate"
                fill
                className="object-contain pointer-events-none"
                draggable={false}
              />
              
              {/* Persistent Grid Watermark - Renders theft useless */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 flex flex-col items-center justify-center rotate-[-35deg] scale-150 select-none">
                 <div className="whitespace-nowrap font-display text-[12px] font-black tracking-[0.5em] text-foreground/40 leading-[3em] uppercase">
                    {[...Array(20)].map((_, i) => (
                      <div key={i}>WEBSYNC DIGITAL - VERIFIED ASSET &nbsp;&nbsp; WEBSYNC DIGITAL - VERIFIED ASSET</div>
                    ))}
                 </div>
              </div>

              {/* Invisible Protection Overlay */}
              <div className="absolute inset-0 z-50 cursor-default bg-transparent" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left"
          >
            <span className="text-xs font-body font-bold tracking-widest uppercase text-primary mb-4 block">
              Certified Security & Trust
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
              We Are Registered. Trust Delivered. <span className="text-sm md:text-base font-body font-bold text-primary ml-2 tracking-widest">(RC: 2008341)</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-body font-light leading-relaxed max-w-xl">
              Partner with a fully registered entity dedicated to building professional digital landscapes for Nigerian SMEs. To ensure the highest level of trust, we use **Mono** for secure, automated payments. **We never have access to your bank account or private credentials.** All sensitive verification (BVN/KYC) and processing are handled exclusively by <a href="https://mono.co" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 decoration-primary/30">Mono.co</a>—the gold standard in African financial infrastructure. Your business is safe with **us**.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-border/50 shadow-sm backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Secure via Mono</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-border/50 shadow-sm backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Direct Debit Compliant</span>
              </div>
            </div>

            <div className="mt-10 flex justify-center md:justify-start">
              <a 
                href="https://search.cac.gov.ng/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase bg-foreground text-background rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg hover:bg-foreground/90 group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:rotate-12 transition-transform">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                Verify Our Legal Status on CAC
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
