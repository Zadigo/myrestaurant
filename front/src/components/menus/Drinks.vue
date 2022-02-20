<template>
  <base-choices :choices="drinks">

    <template slot-scope="{ choice }">
      <v-img :src="choice.image|imageUrl" ></v-img>
    </template>

  </base-choices>
</template>

<script>
import { mapState } from 'vuex'
import BaseChoices from '../BaseChoices.vue'

export default {
  name: 'Drinks',
  components: { BaseChoices },

  beforeMount() {
    // Get all available drinks
    this.$api.global.getDrinks()
    .then((response) => {
      var drinks = response.data
      this.$store.commit('setDrinks', drinks)
      this.$session.set('drinks', drinks)
    })
    .catch((error) => {
      console.error(error)
    })
  },
  
  computed: {
    ...mapState({
      drinks: (state) => { return state.inventoryModule.drinks }
    })
  }
}
</script>
