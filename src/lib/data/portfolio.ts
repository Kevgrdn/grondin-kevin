/**
 * Contenu du site, extrait du CV de Kévin Grondin.
 * Compétences, stack et parcours repris tels quels du CV.
 * Pour changer un texte, c'est ici.
 */

export const profile = {
	name: 'Kévin Grondin',
	firstName: 'Kévin',
	role: 'Architecte logiciel',
	location: 'Montréal, Québec',
	availability: 'Mobilité France / Canada',
	tagline: 'Je pars d’une maquette, je sécurise une API et je mets le site en ligne.',
	intro:
		'Le développement m’intéresse depuis l’enfance, et c’est devenu mon métier. Après un parcours diplômant en 2021, trois ans chez A.S.R.E.C à Tours et des missions en indépendant, je conçois des applications chez Code Lion, à Montréal.',
	// Aucun courriel publié sur le CV : le contact passe par LinkedIn.
	email: '',
	socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/kevingrondin-dev' }],
	stats: [
		{ value: 'Depuis 2021', label: 'en développement web' },
		{ value: '3 ans', label: 'chez A.S.R.E.C, à Tours' },
		{ value: 'France · Canada', label: 'mobilité' }
	],
	cv: [
		{ label: 'CV, version française', detail: 'Format A4', href: '/cv/Kevin_Grondin_CV_France.pdf' },
		{ label: 'CV, version canadienne', detail: 'Format lettre', href: '/cv/Kevin_Grondin_CV_Canada.pdf' }
	]
};

export const about = {
	title: 'À propos',
	paragraphs: [
		'Je suis Kévin, architecte logiciel à Montréal. Je travaille chez Code Lion depuis janvier 2026, après trois ans chez A.S.R.E.C à Tours et une période en indépendant.',
		'Je prends un projet en entier : intégrer la maquette, construire et sécuriser l’API derrière, puis mettre le site en ligne. En 2021, ça a donné un réseau social d’entreprise, une API sécurisée et un site de commerce en ligne.'
	],
	highlights: [
		'Intégration de maquettes en HTML et CSS',
		'API sécurisées, avec authentification',
		'Sites et boutiques en ligne mis en production',
		'Référencement naturel (SEO) pris en compte dès l’intégration'
	],
	languages: [
		{ name: 'Français', level: 'langue maternelle' },
		{ name: 'Anglais', level: 'profil LinkedIn' },
		{ name: 'Japonais', level: 'initiation universitaire, 2017-2018' }
	]
};

/** Compétences, reprises du CV, dans les trois groupes du CV. */
export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
	{
		title: 'Web',
		skills: ['HTML', 'CSS', 'Sass', 'Intégration de maquette', 'Animations', 'SEO', 'Sites et e-commerce']
	},
	{
		title: 'Développement',
		skills: ['API', 'JavaScript', 'TypeScript', 'SvelteKit', 'Git', 'GitHub']
	},
	{
		title: 'Architecture',
		skills: ['Conception d’applications', 'Automatisation n8n', 'Bases de données', 'Authentification']
	}
];

/** Stack technique, déduite des compétences du CV, rangée par usage. */
export const techStack: { title: string; items: string[] }[] = [
	{ title: 'Langages', items: ['HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript'] },
	{ title: 'Framework', items: ['SvelteKit'] },
	{ title: 'API et données', items: ['API', 'Bases de données', 'Authentification'] },
	{ title: 'Outils', items: ['Git', 'GitHub', 'n8n'] },
	{ title: 'Pratiques', items: ['Intégration de maquette', 'Animations', 'SEO', 'E-commerce'] }
];

export type Project = {
	title: string;
	description: string;
	category: 'Site' | 'Application' | 'API';
	year: string;
	tags: string[];
	href: string;
	featured?: boolean;
};

