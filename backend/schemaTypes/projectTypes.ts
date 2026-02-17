import { defineField, defineType } from 'sanity'

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
            rows: 2,
            description: 'One-liner shown below the title on the detail page hero.',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            description: 'e.g. "Full-Stack Application", "Frontend Development"',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            description: 'Brief description shown on the project card.',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            description: 'Your role in this project, e.g. "Lead Developer", "Full-Stack Engineer"',
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
            description: 'e.g. "Jan 2025 — Mar 2025" or "3 months"',
        }),
        defineField({
            name: 'tech',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            description: 'Technologies used in this project.',
        }),
        defineField({
            name: 'image',
            title: 'Thumbnail Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Used on project cards (homepage, projects listing).',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Full-width cover image on the project detail page. Falls back to thumbnail if empty.',
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        }),
                        defineField({
                            name: 'alt',
                            type: 'string',
                            title: 'Alt Text',
                        }),
                    ],
                },
            ],
            description: 'Additional screenshots for the gallery section.',
        }),
        defineField({
            name: 'liveUrl',
            title: 'Live Demo URL',
            type: 'url',
        }),
        defineField({
            name: 'githubUrl',
            title: 'GitHub URL',
            type: 'url',
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first.',
            initialValue: 0,
        }),
        defineField({
            name: 'body',
            title: 'Body Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        }),
                        defineField({
                            name: 'alt',
                            type: 'string',
                            title: 'Alt Text',
                        }),
                    ],
                },
            ],
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'image',
        },
    },
})