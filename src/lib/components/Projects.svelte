<script lang="ts">
	import { Tabs } from 'bits-ui';
	import { AppWindow, Braces, Globe, LayoutGrid, Workflow } from '@lucide/svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import { projects, type Project } from '#lib/data/portfolio.js';

	const tabs = [
		{ value: 'tous', label: 'Tous', icon: LayoutGrid },
		{ value: 'site', label: 'Sites', icon: Globe },
		{ value: 'application', label: 'Applications', icon: AppWindow },
		{ value: 'api', label: 'API', icon: Braces },
		{ value: 'automatisation', label: 'Automatisations', icon: Workflow }
	] as const;

	type TabValue = (typeof tabs)[number]['value'];

	let active = $state<TabValue>('tous');

	function filtered(tab: TabValue): Project[] {
		if (tab === 'tous') return projects;
		return projects.filter((p) => p.category.toLowerCase() === tab);
	}
</script>

<section id="projets" class="border-t border-line scroll-mt-20">
	<div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
		<h2 use:reveal={{ from: 'left' }} class="font-display text-4xl font-medium tracking-[-0.02em] sm:text-5xl">Projets sélectionnés</h2>
		<p use:reveal={{ delay: 100 }} class="mt-4 max-w-[62ch] leading-relaxed text-muted">
			Lecteur IPTV, ce portfolio et une landing page sont publiés. Le reste vient de mon parcours diplômant RNCP, en 2021, là où j’ai appris le métier.
		</p>

		<Tabs.Root bind:value={active} class="mt-10">
			<Tabs.List class="flex flex-wrap gap-2" aria-label="Filtrer les projets par type">
				{#each tabs as tab}
					<Tabs.Trigger
						value={tab.value}
						class="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-paper/80 transition-colors hover:border-celadon-400 hover:text-celadon-300 data-[state=active]:border-celadon-400 data-[state=active]:bg-celadon-400 data-[state=active]:font-semibold data-[state=active]:text-celadon-950"
					>
						<tab.icon size={15} strokeWidth={1.8} aria-hidden="true" />
						{tab.label}
					</Tabs.Trigger>
				{/each}
			</Tabs.List>

			{#each tabs as tab}
				{@const list = filtered(tab.value)}
				<Tabs.Content value={tab.value}>
					<p class="mt-6 text-sm text-muted" aria-live="polite">
						{list.length} projet{list.length > 1 ? 's' : ''}
					</p>
					<ul class="mt-4 divide-y divide-line border-y border-line">
						{#each list as project, i (project.title)}
							<li use:reveal={{ delay: i * 90 }}>
								<a href={project.href} class="group grid gap-3 py-7 sm:grid-cols-[64px_1fr_auto] sm:gap-6 sm:py-8">
									<span class="font-mono text-sm text-muted tabular-nums">{project.year}</span>
									<span>
										<span class="flex flex-wrap items-center gap-3">
											<span class="font-display text-2xl font-medium tracking-[-0.01em] group-hover:text-celadon-300 sm:text-[28px]">{project.title}</span>
											{#if project.featured}
												<span class="rounded-full bg-jasmine-400 px-2.5 py-0.5 text-[11px] font-bold text-jasmine-950">À la une</span>
											{/if}
										</span>
										<span class="mt-2 block max-w-[68ch] leading-relaxed text-paper/75">{project.description}</span>
										<span class="mt-3 flex flex-wrap gap-2">
											{#each project.tags as tag}
												<span class="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted">{tag}</span>
											{/each}
										</span>
									</span>
									<span class="hidden items-start pt-1 text-muted transition-all group-hover:translate-x-1 group-hover:text-celadon-300 sm:block" aria-hidden="true">
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
									</span>
								</a>
							</li>
						{:else}
							<li class="py-10 text-muted">Rien dans cette catégorie pour l’instant.</li>
						{/each}
					</ul>
				</Tabs.Content>
			{/each}
		</Tabs.Root>
	</div>
</section>
