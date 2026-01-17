import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Will Websyncdigital have access to my money?",
    answer:
      "No. Websyncdigital only receives your subscription payment after you authorize it securely through your bank.",
  },
  {
    question: "Why do I need to verify with BVN?",
    answer:
      "BVN is used only to confirm identity. It cannot be used to debit your account.",
  },
  {
    question: "Will this debit my account automatically?",
    answer:
      "Yes — once monthly for your subscription, until you cancel.",
  },
  {
    question: "Is my bank supported?",
    answer:
      "All major Nigerian banks supported by Monnify.",
  },
];

const FAQSection = () => {
  return (
    <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <h2 className="section-title flex items-center gap-2">
        <HelpCircle className="w-5 h-5 text-primary" />
        How Monnify Direct Debit Works
      </h2>
      
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border/50 rounded-xl px-4 bg-card/50 data-[state=open]:bg-secondary/30 transition-colors"
          >
            <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4 hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
