import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../../src/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../../src/views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../../src/views/PortfolioView.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('../../src/views/ServicesView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../../src/views/ContactView.vue')
    },
    {
      path: '/testcomponent',
      name: 'TestComponent',
      component: () => import('../../src/components/TestComp.vue')
    }
  ]
})

export default router
