import Vue from 'vue'
import Router from 'vue-router'
import routesForHome from './home'

import store from '../store'

Vue.use(Router)

var routes = [
    ...routesForHome,

    {
        path: '/restaurant',
        name: 'restaurant',
        components: { default: () => import(/* webpackChunkName "restaurant" */ '../views/Restaurant.vue') }
    },
    {
        path: '/cashier',
        name: 'restaurant',
        components: { default: () => import(/* webpackChunkName "cashier" */ '../views/Cashier.vue') },
        meta: {
            requiresAuthentication: true,
            requiresCashier: true
        }
    },
    {
        path: '/payment',
        name: 'restaurant',
        components: { default: () => import(/* webpackChunkName "payment" */ '../views/Payment.vue') }
    },
    {
        path: '/statistics',
        name: 'statistics',
        components: { default: () => import(/* webpackChunkName "statistics" */ '../views/Statistics.vue') },
        meta: {
            requiresAuthentication: true,
            requiresAdmin: true
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
            if (requiresAdmin & store.getters['isAdmin']) {
                next()
            } 
    
            if (requiresCashier & store.getters['isCashier']) {
                next()
            }
        }

        next('login')
    } else {
        next()
    }
})

export default router
