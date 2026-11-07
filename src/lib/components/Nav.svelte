<script lang="ts">
	import { Dialog } from 'bits-ui';
	import { navLinks, profile } from '#lib/data/portfolio.js';

	let open = $state(false);
</script>

<header class="nav-in fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/95">
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
		<a href="#top" class="flex items-baseline gap-2.5" aria-label="Retour en haut, Kévin Grondin">
			<span class="font-display text-[22px] leading-none font-semibold tracking-tight">K<span class="text-celadon-400">.</span>G<span class="text-celadon-400">.</span></span>
			<span class="hidden text-[13px] text-muted sm:inline">{profile.name}</span>
		</a>

		<nav class="hidden items-center gap-7 md:flex" aria-label="Navigation principale">
			{#each navLinks as link}
				<a href={link.href} class="text-sm text-paper/80 transition-colors hover:text-celadon-300">{link.label}</a>
			{/each}
			<a href="#contact" class="rounded-full bg-celadon-400 px-4 py-2 text-sm font-semibold text-celadon-950 transition-colors hover:bg-frozen-water-50">
				Me contacter
			</a>
		</nav>

		<Dialog.Root bind:open>
			<Dialog.Trigger
				class="inline-flex h-10 w-10 items-center justify-center text-paper md:hidden"
				aria-label="Ouvrir le menu"
			>
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h12" /></svg>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay class="fixed inset-0 z-50 bg-frozen-water-950/80" />
				<Dialog.Content
					class="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink-2 px-5 pt-4 pb-6"
					aria-label="Menu de navigation"
				>
					<div class="flex items-center justify-between">
						<Dialog.Title class="font-display text-xl font-semibold">Menu</Dialog.Title>
						<Dialog.Close
							class="inline-flex h-10 w-10 items-center justify-center text-paper"
							aria-label="Fermer le menu"
						>
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
						</Dialog.Close>
					</div>
					<Dialog.Description class="sr-only">Liens vers les sections du portfolio</Dialog.Description>

					<nav aria-label="Navigation mobile">
						<ul class="mt-2 divide-y divide-line">
							{#each navLinks as link}
								<li>
									<a href={link.href} onclick={() => (open = false)} class="block py-3.5 text-lg text-paper/90">{link.label}</a>
								</li>
							{/each}
						</ul>
						<a
							href="#contact"
							onclick={() => (open = false)}
							class="mt-5 block rounded-full bg-celadon-400 px-5 py-3 text-center text-sm font-semibold text-celadon-950"
						>
							Me contacter
						</a>
					</nav>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	</div>
</header>
