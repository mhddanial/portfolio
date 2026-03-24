import AboutContent from "@/app/about/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Dann's Create",
    description: "Learn more about Muhammad Danial — a software engineer passionate about building elegant, user-focused web applications.",
};

export default function AboutPage() {
    return <AboutContent />;
}
