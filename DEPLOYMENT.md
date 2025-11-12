# 🚀 Guide de Déploiement - Portfolio

## Méthode 1 : GitHub Pages (Recommandé) ⭐

### Étape 1 : Vérifier la configuration

Le fichier `vite.config.js` doit avoir le bon `base` :
```javascript
base: '/nom-de-votre-repo/'
```

### Étape 2 : Build et Déploiement

```bash
# 1. Build du projet
npm run build

# 2. Déploiement sur GitHub Pages
npm run deploy
```

### Étape 3 : Activer GitHub Pages

1. Allez sur GitHub : `https://github.com/Josephgit2025/joseph-portfolio`
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez la branche **gh-pages**
5. Cliquez sur **Save**

Votre site sera disponible à : `https://josephgit2025.github.io/joseph-portfolio/`

---

## Méthode 2 : Vercel (Très Simple) 🚀

### Avantages
- Déploiement automatique à chaque push
- HTTPS gratuit
- Domaine personnalisé gratuit
- Très rapide

### Étapes

1. **Créer un compte sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec GitHub

2. **Importer le projet**
   - Cliquez sur "New Project"
   - Sélectionnez votre repo `joseph-portfolio`
   - Vercel détectera automatiquement Vite

3. **Configuration (automatique)**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Déployer**
   - Cliquez sur "Deploy"
   - Attendez 1-2 minutes

Votre site sera disponible à : `https://votre-projet.vercel.app`

---

## Méthode 3 : Netlify 🌐

### Avantages
- Interface intuitive
- Formulaires intégrés
- Redirections faciles
- Domaine personnalisé gratuit

### Étapes

1. **Créer un compte sur Netlify**
   - Allez sur [netlify.com](https://netlify.com)
   - Connectez-vous avec GitHub

2. **Nouveau site depuis Git**
   - Cliquez sur "Add new site" → "Import an existing project"
   - Choisissez GitHub
   - Sélectionnez votre repo

3. **Configuration du build**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Déployer**
   - Cliquez sur "Deploy site"
   - Attendez le déploiement

Votre site sera disponible à : `https://random-name.netlify.app`

Vous pouvez changer le nom dans les paramètres !

---

## Méthode 4 : GitHub Pages avec GitHub Actions (Automatique)

### Avantages
- Déploiement automatique à chaque push
- Pas besoin de `npm run deploy`

### Configuration

1. **Créer le fichier de workflow**

Créez `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. **Activer GitHub Pages**
   - Repo Settings → Pages
   - Source : branche `gh-pages`

3. **Push votre code**
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment"
   git push
   ```

Le site se déploiera automatiquement !

---

## 📋 Checklist Avant Déploiement

- [ ] Vérifier que `npm run build` fonctionne sans erreur
- [ ] Tester localement avec `npm run preview`
- [ ] Vérifier que toutes les images sont accessibles
- [ ] Configurer EmailJS avec vos vraies clés
- [ ] Mettre à jour le CV dans `/public/`
- [ ] Vérifier les liens sociaux (GitHub, LinkedIn)
- [ ] Tester le responsive sur mobile
- [ ] Vérifier le `base` dans `vite.config.js`

---

## 🔧 Configuration du `base` dans vite.config.js

### Pour GitHub Pages
```javascript
base: '/joseph-portfolio/'  // Nom de votre repo
```

### Pour Vercel/Netlify ou domaine personnalisé
```javascript
base: '/'
```

---

## 🌍 Domaine Personnalisé (Optionnel)

### Avec Vercel
1. Settings → Domains
2. Ajoutez votre domaine
3. Suivez les instructions DNS

### Avec Netlify
1. Domain settings → Add custom domain
2. Suivez les instructions DNS

### Avec GitHub Pages
1. Créez un fichier `public/CNAME` avec votre domaine
2. Configurez les DNS chez votre hébergeur

---

## 🐛 Résolution de Problèmes

### Le site ne s'affiche pas
- Vérifiez le `base` dans `vite.config.js`
- Assurez-vous que GitHub Pages est activé
- Attendez 5-10 minutes après le déploiement

### Les images ne s'affichent pas
- Vérifiez les chemins : utilisez `@/img/` au lieu de `/img/`
- Assurez-vous que les images sont dans `src/img/`

### Le CSS ne s'applique pas
- Vérifiez que `npm run build` ne produit pas d'erreurs
- Clearez le cache du navigateur (Ctrl + Shift + R)

### Erreur 404 sur les routes
- Ajoutez un fichier `public/_redirects` pour Netlify :
  ```
  /*    /index.html   200
  ```

---

## 📱 Tester Avant Déploiement

```bash
# 1. Build de production
npm run build

# 2. Prévisualiser le build
npm run preview

# 3. Ouvrir http://localhost:4173
```

---

## 🚀 Commandes Rapides

```bash
# Développement local
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Déployer sur GitHub Pages
npm run deploy
```

---

## 📊 Comparaison des Plateformes

| Plateforme | Difficulté | Vitesse | Auto-deploy | Gratuit |
|------------|------------|---------|-------------|---------|
| **GitHub Pages** | ⭐⭐ | Moyen | Avec Actions | ✅ |
| **Vercel** | ⭐ | Très rapide | ✅ | ✅ |
| **Netlify** | ⭐ | Rapide | ✅ | ✅ |

---

## 🎯 Recommandation

Pour un déploiement **rapide et simple** : **Vercel** ou **Netlify**

Pour rester sur **GitHub** uniquement : **GitHub Pages avec Actions**

---

## 💡 Conseils

1. **Testez toujours localement avant de déployer**
2. **Utilisez Git pour versionner vos changements**
3. **Configurez un domaine personnalisé pour plus de professionnalisme**
4. **Activez HTTPS (automatique sur Vercel/Netlify)**
5. **Surveillez les analytics pour voir les visites**

---

## 📧 Support

Si vous rencontrez des problèmes :
1. Vérifiez les logs de build
2. Consultez la documentation de la plateforme
3. Vérifiez que toutes les dépendances sont installées
4. Testez avec `npm run preview` en local

Bon déploiement ! 🚀
