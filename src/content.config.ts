import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			isDraft: z.boolean().default(false).optional(),
			seoTitle: z.string().optional(),
			seoDescription: z.string().optional(),
			coverImage: z.string().optional(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			author: z.string().default('Sudhanshu Verma'),
			category: z.string().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

export const collections = { blog };
