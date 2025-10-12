import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Heart, Zap, Award, Users, Sparkles } from "lucide-react";

const teamMembers = [
  {
    name: "Adebayo Thompson",
    role: "Founder & Lead Developer",
    image: "",
    initials: "AT",
    bio: "10+ years building digital solutions for Nigerian businesses",
  },
  {
    name: "Chidinma Okonkwo",
    role: "Creative Director",
    image: "",
    initials: "CO",
    bio: "Award-winning designer passionate about beautiful user experiences",
  },
  {
    name: "Emeka Nwosu",
    role: "Backend Specialist",
    image: "",
    initials: "EN",
    bio: "Expert in creating robust, scalable web applications",
  },
  {
    name: "Blessing Adeyemi",
    role: "Customer Success Manager",
    image: "",
    initials: "BA",
    bio: "Dedicated to making every client's experience exceptional",
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
  },
  {
    icon: Sparkles,
    title: "All-Inclusive Service",
    description: "Design, development, hosting, maintenance - we handle everything so you can focus on business.",
  },
];

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal();
  const { ref: teamRef, isVisible: teamVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();
  const { ref: whyRef, isVisible: whyVisible } = useScrollReveal();

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center" ref={heroRef}>
          <Badge className={`mb-4 ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            About Vibe Coders
          </Badge>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${heroVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            We Build Websites That 
            <span className="text-primary"> Grow Businesses</span>
          </h1>
          <p className={`text-xl text-muted-foreground ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Websync by Vibe Coders is on a mission to empower every Nigerian business with a premium online presence, 
            without the premium price tag.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto" ref={missionRef}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${missionVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We believe every business deserves a professional website, not just the big corporations. 
                That's why we created an affordable monthly subscription model that gives you:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Luxury-level design at small business prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>No technical headaches - we handle everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ongoing support and updates included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>You own your domain - full control</span>
                </li>
              </ul>
            </div>
            <div className={`${missionVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Vibe Coders team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto" ref={valuesRef}>
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${valuesVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              Our Values
            </h2>
            <p className={`text-lg text-muted-foreground ${valuesVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              What drives us every single day
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className={`${valuesVisible ? 'animate-scale-in' : 'opacity-0'} border-border`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto" ref={whyRef}>
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${whyVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              Why We're Different
            </h2>
            <p className={`text-lg text-muted-foreground ${whyVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              Not just another web design agency
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`${whyVisible ? 'animate-scale-in' : 'opacity-0'} hover-scale border-border`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto" ref={teamRef}>
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${teamVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              Meet the Vibe Coders
            </h2>
            <p className={`text-lg text-muted-foreground ${teamVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              The passionate team behind your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`${teamVisible ? 'animate-scale-in' : 'opacity-0'} text-center hover-scale border-border`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
