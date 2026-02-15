import WorkGrid from "@/components/WorkGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects — Dann's Create",
    description: "A curated selection of projects showcasing my skills in full-stack development, frontend engineering, and design.",
};

export default function ProjectsPage() {
    return <WorkGrid />;
}
