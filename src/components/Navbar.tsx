"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { caseStudies } from "@/content/case-studies";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeClient, setActiveClient] = useState(caseStudies[0]);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work", hasMega: true },
        { name: "Services", href: "/services" },
        { name: "Videos", href: "/videos" },
        { name: "Process", href: "/process" },
    ];

    const categories = Array.from(new Set(caseStudies.map(cs => cs.category.split(' + ')[0])));

    return (
        <header
            className={`fixed top-0 w-full z-[1000] transition-all duration-500 py-4 px-6 ${isScrolled ? "py-2" : "py-4"
                }`}
        >
            <div className={`max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-6 py-3 relative transition-all duration-500 border border-white/5 ${isScrolled ? "glass backdrop-blur-md bg-white/10" : "bg-white/5"
                }`}>
                <Link href="/" className="flex items-center group z-10">
                    <div className="relative h-10 flex items-center">
                        <Image
                            src="/logo.png"
                            alt="SITELYTC Logo"
                            width={140}
                            height={40}
                            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-slate-400 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => link.hasMega && setIsMegaMenuOpen(true)}
                            onMouseLeave={() => link.hasMega && setIsMegaMenuOpen(false)}
                        >
                            <Link
                                href={link.href}
                                className={`nav-link py-2 flex items-center gap-1 hover:text-white ${pathname === link.href ? "text-white after:w-full" : ""
                                    }`}
                            >
                                {link.name}
                                {link.hasMega && <ChevronDown className="w-4 h-4" />}
                            </Link>

                            {/* Mega Menu */}
                            {link.hasMega && (
                                <div
                                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90vw] max-w-6xl bg-saturn-950/98 backdrop-blur-xl rounded-3xl p-8 grid grid-cols-12 gap-8 shadow-2xl border-white/10 overflow-hidden transition-all duration-200 ease-out ${isMegaMenuOpen
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 -translate-y-2 pointer-events-none"
                                        }`}
                                >
                                    {/* Left: Client Logo Grid */}
                                    <div className="col-span-4 grid grid-cols-2 gap-4">
                                        <h4 className="col-span-2 text-xs font-black text-amber mb-2">Selected Clients</h4>
                                        {caseStudies.map((cs) => (
                                            <div
                                                key={cs.slug}
                                                onMouseEnter={() => setActiveClient(cs)}
                                                className={`group relative overflow-hidden p-0 h-16 rounded-xl border border-white/5 bg-white/5 cursor-pointer transition-all duration-300 flex items-center justify-center hover:scale-105 hover:border-amber/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] ${activeClient?.slug === cs.slug ? "border-amber bg-amber/10 scale-105 shadow-[0_0_20px_rgba(245,158,11,0.2)]" : ""
                                                    }`}
                                            >
                                                {/* Default: radiant Sun + Ketu glow */}
                                                <div className="absolute inset-0 scale-125 opacity-80 blur-2xl transition-opacity duration-500 group-hover:opacity-0 logo-glow-sun-ketu" />
                                                {/* Hover: Saturn + Ketu mix */}
                                                <div className="absolute inset-0 scale-125 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 logo-glow-saturn-ketu" />
                                                <div className="absolute inset-0 bg-white/[0.02]" />
                                                <Image
                                                    src={cs.clientLogo}
                                                    alt={`${cs.clientName} logo`}
                                                    fill
                                                    sizes="(min-width: 1024px) 220px, 40vw"
                                                    className="relative z-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity p-2"
                                                />
                                            </div>
                                        ))}
                                        <Link href="/work" className="col-span-2 mt-4 flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors group/link">
                                            View all projects <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>

                                    {/* Middle: Quick Filters */}
                                    <div className="col-span-3 border-l border-white/10 pl-8">
                                        <h4 className="text-xs font-black text-amber mb-4">Core Focus</h4>
                                        <ul className="space-y-4">
                                            {categories.map((cat) => (
                                                <li key={cat}>
                                                    <Link href={`/work?category=${encodeURIComponent(cat)}`} className="text-slate-200 hover:text-amber transition-colors text-sm font-bold flex items-center group/cat">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover/cat:bg-amber group-hover/cat:scale-125 transition-all"></span>
                                                        {cat}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right: Preview Panel */}
                                    <div className="col-span-5 bg-navy-900/40 rounded-2xl p-6 border border-white/5 relative overflow-hidden group/preview">
                                        {/* Background Glow */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber/10 blur-[80px] rounded-full"></div>

                                        <div className="relative z-10 h-full flex flex-col">
                                            <span className="text-[10px] font-black text-amber uppercase tracking-widest mb-2">{activeClient?.category}</span>
                                            <h3 className="text-2xl font-display font-black text-white mb-3">{activeClient?.clientName}</h3>
                                            <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2 italic">
                                                "{activeClient?.results[0]}"
                                            </p>
                                            {/* Client Logo */}
                                            <div className="mb-4">
                                                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-0 h-12 w-full max-w-[240px] flex items-center justify-center">
                                                    {/* Default: radiant Sun + Ketu glow */}
                                                    <div className="absolute inset-0 scale-125 opacity-80 blur-2xl transition-opacity duration-500 group-hover:opacity-0 logo-glow-sun-ketu" />
                                                    {/* Hover: Saturn + Ketu mix */}
                                                    <div className="absolute inset-0 scale-125 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 logo-glow-saturn-ketu" />
                                                    <div className="absolute inset-0 bg-white/[0.02]" />
                                                    <Image
                                                        src={activeClient?.clientLogo || "/logo.png"}
                                                        alt={`${activeClient?.clientName} Logo`}
                                                        fill
                                                        sizes="240px"
                                                        className="relative z-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity p-2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <Link
                                                    href={`https://${activeClient?.slug}.sitelytc.com`}
                                                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber text-navy-950 rounded-xl font-bold text-xs hover:bg-amber-light transition-all transform hover:scale-105"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    View Case Study <ArrowRight className="w-3 h-3" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right side - Contact Button */}
                <div className="hidden lg:block z-10">
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-amber text-navy-950 rounded-full font-bold hover:bg-amber-light transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                    >
                        Hire Us
                    </Link>
                </div>

                {/* Mobile Menu Btn */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden text-2xl text-white"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav */}
                <div
                    className={`absolute top-20 left-0 right-0 glass rounded-2xl p-8 flex-col gap-6 text-center lg:hidden transition-all duration-300 ${isMobileMenuOpen ? "flex opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-4"
                        }`}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xl font-display font-bold hover:text-amber transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="text-xl font-display font-bold text-amber underline underline-offset-8"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
