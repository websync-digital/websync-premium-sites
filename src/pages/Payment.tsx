import PaymentHeader from "@/components/PaymentHeader";
import PricingCard from "@/components/PricingCard";
import CustomerForm from "@/components/CustomerForm";
import SecurityNotice from "@/components/SecurityNotice";
import FAQSection from "@/components/FAQSection";
import PaymentFooter from "@/components/PaymentFooter";

const Payment = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 container py-4">
        <PaymentHeader />
        
        <div className="space-y-6 px-1">
          <PricingCard />
          <CustomerForm />
          <SecurityNotice />
          <FAQSection />
        </div>
      </main>
      
      <PaymentFooter />
    </div>
  );
};

export default Payment;
