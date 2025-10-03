import { defineStore } from "pinia"

const useRestaurant = defineStore('restaurant', {
    state: () => ({
        showDetailsModal: false,
        showDeliveryModal: false,
        showFavoritesModal: false,
        showWebsiteMenu: false,
        currentProductDetails: {},
        
        availableDrinks: [],
        availableMenus: [
            {
                name: 'Braisé de poulet',
                description: 'Google',
                price_post_tax: 10.4
            },
            {
                name: 'Poulet Gouffu',
                description: 'Google',
                price_post_tax: 25.4
            },
            {
                name: 'Riz de pois rouge',
                description: 'Google',
                price_post_tax: 45.4
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
