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
            name: 'tech',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            description: 'Technologies used in this project.',
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true },
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
            type: 'array',
            of: [{ type: 'block' }],
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