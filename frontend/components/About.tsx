"use client";

import { motion } from "framer-motion";
import { AnnotatedText } from "@/components/AnnotatedText";

const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Shipped" },
    { value: "5+", label: "Technologies" },
    { value: "∞", label: "Cups of Coffee" },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white border-t border-border relative">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
                            About Me
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight text-foreground">
                            Crafting digital solutions with{" "}
                            <AnnotatedText type="underline" color="#4F46E5" strokeWidth={1} animationDelay={400} padding={[1, 4]}>
                                <span className="text-gradient-accent">passion</span>
                            </AnnotatedText>
                            {" "}and precision.
                        </h2>
                    </motion.div>
                    <motion.div
                        className="space-y-6 text-lg text-muted-foreground"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            I&apos;m a software engineer passionate about building elegant, user-focused web applications. I combine strong technical skills with an eye for design to create products that both look great and work flawlessly.
                        </p>
                        <p>
                            From full-stack applications to polished frontends, I focus on clean code, modern best practices, and delivering solutions that genuinely make an impact.
                        </p>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center p-6 rounded-xl bg-[#FAFAFA] border border-border"
                        >
                            <p className="text-3xl md:text-4xl font-bold font-display text-foreground mb-1">
                                {stat.value}
                            </p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
