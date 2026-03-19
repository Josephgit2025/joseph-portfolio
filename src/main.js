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
          primary: '#1976D2',
          secondary: '#42A5F5',
          surface: '#FFFFFF',
          background: '#F5F5F5',
        }
      },
      dark: {
        colors: {
          primary: '#42A5F5',
          secondary: '#1976D2',
          surface: '#1E1E1E',
          background: '#121212',
        }
      }
    }
  }
})

createApp(App).use(vuetify).mount('#app')