import { Navigation } from "@/components/Navigation";
import { HeroSlider } from "@/components/HeroSlider";
import { HowItWorks } from "@/components/HowItWorks";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PricingSection } from "@/components/PricingSection";
import { VSLSection } from "@/components/VSLSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <AboutSection />
      <HowItWorks />
      <PortfolioSection />
      <ComparisonTable />
      <PricingSection />
      <VSLSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
