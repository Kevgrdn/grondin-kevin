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
		skills: ['API', 'JavaScript', 'TypeScript', 'SvelteKit', 'Vue', 'React', 'NestJS', 'Git', 'GitHub']
	},
	{
		title: 'Architecture',
		skills: ['Conception d’applications', 'Automatisation n8n', 'Bases de données', 'SQL', 'Authentification', 'Rust']
	}
];

/** Stack technique, rangée par usage. */
export const techStack: { title: string; items: string[] }[] = [
	{ title: 'Langages', items: ['HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript', 'SQL', 'Rust'] },
	{ title: 'Frameworks', items: ['SvelteKit', 'Vue', 'React', 'NestJS'] },
	{ title: 'API et données', items: ['API', 'Bases de données', 'Authentification'] },
	{ title: 'Outils', items: ['Git', 'GitHub', 'n8n'] },
	{ title: 'Pratiques', items: ['Intégration de maquette', 'Animations', 'SEO', 'E-commerce'] }
];

export type Project = {
	title: string;
	description: string;
	category: 'Site' | 'Application' | 'API' | 'Automatisation';
	year: string;
	tags: string[];
	href: string;
	featured?: boolean;
};

export const projects: Project[] = [
	{
		title: 'Lecteur IPTV',
		description:
			'Un lecteur IPTV publié sur le Google Play Store. On colle le lien de sa playlist, les chaînes arrivent rangées par catégorie, on cherche celle qu’on veut et on la lance dans le lecteur intégré. Les chaînes qu’on regarde souvent se gardent en favoris, pour les retrouver sans repasser par la liste entière.',
		category: 'Application',
		year: '2026',
		tags: ['Google Play Store', 'IPTV', 'Playlist', 'Streaming'],
		href: '#contact',
		featured: true
	},
	{
		title: 'Portfolio',
		description: 'Ce site est une page en SvelteKit et Tailwind CSS. Les textes viennent de mon CV, et ses deux versions sont téléchargeables en PDF.',
		category: 'Site',
		year: '2026',
		tags: ['SvelteKit', 'Tailwind CSS', 'Bits UI'],
		href: '#top',
		featured: true
	},
	{
		title: 'Automatisations n8n',
		description:
			'Des workflows n8n qui relient les outils entre eux. Quand un outil reçoit une donnée, le workflow la copie, la range et l’envoie aux autres. Chaque workflow supprime une tâche répétitive : transfert de fichiers, envoi de messages, mise à jour de listes.',
		category: 'Automatisation',
		year: '2026',
		tags: ['n8n', 'Workflows', 'Automatisation'],
		href: '#contact'
	},
	{
		title: 'Landing page pour un artisan électricien',
		description:
			'Une page pour un électricien : ce qu’il fait (dépannage, installation, mise aux normes), les villes où il se déplace, et son numéro en haut de la page. Pour le joindre, le visiteur appelle ou laisse un message par le formulaire.',
		category: 'Site',
		year: '2026',
		tags: ['Landing page', 'Artisan', 'SEO local'],
		href: '#contact'
	},
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

export type Job = {
	period: string;
	role: string;
	place: string;
	description: string;
	/** Réalisations du poste, affichées en liste dans le détail déroulé. */
	tasks?: string[];
};

export const experience: Job[] = [
	{
		period: 'janvier 2026 — aujourd’hui',
		role: 'Architecte logiciel, Code Lion',
		place: 'Montréal, Québec',
		description:
			'Je décide comment les données sont rangées et comment les services échangent, avant le premier écran codé. Ensuite je code aussi : la base, les automatisations n8n et les écrans du dashboard.',
		tasks: [
			'Architecture de base de données et synchronisation entre les services.',
			'Automatisation n8n : les workflows relient les outils de l’équipe et suppriment les recopies manuelles.',
			'Développement de l’interface d’un dashboard : les écrans qui affichent ces données aux utilisateurs.'
		]
	},
	{
		period: 'mai 2025 — janvier 2026',
		role: 'Développeur, indépendant',
		place: 'Missions en freelance',
		description: 'Des missions Fiverr et la création de landing pages pour des clients.',
		tasks: ['Missions Fiverr', 'Création de landing pages']
	},
	{
		period: 'avril 2022 — avril 2025',
		role: 'Développeur, A.S.R.E.C',
		place: 'Tours, Centre-Val de Loire',
		description: 'Trois ans dans l’équipe A.S.R.E.C, à construire des services en production.',
		tasks: [
			'Développement d’un microservice d’envoi de notifications.',
			'Développement d’un CRM, architecture backend et frontend.',
			'Développement d’un service de gestion des droits d’accès à une suite de logiciels.'
		]
	},
	{
		period: 'mars 2021 — novembre 2021',
		role: 'Développeur, indépendant',
		place: 'Parcours diplômant RNCP',
		description:
			'Pendant ce parcours, j’ai livré un réseau social d’entreprise, une API sécurisée et un site de commerce en ligne. J’y ai aussi travaillé le référencement naturel, les animations et l’intégration de maquettes. Travail déposé sur GitHub.'
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
