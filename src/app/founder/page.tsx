"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Linkedin, Shield, Star, Award, Heart, Play, X } from "lucide-react";

export default function FounderPage() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const values = [
        { title: "Institutional Reliability", icon: <Shield />, desc: "Building systems that don't just work today, but scale for decades. We prioritize Saturnian discipline in every line of code." },
        { title: "Sun-Grade Excellence", icon: <Star />, desc: "Every pixel and every function must shine with clarity and purpose. We don't settle for 'good enough'." },
        { title: "Ketu-Driven Innovation", icon: <Award />, desc: "Breaking conventional boundaries to find the most efficient, future-proof paths for our clients." },
        { title: "Partnership First", icon: <Heart />, desc: "We aren't just a vendor; we are an extension of your board and your engineering team." }
    ];

    return (
        <div className="pt-32 pb-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Story Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-cobalt/20 rounded-[4rem] rotate-3 group-hover:rotate-6 transition-transform duration-700 blur-2xl opacity-50"></div>
                        <div className="relative glass rounded-[3rem] border-white/5 group-hover:border-amber-500/30 transition-all duration-700 overflow-hidden aspect-[594/915] max-w-[500px]">
                            {/* Founder Image */}
                            <div className="absolute inset-0 bg-navy-900">
                                <Image
                                    src="/founder/Founder.png"
                                    alt="Mayank Thakur - Founder"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent"></div>
                            </div>
                            {/* Content overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6">
                                <p className="text-white text-lg font-light italic leading-relaxed max-w-lg text-center mb-4">
                                    "Precision is not just a goal; it's our identity."
                                </p>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setIsVideoOpen(true)}
                                        className="w-10 h-10 rounded-full bg-amber-500 text-gray-900 flex items-center justify-center hover:scale-105 transition-all"
                                    >
                                        <Play className="w-4 h-4 fill-current" />
                                    </button>
                                    <a href="https://www.linkedin.com/in/mayank-thakur-438101138/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition-all">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-sun font-black tracking-[0.3em] text-xs uppercase mb-4 block">The Founder's Vision</span>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 italic">
                            Building for the <br /><span className="text-sun">Long-Term.</span>
                        </h1>
                        <div className="space-y-6 text-xl text-slate-400 font-light leading-relaxed">
                            <p>
                                I started SITELYTC with a singular focus: to create digital legacies. In a world of disposable software and rapid updates, we specialize in building enduring architectures.
                            </p>
                            <p>
                                Inspired by the cosmic principles of Saturn (discipline), Sun (excellence), and Ketu (innovation), we approach every project as a piece of digital craftsmanship.
                            </p>
                            <p>
                                Whether we are scaling an ecommerce store to seven figures or architecting a global tour management system, our standard remains high: reliability without compromise.
                            </p>
                        </div>
                        <div className="mt-12 flex flex-wrap gap-4">
                            <Link
                                href="https://wa.me/917291849403"
                                className="px-8 py-4 bg-amber-500 text-gray-900 font-black rounded-xl hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center gap-3"
                            >
                                <MessageCircle className="w-5 h-5" /> Book a Strategy Call
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Values Grid */}
                <section className="py-24 mb-32 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-white/5"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {values.map((v, i) => (
                            <div key={i} className="glass p-10 rounded-[2.5rem] border border-white/5 hover:-translate-y-4 transition-all duration-500 group">
                                <div className="w-12 h-12 rounded-xl bg-sun/10 flex items-center justify-center text-sun mb-6 group-hover:scale-110 transition-transform">
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{v.title}</h3>
                                <p className="text-slate-400 text-sm font-light leading-relaxed">
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Closing Thought */}
                <section className="max-w-4xl mx-auto text-center glass p-12 md:p-24 rounded-[4rem] border-sun/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sun/10 blur-[60px] rounded-full"></div>
                    <blockquote className="text-3xl md:text-5xl font-display font-black text-white italic mb-12">
                        "Our goal is not just to build websites; it's to build institutional authority in the digital sphere."
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-px bg-sun/40 mb-6"></div>
                        <p className="text-sun font-black uppercase tracking-[0.4em] text-xs">Mayank Thakur</p>
                        <p className="text-slate-400 text-[10px] mt-2 font-bold tracking-widest uppercase">Founder, SITELYTC</p>
                    </div>
                </section>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsVideoOpen(false)}
                    />
                    <div className="relative w-full max-w-4xl bg-navy-950 rounded-2xl overflow-hidden shadow-2xl">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>
                        <video
                            controls
                            autoPlay
                            className="w-full aspect-video"
                        >
                            <source src="/founder/intro.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}
