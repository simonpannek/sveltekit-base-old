<script>
	import { onMount } from "svelte";

	import "../app.postcss";

	// Array of all required Google fonts
	const fonts = ["JetBrains+Mono:wght@300;600"];

	// Link to the required fonts
	const fontLink = `https://fonts.googleapis.com/css2?family=${fonts.join("&family=")}&display=optional`;

	// Whether the layout has been loaded
	let loaded = false;
	onMount(() => (loaded = true));
</script>

<svelte:head>
	<!-- Preconnect to google fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

	<!-- Preload the fonts if possible -->
	<link href={fontLink} rel="preload" as="style" />

	<!-- Import fonts asynchronously -->
	<link href={fontLink} rel="stylesheet" media={loaded ? "all" : "print"} />

	<!-- Default fallback if JavaScript is disabled -->
	<noscript>
		<link href={fontLink} rel="stylesheet" />
	</noscript>

	<!-- Dynamic title -->
	<title>Site title</title>
	<!-- Dynamic meta description -->
	<meta name="description" content="Site description" />
</svelte:head>

<style lang="postcss">
	:global(body) {
		/* Global default font */
		font-family: "JetBrains Mono", monospace;
		font-weight: 300;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		/* Global default weight for headings */
		font-weight: 600;
	}
</style>
