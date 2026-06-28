const SAFE_WEB_PROTOCOLS = new Set(['http:', 'https:']);
const SAFE_CUSTOM_EMBED_HOSTS = new Set([
	'datawrapper.dwcdn.net',
	'flo.uri.sh',
	'power.lowyinstitute.org',
	'public.tableau.com',
	'www.youtube.com',
	'youtube.com',
	'www.youtube-nocookie.com',
	'youtube-nocookie.com',
]);

type SafeIframeEmbed = {
	type: 'iframe';
	src: string;
	title: string;
	height: number;
	provider: 'generic' | 'datawrapper' | 'tableau';
	id?: string;
};
export type SafeCustomEmbed = SafeIframeEmbed;

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

function getDatawrapperIdFromSrc(src: string) {
	try {
		const parsed = new URL(src);
		if (parsed.hostname !== 'datawrapper.dwcdn.net') return null;
		return parsed.pathname.split('/').filter(Boolean)[0] ?? null;
	} catch {
		return null;
	}
}

function getDatawrapperEmbedFromValue(value: string): SafeIframeEmbed | null {
	const scriptMatch = value.match(/https:\/\/datawrapper\.dwcdn\.net\/([A-Za-z0-9]+)\/embed\.js(?:\?v=\d+)?/i);
	if (scriptMatch?.[1]) {
		const chartId = scriptMatch[1];
		return {
			type: 'iframe',
			src: `https://datawrapper.dwcdn.net/${chartId}/`,
			title: 'Datawrapper chart',
			height: 620,
			provider: 'datawrapper',
			id: `datawrapper-chart-${chartId}`,
		};
	}

	const iframeMatch = value.match(/<iframe\b([^>]*)>(?:<\/iframe>)?/i);
	if (!iframeMatch) return null;

	const attributes = iframeMatch[1] ?? '';
	const safeSrc = getSafeCustomEmbedUrl(getIframeAttribute(attributes, 'src'));
	if (!safeSrc || !safeSrc.includes('datawrapper.dwcdn.net')) return null;
	const chartId = getDatawrapperIdFromSrc(safeSrc) ?? 'chart';

	return {
		type: 'iframe',
		src: safeSrc,
		title: getIframeAttribute(attributes, 'title') || 'Datawrapper chart',
		height: getSafeIframeHeight(getIframeAttribute(attributes, 'height')) || 620,
		provider: 'datawrapper',
		id: `datawrapper-chart-${chartId}`,
	};
}

function getTableauEmbedFromValue(value: string): SafeIframeEmbed | null {
	const directUrlMatch = value.match(/https:\/\/public\.tableau\.com\/views\/([A-Za-z0-9_-]+\/[A-Za-z0-9_-]+)/i);
	if (directUrlMatch?.[1]) {
		return {
			type: 'iframe',
			src: `https://public.tableau.com/views/${directUrlMatch[1]}?:showVizHome=no&:embed=yes`,
			title: 'Tableau visualization',
			height: 860,
			provider: 'tableau',
		};
	}

	const nameMatch = value.match(/<param\s+name=['"]name['"]\s+value=['"]([^'"]+)['"]/i);
	if (!nameMatch?.[1]) return null;

	return {
		type: 'iframe',
		src: `https://public.tableau.com/views/${nameMatch[1]}?:showVizHome=no&:embed=yes`,
		title: 'Tableau visualization',
		height: 860,
		provider: 'tableau',
	};
}

export function getSafeCustomEmbed(value: string): SafeCustomEmbed | null {
	const tableauEmbed = getTableauEmbedFromValue(value);
	if (tableauEmbed) return tableauEmbed;

	const datawrapperEmbed = getDatawrapperEmbedFromValue(value);
	if (datawrapperEmbed) return datawrapperEmbed;

	const iframeMatches = Array.from(value.matchAll(/<iframe\b([^>]*)>(?:<\/iframe>)?/gi));
	if (iframeMatches.length === 0) return null;

	const safeIframes = iframeMatches
		.map((match) => {
			const attributes = match[1] ?? '';
			const safeSrc = getSafeCustomEmbedUrl(getIframeAttribute(attributes, 'src'));
			if (!safeSrc) return null;

			return {
				type: 'iframe' as const,
				src: safeSrc,
				title: getIframeAttribute(attributes, 'title') || 'Embedded media',
				height: getSafeIframeHeight(getIframeAttribute(attributes, 'height')),
				provider: (safeSrc.includes('datawrapper.dwcdn.net') ? 'datawrapper' : 'generic') as 'datawrapper' | 'generic',
				id: safeSrc.includes('datawrapper.dwcdn.net')
					? `datawrapper-chart-${getDatawrapperIdFromSrc(safeSrc) ?? 'chart'}`
					: undefined,
			};
		})
		.filter(Boolean);

	return safeIframes[0] ?? null;
}

export function getSafeCustomEmbedHtml(value: string) {
	const embed = getSafeCustomEmbed(value);
	if (!embed || embed.type !== 'iframe') return null;

	return `<iframe${embed.id ? ` id="${escapeHtmlAttribute(embed.id)}"` : ''} src="${escapeHtmlAttribute(embed.src)}" title="${escapeHtmlAttribute(embed.title)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen scrolling="no" style="width:100%;min-height:${embed.height}px;border:0;overflow:hidden;"></iframe>`;
}
