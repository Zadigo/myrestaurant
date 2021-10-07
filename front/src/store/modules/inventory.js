var _ = require('lodash')

var inventoryModule = {
    state: () => ({
        products: [],
        drinks: [
            { image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80' }
        ],
        menus: [
            { slug: 'menu-master-montagnard', lead: 'Menu Master Montagnard', description: "Une viande de bœuf 150g de race Charolaise et origine France,  deux tranches de Raclette au lait entier de Franche Comté, de la sauce à l'échalotte,  des oignons fondants, des cornichons, du bacon, et un pain brioché moelleux.", image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80' }
        ]
    }),

    mutations: {
        setProducts(state, payload) {
            state.products = payload
        },

        setDrinks(state, payload) {
            state.products = payload
        },

        setMenus(state, payload) {
            state.products = payload
        }
    },

    getters: {
        getMenu(state) {
            return (slug) => {
                return _.find(state.menus, ['slug', slug])
            }
        }
    }
}

export default inventoryModule
