import { ref, watch } from 'vue'

const isDark = ref(false)

// Charger la préférence sauvegardée
const loadThemePreference = () => {
  const saved = localStorage.getItem('portfolio-theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    // Utiliser la préférence système par défaut
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

// Sauvegarder quand le thème change
const saveThemePreference = () => {
  localStorage.setItem('portfolio-theme', isDark.value ? 'dark' : 'light')
}

export const useTheme = () => {
  // Charger au premier appel
  if (!localStorage.getItem('portfolio-theme') && !isDark.value) {
    loadThemePreference()
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    saveThemePreference()
  }

  return {
    isDark,
    toggleTheme,
    loadThemePreference
  }
}
