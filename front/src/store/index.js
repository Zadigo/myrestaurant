import Vue from 'vue'
import Vuex from 'vuex'
import inventoryModule from './modules/inventory'
import pickupsModule from './modules/pickups'
import cashRegisterModule from './modules/cashRegister'

Vue.use(Vuex)

var store = new Vuex.Store({
    state: () => ({
        authenticated: true,
        isAdmin: true,
        isCashier: true
    }),

    getters: {
        isAuthenticated (state) {
            return state.authenticated
        }
    },

    modules: {
        inventoryModule,
        pickupsModule,
        cashRegisterModule  
    }
})

export default store
