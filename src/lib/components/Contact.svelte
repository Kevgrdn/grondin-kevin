<script lang="ts">
	import { reveal } from '#lib/actions/reveal.js';
	import { profile } from '#lib/data/portfolio.js';

	const linkedin = profile.socials[0];
</script>

<section id="contact" class="border-t border-line scroll-mt-20">
	<div class="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
		<div use:reveal={{ from: 'left' }}>
			<h2 class="font-display text-4xl font-medium tracking-[-0.02em] text-balance sm:text-5xl">Un projet, un poste, une question ?</h2>
			<p class="mt-5 max-w-[55ch] leading-relaxed text-paper/85">
				Le plus simple est de m’écrire sur LinkedIn. Dis-moi ce que tu veux construire, où tu en es et pour quand. Je suis à Montréal, avec une mobilité France / Canada.
			</p>

			<a
				href={linkedin.href}
				target="_blank"
				rel="noreferrer"
				class="group mt-8 inline-flex items-center gap-2 rounded-full bg-celadon-400 px-6 py-3 text-sm font-semibold text-celadon-950 transition-colors hover:bg-frozen-water-50"
			>
				M’écrire sur LinkedIn
				<svg class="transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
			</a>

			<dl class="mt-10 space-y-5 text-[15px]">
				<div>
					<dt class="text-muted">Basé à</dt>
					<dd class="mt-1 font-medium">{profile.location} · {profile.availability}</dd>
				</div>
				<div>
					<dt class="text-muted">Poste actuel</dt>
					<dd class="mt-1 font-medium">Architecte logiciels chez Code Lion, depuis janvier 2026</dd>
				</div>
			</dl>
		</div>

		<div id="cv" use:reveal={{ from: 'right', delay: 120 }} class="self-start scroll-mt-24">
			<h3 class="font-display text-2xl font-medium tracking-[-0.01em]">Mon CV en PDF</h3>
			<p class="mt-3 leading-relaxed text-muted">Deux versions du même parcours. La française est au format A4, la canadienne au format lettre.</p>

			<ul class="mt-6 space-y-3">
				{#each profile.cv as cv}
					<li>
						<a
							href={cv.href}
							download
							class="group flex items-center justify-between gap-4 rounded-xl border border-line bg-ink-2 px-5 py-4 transition-colors hover:border-celadon-400"
						>
							<span>
								<span class="block font-medium group-hover:text-celadon-300">{cv.label}</span>
								<span class="mt-0.5 block text-sm text-muted">{cv.detail} · PDF</span>
							</span>
							<span class="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-celadon-300">
								Télécharger
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M6 11l6 6 6-6M4 21h16" /></svg>
							</span>
						</a>
					</li>
				{/each}
			</ul>

			<p class="mt-5 text-sm leading-relaxed text-muted">
				Tout est aussi sur cette page : parcours, formation, compétences.
			</p>
		</div>
	</div>
</section>
