<script lang="ts">
	import { Separator } from 'bits-ui';
	import { reveal } from '#lib/actions/reveal.js';
	import { skillGroups, techStack } from '#lib/data/portfolio.js';
</script>

<section id="competences" class="border-t border-line bg-ink-2 scroll-mt-20">
	<div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
		<div class="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
			<div use:reveal={{ from: 'left' }}>
				<h2 class="font-display text-4xl font-medium tracking-[-0.02em] sm:text-5xl">Compétences</h2>
				<p class="mt-4 max-w-[46ch] leading-relaxed text-muted">
					Celles de mon CV, dans les mêmes trois groupes. Pas de pourcentages. La liste dit ce que je sais faire.
				</p>
			</div>

			<div>
				<div class="grid gap-10 sm:grid-cols-3">
					{#each skillGroups as group, i}
						<div use:reveal={{ delay: i * 110 }}>
							<h3 class="text-base font-semibold">{group.title}</h3>
							<ul class="mt-4 space-y-2.5">
								{#each group.skills as skill}
									<li class="flex items-start gap-2.5 text-[15px] text-paper/90">
										<span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-celadon-400" aria-hidden="true"></span>
										{skill}
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>

				<Separator.Root class="my-12 h-px bg-line" decorative />

				<h3 use:reveal class="font-display text-2xl font-medium tracking-[-0.01em]">Stack technique</h3>
				<p class="mt-3 max-w-[62ch] leading-relaxed text-muted">Les technos et outils derrière ces compétences, rangés par usage.</p>

				<dl class="mt-8 space-y-5">
					{#each techStack as group, i}
						<div use:reveal={{ delay: i * 70 }} class="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-6">
							<dt class="pt-1.5 text-sm font-medium text-paper/90">{group.title}</dt>
							<dd>
								<ul class="flex flex-wrap gap-2">
									{#each group.items as item}
										<li class="rounded-full border border-line bg-ink px-3 py-1.5 font-mono text-[12px] text-frozen-water-100">{item}</li>
									{/each}
								</ul>
							</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>
</section>
