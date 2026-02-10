import React from "react";
import { Youtube, ExternalLink } from "lucide-react";

export default function VideosPage() {
    const videos = [
        {
            id: "invideo-ai-1080",
            title: "How Sitelytc Builds Brands That Stand Out",
            thumbnail: "/founder/Founder.png",
            duration: "2:45",
            views: "1.2K",
            date: "Aug 12, 2025"
        },
        {
            id: "dQw4w9WgXcQ",
            title: "SITELYTC - Digital Excellence",
            thumbnail: "/founder/Founder.png",
            duration: "3:20",
            views: "5.6K",
            date: "Jul 15, 2025"
        },
        {
            id: "abc123",
            title: "Building Digital Legacies",
            thumbnail: "/founder/Founder.png",
            duration: "4:10",
            views: "3.8K",
            date: "Jun 20, 2025"
        },
        {
            id: "xyz789",
            title: "Enterprise Digital Solutions",
            thumbnail: "/founder/Founder.png",
            duration: "5:15",
            views: "2.1K",
            date: "May 10, 2025"
        }
    ];

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="w-20 h-20 bg-red-600/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                        <Youtube className="w-10 h-10 text-red-600" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6">
                        Our <span className="text-amber-500">Videos</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Explore our YouTube channel featuring case studies, tutorials, and insights on digital excellence.
                    </p>
                    <a
                        href="https://www.youtube.com/@Sitelytcdigitalmedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all"
                    >
                        <Youtube className="w-5 h-5" /> Visit YouTube Channel
                    </a>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, idx) => (
                        <div key={idx} className="glass rounded-[2.5rem] overflow-hidden group border border-white/5 hover:border-amber-500/30 transition-all duration-500">
                            {/* Thumbnail */}
                            <div className="relative h-48 bg-navy-800/50 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-all">
                                        <Youtube className="w-8 h-8 text-amber-500" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 rounded text-xs text-white font-medium">
                                    {video.duration}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">
                                    {video.title}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                                    <span>{video.views} views</span>
                                    <span>&bull;</span>
                                    <span>{video.date}</span>
                                </div>
                                <a
                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-amber-500 font-bold hover:gap-3 transition-all"
                                >
                                    Watch Now <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 glass p-12 md:p-16 rounded-[4rem] text-center border-amber-500/10">
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6">
                        Want to See More?
                    </h2>
                    <p className="text-xl text-slate-400 font-light mb-8 max-w-2xl mx-auto">
                        Subscribe to our YouTube channel for regular updates on digital innovation, case studies, and industry insights.
                    </p>
                    <a
                        href="https://www.youtube.com/@Sitelytcdigitalmedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 text-white font-black rounded-2xl text-lg hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all transform hover:-translate-y-1"
                    >
                        <Youtube className="w-6 h-6" /> Subscribe Now
                    </a>
                </div>
            </div>
        </div>
    );
}
