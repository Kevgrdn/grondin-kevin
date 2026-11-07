<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import Nav from '#lib/components/Nav.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Kévin Grondin, architecte logiciel</title>
</svelte:head>

<a
	href="#contenu"
	class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-celadon-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-celadon-950"
>
	Aller au contenu
</a>

<Nav />
<main id="contenu">
	{@render children()}
</main>
<Footer />
