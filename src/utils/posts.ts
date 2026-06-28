import type { CollectionEntry } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;

export function getPostSlug(post: BlogPost) {
	return post.data.slug?.trim() || post.id;
}

export function getPostPreviewImage(body = '', coverImage?: string) {
	const markdownImage = body.match(/!\[[^\]]*\]\(([^)]+)\)/);
	if (markdownImage?.[1]) return markdownImage[1];

	const imageCaptionMatch = body.match(/<ImageCaption[\s\S]*?\bsrc="([^"]+)"/);
	if (imageCaptionMatch?.[1]) return imageCaptionMatch[1];

	const htmlImage = body.match(/<img[^>]+src=["']([^"']+)["']/);
	if (htmlImage?.[1]) return htmlImage[1];

	if (coverImage?.trim()) return coverImage.trim();

	return null;
}

export function isPublishedPost(post: BlogPost, now = Date.now()) {
	return !post.data.isDraft && post.data.pubDate.getTime() <= now;
}

export function getPublishedPosts(posts: BlogPost[]) {
	const now = Date.now();

	return posts
		.filter((post) => isPublishedPost(post, now))
		.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
