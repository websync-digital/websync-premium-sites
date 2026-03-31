"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 md:pt-40 lg:pt-48 pb-24">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary hover:text-foreground transition-colors mb-12 group"
            >
              <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
              Back to Homepage
            </a>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-12">Terms of Service</h1>
            
            <div className="space-y-12 font-body text-muted-foreground leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest">1. Usage Rights</h2>
                <p>WebSync Digital provides digital assets, branding, and strategic solutions for Nigerian businesses. By using our website and subscribing to our services, you agree to comply with our usage rights and community standards.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest">2. ₦9,999/Month Subscription Model & Domain Rights</h2>
                <p>Our monthly subscription model covers the design, maintenance, domain (if applicable), and updates for your digital assets. All payments are securely managed via Mono.co and will auto-renew until cancelled by you.</p>
                <p>Regarding domain ownership: WebSync Digital manages, secures, and pays for your yearly domain renewals as part of our package to eliminate upfront costs for you. While we technically manage the domain during your active subscription, you retain the right to buy it back from us at any time for a one-time fee of ₦15,000—should you wish to transfer management elsewhere.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest">3. Launch & Updates</h2>
                <p>We commit to a 7-14 day fast-launch timeline for your initial digital footprint. Subscribed clients are entitled to unlimited updates, ensuring their digital presence scales alongside their business growth without extra fees.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest">4. Cancellation & Mission Focus</h2>
                <p>WebSync Digital follows a &quot;No Setup Fee, No Hidden Costs&quot; philosophy. You may cancel your subscription at any time with zero penalties. We do not offer refunds on services already rendered within a month&apos;s cycle.</p>
                <p>While our primary model is built on low-cost subscriptions, we do provide a second plan featuring an upfront fee for businesses that prefer traditional asset ownership models. Regardless of the plan you choose, our core mission remains the same: helping as many Nigerian businesses as possible launch an elite online presence without the barrier of a massive upfront budget.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest">5. Legal Entity</h2>
                <p>WebSync Digital is a fully registered and legal entity in Nigeria. All disputes or legal matters arising from the use of our services shall be governed by Nigerian law.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
