import React from "react";

export default function TermsPage() {
    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] border-white/5">
                <h1 className="text-4xl font-display font-black text-white mb-10">Terms of Service</h1>
                <div className="space-y-8 text-slate-400 font-light leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 italic">1. Service Definition</h2>
                        <p>
                            SITELYTC provides high-end digital engineering and software architecture services. Engagement terms for specific projects are governed by individual Master Service Agreements (MSA).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 italic">2. Intellectual Property</h2>
                        <p>
                            Unless otherwise agreed in writing, all "SITELYTC Methodologies," "Blueprint Systems," and custom frameworks remain the intellectual property of SITELYTC DIGITAL MEDIA PVT. LTD.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 italic">3. Use of Portals</h2>
                        <p>
                            Access to Client and Agency portals is granted solely for the purpose of project collaboration. Unauthorized access or data scraping is strictly prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 italic">4. Limitation of Liability</h2>
                        <p>
                            SITELYTC is not liable for indirect or consequential damages arising from the use of our digital implementations once handed over to the client, beyond the terms of the support retainer.
                        </p>
                    </section>

                    <div className="pt-10 border-t border-white/5 text-[10px] text-slate-500 uppercase tracking-widest font-black">
                        Last Updated: February 2026
                    </div>
                </div>
            </div>
        </div>
    );
}
