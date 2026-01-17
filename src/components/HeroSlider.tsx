import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroLaptop from "@/assets/hero-laptop.jpg";
import heroBusinessOwner from "@/assets/hero-business-owner.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";
import heroTeam from "@/assets/hero-team.jpg";

const slides = [
  { image: heroLaptop, alt: "Professional working on laptop in modern workspace" },
  { image: heroBusinessOwner, alt: "Business professional with laptop" },
  { image: heroMobile, alt: "Modern office workspace interior" },
  { image: heroTeam, alt: "Mountain hiking adventure landscape" },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 3000);

    return () => clearInterval(timer);
  }, []);



  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const redirectToPayment = () => {
    window.open("https://paystack.shop/pay/fk5vg2pd9m", "_blank");
  };

  const openWhatsApp = () => {
    const phoneNumber = "+2347043576814"; // Replace with actual WhatsApp number
    const message = "Hi, I'd like to know more about Websyncdigital";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover ken-burns"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-sm">
            Premium Websites. One Small Monthly Fee.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Get a luxury-level website for just ₦6,999/month. Built and managed by our Vibe Coders team.
            You own your domain — we handle everything else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-12 py-7 h-auto animate-fade-in bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary border-none shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-500"
              onClick={redirectToPayment}
            >
              Get Started for ₦6,999/month
            </Button>
            <Button
              size="lg"
              className="text-lg px-8 py-7 h-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 animate-fade-in transition-all duration-500 hover:scale-105"
              onClick={openWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-3 text-[#25D366]" />
              Chat on WhatsApp
            </Button>
          </div>
          <p className="text-sm text-white/70 animate-fade-in font-medium tracking-wide mt-2">
            No setup fee. No stress. Just results.
          </p>
        </div>
      </div>



      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? "bg-primary-foreground w-12"
              : "bg-primary-foreground/50 hover:bg-primary-foreground/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Bottom Fade Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0f1a] to-transparent z-10 pointer-events-none" />
    </section>
  );
};
