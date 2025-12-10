import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import('../home/infrastructure/primary/HomePage.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: () =>
        import('../account/infrastructure/primary/AccountPage.vue'),
    }
  ],
})

export default router
