import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, TrendingUp } from "lucide-react";

const portfolioItems = [
  {
    title: "Glam Beauty Studio",
    category: "Beauty & Salon",
    description: "Modern booking website with online appointment system",
    metrics: [
      { label: "Online Bookings", value: "+400%" },
      { label: "Monthly Revenue", value: "+250%" },
    ],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
    tags: ["E-commerce", "Booking System"],
  },
  {
    title: "Naija Bites Restaurant",
    category: "Food & Restaurant",
    description: "Full-featured restaurant website with menu and delivery integration",
    metrics: [
      { label: "Online Orders", value: "+300%" },
      { label: "New Customers", value: "+180%" },
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    tags: ["Restaurant", "Online Orders"],
  },
  {
    title: "Trendz Fashion Hub",
    category: "Fashion & Retail",
    description: "Elegant e-commerce platform with inventory management",
    metrics: [
      { label: "Sales Increase", value: "+500%" },
      { label: "Site Traffic", value: "+320%" },
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    tags: ["E-commerce", "Fashion"],
  },
  {
    title: "Elite Gym & Fitness",
    category: "Health & Fitness",
    description: "Interactive fitness center website with class schedules",
    metrics: [
      { label: "Memberships", value: "+220%" },
      { label: "Class Bookings", value: "+350%" },
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    tags: ["Fitness", "Membership"],
  },
];

export const PortfolioSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 px-4 bg-secondary/30 scroll-mt-20" id="portfolio">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Real Results. Real Businesses.
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            See how Nigerian businesses like yours are growing with Websync
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <a 
              key={index}
              href="https://www.tesla.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className={`group overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'} hover-scale border-border cursor-pointer`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="border-t border-border pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    {item.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-2xl font-bold text-primary">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
