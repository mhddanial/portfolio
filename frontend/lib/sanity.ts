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

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    subtitle,
    category,
    description,
    role,
    duration,
    tech,
    "imageUrl": image.asset->url,
    image,
    heroImage,
    gallery[] {
      asset->,
      caption,
      alt
    },
    liveUrl,
    githubUrl,
    publishedAt,
    order,
    body
  }
`;

export const allProjectSlugsQuery = `
  *[_type == "project"] { "slug": slug.current }
`;

export const adjacentProjectsQuery = `{
  "prev": *[_type == "project" && order < $currentOrder] | order(order desc) [0] {
    title,
    slug
  },
  "next": *[_type == "project" && order > $currentOrder] | order(order asc) [0] {
    title,
    slug
  }
}`;

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
  order?: number;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface GalleryImage {
  asset: { url: string; _id: string };
  caption?: string;
  alt?: string;
}

export interface ProjectDetail extends Project {
  subtitle: string | null;
  role: string | null;
  duration: string | null;
  heroImage: SanityImageSource | null;
  gallery: GalleryImage[] | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[] | null;
}

export interface AdjacentProject {
  title: string;
  slug: { current: string };
}
