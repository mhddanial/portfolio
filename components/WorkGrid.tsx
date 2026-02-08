"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Lumina Branding",
        category: "Brand Identity",
        image: "/images/project1.png",
        description: "A complete brand overhaul for a renewable energy giant, focusing on sustainable motion design."
    },
    {
        id: 2,
        title: "Nexus Interface",
        category: "UI/UX Design",
        image: "/images/project2.png",
        description: "Next-generation dashboard interface for high-frequency trading platforms."
    }
];

export default function WorkGrid() {
    return (
        <section id="work" className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-16">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Selected Works</h2>
                        <p className="text-muted-foreground max-w-md">
                            A curated selection of my most impactful projects spanning various industries and mediums.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors">
                        View All Projects <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-secondary/50">
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full h-full relative"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-3 font-mono uppercase tracking-wider">
                                        {project.category}
                                    </p>
                                    <p className="text-white/60 line-clamp-2 max-w-md">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="bg-white/5 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors">
                        View All Projects <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
