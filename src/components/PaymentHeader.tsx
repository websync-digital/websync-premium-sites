import { Shield, Check, Lock, Sparkles } from "lucide-react";

const PaymentHeader = () => {
  return (
    <header className="text-center py-10 px-4">
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
        <Sparkles className="w-4 h-4" />
        Limited Time Offer
      </div>
      
      <h1 className="text-3xl font-bold text-foreground mb-3 animate-fade-in" style={{ animationDelay: "0.05s" }}>
        Websync Monthly
        <br />
        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Website Subscription
        </span>
      </h1>
      
      <p className="text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        Simple. Secure. Automated Payment.
      </p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
        <div className="trust-badge">
          <Check className="w-4 h-4 text-primary" />
          <span>Monnify Direct Debit</span>
        </div>
        <div className="trust-badge">
          <Shield className="w-4 h-4 text-primary" />
          <span>Secure Authorization</span>
        </div>
        <div className="trust-badge">
          <Lock className="w-4 h-4 text-primary" />
          <span>PCI-DSS Compliant</span>
        </div>
      </div>
      
      <div className="accent-line animate-fade-in" style={{ animationDelay: "0.2s" }} />
    </header>
  );
};

export default PaymentHeader;
