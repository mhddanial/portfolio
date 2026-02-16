"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Server, Wrench } from "lucide-react";
import { AnnotatedText } from "@/components/AnnotatedText";

const skills = [
    {
        category: "Frontend",
        icon: Palette,
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Laravel", "Node.js", "Express", "REST APIs", "PostgreSQL"],
    },
    {
        category: "Tools & Infra",
        icon: Wrench,
        items: ["Git", "Docker", "Vercel", "Cloudflare", "Linux"],
    },
    {
        category: "Other",
        icon: Code2,
        items: ["UI/UX Design", "System Design", "AI Integration", "Agile"],
    },
];

export default function Skills() {
    return (
        <section className="py-24 bg-[#FAFAFA] border-t border-border relative overflow-hidden">
            {/* Texture */}
            <div className="absolute inset-0 dot-grid opacity-20" />

            {/* Gradient blob */}
            <div className="absolute top-20 right-10 w-[350px] h-[350px] rounded-full bg-[#7C3AED] opacity-[0.04] blur-[100px] pointer-events-none" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.p
                        className="text-sm font-medium text-accent uppercase tracking-widest mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Skills & Expertise
                    </motion.p>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold font-display text-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        My{" "}
                        <AnnotatedText type="underline" color="#4F46E5" strokeWidth={2} animationDelay={300} padding={[2, 4]}>
                            Tech Stack
                        </AnnotatedText>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            className="bg-white rounded-2xl border border-border p-6 hover:shadow-md hover:border-accent/30 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                <skill.icon className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="text-lg font-bold font-display text-foreground mb-4">
                                {skill.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 text-xs font-medium bg-secondary text-muted-foreground rounded-full border border-border hover:border-accent/30 hover:text-accent transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
