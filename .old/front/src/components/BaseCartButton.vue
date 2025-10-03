<template>
  <v-btn @click="addToCart">
    <font-awesome-icon icon="cart" class="mr-2" />
    Ajouter au panier
  </v-btn>
</template>

<script>
export default {
  name: 'BaseCartButton',
  methods: {
    addToCart() {
      // pass
    }
  },
}
</script>
