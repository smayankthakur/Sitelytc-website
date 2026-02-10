import React from "react";

export default function PrivacyPage() {
    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] border-white/5">
                <h1 className="text-4xl font-display font-black text-white mb-10">Privacy Policy</h1>
                <div className="space-y-8 text-slate-400 font-light leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 italic">1. Introduction</h2>
                        <p>
                            SITELYTC DIGITAL MEDIA PVT. LTD. ("we," "our," or "us") respects your privacy and is committed to protecting the personal data we process. This policy explains how we collect and use your information when you visit sitelytc.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 italic">2. Data Collection</h2>
                        <p>
                            We collect information you provide directly via our contact forms (Name, Email, Project Details) and automated data through cookies to improve site performance and user experience.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 italic">3. Use of Information</h2>
                        <p>
                            Your data is used strictly for:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Communicating regarding project inquiries.</li>
                            <li>Improving our architectural service offerings.</li>
                            <li>Maintaining the security of our portals and website.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 italic">4. Data Security</h2>
                        <p>
                            We implement enterprise-grade encryption and security protocols to protect your information. Your data is never sold to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 italic">5. Your Rights</h2>
                        <p>
                            You have the right to request access to or deletion of your personal data at any time by contacting hello@sitelytc.com.
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
