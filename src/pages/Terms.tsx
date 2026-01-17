import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Shield, Lock, FileText, Scale, Zap, Info, Clock, HandCoins, ArrowLeft } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Terms = () => {
    const navigate = useNavigate();
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

    return (
        <main className="min-h-screen bg-[#0a0f1a] text-white">
            <Navigation />

            {/* Floating Back Button */}
            <button
                onClick={() => navigate("/")}
                className="fixed left-4 md:left-8 top-28 md:top-32 z-50 p-3 md:p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group shadow-2xl flex items-center gap-3"
            >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors hidden sm:inline">Back</span>
            </button>

            {/* Header Section */}
            <section className="pt-40 pb-20 px-4 relative overflow-hidden" ref={headerRef}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-primary text-xs font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full mb-8 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        <Shield className="w-4 h-4" />
                        Legal Center
                    </div>

                    <h1 className={`text-5xl md:text-7xl font-black mb-6 tracking-tighter ${headerVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                        Terms & <span className="text-primary italic">Privacy Policy</span>
                    </h1>

                    <p className={`text-xl text-white/50 max-w-2xl mx-auto leading-relaxed ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                        Transparent agreements for a long-term digital partnership.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Key Clause - Ownership & Handover */}
                    <div className="bg-[#0D121F]/80 backdrop-blur-xl border border-primary/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Scale className="w-32 h-32 text-primary" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                                    <HandCoins className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold">Ownership & Rights</h2>
                            </div>

                            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                                <p>
                                    At <span className="text-primary font-bold tracking-tight">Websyncdigital</span>, we operate on a subscription-as-a-service model. This allows us to provide world-class design and hosting at an incredibly low monthly rate.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 pt-4">
                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                            <Zap className="w-5 h-5 text-primary" />
                                            Subscription Model
                                        </h3>
                                        <p className="text-sm">
                                            We will build, design, and activate your website once your subscription is active. As long as your payment is current, your website will be online, maintained, and working for your business 24/7.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                            <Lock className="w-5 h-5 text-primary" />
                                            Website Title
                                        </h3>
                                        <p className="text-sm">
                                            Under the subscription plan, you do not own the website source code or the design. You are paying for the service and usage rights of the platform we have built for you.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-2xl">
                                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                                        <Info className="w-5 h-5 text-primary" />
                                        Full Buy-Out Option
                                    </h3>
                                    <p className="text-md text-white/90">
                                        If you wish to obtain full legal rights, ownership of the code, and the designer assets to be given back to you for hosting elsewhere, a one-time hand-over fee will apply. This cost typically ranges from <span className="text-primary font-black">₦350,000 to ₦800,000</span>, depending on the complexity of your site.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Standard Terms */}
                    <div className="grid gap-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold flex items-center gap-3">
                                <Clock className="w-6 h-6 text-primary" />
                                1. Service Activation
                            </h3>
                            <p className="text-white/60 leading-relaxed">
                                Project work begins immediately after the first subscription payment is confirmed. Launch timelines are typically 7–14 days, provided all content is submitted by the client on time.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold flex items-center gap-3">
                                <FileText className="w-6 h-6 text-primary" />
                                2. Privacy & Data
                            </h3>
                            <p className="text-white/60 leading-relaxed">
                                We respect your data. Your business information and client leads generated through the website are strictly yours. We never share your data with third parties. Payments are handled securely through Paystack/Monnify; we do not store your card details.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold flex items-center gap-3">
                                <Info className="w-6 h-6 text-primary" />
                                3. Cancellation
                            </h3>
                            <p className="text-white/60 leading-relaxed">
                                You may cancel your subscription at any time. Upon cancellation, the website will be deactivated at the end of your current billing period. No further charges will occur.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-20 border-t border-white/5">
                        <p className="text-white/30 text-sm">
                            Last updated: January 2026 • © Websyncdigital
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Terms;
