<script lang="ts">
	import { reveal } from '#lib/actions/reveal.js';
	import { about, profile } from '#lib/data/portfolio.js';
</script>

<section id="a-propos" class="border-t border-line scroll-mt-20">
	<div class="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[280px_1fr] lg:gap-16">
		<h2 use:reveal={{ from: 'left' }} class="font-display text-4xl font-medium tracking-[-0.02em] sm:text-5xl">{about.title}</h2>

		<div use:reveal={{ delay: 120 }}>
			<div class="max-w-[68ch] space-y-5 text-[17px] leading-relaxed text-paper/85">
				{#each about.paragraphs as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>

			<ul class="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
				{#each about.highlights as item}
					<li class="flex items-start gap-3 text-[15px] text-paper/90">
						<svg class="mt-0.5 shrink-0 text-celadon-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
						{item}
					</li>
				{/each}
			</ul>

			<p class="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-6 text-sm text-muted">
				{#each profile.stats as stat}
					<span><strong class="font-display text-xl font-medium text-paper">{stat.value}</strong> {stat.label}</span>
				{/each}
			</p>

			<h3 class="mt-10 text-base font-semibold">Langues</h3>
			<ul class="mt-4 flex flex-wrap gap-2">
				{#each about.languages as language}
					<li class="rounded-full border border-line px-3 py-1.5 text-[13px] text-paper/90">
						{language.name} <span class="text-muted">· {language.level}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
