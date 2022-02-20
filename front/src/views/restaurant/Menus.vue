<template>
  <section class="restaurant-menus">

    <div class="row">
      <div class="col-12 py-5">
        <p class="text-muted">Filtrer par</p>
        <v-chip v-for="i in 5" :key="i" class="mr-2">
          Some text {{ i }}
        </v-chip>
      </div>

      <div v-for="(item, index) in items" :key="index" class="col-sm-12 col-md-4">
        <v-card :to="{ name: 'restaurant_menu', params: { name: item.slug } }">
          <v-card-title>{{ item.name }}</v-card-title>
          <v-img :src="item.image|imageUrl"></v-img>
        </v-card>
      </div>
    </div>

  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'RestaurantMenus',
  beforeMount() {
    // Get all the restaurant menus
    this.$api.global.getMenus()
    .then((response) => {
      var data = response.data
      this.$store.commit('setMenus', data)
      this.$session.set('menus', data)
    })
    .catch((error) => {
      console.error(error)
    })
  },
  computed: {
    ...mapState({
      items: (state) => { return state.inventoryModule.menus }
    })
  }
}
</script>
