"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
    onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isExiting) {
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
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAFAFA]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                >
                    {/* Subtle dot grid background */}
                    <div className="absolute inset-0 dot-grid opacity-40" />

                    {/* Soft gradient accent */}
                    <motion.div
                        className="absolute w-[500px] h-[500px] rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        style={{
                            background: "radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, transparent 60%)",
                        }}
                    />

                    {/* Brand Logo */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Main Title */}
                        <motion.h1
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-display tracking-tighter text-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        >
                            DANN&apos;S CREATE
                            <motion.span
                                className="text-accent"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                            >
                                .
                            </motion.span>
                        </motion.h1>

                        {/* Loading bar */}
                        <motion.div
                            className="mt-8 sm:mt-10 md:mt-12 w-16 sm:w-20 md:w-24 h-[5px] bg-border rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                        >
                            <motion.div
                                className="h-full bg-accent rounded-full"
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
