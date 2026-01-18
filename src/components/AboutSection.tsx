import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Heart, Zap, Award, Users, Sparkles, TrendingUp, Globe, Clock, Star, Quote } from "lucide-react";

// Import profile images
import westProfileImage from "@/assets/gallery/west_profile_updated.jpg";
import kingAustinProfileImage from "@/assets/gallery/kingaustin_profile_updated.jpg";

const stats = [
  { number: "50+", label: "Websites Built", icon: Globe },
  { number: "98%", label: "Client Satisfaction", icon: Star },
  { number: "7-14", label: "Days to Launch", icon: Clock },
  { number: "24/7", label: "Support Available", icon: Users },
];

const teamMembers = [
  {
    name: "West",
    role: "Founder & CEO",
    image: westProfileImage,
    initials: "W",
    bio: "Vibe coder and entrepreneur on a mission to empower Nigerian businesses online",
    expertise: ["Strategy", "Leadership", "Business Development"],
  },
  {
    name: "King Austin",
    role: "Co Founder & COO",
    image: kingAustinProfileImage,
    initials: "KA",
    bio: "Years of building web infrastructures that scale",
    expertise: ["Technical Architecture", "Operations", "Scalability"],
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by your growth, not just pretty designs.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Your success is our success. We're invested in your business.",
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description: "Fast delivery without compromising quality. That's our promise.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Luxury-level websites at affordable monthly rates.",
  },
];

const differentiators = [
  {
    icon: Users,
    title: "Nigerian Business Experts",
    description: "We understand the local market, culture, and what Nigerian customers respond to.",
    highlight: "Local Expertise",
  },
  {
    icon: Sparkles,
    title: "All-Inclusive Service",
    description: "Design, development, hosting, maintenance - we handle everything so you can focus on business.",
    highlight: "Zero Hassle",
  },
];

export const AboutSection = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal();
  const { ref: teamRef, isVisible: teamVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();
  const { ref: whyRef, isVisible: whyVisible } = useScrollReveal();

  return (
    <div id="about" className="relative overflow-hidden bg-[#0a0f1a]">
      {/* Top Fade Gradient Overlay */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0f1a] to-transparent z-10 pointer-events-none" />

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center" ref={heroRef}>
          <div className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-primary text-sm font-medium px-6 py-3 rounded-full mb-6 ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Sparkles className="w-4 h-4" />
            About Vibe Coders
          </div>

          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight ${heroVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            We Build Websites That
            <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent italic">
              Grow Businesses
            </span>
          </h1>

          <p className={`text-xl text-white/60 max-w-3xl mx-auto leading-relaxed ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Websyncdigital by Vibe Coders is on a mission to empower every Nigerian business with a premium online presence,
            without the premium price tag.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4" ref={statsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-primary/50 transition-all duration-500 shadow-xl group ${statsVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2 tracking-tight">{stat.number}</div>
                  <div className="text-xs text-primary font-bold uppercase tracking-widest leading-tight">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto" ref={missionRef}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${missionVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4" />
                Our Mission
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Empowering Nigerian Businesses
                <span className="text-primary italic ml-2">Digitally</span>
              </h2>

              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                We believe every business deserves a professional website, not just the big corporations.
                That's why we created an affordable monthly subscription model that gives you:
              </p>

              <div className="space-y-4">
                {[
                  "Luxury-level design at small business prices",
                  "No technical headaches - we handle everything",
                  "Ongoing support and updates included",
                  "You own your domain - full control"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-white/70 leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${missionVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl opacity-30" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Vibe Coders team collaboration"
                  className="relative rounded-3xl shadow-2xl border border-white/5 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - FOCUS OF REQUEST */}
      <section className="py-32 px-4 relative" ref={valuesRef}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-primary text-xs font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full mb-8 ${valuesVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Heart className="w-4 h-4" />
              Our Core Values
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter ${valuesVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              What Drives <span className="text-primary italic">Everything We Do</span>
            </h2>

            <p className={`text-xl text-white/50 max-w-2xl mx-auto leading-relaxed ${valuesVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              Our values aren't just words — they're the foundation of how we serve our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden bg-[#0D121F]/60 backdrop-blur-xl border border-white/5 hover:border-primary/40 transition-all duration-500 rounded-[2.5rem] p-4 ${valuesVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CardContent className="relative p-8">
                    {/* All icons now use the primary color consistently */}
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-inner">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>

                    <p className="text-white/40 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                      {value.description}
                    </p>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4" ref={teamRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 bg-white/5 border border-white/10 text-primary text-sm font-medium px-6 py-3 rounded-full mb-6 ${teamVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Users className="w-4 h-4" />
              Meet the Founders
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white ${teamVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              The Visionaries Behind
              <span className="text-primary italic ml-3">Websyncdigital</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`group relative h-[500px] overflow-hidden border-none transition-all duration-700 ${teamVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${typeof member.image === "string" ? member.image : (member.image as any).src})` }}
                />

                {/* Dark Gradient Overlay - Lowered for clear faces */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100 translate-y-20 group-hover:translate-y-0 transition-transform duration-700" />

                <CardContent className="relative h-full flex flex-col justify-end p-6 pb-4">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-2 translate-y-4">
                    <Quote className="w-6 h-6 text-primary mb-2 opacity-60" />
                    <p className="text-white/90 text-base leading-snug mb-4 font-medium italic line-clamp-2 md:line-clamp-none">
                      "{member.bio}"
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="h-0.5 w-6 bg-primary rounded-full" />
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight leading-none mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary font-bold text-[10px] uppercase tracking-[0.1em]">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expertise badges - Very tight at the bottom */}
                  <div className="flex flex-wrap gap-1.5 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-white/10 text-white/70 border-white/5 text-[9px] backdrop-blur-md px-2 py-0"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Shared Founders Mission Statement */}
          <div className={`mt-20 text-center max-w-3xl mx-auto ${teamVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8 w-full" />
            <p className="text-lg md:text-2xl text-white/70 font-medium leading-relaxed italic tracking-tight">
              "The founders of Websyncdigital's mission is to develop solutions for Nigerians and Africans as they brainstorm and build new platforms and technologies in the web space."
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 text-primary font-bold uppercase tracking-widest text-xs">
              <span>West</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <span>King Austin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-24 px-4 relative overflow-hidden" ref={whyRef}>
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="text-center mb-16 relative z-30">
            <div className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-primary text-sm font-medium px-6 py-3 rounded-full mb-6 ${whyVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <TrendingUp className="w-4 h-4" />
              Why Choose Us
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white ${whyVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              Not Just Another
              <span className="block mt-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent italic">
                Web Agency
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden bg-[#0D121F]/80 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-2xl ${whyVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CardContent className="relative p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="relative flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border-2 border-[#0D121F] shadow-xl">
                          {item.highlight}
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-white/60 text-lg leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Bottom Fade Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent z-10 pointer-events-none" />
    </div>
  );
};
