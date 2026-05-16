"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { ZoomIn } from "lucide-react";

interface PortableTextRendererProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any[];
    onImageClick?: (url: string) => void;
}

export default function PortableTextRenderer({ value, onImageClick }: PortableTextRendererProps) {
    if (!value || value.length === 0) return null;

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
                <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base text-justify">
                    {children}
                </p>
            ),
            blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-accent pl-4 my-8 text-muted-foreground text-md md:text-lg ml-4 text-justify">
                    {children}
                </blockquote>
            ),
        },
        list: {
            bullet: ({ children }) => (
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground text-sm md:text-base text-justify">
                    {children}
                </ul>
            ),
            number: ({ children }) => (
                <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground text-sm md:text-base text-justify">
                    {children}
                </ol>
            ),
        },
        listItem: {
            bullet: ({ children }) => (
                <li className="leading-relaxed text-justify">{children}</li>
            ),
            number: ({ children }) => (
                <li className="leading-relaxed text-justify">{children}</li>
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
            image: ({ value: nodeValue }) => {
                if (!nodeValue?.asset) return null;
                const baseImageUrl = urlFor(nodeValue).url();
                return (
                    <figure className="my-10">
                        <div
                            className={`relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-secondary/20 ${onImageClick ? 'cursor-pointer group' : ''}`}
                            onClick={() => onImageClick && onImageClick(baseImageUrl)}
                        >
                            <Image
                                src={`${baseImageUrl}?w=1200&q=90`}
                                alt={nodeValue.alt || "Project image"}
                                fill
                                sizes="(max-width: 768px) 100vw, 800px"
                                className={`object-cover ${onImageClick ? 'group-hover:scale-105 transition-transform duration-500' : ''}`}
                            />
                            {onImageClick && (
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                                </div>
                            )}
                        </div>
                        {nodeValue.caption && (
                            <figcaption className={`text-sm text-muted-foreground mt-3 text-center italic ${onImageClick ? 'group-hover:text-foreground transition-colors' : ''}`}>
                                {nodeValue.caption}
                            </figcaption>
                        )}
                    </figure>
                );
            },
            table: ({ value: nodeValue }) => {
                const rows = nodeValue?.rows;
                if (!rows || rows.length === 0) return null;

                const [headerRow, ...bodyRows] = rows;

                return (
                    <div className="my-8 overflow-x-auto rounded-xl border border-border">
                        <table className="w-full border-collapse text-sm md:text-base">
                            <thead>
                                <tr className="bg-muted/60">
                                    {headerRow.cells.map((cell: string, i: number) => (
                                        <th
                                            key={`${headerRow._key}-${i}`}
                                            className="px-4 py-3 text-left font-semibold text-foreground border-b border-border first:rounded-tl-xl last:rounded-tr-xl"
                                        >
                                            {cell}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {bodyRows.map((row: { _key: string; cells: string[] }) => (
                                    <tr
                                        key={row._key}
                                        className="border-b border-border last:border-b-0 transition-colors hover:bg-muted/30"
                                    >
                                        {row.cells.map((cell: string, i: number) => (
                                            <td
                                                key={`${row._key}-${i}`}
                                                className="px-4 py-3 text-muted-foreground"
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            },
        },
    };
    return (
        <div className="prose-custom">
            <PortableText value={value} components={components} />
        </div>
    );
}
