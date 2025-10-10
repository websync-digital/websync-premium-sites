import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  whatsapp: z.string().min(10, "Valid WhatsApp number is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  domainPreference: z.string().min(2, "Please specify your domain preference"),
  brandColors: z.string().optional(),
  preferredStyle: z.string().min(1, "Please select a style"),
  businessGoals: z.string().optional(),
  deadline: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "You must agree to continue"),
});

type FormValues = z.infer<typeof formSchema>;

export const OnboardingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      whatsapp: "",
      email: "",
      domainPreference: "",
      brandColors: "",
      preferredStyle: "",
      businessGoals: "",
      deadline: "",
      consent: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form data:", data);
    
    toast.success("Form submitted successfully! We'll contact you on WhatsApp shortly.");
    setIsSuccess(true);
    setIsSubmitting(false);
    form.reset();
  };

  if (isSuccess) {
    return (
      <section id="onboarding-form" className="py-24 px-4 bg-background scroll-mt-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-primary/10 border-2 border-primary rounded-2xl p-12 text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your form has been submitted successfully. Our Vibe Coders team will contact you 
              on WhatsApp within 24 hours to discuss your premium website.
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => setIsSuccess(false)}
            >
              Submit Another Form
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="onboarding-form" className="py-24 px-4 bg-background scroll-mt-16">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>Get Started</h2>
          <p className={`text-lg text-muted-foreground ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Fill out the form below and we'll get your premium website live in 3–5 days
          </p>
        </div>

        <div className={`bg-card border border-border rounded-2xl p-8 md:p-12 shadow-blue-strong ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">
                      Business Name <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your business name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">
                      Contact Person Name <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        WhatsApp Number <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="+234 xxx xxx xxxx" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="domainPreference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">
                      Domain Preference <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g., I own mydomain.com / I want Websync to buy it" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="brandColors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Brand Colors (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Blue and White, or #4AB3FF" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredStyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">
                      Preferred Style <span className="text-destructive">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a style" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-popover">
                        <SelectItem value="modern">Modern</SelectItem>
                        <SelectItem value="minimal">Minimal</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">
                      Brief About Business & Goals (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your business and what you want to achieve with your website"
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Preferred Deadline (Optional)</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal cursor-pointer">
                        I agree to Websync{" "}
                        <a href="#" className="text-primary hover:underline">
                          Terms
                        </a>{" "}
                        &{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy
                        </a>{" "}
                        <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit & Pay ₦6,999"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
