"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import SplashScreen from "@/components/SplashScreen";
import SelectedWork from "@/components/SelectedWork";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/sanity";

interface HomeContentProps {
    projects: Project[];
}

export default function HomeContent({ projects }: HomeContentProps) {
    const [showSplash, setShowSplash] = useState(true);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
        if (hasSeenSplash) {
            setShowSplash(false);
            setIsReady(true);
        }
    }, []);

    const handleSplashComplete = () => {
        setShowSplash(false);
        setIsReady(true);
        sessionStorage.setItem("hasSeenSplash", "true");
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {showSplash && (
                    <SplashScreen onComplete={handleSplashComplete} />
                )}
            </AnimatePresence>

            {isReady && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Hero />
                    <SelectedWork projects={projects} />
                </motion.div>
            )}
        </>
    );
}
