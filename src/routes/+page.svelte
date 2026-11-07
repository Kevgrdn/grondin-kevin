<script lang="ts">
	import Hero from '#lib/components/Hero.svelte';
	import About from '#lib/components/About.svelte';
	import Skills from '#lib/components/Skills.svelte';
	import Projects from '#lib/components/Projects.svelte';
	import Experience from '#lib/components/Experience.svelte';
	import Contact from '#lib/components/Contact.svelte';
</script>

<svelte:head>
	<meta name="description" content="Portfolio de Kevin Grondin, développeur full-stack : projets, compétences, parcours et contact." />
</svelte:head>

<Hero />
<About />
<Projects />
<Skills />
<Experience />
<Contact />
