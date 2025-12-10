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
      path: '/transactions',
      name: 'transactions',
      component: () =>
        import('../transactions/infrastructure/primary/TransactionsPage.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () =>
        import('../profile/infrastructure/primary/ProfilePage.vue'),
    },
  ],
})

export default router
