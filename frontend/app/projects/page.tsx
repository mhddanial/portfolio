import ProjectList from "@/components/ProjectList";
import { client, projectsQuery } from "@/lib/sanity";
import type { Project } from "@/lib/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects — Dann's Create",
    description: "A curated selection of projects showcasing my skills in full-stack development, frontend engineering, and design.",
};

export const revalidate = 60;

export default async function ProjectsPage() {
    const projects: Project[] = await client.fetch(projectsQuery);

    return <ProjectList projects={projects} />;
}
