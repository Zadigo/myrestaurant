<template>
  <div class="container">
    <div id="header">
      <!-- <b-img :src="currentItem.image|imageUrl" :alt="currentItem.slug" rounded="top" fluid /> -->
      <b-img src="http://via.placeholder.com/1200x600" :alt="currentItem.slug" rounded="top" fluid />

      <v-btn id="add-to-cart" @click="addTocart(currrentItem.id)">
        {{ $t('Add to cart') }}
      </v-btn>
    </div>

    <!-- Selection Tabs -->
    <side-dishes class="my-3" />

    <!-- Details -->
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Ingredients
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          Another thing here
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SideDishes from '../../components/menus/SideDishes.vue'

export default {
  name: 'MenuDetails',
  components: { SideDishes },

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
      // pass
    }
  }
}
</script>

<style scoped>
#header {
  position: relative;
}
#header #add-to-cart {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
