"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryImage {
    asset: { _id?: string; url: string };
    alt?: string;
    caption?: string;
}

interface ImageGalleryLightboxProps {
    images: GalleryImage[];
    title: string;
}

export default function ImageGalleryLightbox({ images, title }: ImageGalleryLightboxProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const nextImage = useCallback((e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
    }, [images.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
    }, [images.length]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, nextImage, prevImage]);

    // Prevent scrolling when lightbox is open
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedIndex]);

    if (!images || images.length === 0) return null;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {images.map((img, i) => (
                    <figure key={img.asset._id || i} className="group cursor-pointer" onClick={() => openLightbox(i)}>
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-secondary/20">
                            <Image
                                src={`${img.asset.url}?w=800&q=85`}
                                alt={img.alt || `${title} screenshot ${i + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                            </div>
                        </div>
                        {img.caption && (
                            <figcaption className="text-sm text-muted-foreground mt-2 text-center italic group-hover:text-foreground transition-colors">
                                {img.caption}
                            </figcaption>
                        )}
                    </figure>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 z-[60] p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeLightbox();
                            }}
                            aria-label="Close lightbox"
                        >
                            <X className="w-6 h-6 md:w-8 md:h-8" />
                        </button>

                        {/* Navigation Buttons */}
                        {images.length > 1 && (
                            <>
                                <button
                                    className="absolute left-2 md:left-8 z-[60] p-2 md:p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
                                    onClick={prevImage}
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                                </button>
                                <button
                                    className="absolute right-2 md:right-8 z-[60] p-2 md:p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
                                    onClick={nextImage}
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                                </button>
                            </>
                        )}

                        {/* Image Container */}
                        <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-16 py-16 flex flex-col items-center justify-center pointer-events-none">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative w-full h-full flex flex-col items-center justify-center"
                                >
                                    <div className="relative w-full h-full min-h-[50vh] pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                                        <Image
                                            src={`${images[selectedIndex].asset.url}?w=1600&q=90`}
                                            alt={images[selectedIndex].alt || `${title} screenshot ${selectedIndex + 1}`}
                                            fill
                                            className="object-contain"
                                            sizes="100vw"
                                            priority
                                        />
                                    </div>
                                    
                                    {/* Caption and Counter inside Lightbox */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none flex flex-col items-center gap-2">
                                        {images[selectedIndex].caption && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 }}
                                                className="px-4 py-2 bg-black/60 backdrop-blur-md text-white rounded-full text-sm md:text-base font-medium pointer-events-auto shadow-lg text-center max-w-xl"
                                            >
                                                {images[selectedIndex].caption}
                                            </motion.div>
                                        )}
                                        
                                        {images.length > 1 && (
                                            <div className="px-3 py-1 bg-black/50 backdrop-blur-md text-white/90 rounded-full text-xs font-medium pointer-events-auto">
                                                {selectedIndex + 1} / {images.length}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
