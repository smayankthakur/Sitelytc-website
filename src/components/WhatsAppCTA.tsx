"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone, Calendar, X } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/sitelytc/sitelytc-meet";

declare global {
    interface Window {
        Calendly?: {
            initInlineWidget: (opts: {
                url: string;
                parentElement: HTMLElement;
                prefill?: Record<string, unknown>;
                utm?: Record<string, unknown>;
            }) => void;
        };
    }
}

const WhatsAppCTA = () => {
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Load Calendly widget script
    useEffect(() => {
        // Check if Calendly is already loaded
        if (window.Calendly) {
            return;
        }

        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    // Initialize Calendly when modal opens
    useEffect(() => {
        if (isCalendlyOpen && containerRef.current && window.Calendly) {
            // Avoid stacking multiple widgets when the modal is opened repeatedly.
            containerRef.current.innerHTML = "";
            window.Calendly.initInlineWidget({
                url: CALENDLY_URL,
                parentElement: containerRef.current,
                prefill: {},
                utm: {}
            });
        }
    }, [isCalendlyOpen]);

    const handleCalendlyClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsCalendlyOpen(true);
    };

    const closeCalendly = () => {
        setIsCalendlyOpen(false);
        if (containerRef.current) {
            containerRef.current.innerHTML = "";
        }
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[60]">
                {/* Calendly Button */}
                <button
                    onClick={handleCalendlyClick}
                    className="w-14 h-14 bg-[#006BFF] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
                    aria-label="Schedule a meeting"
                >
                    <Calendar className="w-6 h-6" />
                </button>
                {/* Call Button */}
                <a
                    href="tel:+917291849403"
                    className="w-14 h-14 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
                    aria-label="Call us"
                >
                    <Phone className="w-6 h-6" />
                </a>
                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/917291849403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle className="w-7 h-7" />
                </a>
            </div>

            {/* Calendly Modal */}
            {isCalendlyOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={closeCalendly}
                    />

                    {/* Modal Content */}
                    <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                        {/* Close Button */}
                        <button
                            onClick={closeCalendly}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* Calendly Inline Widget Container */}
                        <div
                            ref={containerRef}
                            className="calendly-inline-widget"
                            style={{
                                minWidth: "320px",
                                height: "700px"
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppCTA;
