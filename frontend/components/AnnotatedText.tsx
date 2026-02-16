"use client";

import { useEffect, useRef, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

interface AnnotatedTextProps {
    children: React.ReactNode;
    type?: "underline" | "box" | "circle" | "highlight" | "strike-through" | "crossed-off" | "bracket";
    color?: string;
    strokeWidth?: number;
    padding?: number | [number, number] | [number, number, number, number];
    animationDelay?: number;
    animationDuration?: number;
    multiline?: boolean;
    brackets?: ("left" | "right" | "top" | "bottom")[];
    className?: string;
}

export function AnnotatedText({
    children,
    type = "underline",
    color = "#4F46E5",
    strokeWidth = 2,
    padding = 2,
    animationDelay = 0,
    animationDuration = 800,
    multiline = true,
    brackets,
    className,
}: AnnotatedTextProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add delay before showing the annotation
                    setTimeout(() => {
                        setIsVisible(true);
                    }, animationDelay);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [animationDelay]);

    return (
        <span ref={ref} className={className}>
            <RoughNotation
                type={type}
                show={isVisible}
                color={color}
                strokeWidth={strokeWidth}
                padding={padding}
                animationDuration={animationDuration}
                multiline={multiline}
                brackets={brackets}
            >
                {children}
            </RoughNotation>
        </span>
    );
}

export { RoughNotationGroup };
