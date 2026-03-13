import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chioma Okafor",
    role: "Founder, Luxe Fabric House (Lagos)",
    initials: "CO",
    content: "I used to rely only on Instagram DMs. Now, my customers in Abuja and Port Harcourt order directly from my website. Websyncdigital made it so easy!",
    rating: 5,
  },
  {
    name: "Tunde Adebayo",
    role: "Owner, Naija Spice Kitchen (Ikeja)",
    initials: "TA",
    content: "The online food ordering integration is a game changer. We no longer mix up orders during rush hour. Sales are up 300% just like they promised.",
    rating: 5,
  },
  {
    name: "Blessing Eze",
    role: "Director, Glitz & Glamour Spa (Lekki)",
    initials: "BE",
    content: "My clients love the booking feature. No more back-and-forth calls. The site looks premium, just like my salon. Best investment this year!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-[#0A0F1A] scroll-mt-20">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-primary text-xs font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full mb-8 shadow-lg shadow-primary/10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Star className="w-4 h-4 fill-primary" />
            Client Success
          </div>

          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Trusted by <span className="text-primary italic">Visionaries</span>
          </h2>
          <p className={`text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Join hundreds of Nigerian businesses already scaling with Websyncdigital's premium infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Animated Border Gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative h-full bg-[#0D121F]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 flex flex-col">
                {/* Large Background Quote Icon */}
                <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5 rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:text-primary/10 group-hover:scale-110 pointer-events-none" />

                {/* Rating */}
                <div className="flex gap-1 mb-8 relative z-10">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Footer (Author Info) */}
                <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/10 mt-auto">
                  <Avatar className="w-14 h-14 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white font-bold text-lg">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-white text-lg tracking-tight group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-white/50 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
