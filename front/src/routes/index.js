import Vue from 'vue'
import Router from 'vue-router'
import routesForHome from './home'

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
    }
]

var router = new Router({
    mode: 'history',
    routes: routes
})

export default router
