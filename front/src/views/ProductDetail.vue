<template>
  <div class="container">
    <!-- Tabs -->
    <dish-sides />

    <div class="col-sm-12 col-md-12">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Some detail
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            Another thing here
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <!-- <v-btn @click="addToCart" color="primary">
        Ajouter au panier
      </v-btn> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DishSides from '../components/DishSides.vue'

export default {
  name: 'ProductDetails',
  components: { DishSides },

  data() {
    return {
      currentItem: {}
    }
  },

  beforeMount() {
    this.currentItem = this.getMenu(this.$route.params.name)
  },

  computed: {
    ...mapGetters(['getMenu'])
  },

  methods: {
    addTocart() {
      alert('A')
    }
  }
}
</script>
