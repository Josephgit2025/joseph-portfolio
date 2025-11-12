# Guide de Développement - Portfolio

## 🎯 Ajouter un Nouveau Composant

### 1. Créer le fichier du composant

Créez un nouveau fichier dans `src/components/`, par exemple `NewSection.vue` :

```vue
<template>
  <v-container id="new-section" class="section-spacing fade-in">
    <v-card flat class="glass-card pa-8 rounded-xl" elevation="0">
      <h3 class="section-title">
        <v-icon color="primary" class="mr-3">mdi-icon-name</v-icon>
        Titre de la Section
      </h3>
      
      <!-- Votre contenu ici -->
      
    </v-card>
  </v-container>
</template>

<script setup>
// Props si nécessaire
const props = defineProps({
  data: {
    type: Array,
    required: false
  }
});

// Logique du composant
</script>

<style scoped>
/* Styles spécifiques au composant */
.section-spacing {
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  text-align: center;
  color: #2c3e50;
}

.glass-card {
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
```

### 2. Ajouter les données (si nécessaire)

Dans `src/data/portfolio.js` :

```javascript
export const newSectionData = [
  {
    id: 1,
    title: "Item 1",
    description: "Description..."
  },
  // ...
];
```

### 3. Intégrer dans App.vue

```vue
<template>
  <v-app>
    <!-- ... autres composants ... -->
    
    <v-main class="main-bg">
      <!-- ... autres sections ... -->
      
      <!-- NOUVELLE SECTION -->
      <NewSection :data="newSectionData" />
      
    </v-main>
  </v-app>
</template>

<script setup>
// Importer le composant
import NewSection from "@/components/NewSection.vue";

// Importer les données
import { newSectionData } from "@/data/portfolio";
</script>
```

### 4. Ajouter au menu de navigation

Dans `src/data/portfolio.js` :

```javascript
export const menuItems = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "New Section", href: "#new-section" }, // Nouveau !
  // ...
];
```

## 🎨 Conventions de Style

### Classes CSS Communes

```css
/* Espacements */
.section-spacing { padding: 80px 0; }

/* Titres */
.section-title { /* ... */ }

/* Cartes */
.glass-card { /* effet de verre */ }

/* Animations */
.fade-in { /* animation d'entrée */ }

/* Boutons */
.btn-primary { /* bouton primaire avec gradient */ }
.btn-secondary { /* bouton secondaire outlined */ }
```

### Palette de Couleurs

```css
/* Gradient principal */
linear-gradient(135deg, #667eea 0%, #764ba2 100%)

/* Couleurs de texte */
--text-primary: #2c3e50
--text-secondary: #555
--text-muted: #777
--text-light: #999

/* Background */
--bg-gradient: linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)
```

## 📐 Structure de Composant Recommandée

```vue
<template>
  <!-- Container principal -->
  <v-container id="section-id" class="section-spacing fade-in">
    <v-card flat class="glass-card pa-8 rounded-xl">
      
      <!-- Titre de section -->
      <h3 class="section-title">
        <v-icon color="primary">mdi-icon</v-icon>
        Titre
      </h3>
      
      <!-- Contenu principal -->
      <v-row>
        <v-col>
          <!-- Votre contenu -->
        </v-col>
      </v-row>
      
    </v-card>
  </v-container>
</template>

<script setup>
// 1. Imports
import { ref, computed } from 'vue';

// 2. Props
const props = defineProps({
  // ...
});

// 3. State local
const state = ref(null);

// 4. Computed
const computed = computed(() => {});

// 5. Methods
const method = () => {};

// 6. Emits
const emit = defineEmits(['event']);
</script>

<style scoped>
/* Styles du composant */
</style>
```

## 🔄 Props et Events

### Passer des Props

```vue
<!-- Parent -->
<ChildComponent 
  :data="myData" 
  :count="10" 
  title="Mon Titre" 
/>

<!-- Child -->
<script setup>
defineProps({
  data: Array,
  count: Number,
  title: String
});
</script>
```

### Émettre des Events

```vue
<!-- Child -->
<script setup>
const emit = defineEmits(['update', 'delete']);

const handleClick = () => {
  emit('update', { id: 1 });
};
</script>

<!-- Parent -->
<ChildComponent @update="handleUpdate" />
```

## 🎭 Animations

Utiliser les animations définies dans `animations.css` :

```vue
<div class="fade-in">
  <!-- Le contenu apparaîtra avec animation -->
</div>
```

Animations disponibles :
- `fade-in` : Apparition en fondu
- `fadeInUp` : Montée avec fondu
- `fadeInDown` : Descente avec fondu
- `fadeInRight` : Entrée depuis la droite
- `bounce` : Rebond
- `pulse` : Pulsation

## 🌐 Responsive Design

```vue
<v-row>
  <!-- Mobile : 12 colonnes, Desktop : 6 colonnes -->
  <v-col cols="12" md="6">
    Contenu
  </v-col>
</v-row>
```

Breakpoints Vuetify :
- `xs` : < 600px
- `sm` : 600px - 960px
- `md` : 960px - 1280px
- `lg` : 1280px - 1920px
- `xl` : > 1920px

## 📱 Classes d'Affichage

```vue
<!-- Masquer sur mobile -->
<div class="d-none d-md-block">Visible sur desktop</div>

<!-- Afficher uniquement sur mobile -->
<div class="d-md-none">Visible sur mobile</div>

<!-- Flex responsive -->
<div class="d-flex d-md-block">...</div>
```

## 🔍 Debugging

```vue
<script setup>
import { watch } from 'vue';

// Observer les changements
watch(() => props.data, (newVal) => {
  console.log('Data changed:', newVal);
});

// Log au montage
onMounted(() => {
  console.log('Component mounted');
});
</script>
```

## 📦 Bonnes Pratiques

1. **Un composant = Une responsabilité**
2. **Nommer les composants en PascalCase**
3. **Utiliser des props typées**
4. **Éviter la logique complexe dans les templates**
5. **Extraire les constantes dans `data/portfolio.js`**
6. **Commenter les sections complexes**
7. **Tester le responsive sur différentes tailles**
8. **Optimiser les images avant import**

## 🚀 Performance

```vue
<!-- Utiliser v-show pour les toggles fréquents -->
<div v-show="isVisible">...</div>

<!-- Utiliser v-if pour le rendu conditionnel -->
<div v-if="shouldRender">...</div>

<!-- Lazy loading des images -->
<v-img :src="image" lazy-src="placeholder.jpg" />

<!-- Liste avec key unique -->
<div v-for="item in items" :key="item.id">
  {{ item.name }}
</div>
```
