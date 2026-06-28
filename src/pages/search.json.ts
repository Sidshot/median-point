import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getPostSlug, getPublishedPosts } from '../utils/posts';

export const GET: APIRoute = async () => {
	const posts = getPublishedPosts(await getCollection('blog'));
	const searchIndex = posts.map(post => ({
		title: post.data.title,
		description: post.data.description,
		category: post.data.category || '',
		tags: post.data.tags || [],
		slug: getPostSlug(post),
		pubDate: post.data.pubDate.toISOString(),
		author: post.data.author || 'Sudhanshu Verma',
	}));
	return new Response(JSON.stringify(searchIndex), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=3600',
		},
	});
};
