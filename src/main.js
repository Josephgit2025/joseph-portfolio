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
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#667eea',
          secondary: '#764ba2',
          background: '#f5f5f5',
          surface: '#ffffff',
        }
      },
      dark: {
        colors: {
          primary: '#667eea',
          secondary: '#764ba2',
          background: '#0f0f0f',
          surface: '#1a1a1a',
        }
      }
    }
  }
})

createApp(App).use(vuetify).mount('#app')