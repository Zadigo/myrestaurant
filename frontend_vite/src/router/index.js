import { useRestaurant } from 'src/stores/restaurant'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: async () => ({ top: 0, left: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/welcome',
      name: 'welcome_view',
      component: async () => import('pages/restaurant/WelcomePage.vue')
    },
    {
      path: '/restaurant/menus',
      name: 'menus_view',
      component: async () => import('pages/restaurant/MenusPage.vue')
    },
    {
      path: '/restaurant/desserts',
      name: 'desserts_view',
      component: async () => import('pages/restaurant/MenusPage.vue')
    },
    {
      path: '/faq',
      name: 'faq_view',
      component: async () => import('pages/restaurant/MenusPage.vue')
    },
    {
      path: '/payment',
      name: 'payment_view',
      component: async () => import('pages/restaurant/PaymentPage.vue')
    },
    {
      path: '/customer-order/:reference([a-zA-Z0-9-]+)',
      name: 'customer_order_view',
      component: async () => import('pages/restaurant/CustomerOrderPage.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  useRestaurant()
  // const requiresFullPage = ['payment_view', 'customer_order_view']
  // const store = useRestaurant()

  // if (requiresFullPage.includes(to.name)) {
  //   store.getGenericSite()
  // } else {
  //   store.getBaseSite()
  // }

  next()
})

export default router
