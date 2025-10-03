import { defineStore } from "pinia"

const useRestaurant = defineStore('restaurant', {
    state: () => ({
        showDetailsModal: false,
        showDeliveryModal: false,
        showFavoritesModal: false,
        showWebsiteMenu: false,
        currentProductDetails: {},
        
        availableDrinks: [],
        // availableMenus: [],
        availableMenus: [
            {
                name: 'Google',
                description: 'Google',
                price_post_tax: 15.4
            },
            {
                name: 'Google',
                description: 'Google',
                price_post_tax: 15.4
            },
            {
                name: 'Google',
                description: 'Google',
                price_post_tax: 15.4
            }
        ],

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
