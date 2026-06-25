const SAFE_WEB_PROTOCOLS = new Set(['http:', 'https:']);

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
