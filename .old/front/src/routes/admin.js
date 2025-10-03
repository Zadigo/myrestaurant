var routesForAdmin = [
    {
        path: '/admin',
        component: {
            render(c) { return c('router-view') }
        },
        children: [
            {
                path: 'cashier',
                name: 'cashier',
                components: { default: () => import(/* webpackChunkName "cashier" */ '../views/admin/Cashier.vue') },
                meta: {
                    requiresAuthentication: true,
                    requiresCashier: true,
                    requiresAdmin: false
                },
                children: [
                    {
                        path: 'customer-orders',
                        name: 'orders',
                        components: { default: () => import(/* webpackChunkName "cashier" */ '../views/admin/Orders.vue') },
                        meta: {
                            requiresAuthentication: true,
                            requiresCashier: true,
                            requiresAdmin: false
                        }
                    }
                ]
            },
            {
                path: 'statistics',
                name: 'statistics',
                components: { default: () => import(/* webpackChunkName "statistics" */ '../views/admin/Statistics.vue') },
                meta: {
                    requiresAuthentication: true,
                    requiresAdmin: true,
                    requiresCashier: false
                }
            }
        ]
    }
]

export default routesForAdmin
