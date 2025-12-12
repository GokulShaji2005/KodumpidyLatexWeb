<script>
	import '../app.css';
	import KlLatexFavi from '$lib/assets/KlLatexFavi.png';
	import { page } from '$app/stores';
	
	let { children } = $props();

	const siteName = 'Kodumpidy Latex';
	const defaultTitle = 'Kodumpidy Latex | Rubber Latex Collection & DRC Settlements in Kerala';
	const defaultDescription =
		'Rubber Board–licensed latex collection service in Kerala. Transparent DRC-based settlements, 75% advance on collection, ammonia barrel support, and timely balance payments.';

	const canonicalUrl = $derived(`${$page.url.origin}${$page.url.pathname}`);
	const ogImageUrl = $derived(`${$page.url.origin}/images/heroLatexUp.png`);

	const contact = {
		telephone: '+91 9745694494',
		email: 'kodumpidylatex@gmail.com',
		address: {
			streetAddress: 'Thachampurath Buildings, Kodumpidy, Kollappally–Melukkavu Road',
			addressLocality: 'Kadanad Panchayat',
			addressRegion: 'Kerala',
			addressCountry: 'IN'
		}
	};

	const jsonLd = $derived(
		JSON.stringify(
			{
				'@context': 'https://schema.org',
				'@type': 'LocalBusiness',
				name: siteName,
				url: $page.url.origin,
				image: ogImageUrl,
				telephone: contact.telephone,
				email: contact.email,
				address: {
					'@type': 'PostalAddress',
					...contact.address
				},
				areaServed: ['Kerala'],
				description: defaultDescription
			},
			null,
			0
		)
	);
</script>

<svelte:head>
	<link rel="icon" href={KlLatexFavi} />
	<title>{defaultTitle}</title>
	<meta name="description" content={defaultDescription} />
	<link rel="canonical" href={canonicalUrl} />
	<meta name="robots" content="index,follow" />
	<meta name="theme-color" content="#065f46" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={defaultTitle} />
	<meta property="og:description" content={defaultDescription} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:alt" content="Kodumpidy Latex - Rubber latex collection and DRC settlements" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={defaultTitle} />
	<meta name="twitter:description" content={defaultDescription} />
	<meta name="twitter:image" content={ogImageUrl} />

	<script type="application/ld+json">{jsonLd}</script>
</svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-emerald-700 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
>
	Skip to content
</a>

{@render children()}
