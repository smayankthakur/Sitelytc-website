import React from "react";
import { Users, Building2, ShieldCheck, Lock, Zap, Globe, BarChart3, UserCog } from "lucide-react";

export default function PortalsPage() {
    const portals = [
        {
            title: "Client Portal",
            href: "https://client.sitelytc.com",
            icon: <Users className="w-12 h-12" />,
            tagline: "FOR ACTIVE CLIENTS",
            desc: "Access your real-time project dashboards, approve deliverables, track development milestones, and manage institutional documentation or invoices.",
            features: ["Live Project Tracking", "Asset Approval Flow", "Billing & Invoicing", "Direct Engineering Comms"],
            theme: "sun"
        },
        {
            title: "Agency Portal",
            href: "https://agencies.sitelytc.com",
            icon: <Building2 className="w-12 h-12" />,
            tagline: "FOR PARTNER AGENCIES",
            desc: "A centralized ecosystem for partner collaboration. Manage agency-specific resources, shared client roadmaps, and white-label engineering assets.",
            features: ["Partner Resource Hub", "White-label Assets", "Multi-Project Overview", "Collaborative Roadmaps"],
            theme: "ketu"
        },
        {
            title: "Staff Portal",
            href: "https://staff.sitelytc.com",
            icon: <UserCog className="w-12 h-12" />,
            tagline: "FOR INTERNAL STAFF",
            desc: "Internal operations hub for SITELYTC staff: manage tasks, access SOPs, coordinate deliverables, and track execution across client accounts.",
            features: ["Ops Dashboard", "SOP Library", "Task & QA Flow", "Internal Comms"],
            theme: "staff"
        }
    ];

    const themeClasses = (theme: string) => {
        if (theme === "sun") {
            return {
                glow: "from-sun/20 to-transparent",
                iconWrap: "bg-sun/10 border-amber/20 text-sun shadow-[0_0_30px_rgba(245,158,11,0.1)]",
                tag: "text-sun",
                btn: "bg-sun text-saturn-950 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]",
                check: "text-sun",
            };
        }
        if (theme === "staff") {
            return {
                glow: "from-staff/20 to-transparent",
                iconWrap: "bg-staff/10 border-staff/20 text-staff-light shadow-[0_0_30px_rgba(16,185,129,0.12)]",
                tag: "text-staff-light",
                btn: "bg-staff text-white hover:shadow-[0_0_30px_rgba(16,185,129,0.45)]",
                check: "text-staff-light",
            };
        }
        return {
            glow: "from-ketu/20 to-transparent",
            iconWrap: "bg-ketu/10 border-ketu/20 text-ketu-light shadow-[0_0_30px_rgba(99,102,241,0.1)]",
            tag: "text-ketu-light",
            btn: "bg-ketu text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.45)]",
            check: "text-ketu-light",
        };
    };

    return (
        <div className="pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-sun/10 via-ketu/10 to-staff/10 blur-sm"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-sun font-black tracking-[0.3em] text-xs uppercase mb-4 block underline decoration-sun/20 underline-offset-8">Proprietary Ecosystems</span>
                    <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-8">
                        SITELYTC <span className="text-sun italic">Portals.</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                        Every partnership is backed by our custom-built transparency infrastructure. Log in to your specialized environment below.
                    </p>
                </div>

                {/* Portals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {portals.map((portal, idx) => (
                        (() => {
                            const t = themeClasses(portal.theme);
                            return (
                        <div key={idx} className="group relative">
                            <div className={`absolute -inset-1 bg-gradient-to-r ${t.glow} rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <div className="relative glass p-10 md:p-16 rounded-[3rem] border-white/5 h-full flex flex-col hover:border-white/10 transition-all duration-500">
                                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 border transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${t.iconWrap}`}>
                                    {portal.icon}
                                </div>
                                <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 block ${t.tag}`}>
                                    {portal.tagline}
                                </span>
                                <h2 className="text-4xl font-display font-black text-white mb-6 leading-tight">{portal.title}</h2>
                                <p className="text-slate-400 font-light leading-relaxed text-lg mb-10 italic">
                                    {portal.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-12">
                                    {portal.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-500">
                                            <ShieldCheck className={`w-4 h-4 ${t.check}`} />
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={portal.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`mt-auto w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] ${t.btn}`}
                                >
                                    Open {portal.title} <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                            );
                        })()
                    ))}
                </div>

                {/* Security Info */}
                <div className="mt-32 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 glass p-10 rounded-[2.5rem] border border-white/5 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                    <div className="flex -space-x-4">
                        <div className="w-16 h-16 rounded-full bg-saturn-800 border-2 border-saturn-950 flex items-center justify-center text-white"><Lock className="w-6 h-6" /></div>
                        <div className="w-16 h-16 rounded-full bg-saturn-800 border-2 border-saturn-950 flex items-center justify-center text-white"><Globe className="w-6 h-6" /></div>
                        <div className="w-16 h-16 rounded-full bg-saturn-800 border-2 border-saturn-950 flex items-center justify-center text-white"><BarChart3 className="w-6 h-6" /></div>
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h4 className="text-white font-bold mb-2">Enterprise-Grade Security</h4>
                        <p className="text-sm text-slate-400 font-light">
                            All portal data is encrypted at rest and in transit. Multifactor authentication is required for all administrative accounts.
                        </p>
                    </div>
                    <Zap className="w-8 h-8 text-sun animate-pulse hidden md:block" />
                </div>
            </div>
        </div>
    );
}

function ExternalLink(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 22 3 22 10" />
            <line x1="10" y1="14" x2="22" y2="2" />
        </svg>
    );
}
