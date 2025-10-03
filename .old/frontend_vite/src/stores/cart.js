import { defineStore } from 'pinia'

const useCart = defineStore('cart', {
  state: () => ({
    products: [
      {
        id: 1,
        product: {
          name: 'GOogle'
        }
      }
    ]
  }),
  getters: {
    hasProducts () {
      return this.products.length > 0
    }
  }
})

export {
  useCart
}
