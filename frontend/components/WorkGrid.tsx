"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Plant Disease Detection",
        category: "Full-Stack Application",
        tech: ["Laravel", "React", "TypeScript", "TailwindCSS"],
        image: "/images/project1.png",
        description:
            "AI-powered plant disease detection platform with rich admin dashboard, community features, and real-time detection history.",
    },
    {
        id: 2,
        title: "Portfolio Website",
        category: "Frontend Development",
        tech: ["Next.js", "Framer Motion", "TailwindCSS"],
        image: "/images/project2.png",
        description:
            "Modern, responsive portfolio website built with Next.js, featuring scroll-driven animations and textured design.",
    },
];

export default function WorkGrid() {
    return (
        <section id="work" className="py-24 md:py-32 bg-white relative">
            {/* Subtle texture */}
            <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            See My Selected Projects
                        </motion.h2>
                        <motion.p
                            className="text-muted-foreground max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            A curated selection of projects showcasing my skills in full-stack development and design.
                        </motion.p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-accent hover:text-foreground transition-colors font-medium">
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
                            <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-secondary rounded-xl border border-border">
                                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
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
                                    <h3 className="text-2xl font-bold font-display mb-2 text-foreground group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-3 font-mono uppercase tracking-wider">
                                        {project.category}
                                    </p>
                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2.5 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-md border border-border"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground line-clamp-2 max-w-md text-sm">
                                        {project.description}
                                    </p>
                                    {/* Action Links */}
                                    <div className="flex items-center gap-3 mt-4">
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-foreground transition-colors"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            Live Demo
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <Github className="w-3.5 h-3.5" />
                                            Source
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-secondary p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-border">
                                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors font-medium">
                        View All Projects <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
