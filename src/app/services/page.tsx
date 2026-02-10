import React from "react";
import { ShoppingCart, Cpu, ArrowRight, Code } from "lucide-react";
import Link from "next/link";

const serviceCategories = [
    {
        title: "Software Engineering",
        icon: <Code />,
        items: [
            { name: "Custom Web Applications", desc: "Complex, scalable systems built with modern stacks (React, Next.js, Node)." },
            { name: "API Architecture", desc: "Robust, secure, and well-documented API ecosystems for enterprise integration." },
            { name: "Frontend Development", desc: "High-performance, interactive user interfaces with pixel-perfect precision." }
        ]
    },
    {
        title: "Ecommerce Excellence",
        icon: <ShoppingCart />,
        items: [
            { name: "Shopify Operations", desc: "End-to-end management, from catalog hygiene to complex app integrations." },
            { name: "Conversion Rate Optimization", desc: "Data-driven experiments to reduce friction and boost revenue." },
            { name: "Multi-channel Commerce", desc: "Syncing inventory and sales across global platforms." }
        ]
    },
    {
        title: "Digital Operations",
        icon: <Cpu />,
        items: [
            { name: "Workflow Automation", desc: "Streamlining repetitive business tasks with custom internal tools." },
            { name: "Dashboard & BI", desc: "Real-time data visualization platforms for executive decision making." },
            { name: "System Hardening", desc: "Ensuring your digital infrastructure is secure, fast, and reliable." }
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <span className="text-sun font-black tracking-[0.3em] text-xs uppercase mb-4 block">Our Service Matrix</span>
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8">
                        Digital Engineering <br /><span className="text-sun">Without Compromise.</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                        We provide institutional-grade software engineering and digital operations support for brands that demand perfection.
                    </p>
                </div>

                {/* Categories */}
                <div className="space-y-32">
                    {serviceCategories.map((category, idx) => (
                        <div key={idx} className="relative">
                            <div className="flex flex-col md:flex-row gap-12 items-start">
                                <div className="md:w-1/3 sticky top-32">
                                    <div className="w-20 h-20 bg-sun/10 rounded-3xl flex items-center justify-center text-sun text-4xl mb-6 shadow-[0_0_30px_rgba(245,158,11,0.1)] border border-sun/20">
                                        {category.icon}
                                    </div>
                                    <h2 className="text-4xl font-display font-black text-white mb-4">{category.title}</h2>
                                    <div className="w-12 h-1 bg-sun rounded-full mb-6"></div>
                                    <p className="text-slate-400 font-light">
                                        Specialized solutions focused on structural integrity and scalable growth.
                                    </p>
                                </div>
                                <div className="md:w-2/3 grid grid-cols-1 gap-6">
                                    {category.items.map((item, i) => (
                                        <div key={i} className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-sun/20 transition-all group">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-2xl font-bold text-white group-hover:text-sun transition-colors">{item.name}</h3>
                                                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-sun group-hover:translate-x-1 transition-all" />
                                            </div>
                                            <p className="text-slate-400 font-light leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-32 glass p-12 md:p-20 rounded-[4rem] text-center border-sun/10 relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-sun/10 blur-[100px] rounded-full"></div>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8 relative z-10">
                        Need a Bespoke <span className="text-sun">Solution?</span>
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-5 bg-amber-500 text-gray-900 font-black rounded-2xl text-xl hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-1 relative z-10"
                    >
                        Start Your Project
                    </Link>
                </div>
            </div>
        </div>
    );
}
