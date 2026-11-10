# Portfolio — Kevin Grondin

Site portfolio construit avec **SvelteKit**, **TypeScript**, **Tailwind CSS v4** et **Bits UI** (onglets Projets, accordéon Parcours, barres Compétences, menu mobile). Le thème utilise les palettes `frozen-water`, `celadon`, `powder-blush` et `jasmine`, définies dans `src/app.css`.

## Lancer le site

```sh
npm install
npm run dev -- --open
```

Le site est alors disponible sur http://localhost:5173

## Personnaliser le contenu

Tout le contenu se modifie dans un seul fichier :

`src/lib/data/portfolio.ts`

Compétences, stack technique, parcours et formation y sont repris du CV. Les deux PDF téléchargeables sont dans `static/cv/` (version française A4, version canadienne lettre) : remplace ces fichiers pour mettre les CV à jour, en gardant les mêmes noms.

## Commandes

| Commande          | Effet                              |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Serveur de développement           |
| `npm run build`   | Build de production                |
| `npm run preview` | Prévisualiser le build             |
| `npm run check`   | Vérification TypeScript / Svelte   |

## Déploiement sur le VPS OVH

À chaque push sur la branche `Kevin`, le workflow GitHub Actions
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) vérifie le code,
build le site statique dans `build/`, puis l'envoie en rsync/SSH sur le VPS.
Lancement manuel possible depuis l'onglet **Actions** du dépôt.

Secrets à créer dans **Settings > Secrets and variables > Actions** :

| Secret        | Contenu                                              |
| ------------- | ---------------------------------------------------- |
| `OVH_HOST`    | IP ou nom d'hôte du VPS                              |
| `OVH_USER`    | Utilisateur SSH (ex. `debian`, `ubuntu`)             |
| `OVH_SSH_KEY` | Clé privée SSH complète (avec les lignes BEGIN/END)  |
| `OVH_PATH`    | Dossier servi par le serveur web (ex. `/var/www/html`) |
| `OVH_PORT`    | Port SSH, optionnel (22 par défaut)                  |

Sur le VPS : la clé publique correspondante doit être dans
`~/.ssh/authorized_keys` de l'utilisateur, et nginx ou Apache doit servir
le dossier `OVH_PATH`.

## Structure

- `src/lib/data/portfolio.ts` — tout le contenu éditable
- `src/lib/components/` — Nav, Hero, About, Projects, Skills, Experience, Contact, Footer
- `src/routes/+page.svelte` — assemblage de la page
- `src/app.css` — thème Tailwind (couleurs, polices)
