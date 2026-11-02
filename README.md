# 💼 Portfolio - Joseph-Marie Bilé

[![Deploy Status](https://github.com/hpesoj69/joseph-portfolio/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/hpesoj69/joseph-portfolio/actions)

Portfolio personnel développé avec Vue.js 3, Vuetify 3 et Vite.

🌐 **Site en ligne** : https://hpesoj69.github.io/joseph-portfolio/

## Lancer le projet

```bash
npm ci
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

Chaque push sur `main` déclenche le déploiement sur GitHub Pages (`.github/workflows/deploy.yml`).

## Modifier le contenu

Tout le contenu du site (profil, compétences, formation, projets) est dans **`src/data/portfolio.js`**.

- **Ajouter un projet** : ajoute un objet dans `projects` (titre, date, `sortKey` au format `AAAA-MM`,
  catégories, résumé, points forts, technos, lien, image). Mets `featured: true` pour l'afficher en grand.
- **Images** : place-les dans `src/img/`, de préférence en `.webp` (environ 1 400 px de large max).
  Utilise `imageFit: "contain"` pour un logo carré, `"cover"` pour une capture ou un schéma.
- **CV** : remplace `public/CV JOSEPH.pdf` en gardant le même nom.

## Formulaire de contact (EmailJS)

Le formulaire envoie les messages via [EmailJS](https://dashboard.emailjs.com) dès que ces variables sont définies
(GitHub → *Settings → Secrets and variables → Actions → Variables*) :

| Variable              | Où la trouver dans EmailJS        |
| --------------------- | --------------------------------- |
| `EMAILJS_SERVICE_ID`  | Email Services (ex. `service_6no14mc`) |
| `EMAILJS_TEMPLATE_ID` | Email Templates                   |
| `EMAILJS_PUBLIC_KEY`  | Account → General → Public Key    |

En local, crée un fichier `.env.local` avec `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` et
`VITE_EMAILJS_PUBLIC_KEY`. Tant que ces valeurs manquent, le bouton « Send message » ouvre l'application mail du
visiteur avec le message pré-rempli : aucun message n'est perdu.

## Structure

```
src/
├── data/portfolio.js        # tout le contenu
├── assets/main.css          # design system (couleurs, typo, boutons) pour les thèmes clair et sombre
├── components/              # une section = un composant
├── composables/             # thème clair/sombre, section active au scroll
└── directives/reveal.js     # apparition des éléments au défilement
```
