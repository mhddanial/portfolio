import About from "@/components/About";
import Skills from "@/components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Dann's Create",
    description: "Learn more about Muhammad Danial — a software engineer passionate about building elegant, user-focused web applications.",
};

export default function AboutPage() {
    return (
        <>
            <About />
            <Skills />
        </>
    );
}
