import Vue from 'vue'
import Router from 'vue-router'
import routesForHome from './home'

import store from '../store'

Vue.use(Router)

var routes = [
    ...routesForHome,

    {
        path: '/tests',
        name: 'tests',
        component: () => import('../views/Tests.vue')
    },

    {
        path: '/restaurant',
        component: () => import(/* webpackChunkName "restaurant" */ '../views/Welcome.vue'),
        props: route => ({ 
            requiresHeading: route.path == '/restaurant' ? true : false,
            requiresActionCart: route.name == 'restaurant_menu' ? true : false
        }),
        children: [
            {
                path: '',
                name: 'restaurant',
                components: { 
                    items: () => import(/* webpackChunkName "restaurant" */ '../views/Introduction.vue')
                }
            },
            {
                path: ':slug([a-z-]+)',
                name: 'restaurant_menus',
                components: {
                    items: () => import(/* webpackChunkName "restaurant" */ '../views/RestaurantMenus.vue')
                }
            },
            {
                path: ':slug([a-z-]+)/:name([a-z-]+)',
                name: 'restaurant_menu',
                components: {
                    items: () => import(/* webpackChunkName "restaurant" */ '../views/ProductDetail.vue')
                },
                meta: { requiresItem: 'menu' }
            }
        ]
    },
    {
        path: '/cashier',
        name: 'cashier',
        components: { default: () => import(/* webpackChunkName "cashier" */ '../views/Cashier.vue') },
        meta: {
            requiresAuthentication: true,
            requiresCashier: true,
            requiresAdmin: false
        }
    },
    {
        path: '/payment',
        name: 'payment',
        components: { default: () => import(/* webpackChunkName "payment" */ '../views/Payment.vue') }
    },
    {
        path: '/statistics',
        name: 'statistics',
        components: { default: () => import(/* webpackChunkName "statistics" */ '../views/Statistics.vue') },
        meta: {
            requiresAuthentication: true,
            requiresAdmin: true,
            requiresCashier: false
        }
    }
]

var router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior: () => { window.scroll(0, 0) }
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuthentication) {
        var requiresAdmin = to.meta.requiresAdmin
        var requiresCashier = to.meta.requiresCashier

        if (store.getters['isAuthenticated']) {

            if ((requiresAdmin & store.state.isAdmin) == 1) {
                next()
            } else if ((requiresCashier & store.state.isCashier) == 1) {
                next()
            } else {
                next('login')
            }
        }

    } else {
        next()
    }
})

export default router
