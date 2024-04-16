import { createRouter, createWebHistory } from 'vue-router'

import Prices from '../views/Prices.vue'
import Tracker from '../views/Tracker.vue'
import Calculator from '../views/Calculator.vue'

const routes = [
  {
    path: '/',
    name: 'Prices-page',
    component: Prices
  },
  {
    path: '/tracker',
    name: 'Tracker-page',
    component: Tracker
  },
  {
    path: '/calculator',
    name: 'Calculator-page',
    component: Calculator
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
