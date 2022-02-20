var _ = require('lodash')

import { getLastId } from '../../utils'


var cashRegisterSettingsModule = {
    namespaced: true,
    state: () => ({
        settings: {
            sessionOpened: false
        }
    })
}

var cashRegisterModule = {
    namespaced: true,
    state: () => ({
        currentOrder: {
            menus: [],
            products: [],
            drinks: []
        },
        pausedOrders: []
    }),
    mutations: {
        addDrinkToOrder(state, payload) {
            // Set an item in the current basket
            // for a customer order
            state.currentOrder.drinks.push(payload)
        },
        addItemToOrder(state, payload) {
            // Set an item in the current basket
            // for a customer order
            state.currentOrder[payload.key].push(payload.item)
        },
        clearOrder(state) {
            // Clear the current inputs
            state.currentOrder = {
                menus: [],
                products: [],
                drinks: []
            }
        },
        putAside(state) {
            // Put a current order aside for later use. A typical
            // case would be to retrieve the items of a past order
            var lastId = getLastId(state.pausedOrders)
            if (state.currentOrder) {
                state.pausedOrders.push({ id: lastId, savedItems: state.currentOrder })
            } else {
                // Send a notification that we can put aside
                // a current order that is empty
            }
        }
    },
    getters: {
        hasCurrentOrder(state) {
            // Checks if there is a current order
            // being typed
            var truthArray = []
            _.forEach(Object.keys(state.currentOrder), (key) => {
                var result = state.currentOrder[key].length > 0
                truthArray.push(result)
            })
            return _.some(truthArray, (x) => { return x == true })
        },
        orderTotal(state) {
            // Dynamically get the total of the items
            // added in the cart
            var total = 0
            _.forEach(Object.keys(state.currentOrder), (key) => {
                _.forEach(state.currentOrder[key], (item) => {
                    total += parseFloat(item.price_post_tax)
                })
            })
            return total
        } 
    },
    modules: {
        cashRegisterSettingsModule
    }
}

export default cashRegisterModule
