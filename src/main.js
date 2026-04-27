// main.js
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Global Styles
import '@/assets/animations.css'
import '@/assets/main.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#00e5a0',
          secondary: '#764ba2',
          background: '#f5f5f5',
          surface: '#ffffff',
        }
      },
      dark: {
        colors: {
          primary: '#00e5a0',
          secondary: '#764ba2',
          background: '#0a0a0a',
          surface: '#111111',
        }
      }
    }
  }
})

createApp(App).use(vuetify).mount('#app')