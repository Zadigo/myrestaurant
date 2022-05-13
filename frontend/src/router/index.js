import { useRestaurant } from '@/store/restaurant'
import { loadView } from '@/utils'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/welcome',
            name: 'welcome_view',
            component: loadView('restaurant/WelcomeView')
        },
        {
            path: '/restaurant/menus',
            name: 'menus_view',
            component: loadView('restaurant/MenusView')
        },
        {
            path: '/restaurant/desserts',
            name: 'desserts_view',
            component: loadView('restaurant/MenusView')
        },
        {
            path: '/about',
            name: 'about_view',
            component: loadView('restaurant/MenusView')
        },
        {
            path: '/join-us',
            name: 'join_us_view',
            component: loadView('restaurant/MenusView')
        },
        {
            path: '/contact-us',
            name: 'contact_us_view',
            component: loadView('restaurant/MenusView')
        },
        {
            path: '/faq',
            name: 'faq_view',
            component: loadView('restaurant/MenusView')
        },
        {
            path: '/payment',
            name: 'payment_view',
            component: loadView('restaurant/PaymentView')
        },
        {
            path: '/customer-order/:reference([a-zA-Z0-9-]+)',
            name: 'customer_order_view',
            component: loadView('restaurant/CustomerOrderView')
        }
    ]
})

router.beforeEach((to, from, next) => {
    var requiresFullPage = ['payment_view', 'customer_order_view']
    var store = useRestaurant()
    
    if (requiresFullPage.includes(to.name)) {
        store.getGenericSite()
    } else {
        store.getBaseSite()
    }

    next()
})

export default router
