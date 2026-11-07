<script lang="ts">
	import illustration from '#lib/assets/developpeur-bureau.png';
	import { profile } from '#lib/data/portfolio.js';
</script>

<section id="top" class="mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
	<div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
		<div>
	<p class="hero-in mb-6 inline-flex items-center gap-2 text-sm text-paper/85" style="animation-delay: 0ms">
		<span class="h-2 w-2 rounded-full bg-celadon-400" aria-hidden="true"></span>
		{profile.availability} — {profile.location}
	</p>

	<h1 class="font-display text-[44px] leading-[1.02] font-medium tracking-[-0.02em] text-balance sm:text-6xl lg:text-[76px]">
		<span class="hero-in block" style="animation-delay: 120ms">Kévin Grondin,</span>
		<span class="hero-in block" style="animation-delay: 260ms">
			<span class="underline decoration-jasmine-400 decoration-2 underline-offset-8">architecte logiciel</span><span class="italic">.</span>
		</span>
	</h1>

	<p class="hero-in mt-7 max-w-[62ch] text-lg leading-relaxed text-paper/85" style="animation-delay: 400ms">
		{profile.tagline} {profile.intro}
	</p>

	<div class="hero-in mt-9 flex flex-wrap items-center gap-4" style="animation-delay: 520ms">
		<a href="#projets" class="group inline-flex items-center gap-2 rounded-full bg-celadon-400 px-6 py-3 text-sm font-semibold text-celadon-950 transition-colors hover:bg-frozen-water-50">
			Voir mes projets
			<svg class="transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
		</a>
		<a href="#contact" class="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-celadon-400 hover:text-celadon-300">
			Discuter d’un projet
		</a>
		<a href="#cv" class="inline-flex items-center gap-2 text-sm font-semibold text-celadon-300 underline decoration-celadon-700 underline-offset-4 transition-colors hover:decoration-celadon-300">
			Télécharger mon CV
		</a>
	</div>

	<ul class="hero-in mt-10 flex flex-wrap gap-x-6 gap-y-2" style="animation-delay: 640ms" aria-label="Réseaux sociaux">
		{#each profile.socials as social}
			<li>
				<a href={social.href} target="_blank" rel="noreferrer" class="inline-flex items-center gap-1.5 text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-celadon-300 hover:decoration-celadon-400">
					{social.label}
					<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
				</a>
			</li>
		{/each}
	</ul>
		</div>

		<figure class="hero-side-in mx-auto w-full max-w-[520px] lg:max-w-none" style="animation-delay: 350ms">
			<img
				src={illustration}
				alt="Illustration d’un développeur assis à son bureau, en train de coder sur un ordinateur portable"
				width="1024"
				height="1024"
				class="aspect-square w-full rounded-xl border border-line object-cover"
				loading="eager"
				decoding="async"
			/>
		</figure>
	</div>
</section>
