<template>
  <base-choices :choices="drinks">

    <template slot-scope="{ choice }">
      <v-img :src="choice.image" ></v-img>
    </template>

  </base-choices>
</template>

<script>
import { mapState } from 'vuex'
import BaseChoices from './BaseChoices.vue'

export default {
  name: 'Drinks',
  components: { BaseChoices },

  computed: {
    ...mapState({
      drinks: (state) => { return state.inventoryModule.drinks }
    })
  }
}
</script>
