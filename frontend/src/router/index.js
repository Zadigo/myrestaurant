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
            path: '/restaurant-menu/menus',
            name: 'menus_view',
            component: loadView('restaurant/MenusView')
        }
    ]
})

export default router
