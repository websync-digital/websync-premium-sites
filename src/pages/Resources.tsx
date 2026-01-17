import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookOpen, TrendingUp, Globe, ArrowRight, Lightbulb, Code, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

const Resources = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

    const guides = [
        {
            category: "Growth Strategy",
            title: "How to Scale a Small Business in Africa with ₦7,000",
            description: "A comprehensive guide to digital leverage, low-cost marketing, and automated systems for Nigerian entrepreneurs.",
            icon: TrendingUp
        },
        {
            category: "Tech Infrastructure",
            title: "Compare Nigerian Payment Gateways in 2026",
            description: "Paystack vs. Monnify vs. Flutterwave. Which one offers the best rates and reliability for your business?",
            icon: Globe
        },
        {
            category: "Web Design",
            title: "Why Lagos Real Estate Agencies Need Modern Websites",
            description: "The property market is shifting online. Learn how a premium website converts 3x more leads than Instagram alone.",
            icon: Code
        }
    ];

    return (
        <main className="min-h-screen bg-[#0a0f1a] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative overflow-hidden" ref={headerRef}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-primary text-xs font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full mb-8 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        <BookOpen className="w-4 h-4" />
                        Knowledge Hub
                    </div>

                    <h1 className={`text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight ${headerVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                        The State of Digital Business <br /><span className="text-primary italic">in Nigeria 2026</span>
                    </h1>

                    <p className={`text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                        Expert insights, deep-dive guides, and strategies to help African businesses dominate the modern web.
                    </p>
                </div>
            </section>

            {/* Featured Pillar Content */}
            <section className="py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="glass-card p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                                    <Rocket className="w-4 h-4" />
                                    Featured Guide
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                    The Complete Blueprint to Digital Dominance
                                </h2>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    Our flagship research paper on how local businesses are leapfrogging competitors using "Liquid Glass" design and automated payment infrastructure.
                                </p>
                                <Button variant="hero" className="rounded-full px-8 py-6">
                                    Read the Guide <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>

                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 h-full flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <Lightbulb className="w-16 h-16 text-primary mx-auto opacity-50" />
                                    <p className="text-sm text-white/40 italic">Coming Soon via Websyncdigital Newsletter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic Clusters */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-primary" />
                        Latest Insights
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {guides.map((guide, index) => (
                            <div key={index} className="bg-[#0D121F] border border-white/5 p-6 rounded-3xl hover:border-primary/30 transition-colors group cursor-pointer">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <guide.icon className="w-6 h-6" />
                                </div>
                                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                                    {guide.category}
                                </div>
                                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {guide.title}
                                </h4>
                                <p className="text-white/50 text-sm leading-relaxed mb-6">
                                    {guide.description}
                                </p>
                                <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Resources;
