# AGENTS.md — Portfolio de Kévin Grondin

## Objectif

Site portfolio personnel d'une page, en français. Il présente Kévin Grondin
(architecte logiciel à Montréal, Code Lion depuis janvier 2026, mobilité
France / Canada), ses compétences, sa stack, ses projets, son parcours et sa
formation, avec téléchargement du CV et contact via LinkedIn.

## Stack

- SvelteKit 3 + Svelte 5 (mode runes) + TypeScript strict
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Bits UI 2.x : `Tabs` (Projets), `Accordion` (Parcours), `Dialog` (menu mobile),
  `Progress` (retiré, remplacé par des listes), `Separator` (Hero, Compétences)
- Polices Google Fonts : Fraunces (display), Archivo (sans), IBM Plex Mono (mono)

## Commandes

- `npm run dev -- --port 5173 --host 127.0.0.1` — serveur de développement
- `npm run check` — 0 erreur exigée avant de finir
- `npm run build` — build de production (doit réussir)
- `npm run preview` — prévisualiser le build

## Déploiement (GitHub Actions → VPS OVH)

- `.github/workflows/deploy.yml` : à chaque push sur la branche `Kevin`
  (ou lancement manuel dans l'onglet Actions), GitHub build le site statique
  (`@sveltejs/adapter-static`, dossier `build/`) puis l'envoie en rsync/SSH
  sur le VPS OVH. Un seul déploiement à la fois.
- Secrets GitHub requis (Settings > Secrets and variables > Actions) :
  `OVH_HOST`, `OVH_USER`, `OVH_SSH_KEY` (clé privée), `OVH_PATH` (dossier web
  du VPS, ex. `/var/www/html`). `OVH_PORT` optionnel (22 par défaut).
- Le VPS doit servir le contenu de `OVH_PATH` (nginx ou Apache) et la clé
  publique correspondante doit être dans `~/.ssh/authorized_keys` de
  l'utilisateur OVH.

## Thème (imposé)

Quatre palettes définies comme tokens Tailwind dans `src/app.css` :
`frozen-water` (fond, texte), `celadon` (action principale), `jasmine`
(soulignement du titre, badges « À la une »), `powder-blush` (erreurs).
Ne pas réintroduire d'autres couleurs d'accent (ni lime, ni corail).
Contraste texte ≥ 4,5:1, focus visible, `prefers-reduced-motion` respecté.

## Structure

- `src/lib/data/portfolio.ts` — seul fichier de contenu à modifier
  (profil, compétences, stack, projets, parcours, formation, CV, liens)
- `src/lib/components/` — `Nav`, `Hero`, `About`, `Projects`, `Skills`,
  `Experience`, `Contact`, `Footer`
- `src/lib/actions/reveal.ts` — action `use:reveal` (slide au scroll, une fois)
- `src/lib/assets/developpeur-bureau.png` — illustration du hero
- `static/cv/` — `Kevin_Grondin_CV_France.pdf` (A4),
  `Kevin_Grondin_CV_Canada.pdf` (lettre). Garder ces noms exacts.
- `src/routes/+page.svelte` — assemblage : Hero, About, Projects, Skills,
  Experience, Contact

## Règles à respecter

- **Données** : tout vient du CV. Ne pas inventer de chiffres, notes,
  pourcentages ou projets. Pas d'e-mail publié (absent du CV) : le contact
  passe par LinkedIn, le formulaire mailto est supprimé.
- **Texte (no-ai-slop)** : phrases courtes, verbes directs, faits concrets
  (noms, lieux, dates). Pas de jargon ni de formules creuses.
- **Design (impeccable, mode Experience)** : hero = titre à gauche,
  illustration à droite (empilée sur mobile). Animations : nav qui descend,
  titre et hero en cascade au chargement, slide des sections au scroll.
- **Technique** : `vite.config.ts` garde `ssr.noExternal: ['bits-ui', '@lucide/svelte']`
  (sans quoi le dev SSR renvoie une 500 sur les fichiers `.svelte`).
  Imports via l'alias `#lib/...` avec extension `.js`.
- **Vérification** : après chaque changement, `npm run check`, `npm run build`,
  puis contrôle HTTP de la page (et des PDF si touchés).
