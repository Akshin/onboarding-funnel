import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView/LandingView.vue'
import OnboardingView from '@/views/OnboardingView/OnboardingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
    },
    {
      path: '/',
      name: 'onboarding',
      component: OnboardingView,
    },
  ],
})

export default router
