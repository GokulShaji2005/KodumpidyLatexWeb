/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const origin = url.origin;
	const lastmod = new Date().toISOString();

	// Single-page site (anchors are not separate crawlable URLs)
	const urls = [
		{
			loc: `${origin}/`,
			changefreq: 'monthly',
			priority: '1.0'
		}
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
		.map(
			(u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
		)
		.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
