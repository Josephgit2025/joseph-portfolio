import { ref, watch } from 'vue'

const isDark = ref(false)

// Charger et appliquer la préférence sauvegardée
const loadThemePreference = () => {
  const saved = localStorage.getItem('portfolio-theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    // Utiliser la préférence système par défaut
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
}

// Appliquer le thème au DOM et à Vuetify
const applyTheme = () => {
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark-mode')
    html.classList.remove('light-mode')
  } else {
    html.classList.add('light-mode')
    html.classList.remove('dark-mode')
  }
  localStorage.setItem('portfolio-theme', isDark.value ? 'dark' : 'light')
  // Forcer le re-render de Vue
  if (html.style) {
    html.style.colorScheme = isDark.value ? 'dark' : 'light'
  }
}

export const useTheme = () => {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  // Watch pour les changements - applique le thème quand isDark change
  watch(isDark, () => applyTheme(), { immediate: true })

  return {
    isDark,
    toggleTheme,
    loadThemePreference
  }
}

