import { ref } from 'vue'

const STORAGE_KEY = 'portfolio-theme'
const root = document.documentElement

// index.html already applied the saved (or system) theme before first paint
const isDark = ref(!root.classList.contains('light-mode'))

const applyTheme = (dark) => {
  root.classList.toggle('dark-mode', dark)
  root.classList.toggle('light-mode', !dark)
  root.style.colorScheme = dark ? 'dark' : 'light'
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0a0b0d' : '#f6f7f4')
}

const readSaved = () => {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

// Follow system changes as long as the visitor hasn't picked a theme
window.matchMedia?.('(prefers-color-scheme: light)').addEventListener?.('change', (e) => {
  if (readSaved()) return
  isDark.value = !e.matches
  applyTheme(isDark.value)
})

applyTheme(isDark.value)

export const useTheme = () => {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
    try {
      localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
    } catch {
      /* storage unavailable (private mode…) — theme still applies for this visit */
    }
  }

  return { isDark, toggleTheme }
}
