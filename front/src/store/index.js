import Vue from 'vue'
import Vuex from 'vuex'
import inventoryModule from './modules/inventory'
import pickupsModule from './modules/pickups'


Vue.use(Vuex)

var store = new Vuex.Store({
    state: () => ({
        
    }),

    modules: {
        inventoryModule,
        pickupsModule
    }
})

export default store
