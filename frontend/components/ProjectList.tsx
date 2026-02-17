"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Logs, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

const PROJECTS_PER_PAGE = 6;

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = Array.from(new Set(projects.map((p) => p.category)));
        return ["All", ...cats];
    }, [projects]);

    // Filter by category
    const filtered = useMemo(() => {
        if (activeCategory === "All") return projects;
        return projects.filter((p) => p.category === activeCategory);
    }, [projects, activeCategory]);

    // Pagination
    const totalPages = Math.ceil(filtered.length / PROJECTS_PER_PAGE);
    const paginated = filtered.slice(
        (currentPage - 1) * PROJECTS_PER_PAGE,
        currentPage * PROJECTS_PER_PAGE
    );

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };

    return (
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white relative min-h-screen">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-12">
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold font-display text-foreground mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        All Projects
                    </motion.h1>
                    <motion.p
                        className="text-muted-foreground max-w-lg text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        A curated selection of projects showcasing my skills in full-stack development and design.
                    </motion.p>
                </div>

                {/* Category Filters */}
                {categories.length > 2 && (
                    <motion.div
                        className="flex flex-wrap gap-2 mb-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${activeCategory === cat
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-secondary/50 text-muted-foreground border-border hover:bg-secondary hover:text-foreground"
                                    }`}
                            >
                                {cat}
                                {cat === "All" ? (
                                    <span className="ml-1.5 text-xs opacity-70">({projects.length})</span>
                                ) : (
                                    <span className="ml-1.5 text-xs opacity-70">
                                        ({projects.filter((p) => p.category === cat).length})
                                    </span>
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}

                {/* Results count */}
                <div className="text-sm text-muted-foreground mb-6">
                    Showing {paginated.length} of {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                </div>

                {/* Project Grid */}
                {filtered.length === 0 ? (
                    <p className="text-center text-muted-foreground py-16">
                        No projects in this category yet.
                    </p>
                ) : (
                    <>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeCategory}-${currentPage}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                            >
                                {paginated.map((project, index) => (
                                    <motion.div
                                        key={project._id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group cursor-pointer"
                                    >
                                        {/* Title + Tech Tags */}
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-semibold font-display mb-2 text-foreground group-hover:text-accent transition-colors">
                                                    {project.title}
                                                </h3>
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

                                        {/* Image */}
                                        <div className="relative aspect-4/3 overflow-hidden mb-6 bg-secondary rounded-xl border border-border">
                                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
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

                                        {/* Description */}
                                        <p className="text-muted-foreground line-clamp-3 text-sm">
                                            {project.description}
                                        </p>

                                        {/* Read More */}
                                        <div className="mt-6">
                                            <Link
                                                className="w-full flex items-center justify-center gap-2 bg-primary p-2 rounded-md hover:bg-primary/80 transition-colors cursor-pointer"
                                                href={`/projects/${project.slug.current}`}
                                            >
                                                <Logs className="w-3.5 h-3.5 text-primary-foreground" />
                                                <span className="text-sm font-medium text-primary-foreground">Read More</span>
                                            </Link>
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex items-center justify-end gap-3 mt-4">
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
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 mt-16">
                                <button
                                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="p-2.5 rounded-full border border-border bg-secondary/50 hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Previous page"
                                >
                                    <ChevronLeft className="w-4 h-4 text-foreground" />
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-200 ${currentPage === page
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-secondary/50 text-muted-foreground border border-border hover:bg-secondary hover:text-foreground"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="p-2.5 rounded-full border border-border bg-secondary/50 hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Next page"
                                >
                                    <ChevronRight className="w-4 h-4 text-foreground" />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
