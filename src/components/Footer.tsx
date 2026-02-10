import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github, Instagram, Youtube, Palette } from "lucide-react";

const Footer = () => {
    return (
        <footer className="pt-24 pb-12 bg-navy-950 border-t border-white/5 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div>
                    <Link href="/" className="flex items-center gap-3 mb-6 group">
                        <div className="w-12 h-12 bg-[#FF9E0D] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,158,13,0.3)] group-hover:shadow-[0_0_30px_rgba(255,158,13,0.5)] transition-shadow">
                            <Image
                                src="/favicon.png"
                                alt="SITELYTC Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8 object-contain"
                            />
                        </div>
                        <span className="font-display font-extrabold text-xl tracking-tighter text-white">SITELYTC</span>
                    </Link>
                    <p className="text-slate-500 leading-relaxed mb-6 max-w-sm">
                        Premium digital media and software engineering firm specializing in high-performance digital ecosystems and institutional growth.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://in.linkedin.com/company/sitelytc-digital" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-500 hover:text-amber-500 transition-all hover:scale-110">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/sitelytc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-500 hover:text-amber-500 transition-all hover:scale-110">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://www.youtube.com/@Sitelytcdigitalmedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-500 hover:text-amber-500 transition-all hover:scale-110">
                            <Youtube className="w-5 h-5" />
                        </a>
                        <a href="https://www.behance.net/mayankthakur" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-500 hover:text-amber-500 transition-all hover:scale-110">
                            <Palette className="w-5 h-5" />
                        </a>
                        <a href="https://github.com/smayankthakur" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-500 hover:text-amber-500 transition-all hover:scale-110">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Company</h4>
                    <ul className="space-y-4 text-slate-500 text-sm">
                        <li><Link href="/services" className="hover:text-amber-500 transition-colors">Core Capabilities</Link></li>
                        <li><Link href="/work" className="hover:text-amber-500 transition-colors">Selected Work</Link></li>
                        <li><Link href="/process" className="hover:text-amber-500 transition-colors">Our Blueprint</Link></li>
                        <li><Link href="/about" className="hover:text-amber-500 transition-colors">Vision & Team</Link></li>
                        <li><Link href="/founder" className="hover:text-amber-500 transition-colors">Founder</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Legal & Portals</h4>
                    <ul className="space-y-4 text-slate-500 text-sm">
                        <li><Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link></li>
                        <li><Link href="/portals" className="hover:text-amber-500 transition-colors italic">SITELYTC Portals</Link></li>
                        <li><a href="https://client.sitelytc.com" className="hover:text-amber-500 transition-colors">Client Login</a></li>
                        <li><a href="https://agencies.sitelytc.com" className="hover:text-amber-500 transition-colors">Agency Login</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                <div className="text-amber-500 font-bold">&copy; {new Date().getFullYear()} SITELYTC DIGITAL MEDIA PVT. LTD.</div>
                <div className="flex gap-8">
                    <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-amber-500"></span> GST: APPLIED</span>
                    <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-amber-500"></span> ISO 9001 CERTIFIED</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
