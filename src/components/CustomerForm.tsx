import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2, User, Mail, Phone, Building2 } from "lucide-react";
import TermsDialog from "./TermsDialog";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  websiteType: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
}

const CustomerForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    websiteType: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[\d\s+()-]{10,}$/.test(phone);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validate();
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      validate();
    }
  };

  const isFormValid = formData.fullName.trim() && 
    formData.email.trim() && 
    validateEmail(formData.email) && 
    formData.phone.trim() && 
    validatePhone(formData.phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);

    toast({
      title: "Processing...",
      description: "Redirecting to secure bank authorization."
    });

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Backend Required",
        description: "Enable Lovable Cloud to complete the Monnify integration."
      });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="section-title">Your Information</h2>
      
      <div className="space-y-5">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium flex items-center gap-2">
            <User className="w-4 h-4 text-muted-foreground" />
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input 
            id="fullName" 
            type="text" 
            placeholder="Enter your full name" 
            className="form-input" 
            value={formData.fullName} 
            onChange={e => handleChange("fullName", e.target.value)} 
            onBlur={() => handleBlur("fullName")} 
          />
          {touched.fullName && errors.fullName && (
            <p className="text-sm text-destructive">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
            <Mail className="w-4 h-4 text-muted-foreground" />
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your@email.com" 
            className="form-input" 
            value={formData.email} 
            onChange={e => handleChange("email", e.target.value)} 
            onBlur={() => handleBlur("email")} 
          />
          {touched.email && errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
            <Phone className="w-4 h-4 text-muted-foreground" />
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input 
            id="phone" 
            type="tel" 
            placeholder="+234 xxx xxx xxxx" 
            className="form-input" 
            value={formData.phone} 
            onChange={e => handleChange("phone", e.target.value)} 
            onBlur={() => handleBlur("phone")} 
          />
          {touched.phone && errors.phone && (
            <p className="text-sm text-destructive">{errors.phone}</p>
          )}
        </div>

        {/* Business Name (Optional) */}
        <div className="space-y-2">
          <Label htmlFor="businessName" className="text-sm font-medium flex items-center gap-2">
            <Building2 className="w-4 h-4 text-muted-foreground" />
            Business Name <span className="text-muted-foreground text-xs">(optional)</span>
          </Label>
          <Input 
            id="businessName" 
            type="text" 
            placeholder="Your business name" 
            className="form-input" 
            value={formData.businessName} 
            onChange={e => handleChange("businessName", e.target.value)} 
          />
        </div>
      </div>

      {/* Terms Notice */}
      <p className="text-xs text-muted-foreground text-center mt-6">
        By proceeding, you agree to our{" "}
        <TermsDialog 
          trigger={
            <button type="button" className="text-primary hover:underline font-medium">
              Terms of Service & Privacy Policy
            </button>
          } 
        />
      </p>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={!isFormValid || isLoading} 
        className="cta-button flex items-center justify-center gap-2 mt-4"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Proceed to Secure Bank Authorization
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
};

export default CustomerForm;