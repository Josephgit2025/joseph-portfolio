# 💼 Portfolio - Joseph-Marie Bilé

[![Deploy Status](https://github.com/Josephgit2025/joseph-portfolio/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/Josephgit2025/joseph-portfolio/actions)

Portfolio personnel développé avec Vue.js 3, Vuetify 3 et Vite.

🌐 **Site en ligne** : [https://josephgit2025.github.io/joseph-portfolio-public/](https://josephgit2025.github.io/joseph-portfolio-public/)

---

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Lancer en mode développement
npm run dev

# Build de production
npm run build

# Déployer sur GitHub Pages
npm run deploy
```

Ou utilisez le script automatique :
```bash
./deploy.sh
```

---

## 📁 Structure du Projet

```
src/
├── components/          # Composants Vue modulaires
│   ├── AppHeader.vue           # En-tête avec navigation
│   ├── NavigationDrawer.vue    # Menu mobile
│   ├── HomeSection.vue         # Section d'accueil
│   ├── AboutSection.vue        # À propos + compétences
│   ├── EducationSection.vue    # Parcours éducatif
│   ├── ProjectsSection.vue     # Galerie de projets
│   ├── ContactSection.vue      # Formulaire de contact
│   └── AppFooter.vue           # Pied de page
│
├── data/                # Données centralisées
│   └── portfolio.js            # Projets, skills, éducation
│
├── assets/              # Styles globaux
│   ├── animations.css          # Animations
│   ├── main.css               # Styles principaux
│   └── base.css               # Styles de base
│
├── img/                 # Images du portfolio
├── App.vue              # Composant racine
└── main.js              # Point d'entrée
```

---

## 🎨 Sections du Portfolio

### 1. **Home Section** 🏠
- Présentation personnelle
- Photo de profil avec animations
- Boutons CTA (Projets, Contact)
- Liens sociaux (GitHub, LinkedIn, Email)

### 2. **About Section** 👤
- Présentation détaillée
- Statistiques (études, projets, technologies)
- Compétences techniques avec icônes
- Animations interactives

### 3. **Education Section** 🎓
- Timeline du parcours éducatif
- EPITECH Nantes
- Université Virtuelle de Côte d'Ivoire
- Baccalauréat

### 4. **Projects Section** 💻
- Galerie de projets avec images
- Technologies utilisées
- Liens vers les repositories
- Overlay au hover

### 5. **Contact Section** 📧
- Formulaire de contact (EmailJS)
- Informations de contact
- Liens sociaux
- Bouton téléchargement CV

### 6. **Footer** 📄
- Liens sociaux
- Copyright
- Logo

---

## 🛠️ Technologies

- **Vue.js 3** - Framework JavaScript progressif
- **Vuetify 3** - Framework UI Material Design
- **Vite** - Build tool ultra-rapide
- **EmailJS** - Service d'envoi d'emails
- **Material Design Icons** - Bibliothèque d'icônes
- **GitHub Pages** - Hébergement gratuit

---

## 📝 Personnalisation

### Modifier vos informations

Éditez `src/data/portfolio.js` :

```javascript
export const skills = [
  { name: "Votre Tech", level: "Description", icon: "mdi-icon", color: "#color" }
];

export const projects = [
  {
    title: "Votre Projet",
    description: "Description...",
    techs: ["Tech1", "Tech2"],
    link: "https://github.com/...",
    image: yourImage
  }
];
```

### Modifier les couleurs

Les couleurs principales utilisent ce gradient :
```css
linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

Modifiable dans `src/assets/animations.css` et les composants.

### Ajouter des images

Placez vos images dans `src/img/` et importez-les :
```javascript
import monImage from "@/img/mon-image.jpg";
```

---

## 📧 Configuration EmailJS

Pour activer le formulaire de contact :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email
3. Créez un template
4. Récupérez vos clés
5. Éditez `src/components/ContactSection.vue` :

```javascript
emailjs.send(
  "VOTRE_SERVICE_ID",      // Votre Service ID
  "VOTRE_TEMPLATE_ID",     // Votre Template ID
  {...},
  "VOTRE_PUBLIC_KEY"       // Votre Public Key
)
```

---

## 🚀 Déploiement

### Méthode 1 : GitHub Pages (Manuel)

```bash
npm run build
npm run deploy
```

### Méthode 2 : GitHub Actions (Automatique)

Push sur la branche `main` déclenche automatiquement le déploiement !

### Méthode 3 : Vercel/Netlify

1. Connectez votre compte GitHub
2. Importez le repository
3. Deploy automatiquement ! ✨

📖 **Guide détaillé** : [DEPLOY_QUICK.md](./DEPLOY_QUICK.md)

---

## 📚 Documentation

- 📖 [STRUCTURE.md](./STRUCTURE.md) - Structure détaillée du projet
- 🛠️ [DEVELOPMENT.md](./DEVELOPMENT.md) - Guide pour développeurs
- 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md) - Guide de déploiement complet
- ⚡ [DEPLOY_QUICK.md](./DEPLOY_QUICK.md) - Déploiement rapide
- 📝 [RECAP.md](./RECAP.md) - Résumé de la restructuration

---

## 🎯 Fonctionnalités

✅ Design moderne et responsive  
✅ Animations fluides  
✅ Navigation smooth scroll  
✅ Menu mobile hamburger  
✅ Formulaire de contact fonctionnel  
✅ Téléchargement de CV  
✅ Liens sociaux  
✅ SEO optimisé  
✅ Performance optimale  

---

## 📱 Responsive Design

Le portfolio est entièrement responsive :
- 📱 Mobile (< 600px)
- 📱 Tablette (600px - 960px)
- 💻 Desktop (> 960px)

---

## 🔧 Scripts npm

```bash
npm run dev       # Serveur de développement (http://localhost:5173)
npm run build     # Build de production dans /dist
npm run preview   # Prévisualiser le build (http://localhost:4173)
npm run deploy    # Déployer sur GitHub Pages
```

---

## 🐛 Résolution de Problèmes

### Le site ne se charge pas en local
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreurs de build
```bash
npm run build
# Vérifiez les erreurs dans le terminal
```

### Images manquantes
- Vérifiez que les images sont dans `src/img/`
- Utilisez `@/img/` dans les imports

---

## 📊 Performance

- ⚡ Temps de chargement : < 2s
- 🎨 First Contentful Paint : < 1.5s
- 📦 Taille du bundle : ~500KB
- ♿ Accessibilité : AA

---

## 🤝 Contribution

Ce projet est personnel, mais les suggestions sont les bienvenues !

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

## 📄 Licence

© 2025 Joseph-Marie Bilé. Tous droits réservés.

---

## 📧 Contact

**Joseph-Marie Bilé**

- 📧 Email : [joseph-marie.bile@epitech.eu](mailto:joseph-marie.bile@epitech.eu)
- 💼 LinkedIn : [Joseph-Marie Bilé](https://www.linkedin.com/in/joseph-marie-bilé-283470385)
- 🐙 GitHub : [Josephgit2025](https://github.com/Josephgit2025)
- 🌐 Portfolio : [josephgit2025.github.io/joseph-portfolio-public](https://josephgit2025.github.io/joseph-portfolio-public/)

---

## 🌟 Remerciements

- [Vue.js](https://vuejs.org/) - Framework JavaScript
- [Vuetify](https://vuetifyjs.com/) - UI Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [EmailJS](https://www.emailjs.com/) - Email Service
- [Material Design Icons](https://materialdesignicons.com/) - Icônes

---

**Développé avec ❤️ par Joseph-Marie Bilé**

🎓 Étudiant en Informatique à EPITECH Nantes  
💡 Passionné par la cybersécurité et l'intelligence artificielle
