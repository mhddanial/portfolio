import type { Metadata } from "next";
import { QueryProvider } from "@/components/providers/query-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portfolio - Global Creative Studio",
    description: "We craft immersive digital experiences for brands that dare to lead. From strategy to execution, we redefine what's possible.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <QueryProvider>
                    <TooltipProvider>
                        <Toaster />
                        {children}
                    </TooltipProvider>
                </QueryProvider>
            </body>
        </html>
    );
}
