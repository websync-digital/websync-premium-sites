import { FileText, Code, Send, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: FileText,
    title: "Fill the onboarding form",
    description: "Share your business details and vision with us",
  },
  {
    icon: Code,
    title: "Vibe Coders build your site",
    description: "Our expert team creates your premium website",
  },
  {
    icon: Send,
    title: "We host it and send the link",
    description: "Delivered directly to your WhatsApp",
  },
  {
    icon: MessageSquare,
    title: "Request updates anytime",
    description: "Ongoing support via WhatsApp included",
  },
];

export const HowItWorks = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 px-4 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          How It Works
        </h2>
        <p className={`text-center text-muted-foreground mb-16 text-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Live in 7–14 days after form submission
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="bg-card border border-border rounded-2xl p-8 shadow-blue hover:shadow-blue-strong transition-all duration-300 h-full">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-blue-strong">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
