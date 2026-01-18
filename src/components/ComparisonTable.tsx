import { Check, X, Zap, Clock, Sparkles, Shield, Headphones, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const comparisonData = [
  {
    feature: "Upfront Cost",
    icon: Zap,
    traditional: "₦300,000 - ₦500,000",
    Websyncdigital: "₦6,999/month",
  },
  {
    feature: "Time to Launch",
    icon: Clock,
    traditional: "3-6 weeks",
    Websyncdigital: "7-14 days",
  },
  {
    feature: "Content Updates",
    icon: Sparkles,
    traditional: "₦15,000+ per update",
    Websyncdigital: "Free unlimited",
  },
  {
    feature: "Hosting",
    icon: Rocket,
    traditional: "₦50,000+/year extra",
    Websyncdigital: "Included free",
  },
  {
    feature: "Support",
    icon: Headphones,
    traditional: "Pay per hour",
    Websyncdigital: "24/7 included",
  },
  {
    feature: "Maintenance",
    icon: Shield,
    traditional: "₦100,000+/year",
    Websyncdigital: "Free forever",
  },
];

const redirectToPayment = () => {
  window.open("https://paystack.shop/pay/fk5vg2pd9m", "_blank");
};

export const ComparisonTable = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="comparison" className="py-24 px-4 bg-gradient-to-b from-transparent via-secondary/30 to-transparent scroll-mt-20">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Traditional vs Websyncdigital
          </h2>
          <p className={`text-muted-foreground ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            See the difference
          </p>
        </div>

        <div className={`overflow-x-auto pb-4 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div className="bg-card rounded-xl overflow-hidden border border-border min-w-[600px] md:min-w-0">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
              <div className="p-4 font-semibold text-sm md:text-base">Feature</div>
              <div className="p-4 text-center font-semibold text-muted-foreground text-sm md:text-base">Traditional</div>
              <div className="p-4 text-center font-semibold text-primary text-sm md:text-base">Websyncdigital</div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => {
              const Icon = row.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${index !== comparisonData.length - 1 ? "border-b border-border/50" : ""}`}
                >
                  <div className="p-4 flex items-center gap-3">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{row.feature}</span>
                  </div>
                  <div className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-4 h-4 text-destructive" />
                      <span className="text-sm text-muted-foreground">{row.traditional}</span>
                    </div>
                  </div>
                  <div className="p-4 text-center bg-primary/5">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{row.Websyncdigital}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="hero" size="lg" onClick={redirectToPayment}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};
