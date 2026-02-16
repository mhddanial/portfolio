"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Logs } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";

interface WorkGridProps {
    projects: Project[];
}

export default function WorkGrid({ projects }: WorkGridProps) {
    return (
        <section id="work" className="py-24 md:py-32 bg-white relative">
            {/* Subtle texture */}
            <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                    <div>
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold font-display text-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Some works I&apos;m proud of
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
                </div>

                {projects.length === 0 ? (
                    <p className="text-center text-muted-foreground py-12">No projects yet. Add them in Sanity Studio.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project._id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group cursor-pointer"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold font-display mb-2 text-foreground group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        {/* <p className="text-muted-foreground text-sm mb-3 font-mono uppercase tracking-wider">
                                            {project.category}
                                        </p> */}
                                        {/* Tech Stack Tags */}
                                        {project.tech && project.tech.length > 0 && (
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
                                        )}
                                    </div>
                                    <div className="bg-secondary p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-border">
                                        <ArrowUpRight className="w-5 h-5 text-foreground" />
                                    </div>
                                </div>
                                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-secondary rounded-xl border border-border">
                                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-full h-full relative"
                                    >
                                        {project.image ? (
                                            <Image
                                                src={urlFor(project.image).width(800).height(600).url()}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                                No image
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                                <p className="text-muted-foreground line-clamp-3 text-sm">
                                    {project.description}
                                </p>
                                {/* Action Links */}
                                <div className="flex items-center gap-3 mt-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-foreground transition-colors"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <Github className="w-3.5 h-3.5" />
                                            Source
                                        </a>
                                    )}
                                </div>
                                <div className="mt-6">
                                    <Link className="w-full flex items-center justify-center gap-2 bg-primary p-2 rounded-md hover:bg-primary/80 transition-colors cursor-pointer" href={`/projects/${project.slug.current}`}>
                                        <Logs className="w-3.5 h-3.5 text-primary-foreground" />
                                        <span className="text-sm font-medium text-primary-foreground">Read More</span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
