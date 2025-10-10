import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const comparisonData = [
  {
    feature: "Upfront payment",
    traditional: "₦300,000+",
    websync: "₦6,999 monthly — no big fees",
    isTraditionalBad: true,
  },
  {
    feature: "Time to launch",
    traditional: "Takes 3–6 weeks",
    websync: "Live in 3–5 days",
    isTraditionalBad: true,
  },
  {
    feature: "Updates",
    traditional: "Static — no easy updates",
    websync: "Unlimited updates anytime",
    isTraditionalBad: true,
  },
  {
    feature: "Hosting",
    traditional: "You find your own",
    websync: "Hosting included",
    isTraditionalBad: true,
  },
  {
    feature: "Tech support",
    traditional: "You handle issues",
    websync: "We manage everything",
    isTraditionalBad: true,
  },
  {
    feature: "Maintenance",
    traditional: "Pay extra for edits",
    websync: "Fully covered",
    isTraditionalBad: true,
  },
  {
    feature: "Communication",
    traditional: "Delays & meetings",
    websync: "Fast WhatsApp support",
    isTraditionalBad: true,
  },
  {
    feature: "Partnership",
    traditional: "One-time project",
    websync: "Ongoing partnership",
    isTraditionalBad: true,
  },
];

const scrollToForm = () => {
  document.getElementById("onboarding-form")?.scrollIntoView({ behavior: "smooth" });
};

export const ComparisonTable = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="comparison" className="py-24 px-4 bg-secondary/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          ₦300,000 Websites vs Websync ₦6,999
        </h2>
        <p className={`text-center text-muted-foreground mb-12 text-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          The Difference is Clear.
        </p>

        <div className={`bg-card rounded-2xl shadow-blue-strong overflow-hidden border border-border ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {/* Header */}
          <div className="grid grid-cols-2 bg-primary/5 border-b border-border">
            <div className="p-6 text-center border-r border-border">
              <h3 className="text-xl font-semibold text-muted-foreground">
                Traditional Web Agency
              </h3>
            </div>
            <div className="p-6 text-center bg-primary/10">
              <h3 className="text-xl font-semibold text-primary">
                Websync (₦6,999/month)
              </h3>
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 ${
                index !== comparisonData.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="p-6 border-r border-border flex items-center gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">{row.traditional}</span>
              </div>
              <div className="p-6 flex items-center gap-3 bg-primary/5">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{row.websync}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-lg md:text-xl mt-12 mb-8 text-foreground max-w-4xl mx-auto">
          Why drop ₦300K once when ₦6,999/month keeps your website fresh, fast, and forever premium?
        </p>

        <div className="text-center">
          <Button variant="hero" size="lg" onClick={scrollToForm}>
            Get Your Premium Site for ₦6,999 Today
          </Button>
        </div>
      </div>
    </section>
  );
};
