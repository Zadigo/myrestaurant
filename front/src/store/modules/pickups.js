var _ = require('lodash')

var pickupsModule = {
    namespaced: true,

    state: () => ({
        pickups: []
    }),

    mutations: {
        setPickups(state, payload) {
            state.products = payload
        }
    },

    getters: {
        noneCompleted(state) {
            return _.filter(state.pickups, ['completed', false])
        },

        noneCompleted(state) {
            return _.filter(state.pickups, ['completed', true])
        }        
    }
}

export default pickupsModule
