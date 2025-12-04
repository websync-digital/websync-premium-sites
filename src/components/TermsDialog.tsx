import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, FileText, Lock, User, Database, Globe } from "lucide-react";

interface TermsDialogProps {
  trigger: React.ReactNode;
}

const TermsDialog = ({ trigger }: TermsDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-lg max-h-[85vh] p-0 gap-0">
        <DialogHeader className="p-4 pb-2 border-b border-border/50">
          <DialogTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Terms & Privacy
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="subscription" className="w-full">
          <TabsList className="w-full rounded-none border-b border-border/50 bg-muted/30 p-1 h-auto">
            <TabsTrigger 
              value="subscription" 
              className="flex-1 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Subscription
            </TabsTrigger>
            <TabsTrigger 
              value="terms" 
              className="flex-1 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Terms
            </TabsTrigger>
            <TabsTrigger 
              value="privacy" 
              className="flex-1 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Privacy
            </TabsTrigger>
          </TabsList>
          
          <ScrollArea className="h-[50vh] sm:h-[55vh]">
            <TabsContent value="subscription" className="p-4 mt-0 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <Lock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    By subscribing, you agree that <span className="font-medium text-foreground">Websync</span> will charge your account monthly using Monnify Direct Debit.
                  </p>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <FileText className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your subscription renews automatically until you cancel.
                  </p>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All payments are securely processed through Monnify, and your information is protected with bank-grade security.
                  </p>
                </div>
                
                <div className="p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                  <p className="text-sm text-destructive font-medium">
                    No refunds after a successful debit.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="terms" className="p-4 mt-0 space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    Service Agreement
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Websync will design, host, and maintain your website for you.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Website Ownership</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The website and all related assets remain the property of Websync. You are granted full access and usage rights to the website only while your subscription is active and paid.
                  </p>
                </div>
                
                <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <p className="text-sm text-amber-700 dark:text-amber-400">
                    <strong>Important:</strong> If your subscription expires or is cancelled, access to the hosted website may be suspended or removed.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="privacy" className="p-4 mt-0 space-y-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Websync is committed to protecting your personal information and ensuring your data is handled securely and responsibly.
              </p>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Database className="w-4 h-4 text-primary" />
                  1. Information We Collect
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 pl-6 list-disc">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Business Name (optional)</li>
                  <li>Website Type (optional)</li>
                  <li>Payment and bank authorization details processed through Monnify</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">2. How We Use Your Information</h3>
                <ul className="text-sm text-muted-foreground space-y-1 pl-6 list-disc">
                  <li>Creating your Websync account</li>
                  <li>Processing your subscription payments</li>
                  <li>Sending receipts, account updates, and support messages</li>
                  <li>Managing your website hosting, maintenance, and updates</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  We do not sell, trade, or share your information with any third party outside of required payment processors.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  3. Payment & Bank Security
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All payment authorization is handled securely through Monnify (Moniepoint). Websync does not store your card, BVN, or bank login information.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {["Bank-grade security", "PCI-DSS compliance", "Encrypted verification", "Secure Direct Debit"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                      <Shield className="w-3 h-3 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">4. Data Protection</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use modern security standards to protect your data, including encryption, access controls, and secure servers. Only authorized staff can access your information when needed for support or updates.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  5. Customer Rights
                </h3>
                <p className="text-sm text-muted-foreground">You may request:</p>
                <ul className="text-sm text-muted-foreground space-y-1 pl-6 list-disc">
                  <li>Access to your saved information</li>
                  <li>Updates or corrections to your information</li>
                  <li>Removal of your data if you cancel your subscription</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">6. Website Ownership & Access</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Websync designs and hosts your website, but the website remains the property of Websync. You maintain full usage rights as long as your subscription remains active.
                </p>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default TermsDialog;
