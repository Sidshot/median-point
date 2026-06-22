import type { CollectionEntry } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;

export function isPublishedPost(post: BlogPost, now = Date.now()) {
	return !post.data.isDraft && post.data.pubDate.getTime() <= now;
}

export function getPublishedPosts(posts: BlogPost[]) {
	const now = Date.now();

	return posts
		.filter((post) => isPublishedPost(post, now))
		.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
