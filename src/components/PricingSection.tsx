import { Check, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  "Bespoke Premium Design",
  "High-Performance Hosting",
  "Unlimited Content Updates",
  "Mobile-First Optimization",
  "Enterprise-Grade SEO",
  "Dedicated WhatsApp Support",
  "Rapid 7–14 Day Launch",
  "You own your domain",
];

const redirectToPayment = () => {
  window.open("https://paystack.shop/pay/fk5vg2pd9m", "_blank");
};

export const PricingSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" className="py-32 px-4 relative overflow-hidden scroll-mt-20">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-primary text-xs font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Sparkles className="w-4 h-4" />
            Pricing Plans
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Simple, Transparent <span className="text-primary italic">Pricing</span>
          </h2>
          <p className={`text-xl text-white/60 max-w-2xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Everything you need for a luxury online presence, with zero hidden complexities.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className={`pricing-card-refined relative group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {/* The actual card */}
            <div className="bg-[#0D121F]/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-primary/10">

              {/* Popular badge */}
              <div className="absolute top-8 right-8">
                <div className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg shadow-primary/20 flex items-center gap-2">
                  <Zap className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              </div>

              <div className="mb-10 text-left">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  The Websyncdigital Pro
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-black text-white tracking-tighter">₦6,999</span>
                  <span className="text-white/40 font-bold uppercase tracking-widest text-xs">/ Month</span>
                </div>
                <div className="h-1 w-20 bg-primary rounded-full mt-6" />
              </div>

              <ul className="grid grid-cols-1 gap-5 mb-12">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 group/item">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover/item:bg-primary/20">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-white/70 text-lg transition-colors group-hover/item:text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="hero"
                size="lg"
                className="w-full text-lg py-8 h-auto rounded-2xl bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary border-none shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-500 font-black tracking-wide uppercase"
                onClick={redirectToPayment}
              >
                Get Started Now
              </Button>

              <div className="mt-8 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-white/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  No setup fee
                </div>
                <div className="w-1 h-1 rounded-full bg-white/10" />
                <div className="flex items-center gap-2 text-white/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Cancel anytime
                </div>
              </div>
            </div>

            {/* Background decorative element for the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[2.6rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
