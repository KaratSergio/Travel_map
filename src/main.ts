import './assets/tailwind.css'
import { router } from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { authService, TOKEN_KEY } from './components/api/authService'

import App from './App.vue'

const token = localStorage.getItem(TOKEN_KEY)

if (token) {
  authService.setToken(token)
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
