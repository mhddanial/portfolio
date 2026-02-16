import { client, projectsQuery } from "@/lib/sanity";
import type { Project } from "@/lib/sanity";
import HomeContent from "@/components/HomeContent";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function Home() {
    const projects: Project[] = await client.fetch(projectsQuery);

    return <HomeContent projects={projects} />;
}
