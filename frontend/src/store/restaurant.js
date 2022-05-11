import { defineStore } from "pinia"

const useRestaurant = defineStore('restaurant', {
    state: () => ({
        showDetailsModal: false,
        showDeliveryModal: false,
        showWebsiteMenu: false,
        restaurantMenus: []
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
