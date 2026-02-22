import type { Metadata } from "next";
import { QueryProvider } from "@/components/providers/query-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "Dann's Create — Software Engineer Portfolio",
    description: "Software Engineer crafting thoughtful digital experiences. Explore my projects, skills, and get in touch for collaboration.",
    keywords: ["software engineer", "web developer", "portfolio", "React", "Next.js", "TypeScript"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-background text-foreground">
                <QueryProvider>
                    <TooltipProvider>
                        <NextTopLoader color="#000000" showSpinner={false} height={2} />
                        <Toaster />
                        <Navigation />
                        <main className="min-h-screen overflow-x-hidden">
                            {children}
                        </main>
                        <Footer />
                    </TooltipProvider>
                </QueryProvider>
            </body>
        </html>
    );
}
