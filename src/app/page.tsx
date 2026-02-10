import React from "react";
import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { ArrowRight, Rocket, ShoppingCart, Box, Cpu, ShieldCheck, Zap, ChevronDown } from "lucide-react";

export default function Home() {
  const services = [
    { title: "Custom Web Apps", icon: <Rocket />, desc: "Scalable, enterprise-grade applications built with React, Node, and modern cloud architectures." },
    { title: "E-commerce Ops", icon: <ShoppingCart />, desc: "End-to-end Shopify and custom commerce solutions focused on conversion optimization and UX." },
    { title: "UI/UX Design", icon: <Box />, desc: "High-fidelity interfaces that prioritize usability while maintaining a premium aesthetic feel." },
    { title: "Digital Operations", icon: <Cpu />, desc: "Streamlining business workflows with custom automation, CRM integrations, and toolkits." },
    { title: "Security & SEO", icon: <ShieldCheck />, desc: "Fortifying your presence while ensuring peak visibility on global search engines." },
    { title: "Growth Strategy", icon: <Zap />, desc: "Data-driven roadmaps to scale your digital presence from startup to market leader." },
  ];

  const primaryStudy = caseStudies[0];
  const secondaryStudies = caseStudies.slice(1, 4);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6 hero-glow pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-ketu text-ketu-light text-[10px] font-black uppercase tracking-[0.2em] bg-ketu/10">
            Enterprise Ready & Award-Grade
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-black mb-8 leading-[1.1] text-white">
            Precision Digital <span className="text-sun">Architecture</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            SITELYTC builds premium digital ecosystems. From high-conversion e-commerce to complex enterprise dashboards, we engineer excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/work"
              className="w-full sm:w-auto px-10 py-5 bg-amber-500 text-gray-900 font-black rounded-xl text-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-amber-500 text-gray-900 font-bold rounded-xl text-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1"
            >
              Start a Conversation
            </Link>
          </div>
          <div className="mt-20 animate-bounce text-slate-400">
            <ChevronDown className="w-8 h-8 mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Matrix */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6 italic">
                Core Capabilities.
              </h2>
              <p className="text-slate-400 text-lg font-light">
                We bridge the gap between Saturnian structure and Ketu-driven innovation to deliver Sun-grade results.
              </p>
            </div>
            <div className="text-sun font-black tracking-[0.3em] text-xs uppercase border-b-2 border-sun/20 pb-2">
              Services Matrix / 01
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="glass p-10 rounded-[2.5rem] border border-white/5 transition-all card-hover group"
              >
                <div className="w-16 h-16 bg-saturn-800 rounded-2xl flex items-center justify-center text-sun text-3xl mb-8 group-hover:bg-sun group-hover:text-saturn-900 transition-all duration-500 group-hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-24 bg-navy-900/40 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="font-display text-4xl md:text-7xl font-black text-white mb-6">
              Selected <span className="text-sun">Work</span>
            </h2>
            <div className="w-24 h-1.5 bg-sun mb-8 rounded-full"></div>
            <p className="text-slate-400 text-xl max-w-2xl italic font-light">
              Proof in the code. A curated look at our recent digital engineering projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Main Featured Item */}
            {primaryStudy ? (
              <div className="md:col-span-2 glass rounded-[3rem] overflow-hidden group border border-white/5 relative h-full">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="aspect-square md:aspect-auto bg-gradient-to-br from-saturn-800 to-saturn-950 flex items-center justify-center p-20 relative overflow-hidden">
                    {/* Abstract pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] border-[40px] border-sun rounded-full"></div>
                    </div>
                    <div className="text-center relative z-10">
                      <div className="w-24 h-24 bg-sun/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-sun/20 group-hover:rotate-12 transition-transform duration-700">
                        <ShoppingCart className="w-12 h-12 text-sun" />
                      </div>
                      <h3 className="text-4xl font-display font-black text-white">{primaryStudy.clientName}</h3>
                      <p className="text-sun uppercase tracking-[0.3em] text-[10px] font-black mt-4">{primaryStudy.category}</p>
                    </div>
                  </div>
                  <div className="p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5">
                    <p className="text-slate-300 text-xl mb-8 leading-relaxed font-light">
                      {primaryStudy.results[0]}
                    </p>
                    <div className="flex gap-4 mb-10">
                      {primaryStudy.metrics?.slice(0, 2).map((m, i) => (
                        <div key={i} className="px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-sun font-black text-xl">{m.value}</div>
                          <div className="text-[10px] uppercase tracking-widest text-slate-400">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/work/${primaryStudy.slug}`}
                      className="inline-flex items-center gap-3 text-sun font-black group-hover:gap-6 transition-all text-lg"
                    >
                      Explore Case Study <ArrowRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="md:col-span-2 glass rounded-[3rem] overflow-hidden border border-white/5 p-12 flex items-center justify-center text-slate-400">
                No case studies are configured yet.
              </div>
            )}

            {/* Other Featured Items */}
            {secondaryStudies.map((study) => (
              <div key={study.slug} className="glass rounded-[2.5rem] overflow-hidden group border border-white/5 flex flex-col">
                <div className="h-64 bg-saturn-800/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-50"></div>
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-sun group-hover:scale-110 transition-all duration-500 border border-white/10 z-10">
                    <Rocket className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <h4 className="text-2xl font-bold text-white mb-2">{study.clientName}</h4>
                  <p className="text-slate-400 text-sm mb-8 font-medium tracking-wide">{study.category}</p>
                  <Link
                    href={`/work/${study.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-sun font-bold group-hover:gap-4 transition-all"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-4 px-12 py-5 glass border-white/10 rounded-2xl text-white font-bold hover:bg-white/5 transition-all group"
            >
              See All Client Work <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Stats (Metric Cards) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Client Revenue Growth", value: "€550k+", sub: "Delivered annually" },
            { label: "Successful Projects", value: "150+", sub: "Enterprise solutions" },
            { label: "System Uptime", value: "99.9%", sub: "SLA Guaranteed" },
            { label: "Years of Excellence", value: "8+", sub: "Engineering legacies" },
          ].map((stat, i) => (
            <div key={i} className="glass p-10 rounded-3xl border border-white/5 text-center group active:scale-95 transition-all">
              <div className="text-4xl md:text-5xl font-display font-black text-white mb-3 group-hover:text-sun transition-colors">
                {stat.value}
              </div>
              <div className="text-sun text-xs font-black uppercase tracking-[0.2em] mb-2">
                {stat.label}
              </div>
              <div className="text-slate-400 text-sm font-light">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sun/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto glass p-12 md:p-24 rounded-[4rem] text-center relative z-10 border-sun/10">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight">
            Ready to Architect <br /><span className="text-sun">Your Success?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">
            Join the ranks of high-performance brands that leverage SITELYTC's precision engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="px-12 py-5 bg-amber-500 text-gray-900 font-black rounded-2xl text-xl hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-1"
            >
              Get Started Now
            </Link>
            <Link
              href="/founder"
              className="px-12 py-5 bg-amber-500 text-gray-900 font-bold rounded-2xl text-xl hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1"
            >
              Meet the Founder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
