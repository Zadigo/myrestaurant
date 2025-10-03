var _ = require('lodash')

var inventoryModule = {
    state: () => ({
        products: [],
        drinks: [],
        menus: []
    }),

    mutations: {
        setProducts(state, payload) {
            // Set all the available products
            // for sale in the restaurant
            state.products = payload
        },

        setDrinks(state, payload) {
            // Set all the available drinks for
            // sale in the restaurant
            state.drinks = payload
        },

        setMenus(state, payload) {
            // Set all available menus for
            // sale in the restaurant
            state.menus = payload
        }
    },

    getters: {
        getMenu(state) {
            return (slug) => {
                return _.find(state.menus, ['slug', slug])
            }
        },
        hotDrinks(state) {
            // Filter by hot drinks e.g. coffee
            return _.filter(state.drinks, ['is_hot_drink', true])
        },
        coldDrinks(state) {
            // Filter by hot drinks e.g. coffee
            return _.filter(state.drinks, ['is_hot_drink', false])
        },
        novelties(state) {
            // Returns a list of all the products that
            // are marked as new in the inventory
            var products = _.filter(state.products, ['highlight_as_new', true])
            var drinks = _.filter(state.drinks, ['highlight_as_new', true])
            var items = [...products, ...drinks]

            _.forEach(items, (item, i) => {
                item['id'] = i
            })
            
            return _.shuffle(items)
        }
    }
}

export default inventoryModule
