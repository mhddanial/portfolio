import { Github, Linkedin, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-[#050505] text-white pt-24 pb-8 overflow-hidden rounded-[2.5rem] mt-12 mx-2 md:mx-4 mb-2 md:mb-4">
            {/* Texture and Gradients */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[length:64px_64px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-t from-[#4F46E5]/50 via-purple-500/20 to-transparent blur-[100px] rounded-full pointer-events-none opacity-80" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                {/* Top Section */}
                <div className="max-w-3xl mb-24">
                    <div className="flex items-center gap-2 text-[#4F46E5] mb-6 font-medium text-sm tracking-wider uppercase">
                        <Sparkles className="w-4 h-4" />
                        <span>Contact Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-zinc-100">
                        Interested in working together, <span className="text-zinc-500">or simply learning more about my work?</span>
                    </h2>
                </div>

                {/* Middle Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
                    <div>
                        <p className="text-zinc-500 mb-2 text-sm font-medium">Contact me at:</p>
                        <a
                            href="mailto:mhd2danial3@gmail.com"
                            className="text-xl md:text-2xl flex items-center gap-2 text-zinc-200 hover:text-[#4F46E5] transition-colors font-medium group"
                        >
                            mhd2danial3@gmail.com
                            <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-x-8 gap-y-4 text-zinc-400 font-medium">
                        {["Home", "About", "Projects"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Big Brand Text */}
                <div className="w-full mb-8 flex justify-center overflow-hidden">
                    <svg viewBox="0 0 1200 250" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                        <text
                            x="50%"
                            y="50%"
                            dy=".32em"
                            textAnchor="middle"
                            className="font-bold tracking-tighter font-display"
                            style={{ fontSize: "200px", fill: "url(#textGradient)" }}
                        >
                            Dann&apos;s Create.
                        </text>
                    </svg>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-zinc-800/50 text-sm text-zinc-500">
                    <p>
                        © {new Date().getFullYear()} Dann&apos;s Create. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        {[
                            { label: "LinkedIn", href: "https://linkedin.com/in/muhammaddanial628" },
                            { label: "GitHub", href: "https://github.com/mhddanial" },
                            { label: "Email", href: "mailto:mhd2danial3@gmail.com" },
                        ].map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
