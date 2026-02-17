"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { AnnotatedText } from "@/components/AnnotatedText";
import Stack from "@/components/Stack";
import Image from "next/image";

export default function Hero() {
    // Replace these with your actual photos
    const profileCards = [
        <Image key="1" src="/images/profile-3.jpg" alt="Profile" width={1000} height={1000} className="rounded-lg object-cover pointer-events-none" />,
        <Image key="2" src="/images/profile-2.jpeg" alt="Profile" width={1000} height={1000} className="rounded-lg object-cover pointer-events-none" />,
        <Image key="3" src="/images/profile-1.jpg" alt="Profile" width={1000} height={1000} className="rounded-lg object-cover pointer-events-none" />,
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-background">
            {/* Dot Grid Texture */}
            <div className="absolute inset-0 dot-grid-lg opacity-50" />

            {/* Content */}
            <div className="container py-14 md:py-24 max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-[1fr_0.7fr] gap-12 md:gap-16 items-center">
                    {/* Left — Text Content */}
                    <div className="w-full">
                        <h1 className="mt-10 text-3xl md:text-5xl font-bold font-display leading-[1.1] tracking-tight mb-6 text-foreground">
                            Hello! I&apos;m Muhammad Danial,{" "}
                            <AnnotatedText type="highlight" color="hsla(250, 80%, 65%, 0.15)" strokeWidth={2} animationDelay={500} animationDuration={1000} padding={[2, 6]}>
                                <span className="text-gradient-accent">Software Developer</span>
                            </AnnotatedText>{" "}
                            based in Indonesia.
                        </h1>

                        <p className="text-base md:text-md text-muted-foreground leading-relaxed max-w-xl">
                            I was Informatics Engineering student at Batam State Polytechnic. I have an experience and knowledge in the{" "}
                            <AnnotatedText type="underline" color="#001219" strokeWidth={1} animationDelay={1400} padding={[4, 6]} className="font-bold">
                                Software Engineering & AI Integration
                            </AnnotatedText>
                            .
                        </p>

                        <p className="text-base md:text-md text-muted-foreground mb-4 leading-relaxed max-w-xl">
                            I love building tools that are user-friendly, performant, and delightful. From full-stack web applications to polished frontends, I focus on{" "}
                            <AnnotatedText type="highlight" color="hsla(58, 100%, 63%, 0.96)" strokeWidth={2} animationDelay={1800} padding={[4, 6]}>
                                clean code
                            </AnnotatedText>{" "}
                            and modern best practices to solve{" "}
                            <AnnotatedText type="box" color="#ff006e" strokeWidth={2} animationDelay={2200} padding={[2, 4]}>
                                real world problems
                            </AnnotatedText>
                            .
                        </p>

                        <p className="text-base md:text-md text-muted-foreground mb-8">
                            I&apos;m currently looking for new opportunities.{" "}
                            <a href="/contact" className="text-accent font-medium hover:underline">
                                Hire me or let&apos;s make some projects?
                            </a>
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            <a
                                href="https://linkedin.com/in/muhammaddanial628"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/85 transition-all hover:scale-[1.02]"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/mhddanial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground text-sm font-semibold rounded-lg hover:bg-secondary transition-all"
                            >
                                <Github className="w-4 h-4" />
                                Github
                            </a>
                            <a
                                href="mailto:mhd2danial3@gmail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground text-sm font-semibold rounded-lg hover:bg-secondary transition-all"
                            >
                                <Mail className="w-4 h-4" />
                                Email
                            </a>
                        </div>
                    </div>

                    {/* Right — Photo Stack */}
                    <div
                        className="flex items-center justify-center"
                    >
                        <div className="mr-10 w-[280px] h-[350px] md:w-[340px] md:h-[420px] lg:w-[380px] lg:h-[470px] [&>div>div>div]:shadow-[0_12px_30px_rgba(0,0,0,0.15)] [&>div>div>div]:border [&>div>div>div]:border-border/50">
                            <Stack
                                cards={profileCards}
                                sendToBackOnClick
                                autoplay={false}
                                autoplayDelay={3000}
                                pauseOnHover
                                mobileClickOnly
                                sensitivity={150}
                                animationConfig={{ stiffness: 260, damping: 20 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
