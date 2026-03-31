"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-12">Privacy Policy</h1>
            
            <div className="space-y-12 font-body text-muted-foreground leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest">1. Introduction</h2>
                <p>WebSync Digital respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website and tells you about your privacy rights and how the law protects you.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest">2. The Data We Collect</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, Usage Data, and Marketing and Communications Data.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest">3. Payment & Security</h2>
                <p>We utilize Mono for our automated ₦9,999/month subscriptions. We do not store or have direct access to your sensitive bank credentials. All financial verification and processing are handled exclusively by Mono.co, ensuring 256-bit bank-grade encryption.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest">4. Your Legal Rights</h2>
                <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of your personal data.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest">5. Contact Us</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at digitalwebsync@gmail.com or +2349111719701.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