/** Réalisations du parcours diplômant RNCP, 2021, telles que listées au CV. */
export const projects: Project[] = [
	{
		title: 'Réseau social d’entreprise',
		description: 'Une application web où les employés d’une entreprise échangent entre eux. Travail déposé sur GitHub.',
		category: 'Application',
		year: '2021',
		tags: ['Application web', 'Parcours RNCP'],
		href: '#contact',
		featured: true
	},
	{
		title: 'API sécurisée',
		description: 'Une API protégée par authentification, construite pendant ce parcours.',
		category: 'API',
		year: '2021',
		tags: ['API', 'Authentification', 'Parcours RNCP'],
		href: '#contact',
		featured: true
	},
	{
		title: 'Site de commerce en ligne',
		description: 'Une boutique en ligne complète, du catalogue à la commande.',
		category: 'Site',
		year: '2021',
		tags: ['E-commerce', 'Parcours RNCP'],
		href: '#contact'
	},
	{
		title: 'Page web animée',
		description: 'Des animations CSS sur une page web, pour guider l’œil sans ralentir le chargement.',
		category: 'Site',
		year: '2021',
		tags: ['Animations CSS', 'Parcours RNCP'],
		href: '#contact'
	},
	{
		title: 'Intégration d’une maquette',
		description: 'La découpe d’une maquette puis son intégration en HTML et CSS, au pixel près.',
		category: 'Site',
		year: '2021',
		tags: ['HTML', 'CSS', 'Intégration'],
		href: '#contact'
	}
];

export const experience = [
	{
		period: 'janvier 2026 — aujourd’hui',
		role: 'Architecte logiciels, Code Lion',
		place: 'Montréal, Québec',
		description: 'Je conçois des applications et leur architecture.'
	},
	{
		period: 'mai 2025 — janvier 2026',
		role: 'Développeur web, indépendant',
		place: 'Missions en freelance',
		description: 'Des missions de développement web pour des clients, sans intermédiaire.'
	},
	{
		period: 'avril 2022 — avril 2025',
		role: 'Développeur, A.S.R.E.C',
		place: 'Tours, Centre-Val de Loire',
		description: 'Trois ans de développement logiciel dans l’équipe A.S.R.E.C.'
	},
	{
		period: 'mars 2021 — novembre 2021',
		role: 'Développeur web, indépendant',
		place: 'Parcours diplômant RNCP',
		description:
			'Le parcours qui m’a formé : réseau social d’entreprise, API sécurisée, site de commerce en ligne, référencement naturel, animations et intégration de maquettes. Travail déposé sur GitHub.'
	},
	{
		period: 'mai 2019 — septembre 2020',
		role: 'Conseiller en ventes, Castorama France',
		place: 'Pontault-Combault, Île-de-France',
		description: 'Conseil et vente en magasin, avant le développement.'
	}
];

export const education = [
	{ period: '2023 — 2024', title: 'Concepteur développeur d’applications informatiques', place: 'iSCOD' },
	{ period: '2021', title: 'Développeur web, gestion du web, multimédia et webmaster', place: 'OpenClassrooms' },
	{ period: '2017 — 2018', title: 'Japonais', place: 'Université d’Orléans' },
	{ period: '2015 — 2017', title: 'Économie', place: 'Université de Tours' },
	{ period: '2010 — 2013', title: 'Baccalauréat sciences et technologies de la gestion', place: 'Lycée Rabelais' }
];

export const shortCourses =
	'OpenClassrooms, 2021 : terminal et ligne de commande, SEO, comprendre le web, environnement front-end, animations CSS, Sass, HTML5 et CSS3, découpe et intégration de maquette, Git et GitHub, apprendre à apprendre.';

export const navLinks = [
	{ label: 'À propos', href: '#a-propos' },
	{ label: 'Projets', href: '#projets' },
	{ label: 'Compétences', href: '#competences' },
	{ label: 'Parcours', href: '#parcours' },
	{ label: 'Contact', href: '#contact' }
];
