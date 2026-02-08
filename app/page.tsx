"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white"
        >
            <Navigation />

            <main>
                <Hero />

                {/* About Teaser */}
                <section className="py-24 border-b border-white/5 ">
                    <div className="container mx-auto px-4 md:px-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight">
                                We believe in the power of <span className="text-primary">design</span> to transform businesses and culture.
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground">
                                <p>
                                    Founded in 2024, our studio brings together a collective of designers, developers, and strategists obsessed with quality.
                                </p>
                                <p>
                                    We don&apos;t just make things look good. We build systems that scale, interfaces that intuitive, and brands that resonate.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <WorkGrid />

                {/* Services Marquee / List */}
                <section className="py-24 bg-white text-black overflow-hidden">
                    <div className="container mx-auto px-4 md:px-16 mb-12">
                        <h2 className="text-4xl font-bold font-display text-center md:text-left">My Expertise</h2>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 container mx-auto px-4 md:px-16">
                        {["Brand Strategy", "UI/UX Design", "Motion Graphics", "Web Development", "3D Visualization", "Art Direction"].map((service) => (
                            <div
                                key={service}
                                className="text-xl md:text-3xl font-display font-medium border border-black/10 px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors cursor-default"
                            >
                                {service}
                            </div>
                        ))}
                    </div>
                </section>

                <ContactForm />
            </main>

            <Footer />
        </motion.div>
    );
}
