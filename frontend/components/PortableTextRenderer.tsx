"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

const components: PortableTextComponents = {
    block: {
        h2: ({ children }) => (
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-12 mb-4">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl md:text-2xl font-semibold font-display text-foreground mt-10 mb-3">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg md:text-xl font-semibold font-display text-foreground mt-8 mb-2">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="text-muted-foreground leading-relaxed mb-5 text-base md:text-lg">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent pl-6 my-8 italic text-muted-foreground text-lg">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground text-base md:text-lg">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground text-base md:text-lg">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
        ),
        number: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
        ),
        em: ({ children }) => <em>{children}</em>,
        link: ({ value, children }) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:text-foreground transition-colors"
            >
                {children}
            </a>
        ),
    },
    types: {
        image: ({ value }) => {
            if (!value?.asset) return null;
            return (
                <figure className="my-10">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border">
                        <Image
                            src={urlFor(value).width(1200).quality(90).url()}
                            alt={value.alt || "Project image"}
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-cover"
                        />
                    </div>
                    {value.caption && (
                        <figcaption className="text-sm text-muted-foreground mt-3 text-center italic">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
    },
};

interface PortableTextRendererProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any[];
}

export default function PortableTextRenderer({ value }: PortableTextRendererProps) {
    if (!value || value.length === 0) return null;
    return (
        <div className="prose-custom">
            <PortableText value={value} components={components} />
        </div>
    );
}
