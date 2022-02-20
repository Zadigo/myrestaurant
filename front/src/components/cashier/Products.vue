<template>
  <base-modal :showDrawer="showDrawer">
    <template>
      <div class="items">
        <div v-for="product in products" :key="product.id" class="item">
          <a @click="addProduct(product)" class="action">
            <b-img :src="product.image|imageUrl" :width="300" />
            <div class="infos">
              <span class="me-3">{{ product.name }}</span>
              <span>{{ product.price_post_tax|euro }}</span>
            </div>
          </a>
        </div>
      </div>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from './BaseModal.vue'
import mixins from './mixins'

import { mapState } from 'vuex'

export default {
  name: 'Products',
  mixins: [mixins],
  components: { BaseModal },
  props: {
    showDrawer: {
      type: Boolean,
      default: false
    }
  },
  beforeMount() {
    this.$api.global.getProducts()
    .then((response) => {
      this.$store.commit('setProducts', response.data)
    })
    .catch((error) => {
      console.error(error)
    })
  },
  computed: {
    ...mapState({
      products: (state) => { return state.inventoryModule.products }
    })
  },
  methods: {
    addProduct(product) {
      // Add this drink to the current order
      this.$store.commit('cashRegisterModule/addItemToOrder', { key: 'products', item: product })
      this.$emit('addProduct', product)
      this.$emit('closeDialog')
    }
  }
}
</script>
