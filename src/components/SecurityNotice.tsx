import { Lock, ShieldCheck } from "lucide-react";

const SecurityNotice = () => {
  return (
    <div className="trust-box animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Lock className="w-4 h-4 text-primary" />
            Your information is 100% secure
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We only use your BVN to verify your identity — it cannot access your money, balance, or personal bank details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityNotice;
