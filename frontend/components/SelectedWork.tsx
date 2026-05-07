"use client";

import { ArrowUpRight, ExternalLink, Github, Logs } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import { AnnotatedText } from "./AnnotatedText";

interface WorkGridProps {
    projects: Project[];
}

export default function WorkGrid({ projects }: WorkGridProps) {
    return (
        <section className="py-16 bg-white relative">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                    <div>
                        <h2
                            className="text-3xl md:text-4xl font-light font-display text-foreground"
                        >
                            Some works {""}
                            <AnnotatedText type="highlight" color="hsl(44.016, 100%, 52.157%)" strokeWidth={2} animationDelay={800} padding={[4, 6]}>
                                <span className="text-foreground font-semibold">I&apos;m proud of</span>
                            </AnnotatedText>
                        </h2>
                        <p
                            className="text-muted-foreground max-w-md"
                        >
                            Here are some of my best projects I&apos;ve worked on.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
                        >
                            View All Projects
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {projects.length === 0 ? (
                    <p className="text-center text-muted-foreground py-12">No projects yet. Add them in Sanity Studio.</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {projects.map((project) => {
                                const isInProgress = project.status === 'in_progress';

                                return (
                                    <div
                                        key={project._id}
                                        className={`${isInProgress ? '' : 'group cursor-pointer'}`}
                                    >
                                        {/* Title + Tech Tags + Arrow */}
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center gap-2.5 mb-2">
                                                    <h3 className={`text-xl md:text-2xl font-semibold font-display text-foreground ${!isInProgress ? 'group-hover:text-accent transition-colors' : ''}`}>
                                                        {project.title}
                                                    </h3>
                                                    {isInProgress && (
                                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider bg-amber-100 text-amber-700 border border-amber-200 rounded-full whitespace-nowrap">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                                            In Progress
                                                        </span>
                                                    )}
                                                </div>
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
                                            {!isInProgress && (
                                                <div className="bg-secondary p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-border">
                                                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Image Area */}
                                        {isInProgress ? (
                                            <>
                                                <div className="relative aspect-4/3 overflow-hidden mb-6 bg-secondary/60 rounded-xl border border-dashed border-border/80">
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground/60">
                                                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                                                        </svg>
                                                        <span className="text-sm font-medium">Coming Soon</span>
                                                    </div>
                                                </div>
                                                <p className="text-muted-foreground line-clamp-3 text-sm">
                                                    {project.description}
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <Link href={`/projects/${project.slug.current}`}>
                                                    <div className="relative aspect-4/3 overflow-hidden mb-6 bg-secondary rounded-xl border border-border">
                                                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                                        <div className="w-full h-full relative">
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
                                                        </div>
                                                    </div>
                                                </Link>

                                                <p className="text-muted-foreground line-clamp-3 text-sm">
                                                    {project.description}
                                                </p>

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
                                                <div className="mt-6">
                                                    <Link className="w-full flex items-center justify-center gap-2 bg-primary p-2 rounded-md hover:bg-primary/80 transition-colors cursor-pointer" href={`/projects/${project.slug.current}`}>
                                                        <Logs className="w-3.5 h-3.5 text-primary-foreground" />
                                                        <span className="text-sm font-medium text-primary-foreground">Read More</span>
                                                    </Link>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex md:hidden justify-center mt-10">
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
                            >
                                View All Projects
                                <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </section >
    );
}
