import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = Parameters<ReturnType<typeof createImageUrlBuilder>["image"]>[0];

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: "2024-01-01",
    useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

// ── GROQ Queries ──

export const projectsQuery = `
  *[_type == "project"] | order(order asc, publishedAt desc) {
    _id,
    title,
    slug,
    category,
    description,
    tech,
    "imageUrl": image.asset->url,
    image,
    liveUrl,
    githubUrl,
    publishedAt
  }
`;

// ── Types ──

export interface Project {
    _id: string;
    title: string;
    slug: { current: string };
    category: string;
    description: string;
    tech: string[];
    imageUrl: string | null;
    image: SanityImageSource | null;
    liveUrl: string | null;
    githubUrl: string | null;
    publishedAt: string;
}
