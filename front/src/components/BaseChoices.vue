<template>
  <div class="row">
    <div v-for="(choice, index) in choices" :key="index" class="col-2">

      <v-card @click="addToCart(choice)" :elevation="1">
        <slot :choice="choice"></slot>
      </v-card>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseChoices',
  props: ['choices'],
  data() {
    return {
      selected: false
    }
  },
  methods: {
    addToCart(choice) {
      this.selected = !this.selected
      this.$store.commit('cart/updateMenu', choice)
    }
  }
}
</script>
