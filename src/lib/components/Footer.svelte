<script lang="ts">
	import { navLinks, profile } from '#lib/data/portfolio.js';
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-line bg-ink-2">
	<div class="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
		<div>
			<p class="font-display text-2xl font-medium">Kévin Grondin<span class="text-celadon-400">.</span></p>
			<p class="mt-2 max-w-[48ch] text-sm leading-relaxed text-muted">
				{profile.role}, {profile.location}. Site fait avec SvelteKit, Tailwind CSS et Bits UI.
			</p>
			<p class="mt-4 text-[13px] text-muted">© {year} {profile.name}. Tous droits réservés.</p>
		</div>

		<nav aria-label="Navigation de pied de page">
			<ul class="flex flex-wrap gap-x-6 gap-y-2">
				{#each navLinks as link}
					<li><a href={link.href} class="text-sm text-paper/75 transition-colors hover:text-celadon-300">{link.label}</a></li>
				{/each}
			</ul>
			<a href="#top" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-celadon-300">
				Retour en haut
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
			</a>
		</nav>
	</div>
</footer>
