import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Chioma Okafor",
    role: "Founder, Luxe Fabric House (Lagos)",
    image: "/testimonials/chioma.png",
    initials: "CO",
    content: "I used to rely only on Instagram DMs. Now, my customers in Abuja and Port Harcourt order directly from my website. Websyncdigital made it so easy!",
    rating: 5,
  },
  {
    name: "Tunde Adebayo",
    role: "Owner, Naija Spice Kitchen (Ikeja)",
    image: "/testimonials/tunde.png",
    initials: "TA",
    content: "The online food ordering integration is a game changer. We no longer mix up orders during rush hour. Sales are up 300% just like they promised.",
    rating: 5,
  },
  {
    name: "Blessing Eze",
    role: "Director, Glitz & Glamour Spa (Lekki)",
    image: "/testimonials/blessing.png",
    initials: "BE",
    content: "My clients love the booking feature. No more back-and-forth calls. The site looks premium, just like my salon. Best investment this year!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 px-4 bg-background scroll-mt-20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            What Our Clients Say
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Join hundreds of Nigerian businesses already growing with Websyncdigital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`${isVisible ? 'animate-scale-in' : 'opacity-0'} hover-scale border-border`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
