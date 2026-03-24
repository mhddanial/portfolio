"use client";

import { motion } from "framer-motion";
import { AnnotatedText } from "@/components/AnnotatedText";
import { Palette, Rocket, Guitar } from "lucide-react";

const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Shipped" },
    { value: "5+", label: "Technologies" },
    { value: "∞", label: "Cups of Coffee" },
];

const contentCards = [
    {
        icon: Palette,
        title: "Design & Craft",
        color: "#6366f1",
        items: [
            "I design for clarity, simplicity, and that \"just feels right\" moment",
            "I obsess over the invisible details — the ones you don't see but you feel",
            "I make sure technical goals and user needs meet in the middle",
            "I believe great interfaces are part empathy, part strategy, and part stubbornness for quality",
            "I\u2019m always learning, refining, and levelling up my craft",
        ],
    },
    {
        icon: Rocket,
        title: "Building & Experiment",
        color: "#f59e0b",
        items: [
            "I like to get my hands dirty — ideas don't stay in my head for long",
            "I build full-stack applications from architecture to pixel-perfect UIs",
            "I\u2019m quick to test; I\u2019d rather ship something rough than let an idea collect dust",
            "I enjoy the mess of figuring things out — half chaos, half curiosity, all progress",
            "I use modern tools and frameworks to move fast without cutting corners",
        ],
    },
    {
        icon: Guitar,
        title: "Routine & Lifestyle",
        color: "#10b981",
        items: [
            "I believe in work-life balance and staying curious beyond code",
            "I enjoy exploring new technologies and side projects on weekends",
            "I value clean routines — they fuel creativity and consistency",
            "I'm always looking for new challenges that push me out of my comfort zone",
            "Outside of coding, you\u2019ll find me exploring coffee shops or reading tech articles",
        ],
    },
];

export default function About() {
    return (
        <section className="py-24 md:py-32 bg-white relative min-h-screen">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-4 md:mb-12">
                    <motion.h1
                        className="text-2xl md:text-4xl font-light font-display text-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Everything {""}
                        <span className="font-bold">
                            about Dann
                        </span>
                        {""} is..
                    </motion.h1>
                    <motion.h1
                        className="text-3xl md:text-5xl font-semibold text-foreground py-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AnnotatedText type="box" color="#003049" strokeWidth={4} animationDelay={800} padding={[4, 6]} className="font-bold">
                            Design, Build, Lifestyle
                        </AnnotatedText>
                    </motion.h1>
                    <motion.p
                        className="text-md md:text-lg text-muted-foreground w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Each word represents a puzzle piece to who I am as a person. Ready to dice in...?
                    </motion.p>
                </div>

                {/* Stats */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center p-6 rounded-xl border border-border"
                        >
                            <p className="text-3xl md:text-4xl font-bold font-display text-foreground mb-1">
                                {stat.value}
                            </p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div> */}

                {/* Content Cards */}
                <div className="space-y-6">
                    {contentCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-4xl border border-border px-4 py-6 md:py-10 md:px-12"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${card.color}15` }}>
                                    <card.icon className="w-6 h-6" style={{ color: card.color }} />
                                </div>
                                <AnnotatedText type="underline" color={card.color} strokeWidth={2} animationDelay={800} padding={[4, 6]} className="font-bold">
                                    <h3 className="text-xl md:text-2xl font-bold font-display text-foreground" style={{ color: card.color }}>
                                        {card.title}
                                    </h3>
                                </AnnotatedText>
                            </div>
                            <ul className="space-y-2 px-2">
                                {card.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-muted-foreground text-xs md:text-base leading-relaxed"
                                    >
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
