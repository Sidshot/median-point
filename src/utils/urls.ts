const SAFE_WEB_PROTOCOLS = new Set(['http:', 'https:']);
const SAFE_CUSTOM_EMBED_HOSTS = new Set([
	'datawrapper.dwcdn.net',
	'flo.uri.sh',
	'power.lowyinstitute.org',
	'www.youtube.com',
	'youtube.com',
	'www.youtube-nocookie.com',
	'youtube-nocookie.com',
]);

export function getSafeLink(value: string, options: { allowMailto?: boolean } = {}) {
	const url = value.trim();
	if (!url) return '#';

	if (url.startsWith('/') || url.startsWith('#')) return url;

	try {
		const parsed = new URL(url);
		if (SAFE_WEB_PROTOCOLS.has(parsed.protocol)) return parsed.toString();
		if (options.allowMailto && parsed.protocol === 'mailto:') return parsed.toString();
	} catch {
		return '#';
	}

	return '#';
}

export function getSafeGoogleMapsEmbed(value: string) {
	let candidate = value.trim();
	const iframeMatch = candidate.match(/<iframe[^>]+src=["']([^"']+)["']/i);
	if (iframeMatch) candidate = iframeMatch[1];

	try {
		const parsed = new URL(candidate);
		const isGoogleHost =
			parsed.hostname === 'google.com' ||
			parsed.hostname === 'www.google.com' ||
			parsed.hostname.endsWith('.google.com');

		if (parsed.protocol === 'https:' && isGoogleHost && parsed.pathname.startsWith('/maps/')) {
			// Strip /u/0/ to prevent X-Frame-Options SAMEORIGIN block on redirect
			if (parsed.pathname.startsWith('/maps/d/u/0/embed')) {
				parsed.pathname = parsed.pathname.replace('/maps/d/u/0/embed', '/maps/d/embed');
			}
			return parsed.toString();
		}
	} catch {
		return null;
	}

	return null;
}

export function getSafeTwitterStatusUrl(value: string) {
	const candidate = value.trim();
	if (!candidate) return null;

	const directId = candidate.match(/^\d{5,}$/);
	if (directId) return `https://twitter.com/i/web/status/${directId[0]}`;

	try {
		const parsed = new URL(candidate);
		const isTwitterHost =
			parsed.hostname === 'twitter.com' ||
			parsed.hostname === 'www.twitter.com' ||
			parsed.hostname === 'x.com' ||
			parsed.hostname === 'www.x.com';

		if (!isTwitterHost || parsed.protocol !== 'https:') return null;

		const statusId = parsed.pathname.match(/\/status(?:es)?\/(\d+)/)?.[1];
		if (!statusId) return null;

		return `https://twitter.com/i/web/status/${statusId}`;
	} catch {
		return null;
	}
}

export function getSafeInstagramUrl(value: string) {
	try {
		const parsed = new URL(value.trim());
		const isInstagramHost = parsed.hostname === 'instagram.com' || parsed.hostname === 'www.instagram.com';
		const isSupportedPost =
			parsed.pathname.startsWith('/p/') ||
			parsed.pathname.startsWith('/reel/') ||
			parsed.pathname.startsWith('/tv/');

		if (parsed.protocol !== 'https:' || !isInstagramHost || !isSupportedPost) return null;

		parsed.search = '';
		parsed.hash = '';
		const clean = parsed.toString().replace(/\/$/, '');
		return `${clean}/`;
	} catch {
		return null;
	}
}

export function getSafeFacebookUrl(value: string) {
	try {
		const parsed = new URL(value.trim());
		const isFacebookHost =
			parsed.hostname === 'facebook.com' ||
			parsed.hostname === 'www.facebook.com' ||
			parsed.hostname === 'm.facebook.com' ||
			parsed.hostname === 'web.facebook.com';

		if (parsed.protocol !== 'https:' || !isFacebookHost) return null;
		return parsed.toString();
	} catch {
		return null;
	}
}

export function getSafeYouTubeVideoId(value: string) {
	const candidate = value.trim();
	if (!candidate) return null;

	const directId = candidate.match(/^[A-Za-z0-9_-]{11}$/);
	if (directId) return directId[0];

	try {
		const parsed = new URL(candidate);
		const isYouTubeHost =
			parsed.hostname === 'youtube.com' ||
			parsed.hostname === 'www.youtube.com' ||
			parsed.hostname === 'm.youtube.com' ||
			parsed.hostname === 'youtu.be' ||
			parsed.hostname === 'www.youtu.be' ||
			parsed.hostname === 'youtube-nocookie.com' ||
			parsed.hostname === 'www.youtube-nocookie.com';

		if (!isYouTubeHost || parsed.protocol !== 'https:') return null;

		const videoId =
			parsed.hostname.includes('youtu.be')
				? parsed.pathname.split('/').filter(Boolean)[0]
				: parsed.searchParams.get('v') ??
					parsed.pathname.match(/\/(?:embed|shorts|live)\/([A-Za-z0-9_-]{11})/)?.[1];

		return videoId && /^[A-Za-z0-9_-]{11}$/.test(videoId) ? videoId : null;
	} catch {
		return null;
	}
}

function escapeHtmlAttribute(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

function getIframeAttribute(attributes: string, name: string) {
	const attributePattern = new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i');
	const match = attributes.match(attributePattern);
	return match?.[1] ?? match?.[2] ?? match?.[3] ?? '';
}

function getSafeCustomEmbedUrl(value: string) {
	const candidate = value.trim();
	if (!candidate) return null;

	try {
		const parsed = new URL(candidate);
		const isGoogleMaps =
			(parsed.hostname === 'google.com' ||
				parsed.hostname === 'www.google.com' ||
				parsed.hostname.endsWith('.google.com')) &&
			parsed.pathname.startsWith('/maps/');

		const isAllowedProvider = SAFE_CUSTOM_EMBED_HOSTS.has(parsed.hostname) || isGoogleMaps;
		if (parsed.protocol !== 'https:' || !isAllowedProvider) return null;

		if (parsed.hostname.includes('youtube') && !parsed.pathname.startsWith('/embed/')) return null;

		return parsed.toString();
	} catch {
		return null;
	}
}

function getSafeIframeHeight(value: string) {
	const numericHeight = Number.parseInt(value, 10);
	if (Number.isFinite(numericHeight)) {
		return Math.min(Math.max(numericHeight, 220), 900);
	}

	return 520;
}

export function getSafeCustomEmbedHtml(value: string) {
	const iframeMatches = Array.from(value.matchAll(/<iframe\b([^>]*)>(?:<\/iframe>)?/gi));
	if (iframeMatches.length === 0) return null;

	const safeIframes = iframeMatches
		.map((match) => {
			const attributes = match[1] ?? '';
			const safeSrc = getSafeCustomEmbedUrl(getIframeAttribute(attributes, 'src'));
			if (!safeSrc) return null;

			const title = getIframeAttribute(attributes, 'title') || 'Embedded media';
			const height = getSafeIframeHeight(getIframeAttribute(attributes, 'height'));

			return `<iframe src="${escapeHtmlAttribute(safeSrc)}" title="${escapeHtmlAttribute(title)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="width:100%;min-height:${height}px;border:0;"></iframe>`;
		})
		.filter(Boolean);

	return safeIframes.length > 0 ? safeIframes.join('') : null;
}
