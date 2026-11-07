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

## Structure

- `src/lib/data/portfolio.ts` — tout le contenu éditable
- `src/lib/components/` — Nav, Hero, About, Projects, Skills, Experience, Contact, Footer
- `src/routes/+page.svelte` — assemblage de la page
- `src/app.css` — thème Tailwind (couleurs, polices)
