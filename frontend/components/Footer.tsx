import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-border bg-white">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold font-display tracking-tight mb-2 text-foreground">
                            Dann&apos;s Create<span className="text-accent">.</span>
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {[
                            { icon: Github, href: "https://github.com/mhddanial", label: "GitHub" },
                            { icon: Linkedin, href: "https://linkedin.com/in/muhammaddanial628", label: "LinkedIn" },
                            { icon: Mail, href: "mailto:mhd2danial3@gmail.com", label: "Email" },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
