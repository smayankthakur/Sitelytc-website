"use client";

import React, { useState } from "react";
import { Mail, Calendar, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "E-commerce Ops",
        budget: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setError(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

            if (!res.ok || !data?.ok) {
                throw new Error(data?.error || "Failed to submit form");
            }

            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                projectType: "E-commerce Ops",
                budget: "",
                message: ""
            });
        } catch (err) {
            setStatus("error");
            setError(err instanceof Error ? err.message : "Something went wrong");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-32 pb-24 px-6 relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-amber/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
                {/* Left Column: Info */}
                <div className="lg:col-span-5">
                    <span className="text-amber font-black tracking-[0.3em] text-xs uppercase mb-4 block">Connectivity</span>
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8">
                        Ready to <br /><span className="text-amber">Scale?</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
                        Whether you have a specific project in mind or just want to explore possibilities, our team is ready to architect your next success.
                    </p>

                    <div className="space-y-10">
                        {[
                            { label: "Email Us", value: "hello@sitelytc.com", icon: <Mail />, href: "mailto:hello@sitelytc.com" },
                            { label: "WhatsApp Direct", value: "+91 72918 49403", icon: <MessageCircle />, href: "https://wa.me/917291849403" },
                            { label: "Schedule a Call", value: "Book on Calendly", icon: <Calendar />, href: "https://calendly.com/sitelytc/sitelytc-meet" }
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="flex items-start gap-6 group"
                            >
                                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-amber text-2xl group-hover:scale-110 group-hover:bg-amber group-hover:text-navy-950 transition-all duration-500">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">{item.label}</h4>
                                    <span className="text-slate-400 hover:text-amber transition-colors font-medium">{item.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-20 p-8 glass rounded-3xl border-amber/20 bg-amber/10">
                        <p className="text-slate-400 text-sm font-light italic">
                            * Our initial consultations are strictly focused on architectural viability and strategic growth paths. We do not provide generic quotes without a discovery audit.
                        </p>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="lg:col-span-7">
                    <div className="glass p-10 md:p-14 rounded-[3rem] border-white/5 relative overflow-hidden">
                        {status === "success" ? (
                            <div className="py-20 text-center animate-in fade-in zoom-in duration-700">
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-8 border border-green-500/20">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-display font-black text-white mb-4">Message Transmitted.</h3>
                                <p className="text-slate-400 font-light mb-10">
                                    Our strategic team has received your brief and will respond within 24 business hours.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="px-8 py-3 bg-amber-500 text-gray-900 font-bold rounded-xl transition-all text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                                >
                                    Send Another Brief
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {status === "error" && (
                                    <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
                                        {error || "Submission failed. Please try again."}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                                        <input
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sun transition-all focus:bg-white/[0.08]"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                                        <input
                                            required
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sun transition-all focus:bg-white/[0.08]"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Project Type</label>
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber transition-all"
                                        >
                                            <option>E-commerce Ops</option>
                                            <option>Web Application</option>
                                            <option>UI/UX Revamp</option>
                                            <option>System Operations</option>
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Target Budget</label>
                                        <input
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sun transition-all focus:bg-white/[0.08]"
                                            placeholder="e.g. EUR 20k - EUR 50k"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Mission Brief (Message)</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white h-40 focus:outline-none focus:border-sun transition-all focus:bg-white/[0.08] resize-none"
                                        placeholder="Tell us about your architectural goals..."
                                    ></textarea>
                                </div>

                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className={`w-full py-5 bg-amber text-navy-950 font-black rounded-2xl text-xl transition-all flex items-center justify-center gap-3 relative overflow-hidden ${status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:scale-[1.01]"
                                        }`}
                                >
                                    {status === "loading" ? (
                                        <div className="flex items-center gap-3">
                                            <div className="w-5 h-5 border-4 border-navy-950 border-t-transparent rounded-full animate-spin"></div>
                                            Encrypting...
                                        </div>
                                    ) : (
                                        <>
                                            Send Mission Brief <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Google Map */}
                    <div className="mt-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0123456789!2d77.1!3d28.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMicsTU0!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                            title="SITELYTC Location"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
