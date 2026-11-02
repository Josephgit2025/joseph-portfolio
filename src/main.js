import { createApp } from 'vue'
import App from './App.vue'

// Vuetify (components are auto-imported by vite-plugin-vuetify)
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import '@/assets/main.css'
import { vReveal } from '@/directives/reveal'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0a0b0d',
          surface: '#121417',
          primary: '#00e5a0',
          'on-primary': '#03140d',
          secondary: '#7f8783',
          success: '#00e5a0',
          info: '#5cc8ff',
          error: '#ff6b6b',
        },
      },
      light: {
        dark: false,
        colors: {
          background: '#f6f7f4',
          surface: '#ffffff',
          primary: '#00875c',
          'on-primary': '#ffffff',
          secondary: '#66706b',
          success: '#00875c',
          info: '#0b6fa4',
          error: '#c62828',
        },
      },
    },
  },
})

createApp(App).use(vuetify).directive('reveal', vReveal).mount('#app')
