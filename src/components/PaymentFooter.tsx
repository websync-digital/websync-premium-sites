import { Heart } from "lucide-react";
const PaymentFooter = () => {
  return <footer className="py-8 px-4 text-center animate-fade-in" style={{
    animationDelay: "0.5s"
  }}>
      
      <p className="text-xs text-muted-foreground/70 mb-2">
        Websync © 2025 — All Rights Reserved.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#" className="text-xs text-primary hover:underline transition-colors">
          Terms of Service
        </a>
        <span className="text-muted-foreground/50">•</span>
        <a href="#" className="text-xs text-primary hover:underline transition-colors">
          Privacy Policy
        </a>
      </div>
    </footer>;
};
export default PaymentFooter;