import { Navigation } from "@/components/Navigation";
import { HeroSlider } from "@/components/HeroSlider";
import { HowItWorks } from "@/components/HowItWorks";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PricingSection } from "@/components/PricingSection";
import { VSLSection } from "@/components/VSLSection";
import { OnboardingForm } from "@/components/OnboardingForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <HowItWorks />
      <ComparisonTable />
      <PricingSection />
      <VSLSection />
      <OnboardingForm />
      <Footer />
    </main>
  );
};

export default Index;
