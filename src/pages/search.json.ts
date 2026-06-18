import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
	const posts = await getCollection('blog');
	const searchIndex = posts.map(post => ({
		title: post.data.title,
		description: post.data.description,
		category: post.data.category || '',
		tags: post.data.tags || [],
		slug: post.id,
		pubDate: post.data.pubDate.toISOString(),
		author: post.data.author || 'Sudhanshu Verma',
	}));
	return new Response(JSON.stringify(searchIndex), {
		headers: { 'Content-Type': 'application/json' },
	});
};
