import AboutContent from "@/app/about/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dann's Create | About Dann",
    description: "Learn more about Muhammad Danial — a software engineer passionate about building elegant, user-focused web applications.",
};

export default function AboutPage() {
    return <AboutContent />;
}
