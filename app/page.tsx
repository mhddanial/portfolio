"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
    const [showSplash, setShowSplash] = useState(true);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Check if user has seen splash before this session
        const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
        if (hasSeenSplash) {
            setShowSplash(false);
            setIsReady(true);
        }
    }, []);

    const handleSplashComplete = () => {
        setShowSplash(false);
        setIsReady(true);
        sessionStorage.setItem("hasSeenSplash", "true");
    };

    return (
        <>
            {/* Splash Screen */}
            <AnimatePresence mode="wait">
                {showSplash && (
                    <SplashScreen onComplete={handleSplashComplete} />
                )}
            </AnimatePresence>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isReady ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white"
            >
                <Navigation />

                <main>
                    <Hero />

                    {/* About Teaser */}
                    <section className="py-24 border-b border-white/5">
                        <div className="container mx-auto px-4 md:px-16">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <motion.h2
                                    className="text-3xl md:text-5xl font-bold font-display leading-tight"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    We believe in the power of <span className="text-primary">design</span> to transform businesses and culture.
                                </motion.h2>
                                <motion.div
                                    className="space-y-6 text-lg text-muted-foreground"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <p>
                                        Founded in 2024, our studio brings together a collective of designers, developers, and strategists obsessed with quality.
                                    </p>
                                    <p>
                                        We don&apos;t just make things look good. We build systems that scale, interfaces that intuitive, and brands that resonate.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    <WorkGrid />

                    {/* Services Marquee / List */}
                    <section className="py-24 bg-white text-black overflow-hidden">
                        <div className="container mx-auto px-4 md:px-16 mb-12">
                            <motion.h2
                                className="text-4xl font-bold font-display text-center md:text-left"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                My Expertise
                            </motion.h2>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 container mx-auto px-4 md:px-16">
                            {["Brand Strategy", "UI/UX Design", "Motion Graphics", "Web Development", "3D Visualization", "Art Direction"].map((service, index) => (
                                <motion.div
                                    key={service}
                                    className="text-xl md:text-3xl font-display font-medium border border-black/10 px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors cursor-default"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {service}
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <ContactForm />
                </main>

                <Footer />
            </motion.div>
        </>
    );
}
