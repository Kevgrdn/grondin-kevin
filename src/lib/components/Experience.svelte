<script lang="ts">
	import { Accordion } from 'bits-ui';
	import { reveal } from '#lib/actions/reveal.js';
	import { education, experience, profile, shortCourses } from '#lib/data/portfolio.js';

	let open = $state(experience[0]?.role ?? '');
</script>

<section id="parcours" class="border-t border-line bg-ink-2 scroll-mt-20">
	<div class="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[280px_1fr] lg:gap-16">
		<div use:reveal={{ from: 'left' }}>
			<h2 class="font-display text-4xl font-medium tracking-[-0.02em] sm:text-5xl">Parcours</h2>
			<p class="mt-4 max-w-[46ch] leading-relaxed text-muted">Mes postes, du plus récent au premier. Clique sur un poste pour le détail.</p>

			<h3 class="mt-8 text-sm font-semibold">Télécharger mon CV</h3>
			<ul class="mt-3 space-y-2">
				{#each profile.cv as cv}
					<li>
						<a
							href={cv.href}
							download
							class="inline-flex items-center gap-2 text-sm font-medium text-celadon-300 underline decoration-celadon-700 underline-offset-4 transition-colors hover:decoration-celadon-300"
						>
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M6 11l6 6 6-6M4 21h16" /></svg>
							{cv.label} <span class="text-muted">({cv.detail})</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<Accordion.Root type="single" bind:value={open} class="divide-y divide-line border-y border-line">
				{#each experience as job, i}
					<div use:reveal={{ delay: i * 90 }}>
					<Accordion.Item value={job.role}>
						<Accordion.Header>
							<Accordion.Trigger class="group grid w-full gap-1 py-6 text-left sm:grid-cols-[190px_1fr_auto] sm:items-baseline sm:gap-8">
								<span class="font-mono text-[13px] text-muted tabular-nums">{job.period}</span>
								<span>
									<span class="block text-lg font-semibold group-hover:text-celadon-300">{job.role}</span>
									<span class="mt-0.5 block text-sm text-celadon-300">{job.place}</span>
								</span>
								<svg class="hidden text-muted transition-transform duration-200 group-data-[state=open]:rotate-45 sm:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
							</Accordion.Trigger>
						</Accordion.Header>
						<Accordion.Content>
							<p class="max-w-[65ch] pb-7 leading-relaxed text-paper/75 sm:pl-[222px]">{job.description}</p>
						</Accordion.Content>
					</Accordion.Item>
					</div>
				{/each}
			</Accordion.Root>

			<h3 use:reveal class="mt-12 font-display text-2xl font-medium tracking-[-0.01em]">Formation</h3>
			<ul class="mt-5 divide-y divide-line border-y border-line">
				{#each education as item, i}
					<li use:reveal={{ delay: i * 70 }} class="grid gap-1 py-4 sm:grid-cols-[190px_1fr] sm:gap-8">
						<span class="font-mono text-[13px] text-muted tabular-nums">{item.period}</span>
						<span class="text-[15px]"><span class="font-medium">{item.title}</span> <span class="text-muted">· {item.place}</span></span>
					</li>
				{/each}
			</ul>
			<p use:reveal class="mt-5 max-w-[68ch] text-sm leading-relaxed text-muted">{shortCourses}</p>
		</div>
	</div>
</section>
