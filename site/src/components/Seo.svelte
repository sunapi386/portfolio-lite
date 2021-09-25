<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string =
		"I'm a Swedish/Dutch guy living in the Stockholm area. I build things for the web and for mobile devices.";
	export let keywords: string[] = [
		'web developer',
		'javascript',
		'typescript',
		'frontend',
		'backend',
		'react'
	];
	export let url: string = $page.host + $page.path;

	export let image: string = '/meta.png';
</script>

<svelte:head>
	<title>{title} | Albin Groen</title>
	<meta name="description" content={description} />

	<meta name="keywords" content={keywords.join(', ')} />
	<meta name="author" content="Albin Groen" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={image} />
	<meta property="og:image" content={image} />
	<meta itemProp="image" content={image} />
	<meta content={image} name="image" />
</svelte:head>
