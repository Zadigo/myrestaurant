var inventoryModule = {
    state: () => ({
        products: [],
        drinks: [],
        menus: []
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
        },

    }
}

export default inventoryModule
