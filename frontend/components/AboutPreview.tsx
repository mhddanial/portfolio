"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Palette, Rocket, Guitar } from "lucide-react";
import { AnnotatedText } from "@/components/AnnotatedText";

const previewCards = [
    {
        icon: Palette,
        title: "Design & Craft",
        color: "#6366f1",
        items: [
            "I design for clarity, simplicity, and that \"just feels right\" moment",
            "I make sure technical goals and user needs meet in the middle and leaves everyone happy",
        ],
    },
    {
        icon: Rocket,
        title: "Building & Experiment",
        color: "#f59e0b",
        items: [
            "I like to get my hands dirty — ideas don\u2019t stay in my head for long",
            "I build full-stack applications from architecture to pixel-perfect UIs",
        ],
    },
    {
        icon: Guitar,
        title: "Routine & Lifestyle",
        color: "#10b981",
        items: [
            "I believe in work-life balance and staying curious beyond code",
            "I enjoy exploring new technologies and side projects on weekends",
        ],
    },
];

export default function AboutPreview() {
    return (
        <section className="py-16 bg-background relative">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.h2
                    className="text-3xl md:text-4xl font-light font-display text-foreground mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <AnnotatedText type="box" color="#003049" strokeWidth={2} animationDelay={800} padding={[6, 8]} >
                        Dann is all about...
                    </AnnotatedText>
                </motion.h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {previewCards.map((card) => (
                        <div
                            key={card.title}
                            className="rounded-2xl border border-border p-6 md:p-8"
                        >
                            {/* Icon + Title */}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: `${card.color}15` }}
                                >
                                    <card.icon className="w-6 h-6" style={{ color: card.color }} />
                                </div>
                                <AnnotatedText type="underline" color={card.color} strokeWidth={2} animationDelay={800} padding={[4, 6]} className="font-bold">
                                    <h3
                                        className="text-xl md:text-2xl font-bold font-display"
                                        style={{ color: card.color }}
                                    >
                                        {card.title}
                                    </h3>
                                </AnnotatedText>
                            </div>

                            {/* Preview Items */}
                            <ul className="space-y-2.5 mb-2 px-2">
                                {card.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                                    >
                                        <span
                                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-slate-500"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Read More */}
                            <Link
                                href="/about"
                                className="inline-flex items-start gap-3 text-sm font-semibold text-foreground transition-colors px-2"
                                onMouseEnter={(e) => (e.currentTarget.style.color = card.color)}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                            >
                                <span
                                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-primary"
                                />
                                Read more
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
