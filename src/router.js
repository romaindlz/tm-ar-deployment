import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Calibration from './components/Calibration.vue'
import Feedback from './components/Feedback.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calibration',
    name: 'Calibration',
    component: Calibration
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
