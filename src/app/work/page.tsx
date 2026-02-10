"use client";

import React, { useState } from "react";
import Image from "next/image";
import { caseStudies } from "@/content/case-studies";
import { Search, ArrowRight } from "lucide-react";

export default function WorkPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...Array.from(new Set(caseStudies.map(cs => cs.category.split(' + ')[0])))];

    const filteredWork = caseStudies.filter(cs => {
        const matchesSearch = cs.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cs.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "All" || cs.category.includes(activeCategory);
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6">
                        Selected <span className="text-sun">Work.</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
                        A deep dive into our digital engineering portfolio. From high-growth ecommerce to enterprise dashboard architecture.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all border ${activeCategory === cat
                                    ? "bg-amber-500 text-gray-900 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                                    : "glass border-white/10 text-slate-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-sun transition-colors" />
                        <input
                            type="text"
                            placeholder="Search clients..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-sun transition-all"
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredWork.map((study) => (
                        <div
                            key={study.slug}
                            className="glass rounded-[2.5rem] overflow-hidden group border border-white/5 flex flex-col hover:-translate-y-2 transition-all duration-500 relative"
                        >
                            <a
                                href={`https://${study.slug}.sitelytc.com`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full"
                            >
                                <div className="h-64 bg-navy-800/50 flex items-center justify-center relative overflow-hidden p-12">
                                    <div className="absolute inset-0 bg-gradient-to-t from-saturn-950/80 to-transparent opacity-50"></div>
                                    {/* Client Logo */}
                                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                                        <div className="group/logo relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-0 h-36 w-full flex items-center justify-center">
                                            {/* Default: radiant Sun + Ketu glow */}
                                            <div className="absolute inset-0 scale-125 opacity-80 blur-2xl transition-opacity duration-500 group-hover/logo:opacity-0 logo-glow-sun-ketu" />
                                            {/* Hover: Saturn + Ketu mix */}
                                            <div className="absolute inset-0 scale-125 opacity-0 blur-2xl transition-opacity duration-500 group-hover/logo:opacity-100 logo-glow-saturn-ketu" />
                                            <div className="absolute inset-0 bg-white/[0.02]" />
                                            <div className="absolute inset-0 z-10 p-8">
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={study.clientLogo}
                                                        alt={`${study.clientName} Logo`}
                                                        fill
                                                        sizes="(min-width: 1024px) 360px, 80vw"
                                                        className="object-contain opacity-90 group-hover/logo:opacity-100 transition-opacity"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 right-6 w-10 h-10 bg-sun text-saturn-950 rounded-full flex items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="p-10 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-2xl font-bold text-white group-hover:text-sun transition-colors leading-tight">{study.clientName}</h4>
                                    </div>
                                    <p className="text-sun text-[10px] font-black uppercase tracking-widest mb-4">{study.category}</p>
                                    <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 line-clamp-2 italic">
                                        "{study.results[0]}"
                                    </p>
                                    <div className="mt-auto flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Deep Dive <ArrowRight className="w-4 h-4 text-sun" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {filteredWork.length === 0 && (
                    <div className="py-32 text-center glass rounded-3xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">No results found</h3>
                        <p className="text-slate-400">Try adjusting your filters or search query.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
