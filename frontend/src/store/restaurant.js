import { defineStore } from "pinia"

const useRestaurant = defineStore('restaurant', {
    state: () => ({
        showDetailsModal: false,
        showDeliveryModal: false,
        showFavoritesModal: false,
        showWebsiteMenu: false,
        currentProductDetails: {},
        
        availableDrinks: [],
        availableMenus: [],

        currentOrder: {}
    }),
    actions: {
        toggleModal() {
            this.showDetailsModal = !this.showDetailsModal
        }
    },
    getters: {
        
    }
})


export {
    useRestaurant
}
