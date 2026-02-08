"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
    onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Show brand for 2.5 seconds, then trigger exit
        const timer = setTimeout(() => {
            setIsExiting(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isExiting) {
            // Wait for fade out animation to complete
            const exitTimer = setTimeout(() => {
                onComplete();
            }, 800);
            return () => clearTimeout(exitTimer);
        }
    }, [isExiting, onComplete]);

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    key="splash"
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                >
                    {/* Background gradient effect */}
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        style={{
                            background: "radial-gradient(circle at center, hsl(250 80% 65% / 0.15) 0%, transparent 50%)",
                        }}
                    />

                    {/* Brand Logo */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Main Title */}
                        <motion.h1
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-display tracking-tighter"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        >
                            STUDIO
                            <motion.span
                                className="text-primary"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                            >
                                .
                            </motion.span>
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light tracking-wide"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Creative Digital Studio
                        </motion.p>

                        {/* Loading bar */}
                        <motion.div
                            className="mt-8 sm:mt-10 md:mt-12 w-16 sm:w-20 md:w-24 h-[2px] bg-white/10 rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                        >
                            <motion.div
                                className="h-full bg-primary rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.8, delay: 0.7, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
