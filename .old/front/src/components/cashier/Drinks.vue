<template>
  <base-modal :showDrawer="showDrawer">
    <template>
      <div class="items">
        <div v-for="drink in drinks" :key="drink.id" class="item">
          <a @click="addDrink(drink)" class="action">
            <b-img :src="drink.image|imageUrl" :width="200"></b-img>
            <div class="infos">
              <span class="me-3">{{ drink.flavor }}</span>
              <span>{{ drink.price_post_tax|euro }}</span>
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
  name: 'Drinks',
  mixins: [mixins],
  components: { BaseModal },
  props: {
    showDrawer: {
      type: Boolean,
      default: false
    }
  },
  beforeMount() {
    this.$api.global.getDrinks()
    .then((response) => {
      this.$store.commit('setDrinks', response.data)
    })
    .catch((error) => {
      console.error(error)
    })
  },
  computed: {
    ...mapState({
      drinks: (state) => { return state.inventoryModule.drinks }
    })
  },
  methods: {
    addDrink(drink) {
      // Add this drink to the current order
      this.$store.commit('cashRegisterModule/addDrinkToOrder', drink)
      this.$emit('addDrink', drink)
      this.$emit('closeDialog')
    }
  }
}
</script>
