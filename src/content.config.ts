import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string().min(1),
			isDraft: z.boolean().default(false),
			seoTitle: z.string().optional(),
			seoDescription: z.string().optional(),
			coverImage: z.string().optional(),
			description: z.string().min(1),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			author: z.string().min(1).default('Sudhanshu Verma'),
			category: z.enum(['Geopolitics', 'Defense & Security', 'Economy & Trade', 'Diplomacy', 'Analysis', 'Opinion']).default('Analysis'),
			tags: z.array(z.string()).default([]),
		}),
});

export const collections = { blog };
