import { useState } from "react";
import { Play, Sparkles, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const redirectToPayment = () => {
  window.open("https://paystack.shop/pay/fk5vg2pd9m", "_blank");
};

export const VSLSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-32 px-4 relative overflow-hidden bg-[#0d121f] scroll-mt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Edge Fades */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0f1a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-primary text-xs font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Youtube className="w-4 h-4" />
            Watch Our Magic
          </div>

          <h2 className={`text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            See How Websyncdigital <span className="text-primary italic">Transforms</span> Your Business
          </h2>

          <p className={`text-xl text-white/50 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Watch this short video to learn how you can get a premium website for just <span className="text-white font-bold">₦6,999/month</span> —
            no hidden fees, no stress, just results.
          </p>
        </div>

        {/* Video Player Container */}
        <div className={`relative max-w-4xl mx-auto group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {/* Glassmorphism Border/Shadow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative bg-[#161B22]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-primary/40">
            <div className="relative pt-[56.25%]">
              {!isPlaying ? (
                <div
                  className="absolute inset-0 cursor-pointer group/video"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src="https://img.youtube.com/vi/j50u35dP5II/maxresdefault.jpg"
                    alt="Websyncdigital VSL Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover/video:bg-black/10 transition-colors duration-300" />

                  {/* Big Play Button Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 backdrop-blur-sm group-hover/video:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
                </div>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/j50u35dP5II?autoplay=1&rel=0&modestbranding=1&textcolor=white"
                  title="Websyncdigital Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            variant="hero"
            size="lg"
            className="text-lg py-8 h-auto rounded-2xl bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary border-none shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-500 font-black tracking-wide uppercase px-12"
            onClick={redirectToPayment}
          >
            Get Your Premium Site Now
          </Button>

          <div className="mt-6 flex items-center justify-center gap-2 text-white/30 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Join 50+ businesses already growing with Websyncdigital
          </div>
        </div>
      </div>
    </section>
  );
};
