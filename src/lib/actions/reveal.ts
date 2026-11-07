import type { Action } from 'svelte/action';

type RevealParams = {
	/** Délai avant le début de l'animation, en millisecondes (effet cascade). */
	delay?: number;
	/** Direction d'arrivée de l'élément. */
	from?: 'up' | 'left' | 'right';
};

/**
 * Fait glisser un élément quand il entre dans l'écran, une seule fois.
 * Sans JavaScript, l'élément reste visible : la classe d'attente
 * n'est ajoutée que par cette action.
 */
export const reveal: Action<HTMLElement, RevealParams | undefined> = (node, params) => {
	let current = params ?? {};
	node.classList.add('reveal-init', `reveal-from-${current.from ?? 'up'}`);
	node.style.transitionDelay = `${current.delay ?? 0}ms`;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.classList.add('is-visible');
		return {
			update(newParams) {
				current = newParams ?? {};
			}
		};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
	);
	observer.observe(node);

	return {
		update(newParams) {
			current = newParams ?? {};
			node.style.transitionDelay = `${current.delay ?? 0}ms`;
		},
		destroy() {
			observer.disconnect();
		}
	};
};
