import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import Astro Web Components
import { defineCustomElements } from '@astrouxds/astro-web-components/loader'

// Define Astro Web Components
defineCustomElements()

// Create and mount Vue app
const app = createApp(App)
app.mount('#app')
