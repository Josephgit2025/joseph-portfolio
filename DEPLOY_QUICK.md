# 🚀 Déploiement Rapide

## Option 1 : Déploiement Manuel (Le Plus Rapide)

### Étape 1 : Build
```bash
npm run build
```

### Étape 2 : Déployer
```bash
npm run deploy
```

✅ C'est tout ! Votre site sera en ligne dans 2-5 minutes.

**URL** : https://josephgit2025.github.io/joseph-portfolio-public/

---

## Option 2 : Utiliser le Script Automatique

```bash
./deploy.sh
```

Ce script fait le build ET le déploiement automatiquement !

---

## Option 3 : Déploiement Automatique (Recommandé)

Avec GitHub Actions, chaque fois que vous push sur `main`, le site se déploie automatiquement !

### Configuration (une seule fois)

1. **Allez sur GitHub**
   ```
   https://github.com/Josephgit2025/joseph-portfolio
   ```

2. **Paramètres → Pages**
   - Settings → Pages
   - Source : **GitHub Actions**
   - Sauvegardez

3. **Push votre code**
   ```bash
   git add .
   git commit -m "Setup deployment"
   git push
   ```

✅ Le site se déploiera automatiquement !

---

## Vérifier le Déploiement

Après le déploiement, vérifiez :
- ✅ Le site s'affiche correctement
- ✅ Les images se chargent
- ✅ La navigation fonctionne
- ✅ Le formulaire de contact fonctionne
- ✅ Le site est responsive (mobile)

---

## 🐛 Problèmes Courants

### Le site ne s'affiche pas
**Solution** : Attendez 5-10 minutes après le premier déploiement

### Page 404
**Solution** : Vérifiez que GitHub Pages est activé dans Settings → Pages

### Images manquantes
**Solution** : Vérifiez que toutes les images sont dans `src/img/`

### CSS cassé
**Solution** : Videz le cache du navigateur (Ctrl + Shift + R)

---

## 📱 Tester Avant de Déployer

```bash
# 1. Build
npm run build

# 2. Prévisualiser localement
npm run preview

# 3. Ouvrir http://localhost:4173
```

---

## 🔄 Mettre à Jour le Site

```bash
# 1. Faites vos modifications
# 2. Testez localement
npm run dev

# 3. Déployez
npm run build
npm run deploy
```

Ou simplement :
```bash
./deploy.sh
```

---

## 🌐 Autres Options de Déploiement

### Vercel (Très Simple)
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez GitHub
3. Importez votre repo
4. Deploy ! ✨

**Avantages** : Déploiement automatique, très rapide

### Netlify
1. Allez sur [netlify.com](https://netlify.com)
2. "New site from Git"
3. Sélectionnez votre repo
4. Deploy ! ✨

**Avantages** : Interface simple, bon pour les formulaires

---

## ⚙️ Configuration

Le fichier `vite.config.js` est déjà configuré avec :
```javascript
base: '/joseph-portfolio-public/'
```

Si vous changez le nom du repo, modifiez cette ligne !

---

## 📊 Commandes Utiles

```bash
npm run dev       # Développement local
npm run build     # Build de production
npm run preview   # Prévisualiser le build
npm run deploy    # Déployer sur GitHub Pages
./deploy.sh       # Build + Deploy automatique
```

---

## 💡 Conseils

1. ✅ Testez toujours avec `npm run preview` avant de déployer
2. ✅ Commitez et pushez régulièrement sur GitHub
3. ✅ Activez GitHub Actions pour le déploiement automatique
4. ✅ Vérifiez le site sur mobile après déploiement

---

## 🎯 Prochaines Étapes

Après le déploiement :
1. 📧 Configurez EmailJS avec vos vraies clés
2. 📄 Mettez à jour votre CV dans `/public/`
3. 🔗 Partagez le lien sur LinkedIn
4. 📱 Testez sur différents appareils

Bon déploiement ! 🚀
