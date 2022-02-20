<template>
  <section id="product-details">
    <div class="container">
      <div class="row bg-light">
        <div class="col-auto">
          <b-img src="http://via.placeholder.com/400x500" alt="" rounded></b-img>
        </div>
        <div class="col-5 pl-6">
          <h2 class="text-uppercase font-weight-bold red-text">
            Product details
          </h2>

          <hr>
          
          <p>
            Cette citronnade est faite à partir de jus de citron bio, 
            de l'eau et juste ce qu'il faut de sucre de canne bio (33cl).
          </p>

          <hr>

          <base-cart-button />
        </div>
      </div>

      <div class="row mt-5">
        <h2>Vous en demandez encore ?</h2>

        <div v-for="i in 4" :key="i" class="col-3">
          <v-card>
            <v-img src="http://via.placeholder.com/400x400" height="250px"></v-img>
            <base-card-tag>Nouveau</base-card-tag>
          </v-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var _ = require('lodash')

import BaseCardTag from '../../components/BaseCardTag.vue'
import BaseCartButton from '../../components/BaseCartButton.vue'

export default {
  name: 'ProductDetails',
  components: {
    BaseCartButton,
    BaseCardTag
  },
  beforeMount() {
    // Go through all the inventory
    // and get the corresponding product
    // from the url
    var drinks = _.filter(this.$store.state.inventoryModule.drinks, ['slug', this.$route.params.slug])
    var products = [...drinks]
    console.log(products)
  }
}
</script>
