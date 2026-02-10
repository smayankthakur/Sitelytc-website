import React from "react";
import { Search, PenTool, Database, Code, CheckCircle, Rocket, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function ProcessPage() {
    const steps = [
        { title: "Discovery & Audit", icon: <Search />, desc: "Deep dive into your current ecosystem, identifying bottlenecks and opportunities for structural growth.", meta: "01 / Discover" },
        { title: "Architecture", icon: <Database />, desc: "Defining the enterprise-grade infrastructure: wireframing, data modeling, and tech stack selection.", meta: "02 / Plan" },
        { title: "Design Sprints", icon: <PenTool />, desc: "Iterative, high-fidelity UI/UX design that captures the authority of your brand.", meta: "03 / Create" },
        { title: "Engineering", icon: <Code />, desc: "Clean, sustainable code production using modern frameworks.", meta: "04 / Build" },
        { title: "QA & Hardening", icon: <CheckCircle />, desc: "Rigorous testing across devices and environments to ensure enterprise-level stability.", meta: "05 / Verify" },
        { title: "Launch & Scale", icon: <Rocket />, desc: "Continuous support and data-driven optimizations to keep your platform at peak performance.", meta: "06 / Grow" }
    ];

    return (
        <div className="pt-32 pb-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-32 max-w-3xl mx-auto">
                    <span className="text-amber font-black tracking-[0.3em] text-xs uppercase mb-4 block">Our Methods</span>
                    <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-8">
                        The SITELYTC <br /><span className="text-amber italic">Blueprint.</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                        We follow a rigorous, six-phase architectural process designed for reliability and multi-generational scale.
                    </p>
                    <div className="mt-12 animate-bounce">
                        <ArrowDown className="w-8 h-8 text-amber mx-auto" />
                    </div>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-32">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`relative flex flex-col items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Visual Connector Dot */}
                                <div className="absolute left-1/2 top-10 w-4 h-4 rounded-full bg-navy-950 border-2 border-amber -translate-x-1/2 z-10 hidden md:block"></div>

                                <div className="md:w-1/2">
                                    <div className={`glass p-10 md:p-16 rounded-[3rem] border-white/5 group hover:border-amber/20 transition-all duration-500 relative overflow-hidden ${idx % 2 === 0 ? 'md:mr-20' : 'md:ml-20'}`}>
                                        {/* Decorative Number */}
                                        <span className="absolute top-6 right-10 text-8xl font-display font-black text-white/10 italic select-none">0{idx + 1}</span>

                                        <div className="w-16 h-16 bg-amber/10 rounded-2xl flex items-center justify-center text-amber text-3xl mb-8 border border-amber/20 group-hover:rotate-12 transition-transform">
                                            {step.icon}
                                        </div>
                                        <span className="text-[10px] font-black text-amber uppercase tracking-widest mb-4 block">{step.meta}</span>
                                        <h3 className="text-3xl font-display font-black text-white mb-6 leading-tight">{step.title}</h3>
                                        <p className="text-slate-400 font-light leading-relaxed text-lg">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="md:w-1/2 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-48 text-center border-t border-white/5 pt-24">
                    <h2 className="text-3xl font-display font-black text-white mb-8 italic">Ready to start Phase 01?</h2>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-5 bg-amber text-navy-950 font-black rounded-2xl text-xl hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-1"
                    >
                        Initialize Conversation
                    </Link>
                </div>
            </div>
        </div>
    );
}
