# Portfolio Joseph-Marie Bilé

Portfolio personnel développé avec Vue.js 3 et Vuetify 3.

## 📁 Structure du Projet

```
src/
├── components/          # Composants Vue réutilisables
│   ├── AppHeader.vue           # En-tête de navigation
│   ├── NavigationDrawer.vue    # Menu mobile drawer
│   ├── HomeSection.vue         # Section d'accueil/home
│   ├── AboutSection.vue        # Section "À propos"
│   ├── EducationSection.vue    # Section formation/éducation
│   ├── ProjectsSection.vue     # Section projets
│   ├── ContactSection.vue      # Section contact avec formulaire
│   └── AppFooter.vue           # Pied de page
│
├── data/                # Données du portfolio
│   └── portfolio.js            # Données centralisées (projets, skills, etc.)
│
├── assets/              # Fichiers statiques
│   ├── animations.css          # Animations globales
│   ├── main.css               # Styles globaux
│   └── base.css               # Styles de base
│
├── img/                 # Images
│   ├── Log.png                # Logo
│   ├── Josh.jpg               # Photo de profil
│   └── ...                    # Images des projets
│
├── App.vue              # Composant racine
└── main.js              # Point d'entrée de l'application
```

## 🎨 Architecture

### Composants

Chaque section du portfolio est maintenant un composant Vue indépendant :

- **AppHeader** : Barre de navigation avec menu responsive
- **NavigationDrawer** : Menu latéral pour mobile
- **HomeSection** : Section d'accueil avec présentation
- **AboutSection** : Section "À propos" avec compétences et statistiques
- **EducationSection** : Parcours éducatif avec timeline
- **ProjectsSection** : Galerie de projets avec cartes interactives
- **ContactSection** : Formulaire de contact avec EmailJS
- **AppFooter** : Pied de page avec liens sociaux

### Données Centralisées

Le fichier `src/data/portfolio.js` contient toutes les données :
- `menuItems` : Items du menu de navigation
- `skills` : Compétences techniques
- `education` : Parcours éducatif
- `projects` : Liste des projets

### Styles

- **animations.css** : Animations réutilisables (fadeIn, bounce, pulse)
- **main.css** : Styles globaux de l'application
- **Styles scopés** : Chaque composant a ses propres styles

## 🚀 Commandes

```bash
# Installation des dépendances
npm install

# Développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview

# Déploiement sur GitHub Pages
npm run deploy
```

## 📦 Technologies

- **Vue.js 3** : Framework JavaScript progressif
- **Vuetify 3** : Framework UI Material Design
- **Vite** : Build tool et dev server rapide
- **EmailJS** : Service d'envoi d'emails
- **Material Design Icons** : Bibliothèque d'icônes

## 🔧 Configuration

### EmailJS

Pour configurer l'envoi d'emails dans `ContactSection.vue` :
1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Remplacer les variables dans la méthode `handleSubmit` :
   - `service_6no14mc` : Votre Service ID
   - `my_template_ID` : Votre Template ID
   - `my_public_key` : Votre Public Key

## 📝 Personnalisation

### Modifier les données

Éditez le fichier `src/data/portfolio.js` pour mettre à jour :
- Vos informations personnelles
- Vos compétences
- Votre parcours éducatif
- Vos projets

### Modifier les couleurs

Les couleurs principales sont définies dans les composants avec le gradient :
```css
linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

Vous pouvez les modifier dans `src/assets/animations.css` (variables CSS) et dans les composants.

## 📱 Responsive Design

Le portfolio est entièrement responsive avec :
- Breakpoint mobile : `< 960px`
- Menu hamburger sur mobile
- Grille adaptative pour les projets
- Images et typographie adaptées

## 🌐 Déploiement

Le projet est configuré pour être déployé sur GitHub Pages :
```bash
npm run deploy
```

## 📄 Licence

Projet personnel © 2025 Joseph-Marie Bilé

## 📧 Contact

- Email : joseph-marie.bile@epitech.eu
- GitHub : [Josephgit2025](https://github.com/Josephgit2025)
- LinkedIn : [Joseph-Marie Bilé](https://www.linkedin.com/in/joseph-marie-bilé-283470385)
