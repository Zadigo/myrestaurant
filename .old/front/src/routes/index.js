import Vue from 'vue'
import Router from 'vue-router'
import routesForHome from './home'
import routesForAdmin from './admin'
import i18n from '../i18n'

// import store from '../store'

Vue.use(Router)

const routesRequiresHeading = ['restaurant']

var routes = [
    ...routesForHome,
    ...routesForAdmin,
    {
        path: '/tests',
        name: 'tests',
        component: () => import('../views/Tests.vue')
    },

    {
        path: '/:lang',
        component: {
            render: h => h('router-view')
        },
        children: [
            {
                path: 'restaurant',
                // component: () => import(/* webpackChunkName "restaurant" */ '../views/restaurant/Welcome.vue'),
                component: () => import(/* webpackChunkName "restaurant" */ '../components/restaurant/BaseWelcomeTemplate.vue'),
                props: route => ({ 
                    // Show the page heading only for the routes 
                    // that requires this to be shown
                    requiresHeading: routesRequiresHeading.includes(route.name) ? true : false,
                    requiresActionCart: route.name == 'restaurant_menus' ? true : false
                }),
                children: [
                    {
                        path: '',
                        name: 'restaurant',
                        components: { 
                            items: () => import(/* webpackChunkName "restaurant" */ '../views/restaurant/Introduction.vue')
                        }
                    },
                    {
                        // path: ':slug([a-z-]+)',
                        path: 'menus',
                        name: 'restaurant_menus',
                        components: {
                            items: () => import(/* webpackChunkName "restaurant" */ '../views/restaurant/Menus.vue')
                        }
                    },
                    {
                        path: 'menus/:name([a-z-]+)',
                        name: 'restaurant_menu',
                        components: {
                            items: () => import(/* webpackChunkName "restaurant" */ '../views/restaurant/MenuDetails.vue')
                        },
                        // meta: { requiresItem: 'menu' }
                    },
        
                    {
                        path: 'drinks',
                        name: 'drinks',
                        components: {
                            items: () => import(/* webpackChunkName "restaurant" */ '../views/restaurant/Drinks.vue')
                        }
                    },
                    {
                        path: 'product/:slug([a-z-]+)',
                        name: 'product_details',
                        components: {
                            items: () => import(/* webpackChunkName "restaurant" */ '../views/restaurant/ProductDetails.vue')
                        }
                    },
        
                    {
                        path: 'novelties',
                        name: 'novelties',
                        components: {
                            items: () => import(/* webpackChunkName "restaurant" */ '../views/restaurant/Novelties.vue')
                        }
                    },
                ]
            }
        ]
    },


    {
        path: '/payment',
        name: 'payment',
        components: { default: () => import(/* webpackChunkName "payment" */ '../views/restaurant/Payment.vue') }
    }
]

var router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior: () => { window.scrollTo(0, 0) }
})

router.beforeEach((to, from, next) => {
    var localeLanguage = to.params.lang
    i18n.locale = localeLanguage

    // var supportedLanguages = process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')

    // if (!supportedLanguages.includes(localeLanguage)) {
    //     return next('en')
    // }

    // if (i18n.locale !== localeLanguage) {
    //     i18n.locale = localeLanguage
    // }
    
    // if (to.meta.requiresAuthentication) {
    //     var requiresAdmin = to.meta.requiresAdmin
    //     var requiresCashier = to.meta.requiresCashier

    //     if (store.getters['isAuthenticated']) {

    //         if ((requiresAdmin & store.state.isAdmin) == 1) {
    //             next()
    //         } else if ((requiresCashier & store.state.isCashier) == 1) {
    //             next()
    //         } else {
    //             next('login')
    //         }
    //     }

    // } else {
    //     next()
    // }
    next()
})

export default router
