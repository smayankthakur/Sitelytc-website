import React from "react";
import { Shield, Sparkles, Anchor, Scale, Users, Award, Briefcase, TrendingUp } from "lucide-react";

export default function AboutPage() {
    const pillars = [
        { title: "Precision", icon: <Scale />, desc: "Every line of code is written with surgical accuracy to ensure institutional stability." },
        { title: "Longevity", icon: <Anchor />, desc: "We build digital architectures designed to endure for generations, not just product cycles." },
        { title: "Innovation", icon: <Sparkles />, desc: "Ketu-inspired creative thinking that finds the most efficient, future-proof paths forward." },
        { title: "Security", icon: <Shield />, desc: "Sun-grade protection for your digital assets, ensuring peace of mind at enterprise scale." }
    ];

    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <section className="text-center mb-32 max-w-4xl mx-auto">
                    <span className="text-sun font-black tracking-[0.3em] text-xs uppercase mb-4 block italic">Digital Legacies</span>
                    <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-8">
                        Engineering the <span className="text-sun">Enduring.</span>
                    </h1>
                    <p className="text-2xl text-slate-400 font-light leading-relaxed italic">
                        "At SITELYTC, we don't just solve problems; we architect systems that stand as monuments to digital excellence."
                    </p>
                </section>

                {/* Pillars Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="glass p-12 rounded-[3.5rem] border border-white/5 hover:-translate-y-4 transition-all duration-500 group text-center">
                            <div className="w-16 h-16 bg-amber/10 rounded-2xl flex items-center justify-center text-sun text-3xl mb-8 mx-auto border border-amber/20 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                                {pillar.icon}
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4">{pillar.title}</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Mission / History */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 italic">
                            The Saturnian <br /><span className="text-sun">Standard.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
                            <p>
                                Founded on the principle that digital presence should be as stable as institutional architecture, SITELYTC has evolved into a premier engineering partner for brands worldwide.
                            </p>
                            <p>
                                We focus on the intersection of structural discipline and innovative growth. Our team of specialists bridges the gap between high-level strategy and pixel-perfect execution.
                            </p>
                            <p>
                                By applying the "Sun-Saturn-Ketu" philosophy, we ensure that every pixel has a clear purpose and every system is built for the long term.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-amber/5 blur-[100px] rounded-full"></div>
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            {[
                                { label: "Successful Handovers", value: "200+", icon: <Briefcase /> },
                                { label: "Client Revenue Influenced", value: "€12M+", icon: <TrendingUp /> },
                                { label: "Institutional Partners", value: "45+", icon: <Users /> },
                                { label: "Industry Awards", value: "12", icon: <Award /> },
                            ].map((stat, i) => (
                                <div key={i} className="glass p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center group hover:bg-white/5 transition-all">
                                    <div className="text-sun mb-4 group-hover:scale-125 transition-transform">{stat.icon}</div>
                                    <div className="text-3xl font-display font-black text-white mb-2">{stat.value}</div>
                                    <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-tight">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Closing */}
                <div className="text-center pt-24 border-t border-white/5">
                    <p className="text-slate-400 max-w-2xl mx-auto italic font-light">
                        "Our vision is to be the silent engine behind the world's most innovative and enduring digital brands."
                    </p>
                </div>
            </div>
        </div>
    );
}
