import React from "react";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/case-studies";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Clock, Lightbulb, TrendingUp, Presentation, Layers, ExternalLink } from "lucide-react";

export default function WorkDetail({ params }: { params: { slug: string } }) {
    const study = caseStudies.find((cs) => cs.slug === params.slug);

    if (!study) {
        return notFound();
    }

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Breadcrumb / Back */}
                <Link href="/work" className="inline-flex items-center gap-2 text-slate-500 hover:text-amber mb-12 transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-black uppercase tracking-widest">Back to Projects</span>
                </Link>

                {/* Hero */}
                <div className="mb-20">
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-amber/10 border border-amber/20 text-amber text-[10px] font-black uppercase tracking-widest">
                            {study.category}
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                            {study.industry}
                        </span>
                    </div>
                    <div className="mb-6">
                        <a
                            href={`https://${study.slug}.sitelytc.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                            Open Client Portal <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                    {/* Client Logo */}
                    <div className="mb-8">
                        <div className="group relative inline-flex overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-0 h-36 w-full max-w-[520px] items-center justify-center">
                            {/* Default: radiant Sun + Ketu glow */}
                            <div className="absolute inset-0 scale-125 opacity-80 blur-2xl transition-opacity duration-500 group-hover:opacity-0 logo-glow-sun-ketu" />
                            {/* Hover: Saturn + Ketu mix */}
                            <div className="absolute inset-0 scale-125 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 logo-glow-saturn-ketu" />
                            <div className="absolute inset-0 bg-white/[0.02]" />
                            <div className="absolute inset-0 z-10 p-10">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={study.clientLogo}
                                        alt={`${study.clientName} Logo`}
                                        fill
                                        sizes="(min-width: 1024px) 520px, 90vw"
                                        className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-tight">
                        {study.clientName}: <span className="text-amber/80 italic font-light">{study.slug.replace('-', ' ')}</span>
                    </h1>
                    <p className="text-2xl text-slate-400 leading-relaxed font-light italic">
                        "{study.results[0]}"
                    </p>
                </div>

                {/* Overview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-white/5 py-12 mb-20">
                    <div>
                        <h5 className="text-[10px] font-black text-amber uppercase tracking-widest mb-4">Timeline</h5>
                        <div className="flex items-center gap-3 text-white font-medium">
                            <Clock className="w-4 h-4 text-slate-500" />
                            {study.timeline}
                        </div>
                    </div>
                    <div>
                        <h5 className="text-[10px] font-black text-amber uppercase tracking-widest mb-4">Services</h5>
                        <div className="space-y-1">
                            {study.servicesProvided.map((s, i) => (
                                <div key={i} className="text-white text-sm font-medium">{s}</div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h5 className="text-[10px] font-black text-amber uppercase tracking-widest mb-4">Tech Stack</h5>
                        <div className="flex flex-wrap gap-2">
                            {study.toolsStack.map((tool, i) => (
                                <span key={i} className="text-[10px] text-slate-400 border border-white/10 px-2 py-1 rounded-md">{tool}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Objectives */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <Lightbulb className="w-6 h-6 text-amber" />
                        <h2 className="text-3xl font-display font-black text-white">Project Objectives</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {study.objectives.map((obj, i) => (
                            <div key={i} className="glass p-6 rounded-2xl border border-white/5 flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-amber/10 flex items-center justify-center text-amber shrink-0 mt-1">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <p className="text-slate-300 font-light leading-relaxed">{obj}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tasks I Did */}
                <section className="mb-24 px-8 py-12 bg-white/5 rounded-[3rem] border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 blur-[100px] rounded-full"></div>
                    <div className="flex items-center gap-3 mb-10 relative z-10">
                        <TrendingUp className="w-6 h-6 text-amber" />
                        <h2 className="text-3xl font-display font-black text-white italic">Tasks I Did</h2>
                    </div>
                    <div className="space-y-8 relative z-10">
                        {study.tasksIDid.map((task, i) => (
                            <div key={i} className="group">
                                <div className="flex gap-6">
                                    <span className="text-amber font-display font-black text-2xl opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                                    <div>
                                        <p className="text-xl text-slate-200 font-light leading-relaxed">
                                            {task.split(': ')[1] || task}
                                        </p>
                                        {task.includes(': ') && (
                                            <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest mt-2 block">
                                                Module: {task.split(': ')[0]}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {i !== study.tasksIDid.length - 1 && <div className="ml-14 mt-8 h-px bg-white/5"></div>}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Challenges & Solutions */}
                <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="glass p-10 rounded-[2.5rem] border border-red-500/10">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <Layers className="w-5 h-5 text-red-400" />
                            Challenges
                        </h3>
                        <ul className="space-y-4">
                            {study.challenges.map((c, i) => (
                                <li key={i} className="text-slate-400 text-sm font-light leading-relaxed flex gap-3">
                                    <span className="text-red-400 font-bold">&bull;</span>
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="glass p-10 rounded-[2.5rem] border-amber/10">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <Presentation className="w-5 h-5 text-amber" />
                            Our Solutions
                        </h3>
                        <ul className="space-y-4">
                            {study.solutions.map((s, i) => (
                                <li key={i} className="text-slate-400 text-sm font-light leading-relaxed flex gap-3">
                                    <span className="text-amber font-bold">&bull;</span>
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Results / Metrics */}
                <section className="mb-24 text-center">
                    <h2 className="text-3xl font-display font-black text-white mb-12">Performance Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {study.metrics?.map((m, i) => (
                            <div key={i} className="glass p-8 rounded-3xl border border-amber/10 group hover:border-amber/30 transition-all">
                                <div className="text-4xl font-display font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500">{m.value}</div>
                                <div className="text-amber text-[10px] font-black uppercase tracking-[0.2em] mb-2">{m.label}</div>
                                <div className="text-slate-500 text-xs font-light">{m.description}</div>
                            </div>
                        ))}
                    </div>
                    {!study.metrics && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {study.results.map((r, i) => (
                                <div key={i} className="glass p-8 rounded-3xl border border-white/5">
                                    <p className="text-slate-300 font-light leading-relaxed italic">"{r}"</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* CTA */}
                <div className="mt-32 text-center">
                    <p className="text-slate-500 mb-6 uppercase tracking-[0.3em] text-[10px] font-black">Inspired by this work?</p>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-5 bg-amber text-navy-950 font-black rounded-2xl text-xl hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-1"
                    >
                        Start Your Own Project
                    </Link>
                </div>
            </div>
        </div>
    );
}
