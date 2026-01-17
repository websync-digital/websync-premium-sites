import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

// Import local images
import glamBeautyImage from "@/assets/gallery/de_angelica_redefine_your_look.jpeg";
import restaurantImage from "@/assets/gallery/bottom_pot_where flavour_meet_passion.jpeg";
import fashionImage from "@/assets/gallery/profile_west.jpeg";
import fitnessImage from "@/assets/gallery/victoryHub_making_your_home_ownership_a_reality.jpeg";
import energyImage from "@/assets/gallery/cworth_energy_poweirng_a_cleaner_future_with_cworth_energy.jpeg";
import agricultureImage from "@/assets/gallery/johnrep_sustainable_agriculture.jpeg";

const portfolioItems = [
  {
    title: "De Angelica Beauty Studio",
    category: "Beauty & Salon",
    description: "Redefine your look with modern booking website and online appointment system",
    image: glamBeautyImage,
    websiteUrl: "https://www.deangelika.com.ng/",
    tags: ["E-commerce", "Booking System"],
  },
  {
    title: "Bottom Pot Restaurant",
    category: "Food & Restaurant",
    description: "Where flavour meets passion - Full-featured restaurant website with menu and delivery integration",
    image: restaurantImage,
    websiteUrl: "https://bottompot-eats.vercel.app/",
    tags: ["Restaurant", "Online Orders"],
  },

  {
    title: "Cworth Energy Solutions",
    category: "Clean Energy",
    description: "Powering a cleaner future with sustainable energy solutions and modern web presence",
    image: energyImage,
    websiteUrl: "https://www.cworthsolarenergy.com.ng",
    tags: ["Energy", "Sustainability"],
  },
  {
    title: "Johnrep Agribusiness",
    category: "Agriculture",
    description: "Sustainable agriculture solutions with modern farming techniques and online marketplace",
    image: agricultureImage,
    websiteUrl: "https://johrep-vision-forge.vercel.app/",
    tags: ["Agriculture", "Marketplace"],
  },
];

export const PortfolioSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-32 px-4 relative overflow-hidden" id="portfolio">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-primary text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Our Success Stories
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Real Results. <span className="text-primary">Real Businesses.</span>
          </h2>
          <p className={`text-xl text-white/60 max-w-2xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            See how Nigerian businesses like yours are growing with Websyncdigital's premium digital craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <Card className="bg-[#0D121F]/40 backdrop-blur-xl border border-white/5 group-hover:border-primary/40 transition-all duration-500 rounded-[2rem] overflow-hidden shadow-2xl h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={typeof item.image === "string" ? item.image : (item.image as any).src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D121F] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Floating category badge on image */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-4 py-1.5 rounded-full text-xs font-medium">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Icon link overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-10 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-[10px] font-black uppercase tracking-widest text-primary/80 border border-primary/20 px-2.5 py-1 rounded-md bg-primary/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-white/60 text-lg leading-relaxed mb-8 flex-1">
                    {item.description}
                  </p>

                  <div className="pt-6 border-t border-white/5 flex items-center text-sm font-bold text-primary group-hover:gap-2 transition-all duration-300">
                    Visit Project <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-white/40 text-sm mb-4 font-medium uppercase tracking-[0.2em]">Ready to be next?</p>
            <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
