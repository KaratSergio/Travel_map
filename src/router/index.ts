import { createRouter, createWebHistory } from 'vue-router'

const GreetingPage = () => import('../views/GreetingView.vue')
const HomePage = () => import('../views/HomepageView.vue')
const AuthPage = () => import('../views/AuthView.vue')

const routes = [
  { path: '/', component: GreetingPage },
  { path: '/map', component: HomePage },
  { path: '/auth', component: AuthPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
