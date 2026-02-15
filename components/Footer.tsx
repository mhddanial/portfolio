import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-border bg-white">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold font-display tracking-tight mb-2 text-foreground">
                            Dann&apos;s Create<span className="text-accent">.</span>
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {[
                            { icon: Github, href: "#", label: "GitHub" },
                            { icon: Linkedin, href: "#", label: "LinkedIn" },
                            { icon: Mail, href: "#", label: "Email" },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
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
