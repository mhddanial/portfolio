import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, User, Clock, Code } from "lucide-react";
import {
    client,
    projectBySlugQuery,
    adjacentProjectsQuery,
    allProjectSlugsQuery,
    urlFor,
} from "@/lib/sanity";
import type { ProjectDetail, AdjacentProject } from "@/lib/sanity";
import PortableTextRenderer from "@/components/PortableTextRenderer";

export const revalidate = 60;

// ── Static Params ──
export async function generateStaticParams() {
    const slugs: { slug: string }[] = await client.fetch(allProjectSlugsQuery);
    return slugs.map((s) => ({ slug: s.slug }));
}

// ── Dynamic Metadata ──
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project: ProjectDetail | null = await client.fetch(projectBySlugQuery, { slug });
    if (!project) return { title: "Project Not Found" };
    return {
        title: `${project.title} — Dann's Create`,
        description: project.description,
    };
}

// ── Page ──
export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project: ProjectDetail | null = await client.fetch(projectBySlugQuery, { slug });
    if (!project) notFound();

    const adjacent: { prev: AdjacentProject | null; next: AdjacentProject | null } =
        await client.fetch(adjacentProjectsQuery, { currentOrder: project.order ?? 0 });

    const formattedDate = project.publishedAt
        ? new Date(project.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
        })
        : null;

    return (
        <article className="bg-white min-h-screen">
            {/* ─── Hero ─── */}
            <section className="pt-24 pb-8 md:pt-32">
                <div className="container max-w-6xl mx-auto px-6">
                    {/* Back link */}
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    {/* Tags */}
                    {project.tech && project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                            {project.tech.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium bg-accent/10 text-primary rounded-md border border-accent/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="text-2xl md:text-5xl font-bold font-display text-foreground leading-tight my-4">
                        {project.title}
                    </h1>

                    {/* Subtitle */}
                    {project.subtitle && (
                        <p className="text-xs md:text-base text-muted-foreground w-full leading-relaxed">
                            {project.subtitle}
                        </p>
                    )}
                </div>
            </section>

            {/* ─── Cover Image ─── */}
            {(project.heroImage || project.image) && (
                <section className="pb-16 md:pb-20">
                    <div className="container max-w-6xl mx-auto px-6">
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-lg">
                            <Image
                                src={urlFor(project.heroImage || project.image!).width(1400).height(800).quality(90).url()}
                                alt={project.title}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 1024px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Meta Bar ─── */}
            <section className="pb-12 md:pb-16">
                <div className="container max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 bg-secondary/30 rounded-2xl border border-border">
                        {project.role && (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <User className="w-4 h-4" />
                                    <span className="text-xs font-medium uppercase tracking-wider">Role</span>
                                </div>
                                <span className="text-sm font-medium text-foreground">{project.role}</span>
                            </div>
                        )}
                        {project.duration && (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-xs font-medium uppercase tracking-wider">Duration</span>
                                </div>
                                <span className="text-sm font-medium text-foreground">{project.duration}</span>
                            </div>
                        )}
                        {project.tech && project.tech.length > 0 && (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Code className="w-4 h-4" />
                                    <span className="text-xs font-medium uppercase tracking-wider">Tech Stack</span>
                                </div>
                                <span className="text-sm font-medium text-foreground">
                                    {project.tech.join(" · ")}
                                </span>
                            </div>
                        )}
                        {formattedDate && (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-xs font-medium uppercase tracking-wider">Published</span>
                                </div>
                                <span className="text-sm font-medium text-foreground">{formattedDate}</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ─── Body Content ─── */}
            {project.body && project.body.length > 0 && (
                <section className="pb-16 md:pb-20">
                    <div className="container max-w-6xl mx-auto px-6">
                        <PortableTextRenderer value={project.body} />
                    </div>
                </section>
            )}

            {/* ─── Gallery ─── */}
            {project.gallery && project.gallery.length > 0 && (
                <section className="pb-16 md:pb-20">
                    <div className="container max-w-6xl mx-auto px-6">
                        <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-8">
                            Gallery
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.gallery.map((img, i) => (
                                <figure key={img.asset._id || i} className="group">
                                    <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                                        <Image
                                            src={`${img.asset.url}?w=800&q=85`}
                                            alt={img.alt || `${project.title} screenshot ${i + 1}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    {img.caption && (
                                        <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                                            {img.caption}
                                        </figcaption>
                                    )}
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Action Links ─── */}
            {(project.liveUrl || project.githubUrl) && (
                <section className="pb-16 md:pb-20">
                    <div className="container max-w-6xl mx-auto px-6">
                        <div className="flex flex-wrap gap-4 justify-center">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    View Live Site
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-full font-medium border border-border hover:bg-secondary/80 transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    View Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Prev / Next Navigation ─── */}
            <section className="pb-20 md:pb-28">
                <div className="container max-w-6xl mx-auto px-6">
                    <div className="border-t border-border pt-10 flex items-center justify-between">
                        {adjacent.prev ? (
                            <Link
                                href={`/projects/${adjacent.prev.slug.current}`}
                                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <div className="text-left">
                                    <span className="text-xs uppercase tracking-wider block mb-0.5">Previous</span>
                                    <span className="text-sm font-medium text-foreground">{adjacent.prev.title}</span>
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}
                        {adjacent.next ? (
                            <Link
                                href={`/projects/${adjacent.next.slug.current}`}
                                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
                            >
                                <div>
                                    <span className="text-xs uppercase tracking-wider block mb-0.5">Next</span>
                                    <span className="text-sm font-medium text-foreground">{adjacent.next.title}</span>
                                </div>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </section>
        </article>
    );
}
